import users from '../models/users.model.js'

function getByid(req, res) {
  users
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((data) => {
      console.log(data)
      if (data) {
        res.status(200).send(JSON.stringify(data))
      } else {
        res.status(404).end()
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      })
    })
}

function create(req, res) {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  }

  users
    .create(userData)
    .then((data) => {
      console.log(`save ${req.body}`)
      res
        .location('/users/' + data.id)
        .status(201)
        .send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      })
    })
}

function getAll(req, res) {
  users
    .findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      })
    })
}

export { create, getAll, getByid }
