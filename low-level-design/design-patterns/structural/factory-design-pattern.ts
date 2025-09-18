// Interface segregation principle
export interface INotification {
  send(message: string): void;
}

export class EmailNotification implements INotification {
  send(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}

export class SMSNotification implements INotification {
  send(message: string): void {
    console.log(`Sending SMS with message: ${message}`);
  }
}

// factory pattern
class NotificationFactory {
  // following ocp of solid principle
  static types = {
    email: EmailNotification,
    sms: SMSNotification,
  };

  static create(type: keyof typeof NotificationFactory.types) {
    const notificationClass = NotificationFactory.types[type];

    if (!notificationClass) throw new Error("Unknown type");

    return new notificationClass();
  }
}

const emailNotifier = NotificationFactory.create("email");
emailNotifier.send("Hello via Email!");

const smsNotifier = NotificationFactory.create("sms");
smsNotifier.send("Hello via SMS!");
