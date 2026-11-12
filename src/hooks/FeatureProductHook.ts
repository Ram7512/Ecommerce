import useSWR from "swr";

import { productServices } from "../services/ProductService";

import type { FeatureProductsResponse } from "../types/FeatureProductType";

function useFeaturedProducts() {

    const { data, error, isLoading } = useSWR<FeatureProductsResponse>(
        "featured-products",
        () => productServices.getFeaturedProducts()
    );

    return {
        // products: data?.products ?? [],
        data,
        error,
        isLoading,
    };
}

export default useFeaturedProducts;