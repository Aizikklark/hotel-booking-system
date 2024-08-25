import express from 'express';
import { createRoom, getRooms, updateRoom, deleteRoom } from '../controllers/roomController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authMiddleware, createRoom);
router.get('/', getRooms);
router.put('/:id', authMiddleware, updateRoom);
router.delete('/:id', authMiddleware, deleteRoom);

export default router;
