const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
inquirer.prompt ([
        {
        type: "input", 
        message: "What is your name?",
        name: "name"
        },
        {
        type: "input",
        message: "What is your role?",
        name: "role"
        },
        {
        type: "input",
        message: "What is your email?",
        name: "email"
        },
        {
        type: "input",
        message: "What is your id?",
        name: "id"
        },
        {
        type: "input",
        message: "Are you an intern?",
        name: "intern"
        },
        {
        type: "input",
        message: "What university did you attend?",
        name: "university"
        },
        {
        type: "input",
        message: "What is your Github username?",
        name: "github"
        },
        {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
        }
    ])

    .then(function(response) {
        console.log(response)
        console.log(response.name)
        const employeeArray = []
        if(response.role==="manager"){
            const newManager = new Manager(response.name, response.id, response.email, response.officeNumber)
            employeeArray.push(newManager)
        }
        fs.writeFile(outputPath, render(employeeArray),() =>console.log("success"))
        if(response.role==="engineer"){
            const newEngineer = new Engineer(response.name, response.id, response.email, response.github)
            employeeArray.push(newEngineer)
        }
        fs.writeFile(outputPath, render(employeeArray),() =>console.log("success"))
        if(response.role==="intern"){
            const newIntern = new Intern(response.name, response.id, response.email, response.university)
            employeeArray.push(newIntern)
        }
        fs.writeFile(outputPath, render(employeeArray),() =>console.log("success"))
 
    }).catch(function(err) {
    console.log(err)})   