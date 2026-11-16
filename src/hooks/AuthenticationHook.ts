import useSWRMutation from "swr/mutation";
import type {
    LoginCredentials,
    RegisterData,
} from "../types/AuthenticationType";

import { authServices } from "../services/AuthanticationServive";

export function useLogin() {
    return useSWRMutation(
        "login",
        (_, { arg }: { arg: LoginCredentials }) =>
            authServices.login(arg)
    );
}

export function useRegister() {
    return useSWRMutation(
        "register",
        (_, { arg }: { arg: RegisterData }) =>
            authServices.register(arg)
    );
}