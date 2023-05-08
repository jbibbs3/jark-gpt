"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("QuestionAnswers", [
      { questionId: 1, answerId: 1 },
      { questionId: 1, answerId: 2 },
      { questionId: 1, answerId: 3 },
      { questionId: 2, answerId: 4 },
      { questionId: 2, answerId: 5 },
      { questionId: 2, answerId: 6 },
      { questionId: 3, answerId: 7 },
      { questionId: 3, answerId: 8 },
      { questionId: 3, answerId: 9 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("QuestionAnswers", null, {});
  },
};
