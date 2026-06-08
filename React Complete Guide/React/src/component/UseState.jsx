import { useState } from "react"

function UseState() {
  // Number
  const [count, setCount] = useState(0)

  // String
  const [name, setName] = useState("Mateen")

  // Boolean
  const [isVisible, setIsVisible] = useState(true)

  // Array
  const [items, setItems] = useState(["HTML", "CSS", "JS"])

  // Object
  const [user, setUser] = useState({
    name: "Mateen",
    age: 25
  })

  // Array mein item add karna
  const addItem = () => {
    setItems([...items, "React"])
  }

  // Object update karna
  const updateUser = () => {
    setUser({ ...user, age: user.age + 1 })
  }

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>

      {/* Number — Counter */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {/* String — Name */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Naam: {name}</h2>
        <button onClick={() => setName("Ali")}>Ali</button>
        <button onClick={() => setName("Ahmed")}>Ahmed</button>
        <button onClick={() => setName("Mateen")}>Mateen</button>
      </div>

      {/* Boolean — Toggle */}
      <div style={{ marginBottom: "20px" }}>
        <p>{isVisible ? "Dikh raha hoon! 👀" : "Chuup gaya! 🙈"}</p>
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle
        </button>
      </div>

      {/* Array — List */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Skills:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>
          React Add Karo
        </button>
      </div>

      {/* Object — User */}
      <div style={{ marginBottom: "20px" }}>
        <h2>User: {user.name}</h2>
        <p>Age: {user.age}</p>
        <button onClick={updateUser}>
          Age Badao
        </button>
      </div>

    </div>
  )
}

export default UseState