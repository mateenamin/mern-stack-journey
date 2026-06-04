import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === "mateen@gmail.com" && password === "123456") {
      // LocalStorage mein save karo
      localStorage.setItem("user", JSON.stringify({ email }))
      navigate("/dashboard/profile")
    } else {
      setError("Email ya password ghalat hai!")
    }
  }

  return (
    <div style={{
      padding: "30px",
      maxWidth: "400px",
      margin: "50px auto",
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ textAlign: "center" }}>Login</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mateen@gmail.com"
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123456"
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>

        <button type="submit" style={{
          background: "#1a1a2e",
          color: "white",
          width: "100%",
          padding: "10px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Login Karo
        </button>
      </form>
    </div>
  )
}

export default Login