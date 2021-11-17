import users from '../models/users.model'

async function verifySignup(req, res, next) {
  const user = await users.findOne({
    where: {
      email: req.body.email,
    },
  })

  if (user) {
    res.status(400).send({
      message: `${user.email} is already in use`,
    })
    return
  }
  next()
}

export default verifySignup
