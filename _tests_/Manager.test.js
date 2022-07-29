const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager("Ryan", "1", "ryan@example.com", "2");

  expect(manager.name).toBe("Ryan");
  expect(manager.id).toBe("1");
  expect(manager.email).toBe("ryan@example.com");
  expect(manager.officeNumber).toBe("2");
});

test("gets role of the manager", () => {
  const manager = new Manager("Ryan", "1", "ryan@example.com", "2");

  expect(manager.getRole()).toBe("Manager");
});
