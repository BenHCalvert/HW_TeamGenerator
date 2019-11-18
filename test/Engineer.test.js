const Engineer = require("../lib/Engineer");

describe("test getGitHub()", () => {
	it("should return github username", () => {
 	const testUser = "githubUN";
    const engineer = new Engineer(10, 'empye', 'McCo', 'jobTitle','ben@ben.com','18008888', testUser);
    
    expect(engineer.getGitHub()).toBe(testUser);
    
	});
});