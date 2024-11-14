// When working on a larger project, it is possible that certain cases fail due to external dependencies so they can be skipped when testing the suite

// this should be in the skiptest.test.js file
test.skip("this test is broken", () => {
  expect(nameOfFunction()).toBe("actual answer");
});
