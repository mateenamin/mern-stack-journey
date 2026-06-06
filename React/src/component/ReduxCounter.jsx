import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "../redux/counterSlice"

function ReduxCounter() {
  // Store se data lo
  const count = useSelector(state => state.counter.count)

  // Actions dispatch karo
  const dispatch = useDispatch()

  return (
    <div className="bg-gray-100 min-h-screen p-10 font-poppins">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-brand text-center mb-8">
          Redux Toolkit Counter
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-md text-center">

          <h2 className="text-7xl font-bold text-brand mb-8">
            {count}
          </h2>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => dispatch(increment())}
              className="bg-brand text-white px-8 py-3 rounded-xl hover:bg-brand-dark transition font-bold text-xl">
              +
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="bg-red-500 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition font-bold text-xl">
              -
            </button>
            <button
              onClick={() => dispatch(reset())}
              className="bg-gray-400 text-white px-8 py-3 rounded-xl hover:bg-gray-600 transition font-bold">
              Reset
            </button>
          </div>

        </div>

        {/* Redux Flow */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mt-6">
          <p className="text-blue-600 font-semibold text-sm mb-2">
            Redux Flow:
          </p>
          <div className="text-blue-500 text-xs space-y-1">
            <p>1. Button click → dispatch(increment())</p>
            <p>2. Action → Reducer ko jata hai</p>
            <p>3. Reducer → State update karta hai</p>
            <p>4. useSelector → New state leta hai</p>
            <p>5. Screen update hoti hai! ✅</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ReduxCounter