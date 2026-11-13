import type { FeatureProductsResponse, FeatureProduct } from "../types/FeatureProductType";

const API_URL = "https://dummyjson.com/products";

export const productServices = {

    getFeaturedProducts: async (): Promise<FeatureProductsResponse> => {
        const response = await fetch(`${API_URL}?limit=8`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    },

    getProductDetails: async (id: number): Promise<FeatureProduct> => {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch product details");
        }
        return response.json();
    },

    getProducts: async (): Promise<FeatureProductsResponse> => {
        const response = await fetch(`${API_URL}`);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    },

    getSearch: async (search: string): Promise<FeatureProductsResponse> => {
        const response = await fetch(
            `${API_URL}/search?q=${encodeURIComponent(search)}`
        );

        if (!response.ok) {
            throw new Error("Failed to search products");
        }

        return response.json();
    },


};