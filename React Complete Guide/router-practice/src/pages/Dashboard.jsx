import { NavLink, Outlet } from "react-router-dom"

function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard</h1>

      {/* Nested Links */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
        <NavLink to="/dashboard/profile"
          style={({ isActive }) => ({
            color: isActive ? "#c9a84c" : "black",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal"
          })}>
          Profile
        </NavLink>

        <NavLink to="/dashboard/settings"
          style={({ isActive }) => ({
            color: isActive ? "#c9a84c" : "black",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal"
          })}>
          Settings
        </NavLink>

        <NavLink to="/dashboard/orders"
          style={({ isActive }) => ({
            color: isActive ? "#c9a84c" : "black",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal"
          })}>
          Orders
        </NavLink>
      </div>

      {/* Yahan nested page dikhega */}
      <Outlet />
    </div>
  )
}

export default Dashboard