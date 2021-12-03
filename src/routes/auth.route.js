import express from 'express'
import * as auth from '../controllers/auth.controller.js'
import verifySignup from '../middlewares/verifySignup.middleare.js'
import userHasLoggedIn from '../middlewares/userHasLoggedIn.middleware.js'
import verifyToken from '../middlewares/verifyToken.middleware.js'

const authRouter = express.Router()

authRouter.post('/signup', [userHasLoggedIn, verifySignup], auth.signup)

authRouter.post('/signin', userHasLoggedIn, auth.signin)

authRouter.post('/logout', verifyToken, auth.logout)

authRouter.get('/user', verifyToken, auth.getUser)

export default authRouter
