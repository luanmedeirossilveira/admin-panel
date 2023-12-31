import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/database'

export default class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT,
  },
  category_id: {
    type: DataTypes.INTEGER
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  brand_id: {
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
  tableName: 'products',
  sequelize
})
