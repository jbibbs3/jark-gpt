'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    static associate(models) {
      Quiz.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      Quiz.belongsToMany(models.Question, {
        through: 'QuizQuestions',
        foreignKey: 'quizId',
      });
    }
  }
  Quiz.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};