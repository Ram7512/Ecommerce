import useSWR from "swr";
import { productServices } from "../services/ProductService";
import type { FeatureProductsResponse } from "../types/FeatureProductType";
function useProducts(search: string) {

    const { data, error, isLoading } = useSWR<FeatureProductsResponse>(
       search.trim()
            ? ["products", search]
            : "products",

        () => {
            return search.trim()
                ? productServices.getSearch(search)
                : productServices.getProducts();
        }
    );

    return {
        // products: data?.products ?? [],
        data,
        error,
        isLoading,
    };
}

export default useProducts;