INSERT INTO valoracion (val_id, val_descripcion, fk_id_usuario, val_estrellas)
VALUES
    (1, 'Buena calidad', 1, 5),
    (2, 'Entrega rápida', 2, 4),
    (3, 'Producto defectuoso', 3, 2),
    (4, 'Muy recomendado', 4, 5),
    (5, 'Envío demorado', 5, 3),
    (6, 'Excelente servicio', 1, 5),
    (7, 'Regular', 2, 3),
    (8, 'No me gustó', 3, 1),
    (9, 'Producto dañado', 4, 2),
    (10, 'Sin comentarios', 5, 0);

INSERT INTO usuario (usu_id, usu_nombre, usu_apellido, usu_email, usu_telefono, usu_direccion, fk_id_tip_documento, fk_id_envio)
VALUES
    (1, 'John', 'Doe', 'john.doe@example.com', '1234567890', '123 Main St', 1, 1),
    (2, 'Jane', 'Smith', 'jane.smith@example.com', '9876543210', '456 Oak Ave', 2, 2),
    (3, 'Michael', 'Johnson', 'michael.johnson@example.com', '5551112222', '789 Elm St', 1, 3),
    (4, 'Emily', 'Brown', 'emily.brown@example.com', '4443332222', '234 Maple St', 2, 4),
    (5, 'William', 'Miller', 'william.miller@example.com', '7778889999', '567 Pine Ave', 1, 5);

INSERT INTO tipo_documento (tip_id, tip_nombre, tip_abreviatura)
VALUES
    (1, 'Cédula', 'CC'),
    (2, 'Pasaporte', 'PSP'),
    (3, 'Tarjeta de identidad', 'TI'),
    (4, 'Cédula de extranjería', 'CE'),
    (5, 'Registro civil', 'RC');

INSERT INTO envio (env_id, fk_env_estado)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 1),
    (5, 2);

INSERT INTO venta (ven_id, fk_env_id, venta_hora, fk_factura_id)
VALUES
    (1, 1, '2023-07-20 10:30:00', 1),
    (2, 2, '2023-07-20 11:45:00', 2),
    (3, 3, '2023-07-20 14:15:00', 3),
    (4, 4, '2023-07-20 15:30:00', 4),
    (5, 5, '2023-07-20 16:45:00', 5);

INSERT INTO factura (fac_id)
VALUES
    (1),
    (2),
    (3),
    (4),
    (5);

INSERT INTO producto (prod_id, prod_nombre, prod_descripcion, prod_cantidad, prod_imagen, fk_categoria_id)
VALUES
    (101, 'Libro de aventuras', 'Libro de aventuras para niños', 50, 'libro_aventuras.jpg', 1),
    (102, 'Camiseta negra', 'Camiseta negra de algodón', 30, 'camiseta_negra.jpg', 2),
    (103, 'Juego de mesa', 'Juego de mesa para toda la familia', 20, 'juego_mesa.jpg', 3),
    (104, 'Reloj digital', 'Reloj digital con cronómetro', 15, 'reloj_digital.jpg', 4),
    (105, 'Zapatos deportivos', 'Zapatos deportivos para correr', 25, 'zapatos_deportivos.jpg', 5);

INSERT INTO factura_producto (fac_id, prod_id)
VALUES
    (1, 101),
    (1, 102),
    (2, 103),
    (3, 104),
    (4, 105);

INSERT INTO categoria (cat_id, cat_nombre)
VALUES
    (1, 'Categoría 1'),
    (2, 'Categoría 2'),
    (3, 'Categoría 3'),
    (4, 'Categoría 4'),
    (5, 'Categoría 5');

INSERT INTO estado (est_id, est_nombre)
VALUES
    (1, 'En proceso'),
    (2, 'En camino'),
    (3, 'Entregado');

INSERT INTO ubicacion (ubi_id, fk_ciudad_id, fk_usu_id, fk_env_id)
VALUES
    (1, 1, 1, 1),
    (2, 2, 2, 2),
    (3, 3, 3, 3),
    (4, 1, 4, 4),
    (5, 2, 5, 5);

INSERT INTO ciudad (ci_id, ci_nombre, ci_abreviatura, fk_departamento)
VALUES
    (1, 'Ciudad 1', 'C1', 1),
    (2, 'Ciudad 2', 'C2', 2),
    (3, 'Ciudad 3', 'C3', 1),
    (4, 'Ciudad 4', 'C4', 2),
    (5, 'Ciudad 5', 'C5', 1);

INSERT INTO departamento (dep_id, dep_nombre, dep_abreviatura, fk_pais_id)
VALUES
    (1, 'Departamento 1', 'D1', 1),
    (2, 'Departamento 2', 'D2', 2),
    (3, 'Departamento 3', 'D3', 1),
    (4, 'Departamento 4', 'D4', 2),
    (5, 'Departamento 5', 'D5', 1);

INSERT INTO pais (pa_id, pa_nombre, pa_abreviatura)
VALUES
    (1, 'País 1', 'P1'),
    (2, 'País 2', 'P2'),
    (3, 'País 3', 'P3'),
    (4, 'País 4', 'P4'),
    (5, 'País 5', 'P5');


