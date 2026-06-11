import mongoose from "mongoose";

const userShceme = new mongoose.Schema(

    {
        name:{
            type :String,
            required :true,
        },
         email :{

            type :String,
            required : true,
            unique : true,
        },
        password :{

            type :String,
            required : true,
        },
        role : {
              type : String,
              default : "user"

//               default: "user"
// ky matlb yea ho gy mare khail sy ky 
// by default yea user ho gy 
// admin hum ko khud krna ho gy
        },
    },
    {timestamps : true}
//                            { ...fields... },    // 1st argument = fields
//   { timestamps: true } // 2nd argument = options
// 2 arguments hain Schema ke:
// 1st = Fields
// 2nd = Options


// timestamps: true = Auto createdAt + updatedAt add ho!
)



// ✅ Yeh sahi hai
export default mongoose.model("User", userSchema)
// "User" = MongoDB mein collection naam
// userSchema = Blueprint
// Model = Blueprint + Database connection!




// Model Ready! ✅
// name     → Zaroori
// email    → Zaroori + Unique
// password → Zaroori
// role     → Default "user"
// timestamps → Auto date


// Seeders Kya Hai:
// Seeders = Database mein pehle se data daalna!
// Admin user seeders se banate hain!



// Pehli baar project run karo
// Seeders chale → Admin user ban gaya
// Email: admin@shopply.com
// Password: admin123
// Role: "admin"