class Animal {
  constructor(public name: string) {}
  accept(visitor: AnimalVisitor) {}
}

interface AnimalVisitor {
  catVisit(cat: Cat);
  dogVisit(dog: Dog);
}

class SpeakVisitor implements AnimalVisitor {
  catVisit(cat: Cat) {
    console.log("meow");
  }
  dogVisit(dog: Dog) {
    console.log("bark");
  }
}

class NameVisitor implements AnimalVisitor {
  catVisit(cat: Cat) {
    console.log(cat.name);
  }
  dogVisit(dog: Dog) {
    console.log(dog.name);
  }
}

class Cat extends Animal {
  accept(visitor: AnimalVisitor) {
    visitor.catVisit(this);
  }
}
class Dog extends Animal {
  accept(visitor: AnimalVisitor) {
    visitor.dogVisit(this);
  }
}

const baduk = new Dog("baduk");
const kitty = new Cat("kitty");

baduk.accept(new SpeakVisitor());
kitty.accept(new SpeakVisitor());

baduk.accept(new NameVisitor());
kitty.accept(new NameVisitor());
