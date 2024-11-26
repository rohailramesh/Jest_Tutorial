// when working with database for example, you need to test some request functions but it is possible that the result is already exsisting since a request was made. So next time you test it will throw error. So you would have ot delete all the data before running the test again and maybe something after the test too.
// use functions like beforeEach and afterEach to achieve that.
// beforeEach executes a block of code before the test code is run eg: initialise a db
// afterEach executes a block of code after the test code is run eg: clean the db

// if you need to perform a single time function for all test before or after then you can use beforeAll or afterAll. Especially when setup is async

beforeEach(() => {
  console.log("Running beforeEach");
});

test("testing 2 + 2 is 4", () => {
  expect(2 + 2).toBe(4);
});

test("testing 3 + 3 is 6", () => {
  expect(3 + 3).toBe(6);
});

afterEach(() => {
  console.log("Running afterEach");
});

beforeAll(() => {
  console.log("Running beforeEach");
});

// test("testing 2 + 2 is 4", () => {
//   expect(2 + 2).toBe(4);
// });

// test("testing 3 + 3 is 6", () => {
//     expect(3 + 3).toBe(6);
//   });

// afterAll(() => {
//   console.log("Running afterEach");
// });
