import { z } from "zod"

export const registerFormJobSchema = z.object({
    position: z.string().nonempty("O cargo é obrigatório."),
    sallary: z.string().optional(),
    description: z.string().nonempty("Descrição é obrigatória")
});

export type RegisterJobForm = z.infer<typeof registerFormJobSchema>
