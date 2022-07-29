const Employee = require("../lib/Employee");

test("creates a Employee object", () => {
  const employee = new Employee("Ryan", "3", "ryan@example.com");

  expect(employee.name).toBe("Ryan");
  expect(employee.id).toBe("3");
  expect(employee.email).toBe("ryan@example.com");
});

test("gets employee's name", () => {
  const employee = new Employee("Ryan", "3", "ryan@example.com");

  expect(employee.getName()).toBe("Ryan");
});

test("gets employee's ID", () => {
  const employee = new Employee("Ryan", "3", "ryan@example.com");

  expect(employee.getId()).toBe("3");
});

test("gets employee's email address", () => {
  const employee = new Employee("Ryan", "3", "ryan@example.com");

  expect(employee.getEmail()).toBe("ryan@example.com");
});

test("gets employee's role", () => {
  const employee = new Employee("Ryan", "3", "ryan@example.com");

  expect(employee.getRole()).toBe("Employee");
});
