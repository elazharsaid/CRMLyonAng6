import { PageNotfoundModule } from './page-notfound.module';

describe('PageNotfoundModule', () => {
  let pageNotfoundModule: PageNotfoundModule;

  beforeEach(() => {
    pageNotfoundModule = new PageNotfoundModule();
  });

  it('should create an instance', () => {
    expect(pageNotfoundModule).toBeTruthy();
  });
});
