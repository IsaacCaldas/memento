exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
    table.string('description').notNull()
    table.datetime('created_at')
    table.datetime('done_at')
    table.datetime('update_at')
    table.integer('user_id').references('id')
      .inTable('users').notNull()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
}