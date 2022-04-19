import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerTimeStampComponent } from './timer-time-stamp.component';

describe('TimerTimeStampComponent', () => {
  let component: TimerTimeStampComponent;
  let fixture: ComponentFixture<TimerTimeStampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerTimeStampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTimeStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
