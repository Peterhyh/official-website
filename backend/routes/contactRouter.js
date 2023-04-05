const express = require('express');
const contactRouter = express.Router();
// const Contact = require('../models/contact');
const cors = require('../routes/cors');

contactRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get((req, res, next) => {
        res.statusCode = 200;
        res.end('Response: GET');
        console.log('---LOG: Response: GET');
    })

    .post(cors.corsWithOptions, (req, res, next) => {
        const data = {
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
            info: "was sent to peterhyh@yahoo.com",
        };
        console.log(data);
        res.send(data);
    })

    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 200;
        res.end('Response: PUT');
        console.log('---LOG: Response: PUT');
    })

    .delete(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 200;
        res.end('Response: DELETE');
        console.log('---LOG: Response: DELETE');
    })

module.exports = contactRouter;