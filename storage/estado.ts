import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class estado {
    @Expose({name:'est_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        est_id:number;

    @Expose({name:'est_nombre'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        est_nombre: String;
    
    constructor(est_id:number,est_nombre:string){
        this.est_id=est_id;
        this.est_nombre=est_nombre;
    }
}