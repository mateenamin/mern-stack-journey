import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer, // counter slice add karo
  }
})

export default store