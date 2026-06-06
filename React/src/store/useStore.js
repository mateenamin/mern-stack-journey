import { create } from "zustand"

const useStore = create((set) => ({
  count: 0,
  name: "Mateen",
  isLoggedIn: false,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  changeName: (newName) => set({ name: newName }),
  toggleLogin: () => set(state => ({ isLoggedIn: !state.isLoggedIn })),
}))

export default useStore
