// Initialize a class for spacecraft which can be any spacecraft(e.g.chandrayaan)
class spacecraft {
    /* 
    The spacecraft navigates through the galaxy using galactic coordinates represented by (x, y, z).
    coordinates (variable-x for east or west location, 
                variable-y for north or south location,
                variable-z for distance above or below the galactic plane).
    variable-dir for initial facing direction.(N, S, E, W, U, D).
    */
    constructor(x, y, z, dir) {
        // Create a new instance with coordinates and initial direction.
      this.x = parseInt(x);
      this.y = parseInt(y);
      this.z = parseInt(z);
      this.dir = dir;
    }
    allDirection = ["N", "E", "S", "W"];
    /*
    ->move() : Spacecraft function move for move forward or move backward
    ->forward/backward depends on a value of add which calculated according to directions
    ->for forward : add = 1
    ->for backward : add = -1
    */
    move(add) {
        switch (this.dir) {
          case "N":
            this.y += add;
            break;
          case "S":
            this.y -= add;
            break;
          case "U":
            this.z += add;
            break;
          case "D":
            this.z -= add;
            break;
          case "E":
            this.x += add;
            break;
          case "W":
            this.x -= add; 
            break;
          default:
            break;
        }
      }

      /*
    ->turn() : Spacecraft function turn for left(+1) or right(-1)
    ->turn left/right depends on a value of val which calculated according to directions
    ->for U : val = 1 for N & val = 1 for S
    ->for D : val = 1 for S & val = 1 for N
    ->for N,S,E,W calulated from ordered indexes
        -1 for next direction & +1 for prev direction
    */
      turn(val) {
        if (this.dir === "U") {
          this.dir = val === 1 ? "N" : "S";
        } else if (this.dir === "D") {
          this.dir = val === 1 ? "S" : "N";
        } else {
          let ind = this.allDirection.indexOf(this.dir);
        //   calculate direction index 
          ind = (ind + 4 - val) % 4;
          this.dir = this.allDirection[ind];
        }
      }

      /*
    ->navigate(array) : Spacecraft function navigate from commands in array
    ->Spacecraft have navigate according to command which provides in commands array.
    ->F = Move Forward & B = Move Backward
    ->U = Rotate Upward & D = Rotate Downward
    ->L = Rotate to the left side & R = Rotate to the right side
    */
      navigate(command) {
          switch (command) {
            case "F":
              this.move(1);
              break;
            case "B":
              this.move(-1);
              break;
            case "U":
              this.dir = "U";
              break;
            case "D":
              this.dir = "D";
              break;
            case "L":
              this.turn(1);
              break;
            case "R":
              this.turn(-1);
              break;
            default:
              console.log(`Invalid command: ${command}`);
          }
      };
    
}

module.exports = spacecraft;
