const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/projects', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            arr = [];
            projects.map(item => {
                if (item.completed === 0 || item.completed === null){
                    arr.push({...item, completed: false})
                } else {
                    arr.push({...item, completed: true})
                }
            })
            res.status(200).json(arr)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'could not retrieve the projects'})
        })
});

router.post('/projects', (req, res) => {
    const body = req.body;
    Projects.addProject(body)
    .then(project => {
        res.status(200).json(project)
    })
});

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'could not retrieve resources'})
        })
});

router.post('/resources', (req, res) => {
    const body = req.body;
    Projects.addResource(body)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'could not add the resource'})
        })
});

router.get('/projects/:id/tasks', (req, res) => {
    const id = req.params.id;
    Projects.getTasks(id)
        .then(tasks => {
            let arr = []
            tasks.map(task => {
                if (task.completed === 0 || task.completed === null){
                    return arr.push({...task, completed: false})
                } else {
                    return arr.push({...task, completed: true})
                }
            })
            res.status(200).json(arr)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: 'could not retrieve the tasks'})
        })
});

router.post('/projects/:id/tasks', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Projects.addTask(body, id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'could not add task to the project'})
        })
});

router.get('/tasks', (req, res) => {
    Projects.getAllTasks()
        .then(tasks => {
            let arr = [];
            tasks.map(task => {
                if (task.completed === 0 || task.completed === null){
                    return arr.push({...task, completed: false})
                } else {
                    return arr.push({...task, completed: true})
                }
            })
            res.status(200).json(arr)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'could not get all tasks'})
        })
})

module.exports = router;