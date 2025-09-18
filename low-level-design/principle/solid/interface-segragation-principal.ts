/**
 * 🔑 Interface Segregation Principle (ISP) Cheat Sheet
 *
 * 📌 Core Idea
 * - Clients shouldn’t depend on methods they don’t use.
 * - Prefer many small, focused interfaces over one fat interface.
 * - Keep contracts capability-specific.
 *
 * ✅ When to Apply
 * - Interfaces/classes have 5–10+ methods.
 * - Implementations use dummy/no-op methods (throw new Error("Not supported")).
 * - A client depends on an interface but only uses 1–2 methods.
 * - Interface responsibilities are unclear or mixed.
 *
 * 🚫 When to Avoid
 * - When an interface is already tight and cohesive.
 * - For tiny projects/MVPs where splitting adds noise.
 * - If consumers will always use all methods anyway.
 *
 * 🛠 Real-World Backend Examples
 * - Storage → Uploadable, Downloadable, Streamable, SignedUrlProvider.
 * - Payments → OneTimePayment, SubscriptionPayment, Refundable.
 * - Notifications → Emailable, SMSable, PushNotifiable.
 * - Auth → PasswordAuth, OAuthProvider, ApiKeyAuth.
 * - User Accounts → EditableProfile, Verifiable, Deactivatable.
 *
 * 🧠 Interview Cues
 * - Watch for fat interfaces: too many unrelated methods.
 * - Ask: “Would every implementation need ALL these methods?”
 * - Look for dummy methods in code → strong ISP smell.
 * - Split by capability or responsibility.
 * - Analogy: Instead of one Swiss Army Knife interface, use separate tools.
 *
 * ⚖️ Trade-offs
 * ✅ Improves flexibility & testability.
 * ✅ Reduces coupling (clients only know what they need).
 * ✅ Makes code self-documenting ("implements Emailable").
 * ❌ More interfaces → more boilerplate.
 * ❌ Can over-segment if applied blindly.
 */

// anti isp violation example
export interface NotificationService {
  sendEmail(to: string, message: string): void;
  sendSMS(to: string, message: string): void;
  sendPush(to: string, message: string): void;
  sendPost(to: string, message: string): void;
}

// email.service.ts
export class EmailService implements NotificationService {
  sendEmail(to: string, message: string) {
    console.log(`Email sent to ${to}: ${message}`);
  }

  sendSMS(to: string, message: string) {
    throw new Error("Not supported"); // ❌ ISP violation
  }

  sendPush(to: string, message: string) {
    throw new Error("Not supported"); // ❌ ISP violation
  }

  sendPost(to: string, message: string) {
    throw new Error("Not supported"); // ❌ ISP violation
  }
}

// sms.service.ts
export class SmsService implements NotificationService {
  sendEmail(to: string, message: string) {
    throw new Error("Not supported"); // ❌ ISP violation
  }

  sendSMS(to: string, message: string) {
    console.log(`SMS sent to ${to}: ${message}`);
  }

  sendPush(to: string, message: string) {
    throw new Error("Not supported"); // ❌ ISP violation
  }

  sendPost(to: string, message: string) {
    throw new Error("Not supported"); // ❌ ISP violation
  }
}

// anti isp to isp
export interface EmailNotification {
  sendEmail(to: string, message: string): void;
}

export interface SmsNotification {
  sendSMS(to: string, message: string): void;
}

export interface PushNotification {
  sendPush(to: string, message: string): void;
}

// email.service.ts
export class EmailSer implements EmailNotification {
  sendEmail(to: string, message: string) {
    console.log(`Email sent to ${to}: ${message}`);
  }
}

// sms.service.ts
export class SmsSer implements SmsNotification {
  sendSMS(to: string, message: string) {
    console.log(`SMS sent to ${to}: ${message}`);
  }
}

// push.service.ts
export class PushService implements PushNotification {
  sendPush(to: string, message: string) {
    console.log(`Push sent to ${to}: ${message}`);
  }
}

// all-in-one.service.ts
export class AllNotificationService
  implements EmailNotification, SmsNotification, PushNotification
{
  sendEmail(to: string, message: string) {
    console.log(`Email sent to ${to}`);
  }
  sendSMS(to: string, message: string) {
    console.log(`SMS sent to ${to}`);
  }
  sendPush(to: string, message: string) {
    console.log(`Push sent to ${to}`);
  }
}

/* 
╔══════════════════════════════════════════════╗
║     🔍 Example-II  ║
╚══════════════════════════════════════════════╝
*/

// ❌ Fat interface: forces every implementation to handle ALL methods
interface StorageService {
  upload(file: any): Promise<string>;
  download(fileId: string): Promise<any>;
  generateSignedUrl(fileId: string): Promise<string>;
  stream(fileId: string): any;
  delete(fileId: string): Promise<void>;
}

// good example
interface Uploadable {
  upload(file: any): Promise<string>;
}

interface Downloadable {
  download(fileId: string): Promise<any>;
}

interface Streamable {
  stream(fileId: string): any;
}

interface SignedUrlProvider {
  generateSignedUrl(fileId: string): Promise<string>;
}

interface Deletable {
  delete(fileId: string): Promise<void>;
}

class LocalStorage implements Uploadable, Downloadable, Deletable {
  async upload(file: any) {
    /* ... */
  }
  async download(fileId: string) {
    /* ... */
  }
  async delete(fileId: string) {
    /* ... */
  }
}

class S3Storage
  implements Uploadable, Downloadable, Streamable, SignedUrlProvider, Deletable
{
  async upload(file: any) {
    /* ... */
  }
  async download(fileId: string) {
    /* ... */
  }
  async stream(fileId: string) {
    /* ... */
  }
  async generateSignedUrl(fileId: string) {
    /* ... */
  }
  async delete(fileId: string) {
    /* ... */
  }
}

class GoogleCloud implements Streamable, Deletable {
  async stream(fileId: string) {
    /* ... */
  }

  async delete(fileId: string) {
    /* ... */
  }
}
