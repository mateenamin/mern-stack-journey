import useStore from "../store/useStore"

function ZustandBasic() {
  const { count, name, isLoggedIn, increment, decrement, reset, changeName, toggleLogin } = useStore()

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center text-brand mb-6">
        Zustand Basic Store
      </h1>

      {/* Counter */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-4 max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Counter</h2>
        <h3 className="text-5xl font-bold text-center text-brand mb-4">{count}</h3>
        <div className="flex gap-3 justify-center">
          <button onClick={increment} className="bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand-dark transition">+</button>
          <button onClick={decrement} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">-</button>
          <button onClick={reset} className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">Reset</button>
        </div>
      </div>

      {/* Name */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-4 max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Name: {name}</h2>
        <div className="flex gap-3">
          <button onClick={() => changeName("Ali")} className="bg-green-500 text-white px-4 py-2 rounded-lg">Ali</button>
          <button onClick={() => changeName("Ahmed")} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Ahmed</button>
          <button onClick={() => changeName("Mateen")} className="bg-purple-500 text-white px-4 py-2 rounded-lg">Mateen</button>
        </div>
      </div>

      {/* Login */}
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">
          Status: {isLoggedIn ? "✅ Logged In" : "❌ Logged Out"}
        </h2>
        <button
          onClick={toggleLogin}
          className={`w-full py-3 rounded-xl text-white font-semibold transition ${isLoggedIn ? "bg-red-500 hover:bg-red-700" : "bg-green-500 hover:bg-green-700"}`}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  )
}

export default ZustandBasic