import { InventoryUpPage } from './app.po';

describe('inventory-up App', () => {
  let page: InventoryUpPage;

  beforeEach(() => {
    page = new InventoryUpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
