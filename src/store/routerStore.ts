import { Routes } from "@/lib/emums";
import { create } from "zustand";

interface RouterState {
  currentRoute: Routes;
  setCurrentRoute: (route: Routes) => void;
}

export const useRouterStore = create<RouterState>((set) => ({
  currentRoute: Routes.INITIAL,
  setCurrentRoute: (route) => set({ currentRoute: route }),
}));
