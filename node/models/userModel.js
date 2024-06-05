import db from "../database/db.js";
import bcrypt from "bcrypt"
import { DataTypes} from "sequelize";
import { generarToken } from "../helpers/generarToken.js";

const UserModel = db.define('users', {
    Id_User: { type: DataTypes.INTEGER, primaryKey:true, allowNull: true},
    Nom_User: { type: DataTypes.STRING},
    Cor_User: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING},
    token: { type: DataTypes.STRING, defaultValue: generarToken()},
    Confirmado: { type: DataTypes.BOOLEAN}
}, {
    hooks: {
        beforeSave: async (user, options) => {
            if (user.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    }
})

// UserModel.beforeSave(async function (next) {
//     if (!this.changed("password")) {
//         next()
//     }
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })

UserModel.prototype.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password)
}

export default UserModel