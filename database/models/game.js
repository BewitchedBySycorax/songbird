const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      Game.belongsTo(models.Player, {
        foreignKeyConstraint: true,
        foreignKey: 'player_id',
        as: 'player',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }

  Game.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1,
      unique: 'compositeIndex'
    },
    playerId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: 'compositeIndex'
    },
    scores: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Game',
    underscored: true,
    freezeTableName: true,
    tableName: 'games'
  })

  return Game
}
