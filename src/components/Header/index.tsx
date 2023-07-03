import { Link } from "react-router-dom"
import jobs from "../../assets/jobs.png"
import magnifier from "../../assets/lupa.png"
import { StyledDiv, StyledImg } from './style'

export const Header = () => {
    return (
        <StyledDiv>
            <StyledImg src={jobs} alt="imagem da escrita jobs" width="69px" height="30px" />
            <div>
                <Link to={"/"}>acesso empresa</Link>
                <button>Confira nossas vagas</button>
                <StyledImg src={magnifier} alt="lupa de procurar" width="30px" height="30px" />
            </div>
        </StyledDiv>
    );
};