import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: "admin_panel_db",
  username: "postgres",
  password: "postgres",
  dialect: "postgres",
  host: "localhost",
  port: 5432
})