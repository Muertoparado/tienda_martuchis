INSERT INTO valoracion (val_descripcion, fk_id_usuario, val_estrellas)
VALUES
    ('Buena calidad', 1, 5),
    ('Entrega rápida', 2, 4),
    ('Producto defectuoso', 3, 2),
    ('Muy recomendado', 4, 5),
    ('Envío demorado', 5, 3),
    ('Excelente servicio', 1, 5),
    ('Regular', 2, 3),
    ('No me gustó', 3, 1),
    ('Producto dañado', 4, 2),
    ('Sin comentarios', 5, 0);

INSERT INTO usuario (usu_id, usu_nombre, usu_apellido, usu_email, usu_telefono, usu_direccion, fk_id_tip_documento, fk_id_envio)
VALUES
    (1, 'John', 'Doe', 'john.doe@example.com', '1234567890', '123 Main St', 1, 1),
    (2, 'Jane', 'Smith', 'jane.smith@example.com', '9876543210', '456 Oak Ave', 2, 2),
    (3, 'Michael', 'Johnson', 'michael.johnson@example.com', '5551112222', '789 Elm St', 1, 3),
    (4, 'Emily', 'Brown', 'emily.brown@example.com', '4443332222', '234 Maple St', 2, 4),
    (5, 'William', 'Miller', 'william.miller@example.com', '7778889999', '567 Pine Ave', 1, 5),
    (6, 'Olivia', 'Davis', 'olivia.davis@example.com', '2221110000', '890 Oak St', 2, 1),
    (7, 'James', 'Garcia', 'james.garcia@example.com', '3334445555', '345 Elm Ave', 1, 2),
    (8, 'Sophia', 'Martinez', 'sophia.martinez@example.com', '6667778888', '678 Main St', 2, 3),
    (9, 'Alexander', 'Lopez', 'alexander.lopez@example.com', '9990001111', '901 Oak Ave', 1, 4),
    (10, 'Isabella', 'Hernandez', 'isabella.hernandez@example.com', '0009998888', '234 Elm St', 2, 5);

INSERT INTO tipo_documento (tip_id, tip_nombre, tip_abreviatura)
VALUES
    (1, 'Cédula', 'CC'),
    (2, 'Pasaporte', 'PSP'),
    (3, 'Tarjeta de identidad', 'TI'),
    (4, 'Cédula de extranjería', 'CE'),
    (5, 'Registro civil', 'RC'),
    (6, 'NIT', 'NIT'),
    (7, 'RUT', 'RUT'),
    (8, 'Carné estudiantil', 'CE'),
    (9, 'Tarjeta profesional', 'TP'),
    (10, 'Licencia de conducir', 'LIC');


INSERT INTO envio (env_id,fk_env_estado, fk_venta_id)
VALUES
    (1, 1, 1),
    (2, 2, 2),
    (3,  3, 3),
    (4,  4, 4),
    (5,  5, 5),
    (6,  1, 6),
    (7,  2, 7),
    (8, 3, 8),
    (9,  4, 9),
    (10, 5, 10);

INSERT INTO venta (venta_id, fk_producto_id, venta_hora)
VALUES
    (1, 101, '2023-07-20 10:30:00'),
    (2, 102, '2023-07-20 11:45:00'),
    (3, 103, '2023-07-20 14:15:00'),
    (4, 104, '2023-07-20 15:30:00'),
    (5, 105, '2023-07-20 16:45:00'),
    (6, 106, '2023-07-20 09:00:00'),
    (7, 107, '2023-07-20 13:00:00'),
    (8, 108, '2023-07-20 17:30:00'),
    (9, 109, '2023-07-20 18:45:00'),
    (10, 110, '2023-07-20 19:30:00');

INSERT INTO producto (prod_id, prod_nombre, prod_descripcion, prod_cantidad, prod_imagen, fk_categoria_id)
VALUES
    (101, 'Libro de aventuras', 'Libro de aventuras para niños', 50, 'libro_aventuras.jpg', 1),
    (102, 'Camiseta negra', 'Camiseta negra de algodón', 30, 'camiseta_negra.jpg', 2),
    (103, 'Juego de mesa', 'Juego de mesa para toda la familia', 20, 'juego_mesa.jpg', 3),
    (104, 'Reloj digital', 'Reloj digital con cronómetro', 15, 'reloj_digital.jpg', 4),
    (105, 'Zapatos deportivos', 'Zapatos deportivos para correr', 25, 'zapatos_deportivos.jpg', 5),
    (106, 'Pelota de fútbol', 'Pelota de fútbol tamaño oficial', 40, 'pelota_futbol.jpg', 1)


