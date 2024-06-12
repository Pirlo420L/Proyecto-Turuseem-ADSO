import express from "express";
import { createPrograma, deletePrograma, getAllPrograma, getPrograma, getQueryPrograma, updatePrograma } from "../controller/programaController.js";
const router = express.Router()

router.get('/', getAllPrograma)
router.get('/:Id_Programa', getPrograma)
router.post('/', createPrograma)
router.put('/:Id_Programa', updatePrograma)
router.delete('/:Id_Programa', deletePrograma)
//Consultar por nombre
router.get('/programa/:Nom_Programa', getQueryPrograma)

export default router