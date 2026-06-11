
// 2. authMiddleware ko use karne ka tareeqa (Specific Route Level)Aap har kisi ko
//  products dekhne ki ijazat de sakte hain,
// lekin naya product add karne (POST) ke liye token zaroori hona chahiye. 
// Isliye isko sirf makhsoos routes par lagayenge.Apni products.router.js file mein 
// jayein aur yeh karein:




// import { Router } from "express";
// import productscontroller from '../controllers/products.controller.js';
// import authMiddleware from '../middlewares/auth.js'; // 👈 Import kiya

// const ProductRoutes = Router();

// // Yeh route sab ke liye khula hai (No Token Needed)
// ProductRoutes.get('/all-products', productscontroller.getAllProducts);

// // 🔒 Is route par controller se pehle check chalega (Token Required)
// ProductRoutes.post('/add-product', authMiddleware, productscontroller.createProduct);

// export default ProductRoutes;




// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "Token nahi hai!"
//     })
//   }

//   next()
// }

// export default authMiddleware





import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

// Login check
export const protect = async (req, res, next) => {

  // Token lo
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Login karo pehle!"
    })
  }

  // Token verify karo
  const decoded = jwt.verify(token, "secret_key")

  // User find karo
  req.user = await User.findById(decoded.id)

  next()
}

// Admin check
export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Sirf admin access!"
    })
  }
  next()
}



// Model      → Blueprint samjha ✅
// Controller → Logic samjha ✅
// Seeders    → Admin auto banta hai ✅


// Tum kisi building mein jao
// → Security guard pehle rokega
// → ID card check karega
// → Sahi hai? → Andar jao!
// → Ghalat hai? → Wapas jao!

// Middleware = Security guard!



// Hamare Case mein:
// ❌ Bina Middleware:
// Koi bhi /profile dekh sakta hai
// Koi bhi products delete kar sakta hai
// Koi bhi admin ban sakta hai!

// ✅ Middleware ke saath:
// /profile → Token check → Login hai? → Andar jao
// /admin   → Token + Role check → Admin hai? → Andar jao


// Kuch pages sirf logged in user dekhe!
// → protect middleware lagao

// Kuch pages sirf admin dekhe!
// → adminOnly middleware lagao

// Real Use:
// Register → Koi bhi ✅ middleware nahi
// Login    → Koi bhi ✅ middleware nahi

// Profile  → Sirf logged in ✅ protect
// Products add → Sirf admin ✅ protect + adminOnly


