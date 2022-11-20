
const Employee = require("../lib/Employee"); // Requiring the Employee class we created in the lib folder and assigning it to the constant Employee so it can be used in this file for all the test.

test("Can be instantiated.", () => { // Creating the first test that verifies that it the Employee constant we created with the Employee class delineated in Employee.js can be instantiated and used as an object. It passes.
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
});

test("Can set the name from the constructor.", () => { // 2nd test that tests if we can call the name parameter from the original Employee class within Employee.js. It passes.
    const name = "Roldan"
    const employee = new Employee(name)

    expect(employee.name).toBe(name)
});

test('Can set the id from the constructor', () => { // 3rd test that checks if we can call the value parameter from the original Employee class. I found that in order for this to work that we needed to include an empty string before then also asking for the value when we created the const of employee on line 18. The pattern continues in the next test as well. This one also passes.
    const value = 42
    const employee = new Employee('', value)

    expect(employee.id).toBe(value)
});

test('Can set the email from the constructor', () => { // 4th test checking if we can call the email parameter form the original Employee class. In line 25, you can see that I needed to pass an empty string for the name, some id number, and then the email as arguments in order for this to work properly. This test passes. 
    const email = 'email@gmail.com'
    const employee = new Employee('', 5, email)

    expect(employee.email).toBe(email)
});

test('Can we get name from getName()', () => { // 5th test that checks if we can use the getName function to receive the name parameter from the original Employee class. This test passes.
    const username = 'Robert'
    const employee = new Employee(username)

    expect(employee.getName()).toBe(username)
});

test('Can we get ID from getId()', () => { // 6th test that checks if we can use getId() to receive the name parameter from the original Employee class. This is now passing. It wasn't earlier because I didn't correctly pass in the necessary parameters to the new Employee constant.
    const number = '44'
    const employee = new Employee('Foo', number)

    expect(employee.getId()).toBe(number)
});

test('Can we get email from getEmail()', () => { // 7th test for using getEmail() to receive the name parameter from the original Employee class. This passes.
    const gmail = 'email@gmail.com'
    const employee = new Employee('Foo', 1, gmail)

    expect(employee.getEmail()).toBe(gmail)
});

test('Can we get role from getRole()', () => { // 8th test for using getRole() which will b
    const role = 'Employee'
    const employee = new Employee('', 6, role)

    expect(employee.getEmail()).toBe(role)
});