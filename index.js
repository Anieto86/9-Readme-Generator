let inquirer = require('inquirer')
let fs = require("fs");
//const util = require("util");

//const appendFileAsync = util.promisify(fs.appendFile);

//Prompt for user input

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Project title",
            message: "Project title :",

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
        {
            type: "input",
            name: "email",
            message: "Email address : ",
            validate: function (values) {
                let pass = values.match(
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
                if (pass) {
                    return true;
                } return "Please enter a valid email"
            }
        }
    ]);
}

//README Templated
let table = `
        * Title
        * Description
        * Table of Contents
        * Installation
        * Usage
        * License
        * Contributing
        * Tests
        * Questions`;


        
promptUser()
    .then(function (data) {
        fs.writeFile("READMEal.md", JSON.stringify(data, null, '\t'), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success");
        });
    })
    .then(function () {
        fs.appendFile("READMEal.md", table, function (err) {
            if (err) throw err;
            console.log("Saved!");
          });
    });