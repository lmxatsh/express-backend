const sqliteConfig = {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  storage: './db/db.sqlite',
}

export { sqliteConfig }
