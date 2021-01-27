import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DomLoggerComponent } from './dom-logger/dom-logger.component';
import { DoughnutChartComponent } from './chartcomponents/doughnut-chart/doughnut-chart.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DomLoggerComponent,
        DoughnutChartComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mokuton'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mokuton');
  });
});
