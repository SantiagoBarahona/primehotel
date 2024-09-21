import z from 'zod'

const hotelSchema = z.object({
  name: z.string({
    invalid_type_error: 'Hotel name must be a string',
    required_error: 'Hotel name is required'
  })
})

export function validatePartialHotel (object) {
  return hotelSchema.partial().safeParse(object) // Partial: vueleve todas las validaciones opcionales
}

export function validateHotel (object) {
  return hotelSchema.safeParse(object)
}
