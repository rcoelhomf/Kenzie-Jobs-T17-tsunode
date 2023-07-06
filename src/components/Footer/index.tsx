import { Paragraph } from "../../Styles/Typography"
import jobs from "../../assets/jobs.png"
import { StyledFooter } from "./style"

interface IFooterProps {
    position?: string;
    position2?: string;
}

export const Footer = ({ position, position2 }: IFooterProps) =>{
    return(
        <>
            <StyledFooter position={position} position2={position2}>
                    <img src={jobs} alt="imagem escrita jobs" />
                    <Paragraph font="var(--color-white)">Todos os direitos reservados - Kenzie Academy Brasil</Paragraph>
            </StyledFooter>
        </>
    )
}