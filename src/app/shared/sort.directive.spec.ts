import { TestBed } from '@angular/core/testing';
import { SortDirective } from './sort.directive';

describe('SortDirective', () => {
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[SortDirective]
    })
  })
  xit('should create an instance', () => {
    const directive = new SortDirective();
     expect(directive).toBeTruthy();
  });
});
