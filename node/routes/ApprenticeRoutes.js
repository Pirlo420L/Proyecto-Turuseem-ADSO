import express from 'express';
import { createApprentice, deleteApprentice, getAllApprentice, getApprentice, updateApprentice, getQueryApprentice, getQueryNom_Apprentice } from '../controller/apprenticeController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

//Routes for module apprentice
router.get('/', checkAuth, getAllApprentice)
router.get('/:Id_Aprendiz', checkAuth, getApprentice)
router.post('/', checkAuth, createApprentice)
router.put('/:Id_Aprendiz', checkAuth, updateApprentice)
router.delete('/:Id_Aprendiz', checkAuth, deleteApprentice)
router.get('/documento/:Id_Aprendiz', checkAuth, getQueryApprentice)
router.get('/nombre/:Nom_Aprendiz', checkAuth, getQueryNom_Apprentice)



export default router