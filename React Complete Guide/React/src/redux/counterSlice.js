import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",        // Slice ka naam
  initialState: {         // Shuru ki value
    count: 0
  },
  reducers: {             // Actions
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
  }
})

// Actions export karo
export const { increment, decrement, reset } = counterSlice.actions

// Reducer export karo
export default counterSlice.reducer