import { Navigate, Outlet } from "react-router-dom";
import { validateToken } from "./helpers/validateToken";

export function ProtectedRoutes() {
    const isAuthenticaded = validateToken()

    return isAuthenticaded ? <Outlet /> : <Navigate to="/login" />
}