import useSWR from "swr";
import { productServices } from "../services/ProductService";
import type { FeatureProduct } from "../types/FeatureProductType";

function useProductDetails(id: number) {

    const { data, error, isLoading } = useSWR<FeatureProduct>(
        id ? ["product-details", id] : null,
        () => productServices.getProductDetails(id)
    );

    return {
        product: data,
        error,
        isLoading,
    };
}

export default useProductDetails;