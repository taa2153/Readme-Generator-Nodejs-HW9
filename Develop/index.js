
// Packages needed for this application
var fs = require("fs");
var inquirer = require("inquirer");
var generateMarkdown = require("./generate");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "repo title:",
  },
  {
    type: "input",
    name: "short description",
    message: "give short description of your project:",
  },
  {
    type: "input",
    name: "creator",
    message: "author name:",
  },
  {
    type: "input",
    name: "github",
    message: "Github username",
  },
  {
    type: "input",
    name: "github link",
    message: "Github profile link:",
  },
{
  type: "input",
  name: "email",
  message: "What is your email address?"
},
  
  {
    type: "list",
    name: "license",
    message: "Choose license:",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "None"],
  },
  {
    type: "input",
    name: "tests",
    message: "required tests:",
  },

  {
    type: "input",
    name: "tests",
    message: "required tests:",
  },

  {
    type: "input",
    name: "tests",
    message: "required tests:",
  },

  {
    type: "input",
    name: "description",
    message: "describe the project:",
  },

  {
    type: "input",
    name: "readmeTitle",
    message: " name your readme file (excluding .md):",
  },

  {
    type: "input",
    name: "live link",
    message: "project live link:",
  },

  {
    type: "input",
    name: "contributors",
    message: "project contributors:",
  },
];

// Function to write README file
const writeToFile = (fileName, data) =>
  fs.writeFile(fileName, generate(data), (err) =>
    err
      ? console.log(err)
      : console.log("success!")
  );

// Function to initialize app
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(`${answers.readmeTitle}.md`, answers);
  });
};

// Function call to initialize app
init();