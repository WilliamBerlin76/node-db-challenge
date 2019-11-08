
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      return knex('tasks').insert([
        {id: 1, description: 'complete direction', notes: 'do it now', completed: false, project_id: 1},
        {id: 2, description: 'follow instruction', notes: 'test notes', completed: true, project_id: 1},
        {id: 3, description: 'do stuff', notes: 'do it now', completed: false, project_id: 2},
        {id: 4, description: 'more stuff', notes: 'test notes', completed: true, project_id: 2},
      ]);

};
