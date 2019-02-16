export interface HypermediaLink {
  href: string;
}
export interface HypermediaCuries {
  href: string;
  name: string;
  templated: boolean;
}
export class HypermediaResult {
  outcome?: string;
  _links: {
    [s: string]: HypermediaLink | HypermediaCuries[]
  };
}

export interface Merchant {
  entity: string;
}

export interface Narrative {
  line1: string;
}

export interface Value {
  currency: string;
  amount: number;
}

export interface CardExpiryDate {
  month: number;
  year: number;
}

export interface PaymentInstrument {
  type: string;
  cardNumber: string;
  cardHolderName: string;
  cardExpiryDate: CardExpiryDate;
}

export interface Instruction {
  narrative: Narrative;
  value: Value;
  paymentInstrument: PaymentInstrument;
}

export interface PaymentRequest {
  transactionReference: string;
  merchant: Merchant;
  instruction: Instruction;
}
