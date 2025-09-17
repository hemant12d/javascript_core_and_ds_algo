/**
 * 🔎 OCP (Open–Closed Principle) Decision Checklist
 *
 * ✅ Apply OCP if:
 *  1. The code often changes by ADDING new types (payment methods, notifiers, parsers).
 *  2. Adding a new feature would require editing stable/old code.
 *  3. This module acts like a PLUGIN system (payments, auth providers, integrations).
 *  4. Business already confirmed multiple variants will come soon.
 *
 * ⚠️ Be cautious if:
 *  - The logic is simple and unlikely to change.
 *  - You’re building an MVP (optimize for speed, not abstractions).
 *  - Performance-critical path (abstractions may add overhead).
 *
 * 🚫 Avoid OCP if:
 *  - YAGNI (You Ain’t Gonna Need It) → only 1 option forever.
 *  - Change is about REWRITING logic, not ADDING variants (e.g., tax formulas).
 *  - Abstraction adds more complexity than value.
 *
 * 📌 Rule of Thumb:
 *  - If you see a big `if/else` or `switch` checking "type" → consider OCP.
 *  - If you see stable core + volatile edges → OCP helps.
 *  - Otherwise, keep it simple and refactor later if patterns emerge.
 */


// Anti OCP
class PaymentProcessor {
  process(paymentType, amount) {
    if (paymentType === "paypal") {
      console.log(`Processing PayPal payment of $${amount}`);
    } else if (paymentType === "stripe") {
      console.log(`Processing Stripe payment of $${amount}`);
    } else if (paymentType === "razorpay") {
      console.log(`Processing Razorpay payment of $${amount}`);
    } else if (paymentType === "square") {
      console.log(`Processing Square payment of $${amount}`);
    } else {
      throw new Error("Unsupported payment type");
    }
  }
}

const processor = new PaymentProcessor();
processor.process("paypal", 100);

// anti OCP to OCP

class PaymentTransaction {
  process(amount) {
    console.log(`Processing generic payment of $${amount}`);
  }
}

class GetPspInstance {
  constructor(paymentServiceProvider) {
    this.paymentPsp = paymentServiceProvider;
  }

  process(amount) {
    this.paymentPsp.process(amount);
  }
}

class PayPalTransaction extends PaymentTransaction {
  process(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

class StripeTransaction extends PaymentTransaction {
  process(amount) {
    console.log(`Processing Stripe payment of $${amount}`);
  }
}

class RazorpayTransaction extends PaymentTransaction {
  process(amount) {
    console.log(`Processing Razorpay payment of $${amount}`);
  }
}

class SquareTransaction extends PaymentTransaction {
  process(amount) {
    console.log(`Processing Square payment of $${amount}`);
  }
}

const paymentIntent = new PayPalTransaction();
paymentIntent.process(200);

const anotherPaymentIntent = new StripeTransaction();
anotherPaymentIntent.process(300);

const yetAnotherPaymentIntent = new RazorpayTransaction();
yetAnotherPaymentIntent.process(400);

// More generic
const squarePaymentIntent = new GetPspInstance(new SquareTransaction());
squarePaymentIntent.process(500);


// more example
class ReqRateLimiter {
  check(userId) {
    throw new Error("check() must be implemented");
  }
}

class MemoryLimiter extends ReqRateLimiter {
  check(userId) {
    console.log(`Checking in-memory limit for ${userId}`);
  }
}

class RedisLimiter extends ReqRateLimiter {
  check(userId) {
    console.log(`Checking redis limit for ${userId}`);
  }
}

class RateLimiterService {
  constructor(strategy) {
    this.strategy = strategy;
  }

  limit(userId) {
    this.strategy.check(userId);
  }
}

// usage
const limiter = new RateLimiterService(new RedisLimiter());
limiter.limit("user123");


// Base interface
class LogSink {
  write(message) {
    throw new Error("write() must be implemented");
  }
}

// File Logger
class FileSink extends LogSink {
  write(message) {
    console.log(`Writing to file: ${message}`);
    // fs.appendFileSync("app.log", message + "\n");
  }
}

// Database Logger
class DatabaseSink extends LogSink {
  write(message) {
    console.log(`Inserting into DB: ${message}`);
    // db.insert("logs", { message });
  }
}

// ELK Logger
class ElkSink extends LogSink {
  write(message) {
    console.log(`Sending to ELK: ${message}`);
    // elkClient.send({ message });
  }
}

// Datadog Logger
class DatadogSink extends LogSink {
  write(message) {
    console.log(`Pushing to Datadog: ${message}`);
    // datadog.send(message);
  }
}

// Logger Service
class Logger {
  constructor(sinks = []) {
    this.sinks = sinks;
  }

  log(message) {
    this.sinks.forEach(sink => sink.write(message));
  }
}

// Usage
const logger = new Logger([new FileSink(), new ElkSink()]);
logger.log("User logged in successfully");
