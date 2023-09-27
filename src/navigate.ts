class Spacecraft {
  /*
   * The spacecraft navigates through the galaxy using galactic coordinates represented by (x, y, z).
   * Coordinates: variable-x for east or west location, variable-y for north or south location,
   * variable-z for distance above or below the galactic plane.
   * variable-dir for the initial facing direction (N, S, E, W, U, D).
   */
  public x: number;
  public y: number;
  public z: number;
  public dir: string;

  private readonly allDirection: string[] = ["N", "E", "S", "W"];

  constructor(x: number, y: number, z: number, dir: string) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dir = dir;
    this.checkBoundary();
  }

  private checkBoundary(): void {
    if (this.x > 10 || this.x < -10 || this.y > 10 || this.y < -10 || this.z > 10 || this.z < -10) {
      throw new Error("Boundary Error");
    }
  }

  /*
   * move(): Spacecraft function to move forward or backward.
   * Forward/backward depends on the value of 'add,' which is calculated according to directions.
   * For forward: add = 1, for backward: add = -1.
   */
  // private move(add: number): void {
  //   switch (this.dir) {
  //     case "N":
  //       this.y += add;
  //       break;
  //     case "S":
  //       this.y -= add;
  //       break;
  //     case "U":
  //       this.z += add;
  //       break;
  //     case "D":
  //       this.z -= add;
  //       break;
  //     case "E":
  //       this.x += add;
  //       break;
  //     case "W":
  //       this.x -= add;
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // /*
  //  * turn(): Spacecraft function to turn left (+1) or right (-1).
  //  * Turn left/right depends on the value of 'val,' which is calculated according to directions.
  //  * For U: val = 1 for N & val = 1 for S.
  //  * For D: val = 1 for S & val = 1 for N.
  //  * For N, S, E, W calculated from ordered indexes: -1 for the next direction & +1 for the previous direction.
  //  */
  // private turn(val: number): void {
  //   if (this.dir === "U") {
  //     this.dir = val === 1 ? "N" : "S";
  //   } else if (this.dir === "D") {
  //     this.dir = val === 1 ? "S" : "N";
  //   } else {
  //     let ind = this.allDirection.indexOf(this.dir);
  //     ind = (ind + 4 - val) % 4;
  //     this.dir = this.allDirection[ind];
  //   }
  // }

  // /*
  //  * navigate(array): Spacecraft function to navigate from commands in an array.
  //  * The spacecraft navigates according to commands provided in the commands array.
  //  * F = Move Forward, B = Move Backward, U = Rotate Upward, D = Rotate Downward,
  //  * L = Rotate to the left side, R = Rotate to the right side.
  //  */
  // navigate(command: string): void {
  //   switch (command) {
  //     case "F":
  //       this.move(1);
  //       break;
  //     case "B":
  //       this.move(-1);
  //       break;
  //     case "U":
  //       this.dir = "U";
  //       break;
  //     case "D":
  //       this.dir = "D";
  //       break;
  //     case "L":
  //       this.turn(1);
  //       break;
  //     case "R":
  //       this.turn(-1);
  //       break;
  //     default:
  //       console.log(`Invalid command: ${command}`);
  //   }
  //   this.checkBoundary();
  // }
}

export default Spacecraft;
