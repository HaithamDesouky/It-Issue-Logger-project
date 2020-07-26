const express = require('express');
const Issue = require('../models/issueModel');
const issueRouter = new express.Router();

issueRouter.get('/', (request, response, next) => {
  console.log('connected');
  Issue.find()
    .then(data => {
      response.render('../views/index.hbs', { data });
    })
    .catch(error => {
      next(error);
    });
});

issueRouter.get('/');
module.exports = issueRouter;
