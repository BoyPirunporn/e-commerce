import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Product, ProductOptionValue } from '@/types';

export interface SelectOptionValue {
    [key: number]: ProductOptionValue;
}
interface CartItem extends Product {
    qty: number;
    selectOptionValue: SelectOptionValue;
}

interface CartItemStore {
    cartItems: CartItem[];
    addToCart: (product: Product, selectOptionValue: SelectOptionValue) => void;
    removeToCart: (id: number) => void;
    increase: (id: number, qty: number) => void;
    decrease: (id: number, qty: number) => void;
    setQty: (id: number, qty: number) => void;
}

const useCartItemStore = create<CartItemStore>()(
    persist(
        (set, _) => ({
            cartItems: [],
            addToCart: (product: Product, selectOptionValue: SelectOptionValue) => {
                set(state => {
                    const existingItem = state.cartItems.find((item) => item.id === product.id);

                    if (existingItem) {
                        // ถ้าเจอสินค้าในตะกร้าแล้ว อัปเดต qty แทนการเพิ่มใหม่
                        return {
                            cartItems: state.cartItems.map((item) =>
                                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                            ),
                        };
                    } else {
                        // ถ้าไม่เจอ ให้เพิ่มสินค้าใหม่เข้าตะกร้า
                        return {
                            cartItems: [...state.cartItems, { ...product, qty: 1, selectOptionValue }],
                        };
                    }
                });

            },
            removeToCart: (id: number) => {
                set(state => ({
                    ...state,
                    cartItems: state.cartItems.filter((item) => item.id !== id)
                }));
            },
            increase: (id: number, qty: number = 1) => {
                set(state => ({
                    cartItems: state.cartItems.map((item) => item.id === id ? { ...item, qty: item.qty + qty } : item)
                }));
            },
            decrease: (id: number, qty: number) => {
                set(state => {
                    return ({
                        cartItems: state.cartItems.map((item) => item.id === id ? { ...item, qty: item.qty - qty } : item)
                    })
                });
            },
            setQty: (id, qty) => {
                console.log(id, qty)
                set(state => ({
                    cartItems: state.cartItems.map((item) => item.id === id ? { ...item, qty: item.qty + qty } : item)
                }))
            },
        }),
        {
            name: "cart-items",
            storage: createJSONStorage(() => sessionStorage)
        })
);

export default useCartItemStore;