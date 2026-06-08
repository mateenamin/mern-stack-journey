import { useState, useEffect } from "react"

function UseEffect() {
    
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Mateen")

  // Example 1 — Document title change
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  // Example 2 — Sirf pehli baar
  useEffect(() => {
    console.log("Component load hua!")
    console.log("API call yahan karenge!")
  }, [])

  // Example 3 — Name change hone pe
  useEffect(() => {
    console.log(`Naam badla: ${name}`)
  }, [name])

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>

      {/* Counter */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Count: {count}</h2>
        <p>Browser tab ka title dekho — change hoga!</p>
        <button onClick={() => setCount(count + 1)}>
          Count Badao
        </button>
      </div>

      {/* Name */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Naam: {name}</h2>
        <button onClick={() => setName("Ali")}>Ali</button>
        <button onClick={() => setName("Ahmed")}>Ahmed</button>
      </div>

    </div>
  )
}

export default UseEffect