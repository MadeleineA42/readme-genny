// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your ReadMe?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of your ReadMe?',
    },
    {
        type: 'input',
        name: 'License',
        message: 'What license would you like to use?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'Name',
        message: 'Enter your full name',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email',
    },
    {
        type: 'input',
        name: 'Require',
        message: 'List any dependencies used',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List any additional contributors',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) =>    {
        console.log('ReadMe.md generated')
        writeToFile("./utils/generateMarkdown.md", generateMarkdown({...responses }));
    });
}

// Function call to initialize app
init();