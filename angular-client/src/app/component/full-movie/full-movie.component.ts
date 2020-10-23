import { Component, Renderer2, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { Movie } from '../../model/movie'
import { DomSanitizer } from '@angular/platform-browser';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-full-movie',
  templateUrl: './full-movie.component.html',
  styleUrls: ['./full-movie.component.css']
})


export class FullMovieComponent implements OnInit {

  @Input()
  public movie: Movie;
  @Input()
  public todaysMoviePickSrc: string;



  constructor(private ngxService: NgxUiLoaderService) {
      this.ngxService.start();

  }

  ngOnInit() {
  }








}