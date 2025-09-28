import express from 'express'
import { createUser, loginUser, getUsers, deleteUser } from '../controllers/userControllers.js'



export const userRoute = express.Router()

//Endpoints
// Verbo http +  path + controller + service
userRoute.post("/create", createUser);
userRoute.get("/getUsers", getUsers)
userRoute.post("/login", loginUser);
userRoute.delete("/deleteUser/:id", deleteUser)
