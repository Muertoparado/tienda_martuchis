import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {departamento} from '../controller/departamento.js'
import { validate } from 'class-validator';

const validacionDepartamento = express();
validacionDepartamento.use(async (req,res,next)=>{
    try {
        let data = plainToClass(departamento, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionDepartamento;