import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {producto} from '../controller/producto.js'
import { validate } from 'class-validator';

const validacionProducto = express();
validacionProducto.use(async (req,res,next)=>{
    try {
        let data = plainToClass(producto, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionProducto;