class Employee {
  constructor(name, id, email, title) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getRole() {
    return this.constructor.name;
  }
  getEmail() {
    return this.email;
  }
  
}

module.exports = Employee;