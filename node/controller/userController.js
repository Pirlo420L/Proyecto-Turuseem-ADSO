// import { Sequelize } from "sequelize";
import UserModel from "../models/userModel.js";

export const login = async (req, res) => {
    const { Cor_User, password } = req.body;
    try {
        const user = await UserModel.findOne({
            where: { 
                Cor_User: Cor_User,
                password: password
            }
        });

        if (user) {
            res.status(200).json({ message: "Login Exitoso" });
        } else {
            res.status(401).json({ message: 'Credenciales Incorrectas' });
        }
        const { Id_User, ...userData } = user.toJSON();

        res.json(userData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const CreateAccount = async (req, res) => {
    const {Id_User, Cor_User, password} = req.body
    try {
        const newUser = await UserModel.create({Id_User, Cor_User, password})
        res.status(201).json(newUser)
    } catch (error) {
        res.json({message: error.message})
    }
}

// export const updateUser = async (req, res) => {
//     try {
//         await UserModel.update(req.body, {
//             where: {Id_User: req.params.Id_User}  
//         })
//         res.json({message: "Usuario Actualizado con exito!"})
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }

// export const deleteUser = async (req, res) => {
//     try {
//         await UserModel.destroy({
//             where: {Id_User: req.params.Id_User}
//         })
//         res.json({message: "Usuario Borrado con exito!"})
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }

// export const login = (req, res) => {
//     const { correoUser, password } = req.body;
//     const consult = 'SELECT * FROM login WHERE Cor_User = ? AND password = ?';

//     try {
//         UserModel.query(consult, [correoUser, password], (err, results) => {
//             if (err) {
//                 console.error('Error en la consulta:', err);
//                 return res.status(500).send(err);
//             }
//             if (results.length > 0) {
//                 console.log('Usuario encontrado:', results);
//                 return res.status(200).json(results);
//             } else {
//                 console.log('No se encuentra el usuario');
//                 return res.status(404).json({ message: 'Usuario no encontrado' });
//             }
//         });
//     } catch (error) {
//         console.error('Error del servidor:', error);
//         return res.status(500).json({ message: error.message });
//     }
// };