import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const products = [
  { id: 1, name: "iPhone 15", price: 999, desc: "Apple ka latest phone" },
  { id: 2, name: "Samsung S24", price: 899, desc: "Samsung ka best phone" },
  { id: 3, name: "MacBook Pro", price: 1999, desc: "Apple ka best laptop" },
]

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Product nahi mila! ❌</h2>
        <button onClick={() => navigate("/products")}>
          ← Wapas Jao
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "0 auto" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "#1a1a2e",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px"
        }}>
        ← Wapas
      </button>

      <div style={{
        background: "white",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <h1>{product.name}</h1>
        <p style={{ color: "gray" }}>{product.desc}</p>
        <h2 style={{ color: "#1a1a2e" }}>${product.price}</h2>
        <button style={{
          background: "#c9a84c",
          color: "white",
          padding: "10px 24px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%",
          marginTop: "16px"
        }}>
          Buy Now!
        </button>
      </div>
    </div>
  )
}

export default ProductDetail