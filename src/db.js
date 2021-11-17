import Sequelize from 'sequelize'
import { sqliteConfig } from './config/db.config.js'

const db = new Sequelize(sqliteConfig)

export default db
