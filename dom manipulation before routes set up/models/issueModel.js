const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const issuesSchema = Schema({
  name: { type: String, required: true },
  issue: { type: String, required: true },
  department: { type: String, required: true },
  date: { type: String, required: true }
});

const Issue = mongoose.model('Issue', issuesSchema);

module.exports = Issue;
