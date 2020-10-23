import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, ElementRef, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../service/movie-service.service';
import { Movie } from '../../model/movie';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as $ from 'jquery'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../component/login/login.component';
import { NgbdRatingModalContent } from '../../template/rating-modal/rating-modal';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{_modelTopic}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div style="display: grid;" class="modal-body">
      <p>{{_modelBody}}</p>
      <button type="button" class="btn btn-outline-dark" (click)="sendToLogin()">Login</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {

  public _modelTopic: string = "This is the topic";
  public _modelBody: string = "This is the body";

  constructor(public activeModal: NgbActiveModal, public login: LoginComponent) { }

  public sendToLogin() {
    this.activeModal.close();
    this.login.show();
  }

  public get ModelTopic(): string {
    return this._modelTopic;
  }

  public set ModelTopic(newTopic: string) {
    this._modelTopic = newTopic;
  }

}


@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RatesComponent implements OnInit, OnDestroy {
  public id: number;
  public sub: any;
  public movie: Movie;
  public closeResult: string;
  public isUserLoggedin: boolean;
  public badStars: Number;
  public topic: string;



  @ViewChild('content') private loginModal: any;

  constructor(private modalService: NgbModal, private route: ActivatedRoute,
    private movieService: MovieService,
    private ngxService: NgxUiLoaderService, public activeModal: NgbActiveModal, private ref: ChangeDetectorRef) {
    this.isUserLoggedin = sessionStorage.getItem('movieRaterUser') ? true : false;
  }


  ngOnInit() {
    $('#mainDiv').hide();
    this.ngxService.start();
    this.sub = this.route.params.subscribe(params => {
      if (Object.keys(params).length != 0) {
        this.id = + params['id'];
        this.movieService.getMovieById(this.id).subscribe(response => {
          this.movie = response;
          this.topic = 'Rate Movies';
          this.badStars = this.isUserLoggedin ? 0 : this.movie.movieRate.rate;
          this.ngxService.stop();
          $('#mainDiv').show();
        })
      }
      else {
        this.sub = this.movieService.getTodaysMoviePick().subscribe(response => {
          this.movie = response;
          this.badStars = this.isUserLoggedin ? 0 : this.movie.movieRate.rate;
          this.topic = 'Rate Randome Movies';
          this.ngxService.stop();
          $('#mainDiv').show();
        });
      }
    });
  }

  rateMovie(movie) {

    setTimeout(() => {
      if (this.isUserLoggedin) {
        const modalRef = this.modalService.open(NgbdRatingModalContent, { backdropClass: 'light-blue-backdrop' });
        modalRef.componentInstance.ModelTopic = 'Thank you for rating this movie';
        modalRef.componentInstance._modelBody = 'You gave ' + movie.name + ' ' +movie.movieRate.rate+ ' stars';
        this.ref.detectChanges();
      }

      else {
        const modalRef = this.modalService.open(NgbdModalContent, { backdropClass: 'light-blue-backdrop' });
        modalRef.componentInstance.ModelTopic = 'Please login first.';
        modalRef.componentInstance._modelBody = 'In order to rate movies please login first';
        this.ref.detectChanges();
      }

    }, 100);



  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
