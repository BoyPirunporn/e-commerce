'use server';

import { PRODUCT_API } from "@/constants";
import { axiosServer } from "@/lib/axios-server";
import { Product, ResponseWithPayload } from "@/types";

export const getAllProduct = async (page: number, size: number): Promise<Product[]> => {
    try {
        const respone = await axiosServer.get<ResponseWithPayload<Product[]>>(`${PRODUCT_API}?page=${page}&size=${size}`);
        return respone.data.payload;
    } catch (error) {
        console.log(error)
        return [];
    }
};
export const getFeatureProduct = async (): Promise<Product[]> => {
    try {
        const respone = await axiosServer.get<ResponseWithPayload<Product[]>>(`${PRODUCT_API}`);
        return respone.data.payload;
    } catch (error) {
        console.log(error)
        return [];
    }
};