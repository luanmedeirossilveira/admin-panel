import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/database'

export default class Attributes extends Model {}

Attributes.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING
  },
  values: {
    type: DataTypes.ARRAY(DataTypes.STRING)
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
  tableName: 'attributes',
  sequelize
})
