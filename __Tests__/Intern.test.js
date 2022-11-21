const Intern = require('../lib/Intern'); // Requiring the Intern class we created in the lib folder and assigning it to the constant Manager so it can be used in this file for all the tests.

test("Can be instantiated.", () => { // Creating the first to verify that the new Intern() can be instantiated and used as an object. It passes.
    const employee = new Intern()
    expect(typeof(employee)).toBe("object")
});

test("Can set the name from the constructor.", () => { // 2nd test that tests if we can call the name parameter from the original Intern class within Intern.js. It passes.
    const name = "Roldan"
    const employee = new Intern(name)

    expect(employee.name).toBe(name)
});

test('Can set the id from the constructor', () => { // 3rd test that checks if we can call the id parameter from the Intern class. 
    const value = 42
    const employee = new Intern('Foo', value)

    expect(employee.id).toBe(value)
});

test('Can set the email from the constructor', () => { // 4th test checking if we can call the email parameter from the Intern class.
    const email = 'example@mail.com'
    const employee = new Intern('Foo', 5, email)

    expect(employee.email).toBe(email)
});

test('Can we get name from getName()', () => { // 5th test that checks if we can use the getName function to receive the name parameter from the Manager class. This test passes.
    const username = 'Robert'
    const employee = new Intern(username)

    expect(employee.getName()).toBe(username)
});

test('Can we get ID from getId()', () => { // 6th test that checks if we can use getId() to receive the id parameter from the Intern class. This passes.
    const number = '44'
    const employee = new Intern('Foo', number)

    expect(employee.getId()).toBe(number)
});

test('Can we get email from getEmail()', () => { // 7th test for using getEmail() to receive the email parameter from the Intern class. This passes.
    const gmail = 'email@gmail.com'
    const employee = new Intern('Foo', 1, gmail)

    expect(employee.getEmail()).toBe(gmail)
});

test('Can we get school from getSchool()', () => { // 8th test for using getSchool() to receive the school parameter from the Intern class. This one is specific to this class and passes.
    const school = 'Foo University'
    const employee = new Intern('Foo', 1, 'email@mail.com', school)

    expect(employee.getSchool()).toBe(school)
});

test('Can we get role from getRole()', () => { // 9th test for using getRole() which will be hardcoded to return 'Intern'. This test passes.
    const role = 'Intern'
    const employee = new Intern(role)

    expect(employee.getRole()).toBe(role)
});