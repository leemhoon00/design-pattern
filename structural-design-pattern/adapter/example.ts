// 동물은 걷기 인터페이스를 가지고 있음
interface Animal {
  walk(): void;
}

class Cat implements Animal {
  walk(): void {
    console.log("Cat is walking");
  }
}
class Dog implements Animal {
  walk(): void {
    console.log("Dog is walking");
  }
}

function toWalk(animal: Animal): void {
  animal.walk();
}

const cat = new Cat();
const dog = new Dog();

toWalk(cat);
toWalk(dog);

// 여기서 swim 인터페이스를 가지는 Fish 클래스 정의
class Fish {
  swim(): void {
    console.log("Fish is swimming");
  }
}

// Fish 클래스는 swim 인터페이스만 있고, walk 인터페이스가 없기 때문에 toWalk 함수에 전달할 수 없음
// Fish를 걷게 하고싶다면? walk 인터페이스를 가지고 있는 Fish Adapter를 생성해야함

class FishAdapter implements Animal {
  constructor(private fish: Fish) {}

  walk(): void {
    this.fish.swim();
  }
}

const fish = new Fish();
// swim 인터페이스를 가지고 있는 Fish를 walk 인터페이스를 가지는 fishAdapter를 통해 걷게 함
const adaptedFish = new FishAdapter(fish);
toWalk(adaptedFish);
