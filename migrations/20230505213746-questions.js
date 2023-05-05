'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('Questions', 'scenario', {
              type: Sequelize.TEXT,
              allowNull: true,
          }, )
      ])
  },

  down: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('Questions', 'scenario', {
              type: Sequelize.STRING,
              allowNull: true,
          }, )
      ])
  }
};
