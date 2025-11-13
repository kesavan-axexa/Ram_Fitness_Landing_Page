import { create } from "zustand";

export const useGlobalStore = create((set) => ({
    username: '',
    setUsername: (name) => set({ username: name }),
  
    isLoggedIn: false,
    setIsLoggedIn: (val) => set({ isLoggedIn: val }),
  
    selectedTab: 'home',
    setSelectedTab: (tab) => set({ selectedTab: tab }),
  }));
  