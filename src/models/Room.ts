import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Room extends Model {
  public id!: number;
  public hotelId!: number;
  public number!: string;
  public type!: string;
  public price!: number;
}

Room.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    hotelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Room',
    tableName: 'rooms',
  }
);

export default Room;
