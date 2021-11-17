import jwt from 'jsonwebtoken'
import appConfig from '../config/app.config.js'

function verifyToken(req, res, next) {
  const token = req.cookies.access_token
  if (!token) {
    res.status(403).send('error: access_token not found')
  }
  try {
    const data = jwt.verify(token, appConfig.tokenSecret)
    req.userEmail = data.email
    next()
  } catch (err) {
    res.status(403).send(`error: ${err}`)
  }
}

export default verifyToken
