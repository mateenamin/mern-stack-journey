


import { useState } from "react"

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>

      {/* Login Toggle */}
      <div style={{ marginBottom: "20px" }}>
        {isLoggedIn
          ? <h2>Welcome Mateen! 👋</h2>
          : <h2>Please Login! 🔒</h2>
        }
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      {/* Admin — sirf tab dikhao jab logged in ho */}
      {isLoggedIn && (
        <div style={{ marginBottom: "20px" }}>
          <h3>Admin Panel:</h3>
          <button onClick={() => setIsAdmin(!isAdmin)}>
            {isAdmin ? "Admin Off" : "Admin On"}
          </button>
          {isAdmin && <p style={{ color: "red" }}>⚠️ Admin Access!</p>}
        </div>
      )}

      {/* Loading */}
      <div>
        <button onClick={() => setLoading(!loading)}>
          Toggle Loading
        </button>
        {loading
          ? <p>Loading... ⏳</p>
          : <p>Data Ready! ✅</p>
        }
      </div>

    </div>
  )
}

export default ConditionalRendering