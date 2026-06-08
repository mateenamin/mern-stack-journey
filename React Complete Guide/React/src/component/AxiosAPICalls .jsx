import axios from "axios"
import { useState, useEffect } from "react"

const API = "https://jsonplaceholder.typicode.com"

function AxiosAPICalls () {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState("")

  // GET — Posts lao
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(`${API}/posts?_limit=5`)
        setPosts(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    getPosts()
  }, [])

  // POST — Naya post banao
  const addPost = async () => {
    if (!title) return
    try {
      const { data } = await axios.post(`${API}/posts`, {
        title,
        body: "Naya post",
        userId: 1
      })
      setPosts([data, ...posts])
      setTitle("")
    } catch (err) {
      console.log(err)
    }
  }

  // DELETE — Post hatao
  const deletePost = async (id) => {
    try {
      await axios.delete(`${API}/posts/${id}`)
      setPosts(posts.filter(p => p.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  if (loading) return <h2 style={{ padding: "30px" }}>Loading... ⏳</h2>

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>Posts — Axios CRUD</h1>

      {/* Add Post */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title likho..."
          style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button
          onClick={addPost}
          style={{ background: "#1a1a2e", color: "white", padding: "8px 16px", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          Add Post
        </button>
      </div>

      {/* Posts List */}
      {posts.map(post => (
        <div key={post.id} style={{
          background: "white",
          padding: "16px",
          marginBottom: "10px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <div>
            <h3 style={{ fontSize: "14px" }}>{post.title}</h3>
            <p style={{ color: "gray", fontSize: "12px" }}>ID: {post.id}</p>
          </div>
          <button
            onClick={() => deletePost(post.id)}
            style={{ background: "red", color: "white", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default AxiosAPICalls 