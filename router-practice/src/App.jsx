import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Users from "./pages/Users"
import UserDetail from "./pages/UserDetail"
import Login from "./pages/Login"

import ProtectedRoute from "./components/ProtectedRoute"


import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"


import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Orders from "./pages/Orders"

import NotFound from "./pages/NotFound"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users" element={<Users />} />
<Route path="/user/:id" element={<UserDetail />} />
        <Route path="/login" element={<Login />} />


        <Route path="/products" element={<Products />} />
<Route path="/product/:id" element={<ProductDetail />} />







   <Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
  <Route path="orders" element={<Orders />} />
</Route>

// Sab routes ke BAAD add karo
<Route path="*" element={<NotFound />} />

{/* path="*" — hamesha last mein rakho!
Koi bhi URL match nahi hua — yeh chalega! */}
      </Routes>
    </BrowserRouter>


  )
}

export default App