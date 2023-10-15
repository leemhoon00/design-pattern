// 잘못된 예시
class Animal {
  constructor(public aType: string) {}
}

function hey(animal: Animal) {
  if (animal.aType === "Cat") console.log("meow");
  else if (animal.aType === "Dog") console.log("bark");
  else throw new Error("unknown animal");
}

// Cat, Dog에는 문제가 없다
hey(new Animal("Cat"));
hey(new Animal("Dog"));

// 하지만, 새로운 동물이 추가된다면?
hey(new Animal("Cow")); // Error: unknown animal
hey(new Animal("Sheep")); // Error: unknown animal

// 이러한 구조는 새로운 동물을 추가하려면 함수를 수정해야 한다.
// 확장에 개방적이지 않고, 함수를 수정해야 하므로 수정에 닫혀있지 않다.
