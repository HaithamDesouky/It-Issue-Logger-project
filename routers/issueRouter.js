const express = require('express');
const Router = express.Router;
const Issue = require('../models/issue-model');
const issueRouter = new Router();

issueRouter.post('/', (req, res) => {
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

issueRouter.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;

  Issue.findById(id)
    .then(data => {
      res.render('edit', { data });
    })
    .catch(error => {
      next(error);
    });
});

issueRouter.post('/:id', (req, res) => {
  const id = req.params.id;
  Issue.findByIdAndDelete(id)
    .then(data => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});

issueRouter.get('/:id', (req, res, next) => {
  const id = req.params.id;

  Issue.findById(id)
    .then(data => {
      res.render('single', { data });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = issueRouter;
