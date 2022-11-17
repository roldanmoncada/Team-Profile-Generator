
const Employee = require("../lib/Employee");

test("Can be instantiated.", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})

test("Can set the name from the constructor.", () => {
    const name = "Roldan"
    const employee = new Employee(name)

    expect(employee.name).toBe(name)
})

test('Can set the id from the constructor', () => {
    const value = 42
    const employee = new Employee('', value)

    expect(employee.id).toBe(value)
})

test('Can set the email from the constructor', () => {
    const email = 'email@gmail.com'
    const employee = new Employee('', 5, email)

    expect(employee.email).toBe(email)
})

test('Can we get name from getName()', () => {
    const username = 'Robert'
    const employee = new Employee(username)

    expect(employee.getName()).toBe(username)
})