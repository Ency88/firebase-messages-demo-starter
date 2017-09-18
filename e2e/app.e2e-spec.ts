import { FirebaseMessagesDemoPage } from './app.po';

describe('firebase-messages-demo App', () => {
  let page: FirebaseMessagesDemoPage;

  beforeEach(() => {
    page = new FirebaseMessagesDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
