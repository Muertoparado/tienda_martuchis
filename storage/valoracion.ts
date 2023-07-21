import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class valoracion {
    @Expose({name:'val_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el a dato no cumple los parametros`};},{toClassOnly: true})
        val_id:number;

    @Expose({name:'val_descripcion'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el v dato no cumple los parametros`};},{toClassOnly:true})
        val_descripcion: String;

    @Expose({name:'val_estrellas'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)) return value;
        else throw {status:400, message:`el dato ac no cumple los parametros`};},{toClassOnly:true})
        val_estrellas: String;

    
    constructor(val_id:number,val_descripcion:string,val_estrellas:string){
        this.val_id=val_id;
        this.val_descripcion=val_descripcion;
        this.val_estrellas=val_estrellas;
        
    }
}