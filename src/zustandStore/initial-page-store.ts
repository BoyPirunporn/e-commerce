import { Category } from "@/types";
import { create } from "zustand";

interface InitialPageStoreProps {
    categories: Category[];
    setCategories: (categories: Category[]) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

const useInitialPageStore = create<InitialPageStoreProps>()(
    (set) => ({
        categories: [],
        setCategories(categories) {
            set({ categories });
        },
        loading: false,
        setLoading(loading) {
            set({ loading });
        }
    })
);


export default useInitialPageStore;