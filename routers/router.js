const express = require('express');
const Router = express.Router;
const Issue = require('../models/issue-model');
const baseRouter = new Router();

let item = '';
let issues = [];

baseRouter.get('/', (request, response, next) => {
  Issue.find()
    .then(data => {
      console.log(data);
      response.render('index', { data });
    })
    .catch(error => {
      next(error);
    });
});

baseRouter.post('/', (req, res) => {
  console.log('hello');
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const time = `${hour}:${minute}:${seconds}  ${day}/${month}`;
  // req.body.time = time;
  issueBody = req.body;
  // console.log(issues);
  // issues.unshift(issueBody);

  Issue.create({
    name: issueBody.name,
    issue: issueBody.issue,
    department: issueBody.department,
    time: time
  })
    .then(data => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = baseRouter;
