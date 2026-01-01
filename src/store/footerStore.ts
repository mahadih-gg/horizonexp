import { create } from "zustand";

interface FooterStore {
  isTouchingTop: boolean;
  setIsTouchingTop: (isTouching: boolean) => void;
}

export const useFooterStore = create<FooterStore>((set) => ({
  isTouchingTop: false,
  setIsTouchingTop: (isTouching: boolean) => set({ isTouchingTop: isTouching }),
}));

