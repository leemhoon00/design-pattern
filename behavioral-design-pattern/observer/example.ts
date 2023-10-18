interface Observer {
  update(): void;
}

class Cat implements Observer {
  update() {
    console.log("meow");
  }
}

class Dog implements Observer {
  update() {
    console.log("woof");
  }
}

class Owner {
  private animals: Observer[] = [];

  register(animal: Observer) {
    this.animals.push(animal);
  }

  notify() {
    this.animals.forEach((animal) => animal.update());
  }
}

const owner = new Owner();
owner.register(new Cat());
owner.register(new Dog());

owner.notify();
