import { PaymentZod, ShippingAddressZod, ShippingFormZod } from "@/app/(pages)/shipping/schema/shipping-schema";
import { report } from "@/lib/utils";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';

interface ShippingStoreProps {
    direction: number;
    formData: ShippingFormZod,
    steps: string[];
    currentStep: number;
    nextStep: () => void;
    previousStep: () => void;
    setShippingAddress: (data: Partial<ShippingAddressZod>) => void;
    setPayment: (data: Partial<PaymentZod>) => void;
    submitForm: (data: ShippingFormZod) => void;
}
export const useShippingStore = create<ShippingStoreProps>()(
    persist(
        (set, get) => ({
            formData: Object.assign({}),
            direction: 1,
            steps: ["Shipping Address", "Payment", "Review Order"],
            currentStep: 1,
            nextStep: () => {
                report.info("NEXT STEP");
                set({
                    direction: 1,
                    currentStep: Math.min(3, get().currentStep += 1)
                });
            },
            previousStep: () => {
                set((state) => ({
                    ...state,
                    direction: -1,
                    currentStep: Math.max(1, get().currentStep -= 1)
                }));
            },
            submitForm: (data) => {
                if (get().currentStep === 1) {
                    set(state => ({
                        ...state,
                        direction:1,
                        currentStep: 2,
                        formData: {
                            ...state.formData,
                            shippingAddress: {
                                ...state.formData.shippingAddress,
                                ...data.shippingAddress
                            }
                        }
                    }));
                } else if (get().currentStep === 2) {
                    set(state => ({
                        ...state,
                        direction:1,
                        currentStep: 3,
                        formData: {
                            ...state.formData,
                            payment: {
                                ...state.formData.payment,
                                ...data.payment
                            }
                        }
                    }));
                }
            },
            setShippingAddress: (data: Partial<ShippingAddressZod>) => {
                set(state => ({
                    ...state,
                    formData: {
                        ...state.formData,
                        shippingAddress: {
                            ...state.formData.shippingAddress,
                            ...data
                        }
                    }
                }));
            },
            setPayment: (data: Partial<PaymentZod>) => {
                set(state => ({
                    ...state,
                    formData: {
                        ...state.formData,
                        payment: {
                            ...state.formData.payment,
                            ...data
                        }
                    }
                }));
            }
        }),
        {
            name: "shipping-storage",
            storage: createJSONStorage(() => sessionStorage)
        })
);