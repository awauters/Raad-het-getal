import { TestBed } from '@angular/core/testing';
import { appComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        appComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(appComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'first-app'`, () => {
    const fixture = TestBed.createComponent(appComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('first-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(appComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('first-app app is running!');
  });
});
