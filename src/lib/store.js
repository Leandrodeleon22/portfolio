import { create } from "zustand";

export const useStore = create((set) => ({
  showMobileNav: null,
  hideMobileNavFunc: (isShow) => set((state) => ({ showMobileNav: isShow })),
}));
