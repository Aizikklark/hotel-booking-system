import express from 'express';
import { createBooking, getBookings, cancelBooking } from '../controllers/bookingController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authMiddleware, createBooking);
router.get('/', authMiddleware, getBookings);
router.delete('/:id', authMiddleware, cancelBooking);

export default router;
