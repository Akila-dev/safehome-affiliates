import { create } from "zustand";

const useUiStore = create((set) => ({
	showSidebar: false,
	showNotifications: false,

	toggleNotifications: () =>
		set((state) => ({ ...state, showNotifications: !state.showNotifications })),
	toggleSidebar: () =>
		set((state) => ({ ...state, showSidebar: !state.showSidebar })),
}));

export { useUiStore };
