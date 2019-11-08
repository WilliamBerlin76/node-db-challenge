
exports.seed = function(knex) {
      return knex('projects').insert([
        {id: 1, Name: 'Sprint', description: 'finish it', completed: true},
        {id: 2, Name: 'another test', description: 'do it', completed: false},
      ]);
};
