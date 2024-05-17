import express from 'express';
import { createApprentice, deleteApprentice, getAllApprentice, getApprentice, updateApprentice, getQueryApprentice } from '../controller/apprenticeController.js';

const router = express.Router();

router.get('/', getAllApprentice)
router.get('/:Id_Aprendiz', getApprentice)
router.post('/', createApprentice)
router.put('/:Id_Aprendiz', updateApprentice)
router.delete('/:Id_Aprendiz', deleteApprentice)
router.get('/documento/:Id_Aprendiz', getQueryApprentice)

export default router