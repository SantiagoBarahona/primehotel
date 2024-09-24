import { validateHotel } from '../schemas/hotel.js'
import { HotelModel } from '../model/hotel.js'

export class HotelController {
  static async create (req, res) {
    const { adminId, ...input } = req.body
    const adminId_ = req.body.adminId
    const result = validateHotel(input)
    if (!result.success) return res.status(400).send({ error: JSON.parse(result.error.message) })
    try {
      await HotelModel.create({ input: result.data, adminId: adminId_ })
      res.send({ success: 'Hotel created successfully' })
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }

  static async getAll (req, res) {
    const { adminId } = req.params
    try {
      const hotels = await HotelModel.getAll({ adminId })
      res.status(200).json(hotels)
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }

  static async update (req, res) {
    const { adminId, hotelId } = req.params
    const data = req.body
    try {
      await HotelModel.update({ adminId, hotelId, ...data })
      res.send({ success: 'Hotel updated successfully' })
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }

  static async delete (req, res) {
    const { adminId, hotelId } = req.params
    try {
      await HotelModel.delete({ adminId, hotelId })
      res.send({ success: 'Hotel deleted successfully' })
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }
}
