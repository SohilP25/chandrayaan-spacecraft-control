// CommonJS import style
const readline = require("readline");
const Spacecraft = require("./navigate"); // Adjust based on the actual export of the navigate module

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Declare and initialize the arrays
const allDirection: string[] = ["N", "E", "S", "W", "U", "D"];
const allcommands: string[] = ["F", "B", "U", "D", "L", "R"];

input.question(
  "Enter an initial direction for spacecraft: ",
  (initDir: string) => {
    if (!allDirection.includes(initDir.toUpperCase())) {
      console.log(`Direction ${initDir} is not valid.`);
      console.log("Valid directions are: N, E, S, W, U, D");
      input.close();
      return;
    }

    initDir = initDir.toUpperCase();

    input.question(
      "Enter an initial starting position separating with commas (x,y,z): ",
      (initPos: string) => {
        const initPosArr: string[] = initPos
          .split(",")
          .map((point) => point.trim());

        if (initPosArr.length !== 3) {
          console.log("Position is invalid.");
          input.close();
          return;
        }

        const [x, y, z] = initPosArr.map((value) => parseFloat(value));

        input.question(
          "Enter a command (F,B,U,D,L,R) separated by commas: ",
          (cmds: string) => {
            const cmdsArr: string[] = cmds
              .split(",")
              .map((cmd) => cmd.trim().toUpperCase());

            if (!cmdsArr.every((cmd) => allcommands.includes(cmd))) {
              console.log("One or more commands are incorrect.");
              input.close();
              return;
            }

            const chandrayaan = new Spacecraft(x, y, z, initDir);

            cmdsArr.forEach((command) => chandrayaan.navigate(command));

            console.log("Input of spacecraft:");
            console.log(chandrayaan);
            console.log(
              `After navigation position is: ${chandrayaan.x},${chandrayaan.y},${chandrayaan.z}`
            );
            console.log(`Direction is: ${chandrayaan.dir}`);
            input.close();
          }
        );
      }
    );
  }
);
