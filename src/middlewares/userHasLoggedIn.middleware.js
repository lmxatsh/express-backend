import jwt from 'jsonwebtoken'
import appConfig from '../config/app.config.js'

function userHasLoggedIn(req, res, next) {
  if (req.cookies.access_token) {
    const token = req.cookies.access_token
    try {
      const data = jwt.verify(token, appConfig.tokenSecret)
      console.log(`${data.email} has logged in`)
      res.send(`${data.email} has logged in`)
    } catch (err) {
      res.status(403).send(`error: ${err}`)
    }
  } else {
    next()
  }
}

export default userHasLoggedIn
