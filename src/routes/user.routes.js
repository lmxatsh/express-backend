import * as user from '../controllers/user.controller.js'
import express from 'express'

const userRouter = express.Router()

userRouter.get('/', user.getAll)

export default userRouter
