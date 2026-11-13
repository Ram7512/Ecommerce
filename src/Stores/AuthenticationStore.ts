import { create } from "zustand";
import type { AuthState } from "../types/AuthenticationType";

export const useAuthStore = create<AuthState>()((set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,

    setAuth: (data) =>
        set({
            user: {
                id: data.id,
                username: data.username,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                image: data.image,
            },
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
        }),

    logout: () =>
        set({
            user: null,
            accessToken: null,
            refreshToken: null,
        }),
}));