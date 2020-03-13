const express = require('express');

const actionRouter = require('./actions/actionRouter');
const projectRouter = require('./projects/projectRouter');

const server = express();

server.use(express.json());
server.use('/api/actions', logger, actionRouter);
server.use('/api/projects', logger, projectRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's goooooo!</h2>`);
});

// custom middleware

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now());
  next();
};

module.exports = server;