/* eslint-disable no-undef */

const SCREENS = <const>[
  'Accept a payment',
  'More payment scenarios',
  'Create tokens',
  'Set up future payments',
  'inalize payments on the server',
  'Bank Debits',
  'SEPA Direct Debit payment',
  'SEPA Direct Debit set up',
  'Bank redirects',
  'Bancontact Payment',
  'Bancontact SEPA Direct Debit set up',
  'EPS',
  'FPX',
  'giropay',
  'iDEAL payment',
  'iDEAL SEPA Direct Debit set up',
  'Przelewy24',
  'Sofort',
  'Sofort SEPA Direct Debit set up',
  'Buy now pay later',
  'Afterpay and Clearpay',
  'Klarna',
  'Vouchers',
  'Wallets',
  'Alipay',
  'Apple Pay',
  'GrabPay',
  'OXXO',
  'Finalize payments on the server',
  'Recollect a CVC',
  'Card element only',
  'BECS Direct Debit payment',
  'BECS Direct Debit set up',
  'WeChat Pay',
  'ACH payment',
  'ACH setup',
  'Affirm',
  'Collect Bank Account',
  'Financial Connections',
];

class HomeScreen {
  goTo(screen: typeof SCREENS[number]) {
    const button = driver.isAndroid
      ? $(
          `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${screen}"))`
        )
      : $(`~${screen}`);
    button.waitForDisplayed({ timeout: 10000, interval: 500 });
    button.click();
  }
}

export default new HomeScreen();
