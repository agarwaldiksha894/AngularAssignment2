import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicdivComponent } from './dynamicdiv.component';

describe('DynamicdivComponent', () => {
  let component: DynamicdivComponent;
  let fixture: ComponentFixture<DynamicdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicdivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
