// This program runs the following:
// 1. Ask the user for the name, manufacturer and acceleration of a car.
// 2. Checks the stats of the car from starting to accelerating to deccelerating to checking the speed until stopping.

function runActivity() {
  class Car {
    constructor(name, manufacturer, acceleration) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.acceleration = acceleration;
      this.speed = 0;
    }

    start() {
      if (this.speed === 0) {
        this.speed += 30;
        console.log("The car has started");
        console.log("Your speed is now " + this.speed);
      } else {
        concolse.log("The car is already running");
      }
    }

    accelerate() {
      if (this.speed > 0) {
        this.speed += this.acceleration;
        console.log("The car speed is now " + this.speed);
      } else {
        console.log("Please start the car.");
      }
    }

    decelerate() {
      if (this.speed > 1) {
        this.speed /= 2;
        console.log("The car speed is now " + this.speed);
      } else {
        console.log("You are not moving.");
      }
    }

    checkspeed() {
      if (this.speed > 0) {
        console.log("Your current speed is " + this.speed);
      } else {
        console.log("Your car has not started");
      }
    }

    stop() {
      if (this.speed > 0) {
        this.speed = 0;
        console.log("The car has stopped.");
      } else {
        console.log("The car is not running.");
      }
    }
  }

  const car = new Car(
    prompt("Please enter a Car's name."),
    prompt("Please enter the Car's manufacturer."),
    Number(prompt("Please enter the Car's acceleration"))
  );

  if (car.acceleration <= 0) {
    console.error(
      "Invalid input! You cannot accelerate with 0 or a negative number!"
    );
    return;
  }

  console.log(car.name);
  console.log(car.manufacturer);
  console.log(car.acceleration);
  console.log(car.speed);

  let i = 0;
  while (i == 0) {
    let choice = Number(
      prompt(
        "(1) Start\n(2) Accelerate\n(3) Decelerate\n(4) Check Speed\n(5) Stop\n(6) End Program"
      )
    );
    switch (choice) {
      case 1:
        car.start();
        break;
      case 2:
        car.accelerate();
        break;
      case 3:
        car.decelerate();
        break;
      case 4:
        car.checkspeed();
        break;
      case 5:
        car.stop();
        break;
      case 6:
        i = 1;
        break;
      default:
        console.error("ERROR: Enter one of the choices.");
    }
  }
}
