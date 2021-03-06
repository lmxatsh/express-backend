import sequelizeInstance from '../sequelizeInstance.js'
import user from '../models/users.model.js'
import faker from 'faker'

const userSeedData = []
for (let i = 0; i < 10; i++) {
  userSeedData.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
  })
}

await sequelizeInstance.drop()

await sequelizeInstance
  .sync()
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
