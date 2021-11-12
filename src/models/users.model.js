import db from '../db.js'
import Sequelize from 'sequelize'

const users = db.define('users', {
  //id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
})

export default users
