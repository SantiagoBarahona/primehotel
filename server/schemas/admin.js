import z from 'zod'

const adminSchema = z.object({
  email: z.string({
    invalid_type_error: 'El email debe ser un string',
    required_error: 'El email es requerido'
  }),
  password: z.string(),
  name: z.string().min(3),
  lastname: z.string().min(3),
  prefix: z.string().max(2),
  cellphone: z.string().max(11),
  birthdate: z.string().date(),
  portrait: z.optional()
})

export function validatePartialAdmin (object) {
  return adminSchema.partial().safeParse(object) // Partial: vueleve todas las validaciones opcionales
}

export function validateAdmin (object) {
  return adminSchema.safeParse(object)
}
