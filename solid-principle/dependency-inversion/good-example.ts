// 좋은 예

class Animal {
  speak() {}
}

class Cat extends Animal {
  speak() {
    console.log("meow");
  }
}
class Dog extends Animal {
  speak() {
    console.log("bark");
  }
}

// Zoo 클래스는 하위 모듈에 직접적으로 의존하지 않고 추상 클래스인 Animal에 의존한다.
class Zoo {
  animals: Animal[];

  constructor() {
    this.animals = [];
  }

  addAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  speakAll() {
    this.animals.forEach((animal) => {
      animal.speak();
    });
  }
}

const zoo = new Zoo();
zoo.addAnimal(new Cat());
zoo.addAnimal(new Dog());
zoo.speakAll();
