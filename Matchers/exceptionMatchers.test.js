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
Testing to check whether particular function throws error when it is called 
*/

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
});
