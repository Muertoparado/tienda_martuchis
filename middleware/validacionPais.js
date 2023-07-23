import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {pais} from '../controller/pais.js'
import { validate } from 'class-validator';

const validacionPais = express();
validacionPais.use(async (req,res,next)=>{
    try {
        let data = plainToClass(pais, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionPais;