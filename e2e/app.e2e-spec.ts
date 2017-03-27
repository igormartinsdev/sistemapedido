import { SistemapedidoPage } from './app.po';

describe('sistemapedido App', () => {
  let page: SistemapedidoPage;

  beforeEach(() => {
    page = new SistemapedidoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
