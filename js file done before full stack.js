const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res) => {
  res.send;
});

app.listen(3000);

// Issue Constructor
class Issue {
  constructor(name, issue, department) {
    this.name = name;
    this.issue = issue;
    this.department = department;
    this.row = document.querySelector('tr');
    this.removalButton = [];
  }
  addIssueToList() {
    const list = document.getElementById('issue-log');
    const row = document.createElement('tr');
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const time = `${hour}:${minute}:${seconds}  ${day}-${month}`;

    row.innerHTML = `
    <td>${this.name}</td>
    <td>${this.issue}</td>
    <td>${this.department}</td>
    <td>${time}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

    list.appendChild(row);

    document
      .querySelectorAll('.delete')
      .forEach(f => this.removalButton.push(f));
    for (let button of this.removalButton) {
      button.addEventListener('click', this.removeIssue);
    }
  }

  showAlert(className) {
    const alert = document.getElementById(`${className}`);
    alert.style.display = 'block';

    setTimeout(() => {
      alert.style.display = 'none';
    }, 2000);
  }

  clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('issue').value = '';
    document.getElementById('department').value = '';
  }

  removeIssue() {
    this.parentNode.parentNode.remove();
  }
}

// Event Listeners
document
  .getElementById('submission-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const issue = document.getElementById('issue').value;
    const department = document.getElementById('department').value;

    // Instantiate issue
    const issueLog = new Issue(name, issue, department);

    // Validate
    if (name === '' || issue === '' || department === '') {
      // Error alert
      issueLog.showAlert('error');
    } else {
      // Add issue to list
      issueLog.addIssueToList(issue);

      // Show success
      issueLog.showAlert('success');

      // Clear fields
      issueLog.clearFields();
    }

    e.preventDefault();
  });

app.listen(3000);
