import { Router } from "express";
import  ProductsRoutes from './products.router.js'

const route = Router();



route.use('/Products', ProductsRoutes);


export default router 
