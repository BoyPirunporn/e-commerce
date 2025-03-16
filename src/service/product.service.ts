'use server';

import { PRODUCT_API } from "@/constants";
import { axiosServer } from "@/lib/axios-server";
import { Product, ResponseWithPayload } from "@/types";

export const getAllProduct = async (page: number, size: number): Promise<Product[]> => {
    try {
        const response = await axiosServer.get<ResponseWithPayload<Product[]>>(`${PRODUCT_API}?page=${page}&size=${size}`);
        return response.data.payload;
    } catch (error) {
        console.log(error);
        return [];
    }
};
export const getNewProduct = async (): Promise<Product[]> => {
    try {
        const response = await axiosServer.get<ResponseWithPayload<Product[]>>(`${PRODUCT_API}`, {
            params: {
                page: 0,
                size: 10,
                orderBy: "createdAt",
                sort: "desc"
            }
        });
        return response.data.payload;
    } catch (error) {
        console.log(error);
        return [];
    }
};