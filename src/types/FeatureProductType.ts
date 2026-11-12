export interface FeatureProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    thumbnail: string;
}

export interface FeatureProductsResponse {
    products: FeatureProduct[];
    total: number;
    skip: number;
    limit: number;
}