class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
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