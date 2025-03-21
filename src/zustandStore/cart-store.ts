import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Product } from '@/types';

interface CartItem extends Product {
    qty: number;
}

interface CartItemStore {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeToCart: (id: number) => void;
}

const useCartItemStore = create<CartItemStore>()(
    persist(
        (set, _) => ({
            cartItems: [],
            addToCart: (product: Product) => {

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
                            cartItems: [...state.cartItems, { ...product, qty: 1 }],
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
            increase: (id: number) => {
                set(state => ({
                    cartItems: state.cartItems.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item)
                }));
            },
            decrease: (id: number) => {
                set(state => ({
                    cartItems: state.cartItems.map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item)
                }));
            }
        }),
        {
            name: "cart-items",
            storage: createJSONStorage(() => sessionStorage)
        })
);

export default useCartItemStore;