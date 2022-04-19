import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerClickTrackComponent } from './timer-click-track.component';

describe('TimerClickTrackComponent', () => {
  let component: TimerClickTrackComponent;
  let fixture: ComponentFixture<TimerClickTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerClickTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerClickTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
