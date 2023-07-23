import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class ciudad {
    @Expose({name:'ci_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no q cumple los parametros`};},{toClassOnly: true})
        ci_id:number;

        @Expose({name:'ci_nombre'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
            ci_nombre:string;

        @Expose({name:'ci_abreviatura'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
            ci_abreviatura:string;

        @Expose({name:'fk_departamento'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value})=>{if(Math.floor(value)&& typeof value === 'number')
            return Math.floor(value);
            else throw {status:400, message:`el dato no fk cumple los parametros`};},{toClassOnly: true})
            fk_departamento:number;

    constructor(ci_id:number,ci_nombre:string,ci_abreviatura:string,fk_departamento:number){
        this.ci_id=ci_id;
        this.ci_nombre=ci_nombre;
        this.ci_abreviatura=ci_abreviatura; 
        this.fk_departamento=fk_departamento;
    }
}