// 원본 객체
class Sheep {
  constructor(private name: string, private category: string) {}

  // 객체를 복제하는 메서드
  clone(): Sheep {
    return new Sheep(this.name, this.category);
  }
}

// 원본 객체 생성
const originalSheep = new Sheep("Dolly", "Domestic");

// 원본을 복제하여 새로운 객체 생성
const clonedSheep1 = originalSheep.clone();
