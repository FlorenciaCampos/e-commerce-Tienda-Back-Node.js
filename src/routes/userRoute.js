import express from 'express'
import { createUser } from '../controllers/userControllers.js'



export const userRoute = express.Router()

//Endpoints
// Verbo http +  path + controller + service
userRoute.post("/create", createUser)