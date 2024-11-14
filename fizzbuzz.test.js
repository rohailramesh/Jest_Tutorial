const fizzbuzz = require("./fizzbuzz");

describe("FizzBuzz", () => {
  test("[3] should output fizz", () => {
    expect(fizzbuzz([3])).toBe("fizz");
  });

  test("[5] should output buzz", () => {
    expect(fizzbuzz([5])).toBe("buzz");
  });
});
