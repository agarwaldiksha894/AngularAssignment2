import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimersubjectComponent } from './timersubject.component';

describe('TimersubjectComponent', () => {
  let component: TimersubjectComponent;
  let fixture: ComponentFixture<TimersubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimersubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimersubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
