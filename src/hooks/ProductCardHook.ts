import useSWR from "swr";
import { productServices } from "../services/ProductService";
import type { FeatureProductsResponse } from "../types/FeatureProductType";
const limit = 16;
function useProducts(search: string, page: number) {
    const skip = (page - 1) * limit;
    const { data, error, isLoading } = useSWR<FeatureProductsResponse>(
        ["products", search, page],
       
        () => {
            return search.trim()
                ? productServices.getSearch(search, limit, skip)
                : productServices.getProducts(limit, skip);
        }
    );

    return {
        // products: data?.products ?? [],
        data,
        error,
        isLoading,
        limit
    };
}

export default useProducts;