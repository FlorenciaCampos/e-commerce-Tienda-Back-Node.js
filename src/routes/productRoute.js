import express from 'express'
import { createProduct,getProducts } from '../controllers/productControllers.js'

export const productRoute = express.Router()

//Endpoints


productRoute.post("/create", createProduct)

productRoute.get("/getProducts",getProducts)