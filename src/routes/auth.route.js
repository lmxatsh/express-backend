import express from 'express'
import * as auth from '../controllers/auth.controller.js'
import verifySignup from '../middlewares/verifySignup.middleare.js'

const authRouter = express.Router()

authRouter.post('/signup', verifySignup, auth.signup)

authRouter.post('/signin', auth.signin)

export default authRouter
