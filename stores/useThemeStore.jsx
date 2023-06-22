'use client'
import { create } from "zustand";

const useThemeStore = create((set) => ({
    theme: "light",
    setTheme: (newTheme) => set({ theme: newTheme }),
    setLocalStore: () => {
        localStorage.setItem('theme', theme)
    }
}));

export default useThemeStore;
