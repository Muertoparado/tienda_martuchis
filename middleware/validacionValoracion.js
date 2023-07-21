import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {valoracion} from '../controller/valoracion.js'
import { validate } from 'class-validator';

const validacionValoracion = express();
validacionValoracion.use(async (req,res,next)=>{
    try {
        let data = plainToClass(valoracion, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionValoracion;