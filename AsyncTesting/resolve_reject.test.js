function resolveFetchData() {
  return new Promise((resolve) => {
    // Simulate a successful response (resolve)
    setTimeout(() => {
      resolve("peanut butter");
    }, 1000);
  });
}
test("the data is peanut butter", async () => {
  await expect(resolveFetchData()).resolves.toBe("peanut butter");
});

function rejectFetchData() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("error");
    }, 1000);
  });
}

test("the fetch fails with an error", async () => {
  await expect(rejectFetchData()).rejects.toMatch("error");
});
