import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const users = [
  { id: 1, name: "Ali Ahmed", role: "Developer", city: "Lahore" },
  { id: 2, name: "Mateen Amin", role: "Full Stack Dev", city: "Lahore" },
  { id: 3, name: "Ahmed Khan", role: "Designer", city: "Karachi" },
]

function UserDetail() {
  const { id } = useParams() // URL se id lo

  const user = users.find(u => u.id === parseInt(id))

  if (!user) return <h2>User nahi mila! ❌</h2>

  return (
    <div style={{ padding: "30px" }}>
      <h1>{user.name}</h1>
      <p>Role: {user.role}</p>
      <p>City: {user.city}</p>
      <Link to="/users">← Wapas Jao</Link>
    </div>
  )
}

export default UserDetail