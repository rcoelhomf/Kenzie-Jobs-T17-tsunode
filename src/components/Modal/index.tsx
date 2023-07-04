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
    company: string;
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
                <div>
                    <Title2 font="var(--color-blue)">Candidatar-se</Title2>
                    <span onClick={() => setIsOpen(null)}>X</span>
                </div>
                <Paragraph>Você está se candidatando para <span>{name}</span> em <span>{company}</span></Paragraph>
                <form onSubmit={handleSubmit(submitForm)}>
                    <Input placeholder="Nome" error={errors.name} {...register("name")} />
                    <Input placeholder="E-mail" error={errors.email} {...register("email")} />
                    <Input placeholder="LinkedIn" error={errors.linkedin} {...register("linkedin")} />
                    <button type="submit">Candidatar-se</button>
                </form>
            </ModalContainer>
        </BackGroundModal>
    )
}