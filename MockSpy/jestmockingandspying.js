// mock is a key term used in jest
// a mock of the object from the constructor is made where all the implementation is removed. Allows the tester to run the subjects in isolation removing any dependency
// to create a mock, need to use jest.fn()

// in the example below, create a mock function of a example function, and call that function and then check if the mock function is called or not
const mockFunction = jest.fn();
mockFunction();
expect(mockFunction).toHaveBeenCalled();

// it is also possible to store the return value we expect using a mock function
const returnsTrue = jest.fn(() => true);
console.log(returnsTrue());

// spying is similar to mocking but it spies on all the methods being called with correct arugments without ever changing that method
const spy = jest.spyOn(method, string);
