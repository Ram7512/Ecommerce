import type {
    LoginCredentials,
    RegisterData,
    AuthResponse,
} from "../types/AuthenticationType";

const API_URL = "https://dummyjson.com";

export const authServices = {

    // Login API
    login: async (
        credentials: LoginCredentials
    ): Promise<AuthResponse> => {

        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error("Invalid username or password");
        }

        return response.json();
    },

    // Register API
    register: async (userData: RegisterData) => {

        const response = await fetch(`${API_URL}/users/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error("Registration failed");
        }

        return response.json();
    },
};