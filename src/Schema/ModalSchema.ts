import { z } from "zod"

export const ModalSchema = z.object({
    
    name: z.string()
        .nonempty("Este campo é obrigatório"),

    email: z.string()
        .nonempty("Este campo é obrigatório"),

    linkedin: z.string()
        .nonempty("Este campo é obrigatório"),
})

export type applyForm = z.infer<typeof ModalSchema>