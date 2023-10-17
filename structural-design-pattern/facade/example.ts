// 다양한 서브 시스템들 이들은 각자 컴퓨터를 켜고 끄기 위한 복잡한 과정을 가지고 있다.
class CPU {
  start() {
    console.log("CPU is starting...");
  }

  shutdown() {
    console.log("CPU is shutting down...");
  }
}

class Memory {
  load() {
    console.log("Memory is loading data...");
  }

  unload() {
    console.log("Memory is unloading data...");
  }
}

class HardDrive {
  read() {
    console.log("Hard Drive is reading data...");
  }

  write() {
    console.log("Hard Drive is writing data...");
  }
}

// 컴퓨터 파사드는 이러한 복잡한 과정을 단순화 시켜준다.
class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  startComputer() {
    console.log("Computer is starting...");
    this.cpu.start();
    this.memory.load();
    this.hardDrive.read();
    console.log("Computer has started.");
  }

  shutdownComputer() {
    console.log("Computer is shutting down...");
    this.cpu.shutdown();
    this.memory.unload();
    this.hardDrive.write();
    console.log("Computer has shut down.");
  }
}

const computer = new ComputerFacade();

computer.startComputer();

computer.shutdownComputer();
