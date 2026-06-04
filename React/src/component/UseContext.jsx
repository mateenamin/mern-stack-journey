import { createContext, useContext, useState } from "react"

// Context banao
const ThemeContext = createContext()

// Provider Component
function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Navbar — theme use karo
function Navbar() {
  const { isDark, setIsDark } = useContext(ThemeContext)

  return (
    <nav style={{
      background: isDark ? "#1a1a2e" : "#white",
      color: isDark ? "white" : "black",
      padding: "16px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h1>Mateen.dev</h1>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  )
}

// Card — theme use karo
function Card() {
  const { isDark } = useContext(ThemeContext)

  return (
    <div style={{
      background: isDark ? "#2a2a3e" : "white",
      color: isDark ? "white" : "black",
      padding: "20px",
      margin: "20px",
      borderRadius: "8px"
    }}>
      <h2>My Project</h2>
      <p>Yeh card theme ke saath badle ga!</p>
    </div>
  )
}

// App — Provider se wrap karo
function UseContext() {
  return (
    <ThemeProvider>
      <Navbar />
      <Card />
      <Card />
    </ThemeProvider>
  )
}

export default UseContext