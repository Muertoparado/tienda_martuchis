import {Router} from 'express';
import validacionTipoDoc from '../middleware/validacionTipoDoc.js'
import validacionValoracion from '../middleware/validacionValoracion.js';
import validacionUsuario from '../middleware/validacionUsuario.js';
import validacionUbicacion from '../middleware/validacionUbicacion.js';
import validacionPais from '../middleware/validacionPais.js';
import validacionDepartamento from '../middleware/validacionDepartamento.js';
import mysql from 'mysql2';
import validacionCiudad from '../middleware/validacionCiudad.js';
import validacionEstado from '../middleware/validacionEstado.js';
import validacionEnvio from '../middleware/validacionEnvio.js';
import validacionVenta from '../middleware/validacionVenta.js';


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

app.post('/ubicacion/add', validacionUbicacion, (req,res)=>{
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
    
});

app.post('/pais/add', validacionPais, (req,res)=>{
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
    
});

app.post('/dep/add', validacionDepartamento, (req,res)=>{
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
    
});

app.post('/ciudad/add', validacionCiudad, (req,res)=>{
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
    
});

app.post('/estado/add', validacionEstado, (req,res)=>{
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
    
});

app.post('/envio/add', validacionEnvio, (req,res)=>{
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
    
});

app.post('/venta/add', validacionVenta, (req,res)=>{
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
    
});


export default app;