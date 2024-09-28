import { Router } from 'express'
import { HotelController } from '../controller/hotel.js'
export const hotelRouter = Router()

hotelRouter.post('', HotelController.create)
hotelRouter.get('', HotelController.getAll)
hotelRouter.get('/:hotelId', HotelController.getById)
hotelRouter.patch('/:hotelId', HotelController.update)
hotelRouter.delete('/:hotelId', HotelController.delete)
