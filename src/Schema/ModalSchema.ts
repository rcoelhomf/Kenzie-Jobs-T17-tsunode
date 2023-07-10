import { z } from "zod"

export const ModalSchema = z.object({
    
    name: z.string()
        .nonempty("Este campo é obrigatório"),

    email: z.string()
    .nonempty("Este campo é obrigatório")
    .email("Este campo deve conter um e-mail válido"),

    linkedin: z.string()
        .nonempty("Este campo é obrigatório"),
})

export type applyForm = z.infer<typeof ModalSchema>