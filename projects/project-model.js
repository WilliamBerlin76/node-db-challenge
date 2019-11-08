const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask,
    getAllTasks
};

function getProjects(){
    return db('projects');
}

function addProject(body){
    return db('projects')
            .insert(body)
};

function getResources(){
    return db('resources');
};

function addResource(body){
    return db('resources')
            .insert(body)
};

function getTasks(project_id){
    return db.select('projects.Name', 'projects.description', 'tasks.description', 'tasks.notes', 'tasks.completed')
            .where('projects.id', '=', project_id)
            .from('projects')
            .join('tasks', 'tasks.project_id', '=', 'projects.id')
};

function addTask(task, project_id){
    return db('tasks')
            .insert(task)
            .where('project.id', '=', project_id)
};

function getAllTasks(){
    return db('tasks');
}
