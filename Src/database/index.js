require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.PASSWORD,
  {
    dialect: "postgres",
    host: "ec2-3-224-157-224.compute-1.amazonaws.com:5432",
    logging: false,
  }
);

module.exports = sequelize;
