const Intern = require("../lib/Intern");

describe('Intern Class', () => {
    it('should return role', () => {
        let intern = new Intern (666, 'ben', 'McCo', 'Intern', 'ben@ben.com', '18008888');

        expect(intern.getroll()).toBe('Intern');
    });
});
