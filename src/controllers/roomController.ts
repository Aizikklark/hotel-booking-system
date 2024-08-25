import { Request, Response } from 'express';
import Room from '../models/Room';

// Создание новой комнаты
export const createRoom = async (req: Request, res: Response) => {
  const { hotelId, number, type, price } = req.body;
  try {
    const newRoom = await Room.create({ hotelId, number, type, price });
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ message: 'Error creating room', error });
  }
};

// Получение всех комнат
export const getRooms = async (_req: Request, res: Response) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rooms', error });
  }
};

// Обновление комнаты
export const updateRoom = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { number, type, price } = req.body;
  try {
    const room = await Room.findByPk(id);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    room.number = number;
    room.type = type;
    room.price = price;
    await room.save();

    res.json(room);
  } catch (error) {
    res.status(500).json({ message: 'Error updating room', error });
  }
};

// Удаление комнаты
export const deleteRoom = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const room = await Room.findByPk(id);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    await room.destroy();
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting room', error });
  }
};
