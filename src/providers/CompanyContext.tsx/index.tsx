import { createContext, useState } from "react";
import { api } from "../../services/api";
import { ICompanyContext, ICompanyContextProps, ICompanyRegister, ICompanyLogin } from "./@types";
import { LoginForm } from "../../Schema/LoginSchema";
import { RegisterForm } from "../../Schema/RegisterSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CompanyContext = createContext({} as ICompanyContext);

export const CompanyProvider = ({children}: ICompanyContextProps) => {

    const [company, setCompany] = useState<ICompanyRegister | null>(null)
    const navigate = useNavigate()

    const registerCompany = async (formData: RegisterForm) => {

        try {
            const { data } = await api.post<ICompanyRegister>("/users", formData)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const loginCompany = async (formData: LoginForm) => {

        try {
            const { data } = await api.post<ICompanyLogin>("/login", formData)
            setCompany(data.user)
            localStorage.setItem("@TOKEN", data.accessToken)
            localStorage.setItem("@USERID", JSON.stringify(data.user.id))
            toast.success("Login realizado com sucesso")
            navigate("/admin")
        } catch (error) {
            console.log(error)
        } 
    }

    const logoutCompany = () => {

        setCompany(null)
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
    }

    return (

        <CompanyContext.Provider value={{company, registerCompany, loginCompany, logoutCompany}}>
            {children}
        </CompanyContext.Provider>
    )
}