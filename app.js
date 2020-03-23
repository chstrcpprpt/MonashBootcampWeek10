const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let teamArray = [];
let teamSize;

async function promptUser() {
  const response = await inquirer.prompt([{
    type: "input",
    name: "teamSize",
    message: "Please input your team size",
  }]);
  teamSize = response.teamSize;
  // console.log(teamSize);

  for(let i = 0; i < teamSize; ++i) {
    const response = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your name"
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email"
      },
      {
        type: "list",
        name: "role",
        message: "Please enter your role",
        choices: [
          "Manager",
          "Engineer",
          "Intern"
        ]
      },
      {
        type: "input",
        name: "gitHub",
        message: "Please enter your gitHub",
        when: (response) => response.role === "Engineer"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter your officeNumber",
        when: (response) => response.role === "Manager"
      },
      {
        type: "input",
        name: "school",
        message: "Please enter your school",
        when: (response) => response.role === "Intern"
      }
    ]);

    const {
      name,
      email,
      role,
      gitHub,
      officeNumber,
      school
    } = response;

    if (role === "Engineer") {
      teamArray.push(new Engineer(name, email, gitHub));
    } else if (role === "Intern") {
      teamArray.push(new Intern(name, email, school));
    } else if (role === "Manager") {
      teamArray.push(new Manager(name, email, officeNumber));
    };

    console.log(teamArray);

  };

};

promptUser();
