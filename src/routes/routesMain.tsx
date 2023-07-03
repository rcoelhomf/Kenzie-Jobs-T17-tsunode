import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Homepage";
import { SearchPage } from "../Pages/Searchpage";
import { LoginPage } from "../Pages/Loginpage";
import { RegisterPage } from "../Pages/Registerpage";
import { AdminPage } from "../Pages/Adminpage";

export const RoutesMain = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/search" element={<SearchPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/admin" element={<AdminPage />}/>
        </Routes>
    )
}