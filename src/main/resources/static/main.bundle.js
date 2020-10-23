webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_home_home_component__ = __webpack_require__("./src/app/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_trailers_trailers_component__ = __webpack_require__("./src/app/component/trailers/trailers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_search_search_component__ = __webpack_require__("./src/app/component/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_rates_rates_component__ = __webpack_require__("./src/app/component/rates/rates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_explore_explore_component__ = __webpack_require__("./src/app/component/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_doc_doc_component__ = __webpack_require__("./src/app/component/doc/doc.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__component_home_home_component__["a" /* HomeComponent */] },
    { path: 'trailers', component: __WEBPACK_IMPORTED_MODULE_3__component_trailers_trailers_component__["a" /* TrailersComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_4__component_search_search_component__["a" /* SearchComponent */] },
    { path: 'rates', component: __WEBPACK_IMPORTED_MODULE_5__component_rates_rates_component__["b" /* RatesComponent */] },
    { path: 'rates/:id', component: __WEBPACK_IMPORTED_MODULE_5__component_rates_rates_component__["b" /* RatesComponent */] },
    { path: 'explore', component: __WEBPACK_IMPORTED_MODULE_6__component_explore_explore_component__["a" /* ExploreComponent */] },
    { path: 'explore/:id', component: __WEBPACK_IMPORTED_MODULE_6__component_explore_explore_component__["a" /* ExploreComponent */] },
    { path: 'doc', component: __WEBPACK_IMPORTED_MODULE_7__component_doc_doc_component__["a" /* DocComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <header>\n      <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-8 col-md-7 py-4\">\n              <h4 class=\"text-white\">About Movie DB Project</h4>\n              <p class=\"text-muted\">This is a Spring Boot Angular 6 project demonstrating an online database of information related to films </p>\n            </div>\n            <div class=\"col-sm-4 offset-md-1 py-4\">\n              <h4 class=\"text-white\">Contact</h4>\n              <ul class=\"list-unstyled\">\n                <li><a href=\"https://il.linkedin.com/in/oren-hoffman-4884bb127\" class=\"text-white\">Linkedin</a></li>\n                <li><a href=\"https://github.com/hoffmanation/\" class=\"text-white\">Github</a></li>\n                <li><a href = \"mailto: orenhoffman1777@gmail.com\" class=\"text-white\">Email</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"navbar navbar-dark bg-dark box-shadow\">\n        <div class=\"container d-flex justify-content-between\">\n          <a href=\"#\" class=\"navbar-brand d-flex align-items-center\">\n            <i class=\"fa fa-ticket\" aria-hidden=\"true\"></i>\n            <strong style=\"margin-left: 5%;\">Spring-Boot Angular Movie DB</strong>\n          </a>\n          <a *ngIf=\"isUserLoggedin\"  href=\"#\" class=\"navbar-brand d-flex align-items-center\">\n            <strong style=\"margin-left: 20%;\">Welcome {{movieRaterUser}}</strong>\n          </a>\n          <button *ngIf=\"!isUserLoggedin\" type=\"button\" style=\"margin-left: 50%;\" class=\"btn btn-primary\" (click)=\"sendToLogin()\">Login</button>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n        </div>\n      </div>\n    </header>\n  <app-side-bar></app-side-bar>\n  <router-outlet></router-outlet>\n      <footer class=\"text-muted\">\n      <div class=\"container\">\n        <p class=\"float-right\">\n          <a href=\"#navbarHeader\">Back to top</a>\n        </p>\n        <p>For more information about the project or any other issue you can contanct me <a href = \"mailto: orenhoffman1777@gmail.com\">here</a></p>\n        <p>I'm an active member in the <a href=\"https://github.com/hoffmanation/\">open-source </a> community and have participated in various projects.</p>\n        <p>2020 &copy; All rights reserved to <a href=\"https://oren-hoffman.com/\">Oren Hoffman</a>.</p>\n      </div>\n    </footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_login_login_component__ = __webpack_require__("./src/app/component/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, loginComponent) {
        this.router = router;
        this.loginComponent = loginComponent;
        this.title = 'Movie-Rater';
        this.isUserLoggedin = false;
        this.movieRaterUser = sessionStorage.getItem('movieRaterUser');
        this.isUserLoggedin = !this.movieRaterUser ? false : true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.movieRaterUser = sessionStorage.getItem('movieRaterUser');
        this.isUserLoggedin = !this.movieRaterUser ? false : true;
        this.router.navigate(['/home']);
    };
    AppComponent.prototype.sendToLogin = function () {
        this.loginComponent.show();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__component_login_login_component__["a" /* LoginComponent */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_side_bar_side_bar_component__ = __webpack_require__("./src/app/component/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_home_home_component__ = __webpack_require__("./src/app/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_movie_service_service__ = __webpack_require__("./src/app/service/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__template_rating_template_rating_template__ = __webpack_require__("./src/app/template/rating-template/rating-template.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_top_bar_top_bar_component__ = __webpack_require__("./src/app/component/top-bar/top-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_trailers_trailers_component__ = __webpack_require__("./src/app/component/trailers/trailers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_search_search_component__ = __webpack_require__("./src/app/component/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_ui_loader__ = __webpack_require__("./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_rates_rates_component__ = __webpack_require__("./src/app/component/rates/rates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__template_rating_modal_rating_modal__ = __webpack_require__("./src/app/template/rating-modal/rating-modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_explore_explore_component__ = __webpack_require__("./src/app/component/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_doc_doc_component__ = __webpack_require__("./src/app/component/doc/doc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_full_movie_full_movie_component__ = __webpack_require__("./src/app/component/full-movie/full-movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_login_login_component__ = __webpack_require__("./src/app/component/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var ngxUiLoaderConfig = {
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
    logoUrl: "assets/images/ticket-alt.svg",
    overlayColor: "rgba(40, 40, 40, 0.8)",
    pbColor: "#f5c518",
    pbDirection: "ltr",
    pbThickness: 3,
    hasProgressBar: true,
    text: "",
    textColor: "#FFFFFF",
    textPosition: "center-center",
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__template_rating_template_rating_template__["a" /* NgbdRatingTemplate */],
                __WEBPACK_IMPORTED_MODULE_11__component_top_bar_top_bar_component__["a" /* TopBarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_trailers_trailers_component__["a" /* TrailersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_rates_rates_component__["b" /* RatesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_explore_explore_component__["a" /* ExploreComponent */],
                __WEBPACK_IMPORTED_MODULE_18__component_doc_doc_component__["a" /* DocComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_full_movie_full_movie_component__["a" /* FullMovieComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_rates_rates_component__["a" /* NgbdModalContent */],
                __WEBPACK_IMPORTED_MODULE_16__template_rating_modal_rating_modal__["a" /* NgbdRatingModalContent */],
                __WEBPACK_IMPORTED_MODULE_20__component_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_ui_loader__["b" /* NgxUiLoaderRouterModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_ui_loader__["a" /* NgxUiLoaderModule */].forRoot(ngxUiLoaderConfig),
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["e" /* ReactiveFormsModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_15__component_rates_rates_component__["a" /* NgbdModalContent */], __WEBPACK_IMPORTED_MODULE_20__component_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_16__template_rating_modal_rating_modal__["a" /* NgbdRatingModalContent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__service_movie_service_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_20__component_login_login_component__["a" /* LoginComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__component_top_bar_top_bar_component__["a" /* TopBarComponent */], __WEBPACK_IMPORTED_MODULE_15__component_rates_rates_component__["a" /* NgbdModalContent */], __WEBPACK_IMPORTED_MODULE_20__component_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_16__template_rating_modal_rating_modal__["a" /* NgbdRatingModalContent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/doc/doc.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/doc/doc.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  doc works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/doc/doc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocComponent = /** @class */ (function () {
    function DocComponent() {
    }
    DocComponent.prototype.ngOnInit = function () {
    };
    DocComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-doc',
            template: __webpack_require__("./src/app/component/doc/doc.component.html"),
            styles: [__webpack_require__("./src/app/component/doc/doc.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DocComponent);
    return DocComponent;
}());



/***/ }),

/***/ "./src/app/component/explore/explore.component.css":
/***/ (function(module, exports) {

module.exports = "#categories {\r\n\r\n  background-color: white;\r\n  padding: 25px;\r\n  width: 92%;\r\n  margin-left: 4%;\r\n  border-radius: 6.5px;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/explore/explore.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\" style=\"padding: 2rem 0rem;\">\n  <div class=\"container\">\n    <ngx-ui-loader></ngx-ui-loader>\n    <div style=\"margin-top: 3%;\">\n      <h1 class=\"jumbotron-heading\" style=\"margin-top: -3%;margin-bottom: 2%;\">Explore Categories</h1>\n      <hr>\n\n      <div id=\"categories\">\n        <h4 class=\"jumbotron-heading\" style=\"margin-top: -1%; margin-bottom: 2%;\">Categories</h4>\n        <button *ngFor=\"let genre of movieGenres\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"getMoviesByGenre($event)\" style=\"margin: 7px;\">{{genre}}</button>\n      </div>\n\n      <div *ngFor=\"let movie of allMovies\">\n        <app-full-movie id=\" searchMovies\" [movie]=\"movie\" [todaysMoviePickSrc]=\"movie.videoURL\"></app-full-movie>\n      </div>\n      </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/component/explore/explore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_movie_service_service__ = __webpack_require__("./src/app/service/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_ui_loader__ = __webpack_require__("./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ExploreComponent = /** @class */ (function () {
    function ExploreComponent(route, movieService, sanitizer, ngxService) {
        this.route = route;
        this.movieService = movieService;
        this.sanitizer = sanitizer;
        this.ngxService = ngxService;
        this.allMovies = [];
        this.ngxService.start();
        this.movieGenres = this.movieService.getMoviesGenres();
        console.log(this.movieGenres);
    }
    ExploreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (Object.keys(params).length != 0) {
                _this.id = +params['id'];
                _this.getSingleMovie(_this.id);
            }
            else {
                _this.getAllMovie();
            }
            setTimeout(function () {
                _this.ngxService.stop();
            }, 3000);
        });
    };
    ExploreComponent.prototype.getSingleMovie = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof this.movie === 'undefined')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.movieService.getMovieById(id)
                                .toPromise()
                                .then(function (resp) { return _this.movie = resp; })];
                    case 1:
                        _a.movie = _b.sent();
                        _b.label = 2;
                    case 2:
                        this.allMovies.push(this.movie);
                        this.movie.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.videoURL.toString());
                        return [2 /*return*/, this.allMovies];
                }
            });
        });
    };
    ExploreComponent.prototype.getAllMovie = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.allMovies.length === 0)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.movieService.getTodaysTrailersPick()
                                .toPromise()
                                .then(function (resp) { return _this.allMovies = resp; })];
                    case 1:
                        _a.allMovies = _b.sent();
                        _b.label = 2;
                    case 2:
                        this.allMovies.forEach(function (thismovie) {
                            thismovie.videoURL = _this.sanitizer.bypassSecurityTrustResourceUrl(thismovie.videoURL.toString());
                        });
                        return [2 /*return*/, this.allMovies];
                }
            });
        });
    };
    ExploreComponent.prototype.getMoviesByGenre = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var genre, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        genre = event.currentTarget.outerText;
                        _a = this;
                        return [4 /*yield*/, this.movieService.getMoviesByGenre(genre)
                                .toPromise()
                                .then(function (resp) { return _this.allMovies = resp; })];
                    case 1:
                        _a.allMovies = _b.sent();
                        this.allMovies.forEach(function (thismovie) {
                            thismovie.videoURL = _this.sanitizer.bypassSecurityTrustResourceUrl(thismovie.videoURL.toString());
                        });
                        setTimeout(function () {
                            _this.ngxService.stop();
                        }, 3000);
                        return [2 /*return*/, this.allMovies];
                }
            });
        });
    };
    ExploreComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ExploreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-explore',
            template: __webpack_require__("./src/app/component/explore/explore.component.html"),
            styles: [__webpack_require__("./src/app/component/explore/explore.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__service_movie_service_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_4_ngx_ui_loader__["c" /* NgxUiLoaderService */]])
    ], ExploreComponent);
    return ExploreComponent;
}());



/***/ }),

/***/ "./src/app/component/full-movie/full-movie.component.css":
/***/ (function(module, exports) {

module.exports = "    .star {\r\n      font-size: 1.5rem;\r\n      color: #b0c4de;\r\n    }\r\n\r\n    .filled {\r\n      color: #f5c518;\r\n    }\r\n\r\n    .bad {\r\n      color: #f5c518;\r\n    }\r\n\r\n    .filled.bad {\r\n      color: #f5c518;\r\n    }\r\n\r\n    #mainDiv {\r\nbackground-color: white;\r\n    height: 441px;\r\n    width: 1000px;\r\n    }\r\n\r\n    .addMovieinfo {\r\n      text-align: initial;\r\n      margin-bottom: 0.5rem;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/component/full-movie/full-movie.component.html":
/***/ (function(module, exports) {

module.exports = "      <section class=\"jumbotron text-center\" style=\"padding: 0rem 0rem;\">\n        <div id=\"mainDiv\" class=\"container\">\n\n          <div #youtube style=\"margin-top: 3%;\">\n              <iframe   style=\"margin-left: 50%;\"  width=\"500\" height=\"270\" [src]=\"todaysMoviePickSrc\"\n                frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n            </iframe>\n            \n              <div #movieinfo style=\"margin-top: -28.4%; margin-left: -1.9rem;\"  class=\"col-md-4\">\n              <div class=\"mb-4 box-shadow\" style=\"    display: -webkit-inline-box;\">\n                <img width=\"182\" height=\"268\" class=\"card-img-top\" data-src=\"{{movie.imageURL}}\" alt=\"Card image cap\">\n                <div class=\"card-body\" style=\"background: white; height: 270px;  width: 100%;\">\n                  <h5>{{movie.name}}</h5>\n\n\n            <ngb-rating [(rate)]=\"movie.movieRate.rate\" [readonly]=\"true\">\n              <ng-template let-fill=\"fill\" let-index=\"index\">\n                <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\n              </ng-template>\n            </ngb-rating>\n              <hr>\n              <div style=\"display: flex;\">\n                <p style=\"margin-right: 5%;\"><strong>Rate: </strong>{{movie.movieRate.rate}}</p>\n                <p><strong>From: </strong>{{movie.movieRate.raters}}</p>\n              </div>\n\n\n                  <p class=\"card-text\"><strong style=\"float: left;\">Realesed at: </strong>{{movie.dataOfrelease}}</p>\n                  <p class=\"card-text\"><strong style=\"float: left;\">Genre:</strong> {{movie.genre}}</p>\n\n                </div>\n              </div>\n            </div>\n             <hr style=\"margin-top: -1rem;\">\n            <p class=\"addMovieinfo\"> {{movie.description}}</p>\n            <p class=\"addMovieinfo\"><strong >director:</strong> {{movie.director}}</p>\n            <p class=\"addMovieinfo\"><strong >writers:</strong> {{movie.writers}}</p>\n            <p class=\"addMovieinfo\"><strong >stars:</strong> {{movie.stars}}</p>\n          </div>\n      </div>\n      </section>"

/***/ }),

/***/ "./src/app/component/full-movie/full-movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullMovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_movie__ = __webpack_require__("./src/app/model/movie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_ui_loader__ = __webpack_require__("./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FullMovieComponent = /** @class */ (function () {
    function FullMovieComponent(ngxService) {
        this.ngxService = ngxService;
        this.ngxService.start();
    }
    FullMovieComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_movie__["a" /* Movie */])
    ], FullMovieComponent.prototype, "movie", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], FullMovieComponent.prototype, "todaysMoviePickSrc", void 0);
    FullMovieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-full-movie',
            template: __webpack_require__("./src/app/component/full-movie/full-movie.component.html"),
            styles: [__webpack_require__("./src/app/component/full-movie/full-movie.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_ui_loader__["c" /* NgxUiLoaderService */]])
    ], FullMovieComponent);
    return FullMovieComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <main role=\"main\">\n\n      <h1 class=\"jumbotron-heading\" style=\"    position: absolute; margin-left: 23%;\">Today's Pick</h1>\n  \n          <app-top-bar></app-top-bar>\n        <ngx-ui-loader></ngx-ui-loader>\n      <div class=\"album py-5 bg-light\">\n        <div class=\"container\">\n          <ngb-pagination style=\"margin-top: -2rem;\" class=\"d-flex justify-content-center\" size=\"lg\" \n          [pageSize]=\"pageSize\" \n          [collectionSize]=\"collectionSize\" \n          [(page)]=\"page\" \n          [boundaryLinks]=\"true\"></ngb-pagination>\n          <div class=\"row\">\n            <div class=\"col-md-3\" *ngFor=\"let movie of allMovies | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n              <div class=\"card mb-4 box-shadow\">\n                <img class=\"card-img-top\" data-src=\"{{movie.imageURL}}\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                  <h5>{{movie.name}}</h5>\n                  <ngbd-rating-template [movie]=\"movie\"></ngbd-rating-template>\n                  <p class=\"card-text\"><strong>Realesed at: </strong>{{movie.dataOfrelease}}</p>\n                  <p class=\"card-text\"><strong>Genre:</strong> {{movie.genre}}</p>\n                  <div class=\"d-flex justify-content-between align-items-center\">\n                    <div class=\"btn-group\">\n                      <button [routerLink]=\"['/explore', movie.id]\" type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                      <button [routerLink]=\"['/rates', movie.id]\" type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Rate</button>\n                    </div>\n                    <small class=\"text-muted\">{{movie.duration}}</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n          <ngb-pagination class=\"d-flex justify-content-center\" size=\"lg\" \n          [pageSize]=\"pageSize\" \n          [collectionSize]=\"collectionSize\" \n          [(page)]=\"page\" \n          [boundaryLinks]=\"true\"></ngb-pagination>\n        </div>\n      </div>\n\n    </main>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_movie_service_service__ = __webpack_require__("./src/app/service/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_ui_loader__ = __webpack_require__("./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService, ngxLoader) {
        this.movieService = movieService;
        this.ngxLoader = ngxLoader;
        this.ngxLoader.start();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getAllMovies().subscribe(function (response) {
            _this.allMovies = response;
            _this.collectionSize = _this.allMovies.length;
            _this.pageSize = _this.collectionSize / 10;
            _this.page = 1;
            _this.ngxLoader.stop();
            __WEBPACK_IMPORTED_MODULE_3_jquery__("ngb-pagination").click(function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('html, body').animate({ scrollTop: 0 }, 'slow');
            });
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/component/home/home.component.html"),
            styles: [__webpack_require__("./src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_movie_service_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2_ngx_ui_loader__["c" /* NgxUiLoaderService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "fieldset {\r\n    display: none\r\n}\r\n\r\nfieldset.show {\r\n    display: block\r\n}\r\n\r\nselect:focus,\r\ninput:focus {\r\n    -webkit-box-shadow: none !important;\r\n    box-shadow: none !important;\r\n    border: 1px solid #2196F3 !important;\r\n    outline-width: 0 !important;\r\n    font-weight: 400\r\n}\r\n\r\nbutton:focus {\r\n    -webkit-box-shadow: none !important;\r\n    box-shadow: none !important;\r\n    outline-width: 0\r\n}\r\n\r\n.tabs {\r\n    margin: 2px 5px 0px 5px;\r\n    padding-bottom: 10px;\r\n    cursor: pointer\r\n}\r\n\r\n.tabs:hover,\r\n.tabs.active {\r\n    border-bottom: 1px solid #2196F3\r\n}\r\n\r\na:hover {\r\n    text-decoration: none;\r\n    color: #1565C0\r\n}\r\n\r\n.box {\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    padding: 10px\r\n}\r\n\r\n.modal-backdrop {\r\n    background-color: #64B5F6\r\n}\r\n\r\n.line {\r\n    background-color: #CFD8DC;\r\n    height: 1px;\r\n    width: 100%\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .tabs h6 {\r\n        font-size: 12px\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"modal-content\">\n\n\n         <div class=\"modal-header row d-flex justify-content-between mx-1 mx-sm-3 mb-0 pb-0 border-0\">\n\n            <div [ngClass]=\"loginIsActive ? 'tabs active' : 'tabs'\" class=\"tabs\" id=\"login-tab\" (click)=\"showLoginForm()\">\n                  <h6 [ngClass]=\"loginIsActive ? 'font-weight-bold' : 'text-muted'\" >Login</h6>\n            </div>\n            \n            <div [ngClass]=\"regisIsActive ? 'tabs active' : 'tabs'\" id=\"regis-tab\" (click)=\"showRegistrationForm()\">\n                  <h6 [ngClass]=\"regisIsActive ? 'font-weight-bold' : 'text-muted'\"   >Registration</h6>\n            </div>\n\n         </div>\n\n\n        <div *ngIf=\"regisIsActive\" class=\"modal-body\">\n                  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterSubmit()\">\n                        <div class=\"row\">\n                           \n                           <div class=\"col-sm-8\">\n                              <div class=\"form-group\">\n                                 <label>Email</label>\n                                 <input style=\"width: 150%;\" type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': regisSubmitted && regiForm.email.errors }\" />\n                                 <div *ngIf=\"regisSubmitted && regiForm.email.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"regiForm.email.errors.required\">Email is required</div>\n                                    <div *ngIf=\"regiForm.email.errors.email\">Email must be a valid email address</div>\n                                 </div>\n                              </div>\n                           </div>\n\n                           <div class=\"col-sm-8\">\n                              <div class=\"form-group\">\n                                 <label>Password</label>\n                                 <input style=\"width: 150%;\" type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': regisSubmitted  && regiForm.password.errors }\" />\n                                 <div *ngIf=\"regisSubmitted && regiForm.password.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"regiForm.password.errors.required\">Password is required</div>\n                                    <div *ngIf=\"regiForm.password.errors.minlength\">Password must be at least 6 characters</div>\n                                 </div>\n                              </div>\n                           </div>\n\n                           <div class=\"col-sm-8\">\n                              <div class=\"form-group\">\n                                 <label>Confirm Password</label>\n                                 <input style=\"width: 150%;\"  type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': regisSubmitted && regiForm.confirmPassword.errors }\" />\n                                 <div *ngIf=\"regisSubmitted && regiForm.confirmPassword.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"regiForm.confirmPassword.errors.required\">Confirm Password is required</div>\n                                    <div *ngIf=\"regiForm.confirmPassword.errors.minlength\">Password must be at least 6 characters</div>\n                                    <div *ngIf=\"regiForm.confirmPassword.errors.match\">Password doesn't match</div>\n                                 </div>\n                              </div>\n                           </div>\n\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n                  </form>\n       \n      \n       </div>\n\n\n        <div *ngIf=\"loginIsActive\" class=\"modal-body\">\n                  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\n                        <div class=\"row\">\n                           \n                           <div class=\"col-sm-8\">\n                              <div class=\"form-group\">\n                                 <label>Email</label>\n                                 <input style=\"width: 150%;\" type=\"text\" formControlName=\"loginEmail\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': loginSubmitted && logForm.loginEmail.errors }\" />\n                                 <div *ngIf=\"loginSubmitted && logForm.loginEmail.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"logForm.loginEmail.errors.required\">Email is required</div>\n                                    <div *ngIf=\"logForm.loginEmail.errors.email\">Email must be a valid email address</div>\n                                 </div>\n                              </div>\n                           </div>\n\n                           <div class=\"col-sm-8\">\n                              <div class=\"form-group\">\n                                 <label>Password</label>\n                                 <input style=\"width: 150%;\" type=\"password\" formControlName=\"loginPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': loginSubmitted  && logForm.loginPassword.errors }\" />\n                                 <div *ngIf=\"loginSubmitted && logForm.loginPassword.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"logForm.loginPassword.errors.required\">Password is required</div>\n                                    <div *ngIf=\"logForm.loginPassword.errors.minlength\">Password must be at least 6 characters</div>\n                                 </div>\n                              </div>\n                           </div>\n                           \n\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n                  </form>\n       \n      \n       </div>\n        <div style=\"display: block;\" class=\"modal-footer\">\n            <div  *ngIf=\"loginErrorResponse\" style=\"float: left; color: red;\">{{loginErrorResponse}}</div>\n            <div  *ngIf=\"registrationErrorResponse\" style=\"float: left; color: red;\">{{registrationErrorResponse}}</div>\n            <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" (click) = \"hide()\" style=\"float: right;\">Close</button>\n        \n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_movie_service_service__ = __webpack_require__("./src/app/service/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_LoginDetaild__ = __webpack_require__("./src/app/model/LoginDetaild.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, modalService, activeModal, movieService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.movieService = movieService;
        this.title = 'angularpopup';
        this.regisSubmitted = false;
        this.loginSubmitted = false;
        this.regisIsActive = false;
        this.loginIsActive = true;
        this._isUserLoggedIn = false;
        this.usersUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + ':' + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].port;
    }
    LoginComponent_1 = LoginComponent;
    LoginComponent.prototype.show = function () {
        this.modalService.open(LoginComponent_1, { backdropClass: 'light-blue-backdrop' });
        this.showModal = true; // Show-Hide Modal Check
    };
    //Bootstrap Modal Close event
    LoginComponent.prototype.hide = function () {
        this.activeModal.close();
        this.showModal = false;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
        }, { validator: this.checkPasswords });
        this.loginForm = this.formBuilder.group({
            loginEmail: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
            loginPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
        });
    };
    LoginComponent.prototype.checkPasswords = function (group) {
        var pass = group.get('password').value;
        var confirmPass = group.get('confirmPassword').value;
        if (pass && confirmPass) {
            if (pass != confirmPass) {
                if (!group.controls.confirmPassword.errors) {
                    group.controls.confirmPassword.setErrors({});
                    group.controls.confirmPassword.errors.match = true;
                }
            }
        }
    };
    LoginComponent.prototype.showLoginForm = function () {
        this.regisIsActive = false;
        this.loginIsActive = true;
        this.loginErrorResponse = null;
        this.registrationErrorResponse = null;
    };
    LoginComponent.prototype.showRegistrationForm = function () {
        this.regisIsActive = true;
        this.loginIsActive = false;
        this.loginErrorResponse = null;
        this.registrationErrorResponse = null;
    };
    Object.defineProperty(LoginComponent.prototype, "regiForm", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "logForm", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.loginErrorResponse = null;
        this.registrationErrorResponse = null;
        this.regisSubmitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        if (this.regisSubmitted) {
            this.loginDetails = new __WEBPACK_IMPORTED_MODULE_4__model_LoginDetaild__["a" /* LoginDetails */](this.regiForm.email.value, this.regiForm.password.value, this.regiForm.confirmPassword.value);
            this.movieService.registration(this.loginDetails).subscribe(function (response) {
                if (response.status == 201) {
                    var body = response.body;
                    var username = body.substr(0, body.indexOf('@'));
                    sessionStorage.setItem('movieRaterUser', username);
                    _this.hide();
                    window.location.href = window.location.origin + '/home';
                }
            }, function (error) {
                _this.registrationErrorResponse = error.error;
                console.log(error);
            });
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.loginErrorResponse = null;
        this.registrationErrorResponse = null;
        this.loginSubmitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        if (this.loginSubmitted) {
            this.loginDetails = new __WEBPACK_IMPORTED_MODULE_4__model_LoginDetaild__["a" /* LoginDetails */](this.logForm.loginEmail.value, this.logForm.loginPassword.value, "");
            this.movieService.login(this.loginDetails).subscribe(function (response) {
                if (response.status == 200) {
                    var body = response.body;
                    var username = body.substr(0, body.indexOf('@'));
                    sessionStorage.setItem('movieRaterUser', username);
                    _this.hide();
                    window.location.href = window.location.origin + '/home';
                }
            }, function (error) {
                _this.loginErrorResponse = error.error;
                console.log(error);
            });
        }
    };
    LoginComponent.prototype.isUserLoggedIn = function () {
        return this._isUserLoggedIn;
    };
    LoginComponent.prototype.getMovieRaterUser = function () {
        return this._movieRaterUser;
    };
    LoginComponent = LoginComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/component/login/login.component.html"),
            styles: [__webpack_require__("./src/app/component/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_3__service_movie_service_service__["a" /* MovieService */]])
    ], LoginComponent);
    return LoginComponent;
    var LoginComponent_1;
}());



/***/ }),

/***/ "./src/app/component/rates/rates.component.css":
/***/ (function(module, exports) {

module.exports = "    #ratingStarts .star {\r\n      font-size: 1.5rem;\r\n      color: #b0c4de;\r\n      cursor: pointer;\r\n    }\r\n\r\n    #ratingStarts .star:hover {\r\n      display: block;\r\n      background-color: #e9ecef;\r\n      width: 34px;\r\n      border-radius: 22px;\r\n      height: 34px;\r\n    }\r\n\r\n    #ratingStarts .filled {\r\n      color: #1e90ff;\r\n    }\r\n\r\n    #ratingStarts .bad {\r\n      color: #deb0b0;\r\n    }\r\n\r\n    #ratingStarts .bad:hover {\r\n      display: block;\r\n      background-color: #e9ecef;\r\n      width: 34px;\r\n      border-radius: 22px;\r\n      height: 34px;\r\n    }\r\n\r\n    #ratingStarts .filled.bad {\r\n      color: #ff1e1e;\r\n    }\r\n\r\n    #ratingStarts .filled.bad:hover {\r\n      display: block;\r\n      background-color: #e9ecef;\r\n      width: 34px;\r\n      border-radius: 22px;\r\n      height: 34px;\r\n    }\r\n\r\n    #mainDiv {\r\n      background-color: white;\r\n      height: 270px;\r\n      width: 937px;\r\n    }\r\n\r\n    .addMovieinfo {\r\n      text-align: initial;\r\n      margin-bottom: 0.5rem;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/component/rates/rates.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\" style=\"padding: 2rem 0rem;\">\n  <div class=\"container\">\n    <ngx-ui-loader></ngx-ui-loader>\n    <div style=\"margin-top: 3%;\">\n      <h1 class=\"jumbotron-heading\" style=\"margin-top: -3%;margin-bottom: 2%;\">{{topic}}</h1>\n      <hr>\n\n      <section class=\"jumbotron text-center\" style=\"padding: 0rem 0rem;\">\n        <div id=\"mainDiv\" class=\"container\">\n\n          <div #youtube style=\"margin-top: 3%;\">\n\n\n            <div #movieinfo class=\"col-md-4\">\n              <div class=\"mb-4 box-shadow\" style=\"  margin-left: -11%;  display: -webkit-inline-box;\">\n                <img width=\"182\" height=\"268\" class=\"card-img-top\" data-src=\"{{movie.imageURL}}\" alt=\"Card image cap\">\n                <div class=\"card-body\" style=\"width: 250%;\">\n                  <h5>{{movie.name}}</h5>\n\n\n                  <ngb-rating id=\"ratingStarts\" (click)=\"rateMovie(movie)\" [(rate)]=\"movie.movieRate.rate\" [readonly]=\"!isUserLoggedin\">\n                    <ng-template let-fill=\"fill\" let-index=\"index\">\n                      <span  class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < badStars\">&#9733;</span>\n                    </ng-template>\n                  </ngb-rating>\n                  <hr>\n                  <div style=\"display: flex;\">\n                    <p style=\"margin-right: 5%;\"><strong>Rate: </strong>{{movie.movieRate.rate}}</p>\n                    <p><strong>From: </strong>{{movie.movieRate.raters}}</p>\n                  </div>\n\n\n                  <p class=\"card-text\" style=\"display: flex;\"><strong style=\"margin-right: 2%;\">Realesed at: </strong>{{movie.dataOfrelease}}</p>\n                  <p class=\"card-text\" style=\"display: flex;\"><strong style=\"margin-right: 2%;\">Genre:</strong>{{movie.genre}}</p>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/component/rates/rates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_movie_service_service__ = __webpack_require__("./src/app/service/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_ui_loader__ = __webpack_require__("./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_login_login_component__ = __webpack_require__("./src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__template_rating_modal_rating_modal__ = __webpack_require__("./src/app/template/rating-modal/rating-modal.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal, login) {
        this.activeModal = activeModal;
        this.login = login;
        this._modelTopic = "This is the topic";
        this._modelBody = "This is the body";
    }
    NgbdModalContent.prototype.sendToLogin = function () {
        this.activeModal.close();
        this.login.show();
    };
    Object.defineProperty(NgbdModalContent.prototype, "ModelTopic", {
        get: function () {
            return this._modelTopic;
        },
        set: function (newTopic) {
            this._modelTopic = newTopic;
        },
        enumerable: true,
        configurable: true
    });
    NgbdModalContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{_modelTopic}}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div style=\"display: grid;\" class=\"modal-body\">\n      <p>{{_modelBody}}</p>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"sendToLogin()\">Login</button>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_6__component_login_login_component__["a" /* LoginComponent */]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var RatesComponent = /** @class */ (function () {
    function RatesComponent(modalService, route, movieService, ngxService, activeModal, ref) {
        this.modalService = modalService;
        this.route = route;
        this.movieService = movieService;
        this.ngxService = ngxService;
        this.activeModal = activeModal;
        this.ref = ref;
        this.isUserLoggedin = sessionStorage.getItem('movieRaterUser') ? true : false;
    }
    RatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#mainDiv').hide();
        this.ngxService.start();
        this.sub = this.route.params.subscribe(function (params) {
            if (Object.keys(params).length != 0) {
                _this.id = +params['id'];
                _this.movieService.getMovieById(_this.id).subscribe(function (response) {
                    _this.movie = response;
                    _this.topic = 'Rate Movies';
                    _this.badStars = _this.isUserLoggedin ? 0 : _this.movie.movieRate.rate;
                    _this.ngxService.stop();
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#mainDiv').show();
                });
            }
            else {
                _this.sub = _this.movieService.getTodaysMoviePick().subscribe(function (response) {
                    _this.movie = response;
                    _this.badStars = _this.isUserLoggedin ? 0 : _this.movie.movieRate.rate;
                    _this.topic = 'Rate Randome Movies';
                    _this.ngxService.stop();
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#mainDiv').show();
                });
            }
        });
    };
    RatesComponent.prototype.rateMovie = function (movie) {
        var _this = this;
        setTimeout(function () {
            if (_this.isUserLoggedin) {
                var modalRef = _this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__template_rating_modal_rating_modal__["a" /* NgbdRatingModalContent */], { backdropClass: 'light-blue-backdrop' });
                modalRef.componentInstance.ModelTopic = 'Thank you for rating this movie';
                modalRef.componentInstance._modelBody = 'You gave ' + movie.name + ' ' + movie.movieRate.rate + ' stars';
                _this.ref.detectChanges();
            }
            else {
                var modalRef = _this.modalService.open(NgbdModalContent, { backdropClass: 'light-blue-backdrop' });
                modalRef.componentInstance.ModelTopic = 'Please login first.';
                modalRef.componentInstance._modelBody = 'In order to rate movies please login first';
                _this.ref.detectChanges();
            }
        }, 100);
    };
    RatesComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], RatesComponent.prototype, "loginModal", void 0);
    RatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rates',
            template: __webpack_require__("./src/app/component/rates/rates.component.html"),
            styles: [__webpack_require__("./src/app/component/rates/rates.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__service_movie_service_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_ui_loader__["c" /* NgxUiLoaderService */], __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], RatesComponent);
    return RatesComponent;
}());



/***/ }),

/***/ "./src/app/component/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "    .star {\r\n      font-size: 1.5rem;\r\n      color: #b0c4de;\r\n    }\r\n\r\n    .filled {\r\n      color: #f5c518;\r\n    }\r\n\r\n    .bad {\r\n      color: #f5c518;\r\n    }\r\n\r\n    .filled.bad {\r\n      color: #f5c518;\r\n    }\r\n\r\n    #mainDiv {\r\nbackground-color: white;\r\n    height: 441px;\r\n    width: 1000px;\r\n    }\r\n\r\n    .addMovieinfo {\r\n      text-align: initial;\r\n      margin-bottom: 0.5rem;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/component/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\" style=\"padding: 2rem 0rem;\">\n  <div class=\"container\">\n    <ngx-ui-loader></ngx-ui-loader>\n    <div style=\"margin-top: 3%;\">\n  <h1 class=\"jumbotron-heading\" style=\"margin-top: -3%;margin-bottom: 2%;\">Search A Movie</h1>\n      <input id=\"typeahead-format\" \n             type=\"text\" \n             class=\"form-control\" \n             [(ngModel)]=\"movieSearch\" \n             [ngbTypeahead]=\"search\"\n             [resultFormatter]=\"formatter\" \n             (ngModelChange)=\"searchMovie(movieSearch)\"\n             placeholder=\"Search a movie\"\n             />\n\n      <hr>\n      <h4 class=\"card-title\">{{movie.name}}</h4>\n      <app-full-movie id=\"searchMovies\" [movie]=\"movie\" [todaysMoviePickSrc]=\"todaysMoviePickSrc\" ></app-full-movie>\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/component/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_movie_service_service__ = __webpack_require__("./src/app/service/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_ui_loader__ = __webpack_require__("./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SearchComponent = /** @class */ (function () {
    function SearchComponent(movieService, ngxLoader, sanitizer) {
        var _this = this;
        this.movieService = movieService;
        this.ngxLoader = ngxLoader;
        this.sanitizer = sanitizer;
        this.formatter = function (result) { return result; };
        this.search = function (text$) {
            return text$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* debounceTime */])(200), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["b" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["d" /* map */])(function (term) { return term === '' ? [] : _this.movieNames.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.movieNames = movieService.getMovieNames();
        this.getMoviePick();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.ngxLoader.start();
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#searchMovies').hide();
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.card-title').hide();
        this.ngxLoader.stop();
    };
    SearchComponent.prototype.getMovieByName = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof this.movie === 'undefined')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.movieService.getMovieByName(model)
                                .toPromise()
                                .then(function (resp) { return _this.movie = resp; })];
                    case 1:
                        _a.movie = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.todaysMoviePick];
                }
            });
        });
    };
    SearchComponent.prototype.getMoviePick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof this.movie === 'undefined')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.movieService.getTodaysMoviePick()
                                .toPromise()
                                .then(function (resp) { return _this.movie = resp; })];
                    case 1:
                        _a.movie = _b.sent();
                        _b.label = 2;
                    case 2:
                        this.todaysMoviePickSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.videoURL.toString());
                        return [2 /*return*/, this.movie];
                }
            });
        });
    };
    SearchComponent.prototype.searchMovie = function (model) {
        var _this = this;
        for (var index = 0; index < this.movieNames.length; index++) {
            var movieName = this.movieNames[index];
            if (movieName === model) {
                this.ngxLoader.start();
                this.movieService.getMovieByName(model)
                    .subscribe(function (arg) {
                    _this.movie = arg;
                    _this.todaysMoviePickSrc = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.movie.videoURL.toString());
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('#searchMovies').show();
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.card-title').show();
                    _this.ngxLoader.stop();
                });
            }
        }
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/component/search/search.component.html"),
            styles: [__webpack_require__("./src/app/component/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_movie_service_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2_ngx_ui_loader__["c" /* NgxUiLoaderService */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/component/side-bar/side-bar.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);\r\n\r\n@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);\r\n\r\n.fa-2x {\r\nfont-size: 2em;\r\n}\r\n\r\n.fa {\r\nposition: relative;\r\ndisplay: table-cell;\r\nwidth: 60px;\r\nheight: 36px;\r\ntext-align: center;\r\nvertical-align: middle;\r\nfont-size:20px;\r\n}\r\n\r\nli {\r\n  cursor: pointer;\r\n}\r\n\r\n.main-menu:hover,nav.main-menu.expanded {\r\nwidth:250px;\r\noverflow:visible;\r\n}\r\n\r\n#side-bar{\r\nposition: fixed;\r\nbottom: 0px;\r\ntop: 0px;\r\noverflow-x: hidden;\r\noverflow-y: auto;\r\n}\r\n\r\n.main-menu {\r\nbackground:#212121;\r\nborder-right:1px solid #e5e5e5;\r\nposition:absolute;\r\ntop:0;\r\nbottom:0;\r\nheight:100%;\r\nleft:0;\r\nwidth:60px;\r\noverflow:hidden;\r\n-webkit-transition:width .05s linear;\r\ntransition:width .05s linear;\r\n-webkit-transform:translateZ(0) scale(1,1);\r\nz-index:1000;\r\n}\r\n\r\n.main-menu>ul {\r\nmargin:7px 0;\r\n}\r\n\r\n.main-menu li {\r\nposition:relative;\r\ndisplay:block;\r\nwidth:250px;\r\n}\r\n\r\n.main-menu li>a {\r\nposition:relative;\r\ndisplay:table;\r\nborder-collapse:collapse;\r\nborder-spacing:0;\r\ncolor:#999;\r\n font-family: arial;\r\nfont-size: 14px;\r\ntext-decoration:none;\r\n-webkit-transform:translateZ(0) scale(1,1);\r\n-webkit-transition:all .1s linear;\r\ntransition:all .1s linear;\r\n  \r\n}\r\n\r\n.main-menu .nav-icon {\r\nposition:relative;\r\ndisplay:table-cell;\r\nwidth:60px;\r\nheight:36px;\r\ntext-align:center;\r\nvertical-align:middle;\r\nfont-size:18px;\r\n}\r\n\r\n.main-menu .nav-text {\r\nposition:relative;\r\ndisplay:table-cell;\r\nvertical-align:middle;\r\nwidth:190px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n\r\n.main-menu>ul.logout {\r\nposition:absolute;\r\nleft:0;\r\nbottom:0;\r\n}\r\n\r\n.no-touch .scrollable.hover {\r\noverflow-y:hidden;\r\n}\r\n\r\n.no-touch .scrollable.hover:hover {\r\noverflow-y:auto;\r\noverflow:visible;\r\n}\r\n\r\na:hover,a:focus {\r\ntext-decoration:none;\r\n}\r\n\r\nnav {\r\n-webkit-user-select:none;\r\n-moz-user-select:none;\r\n-ms-user-select:none;\r\n-o-user-select:none;\r\nuser-select:none;\r\n}\r\n\r\nnav ul,nav li {\r\noutline:0;\r\nmargin:0;\r\npadding:0;\r\n}\r\n\r\n.main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {\r\ncolor:#fff;\r\nbackground-color:#5fa2db;\r\n}\r\n\r\n.area {\r\nfloat: left;\r\nbackground: #e2e2e2;\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Titillium Web';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-menu\" id='side-bar'>\n            <ul>\n                <li>\n                    <a (click)=\"routTo('home')\" >\n                        <i class=\"fa fa-home fa-2x\"></i>\n                        <span class=\"nav-text\">\n                            Home\n                        </span>\n                    </a>\n                  \n                </li>\n                <li class=\"has-subnav\">\n                    <a (click)=\"routTo('explore')\">\n                        <i class=\"fa fa-film fa-2x\"></i>\n                        <span class=\"nav-text\">\n                            Explore Categories\n                        </span>\n                    </a>\n                    \n                </li>\n                <li class=\"has-subnav\">\n                    <a (click)=\"routTo('rates')\">\n                       <i class=\"fa fa-star-half-o fa-2x\"></i>\n                        <span class=\"nav-text\">\n                            Rate Movies\n                        </span>\n                    </a>\n                    \n                </li>\n                <li class=\"has-subnav\">\n                    <a (click)=\"routTo('trailers')\">\n                       <i class=\"fa fa-video-camera fa-2x\"></i>\n                        <span class=\"nav-text\">\n                            Watch Trailers\n                        </span>\n                    </a>\n                   \n                </li>\n                <li>\n                    <a (click)=\"routTo('search')\">\n                        <i class=\"fa fa-search fa-2x\"></i>\n                        <span class=\"nav-text\">\n                            Search Movies\n                        </span>\n                    </a>\n                </li>\n                <li>\n                    <a (click)=\"routTo('doc')\">\n                       <i class=\"fa fa-info fa-2x\"></i>\n                        <span class=\"nav-text\">\n                            Documentation\n                        </span>\n                    </a>\n                </li>\n            </ul>\n\n            <ul class=\"logout\">\n                <li>\n                   <a (click)=\"logout()\">\n                         <i class=\"fa fa-power-off fa-2x\"></i>\n                        <span class=\"nav-text\">\n                            Logout\n                        </span>\n                    </a>\n                </li>  \n            </ul>\n        </nav>\n  "

/***/ }),

/***/ "./src/app/component/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_movie_service_service__ = __webpack_require__("./src/app/service/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rates_rates_component__ = __webpack_require__("./src/app/component/rates/rates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(route, router, movieService, modalService) {
        this.route = route;
        this.router = router;
        this.movieService = movieService;
        this.modalService = modalService;
        this.usersUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl + ':' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].port;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.routTo = function (template) {
        this.router.navigate(['/' + template]);
    };
    SideBarComponent.prototype.logout = function () {
        var _this = this;
        this.movieService.logout().subscribe(function (response) {
            if (response.status == 200)
                sessionStorage.removeItem('movieRaterUser');
            window.location.href = window.location.origin + '/home';
        }, function (error) {
            var modalRef = _this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__rates_rates_component__["a" /* NgbdModalContent */], { backdropClass: 'light-blue-backdrop' });
            modalRef.componentInstance.ModelTopic = 'Please login first.';
            modalRef.componentInstance._modelBody = 'In order to logout you need to login first';
        });
    };
    SideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-side-bar',
            template: __webpack_require__("./src/app/component/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("./src/app/component/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_movie_service_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/component/top-bar/top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "      <section class=\"jumbotron text-center\" style=\"padding: 2rem 0rem;\">\n        <div class=\"container\">\n          <div style=\"margin-top: 3%;\">\n              <iframe  style=\"margin-left: 50%;\"  width=\"500\" height=\"270\" [src]=\"todaysMoviePickSrc\"\n                frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n            </iframe>\n            \n              <div style=\"margin-top: -25.7%;\"  class=\"col-md-4\">\n              <div class=\"card mb-4 box-shadow\" style=\"    display: -webkit-inline-box;\">\n                <img width=\"182\" height=\"268\" class=\"card-img-top\" data-src=\"{{imageUrl}}\" alt=\"Card image cap\">\n                <div class=\"card-body\" style=\"background: white; height: 270px;  width: 100%;\">\n                  <h5>{{movieName}}</h5>\n\n\n              <ngb-rating [(rate)]=\"rateFortopbar\" [readonly]=\"true\">\n                <ng-template let-fill=\"fill\" let-index=\"index\">\n                  <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\n                </ng-template>\n              </ngb-rating>\n              <hr>\n              <div style=\"display: flex;\">\n                <p style=\"margin-right: 5%;\"><strong>Rate: </strong>{{rateFortopbar}}</p>\n                <p><strong>From: </strong>{{raters}}</p>\n              </div>\n\n\n                  <p class=\"card-text\"><strong style=\"float: left;\">Realesed at: </strong>{{dataOfrelease}}</p>\n                  <p class=\"card-text\"><strong style=\"float: left;\">Genre:</strong> {{genre}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n      </section>\n"

/***/ }),

/***/ "./src/app/component/top-bar/top-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_movie_service_service__ = __webpack_require__("./src/app/service/movie-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(sanitizer, http, movieService) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.movieService = movieService;
        this.sanitizer = sanitizer;
        this.usersUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + ':' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].port;
        this.endpoints = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpoints;
        this.getMoviePick();
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent.prototype.getMoviePick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof this.movie === 'undefined')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.movieService.getTodaysMoviePick()
                                .toPromise()
                                .then(function (resp) { return _this.movie = resp; })];
                    case 1:
                        _a.movie = _b.sent();
                        _b.label = 2;
                    case 2:
                        this.todaysMoviePickSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.videoURL.toString());
                        this.imageUrl = this.movie.imageURL;
                        this.raters = this.movie.movieRate.raters;
                        this.rateFortopbar = this.movie.movieRate.rate;
                        this.movieName = this.movie.name;
                        this.dataOfrelease = this.movie.dataOfrelease;
                        this.genre = this.movie.genre;
                        return [2 /*return*/, this.todaysMoviePick];
                }
            });
        });
    };
    TopBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-top-bar',
            template: __webpack_require__("./src/app/component/top-bar/top-bar.component.html"),
            styles: ["\n    .star {\n      font-size: 1.5rem;\n      color: #b0c4de;\n    }\n    .filled {\n      color: #f5c518;\n    }\n    .bad {\n      color: #f5c518;\n    }\n    .filled.bad {\n      color: #f5c518;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__service_movie_service_service__["a" /* MovieService */]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/app/component/trailers/trailers.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/trailers/trailers.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\" style=\"padding: 2rem 0rem;\">\n  <div class=\"container\">\n    <div style=\"margin-top: 3%;\">\n      <h1 class=\"jumbotron-heading\" style=\"margin-top: -3%;margin-bottom: 2%;\">Watch Trailers</h1>\n\n\n    </div>\n  </div>\n</section>\n\n<div *ngFor=\"let movie of allMovies; let i = index\">\n  <ngx-ui-loader></ngx-ui-loader>\n  <app-top-bar></app-top-bar>\n\n</div>"

/***/ }),

/***/ "./src/app/component/trailers/trailers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrailersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_movie_service_service__ = __webpack_require__("./src/app/service/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_ui_loader__ = __webpack_require__("./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrailersComponent = /** @class */ (function () {
    function TrailersComponent(movieService, ngxService) {
        this.movieService = movieService;
        this.ngxService = ngxService;
        this.ngxService.start();
    }
    TrailersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getTodaysTrailersPick().subscribe(function (response) {
            _this.allMovies = response;
            setTimeout(function () {
                _this.ngxService.stop();
            }, 3000);
        });
    };
    TrailersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trailers',
            template: __webpack_require__("./src/app/component/trailers/trailers.component.html"),
            styles: [__webpack_require__("./src/app/component/trailers/trailers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_movie_service_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2_ngx_ui_loader__["c" /* NgxUiLoaderService */]])
    ], TrailersComponent);
    return TrailersComponent;
}());



/***/ }),

/***/ "./src/app/model/LoginDetaild.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDetails; });
var LoginDetails = /** @class */ (function () {
    function LoginDetails(email, password, confirmPassword) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    return LoginDetails;
}());



/***/ }),

/***/ "./src/app/model/movie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/service/movie-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.usersUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + ':' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].port;
        this.endpoints = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpoints;
        this.getAllMovieNames();
        this.getAllMovieGenres();
        this.requestOptions = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]()
                .append('Content-Type', 'application/json')
                .append('Access-Control-Allow-Credentials', 'true')
                .append('Access-Control-Allow-Origin', '*')
                .append('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS')
                .append('Access-Control-Allow-Header', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'),
            responseType: 'text', observe: 'response', withCredentials: true };
    }
    MovieService.prototype.registration = function (loginDetails) {
        return this.http.post(this.usersUrl + this.endpoints['registration'], loginDetails, this.requestOptions);
    };
    MovieService.prototype.login = function (loginDetails) {
        return this.http.post(this.usersUrl + this.endpoints['login'], loginDetails, this.requestOptions);
    };
    MovieService.prototype.logout = function () {
        return this.http.post(this.usersUrl + this.endpoints['logout'], {}, this.requestOptions);
    };
    MovieService.prototype.getAllMovies = function () {
        return this.http.get(this.usersUrl + this.endpoints['getAllMovies']);
    };
    MovieService.prototype.getMovieByName = function (movieName) {
        return this.http.get(this.usersUrl + this.endpoints['getMovieByName'] + '/' + movieName);
    };
    MovieService.prototype.getMovieById = function (movieId) {
        return this.http.get(this.usersUrl + this.endpoints['getMovieById'] + '/' + movieId);
    };
    MovieService.prototype.getMoviesByGenre = function (genre) {
        return this.http.get(this.usersUrl + this.endpoints['getMoviesByGenre'] + '/' + genre);
    };
    MovieService.prototype.getAllMovieNames = function () {
        var _this = this;
        return this.http.get(this.usersUrl + this.endpoints['getAllMovieNames']).
            subscribe(function (arg) { return _this._movieNames = arg; });
    };
    MovieService.prototype.getAllMovieGenres = function () {
        var _this = this;
        return this.http.get(this.usersUrl + this.endpoints['getAllMovieGenres']).
            subscribe(function (arg) { return _this._movieGenres = arg; });
    };
    MovieService.prototype.getTodaysMoviePick = function () {
        return this.http.get(this.usersUrl + this.endpoints['getTodaysMoviePick']);
    };
    MovieService.prototype.getTodaysTrailersPick = function () {
        return this.http.get(this.usersUrl + this.endpoints['getTodaysTrailersPick']);
    };
    MovieService.prototype.getMovieNames = function () {
        return this._movieNames;
    };
    MovieService.prototype.getMoviesGenres = function () {
        return this._movieGenres;
    };
    MovieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/template/rating-modal/rating-modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdRatingModalContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdRatingModalContent = /** @class */ (function () {
    function NgbdRatingModalContent(activeModal) {
        this.activeModal = activeModal;
        this._modelTopic = "This is the topic";
        this._modelBody = "This is the body";
    }
    Object.defineProperty(NgbdRatingModalContent.prototype, "ModelTopic", {
        get: function () {
            return this._modelTopic;
        },
        set: function (newTopic) {
            this._modelTopic = newTopic;
        },
        enumerable: true,
        configurable: true
    });
    NgbdRatingModalContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngbd-rating-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{_modelTopic}}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div style=\"display: grid;\" class=\"modal-body\">\n      <p>{{_modelBody}}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], NgbdRatingModalContent);
    return NgbdRatingModalContent;
}());



/***/ }),

/***/ "./src/app/template/rating-template/rating-template.html":
/***/ (function(module, exports) {

module.exports = "\n<ngb-rating [(rate)]=\"rate\" [readonly]=\"true\">\n  <ng-template let-fill=\"fill\" let-index=\"index\">\n    <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\n  </ng-template>\n</ngb-rating>\n<hr>\n<div style=\"display: flex;\">\n  <p style=\"margin-right: 5%;\"><strong>Rate: </strong>{{rate}}</p>\n  <p><strong>From: </strong>{{raters}}</p>\n</div>"

/***/ }),

/***/ "./src/app/template/rating-template/rating-template.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdRatingTemplate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgbdRatingTemplate = /** @class */ (function () {
    function NgbdRatingTemplate() {
    }
    NgbdRatingTemplate.prototype.ngOnInit = function () {
        this.movieRate = this.movie['movieRate'];
        this.rate = this.movieRate['rate'];
        this.raters = this.movieRate['raters'];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NgbdRatingTemplate.prototype, "movie", void 0);
    NgbdRatingTemplate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngbd-rating-template',
            template: __webpack_require__("./src/app/template/rating-template/rating-template.html"),
            styles: ["\n    .star {\n      font-size: 1.5rem;\n      color: #b0c4de;\n    }\n    .filled {\n      color: #f5c518;\n    }\n    .bad {\n      color: #f5c518;\n    }\n    .filled.bad {\n      color: #f5c518;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], NgbdRatingTemplate);
    return NgbdRatingTemplate;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost',
    port: '8080',
    endpoints: {
        getAllMovies: '/public/getAllMovies', getTodaysMoviePick: '/public/getTodaysMoviePick',
        getTodaysTrailersPick: '/public/getTodaysTrailersPick', getAllMovieNames: '/public/getAllMovieNames', getMovieByName: '/public/getMovieByName',
        getMovieById: '/public/getMovieById', getAllMovieGenres: '/public/getAllMovieGenres', getMoviesByGenre: '/public/getMoviesByGenre',
        logout: '/private/logout', login: '/public/login', registration: '/public/registration', rateMovie: '/private/rateMovie'
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map