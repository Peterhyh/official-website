const express = require('express');
const contactRouter = express.Router();
const Contact = require('../models/contact');
const cors = require('../routes/cors');

contactRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get((req, res, next) => {
        Contact.find()
            .then(contacts => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(contacts);
            })
            .catch(err => next(err));
    })

    .post(cors.corsWithOptions, (req, res, next) => {
        Contact.create(req.body)
            .then(contact => {
                console.log(contact);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(contact);
            })
            .catch(err => next(err));
    })

    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 200;
        res.end('Response: PUT');
        console.log('---LOG: Response: PUT');
    })

    .delete(cors.corsWithOptions, (req, res, next) => {
        Contact.deleteMany()
            .then(response => {
                console.log('---LOG: ', response);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    })

module.exports = contactRouter;