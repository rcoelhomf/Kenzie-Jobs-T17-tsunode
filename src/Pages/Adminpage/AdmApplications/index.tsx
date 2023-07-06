import { Link } from "react-router-dom"
import { AdmHeader } from "../../../components/AdmHeader"
import { Footer } from "../../../components/Footer"
import {Title1,ParagraphMenu,Title3,Paragraph,} from "../../../Styles/Typography"
import {StyledA,StyledMainDiv,StyleLinksDiv,StyledUl,StyledLi,StyledSpan,StyledDivTitle} from "./style"
import { useContext, useState } from "react"
import { AdmContext } from "../../../providers/AdmContext"
import menus from "../../../assets/remove_FILL0_wght400_GRAD0_opsz48 1.png"
import plus from "../../../assets/add_FILL0_wght400_GRAD0_opsz48 1.png"


export const AdmApplications = () => {
    const {jobsApplications, JobsApplicationsAdm} = useContext(AdmContext)
    const [openiD, setOpeniD] = useState <number | null> (null)

    const details = (id: number ) =>{
        setOpeniD(prevOpenId => (prevOpenId === id ? null : id))
    }

    JobsApplicationsAdm();

    return (
        <>
        <AdmHeader/>
        <StyledMainDiv>
        <StyleLinksDiv>
        <ParagraphMenu>Minhas candidaturas</ParagraphMenu>
        <Link className="linkEdit" to={"/admin/jobs"}>Minhas vagas</Link>
        </StyleLinksDiv>

        <Title1 font="var(--color-blue)">Minhas Candidaturas</Title1>

        <StyledUl>
            {
            jobsApplications.map (item =>(
                <StyledLi key={item.id}>
                    <StyledDivTitle>
                    <Title3>{item.name} - Desenvolvedor Full Stack Jr</Title3>
                     {openiD === item.id ? (
                <img
                  onClick={() => details(item.id)}
                  src={menus}
                  alt="imagem de menos em azul"
                />
              ): (
                <img
                  onClick={() => details(item.id)}
                  src={plus}
                  alt="imagem de mais em azul"
                  />
                  )}
                  </StyledDivTitle>
                  

                {openiD === item.id && (
              <> 
                <Paragraph>Detalhes da candidatura:</Paragraph>
                <Paragraph>email: <StyledSpan>{item.email}</StyledSpan></Paragraph>
                <StyledA href={item.linkedin} target="_blank" rel="noopener noreferrer">
                  Linkedin
                </StyledA>
                
              </>
            )}
          </StyledLi>

        ))}
        </StyledUl>
        </StyledMainDiv>
        <Footer/>
        </>
    )
}