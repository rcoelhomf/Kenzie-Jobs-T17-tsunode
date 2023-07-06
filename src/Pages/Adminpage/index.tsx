import { Link } from "react-router-dom"
import { Paragraph, Title1} from "../../Styles/Typography"
import { Footer } from "../../components/Footer"
import { LinksDiv, TitleDiv, GreetingDiv } from "./style"
import { AdmHeader } from "./../../components/AdmHeader/index"

export const AdminPage = () => {
  const companyName = localStorage.getItem("@COMPANY")
  
  return (
    <>
      <AdmHeader />

      <TitleDiv>
        <Title1 font="var(--color-blue)">{companyName}</Title1>
      </TitleDiv>

      <GreetingDiv>
        <Paragraph>Seja bem vindo (a), selecione uma das opções abaixo:</Paragraph>
      </GreetingDiv>
      

      <LinksDiv>
        <Link className="linkEdit" to={"/admin/jobs"}>Minhas vagas</Link>
        <Link className="linkEdit" to={"/admin/applications"}>
          Minhas candidaturas
        </Link>
      </LinksDiv>
      <Footer />
    </>
  )
}