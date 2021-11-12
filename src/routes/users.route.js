import * as users from '../controllers/users.controller.js'
import express from 'express'

const usersRouter = express.Router()

usersRouter.get('/', users.getAll)
//usersRouter.post('/', users.create)
usersRouter.get('/:id', users.getByid)
usersRouter.post('/new', users.exists, users.create)

export default usersRouter
