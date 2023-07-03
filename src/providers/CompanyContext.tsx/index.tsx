import { createContext, useState } from "react";
import { api } from "../../services/api";
import { ICompanyContext, ICompanyContextProps, ICompanyRegister, ICompanyLogin } from "./@types";

export const CompanyContext = createContext({} as ICompanyContext);

export const CompanyProvider = ({children}: ICompanyContextProps) => {

    const [company, setCompany] = useState<ICompanyRegister | null>(null)

    const registerCompany = async (formData: any) => {

        try {
            const { data } = await api.post<ICompanyRegister>("/users", formData)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const loginCompany = async (formData: any) => {

        try {
            const { data } = await api.post<ICompanyLogin>("/sessions", formData)
            console.log(data)
            setCompany(data.user)
            localStorage.setItem("@TOKEN", data.accessToken)
            localStorage.setItem("@USERID", JSON.stringify(data.user.id))
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