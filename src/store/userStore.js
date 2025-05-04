import { create } from "zustand";

export const userStore = create((set) => ({
  userId: null,
  role: null,
  setUserId: (userId) => set({ userId }),
  setRole: (role) => set({ role }),
}));
