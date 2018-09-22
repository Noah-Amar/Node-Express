const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const actionDb = require('./data/helpers/actionModel');
const projectDb = require('./data/helpers/projectModel');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send("Hello World");
});

server.get('/actions', (req, res) => {
    actionDb.get()
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

server.get('/actions/:id', (req, res) => {
    const {id} = req.params;
    actionDb.get(id)
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.post('/actions', (req, res) => {
    const body = req.body;
    actionDb.insert(body)
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.put('/actions/:id', (req,res)=> {
    const {id} = req.params;
    const body = req.body;
    actionDb.update(id, body)
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.delete('/actions/:id', (req,res) => {
    const {id} = req.params;
    actionDb.remove(id)
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

//projects
server.get('/projects', (req, res) => {
    projectDb.get()
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

server.get('/projects/:id', (req, res) => {
    const {id} = req.params;
    projectDb.get(id)
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.post('/projects', (req, res) => {
    const body = req.body;
    projectDb.insert(body)
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.put('/projects/:id', (req,res)=> {
    const {id} = req.params;
    const body = req.body;
    projectDb.update(id, body)
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.delete('/projects/:id', (req,res) => {
    const {id} = req.params;
    projectDb.remove(id)
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.get('/projects/:id/actions', (req, res) => {
    const {id} = req.params;
    projectDb.getProjectActions(id)
    .then(a => {
        res.status(200).json(a);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


const port = process.env.PORT || 5000;
server.listen(5000, () => console.log(`API running on port ${port}`));

