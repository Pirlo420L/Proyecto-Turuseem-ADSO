import express from 'express';
import { getAllMemorandum, getMemorandum, createMemorandum, deleteMemorandum, updateMemorandum, getQueryMemorandum } from '../controller/memorandumController.js';

const router = express.Router();

router.get('/', getAllMemorandum)
router.get('/:Id_Memorando', getMemorandum)
router.post('/', createMemorandum)
router.put('/:Id_Memorando', updateMemorandum)
router.delete('/:Id_Memorando', deleteMemorandum)
router.get('/codigo/:Id_Memorando', getQueryMemorandum)

export default router
