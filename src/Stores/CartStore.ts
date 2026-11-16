import { create } from "zustand";

import type { CartState } from "../types/CartItemsType";

export const useCartStore = create<CartState>()((set) => ({

    cartItems: [],
    apiCartLoaded: false,

    addToCart: (product) =>
        set((state) => {

            const existingItem = state.cartItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return {
                    cartItems: state.cartItems.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            return {
                cartItems: [
                    ...state.cartItems,
                    { ...product, quantity: 1 },
                ],
            };
        }),

    increaseQuantity: (id) =>
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        })),

    decreaseQuantity: (id) =>
        set((state) => ({
            cartItems: state.cartItems
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0),
        })),

    removeFromCart: (id) =>
        set((state) => ({
            cartItems: state.cartItems.filter(
                (item) => item.id !== id
            ),
        })),

    clearCart: () => set({ cartItems: [] }),

    loadApiCartItems: (products) =>
        set((state) => {

            if (state.apiCartLoaded) {
                return {};
            }

            const apiItems = products.map((product) => ({
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                quantity: product.quantity,
            }));

            const mergedItems = [...apiItems];

            state.cartItems.forEach((localItem) => {

                const existingItem = mergedItems.find(
                    (item) => item.id === localItem.id
                );

                if (existingItem) {

                    existingItem.quantity += localItem.quantity;

                } else {

                    mergedItems.push(localItem);

                }

            });

            return {
                cartItems: mergedItems,
                apiCartLoaded: true,
            };

        }),

}));