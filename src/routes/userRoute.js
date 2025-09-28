import express from 'express'
import { createUser } from '../controllers/userControllers.js'
import {verifyTokenMiddleware} from '../middlewares/verifyTokenMiddleware.js'


export const userRoute = express.Router()

//Endpoints
// Verbo http +  path + controller + service
userRoute.post("/create", createUser)