// Async functions are functions that run in background as they take time to get executed (eg: fetching data from db) will always return a promise. To wait for that result (either success or failure) you have to wait before moving to next function so use await inside an async function

const fetchData = () => {
  return Promise.resolve("peanut butter");
};

test("data should be peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

const fetchDataError = () => {
  return Promise.reject("error");
};

test("data fetch fails with errors", async () => {
  expect.assertions(1);
  try {
    await fetchDataError();
  } catch (error) {
    expect(error).toMatch("error");
  }
});
