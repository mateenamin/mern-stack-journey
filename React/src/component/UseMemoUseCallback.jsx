import { useState, useMemo, useCallback } from "react"

// Slow calculation simulate karo
function slowCalculation(num) {
  console.log("Calculation ho rahi hai...")
  let result = 0
  for (let i = 0; i < 1000000; i++) {
    result += num
  }
  return result
}

function UseMemoUseCallback() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  // useMemo — sirf count badle tab calculate karo
  const expensiveValue = useMemo(() => {
    return slowCalculation(count)
  }, [count])

  // useCallback — sirf count badle tab naya function bane
  const handleClick = useCallback(() => {
    console.log("Clicked! Count:", count)
  }, [count])

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>

      {/* useMemo test */}
      <div style={{ marginBottom: "20px" }}>
        <h2>useMemo:</h2>
        <p>Calculated Value: {expensiveValue}</p>
        <button onClick={() => setCount(count + 1)}>
          Count+ ({count})
        </button>
      </div>

      {/* useCallback test */}
      <div style={{ marginBottom: "20px" }}>
        <h2>useCallback:</h2>
        <button onClick={handleClick}>
          Click Karo — Console dekho!
        </button>
      </div>

      {/* Name input — calculation dobara nahi hogi! */}
      <div>
        <h2>Name Type Karo:</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type karo — calculation nahi hogi!"
        />
        <p>Name: {name}</p>
      </div>

      {/* Proof */}
      <div style={{
        background: "#f3f4f6",
        padding: "16px",
        borderRadius: "8px",
        marginTop: "20px"
      }}>
        <p>✅ Name type karo — Console mein "Calculation" nahi aayega!</p>
        <p>✅ Count barao — Tab calculation hogi!</p>
      </div>

    </div>
  )
}

export default UseMemoUseCallback