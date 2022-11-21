const Manager = require('../lib/Manager'); // Requiring the Manager class we created in the lib folder and assigning it to the constant Manager so it can be used in this file for all the tests.

test("Can be instantiated.", () => { // Creating the first to verify that the new Manager() can be instantiated and used as an object. It passes.
    const employee = new Manager()
    expect(typeof(employee)).toBe("object")
});

test("Can set the name from the constructor.", () => { // 2nd test that tests if we can call the name parameter from the original Manager class within Manager.js. It passes.
    const name = "Roldan"
    const employee = new Manager(name)

    expect(employee.name).toBe(name)
});

test('Can set the id from the constructor', () => { // 3rd test that checks if we can call the value parameter from the Manager class. 
    const value = 42
    const employee = new Manager('', value)

    expect(employee.id).toBe(value)
});

test('Can set the email from the constructor', () => { // 4th test checking if we can call the email parameter from the Manager class.
    const email = 'example@mail.com'
    const employee = new Manager('', 5, email)

    expect(employee.email).toBe(email)
});

test('Can we get name from getName()', () => { // 5th test that checks if we can use the getName function to receive the name parameter from the Manager class. This test passes.
    const username = 'Robert'
    const employee = new Manager(username)

    expect(employee.getName()).toBe(username)
});

test('Can we get ID from getId()', () => { // 6th test that checks if we can use getId() to receive the id parameter from the Manager class. This passes.
    const number = '44'
    const employee = new Manager('Foo', number)

    expect(employee.getId()).toBe(number)
});

test('Can we get email from getEmail()', () => { // 7th test for using getEmail() to receive the email parameter from the Manager class. This passes.
    const gmail = 'email@gmail.com'
    const employee = new Manager('Foo', 1, gmail)

    expect(employee.getEmail()).toBe(gmail)
});

test('Can we get the office number from getOfficeNumber()', () => { // 8th test for using getOFficeNumber()) to receive the officeNumber parameter from the Manager class. This one is specific to this class and passes.
    const officeNumber = 'foo'
    const employee = new Manager('Foo', 1, 'email@mail.com', officeNumber)

    expect(employee.getOfficeNumber()).toBe(officeNumber)
});

test('Can we get role from getRole()', () => { // 9th test for using getRole() which will be hardcoded to return 'Manager'. This test passes.
    const role = 'Manager'
    const employee = new Manager(role)

    expect(employee.getRole()).toBe(role)
});