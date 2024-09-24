import jwt from 'jsonwebtoken'
import { SECRET_JWT_KEY, SECRET_JWT_REFRESH_KEY } from '../../config.js'

export const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies
  if (!cookies?.refresh_token) return res.sendStatus(401)
  const refreshToken = cookies.refresh_token

  jwt.verify(
    refreshToken,
    SECRET_JWT_REFRESH_KEY,
    (err, decoded) => {
      if (err) return res.sendStatus(403)
      const accessToken = jwt.sign(
        { decoded },
        SECRET_JWT_KEY,
        { expiresIn: '10s' }
      )
      res.json({ accessToken, ...decoded })
    }
  )
}
