class Employee { // Creating a new parent class of Employee in which I created a constructor to which I passed the name, id, and email parameters.
    constructor(name, id, email) {
        this.name = name; // applying the appropriate parameter to their respective properties. Done for lines 3-5. This could be explained better, but I understand what's happening and can't put it to words exactly.
        this.id = id;
        this.email = email;
    }
    getName() { // Within the Employee class, I'm creating functions for calling the name constant which refers to the parameters specified in the original constructor method. This one is for name.
        return this.name 
    }
    getId() { // This one is for the id # that will be assigned to the Employee
        return this.id
    }
    getEmail() { // This one is for the email address that will be attached to the Employee
        return this.email
    }
    getRole() { // This one is for overriding a potential input by hardcoding the role attached to read simply 'Employee'. This will change for the other classes.
        return 'Employee'
    }
}

module.exports = Employee; // Crucial step here. We have to export this so it's able to be accessed by other files within our app.