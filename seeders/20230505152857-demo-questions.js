'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name:: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Questions', [
      {name: "Can you pretend to be a chef and tell me how to make a gourmet pizza?",createdAt: new Date(), updatedAt: new Date() },
      {name: "Imagine you're a doctor. Can you give me advice on how to stay healthy during flu season?",createdAt: new Date(), updatedAt: new Date() },
      {name: "As a software engineer, how would you approach a coding challenge that requires working with complex algorithms?",createdAt: new Date(), updatedAt: new Date() },
      {name: "Can you pretend to be a dog and tell me about your favorite toys?",createdAt: new Date(), updatedAt: new Date() },
      {name: "Imagine you're a superhero. What's your origin story and superpowers?",createdAt: new Date(), updatedAt: new Date()},
      {name: "As an AI language model, how would you approach processing and analyzing large amounts of text data?",createdAt: new Date(), updatedAt: new Date()},
      {name: "Can you give me some tips on how to improve my writing?",createdAt: new Date(), updatedAt: new Date() },
      {name: "What are some common mistakes that people make when writing?",createdAt: new Date(), updatedAt: new Date() },
      {name: "Can you play the role of a writing coach and give me feedback on my writing?",createdAt: new Date(), updatedAt: new Date() },

    ]);
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
