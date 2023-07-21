import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class tipoDocumento {
    @Expose({name:'tip_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        tip_id:number;

    @Expose({name:'tip_nombre'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        tip_nombre: String;

    @Expose({name:'tip_abreviatura'})
    @Transform(({value})=>{if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        tip_abreviatura: String;

    
    constructor(tip_id:number,tip_nombre:string,tip_abreviatura:string){
        this.tip_id=tip_id;
        this.tip_nombre=tip_nombre;
        this.tip_abreviatura=tip_abreviatura;
    }
}