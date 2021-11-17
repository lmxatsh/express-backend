import users from '../models/users.model'

async function verifySignin(req, res, next) {
  const user = await users.findOne({
    where: {
      email: req.body.email,
    },
  })

  if (user && user.password === req.body.password) {
    next()
  } else {
    res.status(401).send({
      message: `${req.body.email} login fail`,
    })
  }
}

export default verifySignin
