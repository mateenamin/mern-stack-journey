import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import User from "../models/user.model.js"

const adminSeeder = async () => {
  try {
    // Pehle check karo — admin pehle se hai?
    const existingAdmin = await User.findOne({ 
      email: "admin@shopply.com" 
    })
    
    if (existingAdmin) {
      console.log("Admin already hai!")
      return
    }

    // Password hash karo
    const hashedPassword = await bcrypt.hash("admin123", 10)

    // Admin banao
    await User.create({
      name: "Admin",
      email: "admin@shopply.com",
      password: hashedPassword,
      role: "admin"
    })

    console.log("Admin ban gaya! ✅")

  } catch (error) {
    console.log("Error:", error.message)
  }
}

export default adminSeeder



// Seeders Kyun Banaya:

// Problem:
// Register API mein role hamesha "user" hai!
// Koi bhi admin nahi ban sakta register se!

// Solution — Seeders:
// Seeders = Pehle se data daalna database mein!



// Hamare Case mein:
// Project pehli baar chala
// Seeders ne admin user banaya
// Email: admin@shopply.com
// Password: admin123
// Role: "admin"

// Ab admin login kar sakta hai!


// Kyun Zaroori:
// ❌ Bina seeders:
// Admin kaise banega?
// Koi nahi bana sakta!

// ✅ Seeders se:
// Project start hote hi admin ready!


// Simple Rule:

// Seeders = Zaroorí data pehle se daal do!
// Admin hamesha seeders se banta hai! ✅


