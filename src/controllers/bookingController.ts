import { Request, Response } from 'express';
import Booking from '../models/Booking';

// Создание нового бронирования
export const createBooking = async (req: Request, res: Response) => {
  const { userId, roomId, startDate, endDate } = req.body;
  try {
    const newBooking = await Booking.create({ userId, roomId, startDate, endDate });
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

// Получение всех бронирований
export const getBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

// Отмена бронирования
export const cancelBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    await booking.destroy();
    res.json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling booking', error });
  }
};
