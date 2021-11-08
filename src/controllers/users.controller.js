import users from '../models/users.model.js'

function getByid(req, res) {
  users
    .findAll({
      where: {
        id: req.params.id,
      },
    })
    .then((data) => {
      console.log(data)
      if (data.length > 0) {
        res.status(200).send(data)
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
    name: req.body.name,
    email: req.body.email,
  }

  users
    .create(userData)
    .then((data) => {
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
