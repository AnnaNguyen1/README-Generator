// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Title of project:",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project:",
    },
    {
      type: "input",
      name: "installinstructions",
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "usage",
      message: "Usage Information:",
    },
    {
      type: "input",
      name: "contriguidelines",
      message: "Contribution Guidelines:",
    },
    {
      type: "input",
      name: "testinstructions",
      message: "What command should be run to run tests:",
    },
    {
      type: "list",
      name: "license",
      message: "Select a license for this project:",
      choices: ["Apache", "BSD", "MIT", "Mozilla", "None"],
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);
};

// Initiating function and using writeFileSync method to use promise
(() => {
  questions()
    .then((answers) => fs.writeFileSync("README.md", generateMarkdown(answers)))
    .then(() => console.log("Generating README file..."))
    .catch((err) => console.error(err));
})();
