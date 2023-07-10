import { createContext, useEffect, useState } from "react"
import { IAdmContext, IAdmContextProps, IJobItem,IJobApplications, IJobCreate } from "./@types"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { RegisterJobForm } from "../../Schema/NewJobSchema"

export const AdmContext = createContext<IAdmContext>(
    {} as IAdmContext
)

export const AdmProvider = ({ children }: IAdmContextProps) => {

    const [ jobId, setJobId ] = useState<number | null>(null)
    const [ jobsList, setJobsList ] = useState<IJobItem[]>([])
    const [jobsApplications, setJobsApplications] = useState < IJobApplications[]>([])
    const navigate = useNavigate()


    const JobsApplicationsAdm = async  () =>{

        const userId = localStorage.getItem("@USERID")

        useEffect(() =>{
            const getApplications = async () => {
                const response = await api.get("/applications", {
                    params: {
                        userId: userId,
                        _expand: "job"
                    }
                })

                setJobsApplications(response.data)
            }

            getApplications()
        })
    }




    const getCompanyJobs = () => {
        useEffect(() => {
            const token = localStorage.getItem("@TOKEN")
            const companyId = localStorage.getItem("@USERID")
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const jobsList = async () => {
                try {
                    await api.get(`/users/${companyId}/jobs`, config)
                    .then(({ data }) => setJobsList([...data]))
                } catch (error) {
                    toast.error("Opss! Algo deu errado")
                }
            }
            jobsList()
        }, [])
    }

    const deleteJob = async (id: number) => {
        const token = localStorage.getItem("@TOKEN")
        const companyId = localStorage.getItem("@USERID")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            await api.delete(`/jobs/${id}`, config)
            await api.get(`/users/${companyId}/jobs`, config)
            .then(({ data }) => setJobsList([...data]))
            toast.success("Vaga deletada")
        } catch (error) {
            toast.error("Opss! Algo deu errado")
        }
    }

    const registerJob = async (formData: RegisterJobForm) => {
        
        const token = localStorage.getItem("@TOKEN")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await api.post<IJobCreate>("/jobs/", {
                position: formData.position,
                sallary: Number(formData.sallary),
                description: formData.description
            }, config)
            console.log(response)
            toast.success("Vaga registrada com sucesso")
        } catch (error) {
            toast.error("Erro! Tente novamente")
        } 
    }

    const editJob = async (jobId: number, position: string, salary: number, description: string) => {
        const token = localStorage.getItem("@TOKEN");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        const formData = {
          position,
          salary,
          description
        };
        try {
          await api.put(`/jobs/${jobId}`, formData, config);
          toast.success("Emprego atualizado com sucesso");
          navigate("/adm");
        } catch (error) {
          console.error(error);
          toast.error("Erro ao atualizar o emprego. Tente novamente.");
        }
      };
    
    return (
        <AdmContext.Provider value={{ setJobId, getCompanyJobs, jobsList, deleteJob, navigate, jobId, jobsApplications, JobsApplicationsAdm, registerJob, editJob}}>
            { children }
        </AdmContext.Provider>
    )
}