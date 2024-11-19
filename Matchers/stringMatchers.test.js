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
Testing with strings specifically 
*/

test("there is not letter I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("there is letter I in miss", () => {
  expect("miss").toMatch(/i/);
});
