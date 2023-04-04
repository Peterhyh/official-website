require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database...'))


app.use(cors());
app.use(express.json());


const contactRouter = require('./routers/contactRouter');
app.use('/contact', contactRouter);


app.listen(3001, 'localhost', () => console.log('Server is running...'));