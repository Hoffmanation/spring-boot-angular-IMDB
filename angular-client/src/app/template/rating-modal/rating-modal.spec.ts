import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdRatingModalContent } from './rating-modal';

describe('RatingTemplateComponent', () => {
  let component: NgbdRatingModalContent;
  let fixture: ComponentFixture<NgbdRatingModalContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdRatingModalContent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdRatingModalContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
