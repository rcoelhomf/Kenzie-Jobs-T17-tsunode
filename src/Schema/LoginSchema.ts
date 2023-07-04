import { z } from "zod"

export const loginFormSchema = z.object({

    email: z.string()
        .nonempty("Este campo é obrigatório")
        .email("Email ou Senha incorretos"),
    
    password: z.string()
        .nonempty("Este campo é obrigatório")
        .min(5, "Email ou Senha incorretos")

})

export type LoginForm = z.infer<typeof loginFormSchema>