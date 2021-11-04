import express from 'express'
import usersRouter from './routes/users.route.js'

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`app istening at http://localhost:${port}`)
})
