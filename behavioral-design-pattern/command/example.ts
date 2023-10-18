// Command 인터페이스
interface Command {
  execute(): void;
}

// Receiver 클래스
class CommandReceiver {
  create(): void {
    console.log("Creating a document");
  }

  read(): string {
    return "Reading a document";
  }

  update(): void {
    console.log("Updating a document");
  }

  delete(): void {
    console.log("Deleting a document");
  }
}

// Concrete Command 클래스
class CreateCommand implements Command {
  private receiver: CommandReceiver;

  constructor(receiver: CommandReceiver) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.create();
  }
}

class ReadCommand implements Command {
  private receiver: CommandReceiver;

  constructor(receiver: CommandReceiver) {
    this.receiver = receiver;
  }

  execute(): string {
    return this.receiver.read();
  }
}

class UpdateCommand implements Command {
  private receiver: CommandReceiver;

  constructor(receiver: CommandReceiver) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.update();
  }
}

class DeleteCommand implements Command {
  private receiver: CommandReceiver;

  constructor(receiver: CommandReceiver) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.delete();
  }
}

// 클라이언트 코드
const receiver = new CommandReceiver();

const createCommand = new CreateCommand(receiver);
const readCommand = new ReadCommand(receiver);
const updateCommand = new UpdateCommand(receiver);
const deleteCommand = new DeleteCommand(receiver);

createCommand.execute();
console.log(readCommand.execute());
updateCommand.execute();
deleteCommand.execute();
