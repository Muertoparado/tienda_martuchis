import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {factura} from '../controller/factura.js'
import { validate } from 'class-validator';

const validacionFactura = express();
validacionFactura.use(async (req,res,next)=>{
    try {
        let data = plainToClass(factura, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionFactura;