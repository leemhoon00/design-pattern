class Car {}
class Manual {}

// 물품을 만드는 과정을 추상화
// 여기엔 필수적인 것만 있음
interface Builder {
  reset(): void;
  setSeats(number: number): void;
  setEngine(engine: string): void;
  setTripComputer(): void;
  setGPS(): void;
}

// 자동차를 만드는 빌더
// 필요할 경우 추가적인 과정을 정의할 수 있음
// 여기 있는 메소드들은 어떤 자동차를 만들것이냐에 따라서 사용될 수도 있고 사용 안 될 수도 있음
class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.car = new Car();
  }

  public setSeats(number: number): void {
    console.log(`CarBuilder: setting seats to ${number}`);
  }

  public setEngine(engine: string): void {
    console.log(`CarBuilder: setting engine to ${engine}`);
  }

  public setTripComputer(): void {
    console.log(`CarBuilder: setting trip computer`);
  }

  public setGPS(): void {
    console.log(`CarBuilder: setting GPS`);
  }

  public getProduct(): Car {
    const product = this.car;
    this.reset();
    return product;
  }
}

// 설명서를 만드는 빌더
class ManualBuilder implements Builder {
  private manual: Manual;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.manual = new Manual();
  }

  public setSeats(number: number): void {
    console.log(`ManualBuilder: setting seats to ${number}`);
  }

  public setEngine(engine: string): void {
    console.log(`ManualBuilder: setting engine to ${engine}`);
  }

  public setTripComputer(): void {
    console.log(`ManualBuilder: setting trip computer`);
  }

  public setGPS(): void {
    console.log(`ManualBuilder: setting GPS`);
  }

  public getProduct(): Manual {
    const product = this.manual;
    this.reset();
    return product;
  }
}

// 어떤 물건을 만드느냐에 따라 Director에게 그에 맞는 빌더를 전달함(자동차 or 설명서)
// 또 그 빌더를 사용하여 어떤 물건을 만들지 요청함 (스포츠카 or SUV)
class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public constructSportsCar(): void {
    this.builder.reset();
    this.builder.setSeats(2);
    this.builder.setEngine("sport");
    this.builder.setTripComputer();
    this.builder.setGPS();
  }

  public constructSUV(): void {
    // ...
  }
}

const director = new Director();

// 스포츠카 생성
const carBuilder = new CarBuilder();
director.setBuilder(carBuilder);
director.constructSportsCar();
const car = carBuilder.getProduct();

// 빌더를 스왑해가면서 다른 물건을 만들 수 있음
const manualBuilder = new ManualBuilder();
director.setBuilder(manualBuilder);
director.constructSportsCar();
const manual = manualBuilder.getProduct();
