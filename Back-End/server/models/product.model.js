import mongoose from "mongoose";

// 1. Naksha (Schema) Tayar Kiya
const productSchema = new mongoose.Schema({
    title: String,  // Humne bataya ke title hamesha text (String) hoga
    price: Number,  // Humne bataya ke price hamesha number hogi
    stock: Boolean  // Humne bataya ke stock true hoga ya false
});

// 2. Is nakshe se "Munshi" (Model) Banaya
const Product = mongoose.model("Product", productSchema);

// 3. Export kar diya taake Controller ise use kar sake
export default Product;



