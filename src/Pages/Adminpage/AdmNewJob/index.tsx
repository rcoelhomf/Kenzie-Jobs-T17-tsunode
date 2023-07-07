import arrow from "../../../assets/arrow.png"
import { ParagraphMenu, Title1 } from "../../../Styles/Typography"
import { Input } from "../../../components/Input" 
import { StyleMainAdm, StyledArrowDiv } from "./style"
import { AdmContext } from "../../../providers/AdmContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterJobForm, registerFormJobSchema } from "../../../Schema/NewJobSchema"
import button_icon_white from "../../../assets/button_icon_white.png"
import { AdmHeader } from "../../../components/AdmHeader"
import { Footer } from "../../../components/Footer"



export const AdmNewJob = () => {

        const { registerJob, navigate } = useContext(AdmContext)
      
        const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterJobForm>({
            resolver: zodResolver(registerFormJobSchema)
        });
      
        const onSubmit: SubmitHandler<RegisterJobForm> = async (formData) => {

            await registerJob(formData)
            reset()
        }

    return (

        <>
            <AdmHeader />
            <StyledArrowDiv>
                <button onClick={() => navigate("/admin/jobs")}><img src={arrow}/> <ParagraphMenu font="var(--color-blue)" > Voltar </ParagraphMenu></button>
            </StyledArrowDiv>
            <StyleMainAdm>
                <div className="form__div">
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <Title1 font="var(--color-blue)" color="--color-blue">Criar Vaga</Title1>
                        <Input className="style_input" type="text" placeholder="Cargo" error={errors} {...register("position")}/>
                        <Input className="style_input"  type="number" placeholder="Salário (Opcional)" error={errors} {...register("sallary") } />
                        <textarea className="textArea" placeholder="Descrição" {...register("description")}></textarea>
                        <div className="button__div">
                            <button className="style__button" type="submit"><img className="button__img" src={button_icon_white}/>Criar vaga</button>
                        </div>
                    </form>
                </div>
            </StyleMainAdm>
            <Footer />
        </>
    )
}