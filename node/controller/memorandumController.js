import MemorandumModel from "../models/memorandumModel.js";
import { Sequelize } from "sequelize";

export const getAllMemorandum = async (req, res) => {
    try {
        const memorandum =  await MemorandumModel.findAll()
        res.json(memorandum)
    } catch (error){
        res.json({ message: error.message })
    }
}

export const getMemorandum = async (req, res) => {
    try {
        const memorandum = await MemorandumModel.findAll({
            where: { Id_Memorando: req.params.Id_Memorando}
        })
        res.json(memorandum[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createMemorandum = async (req, res) => {
    try {
        await MemorandumModel.create(req.body)
        res.json({ message: "Memorando Registrado Correctamente!"})
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateMemorandum = async (req, res) => {
    try {
        await MemorandumModel.update(req.body, {
            where: { Id_Memorando: req.params.Id_Memorando}
        })
        res.json({ message: "Memorando Actualizado Correctamente!"})
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteMemorandum = async (req, res) => {
    try {
        await MemorandumModel.destroy({
            where: { Id_Memorando: req.params.Id_Memorando}
        })
        res.json({message: "Memorando Boraado Correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getQueryMemorandum = async (req, res) => {
    try {
        const memorando = await MemorandumModel.findAll({
            where: {
                Id_Memorando: {
                    [Sequelize.Op.like]: `%${req.params.Id_Memorando}%`
                }
            }
        })
        res.json(memorando)
    } catch (error) {
        res.json({ message: error.message })
    }
}