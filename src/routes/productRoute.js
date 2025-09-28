import express from 'express'
import { createProduct } from '../controllers/productControllers.js'

export const productRoute = express.Router()

//Endpoints


productRoute.post("/create", createProduct)
