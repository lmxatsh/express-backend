import db from '../db.js'
import user from '../models/users.model.js'
import faker from 'faker'

const userSeedData = []
for (let i = 0; i < 10; i++) {
  userSeedData.push({
    email: faker.internet.email(),
    password: '123456',
  })
}

await db.drop()

await db
  .sync({ force: true })
  .then(() => {
    console.log(`create database`)
    user
      .bulkCreate(userSeedData)
      .then(() => {
        return user.findAll()
      })
      .then((user) => {
        console.log(user)
      })
  })
  .catch((err) => {
    console.log(err)
  })
