import { create } from "zustand";

interface StoreAlertProps {
    open: boolean;
    onOpen: (message: string, options?: {
        variant?: StoreAlertProps['variant'];
    }) => void;
    variant: "error" | "warning" | "success" | "default";
    message: string;
    onClose: () => void;
}
export const useStoreAlert = create<StoreAlertProps>()(
    (set, get) => ({
        open: false,
        variant: "default",
        message: "",
        onOpen: (message, options) => set({
            open: true,
            message,
            variant: options?.variant || "default",
        }),
        onClose: () => set({ open: false , message: "", variant: "default"}),
    })
);