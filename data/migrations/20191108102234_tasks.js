
exports.up = function(knex) {
  return knex.schema
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 225).notNullable();
        tbl.string('notes', 225);
        tbl.boolean('completed').defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema  
    .dropTableIfExists('tasks')
};
