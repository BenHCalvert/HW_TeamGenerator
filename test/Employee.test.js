const Employee = require("../lib/Employee");

describe("Employee class", () => {
	describe("getId method", () => {
		it("should return employeeId", () => {
			let empye = new Employee(666, 'empye', 'McCo', 'jobTitle','ben@ben.com','18008888');
			expect(empye.getId()).toBe(666);
		});

		it("should return title", () => {
			let empye = new Employee(666, 'empye', 'McCo', 'jobTitle','ben@ben.com', '18008888');
			expect(empye.getTitle()).toBe('jobTitle');
		});

		it("should return email", () => {
			let empye = new Employee(666, 'empye', 'McCo', 'jobTitle', 'ben@ben.com','18008888');
			expect(empye.getEmail()).toBe('ben@ben.com');
		});

	});
});