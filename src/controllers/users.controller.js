import users from '../models/users.model.js'

function create(req, res) {
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  const userData = {
    name: req.body.name,
    email: req.body.email,
  }

  users
    .create(userData)
    .then((data) => {
      res.send(data)
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

export { create, getAll }
