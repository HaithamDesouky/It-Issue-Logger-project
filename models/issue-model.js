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
    required: true
  },
  department: {
    type: String,
    enum: [
      'IT Support',
      'Sales',
      'Human Resources',
      'Customer Support',
      'Management',
      'Development'
    ],
    default: 'Not specified'
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
