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
    //Convert it to uppercase
    initDir = initDir.toUpperCase();

    //Take input coordinates of initial position
    input.question(
      "Enter an initial starting position saprating with comma(,) :",
      function (initPos) {
        //Convert initial coordinates to an array
        initPos = initPos.split(",").map((point) => point.trim());
        if (initPos.length != 3) {
          console.log("Position is invalid");
          input.close();
          return;
        }

        //Take input commands to navigate
        input.question("Enter a command (F,B,U,D,L,R) :", function (cmds) {
        //Convert initial commands to an array
          cmds = cmds.split(",");
          cmds = cmds.map(cmd => cmd.toUpperCase());
        // Validate commands.
          if (
            !cmds.every((cmd) => {
              return allcommands.includes(cmd);
            })
          ) {
            console.log("One or multiple commands incorrect");
          }
          //Create a instance of spacecraft
          const chandrayaan = new spacecraft(
            initPos[0],
            initPos[1],
            initPos[2],
            initDir
          );

          //execute navigation commands
          chandrayaan.navigate(cmds);

          //print input of spacecraft 
            console.log(chandrayaan);

          //print output of spacecraft 
          console.log(`After navigation position is : ${chandrayaan.x},${chandrayaan.y},${chandrayaan.z}`);
          console.log(`Direction is : ${chandrayaan.dir}`);
          input.close();
        });
      }
    );
  }
);
