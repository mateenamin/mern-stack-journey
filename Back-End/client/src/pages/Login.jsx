// import { useState } from "react"
// import { Link } from "react-router-dom"

// function Login() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log({ email, password })
//   }

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
//       <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">

//         {/* Logo */}
//         <h1 className="text-3xl font-extrabold text-center mb-2">
//           Shop<span className="text-[#e94560]">ly</span>
//         </h1>
//         <p className="text-center text-gray-400 text-sm mb-8">
//           Welcome back!
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit}>

//           <div className="mb-4">
//             <label className="text-gray-600 text-sm font-semibold">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="email@gmail.com"
//               className="w-full mt-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e94560]"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="text-gray-600 text-sm font-semibold">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//               className="w-full mt-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e94560]"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#e94560] hover:bg-[#c73652] text-white py-3 rounded-xl font-semibold transition duration-300">
//             Login
//           </button>

//         </form>

//         <p className="text-center text-gray-400 text-sm mt-6">
//           Account nahi hai?{" "}
//           <Link to="/register" className="text-[#e94560] font-semibold">
//             Register karo
//           </Link>
//         </p>

//       </div>
//     </div>
//   )
// }

// export default Login




import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLoginMutation } from "../services/authApi"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const [login, { isLoading, isError, error }] = useLoginMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await login({ email, password }).unwrap()
      localStorage.setItem("token", result.token)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">

        <h1 className="text-3xl font-extrabold text-center mb-2">
          Shop<span className="text-[#e94560]">ly</span>
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          Welcome back!
        </p>

        {/* Error Message */}
        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-500 p-3 rounded-xl mb-4 text-sm">
            ❌ {error?.data?.message || "Kuch ghalat hua!"}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-600 text-sm font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              className="w-full mt-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e94560]"
            />
          </div>

          <div className="mb-6">
            <label className="text-gray-600 text-sm font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full mt-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e94560]"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#e94560] hover:bg-[#c73652] text-white py-3 rounded-xl font-semibold transition duration-300 disabled:opacity-50">
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Account nahi hai?{" "}
          <Link to="/register" className="text-[#e94560] font-semibold">
            Register karo
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login