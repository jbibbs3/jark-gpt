"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        scenario: "You are preparing for a job interview. What prompt would you ask JarkGPT to best prepare you for the interview?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        scenario: "You are a small business owner looking to optimize your finances. What prompt would you ask JarkGPT to best improve your financials?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        scenario: "You are working in a position where you are regularly required to exercise techniques of de-escalation. What prompt would you ask JarkGPT to learn more about best practices when doing so?",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
