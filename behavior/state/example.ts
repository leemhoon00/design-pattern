class TrafficLight {
  private state: State;
  constructor() {
    this.state = new GreenLight();
  }

  setState(state: State) {
    this.state = state;
  }

  speak() {
    this.state.speak();
  }

  wait() {
    this.state.wait(this);
  }
}

class State {
  speak() {}
  wait(trafficLight: TrafficLight) {}
}

class GreenLight extends State {
  speak() {
    console.log("Green Light");
  }

  wait(trafficLight: TrafficLight) {
    console.log("Wait for 10 seconds");
    trafficLight.setState(new RedLight());
  }
}
class RedLight extends State {
  speak() {
    console.log("Red Light");
  }

  wait(trafficLight: TrafficLight) {
    console.log("Wait for 10 seconds");
    trafficLight.setState(new GreenLight());
  }
}

const trafficLight = new TrafficLight();
trafficLight.speak();
trafficLight.wait();
trafficLight.speak();
