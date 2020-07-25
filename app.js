// Issue Constructor
class Issue {
  constructor(name, issue, department) {
    this.name = name;
    this.issue = issue;
    this.department = department;
  }
  addIssueToList() {
    const list = document.getElementById('issue-log');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${this.name}</td>
    <td>${this.issue}</td>
    <td>${this.department}</td>
    <td>${date.now()}</td>

    
    

    <td><a href="#" class="delete">X<a></td>
  `;
    list.appendChild(row);
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
    console.log(name, issue, department);

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
