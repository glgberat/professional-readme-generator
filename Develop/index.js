// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your project's title?"
      },

      {
        type: 'input',
        name: 'description',
        message: "Write a description for your project!",
      },
      {
        type: 'input',
        name: 'installation',
        message:
          "What are the installation instructions for your project?",
      },

      {
        type: 'input',
        name: 'usage',
        message:
          'Please enter usage information of your project',
      },

      {
        type: 'input',
        name: 'contribution',
        message:
          'What are the contribution guidelines? ',
      },

      {
        type: 'input',
        name: 'test',
        message:
          'What are the test instrcutions? ',
      },

      {
        type: 'checkbox',
        name: 'license',
        message: 'Do you you have any license for your project?',
        choices: ['MIT license', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'Mozilla Public License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'Common Development and Distribution License', 'Eclipse Public License version 2.0', 'None']
      },

      {
        type: 'input',
        name: 'gitHub',
        message: "What's your GitHub username?",
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors of this project?',
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
