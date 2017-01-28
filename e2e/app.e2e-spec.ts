import { AngularAnetPage } from './app.po';

describe('angular-anet App', function() {
  let page: AngularAnetPage;

  beforeEach(() => {
    page = new AngularAnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
