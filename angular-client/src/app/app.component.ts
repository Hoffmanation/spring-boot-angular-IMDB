import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MovieService } from './service/movie-service.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movie-Rater';
  public movieRaterUser: string;
  public isUserLoggedin: boolean = false;


  constructor(private router: Router, public loginComponent: LoginComponent) {
    this.movieRaterUser = sessionStorage.getItem('movieRaterUser');
    this.isUserLoggedin = !this.movieRaterUser ? false : true;
  }

  ngOnInit(): void {
    this.movieRaterUser = sessionStorage.getItem('movieRaterUser');
    this.isUserLoggedin = !this.movieRaterUser ? false : true;
    this.router.navigate(['/home']);
  }

  sendToLogin() {
    this.loginComponent.show();
  }

}
