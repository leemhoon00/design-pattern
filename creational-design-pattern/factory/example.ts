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

// 객체를 찍어내는 함수
function FactoryFn(animal: string): Animal {
  if (animal === "Cat") {
    return new Cat();
  } else if (animal === "Dog") {
    return new Dog();
  } else {
    throw new Error("Animal not found");
  }
}

// 객체를 찍어내는 클래스
class FactoryClass {
  createAnimal(animal: string): Animal {
    if (animal === "Cat") {
      return new Cat();
    } else if (animal === "Dog") {
      return new Dog();
    } else {
      throw new Error("Animal not found");
    }
  }
}

// 함수 사용
const cat = FactoryFn("Cat");
cat.speak();

// 클래스 사용
const factory = new FactoryClass();
const dog = factory.createAnimal("Dog");
dog.speak();
