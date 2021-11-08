import express from 'express'
import usersRouter from './routes/users.route.js'

const app = express()

app.use(express.json())
app.use((req, res, next) => {
  if (req.method === 'GET') {
    res.set('Cache-Control', `max-age=60`)
  }
  next()
})

app.use('/users', usersRouter)
app.get('/', (req, res) => {
  res.send('Hello Express')
})

export default app
