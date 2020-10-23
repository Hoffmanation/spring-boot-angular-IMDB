import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdRatingTemplate } from './rating-template';

describe('RatingTemplateComponent', () => {
  let component: NgbdRatingTemplate;
  let fixture: ComponentFixture<NgbdRatingTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdRatingTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdRatingTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
