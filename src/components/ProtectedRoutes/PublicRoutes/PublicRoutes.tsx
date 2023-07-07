import { Navigate, Outlet } from "react-router-dom"

export const PublicRoutes = () => {

    const user = localStorage.getItem("@TOKEN")

    return !user ? <Outlet /> : <Navigate to={"/admin"} />
}