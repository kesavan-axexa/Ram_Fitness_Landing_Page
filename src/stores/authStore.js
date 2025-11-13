import { create } from "zustand";
import { persist } from "zustand/middleware";
import { decryptData, encryptData } from "../utils/cryptoHelpers";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      role: null,
      isAuthenticated: false,

      login: (userData) =>
        set({
          user: userData.user,
          role: userData.role,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          role: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "userInfo",
      storage: {
        getItem: (name) => {
          const stored = localStorage.getItem(name);
          return stored ? decryptData(stored) : null;
        },
        setItem: (name, value) => {
          const encrypted = encryptData(value);
          localStorage.setItem(name, encrypted);
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);

export default useAuthStore;
