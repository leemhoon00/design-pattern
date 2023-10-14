// 클래스는 본연의 기능을 해야한다.

// 잘못된 예시
class Cat1 {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  public eat(food: string) {}

  public walk() {}

  public speak() {}

  // 고양이에게 print 라는 본연의 기능은 없다.
  public print() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

// 올바른 예시
class Cat2 {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  public eat(food: string) {}

  public walk() {}

  public speak() {}

  // 상태를 리턴
  public represent(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

const cat = new Cat2(3, "Lucy");
console.log(cat.represent());
