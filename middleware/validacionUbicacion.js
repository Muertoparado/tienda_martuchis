import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {ubicacion} from '../controller/ubicacion.js'
import { validate } from 'class-validator';

const validacionUbicacion = express();
validacionUbicacion.use(async (req,res,next)=>{
    try {
        let data = plainToClass(ubicacion, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionUbicacion;