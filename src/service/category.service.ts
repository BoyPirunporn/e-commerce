'use server';
import { API_CATEGORY } from "@/constants";
import { axiosServer } from "@/lib/axios-server";
import { Category, ResponseWithPayload } from "@/types";

export const getAllCategories = async (): Promise<Category[]> => {
    try {
        const response = await axiosServer.get<ResponseWithPayload<Category[]>>(API_CATEGORY, {
            params: {
                page: 0,
                size: 10
            }
        });
        return response.data.payload;
    } catch (error) {
        return [];
    }
};