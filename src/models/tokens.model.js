import db from '../db.js'
import Sequelize from 'sequelize'

const tokens = db.define('tokens', {
  //id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: Sequelize.STRING },
  token: { type: Sequelize.STRING },
  valid: { type: Sequelize.STRING },
})

export default tokens
