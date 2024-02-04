import { create } from "zustand";

const useContentStore = create((set) => ({
	html: "",
	heading: "",
	description: "",
	setHTML: (html) => set(() => ({ html })),
	setHeading: (heading) => set(() => ({ heading })),
	setDescription: (description) => set(() => ({ description })),
}));

export default useContentStore;
