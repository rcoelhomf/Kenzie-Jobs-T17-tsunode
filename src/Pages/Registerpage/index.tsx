import { useContext } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { Header } from "../../components/Header/index"
import { registerFormSchema } from "../../Schema/RegisterSchema"
import { CompanyContext } from "../../providers/CompanyContext/index"
import { ICompanyRegister } from "../../providers/CompanyContext/@types"
import "react-toastify/dist/ReactToastify.css"
import { Title1, ParagraphBold } from "./../../Styles/Typography"
import { StyledButton, StyledDiv, StyledForm, StyledFormSection, StyledRegisterPageContainer } from "./style"
import { Input } from "./../../components/Input/index"
import { Footer } from "./../../components/Footer/index"
import { Link } from "react-router-dom"
import arrow from "../../assets/arrow.png"

interface FormData extends ICompanyRegister {
  password: string;
}

export const RegisterPage = () => {
  const { registerCompany } = useContext(CompanyContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      await registerCompany(formData);
      reset();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <StyledRegisterPageContainer>
      <Header loginlinkcolor="var(--color-blue)"/>
      <StyledDiv>
          <ParagraphBold className="back-text"> <img src={arrow} alt="flecha roxa para esquerda" /><Link className="link-text" to={"/login"}> voltar</Link></ParagraphBold>
      </StyledDiv>

      <StyledFormSection>
      <Title1 font="var(--color-blue)">Cadastrar-se</Title1>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" {...register("name")} placeholder="Nome da empresa" error={errors.name} />

          <Input type="email" {...register("email")} placeholder="E-mail" error={errors.email}/>

          <Input type="password" {...register("password")} placeholder="Senha" error={errors.password}/>

          <Input type="password" {...register("confirm")} placeholder="Confirmar senha" error={errors.confirm}/>
         
          <StyledButton type="submit">Cadastrar-se</StyledButton>
        </StyledForm>
      </StyledFormSection>

      <Footer position="unset"/>
    </StyledRegisterPageContainer>
  )
}
