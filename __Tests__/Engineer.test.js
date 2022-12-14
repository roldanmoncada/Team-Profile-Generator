
const Engineer = require('../lib/Engineer'); // Requiring the Engineer class we created in the lib folder and assigning it to the constant Engineer so it can be used in this file for all the tests.

test("Can be instantiated.", () => { // Creating the first test that verifies that it the Employee constant we created with the Engineer class delineated in Engineer.js can be instantiated and used as an object. It passes.
    const employee = new Engineer()
    expect(typeof(employee)).toBe("object")
});

test("Can set the name from the constructor.", () => { // 2nd test that tests if we can call the name parameter from the original Engineer class within Engineer.js. It passes.
    const name = "Roldan"
    const employee = new Engineer(name)

    expect(employee.name).toBe(name)
});

test('Can set the id from the constructor', () => { // 3rd test that checks if we can call the value parameter from the original Employee class. I found that in order for this to work that we needed to include an empty string before then also asking for the value when we created the const of employee on line 18. The pattern continues in the next test as well. This one also passes. ****If you couldn't tell already, I have copied and pasted the other tests and changed the employee constant to contain the Engineer class. Only changes will be that and the new tests for the Engineer specific attributes.*****
    const value = 42
    const employee = new Engineer('', value)

    expect(employee.id).toBe(value)
});

test('Can set the email from the constructor', () => { // 4th test checking if we can call the email parameter form the original Employee class. In line 25, you can see that I needed to pass an empty string for the name, some id number, and then the email as arguments in order for this to work properly. This test passes. 
    const email = 'email@gmail.com'
    const employee = new Engineer('', 5, email)

    expect(employee.email).toBe(email)
});

test('Can we get name from getName()', () => { // 5th test that checks if we can use the getName function to receive the name parameter from the Engineer class. This test passes.
    const username = 'Robert'
    const employee = new Engineer(username)

    expect(employee.getName()).toBe(username)
});

test('Can we get ID from getId()', () => { // 6th test that checks if we can use getId() to receive the name parameter from the original Engineer class. This passes.
    const number = '44'
    const employee = new Engineer('Foo', number)

    expect(employee.getId()).toBe(number)
});

test('Can we get email from getEmail()', () => { // 7th test for using getEmail() to receive the name parameter from the original Engineer class. This passes.
    const gmail = 'email@gmail.com'
    const employee = new Engineer('Foo', 1, gmail)

    expect(employee.getEmail()).toBe(gmail)
});

test('Can we get github from getGithub()', () => { // 8th test for using getGitHub() to receive the GitHub parameter from the original Engineer class. This one is specific to this class and passes.
    const github = 'foo'
    const employee = new Engineer('Foo', 1, 'email@mail.com', github)

    expect(employee.getGitHub()).toBe(github)
});

test('Can we get role from getRole()', () => { // 9th test for using getRole() which will be hardcoded to return 'Engineer'. This test passes.
    const role = 'Engineer'
    const employee = new Engineer(role)

    expect(employee.getRole()).toBe(role)
});