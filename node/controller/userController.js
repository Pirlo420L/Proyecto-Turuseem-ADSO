// import { Sequelize } from "sequelize";
import UserModel from "../models/userModel.js";
import { generarJWT } from "../helpers/generarJWT.js";
// import jwt from 'jsonwebtoken'

export const autenticar = async (req, res) => {
    const  { Cor_User, password } = req.body
    //Comprobar si el user existe
    const usuario = await UserModel.findOne({
        where: { Cor_User : req.body.Cor_User}
    })
    if (!usuario) {
        const error = new Error('El ususario no existe!')
        return res.status(404).json({msg: error.message})
    }
    //Comprobar si el usuario esta confirmado 
    if (!usuario.Confirmado) {
        const error = new Error('Tu cuenta no esta confirmada!')
        return res.status(403).json({msg: error.message})
    }
    //Comprobar password
    if ( await usuario.comprobarPassword(password)) {
        res.json({token: generarJWT(usuario.Id_User) })
        console.log('Password Corrected');
    } else {
        const error = new Error('La contraseña es incorrecta!')
        return res.status(403).json({msg: error.message})
    }
}

// export const login = async (req, res) => {
//     const { Cor_User, password } = req.body;
//     try {
//         const user = await UserModel.findOne({
//             where: { 
//                 Cor_User: Cor_User,
//                 password: password
//             }
//         });
        
//         if (user) {
//             const token = jwt.sign({Cor_User, password}, 'Stack', {
//                 expiresIn: '1h'
//             })
//             // res.send({token});
//             // res.status(200).json({ message: "Login Exitoso"});
//             console.log({token});
//         } else {
//             // res.send(401).json({ message: 'Credenciales Incorrectas' });
//             console.log('Hola esa no es su contraseña');
//         }
//         const { Id_User, ...userData } = user.toJSON();

//         res.json(userData);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// };

export const CreateAccount = async (req, res) => {
    const {Id_User, Nom_User, Cor_User, password} = req.body
    //Prevenir Usuarios registrados
    const existeUser = await UserModel.findOne({
        where : { Id_User: req.body.Id_User}
    })
    if (existeUser) {
        const error = new Error(`El documento ${Id_User} ya existe!`)
        return res.status(400).json({ message: error.message });
    }
    try {
        const newUser = await UserModel.create({Id_User, Nom_User, Cor_User, password})
        res.json(newUser)
    } catch (error) {
        res.json({message: error.message})
    }
}
export const perfil = async (req, res) => {
    res.json({msg: "Mostrando el Perfil"})
}

export const confirmar = async (req, res) => {
    // const { token } = req.params

    const usuarioConfirmar = await UserModel.findOne({
        where : { token: req.params.token}
    })
    if (!usuarioConfirmar) {
        const error = new Error('Token no valido')
        return res.status(404).json({msg: error.message})
    }
    try {
        usuarioConfirmar.token = null
        usuarioConfirmar.Confirmado = true
        await usuarioConfirmar.save()

        res.json({msg: "Usuario Confirmado Correctamente"})
    } catch (err) {
        console.log(err);
    }
}
// export const logoutUser =  async (req, res) => {
//     const {Cor_User, password} = req.body
//     try {
//         await UserModel.destroy({
//             where: {}
//         })
//     }
// }

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