const { Sequelize, DataTypes, Model, QueryTypes } = require("sequelize");

const sequelize = new Sequelize("student", "root", "arpita@3006", {
    host: "localhost",
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialect: "mysql",
  });
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  
  const db = {};

  db.sequelize = sequelize;

  db.user = require("./user")(sequelize,DataTypes);
db.contacts = require("./contact")(sequelize,DataTypes);

db.sequelize.sync({ force: true });
module.exports = db;