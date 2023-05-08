'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      Answer.belongsToMany(models.Question, {
        through: 'QuestionAnswers',
        foreignKey: 'answerId',
      });
    }
  }
  Answer.init({
    choice: DataTypes.TEXT,
    questionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};