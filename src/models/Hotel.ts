import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Hotel extends Model {
  public id!: number;
  public name!: string;
  public location!: string;
}

Hotel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Hotel',
    tableName: 'hotels',
  }
);

export default Hotel;