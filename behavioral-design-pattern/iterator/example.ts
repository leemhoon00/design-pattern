// Element 인터페이스
interface Element {
  value: number; // 예시로 숫자 값을 가정
}

// Iterator 인터페이스
export interface Iterator {
  getNext(): Element | null;
  hasMore(): boolean;
}

// ArrayCollection 클래스
class ArrayCollection {
  public elements: Element[] = [];

  addElement(element: Element) {
    this.elements.push(element);
  }

  getForwardIterator(): Iterator {
    return new ForwardIterator(this);
  }

  getReverseIterator(): Iterator {
    return new ReverseIterator(this);
  }
}

class ForwardIterator implements Iterator {
  private collection: ArrayCollection;
  private currentIndex: number = 0;

  constructor(collection: ArrayCollection) {
    this.collection = collection;
  }

  getNext(): Element | null {
    if (this.hasMore()) {
      return this.collection.elements[this.currentIndex++];
    }
    return null;
  }

  hasMore(): boolean {
    return this.currentIndex < this.collection.elements.length;
  }
}

class ReverseIterator implements Iterator {
  private collection: ArrayCollection;
  private currentIndex: number = 0;

  constructor(collection: ArrayCollection) {
    this.collection = collection;
    this.currentIndex = collection.elements.length - 1;
  }

  getNext(): Element | null {
    if (this.hasMore()) {
      return this.collection.elements[this.currentIndex--];
    }
    return null;
  }

  hasMore(): boolean {
    return this.currentIndex >= 0;
  }
}

// 예제 사용
const collection = new ArrayCollection();
collection.addElement({ value: 1 });
collection.addElement({ value: 2 });
collection.addElement({ value: 3 });

const forwardIterator = collection.getForwardIterator();
const reverseIterator = collection.getReverseIterator();

console.log("Forward Traversal:");
while (forwardIterator.hasMore()) {
  const element = forwardIterator.getNext();
  console.log(element?.value);
}

console.log("Reverse Traversal:");
while (reverseIterator.hasMore()) {
  const element = reverseIterator.getNext();
  console.log(element?.value);
}
