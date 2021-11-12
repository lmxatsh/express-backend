import express from 'express'
import * as login from '../controllers/login.controller.js'

const loginRouter = express.Router()

loginRouter.post('/', login.auth)

export default loginRouter
