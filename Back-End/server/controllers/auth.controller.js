// Register mein kya hota hai — real life mein?

// Socho tum kisi website pe register kar rahe ho:

// Naam dete ho
// Email dete ho
// Password dete ho
// Submit karte ho



// Controller mein yahi hota hai:
// User ne data diya → aya req.body mein
// Check karo → Sab fields hain?
// Email pehle se hai? → Check karo
// Password safe karo → bcrypt
// Database mein save karo → User.create()
// Token do → jwt
// Response bhejo → res.json()


import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// User     → Database se user ka kaam
// bcrypt   → Password hash karna
// jwt      → Token banana

export const register = async (req ,res) ={

   // 1. Data lo
  const : { name, email, password } = req.body



}