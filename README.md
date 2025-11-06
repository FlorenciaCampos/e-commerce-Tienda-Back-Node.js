# 🛒 Mi Cuoco - API REST (Node.js + Express + MongoDB)

API RESTful desarrollada como parte del Trabajo Práctico de la materia Backend con MongoDB.  
Permite administrar productos de una tienda (CRUD completo), gestionar categorías y autenticación de usuarios con JWT.

---
Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Multer (para subida de imágenes)
- JWT (autenticación)
- bcrypt (hash de contraseñas)
- dotenv (variables de entorno)
- CORS

---

---

## 🗃️ Modelo de la base de datos

### 🟦 Usuario
| Campo | Tipo | Requerido |
|--------|------|-----------|
| name | String | ✅ |
| email | String | ✅ (único) |
| password | String (hashed con bcrypt) | ✅ |

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
| image | String (archivo almacenado en `uploads/products`) | ✅ |
| category | ObjectId (ref: Category) | ✅ |

---

Cómo ejecutar el proyecto

repo del back
[git clone https://github.com/TU-USUARIO/e-commerce-Tienda-Back-Node.js.git
cd e-commerce-Tienda-Back-Node.js](https://github.com/FlorenciaCampos/e-commerce-Tienda-Back-Node.js.git)

repo del front
[https://github.com/FlorenciaCampos/micuoco-admin.git](https://github.com/FlorenciaCampos/micuoco-admin.git)
---
Instalar dependencias
npm install
---
Iniciar el servidor
 npm run dev
 ----
.env
 PORT=3000
 MONGODB_URI=mongodb://127.0.0.1:27017/mi_cuoco
 SECRET=miclavesupersegura
 ----
 Servidor corriendo en http://localhost:3000
 --

Endpoints
 
productsRoute
productRoute.get("/getProducts", getProducts);
productRoute.get("/getProducts/:id", getProductById);
productRoute.post("/create", upload.single("image"), createProduct);
productRoute.put("/update/:id", upload.single("image"), updateProduct);
productRoute.delete("/delete/:id", deleteProduct);
--
Se deja igualmente, los endpoints de Usuarios
UserRoute
userRoute.post("/create", createUser);
userRoute.get("/getUsers", getUsers)
userRoute.post("/login", loginUser);
userRoute.delete("/deleteUser/:id", deleteUser)
--

Datos Mock
 
Login
mail:  florencia@gmail.com
contraseña: Flor123#

Se utiliza POSTMAN que recibe FORMDATA, NO JSON
Método: POST
Endpoint: http://localhost:3000/api/product/create

En Postman:

Ir a Body

Seleccionar form-data

Cargar estos valores:
KEY        | VALUE             | TYPE
------------------------------------------------
name       | Kit Mate          | text
price      | 6500              | text
image      | kit-mate.jpg      | file  

La imagen de prueba (kit-mate.jpg) se encuentra en /assets/mock-images/ para usar en Postman.





