const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer("Tim", "2", "tim@example.com", "timRepo");

  expect(engineer.name).toBe("Tim");
  expect(engineer.id).toBe("2");
  expect(engineer.email).toBe("tim@example.com");
  expect(engineer.github).toBe("timRepo");
});

test("gets Engineer's github username", () => {
  const engineer = new Engineer("Tim", "2", "tim@example.com", "timRepo");

  expect(engineer.getGithub()).toBe("timRepo");
});

test("gets role of the engineer", () => {
  const engineer = new Engineer("Tim", "2", "tim@example.com", "timRepo");

  expect(engineer.getRole()).toBe("Engineer");
});
