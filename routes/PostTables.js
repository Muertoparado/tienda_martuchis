import {Router} from 'express';
import validacionTipoDoc from '../middleware/validacionTipoDoc.js'
import validacionValoracion from '../middleware/validacionValoracion.js';
import validacionUsuario from '../middleware/validacionUsuario.js';
import validacionUbicacion from '../middleware/validacionUbicacion.js';
import validacionPais from '../middleware/validacionPais.js';
import validacionDepartamento from '../middleware/validacionDepartamento.js';
import validacionCiudad from '../middleware/validacionCiudad.js';
import validacionEstado from '../middleware/validacionEstado.js';
import validacionEnvio from '../middleware/validacionEnvio.js';
import validacionVenta from '../middleware/validacionVenta.js';
import validacionFactura from '../middleware/validacionFactura.js';
import validacionProducto from '../middleware/validacionProducto.js';
import validacionCategoria from '../middleware/validacionCategoria.js';
import mysql from 'mysql2';
import { SignJWT, jwtVerify } from "jose";




let con= undefined;
const app = Router();

app.use((req, res, next)=>{
    let myConfig=JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig);
    next();
});

app.get("/", async (req,res)=>{
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

/* app.post('/',async (req,res)=>{
    const {authorization}=req.headers;
    if(!authorization) return res.status(401).send({message:"error :("});
    try{
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        console.log(jwtData);
        res.send(jwtData);
    }catch(error){
        res.status(401).send({message:"error tiempo :("});
    }
}); */

app.post('/tipodoc/add', validacionTipoDoc, async (req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
    const {tip_id,tip_nombre,tip_abreviatura}=req.body
    const datos={tip_id,tip_nombre,tip_abreviatura};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO tipo_documento SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post tipo documento");
    res.send(JSON.stringify(data));
    console.log(data);
    })
    } catch (error) {
        res.status(401).send({ message: "Token authentication failed :(" });
    }
});
    

app.post('/valoracion/add', validacionValoracion, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {val_id,val_descripcion,val_estrellas,fk_id_usuario }=req.body
    const datos={val_id,val_descripcion,val_estrellas,fk_id_usuario};
    console.log(datos);

    con.query(/*sql */ `INSERT INTO valoracion SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post tipo documento");
    res.send(JSON.stringify(data));
    console.log(data);
    });
    }catch (error) {
        res.status(401).send({ message: "Token authentication failed :(" });
    }
    
});

app.post('/usuario/add', validacionUsuario, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    const {usu_id,usu_nombre,usu_apellido,usu_telefono,usu_direccion,usu_email,fk_id_tip_documento,fk_id_envio}=req.body
    const datos={usu_id,usu_nombre,usu_apellido,usu_telefono,usu_direccion,usu_email,fk_id_tip_documento,fk_id_envio};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO usuario SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post usuario");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
    
});

app.post('/ubicacion/add', validacionUbicacion, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {ubi_id,fk_ciudad_id,fk_usu_id,fk_env_id}=req.body
    const datos={ubi_id,fk_ciudad_id,fk_usu_id,fk_env_id};
    console.log(datos);

    con.query(/*sql */ `INSERT INTO ubicacion SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post ubicacion");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
});

app.post('/pais/add', validacionPais, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {pa_id,pa_nombre,pa_abreviatura}=req.body
    const datos={pa_id,pa_nombre,pa_abreviatura};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO pais SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post pais");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
    
});

app.post('/dep/add', validacionDepartamento, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {dep_id,dep_nombre,dep_abreviatura,fk_pais_id}=req.body
    const datos={dep_id,dep_nombre,dep_abreviatura,fk_pais_id};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO departamento SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post departamento");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
    
});

app.post('/ciudad/add', validacionCiudad, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {ci_id,ci_nombre,ci_abreviatura,fk_departamento}=req.body
    const datos={ci_id,ci_nombre,ci_abreviatura,fk_departamento};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO ciudad SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post ciudad");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
    
});

app.post('/estado/add', validacionEstado, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {est_id,est_nombre}=req.body
    const datos={est_id,est_nombre};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO estado SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post estado");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}   
});

app.post('/envio/add', validacionEnvio, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {env_id,fk_env_estado}=req.body
    const datos={env_id,fk_env_estado};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO envio SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post envio");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}  
});

app.post('/venta/add', validacionVenta, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {ven_id, fk_env_id,venta_hora,fk_factura_id}=req.body
    const datos={ven_id, fk_env_id,venta_hora,fk_factura_id};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO venta SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post venta");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}    
});

app.post('/factura/add', validacionFactura, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {fac_id}=req.body
    const datos={fac_id};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO factura SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post factura");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}  
    
});

app.post('/producto/add', validacionProducto, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {prod_id,prod_nombre, prod_descripcion,prod_cantidad,fk_categoria_id,prod_imagen}=req.body
    const datos={prod_id,prod_nombre, prod_descripcion,prod_cantidad,fk_categoria_id,prod_imagen};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO producto SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post Producto");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}  
    
});

app.post('/categoria/add', validacionCategoria, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {cat_id,cat_nombre}=req.body
    const datos={cat_id,cat_nombre};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO categoria SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post categoria");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
    
});


export default app;