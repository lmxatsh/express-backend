import axios from 'axios'

axios
  .post('http://localhost:4000/auth/login', {
    email: 'test@test.com',
    password: '123456',
  })
  .then((res) => {
    console.log(res.status)
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })
