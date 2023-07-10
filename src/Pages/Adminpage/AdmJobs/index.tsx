import edit from "../../../assets/edit_FILL0_wght400_GRAD0_opsz48 1.png"
import trash from "../../../assets/delete_FILL0_wght400_GRAD0_opsz48 1.png"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AdmContext } from "../../../providers/AdmContext"
import { ParagraphMenu, Title1, Title3 } from "../../../Styles/Typography"
import { Footer } from "../../../components/Footer"
import { JobsList, LinksDiv, TitleDiv } from "./style"
import { AdmHeader } from "../../../components/AdmHeader"

export const AdmJobs = () => {
    const { setJobId, getCompanyJobs, jobsList, deleteJob, navigate } = useContext(AdmContext)

    getCompanyJobs()

    const goToEdit = (id: number) => {
        setJobId(id)
        navigate("/admin/edit")
    }

    return (
        <>
            <AdmHeader />
            <LinksDiv>
                <ParagraphMenu font="var(--color-blue)">Minhas vagas</ParagraphMenu>
                <Link className="linkEdit" to={"/admin/applications"}>Minhas candidaturas</Link>
            </LinksDiv>
            <TitleDiv>
                <Title1 font="var(--color-blue)">Minhas vagas</Title1>
                <Link className="linkCreate" to={"/admin/newjob"}><span className="plusSpan">+</span> Criar vaga</Link>
            </TitleDiv>
            <JobsList>
                {jobsList.length > 0 ? jobsList.map(item => (
                    <li className="listItem" key={item.id}>
                        <Title3>{item.position}</Title3>
                        <div className="innerDiv">
                            <img className="innerDivImg" onClick={() => goToEdit(item.id)} src={edit} alt="imagem de um lapis" />
                            <img className="innerDivImg" onClick={() => deleteJob(item.id)} src={trash} alt="imagem de um lixo" />
                        </div>
                    </li>
                )): <Title3>Nenhuma vaga criada até o momento</Title3> }
            </JobsList>
            {jobsList.length <= 4 ? <Footer /> : <Footer position={"unset"}/>} 
        </>
    )
}