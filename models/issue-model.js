const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true
  },
  issue: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true
  },
  department: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true
  },
  time: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true
  }
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
