import { createContext, useState } from "react"
import { api } from "../../services/api"
import { ICompanyContext, ICompanyContextProps, ICompanyRegister, ICompanyLogin, IapplySubmit, IJobsList } from "./@types"
import { LoginForm } from "../../Schema/LoginSchema"
import { RegisterForm } from "../../Schema/RegisterSchema"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export const CompanyContext = createContext<ICompanyContext>(
    {} as ICompanyContext
)

export const CompanyProvider = ({children}: ICompanyContextProps) => {

    const [company, setCompany] = useState<ICompanyRegister | null>(null)
    const [isOpen, setIsOpen] = useState<number | null>(null)
    const [jobsList, setJobsList] = useState<IJobsList[]>([])
    const navigate = useNavigate()

    const getAllJobs = async () => {
        try {
            await api.get("/jobs")
            .then(({ data }) => setJobsList([...data]))
        } catch (error) {
            
        }
    }

    const applyJob = async (formData: IapplySubmit) => {

        try {
            await api.post<IapplySubmit>("/applications", formData)
            toast.success("Candidatura realizada")
        } catch (error) {
            toast.error("Algo deu errado")
        }
    }

    const registerCompany = async (formData: RegisterForm) => {

        try {
            const { data } = await api.post<ICompanyRegister>("/users", formData)
            console.log(data)
            toast.success("Empresa registrada com sucesso!");
        } catch (error) {
            console.log(error)
            toast.error("Erro ao registrar empresa. Por favor, tente novamente.");
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

        <CompanyContext.Provider value={{ company, setCompany, isOpen, setIsOpen, jobsList, getAllJobs, applyJob, registerCompany, loginCompany, logoutCompany}}>
            {children}
        </CompanyContext.Provider>
    )
}