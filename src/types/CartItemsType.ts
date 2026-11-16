import type { FeatureProduct } from "./FeatureProductType";

export interface CartItem extends Pick<FeatureProduct, "id" | "title" | "price" | "thumbnail"> {
    quantity: number;
}

export interface CartApiProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
}

export interface CartApiResponse {
    id: number;
    products: CartApiProduct[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

export interface CartState {
    cartItems: CartItem[];
    apiCartLoaded: boolean;

    addToCart: (product: FeatureProduct) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;

    loadApiCartItems: (products: CartApiProduct[]) => void;
}