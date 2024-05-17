import { Sequelize } from "sequelize";

const db = new Sequelize('proyecto-turuseem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db