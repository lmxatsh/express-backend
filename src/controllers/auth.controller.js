import users from '../models/users.model'
import tokens from '../models/tokens.model'
import * as jwt from 'jsonwebtoken'
import appConfig from '../config/app.config'

function signup(req, res) {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  }

  users
    .create(userData)
    .then((data) => {
      console.log(`${req.body.email} signup`)
      res.status(201).send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      })
    })
}

function signin(req, res) {
  const payload = { email: req.body.email }
  const token = jwt.sign(payload, appConfig.tokenSecret)
  res
    .cookie('access_token', token, {
      httpOnly: true,
    })
    .status(200)
    .send(`${req.body.email} logged successfully`)

  tokens
    .create({ email: req.body.email, token: token, valid: 'y' })
    .then((data) => {
      console.log(data)
      console.log(`save token for ${req.body.email}`)
    })
    .catch((err) => {
      console.log(`error: ${err}`)
    })
}

export { signup, signin }
