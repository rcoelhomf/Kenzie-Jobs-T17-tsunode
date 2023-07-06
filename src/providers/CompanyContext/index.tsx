import { createContext, useEffect, useState } from "react"
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
    const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
    const navigate = useNavigate()

    const attJobList = () => {
        useEffect(() => {
            const getAllJobs = async () => {
                try {
                    await api.get("/jobs", {
                        params: {
                            _expand: "user",
                        }
                    })
                    .then(({ data }) => setJobsList([...data]))
                } catch (error) {
                    
                }
            }
            getAllJobs()
        },[])
    }

    const applyJob = async (formData: IapplySubmit) => {

        try {
            await api.post<IapplySubmit>("/applications", formData)
            toast.success("Candidatura realizada")
        } catch (error) {
            toast.error("Ops! Algo deu errado")
        }
    }

    const filterJob = async (formData: string) => {
        try {
          const { data } = await api.get(`/jobs?position_like=${formData}`);
          setFilteredJobs(data);
        } catch (error) {
          toast.error("Ops! Algo deu errado");
        }
      };


    const registerCompany = async (formData: RegisterForm) => {

        try {
            await api.post<ICompanyRegister>("/users", formData)
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
            localStorage.setItem("@COMPANY", data.user.name)
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
        localStorage.removeItem("@COMPANY")
    }

    return (

        <CompanyContext.Provider value={{ company, setCompany, isOpen, setIsOpen, jobsList, attJobList, applyJob, registerCompany, loginCompany, logoutCompany, filteredJobs, setFilteredJobs, filterJob}}>
            {children}
        </CompanyContext.Provider>
    )
}