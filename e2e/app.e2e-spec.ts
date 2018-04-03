import { RockyOutletPage } from './app.po';

describe('rocky-outlet App', () => {
  let page: RockyOutletPage;

  beforeEach(() => {
    page = new RockyOutletPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
