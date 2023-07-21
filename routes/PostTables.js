import {Router} from 'express';
import validacionTipoDoc from '../middleware/validacionTipoDoc.js'
import validacionValoracion from '../middleware/validacionValoracion.js';
import validacionUsuario from '../middleware/validacionUsuario.js';
import mysql from 'mysql2';


let con= undefined;
const app = Router();

app.use((req, res, next)=>{
    let myConfig=JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig);
    next();
});

app.post('/tipodoc/add', validacionTipoDoc, (req,res)=>{
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
    
});

app.post('/valoracion/add', validacionValoracion, (req,res)=>{
    const {val_id,val_descripcion,val_estrellas }=req.body
    const datos={val_id,val_descripcion,val_estrellas};
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
    })
    
});

app.post('/usuario/add', validacionUsuario, (req,res)=>{
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
    
});


export default app;