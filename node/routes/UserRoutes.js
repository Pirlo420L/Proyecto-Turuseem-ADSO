import express from 'express';
import { CreateAccount, login} from '../controller/userController.js';

const router = express.Router();

router.post('/login', login)
router.post('/create', CreateAccount)
// router.put('/updateUser/:Id_User', updateUser)
// router.delete('/:Id_User', deleteUser)

export default router