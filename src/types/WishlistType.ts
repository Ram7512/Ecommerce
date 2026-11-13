import type { FeatureProduct } from "./FeatureProductType";

export interface WishlistState {
    wishlistItems: FeatureProduct[];

    addToWishlist: (product: FeatureProduct) => void;

    removeFromWishlist: (id: number) => void;

    clearWishlist: () => void;
}