
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('initial').del()
    .then(function () {
      // Inserts seed entries
      return knex('initial').insert([
        {id: 1, Test: 'Ave'},
        {id: 2, Test: 'Aque'},
        {id: 3, Test: 'Vale'}
      ])
    })
};
