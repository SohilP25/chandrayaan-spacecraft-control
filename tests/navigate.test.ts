// import necessary modules and packages
const spacecraft = require("../src/navigate");

/*
    Test-1 
    ->Define type of spacecraft and it contain all necessary values to navigate.
    ->Define a spacecraft with initial values and check for undefined(falsy) values.
*/
describe("Defination and type of spacecraft ", () => {
  const tempSpacecraft = new spacecraft();

  test("Check for objetc(Instance of class)", () => {
    expect(tempSpacecraft).toBeInstanceOf(spacecraft);
  });

  test("All spacecraft values are undefined at first", () => {
    expect(tempSpacecraft.x).toBeFalsy();
    expect(tempSpacecraft.y).toBeFalsy();
    expect(tempSpacecraft.z).toBeFalsy();
    expect(tempSpacecraft.dir).toBeFalsy();
  });
});

//Creating function that initialize a spacecraft and navigate through given commands
function initializeAndNavigate(x, y, z, dir, cmd) {
  const testSpacecraft = new spacecraft(x, y, z, dir);
  testSpacecraft.navigate(cmd);
  return testSpacecraft;
}

function validateCoordinatesAndDirection(testSpacecraft, x, y, z, dir) {
  expect(testSpacecraft.x).toBe(x);
  expect(testSpacecraft.y).toBe(y);
  expect(testSpacecraft.z).toBe(z);
  expect(testSpacecraft.dir).toBe(dir);
}

// /*
//     Test-2
//     ->Define spacecraft with different coordinates and all direction.
//     ->Test all initial coordinates and values.
// */
// //Create a dummy spacecrafts that contain a all directions and diffrent coordinates.

// describe("All coordinates are initialize with all possible direction", () => {
//   //Check for all directon.
//   test("Initialize with N direction", () => {
//     //  expect(dummySpacecraftN.dir).toBe("N");
//     const testSpacecraft = initializeAndNavigate(4, 9, 1, "N");
//     validateCoordinatesAndDirection(testSpacecraft, 4, 9, 1, "N");
//   });

//   test("Initialize with S direction", () => {
//     const testSpacecraft = initializeAndNavigate(2, 5, 1, "S");
//     validateCoordinatesAndDirection(testSpacecraft, 2, 5, 1, "S");
//   });

//   test("Initialize with E direction", () => {
//     const testSpacecraft = initializeAndNavigate(2, 6, 1, "E");
//     validateCoordinatesAndDirection(testSpacecraft, 2, 6, 1, "E");
//   });

//   test("Initialize with W direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 2, 1, "W");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 2, 1, "W");
//   });

//   test("Initialize with U direction", () => {
//     const testSpacecraft = initializeAndNavigate(3, 2, 1, "U");
//     validateCoordinatesAndDirection(testSpacecraft, 3, 2, 1, "U");
//   });

//   test("Initialize with D direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 10, 6, "D");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 10, 6, "D");
//   });
// });

// /*
//     Test-3
//     ->Spacecraft must be move forward and backward.
//     ->Spacecraft move in any direction
// */
// describe("Move Forward/Backward differnt direction and positions test", () => {
//   //In North direction
//   test("Move forward in N direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "N", "F");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 1, 0, "N");
//   });
//   test("Move backward in N direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "N", "B");
//     validateCoordinatesAndDirection(testSpacecraft, 0, -1, 0, "N");
//   });

//   //In South direction
//   test("Move forward in S direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "S", "F");
//     validateCoordinatesAndDirection(testSpacecraft, 0, -1, 0, "S");
//   });
//   test("Move backward in S direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "S", "B");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 1, 0, "S");
//   });

//   //In East direction/
//   test("Move forward in E direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "E", "F");
//     validateCoordinatesAndDirection(testSpacecraft, 1, 0, 0, "E");
//   });
//   test("Move backward in E direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "E", "B");
//     validateCoordinatesAndDirection(testSpacecraft, -1, 0, 0, "E");
//   });

//   //  In West direction
//   test("Move forward in W direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "W", "F");
//     validateCoordinatesAndDirection(testSpacecraft, -1, 0, 0, "W");
//   });
//   test("Move backward in W direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "W", "B");
//     validateCoordinatesAndDirection(testSpacecraft, 1, 0, 0, "W");
//   });

//   //In Up direction
//   test("Move forward in U direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "U", "F");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 1, "U");
//   });
//   test("Move backward in U direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "U", "B");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, -1, "U");
//   });

//   //In Down direction
//   test("Move forward in D direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "D", "F");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, -1, "D");
//   });
//   test("Move backward in D direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "D", "B");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 1, "D");
//   });
// });

// /*
//     Test-4
//     ->Spacecraft must be turn left and right in any direction.
//     -> value 1 for left & -1 for right.
//     ->Spacecraft turn in any direction
// */
// describe("Turn Left/Right differnt direction and positions test", () => {
//   //In North direction
//   test("Turn Left in N direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "N", "L");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "W");
//   });
//   test("Turn Right in N direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "N", "R");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "E");
//   });

//   //In South direction
//   test("Turn Left in S direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "S", "L");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "E");
//   });
//   test("Turn Right in S direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "S", "R");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "W");
//   });

//   //In East direction/
//   test("Turn Left in E direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "E", "L");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "N");
//   });
//   test("Turn Right in E direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "E", "R");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "S");
//   });

//   //  In West direction
//   test("Turn Left in W direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "W", "L");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "S");
//   });
//   test("Turn Right in W direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "W", "R");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "N");
//   });

//   //In Up direction
//   test("Turn Left in U direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "U", "L");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "N");
//   });
//   test("Turn Right in U direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "U", "R");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "S");
//   });

//   //In Down direction
//   test("Turn Left in D direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "D", "L");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "S");
//   });

//   test("Turn Right in D direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "D", "R");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "N");
//   });
// });

// /*
//     Test-5
//     ->Spacecraft must be turn Up and Down.
//     ->Spacecraft turn in any direction.
//     ->commang in navigate() : U for Up & D for Down
//     ->Also test a navigation function
// */
// describe("Turn Up/Down differnt direction and positions test", () => {
//   //In North direction
//   test("Turn Up in N direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "N", "U");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "U");
//   });
//   test("Turn Down in N direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "N", "D");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "D");
//   });

//   //In South direction
//   test("Turn Up in S direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "S", "U");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "U");
//   });
//   test("Turn Down in S direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "S", "D");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "D");
//   });

//   //In East direction/
//   test("Turn Up in E direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "E", "U");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "U");
//   });
//   test("Turn Down in E direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "E", "D");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "D");
//   });

//   //  In West direction
//   test("Turn Up in W direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "W", "U");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "U");
//   });
//   test("Turn Down in W direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "W", "D");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "D");
//   });

//   //In Up direction
//   test("Turn Up in U direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "U", "U");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "U");
//   });
//   test("Turn Down in U direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "U", "D");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "D");
//   });

//   //In Down direction
//   test("Turn Up in D direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "D", "U");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "U");
//   });

//   test("Turn Down in D direction", () => {
//     const testSpacecraft = initializeAndNavigate(0, 0, 0, "D", "D");
//     validateCoordinatesAndDirection(testSpacecraft, 0, 0, 0, "D");
//   });
// });

// /*
//     Test-6
//     ->Use Diffrent Test Cases.
//     ->Test type of variable.
// */
// describe("Test with Different test-cases", () => {
//   //Test Case 1
//   test("Test case 1", () => {
//     const commands = ["F", "R", "U", "B", "L"];
//     const testSpacecraft = new spacecraft(0, 0, 0, "N");
//     commands.forEach((command) => testSpacecraft.navigate(command));
//     validateCoordinatesAndDirection(testSpacecraft, 0, 1, -1, "N");
//   });

//   //Test Case 2
//   test("Test case 2", () => {
//     const commands = ["D", "B", "F", "L", "U"];
//     const testSpacecraft = new spacecraft(0, 1, -1, "E");
//     commands.forEach((command) => testSpacecraft.navigate(command));
//     validateCoordinatesAndDirection(testSpacecraft, 0, 1, -1, "U");
//   });

//   //Test Case 3
//   test("Test case 3", () => {
//     const commands = ["D", "B", "F", "L", "U"];
//     const testSpacecraft = new spacecraft(4, 9, 1, "W");
//     commands.forEach((command) => testSpacecraft.navigate(command));
//     validateCoordinatesAndDirection(testSpacecraft, 4, 9, 1, "U");
//   });

//   //Test Case 4
//   test("Test case 4", () => {
//     const commands = ["U", "B", "B", "D", "R"];
//     const testSpacecraft = new spacecraft(2, 5, 8, "E");
//     commands.forEach((command) => testSpacecraft.navigate(command));
//     validateCoordinatesAndDirection(testSpacecraft, 2, 5, 6, "N");
//   });

//   //Test Case 5
//   test("Test case 4", () => {
//     const commands = ["L", "F", "D", "F", "L"];
//     const testSpacecraft = new spacecraft(2, -3, -5, "S");
//     commands.forEach((command) => testSpacecraft.navigate(command));
//     validateCoordinatesAndDirection(testSpacecraft, 3, -3, -6, "S");
//   });
// });

// // Test 7 for bounding values
// describe("Boundary value check", () => {
//   test("Spacecraft must be in boundary", () => {
//     expect(() => new spacecraft(11, 2, 1, "N")).toThrow("Boundary Error");
//   });

//   test("Spacecraft must be navigates in boundary", () => {
//     expect(() => initializeAndNavigate(10, 1, 3, "E", "F")).toThrow(
//       "Boundary Error"
//     );
//   });

//   test("Spacecraft must be navigates in boundary", () => {
//     expect(() => initializeAndNavigate(7, -10, 8, "N", "B")).toThrow(
//       "Boundary Error"
//     );
//   });

//   test("Spacecraft must be navigates in boundary", () => {
//     expect(() => initializeAndNavigate(-10, 10, 10, "E", "B")).toThrow(
//       "Boundary Error"
//     );
//   });

//   test("Spacecraft must be navigates in boundary", () => {
//     const commands = ["L", "F", "D", "F", "L"];
//     const testSpacecraft = new spacecraft(2, -3, -10, "S");

//     expect(() =>
//       commands.forEach((command) => testSpacecraft.navigate(command))
//     ).toThrow("Boundary Error");
//   });

//   test("Spacecraft must be navigates in boundary", () => {
//     const commands = ["F", "F", "R", "U", "B", "L"];
//     const testSpacecraft = new spacecraft(2, 9, 3, "N");
//     expect(() =>
//       commands.forEach((command) => testSpacecraft.navigate(command))
//     ).toThrow("Boundary Error");
//   });
// });
