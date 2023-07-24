import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class producto {
    @Expose({name:'prod_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros1`};},{toClassOnly: true})
        prod_id:number;

        @Expose({name:'prod_nombre'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el daton no cumple los parametros`};},{toClassOnly:true})
            prod_nombre: String;
    
            @Expose({name:'prod_descripcion'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato q no cumple los parametros`};},{toClassOnly:true})
            prod_descripcion: String;

        @Expose({name:'prod_cantidad'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value})=>{
            if(Math.floor(value)&& typeof value === 'number')
            return Math.floor(value);
            else throw {status:400, message:`el dato no cumple los parametros22`};},{toClassOnly: true})
            prod_cantidad:number;

        @Expose({name:'fk_categoria_id'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value})=>{
            if(Math.floor(value)&& typeof value === 'number')
            return Math.floor(value);
            else throw {status:400, message:`el dato no cumple los parametros1`};},{toClassOnly: true})
            fk_categoria_id:number;
        
        @Expose({name:'prod_imagen'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value}) => {if(/^[a-z A-Z 0-9 .]+$/.test(value)) return value;
            else throw {status:400, message:`el dato no cumple los ur parametrosa`};},{toClassOnly:true})
            prod_imagen: String;


    constructor(prod_id:number,prod_nombre: String, prod_descripcion: String,prod_cantidad:number,fk_categoria_id:number,prod_imagen:String){
        this.prod_id=prod_id;
        this.prod_nombre=prod_nombre;
        this.prod_descripcion=prod_descripcion;
        this.prod_cantidad=prod_cantidad;
        this.fk_categoria_id=fk_categoria_id;
        this.prod_imagen=prod_imagen;
    }
}   