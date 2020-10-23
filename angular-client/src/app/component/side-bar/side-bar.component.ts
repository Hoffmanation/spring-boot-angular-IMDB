import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../service/movie-service.service';
import { LoginComponent } from '../login/login.component';
import { NgbdModalContent } from '../rates/rates.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public usersUrl: any;

  constructor(private route: ActivatedRoute, private router: Router, public movieService: MovieService, private modalService: NgbModal) {
    this.usersUrl = environment.baseUrl + ':' + environment.port
  }


  ngOnInit() {
  }


  routTo(template: string) {
    this.router.navigate(['/' + template]);
  }

  logout() {
    this.movieService.logout().subscribe(response => {
      if (response.status == 200)
        sessionStorage.removeItem('movieRaterUser');
      window.location.href = window.location.origin + '/home';
    },
      error => {
        let modalRef = this.modalService.open(NgbdModalContent, { backdropClass: 'light-blue-backdrop' });
        modalRef.componentInstance.ModelTopic = 'Please login first.';
        modalRef.componentInstance._modelBody = 'In order to logout you need to login first';
      }
    );
  }

}
