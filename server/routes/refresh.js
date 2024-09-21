import { Router } from 'express'
import { handleRefreshToken } from '../controller/refresh.js'
export const refreshRouter = Router()

refreshRouter.post('', handleRefreshToken)
