import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/database'

export default class ProductImages extends Model {}

ProductImages.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
  src: {
    type: DataTypes.STRING
  },
  main: {
    type: DataTypes.BOOLEAN
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
  tableName: 'productImages',
  sequelize
})
