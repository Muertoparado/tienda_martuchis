import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class venta {
    @Expose({name:'ven_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato5 no cumple los parametros`};},{toClassOnly: true})
        ven_id:number;

        @Expose({name:'fk_env_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no3cumple los parametros`};},{toClassOnly: true})
        fk_env_id:number;

    @Expose({name:'venta_hora'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value}) => {if(/^[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no k cumple los parametros`};},{toClassOnly:true})
        venta_hora: String;

    @Expose({name:'fk_factura_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no ff cumple los parametros`};},{toClassOnly: true})
        fk_factura_id:number;    
    
    constructor(ven_id:number, fk_env_id:number,venta_hora: String,fk_factura_id:number){
        this.ven_id=ven_id;
        this.fk_env_id=fk_env_id;
        this.venta_hora=venta_hora;
        this.fk_factura_id=fk_factura_id;
    }
}