INSERT INTO tipo_documento(tip_id, tip_nombre, tip_abreviatura) 
VALUES(1,'Identity Card', 'IC'),
      (2, 'Passport', 'PAS'), 
      (3, 'Driver License', 'DL'),
      (4, 'Resident Permit', 'RP'),
      (5, 'Other', 'OTH');

INSERT INTO estado(est_id, est_nombre) 
VALUES(1,'Pending'),
      (2,'Dispatched'), 
      (3,'Delivered'), 
      (4,'Returned'), 
      (5,'Cancelled');

      INSERT INTO pais(pa_id, pa_nombre, pa_abreviatura) 
VALUES (1,'United States', 'US'), 
       (2,'Canada', 'CA'), 
       (3,'Mexico', 'MX'), 
       (4,'France', 'FR'), 
       (5,'Germany', 'DE');

       INSERT INTO departamento(dep_id, dep_nombre, dep_abreviatura, fk_pais_id)
VALUES(1,'California', 'CA', 1),
      (2,'Texas', 'TX', 1),
      (3,'British Columbia', 'BC', 2),
      (4,'Quebec', 'QC', 2),
      (5,'Yucatan', 'YC', 3);

    INSERT INTO ciudad(ci_id, ci_nombre, ci_abreviatura, fk_departamento)
VALUES(1,'Los Angeles', 'LA', 1),
      (2,'Houston', 'HO', 2),
      (3,'Vancouver', 'VA', 3),
      (4,'Montreal', 'MO', 4),
      (5,'Merida', 'ME', 5);

      INSERT INTO envio(env_id, fk_env_estado)
VALUES(1,1),
      (2,2),
      (3,3),
      (4,4),
      (5,5);

    INSERT INTO usuario(usu_id, usu_nombre, usu_apellido, usu_email, usu_telefono, usu_direccion, fk_id_tip_documento, fk_id_envio)
VALUES(1,'John', 'Doe', 'john.doe@email.com', '1234567890', '123 Main St', 1, 1),
      (2,'Jane', 'Doe', 'jane.doe@email.com', '0987654321', '456 Oak St', 2, 2),
      (3,'Bob', 'Smith', 'bob.smith@email.com', '1112223333', '789 Pine St', 3, 3),
      (4,'Alice', 'Johnson', 'alice.johnson@email.com', '4445556666', '1011 Birch St', 4, 4),
      (5,'Charlie', 'Brown', 'charlie.brown@email.com', '7778889999', '1213 Cedar St', 5, 5);

INSERT INTO valoracion(val_id, val_descripcion, fk_id_usuario, val_estrellas)
VALUES (1, 'Great service', 1, 5),
       (2, 'Prompt delivery', 2, 4),
       (3, 'Could be better', 3, 3),
       (4, 'Very disappointed', 4, 1),
       (5, 'Average experience', 5, 3);

       INSERT INTO categoria(cat_id, cat_nombre)
VALUES(1,'Electronics'), 
      (2,'Furniture'), 
      (3,'Clothing'), 
      (4,'Books'), 
      (5,'Sports');

      INSERT INTO producto(prod_id, prod_nombre, prod_descripcion, prod_cantidad, prod_imagen, fk_categoria_id)
VALUES(1,'iPhone', 'Apple smartphone', 10, 'iphone.jpg', 1),
      (2,'Chair', 'Wooden chair', 20, 'chair.jpg', 2),
      (3,'T-shirt', 'Cotton t-shirt', 30, 'tshirt.jpg', 3),
      (4,'Book', 'Hardcover book', 40, 'book.jpg', 4),
      (5,'Basketball', 'Orange basketball', 50, 'basketball.jpg', 5);

      INSERT INTO factura(fac_id)
VALUES(1), (2), (3), (4), (5);

INSERT INTO factura_producto(fac_id, prod_id)
VALUES(1,1), 
      (2,2), 
      (3,3), 
      (4,4), 
      (5,5);

INSERT INTO venta(ven_id, fk_env_id, venta_hora, fk_factura_id)
VALUES(1,1,CURRENT_TIMESTAMP,1),
      (2,2,CURRENT_TIMESTAMP,2),
      (3,3,CURRENT_TIMESTAMP,3),
      (4,4,CURRENT_TIMESTAMP,4),
      (5,5,CURRENT_TIMESTAMP,5);

INSERT INTO ubicacion(ubi_id, fk_ciudad_id, fk_usu_id, fk_env_id)
VALUES(1,1,1,1),
      (2,2,2,2),
      (3,3,3,3),
      (4,4,4,4),
      (5,5,5,5);