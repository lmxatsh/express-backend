import * as users from '../controllers/users.controller.js'
import express from 'express'

const usersRouter = express.Router()

usersRouter.get('/', users.getAll)

export default usersRouter
