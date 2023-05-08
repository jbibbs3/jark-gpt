'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('QuestionAnswers', {
      questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Questions',
          key: 'id',
        },
        field: 'questionId',
      },
      answerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Answers',
          key: 'id',
        },
        field: 'answerId',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('QuestionAnswers');
  }
};
