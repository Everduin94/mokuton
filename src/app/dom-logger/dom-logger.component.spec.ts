import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomLoggerComponent } from './dom-logger.component';

describe('DivLoggerComponent', () => {
  let component: DomLoggerComponent;
  let fixture: ComponentFixture<DomLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`container should exist`, () => {
    const fixture = TestBed.createComponent(DomLoggerComponent);
    const app: DomLoggerComponent = fixture.debugElement.componentInstance;
    expect(app.container).toBeTruthy();
  });

  it(`should increment test variable when clicked`, () => {
    const fixture = TestBed.createComponent(DomLoggerComponent);
    const app: DomLoggerComponent = fixture.debugElement.componentInstance;
    app.clickMe();
    expect(app.varToFollow).toBe(1);
  });
});
