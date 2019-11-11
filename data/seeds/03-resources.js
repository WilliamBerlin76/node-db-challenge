
exports.seed = function(knex) {
 
      return knex('resources').insert([
        {id: 1, name: 'Luis', description: 'helps a lot'},
      ]);
   
};
