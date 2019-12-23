class Employee {
    constructor (employeeId, firstName, lastName, title, email, officeNumber) {
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.title = title;
		this.email = email;
		this.officeNumber = officeNumber;
    }
    
    getOfficeNumber(){
		return this.officeNumber;
    }
    
	getId(){
		return this.employeeId;
    }
    
    getEmail(){
		return this.email;
	}

	getTitle(){
		return this.title;
	}
}

module.exports = Employee;