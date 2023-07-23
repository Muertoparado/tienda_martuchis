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
export class venta {
    constructor(ven_id, fk_env_id, venta_hora, fk_factura_id) {
        this.ven_id = ven_id;
        this.fk_env_id = fk_env_id;
        this.venta_hora = venta_hora;
        this.fk_factura_id = fk_factura_id;
    }
}
__decorate([
    Expose({ name: 'ven_id' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato5 no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], venta.prototype, "ven_id", void 0);
__decorate([
    Expose({ name: 'fk_env_id' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no3cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], venta.prototype, "fk_env_id", void 0);
__decorate([
    Expose({ name: 'venta_hora' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no k cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], venta.prototype, "venta_hora", void 0);
__decorate([
    Expose({ name: 'fk_factura_id' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no ff cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], venta.prototype, "fk_factura_id", void 0);
