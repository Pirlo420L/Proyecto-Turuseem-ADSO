// import { Sequelize } from "sequelize";
import UserModel from "../models/userModel.js";
import { generarJWT } from "../helpers/generarJWT.js";
import { generarToken } from "../helpers/generarToken.js";
import { emailRegistro } from "../helpers/emailRegistro.js";
import { emailOlvidePassword } from "../helpers/emailOlvidePassword.js";

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
        res.json({
            Id_User: usuario.Id_User,
            Nom_User: usuario.Nom_User,
            Cor_User: usuario.Cor_User,
            token: generarJWT(usuario.Id_User)
        })
    } else {
        const error = new Error('La contraseña es incorrecta!')
        return res.status(403).json({msg: error.message})
    }
}

export const CreateAccount = async (req, res) => {
    const { Cor_User, Nom_User } = req.body
    //Prevenir Usuarios Duplicados
    const existeUser = await UserModel.findOne({
        where : { Id_User: req.body.Id_User}
    })
    if (existeUser) {
        const error = new Error(`Usuario ya existe!`)
        return res.status(400).json({ message: error.message });
    }
    try {
        const newUser = await UserModel.create(req.body)

    // Enviar Email
        emailRegistro({
            Cor_User,
            Nom_User,
            token: newUser.token
        })

        res.json(newUser)
    } catch (error) {
        res.json({message: error.message})
    }
}
export const perfil = async (req, res) => {
    const { usuario} = req
    res.json({ usuario })
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

        return res.status(200).json({msg: "Usuario Confirmado Correctamente"})
    } catch (err) {
        console.error('Error al confirmar el usuario:', err);
        return res.status(500).json({ msg: 'Error al confirmar el usuario' });
    }
}

export const olvidePassword = async(req, res) => {
    const { Cor_User } = req.body
    const existeUsuario = await UserModel.findOne({
        where: { Cor_User: Cor_User}
    })
    if (!existeUsuario) {
        const error = new Error("El Usuario no existe")
        return res.status(404).json({ msg: error.message})
    }
    try {
        existeUsuario.token = generarToken()
        await existeUsuario.save()

        // Enviar Email
        emailOlvidePassword({
            Cor_User,
            Nom_User: existeUsuario.Nom_User,
            token: existeUsuario.token
        })
        res.json({msg: "Hemos enviado un correo con las instrucciones!"})
    } catch (error) {
        console.log(error);
    }
}
export const comprobarToken = async(req, res) => {
    const { token } = req.params
    const tokenUsuario = await UserModel.findOne({
        where: { token: token}
    })
    if (tokenUsuario) {
        //Token Valido
        res.json({ msg: "Token Valido, El usuario existe!"})
    } else {
        const error = new Error("Token No Valido")
        return res.status(404).json({ msg: error.message})
    }
}
export const nuevoPassword = async(req, res) => {
    // const { token } = req.params
    const { password } = req.body

    const usuario = await UserModel.findOne({
        where: { token: req.params.token }
    })
    if (!usuario) {
        const error = new Error("Hubo un error")
        return res.status(404).json({ msg: error.message})
    }

    try {
        usuario.token = null
        usuario.password = password
        await usuario.save()
        res.json({ msg: "Contraseña Cambiada Correctamente!"})

        // console.log(usuario);
    } catch (error) {
        console.log(error);
    }
}