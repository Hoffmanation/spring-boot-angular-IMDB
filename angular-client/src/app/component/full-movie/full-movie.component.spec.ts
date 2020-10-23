import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMovieComponent } from './full-movie.component';

describe('FullMovieComponent', () => {
  let component: FullMovieComponent;
  let fixture: ComponentFixture<FullMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
