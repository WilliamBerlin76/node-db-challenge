
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('Name', 225).notNullable();
        tbl.string('description', 225);
        tbl.boolean('completed').defaultTo(false);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
};
