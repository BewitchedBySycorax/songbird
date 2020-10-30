const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {
      Player.hasMany(models.Game, {
        foreignKeyConstraint: true,
        foreignKey: 'player_id',
        as: 'games',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }

  Player.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    hooks: {
      afterCreate(player) {
        sequelize.models.Game.create({
          playerId: player.id
        })
      }
    },
    sequelize,
    modelName: 'Player',
    underscored: true,
    freezeTableName: true,
    tableName: 'players'
  })

  return Player
}
