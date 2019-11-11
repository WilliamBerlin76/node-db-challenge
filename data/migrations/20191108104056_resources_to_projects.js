
exports.up = function(knex) {
  return knex.schema
    .createTable('resources_to_projects', tbl => {
        tbl.increments()
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl
            .integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists('resources_to_projects')
};
