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
}

module.exports = spacecraft;
