import close from "../../assets/close_FILL0_wght400_GRAD0_opsz48 1.png"
import { ModalSchema, applyForm } from "../../Schema/ModalSchema"
import { Paragraph, Title2 } from "../../Styles/Typography"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"
import { useContext, useEffect } from "react"
import { CompanyContext } from "../../providers/CompanyContext"
import { IapplySubmit } from "../../providers/CompanyContext/@types"
import { BackGroundModal, ModalContainer } from "./style"

interface IModalProps {
    name: string;
    company?: string;
    jobId: number;
    companyId: number;
}

export const Modal = ({ name, company, jobId, companyId }: IModalProps) => {
    const { applyJob, setIsOpen } = useContext(CompanyContext)

    const { register, handleSubmit, formState: { errors } } = useForm<applyForm>({
        resolver: zodResolver(ModalSchema)
    })

    const submitForm: SubmitHandler<applyForm> = (formData) => {
        const applyObject: IapplySubmit = {...formData, jobId: jobId, userId: companyId}

        applyJob(applyObject)
        setIsOpen(null)
    }

    useEffect(() => {
        const handleKey = (e: KeyboardEventInit) => {
            if(e.key === "Escape"){
                setIsOpen(null)
            }
        }

        window.addEventListener("keydown", handleKey)
        
        return () => {
            window.removeEventListener("keydown", handleKey)
        }

    }, [])

    return(
        <BackGroundModal>
            <ModalContainer>
                    <Title2 font="var(--color-blue)">Candidatar-se</Title2>
                    <img className="closeBtn" onClick={() => setIsOpen(null)} src={close} alt="imagem de um X" />
                <Paragraph>Você está se candidatando para <span className="bold">{name}</span> em <span className="bold">{company}</span></Paragraph>
                <form className="modalForm" onSubmit={handleSubmit(submitForm)} noValidate>
                    <Input placeholder="Nome" error={errors.name} {...register("name")} />
                    <Input placeholder="E-mail" type="email" error={errors.email} {...register("email")} />
                    <Input placeholder="LinkedIn" error={errors.linkedin} {...register("linkedin")} />
                    <button  className="formBtn" type="submit">Candidatar-se</button>
                </form>
            </ModalContainer>
        </BackGroundModal>
    )
}