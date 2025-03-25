'use server';

import { PRODUCT_API } from "@/constants";
import { axiosServer } from "@/lib/axios-server";
import { Product, ResponseWithPayload } from "@/types";


export const getProductById = async (id: number): Promise<Product | null> => {
    try {
        const url = PRODUCT_API + "/" + Number(id);
        const response = await axiosServer.get<ResponseWithPayload<Product>>(url);
        return response.data.payload
    } catch (error) {
        console.log(error);
        return null
    }
}
export const getAllProduct = async (page: number, size: number): Promise<Product[]> => {
    try {
        const response = await axiosServer.get<ResponseWithPayload<Product[]>>(`${PRODUCT_API}?page=${page}&size=${size}`);
        return response.data.payload;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getProductByCategory = async (category: string, page: number, size: number): Promise<Product[]> => {
    const response = await axiosServer.get<ResponseWithPayload<Product[]>>(PRODUCT_API, {
        params: {
            category,
            page,
            size
        }
    });

    return response.data.payload;
}


export const getNewProduct = async (): Promise<Product[]> => {
    const response = await axiosServer.get<ResponseWithPayload<Product[]>>(`${PRODUCT_API}`, {
        params: {
            page: 0,
            size: 10,
            orderBy: "createdAt",
            sort: "desc"
        }
    });
    return response.data.payload;
};