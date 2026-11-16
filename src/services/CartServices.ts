import type { CartApiResponse } from "../types/CartItemsType";

const API_URL = "https://dummyjson.com/carts";

export const cartServices = {

    getCart: async (): Promise<CartApiResponse> => {

        const response = await fetch(`${API_URL}/1`);

        if (!response.ok) {
            throw new Error("Failed to fetch cart");
        }

        return response.json();
    },

};