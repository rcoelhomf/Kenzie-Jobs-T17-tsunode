import { Link } from "react-router-dom"
import jobs from "../../assets/jobs.png"
import magnifier from "../../assets/lupa.png"
import { InnerDiv, StyledDiv, StyledImg } from './style'

export const Header = () => {
    return (
        <StyledDiv>
            <Link to={"/"}><StyledImg src={jobs} alt="imagem da escrita jobs"/></Link>
            <InnerDiv>
                <Link className="loginLink" to={"/login"}>acesso empresa</Link>
                <Link className="invisible" to={"/search"}>Confira nossas vagas</Link>
                <Link to={"/search"}><img className="magnifier" src={magnifier} alt="lupa de procurar"/></Link> 
            </InnerDiv>
        </StyledDiv>
    );
};