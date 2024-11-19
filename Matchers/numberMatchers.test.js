// There are different types of matchers in jtest. Mathcers come after the expect('description', function).
/*
Common Matchers
Truthiness
Numbers
Strings
Arrays and iterables
Exceptions
*/

/*
Testing with numbers specifically - integers and floats
*/

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("add floating numbers", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});
