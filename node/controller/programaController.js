import { Sequelize, Op } from "sequelize";
import ProgramaModel from "../models/programaModel.js";
//mostrar todos los registros
export const getAllPrograma = async (req, res) => {
    try {
        const Programa = await ProgramaModel.findAll()
        res.json(Programa)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//mostrar un registro
export const getPrograma = async (req, res) => {
    try {
        const programa = await ProgramaModel.findByPk(req.params.Id_Programa);
        if (programa) {
            res.json(programa);
        } else {
            res.status(404).json({ message: 'programa no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//crear un player
export const createPrograma = async (req, res) => {
    try {
        await ProgramaModel.create(req.body)
        res.json({ message: "¡Registro creado exitosamente!" })

    } catch (error) {
        res.json({ message: error.message })
    }
}

//actualizar un registro
export const updatePrograma = async (req, res) => {
    try {
        const { Id_Programa, Nom_Programa, Tip_Programa } = req.body;
        const programa = await ProgramaModel.update(
            {
                Id_Programa,
                Nom_Programa,
                Tip_Programa
            },
            {
                where: { Id_Programa: req.params.Id_Programa }
            }
        );
        if (programa[0] === 0) {
            res.status(404).json({ message: 'Programa no encontrado' });
        } else {
            res.json({ message: 'Programa actualizado correctamente' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//borrar un registro
export const deletePrograma = async (req, res) => {
    try {
        await ProgramaModel.destroy({
            where: { Id_Programa: req.params.Id_Programa }
        })
        res.json({ "message": "¡Registro borrado exitosamente!" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Consultar programa por nombre 
export const getQueryPrograma = async (req, res) => {

    try {
        const programa = await ProgramaModel.findAll({
            where: {
                Nom_Programa: {
                    [Sequelize.Op.like]: `%${req.params.Nom_Programa}%`
                    // esta instruccion reemplaza al LIKE de una consulta en MySQL
                    // ej: SELECT * FROM players WHERE documento LIKE '1%'
                    // ej: SELECT * FROM players WHERE nombres LIKE '%u%'       
                }
            }

        })

        res.json(programa)  // obtener respuesta

    } catch (error) {
        res.json({ message: error.message })
    }

}