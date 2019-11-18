const Manager = require("../lib/Manager");

describe('Manager Class', () => {
    it('should return role', () => {
        let intern = new Intern (666, 'ben', 'McCo', 'Manager', 'ben@ben.com', '18008888');

        expect(intern.getroll()).toBe('Manager');
    });
});