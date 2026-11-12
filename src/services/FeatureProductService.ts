import type { FeatureProductsResponse } from "../types/FeatureProductType";

const API_URL = "https://dummyjson.com/products";

export const featureProductServices = {

    getFeaturedProducts: async (): Promise<FeatureProductsResponse> => {

        const response = await fetch(`${API_URL}?limit=8`);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    },

};