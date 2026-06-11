import  ProductsRoutes from './products.router.js'

import { Router } from 'express';
import AuthRoutes from "./auth.routes.js"

const router = Router();


router.use('/Products', ProductsRoutes);
router.use("/auth", AuthRoutes)


export default router
