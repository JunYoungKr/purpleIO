import { create } from "zustand";
import { Store } from "@/types";

interface StoreModalState {
  selectedStore: Store | null;
  open: boolean;
  setStore: (store: Store) => void;
  close: () => void;
}

export const useStoreModal = create<StoreModalState>((set) => ({
  selectedStore: null,
  open: false,
  setStore: (store) => set({ selectedStore: store, open: true }),
  close: () => set({ open: false, selectedStore: null }),
}));
