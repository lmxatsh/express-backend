import express from 'express'
import userRouter from './routes/user.routes.js'

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`app istening at http://localhost:${port}`)
})
