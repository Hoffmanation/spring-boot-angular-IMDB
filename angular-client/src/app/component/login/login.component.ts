import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery'
import { MovieService } from '../../service/movie-service.service';
import { LoginDetails } from '../../model/LoginDetaild';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent {


  public title = 'angularpopup';
  public showModal: boolean;
  public registerForm: FormGroup;
  public loginForm: FormGroup;
  public regisSubmitted = false;
  public loginSubmitted = false;

  public password: string;
  public confirmPassword: string;
  public loginErrorResponse: string;
  public registrationErrorResponse: string;
  public regisIsActive: boolean = false;
  public loginIsActive: boolean = true;
  public loginDetails: LoginDetails;
  public _isUserLoggedIn: boolean = false;
  public _movieRaterUser: any;
  public usersUrl: any;


  constructor(private router: Router, private formBuilder: FormBuilder, private modalService: NgbModal, public activeModal: NgbActiveModal, public movieService: MovieService) {
    this.usersUrl = environment.baseUrl + ':' + environment.port
  }


  show() {
    this.modalService.open(LoginComponent, { backdropClass: 'light-blue-backdrop' });
    this.showModal = true; // Show-Hide Modal Check

  }


  //Bootstrap Modal Close event
  hide() {
    this.activeModal.close();
    this.showModal = false;
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, { validator: this.checkPasswords });


    this.loginForm = this.formBuilder.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    if (pass && confirmPass) {
      if (pass != confirmPass) {
        if (!group.controls.confirmPassword.errors) {
          group.controls.confirmPassword.setErrors({});
          group.controls.confirmPassword.errors.match = true
        }
      }
    }
  }

  showLoginForm() {
    this.regisIsActive = false;
    this.loginIsActive = true;
    this.loginErrorResponse = null;
    this.registrationErrorResponse = null;
  }

  showRegistrationForm() {
    this.regisIsActive = true;
    this.loginIsActive = false;
    this.loginErrorResponse = null;
    this.registrationErrorResponse = null;
  }

  // convenience getter for easy access to form fields
  get regiForm() {
    return this.registerForm.controls;
  }

  // convenience getter for easy access to form fields
  get logForm() {
    return this.loginForm.controls;
  }


  onRegisterSubmit() {
    this.loginErrorResponse = null;
    this.registrationErrorResponse = null;
    this.regisSubmitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.regisSubmitted) {
      this.loginDetails = new LoginDetails(this.regiForm.email.value, this.regiForm.password.value, this.regiForm.confirmPassword.value);
      this.movieService.registration(this.loginDetails).subscribe(response => {
        if (response.status == 201) {
          let body = response.body;
          let username = body.substr(0, body.indexOf('@'));
          sessionStorage.setItem('movieRaterUser', username);
          this.hide();
          window.location.href = window.location.origin + '/home';
        }
      }, error => {
        this.registrationErrorResponse = error.error
        console.log(error);
      });
    }

  }

  onLoginSubmit() {
    this.loginErrorResponse = null;
    this.registrationErrorResponse = null;
    this.loginSubmitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginSubmitted) {
      this.loginDetails = new LoginDetails(this.logForm.loginEmail.value, this.logForm.loginPassword.value, "");
      this.movieService.login(this.loginDetails).subscribe(response => {
        if (response.status == 200) {
          let body = response.body;
          let username = body.substr(0, body.indexOf('@'));
          sessionStorage.setItem('movieRaterUser', username);
          this.hide();
          window.location.href = window.location.origin + '/home';
        }
      }, error => {
        this.loginErrorResponse = error.error
        console.log(error);
      });
    }

  }


  isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }
  getMovieRaterUser(): string {
    return this._movieRaterUser
  }



}