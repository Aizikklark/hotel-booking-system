import { Request, Response } from 'express';
import Hotel from '../models/Hotel';

// Создание нового отеля
export const createHotel = async (req: Request, res: Response) => {
  const { name, location } = req.body;
  try {
    const newHotel = await Hotel.create({ name, location });
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(500).json({ message: 'Error creating hotel', error });
  }
};

// Получение всех отелей
export const getHotels = async (_req: Request, res: Response) => {
  try {
    const hotels = await Hotel.findAll();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hotels', error });
  }
};

// Обновление отеля
export const updateHotel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, location } = req.body;
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) return res.status(404).json({ message: 'Hotel not found' });

    hotel.name = name;
    hotel.location = location;
    await hotel.save();

    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: 'Error updating hotel', error });
  }
};

// Удаление отеля
export const deleteHotel = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) return res.status(404).json({ message: 'Hotel not found' });

    await hotel.destroy();
    res.json({ message: 'Hotel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting hotel', error });
  }
};
