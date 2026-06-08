import { useState } from "react"

// Products list
function ProductList({ onAdd }) {
  const products = [
    { id: 1, name: "iPhone", price: 999 },
    { id: 2, name: "MacBook", price: 1999 },
    { id: 3, name: "AirPods", price: 199 },
  ]

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id} style={{
          background: "white",
          padding: "12px",
          marginBottom: "8px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <span>{p.name} — ${p.price}</span>
          <button
            onClick={() => onAdd(p)}
            style={{ background: "blue", color: "white", border: "none", padding: "4px 12px", borderRadius: "4px", cursor: "pointer" }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

// Cart
function Cart({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div style={{ padding: "20px", background: "#f3f4f6", borderRadius: "8px" }}>
      <h2>Cart 🛒 ({items.length})</h2>
      {items.map((item, i) => (
        <p key={i}>✅ {item.name} — ${item.price}</p>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  )
}

// App — State yahan hai!
function LiftingStateUp() {
  const [cart, setCart] = useState([]) // ← State parent mein!

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>Shop</h1>
      <ProductList onAdd={addToCart} />
      <Cart items={cart} />
    </div>
  )
}

export default LiftingStateUp