import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context";

export const PrivateRoute = ({ switchPath = true }) => {
	const location = useLocation();
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
		<Navigate to={location?.state?.from || "/"} replace />
	);
};
