// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = school;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return this.role;
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
