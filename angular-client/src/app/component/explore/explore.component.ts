import { Component, OnInit, OnDestroy, ɵelementEventFullName } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../service/movie-service.service';
import { Movie } from '../../model/movie';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  private movie: Movie;
  public allMovies: Movie[] = [];
  public movieGenres: String[];

  constructor(private route: ActivatedRoute, private movieService: MovieService, private sanitizer: DomSanitizer, private ngxService: NgxUiLoaderService) {
    this.ngxService.start();
    this.movieGenres = this.movieService.getMoviesGenres();
    console.log(this.movieGenres);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (Object.keys(params).length != 0) {
        this.id = + params['id'];
        this.getSingleMovie(this.id);
      }
      else {
        this.getAllMovie();
      }

      setTimeout(() => {
        this.ngxService.stop();
      }, 3000);

    });
  }

  async getSingleMovie(id: number): Promise<Movie[] | null> {

    if (typeof this.movie === 'undefined') {
      this.movie = await

        this.movieService.getMovieById(id)
          .toPromise()
          .then(resp => this.movie = resp);


    }
    this.allMovies.push(this.movie);
    this.movie.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.videoURL.toString());
    return this.allMovies;
  }

  async getAllMovie(): Promise<Movie[] | null> {
    if (this.allMovies.length === 0) {
      this.allMovies = await

        this.movieService.getTodaysTrailersPick()
          .toPromise()
          .then(resp => this.allMovies = resp);

    }

    this.allMovies.forEach(thismovie => {
      thismovie.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(thismovie.videoURL.toString());
    });

    return this.allMovies;
  }

  async getMoviesByGenre(event: any) {
    let genre = event.currentTarget.outerText;


    this.allMovies = await

      this.movieService.getMoviesByGenre(genre)
        .toPromise()
        .then(resp => this.allMovies = resp);


    this.allMovies.forEach(thismovie => {
      thismovie.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(thismovie.videoURL.toString());
    });

    setTimeout(() => {
      this.ngxService.stop();
    }, 3000);

    return this.allMovies;
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
