// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
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
        choices: ['MIT', 'GPL-license', 'LGPL-license', 'MPL-2.0', 'BSD-3-Clause', 'CDDL-1.0', 'EPL-2.0', 'None']
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your Markdown file has been created.')
    });
}


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", generateMarkdown(answers)
        );
      });
    }



// Function call to initialize app
init();
