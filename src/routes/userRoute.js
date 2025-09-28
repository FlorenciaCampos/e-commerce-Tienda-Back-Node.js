import express from 'express'
import { createUser, loginUser } from '../controllers/userControllers.js'



export const userRoute = express.Router()

//Endpoints
// Verbo http +  path + controller + service
userRoute.post("/create", createUser)
userRoute.post("/login", loginUser);