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