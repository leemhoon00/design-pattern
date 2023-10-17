// 제품과 그 제품을 담는 상자로 구성된 예제

// 제품, 상자는 둘 다 Component 인터페이스를 구현한다.
interface Component {
  getPrice(): number;
}

// 제품은 그 제품의 가격만 반환하면 끝
class Product implements Component {
  constructor(private name: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }
}

// 상자는 그 상자의 패키징가격 + 상자에 담긴 제품 가격으로 구성되는데, 상자 안에 상자가 또 있을 수도 있음
class Box implements Component {
  private items: Component[] = [];

  constructor(private name: string, private packagingCost: number) {}

  addItem(item: Component) {
    this.items.push(item);
  }
  removeItem(item: Component) {
    this.items = this.items.filter((i) => i !== item);
  }

  // 재귀적으로 가격을 얻음
  getPrice(): number {
    return (
      this.packagingCost +
      this.items.reduce((acc, item) => acc + item.getPrice(), 0)
    );
  }
}

const smallProduct = new Product("Small Product", 10);
const smallBox = new Box("Small Box", 1);

smallBox.addItem(smallProduct);

const bigProduct = new Product("Big Product", 100);
const bigBox = new Box("Big Box", 5);

// 상자 안에 상자가 또 있음
bigBox.addItem(bigProduct);
bigBox.addItem(smallBox);

console.log(bigBox.getPrice());
