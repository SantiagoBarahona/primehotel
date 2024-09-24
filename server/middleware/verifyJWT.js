import jwt from 'jsonwebtoken'
import { SECRET_JWT_KEY } from '../config.js'

export function verifyJWT (req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization
  if (!authHeader) return res.status(401).send({ error: 'Not authorized!' })
  const accessToken = authHeader.split(' ')[1]
  jwt.verify(accessToken, SECRET_JWT_KEY, (err) => {
    if (err) return res.status(403).send({ error: 'Forbbiden!' })
    next()
  })
}
