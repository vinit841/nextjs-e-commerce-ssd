import { create } from "zustand";

interface UIState {
    isSideMenuOpen: boolean;
}

interface UIActions {
    openSideMenu: () => void;
    closeSideMenu: () => void;
    toggleSideMenu: () => void;
}

export const useUIStore = create<UIState & UIActions>((set) => ({
    isSideMenuOpen: false,
    openSideMenu: () => set({ isSideMenuOpen: true }),
    closeSideMenu: () => set({ isSideMenuOpen: false }),
    toggleSideMenu: () => set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen })),
}));
