"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("QuizQuestions", [
      { quizId: 1, questionId: 1 },
      { quizId: 1, questionId: 2 },
      { quizId: 1, questionId: 3 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("QuizQuestions", null, {});
  },
};
