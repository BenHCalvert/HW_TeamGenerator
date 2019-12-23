// Set Variables
let managerArray = [];
let engineerArray = [];
let internArray = [];
let employeeId = 10;

// Node modules
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);
const inquirer = require("inquirer")

// subclasses
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// generate HTML CSS
const generateHTML = require("./templates/generateHTML");
const generateCSS = require("./templates/generateCSS");


// Prompts user for employee questions
function getEmployee () {
	return inquirer.prompt([
		{
			type: "list",
			name: "title",
			message: "What is your role",
			choices: ["Manager", "Engineer", "Intern"],
    },
    {
			name: "team",
			type: "list",
			message: "What team do you manage",
			choices: ["Engineering", "Interns"],
			when: function ( answers ){
				return answers.title === "Manager";
			}
    },
    {
			type: "input",
			name: "firstName",
			message: "What is your first name?"
    },
    {
			type: "input",
			name: "lastName",
			message: "What is your last name?"
    },
    {
			type: "input",
			name: "email",
			message: "What is your email address?"
    },
    {
			type: "input",
			name: "officeNumber",
			message: "What is your office number?"
    },
    {
			name: "school",
			type: "input",
			message: "What school do you attend?",
			when: function ( answers ){
				return answers.title === "Intern";
			}
    },
    {
			name: "github",
			type: "input",
			message: "What is your github username?",
			when: function ( answers ){
				return answers.title === "Engineer";
			}
		}
	]);
}

// Initial function to grab all the answers and invoke methods to build html
async function init() {

	// Set employee variables and run getEmployee function to prompt for employee information
	employeeId += 1;
	const employee = await getEmployee();
	const firstName = employee.firstName;
	const title = employee.title;
	const lastName = employee.lastName;
	const email = employee.email;
	const number = employee.officeNumber;
	const github = employee.github;
	const school = employee.school;
	const team = employee.team;

	// Switch to determine which employee class Constructor to use
	switch (title) {

		case 'Manager':
			let manager = new Manager(employeeId, firstName, lastName, title, email, number, team);
			managerArray.push(manager);
		break;

		case 'Engineer':
			let engineer = new Engineer(employeeId, firstName, lastName, title, email, number, github);
			engineerArray.push(engineer);
		break;

		case 'Intern':
			let intern = new Intern(employeeId, firstName, lastName, title, email, number, school);
			internArray.push(intern);
		break;

		default:
			return;
	}

	// run again to add more employees
	begin();

	// write HTML
	const html = generateHTML(managerArray, engineerArray, internArray);
	const css = generateCSS();
	await writeFileAsync("assets/css/style.css", css);
	await writeFileAsync("output/org.html", html);

}

// prompt the user to continue
async function go() {

	return inquirer.prompt(
		{
			type: "list",
			name: "more",
			message: "Do you want to add more employees to the team?",
			choices: ["no", "yes"]
		});
}

// This allows the user to select yes or no to continue to add employees
async function begin() {

	const begin = await go();
	if(begin.more === 'yes'){
		await init();
	}
	return;

}

// Start the application
begin();