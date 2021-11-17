import db from '../db.js'
import user from '../models/users.model.js'
import tokens from '../models/tokens.model.js'
import faker from 'faker'

async function initDB() {
  await db.drop()

  await db
    .sync({ force: true })
    .then(() => {
      console.log(`create database`)
    })
    .catch((err) => console.log(err))
}

function insertFakeUsers() {
  const userSeedData = []
  for (let i = 0; i < 10; i++) {
    userSeedData.push({
      email: faker.internet.email(),
      password: '123456',
    })
  }
  user
    .bulkCreate(userSeedData)
    .then(() => {
      return user.findAll()
    })
    .then((user) => {
      console.log(user)
    })
    .catch((err) => console.log(err))
}

initDB()
//insertFakeUsers()
