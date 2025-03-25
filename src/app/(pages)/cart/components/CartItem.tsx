"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EachElement, formatPrice } from "@/lib/utils";
import ImageProvider from "@/providers/ImageProvider";
import useCartItemStore from "@/zustandStore/cart-store";
import { useStoreAlert } from "@/zustandStore/store-alert";
import { Minus, Plus, X } from "lucide-react";
import React from "react";

const CartTable = () => {
    const alert = useStoreAlert();
    const { cartItems, increase, decrease, removeToCart, setQty } = useCartItemStore();
    return (
        <Table >
            <TableHeader >
                <TableRow>
                    <TableHead className="w-[300px]">Item.</TableHead>
                    <TableHead >Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-start">Total</TableHead>
                    <TableHead className=""></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <EachElement
                    of={cartItems}
                    render={(cart) => {
                        return (
                            <TableRow key={cart.id} className="hover:bg-gray-200 broder-b-gray-200">
                                <TableCell className="font-medium flex flex-row gap-2 items-center">
                                    <ImageProvider fill className="object-cover aspect-square rounded-md w-20 h-20" src={cart.mainImage} />
                                    <p>{cart.name}</p>
                                </TableCell>
                                <TableCell className="min-w-[100px] max-w-[150px]">
                                    <div className="flex flex-row gap-2 items-center">
                                        <Button size={"sm"} onClick={() => {
                                            if (cart.qty <= 1) {
                                                alert.onOpen("Delete it?", {
                                                    callback: () => {
                                                        removeToCart(cart.id)
                                                    }
                                                })
                                            } else {
                                                decrease(cart.id, 1)
                                            }
                                        }}>
                                            <Minus />
                                        </Button>
                                        <Input className="max-w-12 w-12"  value={cart.qty} onChange={(v) => setQty(cart.id, Number(v.target.value))} />
                                        <Button size={"sm"} onClick={() => increase(cart.id, 1)}>
                                            <Plus />
                                        </Button>
                                    </div>
                                </TableCell>
                                <TableCell className="w-[170px]"> {cart.price}</TableCell>
                                <TableCell className="text-start min-w-[170px]">{formatPrice(cart.price * cart.qty, "THB")}</TableCell>
                                <TableCell className="text-center w-[170px]">
                                    <Button asChild variant={"ghost"} onClick={() => removeToCart(cart.id)}>
                                        <X size={50} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    }}
                />
            </TableBody>
        </Table>
    );
};

export default CartTable;