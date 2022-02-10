
// create the connection to database
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Vish@l1718",
  DB: "vishaldb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};