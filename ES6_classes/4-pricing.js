import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullCurrency() {
    return `${Currency._name} (${Currency._code})`;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}