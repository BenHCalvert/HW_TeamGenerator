const Employee = require("../lib/Employee");

class Engineer extends Employee {
	constructor(employeeId, firstName, lastName, title, email, officeNumber, github) {
		super(employeeId, firstName, lastName, title, email, officeNumber);
		this.role = 'Engineer';
		this.github = github;
	}
	getRoll(){
		return this.role;
	}
	getGitHub(){
		return this.github;
	}

}

module.exports = Engineer;