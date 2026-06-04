import UseState from "./component/useState"
import UseEffect from "./component/UseEffect"
import UseRef from "./component/UseRef"
import ConditionalRendering from"./component/ConditionalRendering"
import ListsAndKeys from "./component/ListsAndKeys"
import UseContext from "./component/UseContext"
import UseMemoUseCallback from "./component/UseMemoUseCallback"

function App() {
  let name = "Mateen Amin"
  let role = "Full Stack Developer"
  let age = 25
  let isWorking = true

  return (
    <>
      <h1 style={{ color: "blue" }}>
        Mera naam {name} hai
      </h1>
      <p>Role: {role}</p>
      <p>Age: {age}</p>
      <p>Kaam kar raha hoon: {isWorking ? "Haan!" : "Nahi"}</p>
      <p>2026 mein age: {age + 1}</p>

      {/* <UseState/> */}
      <UseEffect/>
      <UseRef/>
      <ConditionalRendering/>
      <ListsAndKeys/>
      <UseContext/>
      <UseMemoUseCallback/>
    </>
  )
}

export default App


