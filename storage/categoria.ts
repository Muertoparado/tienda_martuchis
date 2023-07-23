import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';
export class categoria {
    @Expose({name:'cat_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        cat_id:number;

        @Expose({name:'cat_nombre'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio 1`}}})
        @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
            else throw {status:400, message:`el dato n no cumple los parametros`};},{toClassOnly:true})
            cat_nombre:string;
    
    constructor(cat_id:number,cat_nombre:string){
        this.cat_id=cat_id;
        this.cat_nombre=cat_nombre;
    }
}