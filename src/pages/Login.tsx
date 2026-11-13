import { Form, Field, useForm } from "@formisch/react";
import { NavLink } from "react-router";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as v from "valibot";
import { authServices } from "../services/AuthanticationServive";
import { useAuthStore } from "../Stores/AuthenticationStore";
import { LoginSchema } from "../schemas/LoginSchema";

function Login() {

    const navigate = useNavigate();

    const setAuth = useAuthStore(
        (state) => state.setAuth
    );

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const loginForm = useForm({
        schema: LoginSchema,
    });

    const handleLogin = async (
        data: v.InferOutput<typeof LoginSchema>
    ) => {
        try {
            setIsLoading(true);
            setError("");

            // Step 1: Login API call
            const response = await authServices.login(data);

            // Step 2: Save user details in Zustand
            setAuth(response);

            // Step 3: Navigate to Home
            navigate("/");

        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong"
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Header />

            <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-10">

                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                    {/* Heading */}

                    <div className="text-center mb-8">

                        <h1 className="text-3xl font-bold text-gray-800">
                            Welcome Back!
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Login to your ShopEase account
                        </p>

                    </div>

                    {/* Login Form */}

                    <Form
                        of={loginForm}
                        onSubmit={handleLogin}
                        className="space-y-5"
                    >

                        {/* Username */}

                        <Field of={loginForm} path={["username"]}>
                            {(field) => (
                                <div>

                                    <label className="block text-sm font-medium mb-2">
                                        Username
                                    </label>

                                    <input
                                        {...field.props}
                                        value={field.input}
                                        type="text"
                                        placeholder="Enter your username"
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

                        <Field of={loginForm} path={["password"]}>
                            {(field) => (
                                <div>

                                    <label className="block text-sm font-medium mb-2">
                                        Password
                                    </label>

                                    <input
                                        {...field.props}
                                        value={field.input}
                                        type="password"
                                        placeholder="Enter your password"
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

                        {/* Login Button */}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition"
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </button>

                        {error && (
                            <p className="text-red-500 text-sm text-center">
                                {error}
                            </p>
                        )}

                    </Form>

                    {/* Register Link */}

                    <p className="text-center text-gray-600 mt-6">

                        Don't have an account?

                        <NavLink
                            to="/register"
                            className="text-blue-600 font-semibold ml-1 no-underline"
                        >
                            Register
                        </NavLink>

                    </p>

                </div>

            </section>


        </>
    );
}

export default Login;