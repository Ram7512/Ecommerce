import { Form, Field, useForm } from "@formisch/react";
import * as v from "valibot";
import { NavLink } from "react-router";
import Header from "../components/Header";
import { useState } from "react";
import { RegisterSchema } from "../schemas/RegisterSchema";
import { useRegister } from "../hooks/AuthenticationHook";
function Register() {
    const [success, setSuccess] = useState("");
    const {
        trigger: register,
        isMutating: isLoading,
        error,
        reset,
    } =useRegister();

    const registerForm = useForm({
        schema: RegisterSchema,
    });

    const handleRegister = async (
        data: v.InferOutput<typeof RegisterSchema>
    ) => {
        try {
            reset();
            setSuccess("");
            const response = await register(data);
            console.log("Registered User:", response);
            setSuccess("Account created successfully! Please login.");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Header />

            <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-10">

                <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">

                    {/* Heading */}

                    <div className="text-center mb-8">

                        <h1 className="text-3xl font-bold text-gray-800">
                            Create Account
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Join ShopEase and start shopping
                        </p>

                    </div>

                    <Form
                        of={registerForm}
                        onSubmit={handleRegister}
                        className="space-y-4"
                    >

                        {/* First Name and Last Name */}

                        <div className="grid grid-cols-2 gap-4">

                            <Field of={registerForm} path={["firstName"]}>
                                {(field) => (
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            First Name
                                        </label>

                                        <input
                                            {...field.props}
                                            value={field.input}
                                            type="text"
                                            placeholder="First name"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                        />

                                        {field.errors?.[0] && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {field.errors[0]}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </Field>

                            <Field of={registerForm} path={["lastName"]}>
                                {(field) => (
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Last Name
                                        </label>

                                        <input
                                            {...field.props}
                                            value={field.input}
                                            type="text"
                                            placeholder="Last name"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                        />

                                        {field.errors?.[0] && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {field.errors[0]}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </Field>

                        </div>

                        {/* Age */}

                        <Field of={registerForm} path={["age"]}>
                            {(field) => (
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Age
                                    </label>

                                    <input
                                        {...field.props}
                                        value={field.input}
                                        type="number"
                                        placeholder="Enter your age"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                    {field.errors?.[0] && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {field.errors[0]}
                                        </p>
                                    )}
                                </div>
                            )}
                        </Field>

                        {/* Email */}

                        <Field of={registerForm} path={["email"]}>
                            {(field) => (
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email
                                    </label>

                                    <input
                                        {...field.props}
                                        value={field.input}
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                    {field.errors?.[0] && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {field.errors[0]}
                                        </p>
                                    )}
                                </div>
                            )}
                        </Field>

                        {/* Username */}

                        <Field of={registerForm} path={["username"]}>
                            {(field) => (
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Username
                                    </label>

                                    <input
                                        {...field.props}
                                        value={field.input}
                                        type="text"
                                        placeholder="Create username"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                    {field.errors?.[0] && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {field.errors[0]}
                                        </p>
                                    )}
                                </div>
                            )}
                        </Field>

                        {/* Password */}

                        <Field of={registerForm} path={["password"]}>
                            {(field) => (
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Password
                                    </label>

                                    <input
                                        {...field.props}
                                        value={field.input}
                                        type="password"
                                        placeholder="Create password"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                    {field.errors?.[0] && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {field.errors[0]}
                                        </p>
                                    )}
                                </div>
                            )}
                        </Field>

                        {/* Submit */}

                        {error && (
                            <p className="text-red-500 text-sm text-center">
                                {error.message}
                            </p>
                        )}
                        {success && (
                            <p className="text-green-600 text-sm text-center">
                                {success}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition"
                        >
                            {isLoading ? "Creating Account..." : "Create Account"}
                        </button>

                    </Form>

                    <p className="text-center text-gray-600 mt-6">
                        Already have an account?

                        <NavLink
                            to="/login"
                            className="text-blue-600 font-semibold ml-1 no-underline"
                        >
                            Login
                        </NavLink>
                    </p>

                </div>

            </section>

        </>
    );
}

export default Register;