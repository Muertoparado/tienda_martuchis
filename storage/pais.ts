import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class pais {
    @Expose({name:'pa_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        pa_id:number;

        @Expose({name:'pa_nombre'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
        pa_nombre:string;

        @Expose({name:'pa_abreviatura'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
        pa_abreviatura:string;

    constructor(pa_id:number,pa_abreviatura:string,pa_nombre:string){
        this.pa_id=pa_id;
        this.pa_abreviatura=pa_abreviatura;
        this.pa_nombre=pa_nombre; 
    }
}