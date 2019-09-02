const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.route('/')
    .get((req, res) => {
        Todo.findAll()
        .then(todos => {
            // console.log(todos);
            res.send(todos);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    })
    .post((req, res) => {
        Todo.create({
            title: req.body.title,
            description: req.body.description
        }).then((todo) => {
            res.send(todo);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    });

router.route('/:id')
    .put((req, res) => {

    })
    
module.exports = router;