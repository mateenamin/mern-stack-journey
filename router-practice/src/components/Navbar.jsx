import { Link, NavLink, useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem("user")

  const logout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <nav style={{
      background: "#1a1a2e",
      padding: "16px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      {/* Logo */}
      <Link to="/" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "22px", fontWeight: "bold" }}>
        Mateen.dev
      </Link>

      {/* Links */}
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>

        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#c9a84c" : "white", textDecoration: "none", fontWeight: isActive ? "bold" : "normal" })}>
          Home
        </NavLink>

        <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "#c9a84c" : "white", textDecoration: "none", fontWeight: isActive ? "bold" : "normal" })}>
          About
        </NavLink>

        <NavLink to="/projects" style={({ isActive }) => ({ color: isActive ? "#c9a84c" : "white", textDecoration: "none", fontWeight: isActive ? "bold" : "normal" })}>
          Projects
        </NavLink>

        <NavLink to="/users" style={({ isActive }) => ({ color: isActive ? "#c9a84c" : "white", textDecoration: "none" })}>
          Users
        </NavLink>

        <NavLink to="/products" style={({ isActive }) => ({ color: isActive ? "#c9a84c" : "white", textDecoration: "none" })}>
          Products
        </NavLink>

        {/* Login hai tو Dashboard + Logout — nahi tو Login */}
        {isLoggedIn ? (
          <>
            <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? "#c9a84c" : "white", textDecoration: "none" })}>
              Dashboard
            </NavLink>
            <button onClick={logout} style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "6px 16px",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? "#c9a84c" : "white", textDecoration: "none" })}>
            Login
          </NavLink>
        )}

      </div>
    </nav>
  )
}

export default Navbar