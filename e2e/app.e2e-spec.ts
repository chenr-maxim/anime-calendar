import { AnimeCalendarPage } from './app.po';

describe('anime-calendar App', () => {
  let page: AnimeCalendarPage;

  beforeEach(() => {
    page = new AnimeCalendarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
