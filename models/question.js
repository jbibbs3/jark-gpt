'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsToMany(models.Answer, {
        through: 'QuestionAnswers',
        foreignKey: 'questionId',
      });
    }
  }
  Question.init({
    scenario: DataTypes.STRING,
    quizId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};