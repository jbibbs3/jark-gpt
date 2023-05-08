"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Answers", [
      {
        choice:
          'I am interviewing for `X` position. Give me a list of possible interview questions that I might be asked by the interviewer, both technical and behavioral.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        choice:
          'I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the `X` position. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is "Hi"',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        choice:
          'How can I effectively highlight my skills and experiences during the interview for `X` position?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        choice:
          'I want you to act as an accountant and come up with creative ways to manage finances. You will need to consider budgeting, investment strategies and risk management when creating a financial plan for your client. In some cases, you may also need to provide advice on taxation laws and regulations in order to help them maximize their profits. My first suggestion request is “Create a financial plan for a small business that focuses on cost savings and long-term investments".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        choice:
          'Create a financial plan for a small business that focuses on cost savings and long-term investments',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        choice:
          'I am a small business owner. How can I best go about optimizing my finances?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        choice:
          'What are the best ways to de-escalate a difficult situation?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        choice:
          'What techniques have the highest chance of success when attempting to de-escalate a difficult situation?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        choice:
          'As a customer service representative, what are some effective techniques for de-escalating a difficult customer situation? Can you provide some examples of successful customer interactions that you have witnessed or participated in?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Answers", null, {});
  },
};
