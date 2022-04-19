import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWithServiceComponent } from './timer-with-service.component';

describe('TimerWithServiceComponent', () => {
  let component: TimerWithServiceComponent;
  let fixture: ComponentFixture<TimerWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerWithServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
