const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer')
const path = require("path");
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
        message: "Please include any installation commands or instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this repository?"
    },
    {
        type: "list",
        name: "contributing",
        message: "Include standard contribution guidelines?",
        choices: ["Yes", "No"]
    },
    {
        type: "input",
        name: "tests",
        message: "Include any test commands or instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "Which of the following licenses should be included?",
        choices: ["MIT", "None"]
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
}

// function to initialize program
function init() {

}

// function call to initialize program
init();