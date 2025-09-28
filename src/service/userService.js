import { SECRET } from "../../config.js";
import User from "../models/userModels.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// Creamos el usuario

export const createUserService = async (userData) => {

    const userExists = await User.findOne({ email: userData.email });

    if(userExists){
        throw new Error("User with this email aready exists")
    }
    // Creamos el user
    const newUser = new User(userData);
    // Save
    await newUser.save()

    return { message: "User created" }
}