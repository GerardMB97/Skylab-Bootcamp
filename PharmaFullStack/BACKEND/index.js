const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const { connect } = require('mongoose');

const pharmaRouter = require('./src/router/pharmaRouter');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/promoPharma', pharmaRouter);

connect('mongodb+srv://admin:admin@cluster0.vkgcb.mongodb.net/pharmaDB', { useUnifiedTopology: true, useNewUrlParser: true });

app.listen(port, () => debug(`Server running in port ${chalk.blue(`${port}`)}`));
