import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {

    const user = localStorage.getItem("@TOKEN")

    return user ? <Outlet /> : <Navigate to={"/"} />
}