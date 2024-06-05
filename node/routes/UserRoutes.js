import express from 'express';
import { CreateAccount, autenticar, perfil, confirmar} from '../controller/userController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', CreateAccount)
router.get('/confirmar/:token', confirmar)
router.post('/login', autenticar)


router.get('/perfil',checkAuth, perfil)
export default router