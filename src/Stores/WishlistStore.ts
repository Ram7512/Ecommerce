import { create } from "zustand";

import type { WishlistState } from "../types/WishlistType";

export const useWishlistStore = create<WishlistState>()((set) => ({

    wishlistItems: [],

    addToWishlist: (product) =>
        set((state) => {

            const existingItem = state.wishlistItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return state;
            }

            return {
                wishlistItems: [
                    ...state.wishlistItems,
                    product
                ]
            };
        }),

    removeFromWishlist: (id) =>
        set((state) => ({
            wishlistItems: state.wishlistItems.filter(
                (item) => item.id !== id
            )
        })),

    clearWishlist: () => set({
        wishlistItems: []
    })

}));