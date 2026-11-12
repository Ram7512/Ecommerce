import useSWR from "swr";
import { featureProductServices } from "../services/FeatureProductService";
import type { FeatureProduct } from "../types/FeatureProductType";

function useProductDetails(id: number) {

    const { data, error, isLoading } = useSWR<FeatureProduct>(
        id ? ["product-details", id] : null,
        () => featureProductServices.getProductDetails(id)
    );

    return {
        product: data,
        error,
        isLoading,
    };
}

export default useProductDetails;