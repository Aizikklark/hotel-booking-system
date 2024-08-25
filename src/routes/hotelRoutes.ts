import express from 'express';
import { createHotel, getHotels, updateHotel, deleteHotel } from '../controllers/hotelController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authMiddleware, createHotel);
router.get('/', getHotels);
router.put('/:id', authMiddleware, updateHotel);
router.delete('/:id', authMiddleware, deleteHotel);

export default router;
