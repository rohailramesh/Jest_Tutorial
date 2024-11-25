// a callback is a function passed to another function that gets executed when an async operation is complete
function fetchData(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
}

test("the data is peanut butter", (done) => {
  fetchData((callback) => {
    expect(callback).toBe("peanut butter");
    done(); //when using callbacks, always use done to indicate the callback is finished else there will be timeout error
  });
});
