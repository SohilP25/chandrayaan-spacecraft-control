// Import package for I/O from CLI.
const readline = require("readline");
const spacecraft = require('./navigate');

// Create a interface for I/O.
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a all direction to be possible
const allDirection = ["N", "E", "S", "W", "U", "D"];
const allcommands = ["F", "B", "U", "D", "L", "R"];

// question user to enter name
input.question(
  "Enter an initial direction for spacecraft :",
  function (initDir) {
    // Validate initial direction.
    if (!allDirection.includes(initDir.toUpperCase())) {
      console.log(`Direction ${initDir} is not exist`);
      console.log("Valid directions are : N,E,S,W,U,D");
      input.close();
      return;
    }
    initDir = initDir.toUpperCase();

    input.question(
      "Enter an initial starting position saprating with comma(,) :",
      function (initPos) {
        initPos = initPos.split(",").map((point) => point.trim());
        if (initPos.length != 3) {
          console.log("Position is invalid");
          input.close();
          return;
        }

        input.question("Enter a command (F,B,U,D,L,R) :", function (cmds) {
          cmds = cmds.split(",");
          cmds = cmds.map(cmd => cmd.toUpperCase());
        //   console.log(cmds);
          if (
            !cmds.every((cmd) => {
              return allcommands.includes(cmd);
            })
          ) {
            console.log("One or multiple commands incorrect");
          }
          
          input.close();
        });
      }
    );
  }
);
