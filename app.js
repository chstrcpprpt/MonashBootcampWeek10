const inquirer = require("inquirer");

let teamArray = [];
let teamSize;

async function promptUser() {
  const response = await inquirer.prompt([{
    type: "input",
    name: "teamSize",
    message: "Please input your team size",
  }]);
  teamSize = response.teamSize;
  console.log(teamSize);
};
  
async function teamDetails() {
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
    teamArray.push(response);
  };
  console.log(teamArray);
};

async function runAll() {
  await promptUser();
  await teamDetails();
};

runAll();