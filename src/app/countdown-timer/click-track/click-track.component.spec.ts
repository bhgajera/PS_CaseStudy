import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTrackComponent } from './click-track.component';

describe('ClickTrackComponent', () => {
  let component: ClickTrackComponent;
  let fixture: ComponentFixture<ClickTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
