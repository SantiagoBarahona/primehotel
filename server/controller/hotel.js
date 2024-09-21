import { validateHotel } from '../schemas/hotel.js'
import { HotelModel } from '../model/hotel.js'

export class HotelController {
  static async create (req, res) {
    const data = req.body
    const result = validateHotel(data)
    if (!result.success) return res.status(400).send({ error: JSON.parse(result.error.message) })
    try {
      await HotelModel.create({ input: result.data })
      res.send({ success: 'Hotel created successfully' })
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }
}
