import { Link } from "react-router-dom"

const products = [
  { id: 1, name: "iPhone 15", price: 999 },
  { id: 2, name: "Samsung S24", price: 899 },
  { id: 3, name: "MacBook Pro", price: 1999 },
]

function Products() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product.id} style={{
          background: "white",
          padding: "16px",
          marginBottom: "10px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
          <Link to={`/product/${product.id}`}
            style={{
              background: "#1a1a2e",
              color: "white",
              padding: "8px 16px",
              borderRadius: "6px",
              textDecoration: "none"
            }}>
            Detail Dekho →
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Products