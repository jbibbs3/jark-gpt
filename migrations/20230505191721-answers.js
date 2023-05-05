'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('Answers', 'choice', {
              type: Sequelize.TEXT,
              allowNull: true,
          }, )
      ])
  },

  down: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('your table name ', 'name', {
              type: Sequelize.STRING,
              allowNull: true,
          }, )
      ])
  }
};
