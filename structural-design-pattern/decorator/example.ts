interface Notifier {
  send(message: string): void;
}

// 기본이 되는 Notifier 클래스
class EmailNotifier implements Notifier {
  constructor(private emails: string[]) {}

  send(message: string): void {
    console.log(`Sending email to ${this.emails}: ${message}`);
  }
}

// 생성자의 인자로 notifier를 받는다.
// 이로 인해 중첩된 Notifider 객체를 만들 수 있음
class SMSDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  // 여기서 구체적인 본인만의 로직을 구현한 다음, notifier.send()를 호출하여 다음 알림 서비스를 호출한다.
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
    this.notifier.send(message);
  }
}

class FacebookDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  send(message: string): void {
    console.log(`Sending Facebook message: ${message}`);
    this.notifier.send(message);
  }
}

class SlackDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  send(message: string): void {
    console.log(`Sending Slack message: ${message}`);
    this.notifier.send(message);
  }
}

const emailNotifier = new EmailNotifier([
  "user1@example.com",
  "user2@example.com",
]);

// 중첩된 Notifier 객체를 만들 수 있음
const combinedNotifier = new SlackDecorator(
  new FacebookDecorator(new SMSDecorator(emailNotifier))
);

combinedNotifier.send("Important message: House is on fire!");
