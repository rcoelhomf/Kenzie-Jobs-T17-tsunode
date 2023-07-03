import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../components/Input";
import { useContext } from "react";
import { CompanyContext } from "../../providers/CompanyContext.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm, loginFormSchema } from "../../Schema/LoginSchema.ts";


export const LoginPage = () => {
    const { register, handleSubmit, formState: { errors} } = useForm<LoginForm>({
        resolver: zodResolver(loginFormSchema)
    })

    // Contexto relacionado a informações da conta do usuario 
    const { loginCompany } = useContext(CompanyContext)

    const submitLogin: SubmitHandler<LoginForm> = async (formData) => {

        await loginCompany(formData)
    }

    return (

        <>
        <div>
            <h2>Faça Login</h2>
            <form onSubmit={handleSubmit(submitLogin)}>
                <Input placeholder="E-Mail" error={errors.email} {...register("email")}/>
                <Input placeholder="Senha" type="password" error={errors.password} {...register("password")}/>
                <button type="submit">Entrar</button>
            </form>
            <span>Não possui cadastro? Cadastre-se </span>
        </div>
        </>
    )
}