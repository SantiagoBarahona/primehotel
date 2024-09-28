import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_EXPIRATION_TIME, SECRET_JWT_KEY, SECRET_JWT_REFRESH_KEY } from '../../config.js'

export const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies
  if (!cookies?.refresh_token) return res.sendStatus(401)
  const refreshToken = cookies.refresh_token

  jwt.verify(
    refreshToken,
    SECRET_JWT_REFRESH_KEY,
    (err, decoded) => {
      const { iat, exp, ...newDecoded } = decoded
      if (err) return res.sendStatus(403)
      const accessToken = jwt.sign(
        newDecoded,
        SECRET_JWT_KEY,
        { expiresIn: ACCESS_TOKEN_EXPIRATION_TIME }
      )
      res.json({ accessToken, ...newDecoded })
    }
  )
}
