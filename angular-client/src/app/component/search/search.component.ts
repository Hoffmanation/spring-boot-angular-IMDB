import { MovieService } from '../../service/movie-service.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Movie } from '../../model/movie';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent implements OnInit {


  public movie: Movie;
  public movieNames: String[];
  public todaysMoviePick: any;
  public todaysMoviePickSrc: any;
  public movieSearch: any ;


  constructor(private movieService: MovieService, private ngxLoader: NgxUiLoaderService,private sanitizer :DomSanitizer) {
    this.movieNames = movieService.getMovieNames();
    this.getMoviePick();
  }

  ngOnInit(): void {
    this.ngxLoader.start();
    $('#searchMovies').hide();
    $('.card-title').hide();
    this.ngxLoader.stop();
  }



  formatter = (result: string) => result;
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? [] : this.movieNames.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


  async getMovieByName(model: string): Promise<String | null> {
    if (typeof this.movie === 'undefined') {
      this.movie = await
        this.movieService.getMovieByName(model)
          .toPromise()
          .then(resp => this.movie = resp);

    }
    return this.todaysMoviePick;
  }

  async getMoviePick(): Promise<Movie> {
    if (typeof this.movie === 'undefined') {
      this.movie = await
        this.movieService.getTodaysMoviePick()
          .toPromise()
          .then(resp => this.movie = resp);

    }

    this.todaysMoviePickSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.videoURL.toString());
    return this.movie;
  }


  searchMovie(model: string) {
    for (let index = 0; index < this.movieNames.length; index++) {
      const movieName = this.movieNames[index];
      if (movieName === model) {
        this.ngxLoader.start();
        this.movieService.getMovieByName(model)
          .subscribe(arg => {
            this.movie = arg;
             this.todaysMoviePickSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.videoURL.toString());
            $('#searchMovies').show();
             $('.card-title').show();
            this.ngxLoader.stop();
          });
      }


    }
  }



  // @ViewChild('youtube') private youtubeElement: ElementRef;
  // @ViewChild('movieinfo') private movieinfoElement: ElementRef;

  // public randerYoutubeIframe(newMovie: Movie) {
  //   this.movie = newMovie;
  //   this.todaysMoviePickSrc = this.movie.videoURL.toString()

  //   const placeholders = this.youtubeElement.nativeElement.querySelectorAll('iframe');
  //   for (let i = 0; i < placeholders.length; i++) {
  //     this.renderer.removeChild(this.youtubeElement.nativeElement, placeholders[i]);
  //   }

  //   this.newYoutubeElement = this.renderer.createElement('iframe')
  //   this.renderer.setAttribute(this.newYoutubeElement, 'style', 'margin-left: 50%;');
  //   this.renderer.setAttribute(this.newYoutubeElement, 'width', '500');
  //   this.renderer.setAttribute(this.newYoutubeElement, 'height', '270');
  //   this.renderer.setAttribute(this.newYoutubeElement, 'src', this.todaysMoviePickSrc.toString());
  //   this.renderer.setAttribute(this.newYoutubeElement, 'frameborder', '0');
  //   this.renderer.setAttribute(this.newYoutubeElement, 'allowfullscreen', '');
  //   this.renderer.insertBefore(this.youtubeElement.nativeElement, this.newYoutubeElement, this.movieinfoElement.nativeElement);
  //   this.cdr.detectChanges();
  // }


}