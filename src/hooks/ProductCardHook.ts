import useSWR from "swr";
import { productServices } from "../services/ProductService";
import type { FeatureProductsResponse } from "../types/FeatureProductType";

function useProducts() {

    const { data, error, isLoading } = useSWR<FeatureProductsResponse>(
        "all-products",
        productServices.getProducts
    );

    return {
        // products: data?.products ?? [],
        data,
        error,
        isLoading,
    };
}

export default useProducts;