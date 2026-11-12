import type { FeatureProduct } from "./FeatureProductType";

export interface CartItem extends FeatureProduct {
    quantity: number;
}

export interface CartState {
    cartItems: CartItem[];

    addToCart: (product: FeatureProduct) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}