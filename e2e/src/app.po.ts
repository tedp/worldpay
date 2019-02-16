import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  async getTitleText() {
    return element(by.css('mat-card-title')).getText();
  }

  async getSubmitButton(): Promise<ElementFinder> {
    return element(by.css('[type="submit"]'));
  }

  async submitTakePaymentForm() {
    const submitButton = await this.getSubmitButton();
    await submitButton.click();
  }

  async getField(fieldName: string): Promise<ElementFinder> {
    return element(by.css(`[formControlName="${fieldName}"]`));
  }

  async enterInputElementvalue(fieldValue: string, fieldName: string, ) {
    const field: ElementFinder = await this.getField(fieldName);
    field.sendKeys(fieldValue);
  }

  async populateTakePaymentForm() {
    this.enterInputElementvalue('Some narrative', 'narrative');
    this.enterInputElementvalue('GBP', 'currency');
    this.enterInputElementvalue('10.00', 'amount');
    this.enterInputElementvalue('VISA', 'type');
    this.enterInputElementvalue('459445 34534 45345 345345', 'cardNumber');
    this.enterInputElementvalue('1', 'month');
    this.enterInputElementvalue('22', 'year');
    this.enterInputElementvalue('Mr Bill Rogers', 'cardHolderName');
  }
}
