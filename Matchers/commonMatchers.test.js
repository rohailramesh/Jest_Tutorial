// There are different types of matchers in jtest. Mathcers come after the expect('description', function).
/*
Common Matchers
Truthiness
Numbers
Strings
Arrays and iterables
Exceptions
*/

// common matcher .toBe()
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

// common matcher .not.toBe()
test("two plus two is not five", () => {
  expect(2 + 2).not.toBe(5);
});

// common match .toEqual()
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
