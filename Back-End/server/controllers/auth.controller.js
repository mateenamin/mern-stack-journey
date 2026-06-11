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

export  const register = async (req ,res) =>{

   // 1. Data lo
  const  { name, email, password } = req.body

  // 2. Check karo — sab fields hain?
if (!name || !email || !password) {

  return res.status(400).json({
    success: false,
    message: "Sab fields do!"
  })
}


// !name     → name nahi diya
// !email    → email nahi diya
// !password → password nahi diya

// Ek bhi missing → Error bhejo!
// return → Aage mat jao!


// 3. Email pehle se hai?
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "Email already registered!"
    })
  }

//   User same email se dobara register na kare!
// findOne({ email }) → Database mein dhundo
// Mila → Error bhejo
// Nahi mila → Aage jao!

  // 4. Password hash karo — bcrypt

  const hashedPassword = await bcrypt.hash(password, 10)


//   (password, 10)
//   Is function ke andar humne 2 cheezain bheji hain:
  
//   password: Yeh user ka asli password hai (jaise Mateen786) jo front-end se aaya tha aur 
//   jisko humne chupaana hai.
  
//   10 (Salt Rounds): Yeh sab se mazedar cheez hai. Is number ko Salt Rounds kehte hain.
// Iska matlab hai ke computer is password ko kitni gehrai aur mazbooti se ghuma-phira 
// kar lock karega.

// 10 ek industry-standard standard number hai. Agar aap isko 15 kar denge, toh password aur 
// zyaada secure ho jayega lekin computer use lock karne mein zyaada time lega, jis se aapki 
// app slow ho sakti hai. 10 bilkul perfect speed aur security deta hai.
  


  // 5. User banao — MongoDB mein save
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })


  // 6. Token banao — JWT
  const token = jwt.sign(
    { id: user._id },
    "secret_key",
    { expiresIn: "7d" }
  )

//   .sign() us package ka ek special function hai jiska kaam hota hai naya token Banana 
//   (Generate karna). Is function ke andar hum 3 zaroori cheezain bhejte 
//   hain jo niche likhi hain:

//   { id: user._id } (Payload / Data)
//   "secret_key" (Secret Signature / Lock)
//   { expiresIn: "7d" } (Expiry Date)


// 7. Response bhejo
  res.status(201).json({
    success: true,
    message: "Register ho gaya!",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  })

//   4. token,
  
//   Humne jo pichli line mein JWT Token banaya tha, woh hum yahan front-end ko de rahe hain. 
//   Front-end is token ko browser ki memory (LocalStorage) mein sambhal kar rakh lega, 
//   taake aage chal kar secure pages kholne ke liye isko use kar sake.
  
//   5. user: { id: user._id, name: user.name, email: user.email }
  
//   Yeh bohut ahem step hai. Hum database se user ka data bhej rahe hain, 
//   lekin sirf zaroori cheezain (ID, Name, aur Email).




}


export const login = async (req ,res ) =>{

    // 1. Data lo
     const {  email , password } = req.body


     // 2. Validate

     if(!email || !password){
        return res.status(400).json({
            success: false,
            message: "Email aur Password do"
        })
     }


     // 3. User dhundo — MongoDB mein
     const user = await User.findOne({ email })
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User nahi mila!"
    })
  }


    // 4. Password check karo — bcrypt

    const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Password ghalat hai!"
    })
  }


  // 5. Token banao
  const token = jwt.sign(
    { id: user._id },
    "secret_key",
    { expiresIn: "7d" }
  )

  // 6. Response bhejo
  res.json({
    success: true,
    message: "Login ho gaya!",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
})

}


 
// Profile
export const getProfile = async (req, res) => {
  res.json({
    success: true,
    user: req.user
  })
}

// Admin
export const getAdmin = async (req, res) => {
  res.json({
    success: true,
    message: "Admin page!",
    user: req.user
  })
}