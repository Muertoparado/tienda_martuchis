import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {envio} from '../controller/envio.js'
import { validate } from 'class-validator';

const validacionEnvio = express();
validacionEnvio.use(async (req,res,next)=>{
    try {
        let data = plainToClass(envio, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionEnvio;