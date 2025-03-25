"use client";
import ButtonCustom from "@/components/buttonCustom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn, delay, formatPrice } from "@/lib/utils";
import useCartItemStore from "@/zustandStore/cart-store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

const CartSummary = () => {
    const { data: session } = useSession();
    const { cartItems } = useCartItemStore();
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const totalPrice = useMemo(() => {
        return cartItems && cartItems.length > 0 ? cartItems.reduce((p, c) => p += (c.price * c.qty), 0) : 0;
    }, [cartItems]);

    const handleClick = async () => {
        setLoading(true);
        await delay(2000)
        if (!session) return router.push("/auth?redirect=/cart")
        try {
            await delay(3000);
            router.push("/shipping")
        } catch (error) {
        } finally {
            setLoading(false);
        }

    };
    return (
        <div className="flex flex-col  gap-5 h-full ">
            <h1 className="text-[2rem] font-bold mb-5">Summary</h1>
            <Separator className="bg-gray-300" />
            <div className=" font-normal text-sm flex flex-row justify-between">
                <p>Subtotal</p>
                <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex font-normal text-sm flex-row justify-between">
                <p>Vat 7%</p>
                <span>{formatPrice((totalPrice * 0.07))}</span>
            </div>
            <Separator className="bg-gray-300" />

            <div className="flex font-normal text-sm flex-row justify-between">
                <p>Total</p>
                <span>{formatPrice(totalPrice * (1 + (7 / 100)))}</span>
            </div>

            <Separator className="bg-gray-300" />
            <ButtonCustom
                onClick={handleClick}
                loading={loading}
            >
                Go to checkout
            </ButtonCustom>
        </div>
    );
};

export default CartSummary;