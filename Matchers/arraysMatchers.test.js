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
Testing with arrays specifically 
*/

const fruit = ["apples", "bananas", "carrots"];
test("bananas is a fruit", () => {
  expect(fruit).toContain("bananas");
  expect(new Set(fruit)).toContain("carrots");
});
