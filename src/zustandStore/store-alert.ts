import { create } from "zustand";

interface StoreAlertProps {
    open: boolean;
    onOpen: (message: string, options?: {
        variant?: StoreAlertProps['variant'];
        callback?: () => void;
    }) => void;
    variant: "error" | "warning" | "success" | "default";
    message: string;
    onClose: () => void;
    callback?: () => void;
}
export const useStoreAlert = create<StoreAlertProps>()(
    (set, get) => ({
        open: false,
        variant: "default",
        message: "",
        onOpen: (message, options) => {
            console.log({ message, options })
            set({
                open: true,
                message,
                variant: options?.variant || "default",
                callback: options?.callback
            });
        },
        onClose: () => set({ open: false, message: "", variant: "default" }),
    })
);