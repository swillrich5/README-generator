const inquirer = require('inquirer');   // inquirer module
const fs = require('fs');               // fs (file system) module
// local module for generating the markdown 
const generateMarkdown = require('./utils/generateMarkdown.js');


// Array of questions for README content
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
        // list seems to work best for this question
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

// write the markdown to the README file
// kick out an error message to the console if the write fails
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else console.log(`Generating README`);
    });
}

// runs inquirer to get content for the README
// takes the answers from inquirer and sends them
// to generateMarkdown to create the markdown that
// is written to file by writeFile() to create the
// README
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            let markdown = generateMarkdown(answers)
            writeToFile('README.md', markdown)
        })
}

// README-generator kicks off here
init();
