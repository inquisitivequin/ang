import { PoatPage } from './app.po';

describe('poat App', () => {
  let page: PoatPage;

  beforeEach(() => {
    page = new PoatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
