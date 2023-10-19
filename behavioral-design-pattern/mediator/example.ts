// Mediator 인터페이스
interface Mediator {
  notify(sender: Component, event: string): void;
}

// Component 인터페이스
interface Component {
  setMediator(mediator: Mediator): void;
  send(event: string): void;
  receive(event: string): void;
}

// 구체적인 Component 클래스 - Checkbox
class Checkbox implements Component {
  private mediator: Mediator;

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  send(event: string) {
    console.log(`Checkbox sends: ${event}`);
    this.mediator.notify(this, event);
  }

  receive(event: string) {
    console.log(`Checkbox received: ${event}`);
  }
}

// 구체적인 Component 클래스 - Text Field
class TextField implements Component {
  private mediator: Mediator;

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  send(event: string) {
    console.log(`Text Field sends: ${event}`);
    this.mediator.notify(this, event);
  }

  receive(event: string) {
    console.log(`Text Field received: ${event}`);
  }
}

// 구체적인 Mediator 클래스 - Dialog
class Dialog implements Mediator {
  private checkbox: Checkbox;
  private textField: TextField;

  constructor(checkbox: Checkbox, textField: TextField) {
    this.checkbox = checkbox;
    this.textField = textField;

    this.checkbox.setMediator(this);
    this.textField.setMediator(this);
  }

  notify(sender: Component, event: string) {
    if (sender === this.checkbox && event === "CheckboxChecked") {
      console.log(
        "Dialog handles CheckboxChecked event by showing the text field."
      );
      this.textField.send("TextFieldVisible");
    } else if (sender === this.textField && event === "TextFieldValueChanged") {
      console.log(
        "Dialog handles TextFieldValueChanged event by validating the input."
      );
    }
  }
}

// 예제 사용
const checkbox = new Checkbox();
const textField = new TextField();
const dialog = new Dialog(checkbox, textField);

checkbox.send("CheckboxChecked");
textField.send("TextFieldValueChanged");
