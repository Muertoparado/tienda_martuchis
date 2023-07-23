import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class envio {
    @Expose({name:'env_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        env_id:number;

        @Expose({name:'fk_env_estado'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
        @Transform(({value})=>{
            if(Math.floor(value)&& typeof value === 'number')
            return Math.floor(value);
            else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
            fk_env_estado:number;
    
    constructor(env_id:number,fk_env_estado:number){
        this.env_id=env_id;
        this.fk_env_estado=fk_env_estado;
    }
}