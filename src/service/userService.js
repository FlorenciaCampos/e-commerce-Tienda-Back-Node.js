import { SECRET } from "../../config.js";
import User from "../models/userModels.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// Creamos el usuario

export const createUserService = async (userData) => {

    const userExists = await User.findOne({ email: userData.email });

    if(userExists){
        throw new Error("Usuario con ese mail ya existe")
    }
  
    const newUser = new User(userData);
    await newUser.save()

    return { message: "Uuario creado exitosamente" }
}


export const loginUserService = async (email, password) => {
  // 1. Buscar usuario por email
  const userFound = await User.findOne({ email });
  if (!userFound) {
    throw new Error("Email o contraseña incorrectos");
  }

  // 2. Comparar contraseña ingresada con la guardada
  const isMatch = await bcrypt.compare(password, userFound.password);
  if (!isMatch) {
    throw new Error("Email o contraseña incorrectos");
  }

  // 3. Crear payload para el token
  const payload = {
    id: userFound._id,
    email: userFound.email,
  };

  // 4. Firmar token con SECRET
  const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });

  return { message: "Login exitoso", token };
};

// Obtener todos los usuarios
export const getUsersService = async () => {
    const users = await User.find()
     // Validacion x si no hay usuarios
    if(users.length === 0){
     // Armando el error con su mensaje y su codigo de estado
     const error = new Error("No se encontraron usuarios")
     error.statusCode = 204
     throw error
    }
 
    return users
 }
 
