import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("indietora", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});
