# 🛒 Mi Cuoco - API REST (Node.js + Express + MongoDB)

API RESTful desarrollada como parte del Trabajo Práctico de Backend con MongoDB.  
Permite administrar productos de una tienda de comiditas de tela con un **CRUD completo**, gestión de usuarios y subida de imágenes con Multer.

---

## ✨ Características principales

✅ CRUD completo de productos (crear, leer, actualizar y eliminar)  
✅ Subida de imágenes reales usando **multer**  
✅ Manejo de categorías de productos  
✅ Autenticación con **JWT + bcrypt**  
✅ Estructura basada en **MVC + Services**  
✅ Conexión a MongoDB con **Mongoose**

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| Node.js | Entorno de ejecución |
| Express.js | Framework backend |
| MongoDB + Mongoose | Base de datos NoSQL |
| Multer | Upload de imágenes (local en `/uploads/products/`) |
| JWT | Autenticación mediante token |
| bcrypt | Hash de contraseñas |
| dotenv | Variables de entorno |
| CORS | Permitir conexiones desde frontend |

---

## 🗃️ Modelos de la Base de Datos

### 🟦 Usuario
| Campo | Tipo | Requerido |
|--------|------|-----------|
| name | String | ✅ |
| email | String (único) | ✅ |
| password | String (encriptada con bcrypt) | ✅ |

### 🟩 Categoría
| Campo | Tipo | Requerido |
|--------|------|-----------|
| name | String | ✅ |
| description | String | ❌ |

### 🟥 Producto
| Campo | Tipo | Requerido |
|--------|------|-----------|
| name | String | ✅ |
| price | Number | ✅ |
| image | String (archivo almacenado en `/uploads/products/`) | ✅ |
| category | ObjectId (ref: Category) | ✅ |

---

## 🚀 Cómo ejecutar el proyecto

### 📌 1. Clonar el repositorio del backend


git clone https://github.com/FlorenciaCampos/e-commerce-Tienda-Back-Node.js.git
cd e-commerce-Tienda-Back-Node.js

📌 2. Instalar dependencias
npm install

📌 3. Variables de entorno

Crear un archivo .env en la raíz del proyecto con:

PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/mi_cuoco
SECRET=miclavesupersegura

📌 4. Ejecutar el backend

npm run dev

Servidor corriendo en:

👉 http://localhost:3000

src/
 ├── config/
 │    └── multer.js
 ├── controllers/
 ├── models/
 ├── routes/
 ├── service/
uploads/
 └── products/

🔌 Endpoints de la API

🟥 Productos

Método	Endpoint	Descripción

GET	/api/product/getProducts	Obtener todos los productos

GET	/api/product/getProducts/:id	Obtener producto por ID

POST	/api/product/create	Crear producto (con imagen)

PUT	/api/product/update/:id	Editar producto (con imagen opcional)

DELETE	/api/product/delete/:id	Eliminar producto

Todos los endpoints de crear / editar / eliminar requieren autenticación JWT.

🧪 Datos Mock para probar

🔑 Login
email: florencia@gmail.com
contraseña: Flor123#

Este usuario te permitirá obtener el token para realizar operaciones protegidas.
🔐 Autenticación con Token (JWT)
Para rutas protegidas se debe enviar el token en los headers:
Authorization: Bearer TU_TOKEN


📤 Crear producto (POSTMAN - form-data)
📌 Endpoint:
POST http://localhost:3000/api/product/create

| KEY   | VALUE        | TYPE |
| ----- | ------------ | ---- |
| name  | Kit Mate     | text |
| price | 6500         | text |
| image | kit-mate.jpg | file |

📎 La imagen kit-mate.jpg viene incluida en:
/assets/mock-images/

🌐 Repositorios

| Tipo     | URL                                                                                                                                    |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Backend  | [https://github.com/FlorenciaCampos/e-commerce-Tienda-Back-Node.js](https://github.com/FlorenciaCampos/e-commerce-Tienda-Back-Node.js) |
| Frontend | [https://github.com/FlorenciaCampos/micuoco-admin](https://github.com/FlorenciaCampos/micuoco-admin)                                   |

👤 Autora

Florencia Campos
Trabajo práctico para Backend con MongoDB UTNLearning– Año 2025.







