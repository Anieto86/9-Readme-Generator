let inquirer = require('inquirer')
let fs = require("fs");

//Prompt for user input

const questions = inquirer.prompt([
    {
        type: "input",
        name: "Project title",
        message: "Project title",
        default: "NodeJS Readme-Generator"
    },
    {
        type: "input",
        name: "Description",
        message: "Description",
        default: "NodeJS prompt input"

    },
    {
        type: "rawlist",
        name: "Contributing",
        message: "How is the best Contributing?",
        choices: ["Alvaro 99.7%", "Trent 0.1%", "Josh 0,1%", "G 0,1%"],
    },
    {
        type: "input",
        name: "Test",
        message: "Node Test",
        default: "Node.JS is running"
    },
    {
        type: "input",
        name: "License",
        message: "Open source license",
        default: "YES",
        
    },
    {
        type: "input",
        name: "GitHub",
        message: "User GitHub email",

    },

    //README Templated

]).then(function(data) {
    fs.writeFile("README.md", JSON.stringify(data, null, '\t'), function(err) {

        if (err) {
            return console.log(err);
        }
    
        console.log("Success!");
    });
    });

