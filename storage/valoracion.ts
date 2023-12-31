import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class valoracion {
    @Expose({name:'val_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato a no cumple los parametros`};},{toClassOnly: true})
        val_id:number;

    @Expose({name:'val_descripcion'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato b no cumple los parametros`};},{toClassOnly:true})
        val_descripcion: String;

    @Expose({name:'val_estrellas'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no c cumple los parametros`};},{toClassOnly: true})
        val_estrellas:number;

    @Expose({name:'fk_id_usuario'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato a no cumple los parametros`};},{toClassOnly: true})
        fk_id_usuario:number;
    
    constructor(val_id:number,val_descripcion:string,val_estrellas:number,fk_id_usuario:number){
        this.val_id=val_id;
        this.val_descripcion=val_descripcion;
        this.val_estrellas=val_estrellas;
        this.fk_id_usuario=fk_id_usuario;
        
    }
}