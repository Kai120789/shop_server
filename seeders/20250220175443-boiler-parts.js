const { faker } = require('@faker-js/faker');
'use strict';

const boilerManufacturers = [
  'Ariston',
  'Chaffoteaux&Maury',
  'Baxi',
  'Bongioanni',
  'Saunier Duval',
  'Buderus',
  'Strategist',
  'Henry',
  'Northwest',
];
const partsManufacturers = [
  'Azure',
  'Gloves',
  'Cambridgeshire',
  'Salmon',
  'Montana',
  'Sensor',
  'Lesly',
  'Radian',
  'Gasoline',
  'Croatia',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'BoilerParts', 
      [...Array(100)].map(() => ({
        boiler_manufacturer: 
          boilerManufacturers[
            Math.floor(Math.random() * boilerManufacturers.length)
          ],

        parts_manufacturer: 
          partsManufacturers[
            Math.floor(Math.random() * partsManufacturers.length)
          ],

        price: faker.number.int({ min: 1000, max: 9999 }),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        images: JSON.stringify(
          [...Array(7)].map(
            () => `${faker.image.url()}?random=${faker.number.int({ min: 1, max: 30 })}`
          )
        ),

        vendor_code: faker.string.alphanumeric(10),
        in_stock: faker.number.int({ min: 0, max: 9 }),
        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        popularity: faker.number.int({ min: 100, max: 999 }),
        compatibility: faker.lorem.sentence(7),
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BoilerParts', null, {});
  }
};
