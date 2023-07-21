var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsDefined } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
export class usuario {
    constructor(usu_id, usu_nombre, usu_apellido, usu_telefono, usu_direccion, usu_email, fk_id_tip_documento, fk_id_envio) {
        this.usu_id = usu_id;
        this.usu_nombre = usu_nombre;
        this.usu_apellido = usu_apellido;
        this.usu_telefono = usu_telefono;
        this.usu_direccion = usu_direccion;
        this.usu_email = usu_email;
        this.fk_id_tip_documento = fk_id_tip_documento;
        this.fk_id_envio = fk_id_envio;
    }
}
__decorate([
    Expose({ name: 'usu_id' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato i no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], usuario.prototype, "usu_id", void 0);
__decorate([
    Expose({ name: 'usu_nombre' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio 1` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato n no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], usuario.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: 'usu_apellido' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio 2` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato a  no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], usuario.prototype, "usu_apellido", void 0);
__decorate([
    Expose({ name: 'usu_telefono' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio 3` }; } }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) && typeof value != "number")
            return value;
        else
            throw { status: 400, message: `el dato t no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], usuario.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: 'usu_direccion' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio 4` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z 0-9 # -]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no d cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], usuario.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: 'usu_email' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio 5` }; } }),
    Transform(({ value }) => {
        if (/^[@. a-z A-Z 0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato x no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], usuario.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: 'fk_id_tip_documento' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio 6` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato i no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], usuario.prototype, "fk_id_tip_documento", void 0);
__decorate([
    Expose({ name: 'fk_id_envio' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio7` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato i no cumple los parametros8` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], usuario.prototype, "fk_id_envio", void 0);
