import { Link } from "react-router-dom"
import jobs from "../../assets/jobs.png"
import { StyledHeader } from "./style"
import { useContext } from "react"
import { AdmContext } from "../../providers/AdmContext"
import { toast } from "react-toastify"

export const AdmHeader = () => {
    const { navigate } = useContext(AdmContext)
    const companyName: string | null = localStorage.getItem("@COMPANY")

    const logOut = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@COMPANY")
        localStorage.removeItem("@USERID")
        toast.success("LogOut realizado")

        navigate("/")
    }

    return (
        <StyledHeader>
            <img src={jobs} alt="icone da kenzie jobs" />
            <nav className="navMenu">
                <Link className="linkAdm" to={"/admin"}>{companyName ? companyName.substring(0,2).toLocaleUpperCase() : null}</Link>
                <button onClick={logOut} className="logOutBtn">Sair</button>
            </nav>
        </StyledHeader>
    )
}