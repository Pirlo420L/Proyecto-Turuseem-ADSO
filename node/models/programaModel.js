import db from "../database/db.js";
import { DataTypes } from "sequelize";


const ProgramaModel = db.define('programa', {
    Id_Programa: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    Nom_Programa: { type: DataTypes.STRING },
    Tip_Programa: { type: DataTypes.CHAR },
    Id_Area: { type: DataTypes.INTEGER }
}, {
    freezeTableName: true
}
)

export default ProgramaModel