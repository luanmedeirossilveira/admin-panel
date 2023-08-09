"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    database: "admin_panel_db",
    username: "postgres",
    password: "postgres",
    dialect: "postgres",
    host: "localhost",
    port: 5432
});
