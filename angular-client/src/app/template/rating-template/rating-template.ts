import { Component, Input, OnInit } from '@angular/core';
import { Movie} from '../../model/movie';

@Component({
  selector: 'ngbd-rating-template',
  templateUrl: './rating-template.html',
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #f5c518;
    }
    .bad {
      color: #f5c518;
    }
    .filled.bad {
      color: #f5c518;
    }
  `]
})
export class NgbdRatingTemplate implements OnInit{

      @Input()
      movie: Object;
      movieRate: Movie ;
      rate  :String;   
      raters :String

    constructor() {

    }

 ngOnInit() {
      this.movieRate = this.movie['movieRate'] ;
      this.rate = this.movieRate['rate'] ;   
      this.raters = this.movieRate['raters'] ;   
    }
}