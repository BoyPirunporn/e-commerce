import { ShippingAddress } from "@/types";
import { z } from "zod";

export const shippingAddressZod: z.ZodType<ShippingAddress> = z.object({
    recipientName: z.string().min(6),
    phoneNumber: z.string().min(8),
    addressLine1: z.string().min(1),
    province: z.string().min(1),
    district: z.string().min(1),
    subDistrict: z.string().min(1),
    postalCode: z.string().min(5),
});
export type ShippingAddressZod = z.infer<typeof shippingAddressZod>;

export const paymentMethod = z.enum(["CREDIT_CARD","BANK_TRANSFER","CASH"]);
export const paymentZod = z.object({
    paymentMethod: paymentMethod.default("CASH")
});

export type PaymentZod = z.infer<typeof paymentZod>;


export const shippingFormZod = z.object({
    shippingAddress: shippingAddressZod,
    payment: paymentZod
});
export type ShippingFormZod = z.infer<typeof shippingFormZod>;