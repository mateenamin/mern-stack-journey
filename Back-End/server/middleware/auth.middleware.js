
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




const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token nahi hai!"
    })
  }

  next()
}

export default authMiddleware