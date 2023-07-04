import jobs from "../../assets/jobs.png"
import { StyledDiv, StyledFooter, StyledImg, StyledP } from "./style"

export const Footer = () =>{
    return(
        <>
            <StyledFooter>
                <StyledDiv>
                    <StyledImg src={jobs} alt="imagem escrita jobs" />
                    <StyledP>Todos os direitos reservados - Kenzie Academy Brasil</StyledP>
                </StyledDiv>
            </StyledFooter>
        </>
    )
}