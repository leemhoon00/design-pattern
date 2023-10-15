// 클래스 정의
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

// 팩토리 인터페이스 정의
interface AnimalFactory {
  createAnimal(): Animal;
}
// CatFactory에는 count와 관련된 기능 추가
class CatFactory implements AnimalFactory {
  count: number;
  constructor() {
    this.count = 0;
  }
  createAnimal(): Animal {
    this.count++;
    return new Cat();
  }
  getCount(): number {
    return this.count;
  }
}
// DogFactory에는 강아지에 날개를 달아주는 추가기능
class DogFactory implements AnimalFactory {
  createAnimal(): Animal {
    return new Dog();
  }
  makeWings(dog: Dog) {
    console.log("make wings for dog");
    return dog;
  }
}

const catFactory = new CatFactory();
const cat = catFactory.createAnimal();
console.log(catFactory.getCount());

const dogFactory = new DogFactory();
let dog = dogFactory.createAnimal();
dog = dogFactory.makeWings(dog);
