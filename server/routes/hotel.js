import { Router } from 'express'
import { HotelController } from '../controller/hotel.js'
export const hotelRouter = Router()

hotelRouter.post('', HotelController.create)
hotelRouter.get('/:adminId', HotelController.getAll)
hotelRouter.patch('/:adminId/:hotelId', HotelController.update)
hotelRouter.delete('/:adminId/:hotelId', HotelController.delete)
