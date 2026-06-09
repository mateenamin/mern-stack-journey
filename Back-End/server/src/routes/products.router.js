import { Router } from "express";
import productscontroller from '../controllers/products.controller';

const ProductRoutes = Router()


ProductRoutes.get('/all-products',productscontroller.getAllProducts)