// Color와 Shape의 인터페이스를 따로 정의
interface Color {
  getColor(): string;
}
interface Shape {
  getShape(): string;
}

// Color와 Shape는 각자 따로 확장될 수 있다.
class Red implements Color {
  getColor(): string {
    return "red";
  }
}
class Circle implements Shape {
  getShape(): string {
    return "circle";
  }
}

// 각자 따로 확장되고 있는 각각의 인터페이스들을 중간에 추상클래스를 두어서 연결
// 색상과 모양을 동시에 가질 수 있게 된다.
abstract class ShapeWithColor {
  constructor(protected color: Color, protected shape: Shape) {}
  abstract draw(): void;
}

// Red Color, Circle Shape를 가지는 구체적인 클래스 정의 가능
class RedCircle extends ShapeWithColor {
  draw(): void {
    console.log(`${this.color.getColor()} ${this.shape.getShape()}`);
  }
}

const redCircle = new RedCircle(new Red(), new Circle());
redCircle.draw();
