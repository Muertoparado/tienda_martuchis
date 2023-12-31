import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {tipoDocumento} from '../controller/tipo_documento.js'
import { validate } from 'class-validator';

const validacionTipoDoc = express();
validacionTipoDoc.use(async (req,res,next)=>{
    try {
        let data = plainToClass(tipoDocumento, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionTipoDoc;