import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../components/Input"
import { useContext } from "react"
import { CompanyContext } from "../../providers/CompanyContext/index.tsx"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginForm, loginFormSchema } from "../../Schema/LoginSchema.ts"
import { Header } from "../../components/Header/index.tsx"
import { Footer } from "../../components/Footer/index.tsx"
import mulherLogin from "../../assets/mulherLogin.png"
import { StyleMain } from "./style.ts"
import { Paragraph, Title1 } from "../../Styles/Typography.ts"
import { Link } from "react-router-dom"


export const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(loginFormSchema)
    })

    // Contexto relacionado a informações da conta do usuario 
    const { loginCompany } = useContext(CompanyContext)

    const submitLogin: SubmitHandler<LoginForm> = async (formData) => {

        await loginCompany(formData)
    }

    return (

        <>
        <Header loginlinkcolor="var(--color-blue)"/>
        <StyleMain>
            <div className="main__div">
                <div className="div__login-img">
                    <img src={mulherLogin}/>
                </div>
                <div className="login__box">
                    <Title1 className="title-login">Faça Login</Title1>
                    <form onSubmit={handleSubmit(submitLogin)}>
                        <Input className="input-style" placeholder="E-mail" error={errors.email} {...register("email")}/>
                        <Input className="input-style" placeholder="Senha" type="password" error={errors.password} {...register("password")}/>
                        <div className="button_div">
                            <button type="submit">Entrar</button>
                        </div>
                        <div className="span__div">
                            <Paragraph className="span-text">Não possui cadastro?<Link className="link-text" to={"/register"}> Cadastre-se</Link></Paragraph>
                        </div>
                    </form>
                </div>
            </div>
        </StyleMain>
        <Footer />
        </>
    )
}