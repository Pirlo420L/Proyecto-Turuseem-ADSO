import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";


const checkAuth = async(req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.usuario = await UserModel.findByPk(decoded.Id_User, {
                attributes: { exclude: ["password", "Confirmado"]}
            })
            return next()
            console.log(usuario, "Hola todo goooooooood");
        } catch (error) {
            const e = new Error("Token no valido!")
            res.status(403).json({msg: e.message})
        }
    }

    const error = new Error("Token no valido o inexistente!")
    res.status(403).json({msg: error.message})
}
export default checkAuth