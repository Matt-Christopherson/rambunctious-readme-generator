// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List collaborators, their GitHub profiles, links to used tutorials, and links to third-party assets used:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you be using?',
        choices: ['MIT', 'gpl-3.0', 'apache-2.0', 'cc-by-4.0', 'bsd-2-clause', 'mpl-2.0', 'none']
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here:'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'If you would like other developers to contriute, list some guidelines for how to do so:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you would like, write some tests for your application:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        responseTitle = (responses.title).replace(/\s+/g, '');
        writeToFile('./generatedREADMEs/' + responseTitle, generateMarkdown({...responses}));
    });
}
// Function call to initialize app
init();
