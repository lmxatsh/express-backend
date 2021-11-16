import express from 'express'
import passport from 'passport'
import { setPassportlocalStrategy } from './passport.init.js'
import usersRouter from './routes/users.route.js'
import authRouter from './routes/auth.route.js'
const app = express()

app.use(express.json())
app.use((req, res, next) => {
  if (req.method === 'GET') {
    res.set('Cache-Control', `max-age=60`)
  }
  next()
})

setPassportlocalStrategy(passport)
app.use(passport.initialize())

app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.get('/', (req, res) => {
  res.send('Hello Express')
})
app.get('/loginfail', (req, res) => {
  res.send('Login Fail')
})
app.get('/loginok', (req, res) => {
  res.send('Login Ok')
})
export default app
