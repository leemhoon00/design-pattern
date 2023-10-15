// 안좋은 예

class Cat {
  speak() {
    console.log("meow");
  }
}
class Dog {
  speak() {
    console.log("bark");
  }
}

// Zoo 클래스는 Cat, Dog 클래스에 의존하고 있다.
// 상위 모듈이 하위 모듈을 가지고 있는것은 자연스러우나, 새로운 동물이 생긴다면 Zoo 클래스를 수정해야한다.
class Zoo {
  private cat: Cat;
  private dog: Dog;
  constructor() {
    this.cat = new Cat();
    this.dog = new Dog();
  }
}

// 동물에 대한 추상 클래스 Animal을 만들고, Cat, Dog 클래스가 Animal을 상속받도록 한다.
// 상위 모듈과 하위 모듈 모두 추상화된 Animal 클래스에 의존하게 된다.
