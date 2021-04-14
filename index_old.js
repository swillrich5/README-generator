const inquirer = require('inquirer');   // inquirer module
const fs = require('fs');               // fs (file system) module





// first step in creating the README - creating the title
let generateTitle = title => {
    let formattedTitle = `# ${title}`;
    fs.writeFile('./README.md', formattedTitle, (err) => {
        if (err) throw err;
     })
}


let appendToFile = stringToAppend => {
    fs.appendFile('./README.md', stringToAppend, (err) => {
        if (err) throw err;
    })
}


// append the description of the project to the README
// use the reusable 'appendToFile()' function to actually
// write the descritption to the file
let appendDescription = description => {
    let formattedDescription = `\n# Description\n ${description}\n`;
    appendToFile(formattedDescription);
}



// this function (arrow style!) gets the ball rolling on creating the README
// it takes the answers from the inquirer block and calls functions for each section
let generateREADME = answers => {
    generateTitle(answers.projectName);
    appendDescription(answers.projectDescription);
    

}


inquirer
  .prompt([
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
        message: 'Please write a short description of you project:',
        name: 'projectDescription',
      },
    {
        // trying a checkbox for this.  a list or rawlist might be better?
    type: 'checkbox',
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
        name: 'dependencyCommands',
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
        name: 'needToKnow',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributingToRepo',
      },
  ])
  .then((answers) => {
    console.log("Generating README...")
    console.log(answers);
    generateREADME(answers);
});


// console.log(`Is this working? ${JSON.stringify(answers, null, " ")}`)});

// fs.writeFile('README.md', 
// `<h1>${answers.name}</h1>\n
// <p>Location: ${answers.location}</p>\n
// <p>Bio: ${answers.bio} </p>\n`, (err) => console.error(err));