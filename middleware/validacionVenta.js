import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {venta} from '../controller/venta.js'
import { validate } from 'class-validator';

const validacionVenta = express();
validacionVenta.use(async (req,res,next)=>{
    try {
        let data = plainToClass(venta, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionVenta;