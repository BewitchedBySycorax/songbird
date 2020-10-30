const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Bird extends Model {
    // static associate(models) { }
  }

  Bird.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    audio: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Bird',
    underscored: true,
    freezeTableName: true,
    tableName: 'birds'
  })

  return Bird
}
