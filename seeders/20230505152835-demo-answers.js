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
    await queryInterface.bulkInsert('Answers', [
      {choice: '"As a software engineer, how would you approach a coding challenge that requires working with complex algorithms?" The prompt asks how ChatGPT would approach a complex algorithmic challenge, making it specific to its expertise as an AI language model. Unlike the other general prompts, it requires technical insight and provides an opportunity to showcase ChatGPTs capabilities.', createdAt: new Date(), updatedAt: new Date()},
      {choice: '"As an astrophysicist, can you explain the current theories on the formation of black holes?" It is specific to ChatGPTs astrophysics expertise and requires technical knowledge, unlike the imaginative prompts. It showcases ChatGPTs ability to communicate complex concepts.',createdAt: new Date(), updatedAt: new Date()},    
      {choice: '"Can you play the role of a writing coach and give me feedback on my writing?."By giving ChatGPT a specific role, you prompt it to provide a more detailed and personalized response, which can lead to more valuable feedback on your writing. The other answers are more generic and may not provide as much detailed feedback.', createdAt: new Date(), updatedAt: new Date()},
      {choice: '"As an AI language model, how would you approach processing and analyzing large amounts of text data?"The prompt asks how ChatGPT would approach a complex algorithmic challenge, making it specific to its expertise as an AI language model. Unlike the other general prompts, it requires technical insight and provides an opportunity to showcase ChatGPTs capabilities.', createdAt: new Date(), updatedAt: new Date()},

    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
