import { z } from 'zod'

const employeeSchema = z.object({
  id: z.number().int().positive(),
  id_hotel: z.number().int().positive(),
  name: z.string().max(50),
  lastname: z.string().max(50),
  id_number: z.string().max(20),
  cellphone: z.string().length(11), // Debe tener exactamente 11 dígitos
  salary: z.number().positive(),
  date_of_entry: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format'
  }),
  date_of_exit: z.string().nullable().refine((val) => val === null || !isNaN(Date.parse(val)), {
    message: 'Invalid date format'
  }),
  email: z.string().email(),
  password: z.string().min(6), // Puedes ajustar el mínimo de caracteres según las reglas
  portrait: z.any().optional(), // Para blobs, puedes ajustar según tus necesidades
  state: z.enum(['ACTIVE', 'ON VACATION', 'UNABLE'])
})

export function validatePartialEmployee (object) {
  return employeeSchema.partial().safeParse(object) // Partial: vueleve todas las validaciones opcionales
}

export function validateEmployee (object) {
  return employeeSchema.safeParse(object)
}
