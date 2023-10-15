// 좋은 예
// 인터페이스를 작게 분리

interface ICar {
  drive();
  turnLeft();
  turnRight();
}

interface IBoat {
  steer();
  steerLeft();
  steerRight();
}

// 본인에게 필요한 인터페이스를 구현
class Genesis implements ICar {
  drive() {
    console.log("drive");
  }
  turnLeft() {
    console.log("turnLeft");
  }
  turnRight() {
    console.log("turnRight");
  }
}

// 진짜 수륙양용차가 필요하다면 두개 다 구현
class CarBoat implements ICar, IBoat {
  drive() {
    console.log("drive");
  }
  turnLeft() {
    console.log("turnLeft");
  }
  turnRight() {
    console.log("turnRight");
  }
  steer() {
    console.log("steer");
  }
  steerLeft() {
    console.log("steerLeft");
  }
  steerRight() {
    console.log("steerRight");
  }
}
