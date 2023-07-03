import { useForm } from "react-hook-form"
import { Input } from "../../components/Input";

interface ILogin {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const { register, handleSubmit, formState: { errors} } = useForm<ILogin>()

    // Contexto relacionado a informações da conta do usuario 

    return (

        <>
        <div>
            <h2>Faça Login</h2>
            <form >
                <Input placeholder="E-Mail" error={errors.name} {...register("email")}/>
                <Input placeholder="Senha" error={errors.password} {...register("password")}/>
                <button></button>
            </form>
            <span>Não possui cadastro? Cadastre-se </span>
        </div>
        </>
    )
}