import {Router} from 'express';
import mysql from 'mysql2';

let con= undefined;
const app2 = Router();


app2.use((req, res, next)=>{
    let myConfig=JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig);
    next();
});

app2.get('/productos/:id?', (req, res) => {
    const id = req.params.id; // Extraemos el valor del parámetro "id" de la solicitud

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
});

export default app2;