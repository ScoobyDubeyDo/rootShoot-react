import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

export const PrivateRoute = ({ switchPath = true }) => {
    const { currentUser } = useAuth();

    if (switchPath) {
        return currentUser?.encodedToken ? (
            <Outlet />
        ) : (
            <Navigate to="/sign-in" replace />
        );
    }
    return !currentUser?.encodedToken ? (
        <Outlet />
    ) : (
        <Navigate to="/" replace />
    );
};
