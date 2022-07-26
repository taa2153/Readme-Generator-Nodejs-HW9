
// Packages needed for this application
var fs = require("fs");
var inquirer = require("inquirer");
var generate = require("./generate");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "repo title:",
  },
  {
    type: "input",
    name: "shortdescription",
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
    name: "githublink",
    message: "Github profile link:",
  },
{
  type: "input",
  name: "email",
  message: " email address: "
},
  
  {
    type: "list",
    name: "license",
    message: "Choose license:",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "None"],
  },
  {
    type: "input",
    name: "tests3",
    message: "required tests:",
  },

  {
    type: "input",
    name: "tests2",
    message: "required tests:",
  },

  {
    type: "input",
    name: "tests1",
    message: "required tests:",
  },

  {
    type: "input",
    name: "description",
    message: "describe the project:",
  },

  {
    type: "input",
    name: "userstory",
    message: " user story",
  },

  {
    type: "input",
    name: "criteria",
    message: " criteria",
  },

  {
    type: "input",
    name: "livelink",
    message: "project live link:",
  },

  {
    type: "input",
    name: "contributors",
    message: "project contributors:",
  },
];


// Function to initialize app
inquirer.prompt(questions).then(function(response) {
    console.log(response);
    
     var content = generate (response);
     console.log(content);
      fs.writeFile("./ReadMe.md", content, function(err){
          if (err) throw err
          console.log("success");
      });
 } );

