import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLoggerComponent } from './timer-logger.component';

describe('TimerLoggerComponent', () => {
  let component: TimerLoggerComponent;
  let fixture: ComponentFixture<TimerLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
