import Sequelize from 'sequelize'

const sequelizeInstance = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  storage: './db/db.sqlite',
})

export default sequelizeInstance
