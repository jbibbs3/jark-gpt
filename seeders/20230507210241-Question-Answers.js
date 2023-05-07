'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('QuestionAnswers', [
      { question_id: 1, answer_id: 2 },
      { question_id: 2, answer_id: 2 },
      { question_id: 3, answer_id: 2 },
      { question_id: 4, answer_id: 8 },
      { question_id: 5, answer_id: 8 },
      { question_id: 6, answer_id: 8 },
      { question_id: 7, answer_id: 4 },
      { question_id: 8, answer_id: 4 },
      { question_id: 9, answer_id: 4 },

    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('QuestionAnswers', null, {});
  }
};
