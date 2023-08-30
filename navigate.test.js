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

/*
    Test-2
    ->Define spacecraft with different coordinates and all direction.
    ->Test all initial coordinates and values.
*/
//Create a dummy spacecrafts that contain a all directions and diffrent coordinates.
const dummySpacecraftN = new spacecraft(4,9,1,"N");
const dummySpacecraftS = new spacecraft(2,5,1,"S");
const dummySpacecraftE = new spacecraft(2,6,1,"E");
const dummySpacecraftW = new spacecraft(0,22,1,"W");
const dummySpacecraftU = new spacecraft(31,32,1,"U");
const dummySpacecraftD = new spacecraft(0,13,61,"D");

describe('All values are initialized properly', () => {
    //Check for all directon.
    test('Initialize with all direction', () => { 
         expect(dummySpacecraftN.dir).toBe("N");
         expect(dummySpacecraftS.dir).toBe("S");
         expect(dummySpacecraftE.dir).toBe("E");
         expect(dummySpacecraftW.dir).toBe("W");
         expect(dummySpacecraftU.dir).toBe("U");
         expect(dummySpacecraftD.dir).toBe("D");
        })

    //Check for different coordinates.
    test('Intialize with differrnt positions', () => { 
        expect(dummySpacecraftN.x).toBe(4);
        expect(dummySpacecraftN.y).toBe(9);
        expect(dummySpacecraftN.z).toBe(1);
        expect(dummySpacecraftU.x).toBe(31);
        expect(dummySpacecraftW.y).toBe(22);
        expect(dummySpacecraftD.z).toBe(61);
     })
});

/*
    Test-3
    ->Spacecraft must be move forward and backward.
    ->Spacecraft move in any direction
*/
describe('Move Forward/Backward differnt direction and positions test', () => {

    // Spacecraft move forward in any direction
    test('Move forward with differnt direction and positions.', () => { 
        dummySpacecraftN.move(1);
        expect(dummySpacecraftN.y).toBe(10);
        dummySpacecraftS.move(1);
        expect(dummySpacecraftS.y).toBe(4);
        dummySpacecraftE.move(1);
        expect(dummySpacecraftE.x).toBe(3);
        dummySpacecraftW.move(1);
        expect(dummySpacecraftW.x).toBe(-1);
        dummySpacecraftU.move(1);
        expect(dummySpacecraftU.z).toBe(2);
        dummySpacecraftD.move(1);
        expect(dummySpacecraftD.z).toBe(60);
    });

    // Spacecraft move backward in any direction
    test('Move backword with differnt direction and positions.', () => { 
        dummySpacecraftN.move(-1);
        expect(dummySpacecraftN.y).toBe(9);
        dummySpacecraftS.move(-1);
        expect(dummySpacecraftS.y).toBe(5);
        dummySpacecraftE.move(-1);
        expect(dummySpacecraftE.x).toBe(2);
        dummySpacecraftW.move(-1);
        expect(dummySpacecraftW.x).toBe(0);
        dummySpacecraftU.move(-1);
        expect(dummySpacecraftU.z).toBe(1);
        dummySpacecraftD.move(-1);
        expect(dummySpacecraftD.z).toBe(61);
    });
});

