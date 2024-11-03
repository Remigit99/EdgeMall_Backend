import express from "express"
import { createProduct, getAllProducts, getProduct, searchProducts } from "../Controllers/ProductController.js"


const router = express.Router()

//Create Product Route
router.post("/create-product", createProduct )

//Get All Products Route
router.get("/", getAllProducts)

//Get A Specific Product Route
router.get("/product/:id", getProduct)

//Search For Product(s) Route
router.get("/search/:key", searchProducts)


export default router