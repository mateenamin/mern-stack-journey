import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate()

  return (
    <div style={{
      textAlign: "center",
      padding: "80px 30px",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "80px", color: "#1a1a2e", margin: 0 }}>404</h1>
      <h2 style={{ color: "#c9a84c" }}>Page Nahi Mila!</h2>
      <p style={{ color: "gray" }}>Jo page dhundh rahe ho woh exist nahi karta!</p>

      <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "24px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "#1a1a2e",
            color: "white",
            padding: "10px 24px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
          🏠 Home Pe Jao
        </button>

        <button
          onClick={() => navigate(-1)}
          style={{
            background: "#c9a84c",
            color: "white",
            padding: "10px 24px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
          ← Wapas Jao
        </button>
      </div>
    </div>
  )
}

export default NotFound