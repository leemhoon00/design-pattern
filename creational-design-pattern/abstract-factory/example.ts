interface Animal {
  speak(): void;
}

class Cat implements Animal {
  speak() {}
}
class Dog implements Animal {
  speak() {}
}

// 미국의 동물들과 한국의 동물들은 각각 다른 소리를 낸다.
class USCat extends Cat {
  speak() {
    console.log("meow");
  }
}
class USDog extends Dog {
  speak() {
    console.log("bark");
  }
}
class KoreanCat extends Cat {
  speak() {
    console.log("야옹");
  }
}
class KoreanDog extends Dog {
  speak() {
    console.log("멍멍");
  }
}

// 추상 팩토리
interface AnimalFactory {
  createCat(): Cat;
  createDog(): Dog;
}

// 미국의 패밀리 팩토리
class USAnimalFactory implements AnimalFactory {
  createCat(): Cat {
    return new USCat();
  }
  createDog(): Dog {
    return new USDog();
  }
}

// 한국의 패밀리 팩토리
class KoreanAnimalFactory implements AnimalFactory {
  createCat(): Cat {
    return new KoreanCat();
  }
  createDog(): Dog {
    return new KoreanDog();
  }
}

// 동물들을 관리하는 동물원
// 동물원이 어느 나라에 지어질지는 알 수 없음
class Zoo {
  private animals: Animal[];
  private animalFactory: AnimalFactory;
  constructor(animalFactory: AnimalFactory) {
    this.animalFactory = animalFactory;
    this.animals = [];
  }
  addCat() {
    this.animals.push(this.animalFactory.createCat());
  }
  addDog() {
    this.animals.push(this.animalFactory.createDog());
  }
  speakAll() {
    this.animals.forEach((animal) => animal.speak());
  }
}

// 실제 추상 팩토리에선 어느 지역의 생성자 팩토리를 사용할지는 런타임중에 결정됨
const usZoo = new Zoo(new USAnimalFactory());
usZoo.addCat();
usZoo.addDog();
usZoo.speakAll();

const koreanZoo = new Zoo(new KoreanAnimalFactory());
koreanZoo.addCat();
koreanZoo.addDog();
koreanZoo.speakAll();
