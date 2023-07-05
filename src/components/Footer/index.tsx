import { Paragraph } from "../../Styles/Typography"
import jobs from "../../assets/jobs.png"
import { StyledFooter } from "./style"

interface IFooterProps {
    position?: string;
}

export const Footer = ({ position }: IFooterProps) =>{
    return(
        <>
            <StyledFooter position={position}>
                    <img src={jobs} alt="imagem escrita jobs" />
                    <Paragraph font="var(--color-white)">Todos os direitos reservados - Kenzie Academy Brasil</Paragraph>
            </StyledFooter>
        </>
    )
}