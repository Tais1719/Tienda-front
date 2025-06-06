// src/store/useAppStore.js
import { create } from 'zustand'

const useAppStore = create((set) => ({
  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({
    count: state.count > 0 ? state.count - 1 : 0
  })),
  resetCount: () => set({ count: 0 }),
}))

export default useAppStore
