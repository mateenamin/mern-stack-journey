import {useState, useRef } from "react"

function UseRef() {
  const inputRef = useRef(null)


  const [count, setCount] = useState(0)
  const renders = useRef(0)

  renders.current = renders.current + 1

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>
        Focus Karo
      </button>



      
      <h2>Count: {count}</h2>
      <h2>Kitni baar render hua: {renders.current}</h2>
      <button onClick={() => setCount(count + 1)}>Plus</button>
    
    </div>
  )
}

export default UseRef