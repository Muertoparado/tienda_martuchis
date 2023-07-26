import {Router} from 'express';
import { SignJWT, jwtVerify } from "jose";
import validacionProducto from '../middleware/validacionProducto.js';
import mysql from 'mysql2';

let con= undefined;
const app2 = Router();


app2.use((req, res, next)=>{
    let myConfig=JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig);
    next();
});

app2.get("/", async (req,res)=>{
    let json=JSON.stringify(req.body)

    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({json});
    
    const jwt = await jwtconstructor
    .setProtectedHeader({alg:"HS256",typ:"JWT"})
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    res.cookie('data',jwt,{httpOnly: true});
    console.log(`data: ${jwt}`);
    res.send(({jwt}));
});

app2.get('/productos/:id?', async(req, res) => {
    const id = req.params.id;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
        try {
            const encoder = new TextEncoder();
            const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);

    const sqlQuery = (id)
        ? [`SELECT * FROM producto WHERE prod_id = ? ORDER BY prod_nombre`, id]
        : [`SELECT * FROM producto ORDER BY prod_nombre`];

    con.query(...sqlQuery, (err, data, fil) => {
        if (err) {
            console.error("Error al ejecutar la consulta: ", err);
            res.status(500).send("Error al ejecutar la consulta");
            return;
        }

        console.log("GET PRODUCTOS");
        res.send(JSON.stringify(data));
        console.log(data);
    });
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});

app2.get('/envio/:id?', async(req, res) => {
    const id = req.params.id; 
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

        try {
            const encoder = new TextEncoder();
            const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);

    const sqlQuery = (id)
        ? [/*sql */`SELECT u.fk_usu_id, u.fk_ciudad_id FROM ubicacion AS u WHERE fk_env_id = ?`, id]
        : [/*sql */`SELECT u.fk_usu_id, u.fk_ciudad_id FROM ubicacion AS u`];

    con.query(...sqlQuery, (err, data, fil) => {
        if (err) {
            console.error("Error al ejecutar la consulta: ", err);
            res.status(500).send("Error al ejecutar la consulta");
            return;
        }

        console.log("GET ID PEDIDO ESPECIFICO");
        res.send(JSON.stringify(data));
        console.log(data);
    });
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});
app2.get('/cantidad/:id', async(req,res)=>{
    const { id } = req.params;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

        try {
            const encoder = new TextEncoder();
            const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
    con.query(/*sql */ `SELECT p.prod_id, p.prod_nombre, p.prod_cantidad  FROM producto AS p  WHERE p.prod_id=?
    `,[id], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("GET cantidad por id");
    res.send(JSON.stringify(data));
    console.log(data);
})
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}  
});

app2.put('/put/producto/:id', async(req, res) => {
    const { id } = req.params; 
    const { prod_cantidad } = req.body;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

        try {
            const encoder = new TextEncoder();
            const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);

    if (typeof prod_cantidad !== 'number') {
        res.status(400).send({ message: "La cantidad del producto debe ser un número válido" });
        return;
    }

    con.query('UPDATE producto SET prod_cantidad = ? WHERE prod_id = ?', [prod_cantidad, id], (err, result) => {
        if (err) {
            console.error("Error al ejecutar la consulta de actualización: ", err);
            res.status(500).send("Error al ejecutar la consulta de actualización");
            return;
        }

        if (result.affectedRows === 0) {
            res.status(404).send({ message: "El producto con el ID especificado no fue encontrado" });
            return;
        }

        console.log("Producto actualizado exitosamente");
        res.send({ message: "Producto actualizado exitosamente" });
    });
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});

app2.get('/estadoenvio/:id', async(req,res)=>{
    const { id } = req.params;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

        try {
            const encoder = new TextEncoder();
            const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
    con.query(/*sql */ `SELECT e.env_id, e.fk_env_estado, est.est_nombre
    FROM envio AS e
    INNER JOIN ubicacion AS u ON e.env_id = u.fk_env_id
    INNER JOIN estado AS est ON e.fk_env_estado = est.est_id
    INNER JOIN usuario AS usu ON u.fk_usu_id = usu.usu_id
    WHERE usu.usu_id=?
    `,[id], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("GET estado envio id usuario");
    res.send(JSON.stringify(data));
    console.log(data);
})
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
});

export default app2;