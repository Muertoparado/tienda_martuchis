import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class departamento {
    @Expose({name:'dep_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no q cumple los parametros`};},{toClassOnly: true})
        dep_id:number;

        @Expose({name:'dep_nombre'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
            dep_nombre:string;

        @Expose({name:'dep_abreviatura'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
            dep_abreviatura:string;

        @Expose({name:'fk_pais_id'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value})=>{if(Math.floor(value)&& typeof value === 'number')
            return Math.floor(value);
            else throw {status:400, message:`el dato no fk cumple los parametros`};},{toClassOnly: true})
            fk_pais_id:number;

    constructor(dep_id:number,dep_nombre:string,dep_abreviatura:string,fk_pais_id:number){
        this.dep_id=dep_id;
        this.dep_nombre=dep_nombre;
        this.dep_abreviatura=dep_abreviatura; 
        this.fk_pais_id=fk_pais_id;
    }
}