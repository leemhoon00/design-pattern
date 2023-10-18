class Animal {
  constructor(protected name: string, protected age: number) {}

  show(dna: string) {
    console.log(`Name: ${this.name} Age: ${this.age} DNA: ${dna}`);
  }
}

class AnimalFactory {
  private static readonly DNA_Table: { [key: string]: string } = {};

  static getDNA(animalType: string): string {
    if (!AnimalFactory.DNA_Table[animalType]) {
      throw new Error("DNA not found");
    }
    return AnimalFactory.DNA_Table[animalType];
  }

  static addDNA(animalType: string, dna: string) {
    AnimalFactory.DNA_Table[animalType] = dna;
  }
}

AnimalFactory.addDNA("dog", "dog DNA");
AnimalFactory.addDNA("cat", "cat DNA");

const dog = new Animal("baduk", 1);
const cat = new Animal("kitty", 2);

dog.show(AnimalFactory.getDNA("dog"));
cat.show(AnimalFactory.getDNA("cat"));
