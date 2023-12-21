import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HomeComponent } from './component/home/home.component';
import { MovieService } from './service/movie-service.service'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbdRatingTemplate } from './template/rating-template/rating-template';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { TrailersComponent } from './component/trailers/trailers.component';
import { SearchComponent } from './component/search/search.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION,NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { RatesComponent } from './component/rates/rates.component';
import { NgbdModalContent } from './component/rates/rates.component';
import { NgbdRatingModalContent } from './template/rating-modal/rating-modal';
import { ExploreComponent } from './component/explore/explore.component';
import { DocComponent } from './component/doc/doc.component';
import { FullMovieComponent } from './component/full-movie/full-movie.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';




const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "#f5c518",
  bgsOpacity: 0.5,
  bgsPosition: "bottom-right",
  bgsSize: 60,
  bgsType: "ball-spin-clockwise",
  blur: 20,
  fgsColor: "#f5c518",
  fgsPosition: "center-center",
  fgsSize: 70,
  fgsType: "three-strings",
  gap: 24,
  logoPosition: "bottom-right",
  logoSize: 110,
  logoUrl: "spring-angular-movie/assets/images/ticket-alt.svg",
  overlayColor: "rgba(40, 40, 40, 0.8)",
  pbColor: "#f5c518",
  pbDirection: "ltr",
  pbThickness: 3,
  hasProgressBar: true,
  text: "",
  textColor: "#FFFFFF",
  textPosition: "center-center",


};

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    NgbdRatingTemplate,
    TopBarComponent,
    TrailersComponent,
    SearchComponent,
    RatesComponent,
    ExploreComponent,
    DocComponent,
    FullMovieComponent,
    NgbdModalContent,
    NgbdRatingModalContent,
    LoginComponent
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ReactiveFormsModule,
    
  ],
  exports: [ NgbdModalContent,LoginComponent,NgbdRatingModalContent ],
  providers: [MovieService,NgbActiveModal,LoginComponent],
  bootstrap: [AppComponent],
  entryComponents: [TopBarComponent,NgbdModalContent,LoginComponent,NgbdRatingModalContent]
})
export class AppModule { }
