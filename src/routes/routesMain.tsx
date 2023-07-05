import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Homepage";
import { SearchPage } from "../Pages/Searchpage";
import { LoginPage } from "../Pages/Loginpage";
import { RegisterPage } from "../Pages/Registerpage";
import { AdminPage } from "../Pages/Adminpage";
import { AdmApplications } from "../Pages/Adminpage/AdmApplications";
import { AdmEdit } from "../Pages/Adminpage/AdminEdit";
import { AdmJobs } from "../Pages/Adminpage/AdmJobs";
import { AdmNewJob } from "../Pages/Adminpage/AdmNewJob";

export const RoutesMain = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/search" element={<SearchPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/admin" element={<AdminPage />}/>
            <Route path="/admin/applications" element={<AdmApplications />}/>
            <Route path="/admin/edit" element={<AdmEdit />}/>
            <Route path="/admin/Jobs" element={<AdmJobs />}/>
            <Route path="/admin/newjob" element={<AdmNewJob />}/>
        </Routes>
    )
}