/**
 * 🔑 Dependency Inversion Principle (DIP) Cheat Sheet
 *
 * 📌 Core Idea
 * - High-level modules (business logic) should not depend on low-level modules (DB, SDKs).
 * - Both should depend on abstractions (interfaces).
 * - Abstractions should not depend on details, details should depend on abstractions.
 *
 * ✅ When to Apply
 * - Service code directly imports/uses DB, cache, or external SDKs.
 * - Changing infra (Mongo → Postgres, Stripe → Razorpay) forces you to edit business logic.
 * - Tests are hard because you can’t mock dependencies easily.
 *
 * 🚫 When to Avoid
 * - In tiny apps/MVPs where speed matters more than flexibility.
 * - When you are sure the dependency will never change (e.g., one fixed DB forever).
 *
 * 🛠 Real-World Backend Examples
 * - Database → UserService depends on IUserRepository, not directly on Mongo/Postgres.
 * - Payments → PaymentService depends on IPaymentProvider, not on Stripe/Razorpay SDK.
 * - Notifications → NotificationService depends on INotifier (Email/SMS/Push).
 * - File Storage → StorageService depends on IStorage (Local, S3, GCP).
 *
 * 🧠 Interview Cues
 * - Q: "What’s the difference between DI and DIP?"
 *   A: DI = technique (how dependencies are provided).
 *      DIP = principle (what kind of dependencies: abstractions, not concretes).
 *   👉 DIP is the rule, DI is one way to follow that rule.
 *
 * ⚖️ Trade-offs
 * ✅ Makes code flexible, testable, and swappable.
 * ✅ Clean separation of business logic and infrastructure.
 * ❌ Adds extra abstraction layers (more boilerplate).
 * ❌ Can be overkill for small projects.
 */
