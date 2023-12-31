CREATE DATABASE tiendaMartuchis;

USE tiendaMartuchis;
CREATE TABLE tipo_documento( 
    tip_id INT NOT NULL PRIMARY KEY, 
    tip_nombre VARCHAR(30) NOT NULL, 
    tip_abreviatura VARCHAR(4) NOT NULL
);

CREATE TABLE estado( 
    est_id INT(5) NOT NULL PRIMARY KEY, 
    est_nombre VARCHAR(50) NOT NULL
);

CREATE TABLE pais(
    pa_id INT (255) NOT NULL PRIMARY KEY, 
    pa_nombre VARCHAR(50) NOT NULL, 
    pa_abreviatura VARCHAR(10) NOT NULL
);

CREATE TABLE departamento(
    dep_id INT(10) NOT NULL PRIMARY KEY, 
    dep_nombre VARCHAR(20) NOT NULL, 
    dep_abreviatura VARCHAR(10) NOT NULL,
    fk_pais_id INT(10) NOT NULL
);

CREATE TABLE ciudad(
    ci_id INT(255) NOT NULL PRIMARY KEY, 
    ci_nombre VARCHAR(20) NOT NULL, 
    ci_abreviatura VARCHAR(10) NOT NULL, 
    fk_departamento INT(10) NOT NULL
);

CREATE TABLE envio(
    env_id INT(20) NOT NULL PRIMARY KEY, 
    fk_env_estado INT(5) NOT NULL
);

CREATE TABLE usuario(
    usu_id INT NOT NULL PRIMARY KEY, 
    usu_nombre VARCHAR(20) NOT NULL, 
    usu_apellido VARCHAR(20) NOT NULL, 
    usu_email VARCHAR(20) NOT NULL, 
    usu_telefono VARCHAR(10) NOT NULL, 
    usu_direccion VARCHAR(20) NOT NULL, 
    fk_id_tip_documento INT NOT NULL, 
    fk_id_envio INT(20) NOT NULL
);

CREATE TABLE valoracion(
    val_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    val_descripcion VARCHAR(100), 
    fk_id_usuario INT, 
    val_estrellas INT(2)
);

CREATE TABLE categoria(
    cat_id INT(5) NOT NULL PRIMARY KEY, 
    cat_nombre VARCHAR(50) NOT NULL
);

CREATE TABLE producto(
    prod_id INT(5) NOT NULL PRIMARY KEY, 
    prod_nombre VARCHAR(50) NOT NULL, 
    prod_descripcion VARCHAR(255) NOT NULL, 
    prod_cantidad INT(5) NOT NULL, 
    prod_imagen VARCHAR(50) NOT NULL, 
    fk_categoria_id INT(5) NOT NULL
);

CREATE TABLE factura(
    fac_id INT(20) NOT NULL PRIMARY KEY
);

CREATE TABLE factura_producto (
    fac_id INT(20) NOT NULL, 
    prod_id INT(5) NOT NULL, 
    PRIMARY KEY (fac_id, prod_id), 
    FOREIGN KEY (fac_id) REFERENCES factura(fac_id), 
    FOREIGN KEY (prod_id) REFERENCES producto(prod_id)
);

CREATE TABLE venta(
    ven_id INT(10) NOT NULL PRIMARY KEY, 
    fk_env_id INT(20) NOT NULL, 
    venta_hora TIMESTAMP, 
    fk_factura_id INT(20) NOT NULL
);

CREATE TABLE ubicacion (
    ubi_id INT(255) NOT NULL PRIMARY KEY, 
    fk_ciudad_id INT(255) NOT NULL, 
    fk_usu_id INT(10) NOT NULL, 
    fk_env_id INT(20)
);

ALTER TABLE valoracion
ADD CONSTRAINT fk_usuario_id
FOREIGN KEY (fk_id_usuario) REFERENCES usuario(usu_id);

ALTER TABLE usuario
ADD CONSTRAINT fk_id_tip_documento
FOREIGN KEY (fk_id_tip_documento) REFERENCES tipo_documento(tip_id);

ALTER TABLE usuario
ADD CONSTRAINT fk_id_envio
FOREIGN KEY (fk_id_envio) REFERENCES envio(env_id);

ALTER TABLE producto
ADD CONSTRAINT fk_categoria_id
FOREIGN KEY (fk_categoria_id) REFERENCES categoria(cat_id);

ALTER TABLE ubicacion
ADD CONSTRAINT fk_env_id
FOREIGN KEY (fk_env_id) REFERENCES envio(env_id);

ALTER TABLE ubicacion
ADD CONSTRAINT fk_ciudad_id
FOREIGN KEY (fk_ciudad_id) REFERENCES ciudad(ci_id);

ALTER TABLE ubicacion
ADD CONSTRAINT fk_usu_id
FOREIGN KEY (fk_usu_id) REFERENCES usuario(usu_id);

ALTER TABLE envio
ADD CONSTRAINT fk_env_estado
FOREIGN KEY (fk_env_estado) REFERENCES estado(est_id);

ALTER TABLE ciudad
ADD CONSTRAINT fk_departamento_id
FOREIGN KEY (fk_departamento) REFERENCES departamento(dep_id);

ALTER TABLE departamento
ADD CONSTRAINT fk_pais
FOREIGN KEY (fk_pais_id) REFERENCES pais(pa_id);

ALTER TABLE venta
ADD CONSTRAINT fk_factura
FOREIGN KEY (fk_factura_id) REFERENCES factura(fac_id);

ALTER TABLE venta
ADD CONSTRAINT fk_env_idd
FOREIGN KEY (fk_env_id) REFERENCES envio(env_id);
