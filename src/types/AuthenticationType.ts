export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface RegisterData {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    username: string;
    password: string;
}

export interface AuthResponse extends User {
    accessToken: string;
    refreshToken: string;
}

export interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;

    setAuth: (data: AuthResponse) => void;
    logout: () => void;
}