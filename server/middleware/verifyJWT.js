import jwt from 'jsonwebtoken'
import { SECRET_JWT_KEY } from '../config.js'

export function verifyJWT (req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization
  console.log(req.cookies.refresh_token)
  if (!authHeader) return res.status(401).send({ error: 'Not authorized!' })
  const accessToken = authHeader.split(' ')[1]
  jwt.verify(accessToken, SECRET_JWT_KEY, (err, decoded) => {
    if (err) return res.status(403).send({ error: 'Forbbiden!' })
    res.email = decoded.email
    res.name = decoded.name
    res.lastname = decoded.lastname
    res.prefix = decoded.prefix
    res.cellphone = decoded.cellphone
    res.birthdate = decoded.birthdate
    res.portrait = decoded.portrait
    next()
  })
}
