const Employee = require("../lib/Employee");

class Manager extends Employee {
	constructor(employeeId, firstName, lastName, title, email, officeNumber, team) {
		super(employeeId, firstName, lastName, title, email, officeNumber);
		this.role = 'Manager';
		this.team = team;
	}
	getRoll(){
		return this.role;
	}

	getTeam(){
		return this.team;
	}
}

module.exports = Manager;