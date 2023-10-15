// 안좋은 예
// 수륙양용 차 인터페이스
interface ICarBoat {
  // 자동차의 기능
  drive();
  turnLeft();
  turnRight();

  // 배의 기능
  steer();
  steerLeft();
  steerRight();
}

// 제네시스는 일반 자동차인데 배의 기능을 구현해야 한다.
class Genesis implements ICarBoat {
  drive() {
    console.log("drive");
  }
  turnLeft() {
    console.log("turnLeft");
  }
  turnRight() {
    console.log("turnRight");
  }
  steer() {}
  steerLeft() {}
  steerRight() {}
}

// 자신이 사용하지 않는 메서드에 의존관계가 생김.
// 이러한 경우엔 큰 인터페이스를 작은 인터페이스로 분리하는 것이 좋다.
