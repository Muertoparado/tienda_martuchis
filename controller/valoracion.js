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
export class valoracion {
    constructor(val_id, val_descripcion, val_estrellas, fk_id_usuario) {
        this.val_id = val_id;
        this.val_descripcion = val_descripcion;
        this.val_estrellas = val_estrellas;
        this.fk_id_usuario = fk_id_usuario;
    }
}
__decorate([
    Expose({ name: 'val_id' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato a no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], valoracion.prototype, "val_id", void 0);
__decorate([
    Expose({ name: 'val_descripcion' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato b no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], valoracion.prototype, "val_descripcion", void 0);
__decorate([
    Expose({ name: 'val_estrellas' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no c cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], valoracion.prototype, "val_estrellas", void 0);
__decorate([
    Expose({ name: 'fk_id_usuario' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato a no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], valoracion.prototype, "fk_id_usuario", void 0);
