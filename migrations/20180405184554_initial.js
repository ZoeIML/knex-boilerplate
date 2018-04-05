// change, rollback and remigrate once boilerplate tests as functional

exports.up = function(knex, Promise) {
  return knex.schema.createTable('initial', table => {
      table.increments('id')
      table.string('test')
  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('initial')
  
}
