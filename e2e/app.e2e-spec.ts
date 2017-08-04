import { SpeedywordsUiPage } from './app.po';

describe('speedywords-ui App', () => {
  let page: SpeedywordsUiPage;

  beforeEach(() => {
    page = new SpeedywordsUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
