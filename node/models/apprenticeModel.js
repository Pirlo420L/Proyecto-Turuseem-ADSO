import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const ApprenticeModel = db.define('aprendiz', {
    Id_Aprendiz: { type: DataTypes.INTEGER},
    Nom_Aprendiz: { type: DataTypes.STRING},
    Ape_Aprendiz: { type: DataTypes.STRING},
    Id_Ficha: { type: DataTypes.STRING},
    Fec_Nacimiento: { type: DataTypes.DATEONLY},
    Gen_Aprendiz: { type: DataTypes.CHAR},
    Cor_Aprendiz: { type: DataTypes.STRING},
    Tel_Aprendiz: { type: DataTypes.STRING},
    Tot_Memorandos: { type: DataTypes.INTEGER},
    Tot_Inasistencias: { type: DataTypes.INTEGER},
    Patrocinio: { type: DataTypes.CHAR},
    CentroConvivencia: { type: DataTypes.CHAR}
}, {
    freezeTableName: true
})
export default ApprenticeModel