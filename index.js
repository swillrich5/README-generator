// TODO: Include packages needed for this application
const inquirer = require('inquirer');   // inquirer module
const fs = require('fs');               // fs (file system) module
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'gitHubUsername',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'emailAddress',
    },
    {
      type: 'input',
      message: 'What is your project\'s name?',
      name: 'projectName',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'projectDescription',
      },
    {
        // trying a checkbox for this.  a list or rawlist might be better?
    type: 'list',
    name: 'licenseType',
    message: 'What license type should your project have? (use arrow keys and space bar to select)',
    choices: ['none', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 
            'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 
            'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 
            'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 
            'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        message: 'What technology was used to create the project?',
        name: 'technology used',
      },
    {
        type: 'input',
        message: 'What command(s) should be run to install dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
        default: 'none',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributingToRepo',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log('Generating README...');
            console.log(answers);
            // let markdown = generateMarkdown(JSON.stringify(answers, null, '\t'));
            let markdown = generateMarkdown(answers);

            writeToFile('README.md', markdown);
        });
}

// Function call to initialize app
init();
