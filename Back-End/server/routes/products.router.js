import { Router } from "express";
import productscontroller from '../controllers/products.controller.js';



const ProductRoutes = Router()

// Yeh route sab ke liye khula hai (No Token Needed)
ProductRoutes.get('/all-products',productscontroller.getAllProducts)


// 🔒 Is route par controller se pehle check chalega (Token Required) 
// ProductRoutes.post('/add-product', authMiddleware, productscontroller.createProduct);


export default ProductRoutes