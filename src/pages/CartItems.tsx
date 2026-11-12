import { useCartStore } from "../Stores/CartStore";

function CartItems() {

    const cartItems = useCartStore((state) => state.cartItems);

    const increaseQuantity = useCartStore(
        (state) => state.increaseQuantity
    );

    const decreaseQuantity = useCartStore(
        (state) => state.decreaseQuantity
    );

    const removeFromCart = useCartStore(
        (state) => state.removeFromCart
    );

    const clearCart = useCartStore(
        (state) => state.clearCart
    );

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            <h1 className="text-3xl font-bold mb-8">
                Shopping Cart
            </h1>

            {cartItems.length === 0 ? (

                <div className="text-center py-16">
                    <i className="bi bi-cart-x text-6xl text-gray-400"></i>

                    <h2 className="text-2xl font-semibold mt-4">
                        Your Cart is Empty
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Add some products to your cart.
                    </p>
                </div>

            ) : (

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-5">

                        {cartItems.map((item) => (

                            <div
                                key={item.id}
                                className="flex flex-col sm:flex-row gap-5 border rounded-xl p-4"
                            >

                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-full sm:w-32 h-32 object-contain bg-gray-100 rounded-lg"
                                />

                                <div className="flex-1">

                                    <h3 className="font-semibold text-lg">
                                        {item.title}
                                    </h3>

                                    <p className="text-blue-600 font-bold mt-2">
                                        ${item.price}
                                    </p>

                                    <div className="flex items-center gap-4 mt-4">

                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="border rounded px-3 py-1"
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="border rounded px-3 py-1"
                                        >
                                            +
                                        </button>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 ml-3"
                                        >
                                            <i className="bi bi-trash"></i>
                                            Remove
                                        </button>

                                    </div>

                                </div>

                                <div className="font-bold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>

                            </div>

                        ))}

                        <button
                            onClick={clearCart}
                            className="text-red-500 font-semibold"
                        >
                            <i className="bi bi-trash mr-2"></i>
                            Clear Cart
                        </button>

                    </div>

                    {/* Order Summary */}
                    <div className="border rounded-xl p-6 h-fit">

                        <h2 className="text-xl font-bold mb-5">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mb-4">
                            <span>Total Items</span>
                            <span>{totalItems}</span>
                        </div>

                        <div className="flex justify-between mb-4">
                            <span>Subtotal</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between mb-4">
                            <span>Shipping</span>
                            <span className="text-green-600">Free</span>
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-6">
                            Proceed to Checkout
                        </button>

                    </div>

                </div>

            )}

        </section>
    );
}

export default CartItems;