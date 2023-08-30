// import necessary modules and packages
const spacecraft = require("./navigate");

/*
    Test-1 
    ->Define type of spacecraft and it contain all necessary values to navigate.
    ->Define a spacecraft with initial values and check for undefined(falsy) values.
*/
describe("Defination and type of spacecraft ", () => {

  test("spacecraft is a function", () => {
    expect(typeof spacecraft).toBe("function");
  });

  test("All spacecraft values are undefined at first", () => {
    expect(spacecraft.x).toBeFalsy();
    expect(spacecraft.y).toBeFalsy();
    expect(spacecraft.z).toBeFalsy();
    expect(spacecraft.dir).toBeFalsy();
  });
});
