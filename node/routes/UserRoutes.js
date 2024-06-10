import express from 'express';
import { 
    CreateAccount,
    autenticar, 
    perfil, confirmar, 
    olvidePassword, 
    comprobarToken, 
    nuevoPassword
} from '../controller/userController.js';

import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

//Area Publica
router.post('/create', CreateAccount)
router.get('/confirmar/:token', confirmar)
router.post('/login', autenticar)
router.post('/olvide-password', olvidePassword)
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)

// router.get('/olvideContraseña/:token', comprobarToken)
// router.post('/olvideContraseña/:token', nuevoPassword)



//Area Privada
router.get('/perfil',checkAuth, perfil)


export default router