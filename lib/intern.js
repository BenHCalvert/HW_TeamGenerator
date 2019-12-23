const Employee = require("../lib/Employee");

class Intern extends Employee {
	constructor(employeeId, firstName, lastName, title, email, officeNumber, school) {
		super(employeeId, firstName, lastName, title, email, officeNumber);
		this.role = 'Intern';
		this.school = school;
	}
	getRoll(){
		return this.role;
	}
	getSchool(){
		return this.school;
	}

}

module.exports = Intern;