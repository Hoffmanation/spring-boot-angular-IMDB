import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie-service.service'
import { Movie } from '../../model/movie';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMovies: Movie[];
  collectionSize: number;
  pageSize: number;
  page: number;
  constructor(public movieService: MovieService, private ngxLoader: NgxUiLoaderService) {
    this.ngxLoader.start();
    console.log('%c Geo-Resolver Version: 2.3', 'color: #70c7be; font-size: 24px;');
  }
  
  ngOnInit(): void {

    this.movieService.getAllMovies().subscribe(response => {
      this.allMovies = response;
      this.collectionSize = this.allMovies.length;
      this.pageSize = this.collectionSize / 10;
      this.page = 1;
      this.ngxLoader.stop();
      $("ngb-pagination").click(function () {
      $('html, body').animate({scrollTop:0}, 'slow');
    });
    });
  }


}
