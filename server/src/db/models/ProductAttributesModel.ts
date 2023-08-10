import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/database'

export default class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
  attribute_id: {
    type: DataTypes.INTEGER
  },
  value: {
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
}, {
  tableName: 'category',
  sequelize
})
