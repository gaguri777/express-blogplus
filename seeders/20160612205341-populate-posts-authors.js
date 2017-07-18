'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('authors', [
      { firstName: 'Keith',
        lastName: 'Fuller',
        bio: 'Key contributor to various newspapers in the Greater Puget Sound area. Father. Bike enthusiast.',
        createdAt: new Date(),
        updatedAt: new Date() },
      { firstName: 'Misty',
        lastName: 'Owens',
        bio: 'Blogger in favor of public transit and community building in First Hill and Capitol Hill.',
        createdAt: new Date(),
        updatedAt: new Date() }
    ], { returning: true }).then(function(authors) {
      return queryInterface.bulkInsert('posts', [
        { title: 'Bike usage in Seattle grows as city plans new lanes.',
          content: 'Bike lanes in the downtown area, as well as the surrounding areas, are being installed.',
          authorId: authors[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { title: 'Local Events: Capitol Hill Art Walk',
          content: 'Celebrate community and expression at the next Capitol Hill Art Walk.',
          authorId: authors[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
