import z from 'zod'

const hotelSchema = z.object({
  name: z.string({
    invalid_type_error: 'Hotel name must be a string',
    required_error: 'Hotel name is required'
  }),
  address: z.string(),
  phone: z.string(),
  rating: z.number().min(1).max(5).int()
})

export function validatePartialHotel (object) {
  return hotelSchema.partial().safeParse(object) // Partial: vueleve todas las validaciones opcionales
}

export function validateHotel (object) {
  return hotelSchema.safeParse(object)
}
