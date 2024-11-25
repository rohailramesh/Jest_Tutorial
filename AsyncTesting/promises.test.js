// Code that uses promises has to be checked in testing annd if it resolves - return true else return false

//A promise is something you want to happen like you ask to create a pizza
// That takes a bit of time to perform (or resolve) so there is a time out.
// Once the timeout is finished and pizza is made this means the promise (making the pizza) is now resolved.
//We use .then() to extract that data from the promise

const fetchData = () => {
  //fetching data asynchronously
  return new Promise((resolve) => {
    setTimeout(() => {
      //this timeout function stimulates a delay of 1 second.
      resolve("peanut butter"); //after 1 second the resolve function is called which marks the promise as fulfilled
    }, 1000);
  });
};

test("data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});
