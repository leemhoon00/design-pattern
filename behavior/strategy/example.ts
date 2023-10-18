class Animal {
  speak() {}
}

// Animal을 상속받은 클래스에서 speak를 구현한다.
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

function hey(animal: Animal) {
  animal.speak();
}

const cat = new Cat();
const dog = new Dog();

hey(cat);
hey(dog);

// 여기서 새로운 동물, Cow를 추가하고 싶다면?
// Animal을 상속받아 speak를 구현하면 된다.
class Cow extends Animal {
  speak() {
    console.log("moo");
  }
}

const cow = new Cow();
hey(cow);

// 이렇게 하면 새로운 동물을 추가할 때마다 기존 코드의 수정이 없고 확장에 유연하기 때문에
// 확장에 Open된, 수정에 Closed된 코드가 된다.
