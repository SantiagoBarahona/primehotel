import { SECRET_JWT_KEY, SECRET_JWT_REFRESH_KEY } from '../../config.js'
import { AdminModel } from '../../model/admin.js'
import { validatePartialAdmin } from '../../schemas/admin.js'
import jwt from 'jsonwebtoken'

export async function handleAdminLogin (req, res) {
  const result = validatePartialAdmin(req.body)
  await AdminModel.login({ email: result.data.email, password: result.data.password })
    .then((publicUser) => {
      const accessToken = jwt.sign(
        publicUser,
        SECRET_JWT_KEY,
        { expiresIn: '30s' })
      const refreshToken = jwt.sign(
        publicUser,
        SECRET_JWT_REFRESH_KEY,
        { expiresIn: '1d' }
      )
      res
        .cookie('refresh_token', refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 1000 * 60 * 60 * 24
        })
      res.status(200).json({ ...publicUser, accessToken })
    })
    .catch(err => {
      res.status(400).json({ error: err.message })
    })
}
