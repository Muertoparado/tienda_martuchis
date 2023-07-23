import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {ciudad} from '../controller/ciudad.js'
import { validate } from 'class-validator';

const validacionCiudad = express();
validacionCiudad.use(async (req,res,next)=>{
    try {
        let data = plainToClass(ciudad, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionCiudad;