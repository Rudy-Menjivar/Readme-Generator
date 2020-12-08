const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer')
const fs = require('fs')

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please include any installation commands or instructions.",
        default: "npm init -y"
    },
    {
        type: "input",
        name: "usage",
        message: "What commands do you use for this repository?",
        default: "node index.js"
    },
    {
        type: "list",
        name: "contributing",
        message: "Include standard contribution guidelines?",
        choices: ["Yes", "No"],
        default: "Yes"
    },
    {
        type: "input",
        name: "tests",
        message: "Include any test commands?",
        default: "npm run jest"
    },
    {
        type: "list",
        name: "license",
        message: "Which of the following licenses should be included?",
        choices: ["MIT", "None"],
        default: "MIT"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Successful!")            
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// function call to initialize program
init();