import { Router } from "express"
import { register , login , getProfile , getAdmin} from "../controllers/auth.controller.js"
import { protect, adminOnly } from "../middleware/auth.middleware.js"




const AuthRoutes = Router()

// Public routes
AuthRoutes.post("/register", register)
AuthRoutes.post("/login" , login)


// Protected route — sirf logged in user
AuthRoutes.get("/profile", protect, getProfile)

// Admin route — sirf admin
AuthRoutes.get("/admin", protect, adminOnly, getAdmin)

export default AuthRoutes