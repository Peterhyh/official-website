const express = require('express');
const Bmi = require('../model/bmi');
const cors = require('./cors');

const bmiRouter = express.Router();

bmiRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'text/plain');
        res.end('GET method not supported on /contact');

    })

    .post(cors.corsWithOptions, (req, res, next) => {
        const calculate = Math.round(((req.body.weight * 703) / Math.pow(req.body.height, 2)) * 100) / 100;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(`BMI: ${calculate}`);

    })

    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'text/plain');
        res.end('PUT method not supported on /contact');
    })

    .delete(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'text/plain');
        res.end('DELETE method not supported on /contact');
    })

module.exports = bmiRouter;