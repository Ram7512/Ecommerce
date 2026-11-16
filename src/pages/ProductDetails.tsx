import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router";
import useSWR from "swr";

import { productServices } from "../services/ProductService";
import type { FeatureProduct } from "../types/FeatureProductType";

import { useCartStore } from "../Stores/CartStore";
import { useWishlistStore } from "../Stores/WishlistStore";
import Header from "../components/Header";
import Footer from "../components/Footer";


function ProductDetails() {

    const { id } = useParams();

    const [selectedImage, setSelectedImage] = useState("");

    // Cart Store
    const addToCart = useCartStore((state) => state.addToCart);

    // Wishlist Store
    const addToWishlist = useWishlistStore(
        (state) => state.addToWishlist
    );

    const wishlistItems = useWishlistStore(
        (state) => state.wishlistItems
    );

    // Fetch Product Details
    const { data: product, error, isLoading } = useSWR<FeatureProduct>(
        id ? ["product-details", id] : null,
        () => productServices.getProductDetails(Number(id))
    );

    // Set Default Image
    useEffect(() => {
        if (product) {
            setSelectedImage(product.images?.[0] || product.thumbnail);
        }
    }, [product]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <p className="text-xl font-semibold text-gray-600">
                    Loading product details...
                </p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center gap-4">
                <h2 className="text-2xl font-bold text-red-500">
                    Product not found
                </h2>

                <NavLink
                    to="/products"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                >
                    Back to Products
                </NavLink>
            </div>
        );
    }

    const isWishlisted = wishlistItems.some(
        (item) => item.id === product.id
    );

    const discountedPrice =
        product.price -
        (product.price * product.discountPercentage) / 100;

    const handleAddToCart = () => {
        addToCart(product);
    };

    const handleWishlist = () => {
        if (!isWishlisted) {
            addToWishlist(product);
        }
    };

    return (
        <>
            <Header />
            <div className="bg-gray-50 min-h-screen py-10">

                <div className="max-w-7xl mx-auto px-5">

                    {/* Breadcrumb */}

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">

                        <NavLink to="/" className="hover:text-blue-600">
                            Home
                        </NavLink>

                        <i className="bi bi-chevron-right"></i>

                        <NavLink to="/products" className="hover:text-blue-600">
                            Products
                        </NavLink>

                        <i className="bi bi-chevron-right"></i>

                        <span className="text-gray-800 font-medium">
                            {product.title}
                        </span>

                    </div>


                    {/* Product Main Section */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 md:p-10 rounded-2xl shadow-sm">


                        {/* LEFT - Product Images */}

                        <div>

                            <div className="bg-gray-50 rounded-xl p-6 flex justify-center items-center h-[400px]">

                                <img
                                    src={selectedImage || product.thumbnail}
                                    alt={product.title}
                                    className="max-h-full max-w-full object-contain"
                                />

                            </div>


                            {/* Image Gallery */}

                            <div className="flex gap-4 mt-5 flex-wrap">

                                {product.images.map((image, index) => (

                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(image)}
                                        className={`w-20 h-20 border rounded-lg p-2 ${selectedImage === image
                                            ? "border-dark-900"
                                            : "border-gray-300"
                                            }`}
                                    >

                                        <img
                                            src={image}
                                            alt={`${product.title} ${index + 1}`}
                                            className="w-full h-full object-contain"
                                        />

                                    </button>

                                ))}

                            </div>

                        </div>


                        {/* RIGHT - Product Information */}

                        <div>

                            {/* Category */}

                            <p className="text-blue-600 uppercase text-sm font-semibold tracking-wider">
                                {product.category}
                            </p>


                            {/* Title */}

                            <h1 className="text-3xl font-bold text-gray-900 mt-3">
                                {product.title}
                            </h1>


                            {/* Brand */}

                            <p className="text-gray-500 mt-2">
                                Brand: <span className="font-semibold text-gray-800">
                                    {product.brand}
                                </span>
                            </p>


                            {/* Rating */}

                            <div className="flex items-center gap-2 mt-4">

                                <div className="flex text-yellow-400">

                                    {Array.from({ length: 5 }).map((_, index) => (

                                        <i
                                            key={index}
                                            className={`bi ${index < Math.round(product.rating)
                                                ? "bi-star-fill"
                                                : "bi-star"
                                                }`}
                                        ></i>

                                    ))}

                                </div>

                                <span className="text-gray-600 text-sm">
                                    {product.rating} / 5
                                </span>

                                <span className="text-gray-400 text-sm">
                                    ({product.reviews.length} Reviews)
                                </span>

                            </div>


                            {/* Price */}

                            <div className="flex items-center gap-3 mt-6">

                                <h2 className="text-3xl font-bold text-gray-900">
                                    ${discountedPrice.toFixed(2)}
                                </h2>

                                <span className="text-gray-400 line-through text-lg">
                                    ${product.price}
                                </span>

                                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                                    {product.discountPercentage}% OFF
                                </span>

                            </div>


                            {/* Description */}

                            <p className="text-gray-600 leading-7 mt-6">
                                {product.description}
                            </p>


                            {/* Stock */}

                            <div className="mt-6">

                                <span className={`font-semibold ${product.stock > 0
                                    ? "text-green-600"
                                    : "text-red-600"
                                    }`}>

                                    <i className="bi bi-check-circle-fill mr-2"></i>

                                    {product.availabilityStatus}

                                </span>

                                <p className="text-sm text-gray-500 mt-1">
                                    {product.stock} items available
                                </p>

                            </div>


                            {/* Buttons */}

                            <div className="flex gap-4 mt-8">

                                <button
                                    onClick={handleAddToCart}
                                    disabled={product.stock <= 0}
                                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >

                                    <i className="bi bi-cart-plus mr-2"></i>

                                    Add to Cart

                                </button>


                                <button
                                    onClick={handleWishlist}
                                    className="w-14 border border-gray-300 rounded-lg text-xl hover:bg-red-50 hover:text-red-500 transition"
                                >

                                    <i className={`bi ${isWishlisted
                                        ? "bi-heart-fill text-red-500"
                                        : "bi-heart"
                                        }`}></i>

                                </button>

                            </div>


                            {/* Delivery Information */}

                            <div className="border-t mt-8 pt-6 space-y-4">

                                <div className="flex gap-3 items-center">

                                    <i className="bi bi-truck text-2xl text-blue-600"></i>

                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            Shipping Information
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {product.shippingInformation}
                                        </p>
                                    </div>

                                </div>


                                <div className="flex gap-3 items-center">

                                    <i className="bi bi-shield-check text-2xl text-blue-600"></i>

                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            Warranty
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {product.warrantyInformation}
                                        </p>
                                    </div>

                                </div>


                                <div className="flex gap-3 items-center">

                                    <i className="bi bi-arrow-repeat text-2xl text-blue-600"></i>

                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            Return Policy
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {product.returnPolicy}
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Product Specifications */}

                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mt-10">

                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Product Specifications
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="flex justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">Brand</span>
                                <span className="font-medium">{product.brand}</span>
                            </div>

                            <div className="flex justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">Category</span>
                                <span className="font-medium">{product.category}</span>
                            </div>

                            <div className="flex justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">SKU</span>
                                <span className="font-medium">{product.sku}</span>
                            </div>

                            <div className="flex justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">Weight</span>
                                <span className="font-medium">{product.weight} g</span>
                            </div>

                            <div className="flex justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">Dimensions</span>
                                <span className="font-medium">
                                    {product.dimensions.width} ×
                                    {product.dimensions.height} ×
                                    {product.dimensions.depth}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">Minimum Order</span>
                                <span className="font-medium">
                                    {product.minimumOrderQuantity}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">Barcode</span>
                                <span className="font-medium">{product.meta.barcode}</span>
                            </div>

                            <div className="flex justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">Availability</span>
                                <span className="font-medium">
                                    {product.availabilityStatus}
                                </span>
                            </div>

                        </div>

                        {/* Product Tags */}

                        <div className="mt-7">

                            <h3 className="font-semibold mb-3">Product Tags</h3>

                            <div className="flex gap-2 flex-wrap">

                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}

                            </div>

                        </div>

                    </div>


                    {/* Customer Reviews */}

                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mt-10">

                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Customer Reviews ({product.reviews.length})
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {product.reviews.map((review, index) => (

                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-5"
                                >

                                    <div className="flex justify-between items-center">

                                        <h3 className="font-semibold text-gray-800">
                                            {review.reviewerName}
                                        </h3>

                                        <span className="text-xs text-gray-400">
                                            {new Date(review.date).toLocaleDateString()}
                                        </span>

                                    </div>


                                    {/* Review Rating */}

                                    <div className="flex text-yellow-400 my-3">

                                        {Array.from({ length: 5 }).map((_, i) => (

                                            <i
                                                key={i}
                                                className={`bi ${i < review.rating
                                                    ? "bi-star-fill"
                                                    : "bi-star"
                                                    }`}
                                            ></i>

                                        ))}

                                    </div>


                                    <p className="text-gray-600 text-sm leading-6">
                                        {review.comment}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>
            <Footer />
        </>
    );
}


export default ProductDetails;