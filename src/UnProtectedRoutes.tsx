import { Navigate, Outlet } from "react-router-dom";
import { validateToken } from "./helpers/validateToken";

export function UnProtectedRoute() {
    const isAuthenticated = validateToken();

    return isAuthenticated ? <Navigate to="/home" /> : <Outlet />

}