import {AppPage} from './app.po';

describe('ng-sandbox App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(AppPage.getParagraphText()).toEqual('Welcome to ms!');
  });
});
