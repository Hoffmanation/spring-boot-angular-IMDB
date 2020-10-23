import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Movie } from '../../model/movie';
import { Rete } from '../../model/rate';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../../service/movie-service.service'


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
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

export class TopBarComponent implements OnInit {

  private usersUrl: string;
  private endpoints: Object;
  public todaysMoviePick: String;
  public todaysMoviePickSrc: Object;
  public movie: Movie;
  public movieRate: Rete;
  private movieService: MovieService;
  public rateFortopbar: any;
  public imageUrl: any;
  public movieName: String;
  public raters: any;
  public dataOfrelease: any;
  public genre: any;



  constructor(private sanitizer: DomSanitizer, private http: HttpClient, movieService: MovieService) {
    this.movieService = movieService;
    this.sanitizer = sanitizer;
    this.usersUrl = environment.baseUrl + ':' + environment.port
    this.endpoints = environment.endpoints;
    this.getMoviePick();
  }




  ngOnInit() {



  }

  async getMoviePick(): Promise<String | null> {
    if (typeof this.movie === 'undefined') {
      this.movie = await
        this.movieService.getTodaysMoviePick()
          .toPromise()
          .then(resp => this.movie = resp);

    }
    this.todaysMoviePickSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.videoURL.toString());
    this.imageUrl = this.movie.imageURL;
    this.raters = this.movie.movieRate.raters
    this.rateFortopbar = this.movie.movieRate.rate
    this.movieName = this.movie.name
    this.dataOfrelease = this.movie.dataOfrelease ;
    this.genre = this.movie.genre ;
    return this.todaysMoviePick;
  }


}
