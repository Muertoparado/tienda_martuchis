# TIENDA MARTUCHIS
---

En esta página web encontrarás una experiencia de compra excepcional, donde podrás disfrutar de una visualización detallada de cada producto. Nuestras fotografías profesionales capturan la belleza y los detalles únicos de cada artículo, permitiéndote apreciar su artesanía y calidad desde todos los ángulos.

Además, cada producto viene acompañado de descripciones meticulosas que destacan las características distintivas, los materiales utilizados y el proceso de creación. Queremos compartir contigo la historia y el significado cultural que hay detrás de cada pieza, para que puedas apreciar su valor y autenticidad.

Hemos creado un sistema de carro de compras intuitivo, donde podrás seleccionar tus artículos favoritos y almacenarlos para una fácil revisión antes de finalizar tu compra. Una vez que estés listo para realizar el pedido, validaremos tus datos personales de forma segura para garantizar una entrega exitosa y puntual.

### Objetivo General
---

El objetivo general del proyecto es crear una página web de comercio electrónico que permita a los usuarios realizar compras en línea y ofrecerles una experiencia única al explorar los productos, a través de descripciones detalladas de cada artículo.

### Objetivo Especifico
---

- Generar la trasabilidad de la compra del usuario, verificando la cantidad de productos y la dirección de entrega.

- Realizar la verificación del pago y el envío del producto a la dirección especifica.

- Llevar el control del inventario distintos productos productos mostrados adicional agregar nuevas cantidades o productos. 


---

# Guía para Inicializar un Repositorio de GitHub y Configurar las Dependencias

Esta guía te ayudará a inicializar el repositorio de GitHub y a instalar las dependencias necesarias utilizando npm.

## Paso 1: Clonar el Repositorio en tu Computadora

1. Abre tu terminal o línea de comandos en la ubicación donde desees almacenar el proyecto.
2. Clona el repositorio desde GitHub ejecutando el siguiente comando:

```bash
git clone https://github.com/Muertoparado/tienda_martuchis.git
```

Reemplaza `https://github.com/Muertoparado/tienda_martuchis.git` con la URL del repositorio que obtuviste en GitHub.

## Paso 2: Instalar las Dependencias

1. Navega al directorio del proyecto en tu terminal:

```bash
cd NOMBRE_DE_LA_CARPETA_DEL_PROYECTO
```

Reemplaza `NOMBRE_DE_LA_CARPETA_DEL_PROYECTO` con el nombre de la carpeta del proyecto que se creó al clonar el repositorio.

2. Instala las dependencias utilizando npm. Ejecuta el siguiente comando:

```bash
npm install class-transformer@0.5.1 class-validator@0.14.0 dotenv@16.3.1 express@4.18.2 mysql2@3.4.5 nodemon@3.0.1 reflect-metadata@0.1.13 ts-node@10.9.1 jose@4.14.4 typescript@5.1.6
```

Este comando instalará todas las dependencias mencionadas con las versiones específicas.

## Paso 3: Configurar el Proyecto

1. Asegúrate de que tengas un archivo `.env` en el directorio raíz del proyecto con las variables de entorno necesarias para tu proyecto.

2. Configura los scripts de npm en el archivo `package.json` para facilitar la ejecución del proyecto:

```json
  "main": "app.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon app.js",
    "tsc": "tsc -w"
  },
```

## Paso 4: Iniciar el Proyecto

Puedes iniciar el proyecto usando `npm start` para ejecutar la versión compilada en producción o `npm run dev` para ejecutar la versión en modo de desarrollo con nodemon.


## ESTRUCTURA DEL PROYECTO

## *Nota*
Por favor, asegúrate de que el servidor y la base de datos estén configurados correctamente antes de realizar las pruebas con estos endpoints. También es importante tener en cuenta que los tokens JWT generados con el endpoint GET {server}/app/ tienen una vigencia de 1 hora.

En este caso explicaremos los metodos post generales para guardar y validar la información en cada tabla.

## terminos generales
---
### **Descripción**
Este endpoint se utiliza para agregar una nueva valoración a la base de datos.

### **Método**
POST

### **Parámetros de la URL**
Ninguno

**Encabezados**
*Authorization*: Token JWT obtenido del endpoint GET /
si la respuesta es correcta se retornara esta respuesta 
```json
{
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 0,
  "info": "",
  "serverStatus": 2,
  "warningStatus": 0
}
```
---

## POST /ciudad/add

**Descripción:** Agrega una nueva ciudad a la base de datos.

### Cuerpo de la solicitud
```json
{
  "ci_id": 1,
  "ci_nombre": "Medellín",
  "ci_abreviatura": "MDE",
  "fk_departamento": 1
}
```
---

## POST /estado/add

**Descripción:** Agrega un nuevo estado a la base de datos.

### Cuerpo de la solicitud
```json
{
  "est_id": 1,
  "est_nombre": "Pendiente"
}
```
---

## POST /envio/add

**Descripción:** Agrega un nuevo envío a la base de datos.

### Cuerpo de la solicitud
```json
{
  "env_id": 1,
  "fk_env_estado": 1
}
```
---

## POST /venta/add

**Descripción:** Agrega una nueva venta a la base de datos.

### Cuerpo de la solicitud
```json
{
  "ven_id": 1,
  "fk_env_id": 1,
  "venta_hora": "2023-07-23 12:00:00",
  "fk_factura_id": 1
}
```
---

## POST /factura/add

**Descripción:** Agrega una nueva factura a la base de datos.

### Cuerpo de la solicitud
```json
{
  "fac_id": 1
}
```
---

## POST /producto/add

**Descripción:** Agrega un nuevo producto a la base de datos.

### Cuerpo de la solicitud
```json
{
  "prod_id": 1,
  "prod_nombre": "Producto 1",
  "prod_descripcion": "Descripción del producto 1",
  "prod_cantidad": 10,
  "fk_categoria_id": 1,
  "prod_imagen": "url_de_la_imagen"
}
```
---

## POST /categoria/add

**Descripción:** Agrega una nueva categoría a la base de datos.

### Cuerpo de la solicitud
```json
{
  "cat_id": 1,
  "cat_nombre": "Electrónica"
}
```

---
Por supuesto, si deseas eliminar la sección de "Respuesta exitosa" en la documentación de los endpoints, puedes hacerlo para simplificar el README.md. Aquí tienes la versión actualizada:

---

## POST /ciudad/add

**Descripción:** Agrega una nueva ciudad a la base de datos.

### Cuerpo de la solicitud
```json
{
  "ci_id": 1,
  "ci_nombre": "Medellín",
  "ci_abreviatura": "MDE",
  "fk_departamento": 1
}
```

---

## POST /estado/add

**Descripción:** Agrega un nuevo estado a la base de datos.

### Cuerpo de la solicitud
```json
{
  "est_id": 1,
  "est_nombre": "Pendiente"
}
```

---

## POST /envio/add

**Descripción:** Agrega un nuevo envío a la base de datos.

### Cuerpo de la solicitud
```json
{
  "env_id": 1,
  "fk_env_estado": 1
}
```

---

## POST /venta/add

**Descripción:** Agrega una nueva venta a la base de datos.

### Cuerpo de la solicitud
```json
{
  "ven_id": 1,
  "fk_env_id": 1,
  "venta_hora": "2023-07-23 12:00:00",
  "fk_factura_id": 1
}
```

---

## POST /factura/add

**Descripción:** Agrega una nueva factura a la base de datos.

### Cuerpo de la solicitud
```json
{
  "fac_id": 1
}
```

---

## POST /producto/add

**Descripción:** Agrega un nuevo producto a la base de datos.

### Cuerpo de la solicitud
```json
{
  "prod_id": 1,
  "prod_nombre": "Producto 1",
  "prod_descripcion": "Descripción del producto 1",
  "prod_cantidad": 10,
  "fk_categoria_id": 1,
  "prod_imagen": "url_de_la_imagen"
}
```

---

## POST /categoria/add

**Descripción:** Agrega una nueva categoría a la base de datos.

### Cuerpo de la solicitud
```json
{
  "cat_id": 1,
  "cat_nombre": "Electrónica"
}
```

---

# FUNCIONALIDAD ENDPOINTS ESPECIALES 
**url (/app2/...)**
---
A continuación, se presenta la documentación actualizada para los endpoints proporcionados:

---

## GET /productos/:id?

**Descripción:** Obtiene una lista de todos los productos o un producto específico según el ID proporcionado.

### Parámetros de la URL
- `id` (opcional): ID del producto que se desea obtener. Si se proporciona este parámetro, se obtendrá solo el producto específico con el ID correspondiente.

### Respuesta
Si se proporciona el parámetro `id`, se devuelve el producto específico con el ID correspondiente. Si no se proporciona el parámetro, se devuelven todos los productos.

---

## GET /envio/:id?

**Descripción:** Obtiene una lista de todos los registros de envío o un registro de envío específico según el ID proporcionado.

### Parámetros de la URL
- `id` (opcional): ID del registro de envío que se desea obtener. Si se proporciona este parámetro, se obtendrá solo el registro de envío específico con el ID correspondiente.

### Respuesta
Si se proporciona el parámetro `id`, se devuelve el registro de envío específico con el ID correspondiente. Si no se proporciona el parámetro, se devuelven todos los registros de envío.

---

## GET /cantidad/:id

**Descripción:** Obtiene la cantidad de un producto específico según el ID proporcionado.

### Parámetros de la URL
- `id`: ID del producto del cual se desea obtener la cantidad.

### Respuesta
Se devuelve la cantidad del producto específico con el ID proporcionado.

---

## PUT /put/producto/:id

**Descripción:** Actualiza la cantidad de un producto específico según el ID proporcionado.

### Parámetros de la URL
- `id`: ID del producto que se desea actualizar.

### Cuerpo de la solicitud
```json
{
  "prod_cantidad": 20
}
```

### Respuesta
- 200 OK: El producto se ha actualizado correctamente.
- 400 Bad Request: La cantidad del producto proporcionada no es un número válido.
- 404 Not Found: El producto con el ID especificado no fue encontrado.

---

## GET /estadoenvio/:id

**Descripción:** Obtiene el estado de los envíos asociados a un usuario específico según el ID proporcionado.

### Parámetros de la URL
- `id`: ID del usuario del cual se desea obtener el estado de los envíos.

### Respuesta
Se devuelve una lista con los registros de envío asociados al usuario especificado, incluyendo el ID del envío, el ID del estado y el nombre del usuario.

---


