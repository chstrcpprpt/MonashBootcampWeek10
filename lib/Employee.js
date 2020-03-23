const shortid = require('shortid');

class Employee {
  constructor(name, email) {
    this.name = name;
    this.id = shortid.generate();
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getRole() {
    return this.constructor.name;
  }
  getEmail() {
    return this.email;
  }
  
}

module.exports = Employee;