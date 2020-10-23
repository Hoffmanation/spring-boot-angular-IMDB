import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie-service.service'
import { Movie } from '../../model/movie';
import { NgxUiLoaderService} from 'ngx-ui-loader';  

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})
export class TrailersComponent implements OnInit {
  allMovies: Movie[]

  constructor(public movieService: MovieService,private ngxService: NgxUiLoaderService) {
    this.ngxService.start();
  }

  ngOnInit(): void {
    this.movieService.getTodaysTrailersPick().subscribe(response => {
      this.allMovies = response;
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 3000);
    });
  }


}
