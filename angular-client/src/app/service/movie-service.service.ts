import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs/Subscription';
import { LoginDetails } from '../model/LoginDetaild';

@Injectable()
export class MovieService {

  private usersUrl: string;
  private endpoints: Object;
  public _movieNames: String[];
  public _movieGenres: String[];
  public requestOptions: Object ;

  constructor(private http: HttpClient) {
    this.usersUrl = environment.baseUrl + ':' + environment.port
    this.endpoints = environment.endpoints;
    this.getAllMovieNames();
    this.getAllMovieGenres();
        
     this.requestOptions = {headers: new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Credentials', 'true')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS')
      .append('Access-Control-Allow-Header', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
    , responseType: 'text',observe: 'response',withCredentials: true }

  }

  public registration(loginDetails: LoginDetails): Observable<any> {

    return this.http.post(this.usersUrl + this.endpoints['registration'], loginDetails, this.requestOptions);
  }

  public login(loginDetails: LoginDetails): Observable<any> {
    return this.http.post(this.usersUrl + this.endpoints['login'], loginDetails, this.requestOptions);
  }

  public logout(): Observable<any> {
    return this.http.post(this.usersUrl + this.endpoints['logout'], {}, this.requestOptions);
  }

  public getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.usersUrl + this.endpoints['getAllMovies']);
  }

  public getMovieByName(movieName: string): Observable<Movie> {
    return this.http.get<Movie>(this.usersUrl + this.endpoints['getMovieByName'] + '/' + movieName);
  }

  public getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(this.usersUrl + this.endpoints['getMovieById'] + '/' + movieId);
  }

  public getMoviesByGenre(genre: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.usersUrl + this.endpoints['getMoviesByGenre'] + '/' + genre)
  }

  public getAllMovieNames(): Subscription {
    return this.http.get<String[]>(this.usersUrl + this.endpoints['getAllMovieNames']).
      subscribe(arg => this._movieNames = arg);
  }

  public getAllMovieGenres(): Subscription {
    return this.http.get<String[]>(this.usersUrl + this.endpoints['getAllMovieGenres']).
      subscribe(arg => this._movieGenres = arg);
  }

  public getTodaysMoviePick(): Observable<Movie> {
    return this.http.get<Movie>(this.usersUrl + this.endpoints['getTodaysMoviePick']);
  }

  public getTodaysTrailersPick(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.usersUrl + this.endpoints['getTodaysTrailersPick']);
  }

  getMovieNames(): String[] {
    return this._movieNames;
  }

  getMoviesGenres(): String[] {
    return this._movieGenres;
  }


}
