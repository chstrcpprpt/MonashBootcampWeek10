const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(name, email, gitHub) {
    super(name, email);
    this.gitHub = gitHub;
  }

  getGitHub() {
    return this.gitHub;
  }
  
}

module.exports = Engineer;