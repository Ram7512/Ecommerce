function Contact() {
    return (
        <>
            <div className="bg-gray-50 min-h-screen">

                {/* Hero Section */}
                <section className="bg-blue-600 text-white py-16 text-center">

                    <h1 className="text-4xl font-bold mb-4">
                        Contact Us
                    </h1>

                    <p className="text-blue-100 max-w-2xl mx-auto px-4">
                        Have questions or need assistance?
                        We're here to help. Get in touch with our team.
                    </p>

                </section>


                {/* Contact Section */}
                <section className="max-w-7xl mx-auto px-6 py-16">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Information */}
                        <div>

                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Get In Touch
                            </h2>

                            <p className="text-gray-500 mb-8">
                                We'd love to hear from you.
                                Feel free to contact us anytime.
                            </p>


                            {/* Email */}
                            <div className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm mb-5">

                                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl">
                                    <i className="bi bi-envelope"></i>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Email Us
                                    </h3>

                                    <p className="text-gray-500">
                                        support@shopease.com
                                    </p>
                                </div>

                            </div>


                            {/* Phone */}
                            <div className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm mb-5">

                                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl">
                                    <i className="bi bi-telephone"></i>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Call Us
                                    </h3>

                                    <p className="text-gray-500">
                                        +91 98765 43210
                                    </p>
                                </div>

                            </div>


                            {/* Address */}
                            <div className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm mb-5">

                                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl">
                                    <i className="bi bi-geo-alt"></i>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Our Location
                                    </h3>

                                    <p className="text-gray-500">
                                        Hyderabad, Telangana, India
                                    </p>
                                </div>

                            </div>


                            {/* Working Hours */}
                            <div className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm">

                                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl">
                                    <i className="bi bi-clock"></i>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Working Hours
                                    </h3>

                                    <p className="text-gray-500">
                                        Monday - Saturday, 9 AM - 6 PM
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-md">

                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Send Us a Message
                            </h2>

                            <p className="text-gray-500 mb-6">
                                Fill out the form below and we'll get back to you.
                            </p>

                            <form className="space-y-5">

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>


                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>


                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter subject"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>


                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Message
                                    </label>

                                    <textarea
                                        rows={5}
                                        placeholder="Write your message..."
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    ></textarea>
                                </div>


                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                                >
                                    <i className="bi bi-send mr-2"></i>
                                    Send Message
                                </button>

                            </form>

                        </div>

                    </div>

                </section>


                {/* Map Section */}
                <section className="max-w-7xl mx-auto px-6 pb-16">

                    <div className="bg-blue-100 rounded-2xl h-64 flex flex-col items-center justify-center text-blue-700">

                        <i className="bi bi-map text-5xl mb-3"></i>

                        <h2 className="text-xl font-semibold">
                            Find Our Location
                        </h2>

                        <p className="text-sm mt-2">
                            Hyderabad, Telangana, India
                        </p>

                    </div>

                </section>

            </div>

        </>
    );
}

export default Contact;