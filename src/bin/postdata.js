import axios from 'axios'

axios
  .post('http://localhost:4000/users', { name: 'test', email: 'test@test.com' })
  .then((res) => {
    console.log(res.status)
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })
