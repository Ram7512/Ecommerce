import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../Stores/AuthenticationStore";

function ProtectedRoute() {

    const accessToken = useAuthStore(
        (state) => state.accessToken
    );

    const location = useLocation();

    if (!accessToken) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    return <Outlet />;
}

export default ProtectedRoute;