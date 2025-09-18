export abstract class PaymentGateway {
  abstract pay(amount: number): void;
  abstract refund(transactionId: string): void;
}

export class StripePaymentGateway extends PaymentGateway {  
    pay(amount: number): void {
        console.log(`Processing payment of $${amount} through Stripe.`);
    }

    refund(transactionId: string): void {
        console.log(`Refunding transaction ${transactionId} through Stripe.`);
    }
}

export class PayPalPaymentGateway extends PaymentGateway {  
    pay(amount: number): void {
        console.log(`Processing payment of $${amount} through PayPal.`);
    }

    refund(transactionId: string): void {
        console.log(`Refunding transaction ${transactionId} through PayPal.`);
    }   
}

// anti lsp to lsp

export abstract class LSPPaymentGateway {
  abstract pay(amount: number): void;
}

export abstract class RefundablePaymentGateway extends LSPPaymentGateway {
  abstract refund(transactionId: string): void;
  abstract pay(amount: number): void;
}

export abstract class NonRefundPaymentGateway extends LSPPaymentGateway {
  abstract pay(amount: number): void;
}


// stripe.gateway.ts
export class StripeGateway extends RefundablePaymentGateway {
  pay(amount: number) {
    console.log(`Stripe: paying ${amount}`);
  }
  refund(transactionId: string) {
    console.log(`Stripe: refunding ${transactionId}`);
  }
}

// razorpay.gateway.ts
export class RazorpayGateway extends NonRefundPaymentGateway {
  pay(amount: number) {
    console.log(`Razorpay: paying ${amount}`);
  }
}

// service.ts
function processRefund(gateway: RefundablePaymentGateway, txId: string) {
  gateway.refund(txId); // ✅ only works with gateways that support it
}
