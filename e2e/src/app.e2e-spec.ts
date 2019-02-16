import { AppPage } from './app.po';
import { browser, logging, ElementFinder } from 'protractor';

describe('Worldpay app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title for take payment view', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Payment instruction');
  });

  it('should enter payment details', async () => {
    page.populateTakePaymentForm();

    const button: ElementFinder = await page.getSubmitButton();
    expect(button.isEnabled).toBeTruthy();
  });

  it('should submit the form and navigate to the confirm payment view', async done => {
    await page.submitTakePaymentForm();

    expect(page.getTitleText()).toEqual('Payment confirmation');
    done();
  });

// More tests should be added here to test further pages

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
