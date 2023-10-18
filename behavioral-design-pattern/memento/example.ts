interface Memento {
  getName(): string;
  getSnapshotDate(): Date;
  getText(): string;
}

// Originator 클래스
class Editor {
  private text: string;

  constructor(private name: string) {
    this.text = "";
  }

  // 현재 상태를 Memento로 저장
  makeSnapshot(): Memento {
    return new Snapshot(this.name, this.text);
  }

  // Memento로부터 상태를 복원
  restore(memento: Memento) {
    this.text = memento.getText();
  }

  // 텍스트를 편집
  editText(newText: string) {
    this.text = newText;
  }

  // 현재 텍스트 출력
  displayText() {
    console.log("Current Text: " + this.text);
  }
}

// 여기선 억지로 Refactoring Guru 사이트의 예제를 구현하느라 Memento와 Snapshot을 분리했지만
// 아마 그냥 Snapshot 클래스 하나로 구현하는게 자연스러울듯하다.
class Snapshot implements Memento {
  private name: string;
  private text: string;
  private date: Date;

  constructor(name: string, text: string) {
    this.name = name;
    this.text = text;
    this.date = new Date();
  }

  getName(): string {
    return this.name;
  }

  getSnapshotDate(): Date {
    return this.date;
  }

  getText(): string {
    return this.text;
  }
}

// 클라이언트 코드
const editor = new Editor("Document 1");

editor.editText("This is the initial text");
editor.displayText();

// 현재 상태 저장
const snapshot1 = editor.makeSnapshot();

editor.editText("Text after editing");
editor.displayText();

// 상태 복원
editor.restore(snapshot1);
editor.displayText();
