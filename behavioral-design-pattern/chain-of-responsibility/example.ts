export type Request = {
  method: string;
  amount: number;
};

class Handler {
  private nextHandler: Handler;
  setNext(handler: Handler) {
    this.nextHandler = handler;
  }

  handle(req: Request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(req);
    }
    console.log("No handler found");
    return null;
  }
}

class CashHandler extends Handler {
  handle(req: Request) {
    if (req.method === "cash") {
      console.log(`Paying ${req.amount} using cash`);
    } else {
      console.log("cashHandler: passing request to next handler");
      super.handle(req);
    }
  }
}

class CreditHandler extends Handler {
  handle(req: Request) {
    if (req.method === "credit") {
      console.log(`Paying ${req.amount} using credit`);
    } else {
      console.log("creditHandler: passing request to next handler");
      super.handle(req);
    }
  }
}

class DebitCardHandler extends Handler {
  handle(req: Request) {
    if (req.method === "debit") {
      console.log(`Paying ${req.amount} using debit`);
    } else {
      console.log("debitCardHandler: passing request to next handler");
      super.handle(req);
    }
  }
}

const cashHandler = new CashHandler();
const creditHandler = new CreditHandler();
const debitCardHandler = new DebitCardHandler();

cashHandler.setNext(creditHandler);
creditHandler.setNext(debitCardHandler);

const payment = { method: "paypal", amount: 100 };
cashHandler.handle(payment);
