import { create } from "zustand";

const useContentStore = create((set) => ({
	html: "",
	heading: "",
	setHTML: (html) => set(() => ({ html })),
	setHeading: (heading) => set(() => ({ heading })),
}));

export default useContentStore;
