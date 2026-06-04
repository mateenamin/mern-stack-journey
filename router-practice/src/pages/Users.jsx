import { Link } from "react-router-dom"

const users = [
  { id: 1, name: "Ali Ahmed" },
  { id: 2, name: "Mateen Amin" },
  { id: 3, name: "Ahmed Khan" },
]

function Users() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Users List</h1>
      {users.map(user => (
        <div key={user.id} style={{
          background: "white",
          padding: "12px",
          marginBottom: "8px",
          borderRadius: "8px"
        }}>
          <span>{user.name}</span>
          <Link
            to={`/user/${user.id}`}
            style={{ marginLeft: "16px", color: "blue" }}>
            View Detail →
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Users