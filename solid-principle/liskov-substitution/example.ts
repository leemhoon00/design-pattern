class Cat {
  speak() {
    console.log("meow");
  }
}

class BlackCat extends Cat {
  speak() {
    console.log("black meow");
  }
}

function speak(cat: Cat) {
  cat.speak();
}

// 당연히 잘 동작한다.
let cat: Cat = new Cat();
speak(cat);

// 여기서 Cat객체에 BlackCat객체를 넣어도 잘 동작해야 한다.
cat = new BlackCat();
// black meow를 출력해야 한다.
speak(cat);
