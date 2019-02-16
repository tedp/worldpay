import { HypermediaResult, PaymentRequest, Instruction, PaymentInstrument, CardExpiryDate, Narrative, Value, Merchant } from '../../model/model';

export const queryResponse: HypermediaResult = {
    _links: {
      'payments:authorize': {
        href: 'https://try.access.worldpay.com/payments/authorizations'
      },
      'tokens:tokens': {
        href: 'https://try.access.worldpay.com/tokens'
      },
      curies: [
        {
          href: 'https://try.access.worldpay.com/rels/payments/{rel}',
          name: 'payments',
          templated: true
        },
        {
          href: 'https://try.access.worldpay.com/rels/tokens/{rel}.json',
          name: 'tokens',
          templated: true
        }
      ]
    }
  };

export const authorizationResponse: HypermediaResult = {
    outcome: 'authorized',
    _links: {
        'payments:cancel': {
            href: 'https://try.access.worldpay.com/payments/authorizations/cancellations/eyJrIjoiazNhYjYzMiJ9'
        },
        'payments:settle': {
            href: 'https://try.access.worldpay.com/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9'
        },
        'payments:partialSettle': {
            href: 'https://try.access.worldpay.com/payments/settlements/partials/eyJrIjoiazNhYjYzMiJ9'
        },
        'payments:events': {
            href: 'https://try.access.worldpay.com/payments/events/eyJrIjoiazNhYjYzMiJ9'
        },
        curies: [
            {
                name: 'payments',
                href: 'https://try.access.worldpay.com/rels/payments/{rel}',
                templated: true
            }
        ]
    }
};

export const cancelResponse: HypermediaResult = {
  _links: {
      'payments:events': {
          href: 'https://try.access.worldpay.com/payments/events/eyJrIjoiazNhYjYzMiJ9'
      },
      curies: [
          {
              name: 'payments',
              href: 'https://try.access.worldpay.com/rels/payments/{rel}',
              templated: true
          }
      ]
  }
};

export const cardExpiryDate: CardExpiryDate = {
  month: 10,
  year: 2022
};

export const paymentInstrument: PaymentInstrument = {
  cardExpiryDate,
  cardHolderName: 'Bob Smith',
  cardNumber: '04584 34589 34534 34534',
  type: 'visa'
};

export const narrative: Narrative = {
  line1: 'Big Components LTD'
};

export const value: Value = {
  amount: 10,
  currency: 'GBP'
};

export const instruction: Instruction = {
  narrative,
  paymentInstrument,
  value
};

export const merchant: Merchant = {
  entity: 'FastPaymentService'
};

export const paymentRequest: PaymentRequest = {
  instruction,
  merchant,
  transactionReference: 'fjsnrj83md983'
};
