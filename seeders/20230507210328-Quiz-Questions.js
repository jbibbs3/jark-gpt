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
    await queryInterface.bulkInsert('QuizQuestions', [
      { quiz_id: 2, question_id: 1 },
      { quiz_id: 2, question_id: 2 },
      { quiz_id: 2, question_id: 3 },
      { quiz_id: 2, question_id: 4 },
      { quiz_id: 2, question_id: 5 },
      { quiz_id: 2, question_id: 6 },
      { quiz_id: 2, question_id: 7 },
      { quiz_id: 2, question_id: 8 },
      { quiz_id: 2, question_id: 9 },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('QuizQuestions', null, {});
  }
};
