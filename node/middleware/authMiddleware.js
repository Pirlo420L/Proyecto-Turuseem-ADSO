import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";


const checkAuth = async(req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.usuario = await UserModel.findByPk(decoded.Id_User, {
                attributes: { exclude: ["password", "Confirmado", "token"]}
            })  
            return next()
        } catch (error) {
            // const e = new Error("Token no valido!")
            // return res.status(403).json({msg: e.message})
            return res.status(403).json({ msg: 'Token no válido' });
        }
    }

    if (!token) {
        // const error = new Error("Token no valido o inexistente!")
        // res.status(403).json({msg: error.message})
        return res.status(403).json({ msg: 'Token no válido o inexistente' });
    }
    next()
}

export default checkAuth