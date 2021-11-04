import sequelizeInstance from '../sequelizeInstance.js'
import Sequelize from 'sequelize'

const users = sequelizeInstance.define('users', {
  //id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
})

export default users
