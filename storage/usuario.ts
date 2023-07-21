import { IsString, IsEmpty, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class usuario{

    @Expose({name:'usu_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato i no cumple los parametros`};},{toClassOnly: true})
        usu_id:number;
    
    @Expose({name:'usu_nombre'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
        usu_nombre:string;

    @Expose({name:'usu_apellido'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 2`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato a  no cumple los parametros`};},{toClassOnly:true})
        usu_apellido:string;

    @Expose({name:'usu_telefono'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 3`}}})
    @Transform(({value}) => {if(/^[0-9]+$/.test(value)&& typeof value != "number") return value;
        else throw {status:400, message:`el dato t no cumple los parametros`};},{toClassOnly:true})
        usu_telefono:string;
    
        @Expose({name:'usu_direccion'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 4`}}})
    @Transform(({value}) => {if(/^[a-z A-Z 0-9 # -]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no d cumple los parametros`};},{toClassOnly:true})
        usu_direccion:string;

        @Expose({name:'usu_email'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 5` }}})
    @Transform(({value}) => {if(/^[@. a-z A-Z 0-9]+$/.test(value)) return value;
        else throw {status:400, message:`el dato x no cumple los parametros`};},{toClassOnly:true})
        usu_email:string;

        @Expose({name:'fk_id_tip_documento'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 6`}}})
        @Transform(({value})=>{
            if(Math.floor(value)&& typeof value === 'number')
            return Math.floor(value);
            else throw {status:400, message:`el dato i no cumple los parametros`};},{toClassOnly: true})
            fk_id_tip_documento:number;

            @Expose({name:'fk_id_envio'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio7`}}})
        @Transform(({value})=>{
            if(Math.floor(value)&& typeof value === 'number')
            return Math.floor(value);
            else throw {status:400, message:`el dato i no cumple los parametros8`};},{toClassOnly: true})
            fk_id_envio:number;

    constructor(usu_id:number,usu_nombre:string,usu_apellido:string,usu_telefono:string,usu_direccion:string,usu_email:string,fk_id_tip_documento:number,fk_id_envio:number){
        this.usu_id=usu_id;
        this.usu_nombre=usu_nombre;
        this.usu_apellido=usu_apellido;
        this.usu_telefono=usu_telefono;
        this.usu_direccion=usu_direccion;
        this.usu_email=usu_email;
        this.fk_id_tip_documento=fk_id_tip_documento;
        this.fk_id_envio=fk_id_envio;
}
}