import app from '../app.js'
import appConfig from '../config/app.config.js'

const port = appConfig().port

app.listen(port, () => {
  console.log(`app istening at http://localhost:${port}`)
})
