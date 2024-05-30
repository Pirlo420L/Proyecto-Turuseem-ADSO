import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UserModel = db.define('users', {
    Id_User: { type: DataTypes.INTEGER, primaryKey:true, allowNull: true},
    Cor_User: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING}
})

export default UserModel