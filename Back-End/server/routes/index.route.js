import  ProductsRoutes from './products.router.js'
import { Router } from 'express';
const router = Router();


router.use('/Products', ProductsRoutes);


export default router
