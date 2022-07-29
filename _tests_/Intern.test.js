const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern(
    "Bill",
    "5",
    "bill@example.com",
    "University of Toronto"
  );

  expect(intern.name).toBe("Bill");
  expect(intern.id).toBe("5");
  expect(intern.email).toBe("bill@example.com");
  expect(intern.school).toBe("University of Toronto");
});

test("gets intern's school", () => {
  const intern = new Intern(
    "Bill",
    "5",
    "bill@example.com",
    "University of Toronto"
  );

  expect(intern.getSchool()).toBe("University of Toronto");
});

test("get role of the intern", () => {
  const intern = new Intern(
    "Bill",
    "5",
    "bill@example.com",
    "University of Toronto"
  );

  expect(intern.getRole()).toBe("Intern");
});
