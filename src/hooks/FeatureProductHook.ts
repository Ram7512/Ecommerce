import useSWR from "swr";

import { featureProductServices } from "../services/FeatureProductService";

import type { FeatureProductsResponse } from "../types/FeatureProductType";

function useFeaturedProducts() {

    const { data, error, isLoading } = useSWR<FeatureProductsResponse>(
        "featured-products",
        () => featureProductServices.getFeaturedProducts()
    );

    return {
        // products: data?.products ?? [],
        data,
        error,
        isLoading,
    };
}

export default useFeaturedProducts;