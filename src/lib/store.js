import { create } from "zustand";

export const useStore = create((set) => ({
  showMobileNav: false,
  hideMobileNavFunc: (isShow) => set((state) => ({ showMobileNav: isShow })),
}));
