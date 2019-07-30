(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myVideo {\r\n    max-width: 100%;\r\n    max-height: 650 px;\r\n    margin: 0;\r\n  }\r\n  \r\n  .content {\r\n    position: absolute;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: #f1f1f1;\r\n    width: 100%;\r\n    padding: 20px;\r\n    z-index: 1;\r\n  }\r\n  \r\n  h1{\r\n      color: rgb(35, 206, 134);\r\n      text-shadow: 1px 1px 2px rgb(70, 63, 63), 0 0 25px rgb(23, 181, 195), 0 0 5px rgb(20, 209, 35);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtFQUNaOztFQUNBO01BQ0ksd0JBQXdCO01BQ3hCLDhGQUE4RjtFQUNsRyIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlWaWRlbyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NTAgcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgaDF7XHJcbiAgICAgIGNvbG9yOiByZ2IoMzUsIDIwNiwgMTM0KTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYig3MCwgNjMsIDYzKSwgMCAwIDI1cHggcmdiKDIzLCAxODEsIDE5NSksIDAgMCA1cHggcmdiKDIwLCAyMDksIDM1KTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-flex\">\n  <video autoplay muted loop id=\"myVideo\">\n    <source src=\"./assets/slike/mountain_lake_time_lapse.mov\" type=\"video/mp4\">\n    Your browser does not support HTML5 video.\n  </video>\n  <div class=\"content\">\n    <h1>Trekking.com</h1>\n    <p>Hey guys, welcome to Trekking.com, Balkan’s biggest adventure travel blog</p>\n    <p>Thanks so much for swinging by our little corner of the internet. We’re so stoked\n       that you found our site and want to know a bit more about us. So grab your favourite drink, \n       pull up a chair and let us fill you in on just what the hell we are about.</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/addblog/addblog.component.css":
/*!***********************************************!*\
  !*** ./src/app/addblog/addblog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    width:60%;\r\n  }\r\ninput, textarea {\r\n    display:block;\r\n    width:100%;\r\n    padding:10px;\r\n    font-size:1.1em;\r\n    border-radius: 4px;\r\n  }\r\nh2 h4{\r\n    color: rgb(93, 93, 204);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYmxvZy9hZGRibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0VBQ1g7QUFDRjtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7QUFDRjtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkZGJsb2cvYWRkYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgfVxyXG5pbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBmb250LXNpemU6MS4xZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5oMiBoNHtcclxuICAgIGNvbG9yOiByZ2IoOTMsIDkzLCAyMDQpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/addblog/addblog.component.html":
/*!************************************************!*\
  !*** ./src/app/addblog/addblog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"blog\">\n<div class=\"container py-5\">\n  <h2>Post new blog:</h2>\n    <form name=\"postForm\" ng-submit=\"\" novalidate>\n      <h4>Title</h4>\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"blog.title\">\n      </div>\n      <h4>Description</h4>\n      <textarea class=\"form-control\" [(ngModel)]=\"blog.description\" rows=\"10\"></textarea>\n      <label for=\"\">Featured Image URL</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"blog.url\">\n      <label for=\"\">Date</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"blog.date\">\n      <br/>\n      <button type=\"button\" \n        class=\"btn btn-secondary\" \n        (click)=\"saveChanges()\">Save</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/addblog/addblog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addblog/addblog.component.ts ***!
  \**********************************************/
/*! exports provided: AddblogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddblogComponent", function() { return AddblogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_blogB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/blogB */ "./src/app/blogB.ts");
/* harmony import */ var src_app_postblog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/postblog.service */ "./src/app/postblog.service.ts");




var AddblogComponent = /** @class */ (function () {
    function AddblogComponent(postBlogService) {
        this.postBlogService = postBlogService;
    }
    AddblogComponent.prototype.ngOnInit = function () {
    };
    AddblogComponent.prototype.saveChanges = function () {
        this.postBlogService.editBlog(this.blog);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_blogB__WEBPACK_IMPORTED_MODULE_2__["MBlogP"])
    ], AddblogComponent.prototype, "blog", void 0);
    AddblogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addblog',
            template: __webpack_require__(/*! ./addblog.component.html */ "./src/app/addblog/addblog.component.html"),
            styles: [__webpack_require__(/*! ./addblog.component.css */ "./src/app/addblog/addblog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_postblog_service__WEBPACK_IMPORTED_MODULE_3__["PostblogService"]])
    ], AddblogComponent);
    return AddblogComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autentifikacija.service */ "./src/app/autentifikacija.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(autentifikacijaService, router) {
        this.autentifikacijaService = autentifikacijaService;
        this.router = router;
        this.title = 'TrekkingAppF';
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyCiE15ebsTtp0o5CfTtTXAfRcEETx-01i0",
            authDomain: "trekkingf-84b29.firebaseapp.com",
        });
    };
    AppComponent.prototype.signOut = function () {
        this.autentifikacijaService.odjaviSe();
        this.router.navigate(['/signin']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__["AutentifikacijaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memori_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./in-memori-store */ "./src/app/in-memori-store.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _galery_galery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./galery/galery.component */ "./src/app/galery/galery.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shopping/shopping.component */ "./src/app/shopping/shopping.component.ts");
/* harmony import */ var _home_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/carousel/carousel.component */ "./src/app/home/carousel/carousel.component.ts");
/* harmony import */ var _home_video_video_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/video/video.component */ "./src/app/home/video/video.component.ts");
/* harmony import */ var _home_homegalery_homegalery_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/homegalery/homegalery.component */ "./src/app/home/homegalery/homegalery.component.ts");
/* harmony import */ var _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/contact/contact.component */ "./src/app/home/contact/contact.component.ts");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./autentifikacija.service */ "./src/app/autentifikacija.service.ts");
/* harmony import */ var _postblog_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _opisproizvoda_opisproizvoda_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./opisproizvoda/opisproizvoda.component */ "./src/app/opisproizvoda/opisproizvoda.component.ts");
/* harmony import */ var _blog_postblog_postblog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./blog/postblog/postblog.component */ "./src/app/blog/postblog/postblog.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _addblog_addblog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./addblog/addblog.component */ "./src/app/addblog/addblog.component.ts");


































var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"] },
    { path: 'galery', component: _galery_galery_component__WEBPACK_IMPORTED_MODULE_14__["GaleryComponent"] },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_15__["ShopComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["SigninComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_28__["CartComponent"] },
    { path: 'opis/:proizvodId', component: _opisproizvoda_opisproizvoda_component__WEBPACK_IMPORTED_MODULE_29__["OpisproizvodaComponent"] },
    { path: 'postblog', component: _blog_postblog_postblog_component__WEBPACK_IMPORTED_MODULE_30__["PostblogComponent"] },
    { path: 'addblog', component: _addblog_addblog_component__WEBPACK_IMPORTED_MODULE_32__["AddblogComponent"] },
    { path: 'pagenotfound', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_31__["PagenotfoundComponent"] },
    { path: '**', redirectTo: '/pagenotfound' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
                _galery_galery_component__WEBPACK_IMPORTED_MODULE_14__["GaleryComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_15__["ShopComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__["NavComponent"],
                _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_19__["ShoppingComponent"],
                _home_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_21__["CarouselComponent"],
                _home_video_video_component__WEBPACK_IMPORTED_MODULE_22__["VideoComponent"],
                _home_homegalery_homegalery_component__WEBPACK_IMPORTED_MODULE_23__["HomegaleryComponent"],
                _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__["ContactComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_28__["CartComponent"],
                _opisproizvoda_opisproizvoda_component__WEBPACK_IMPORTED_MODULE_29__["OpisproizvodaComponent"],
                _blog_postblog_postblog_component__WEBPACK_IMPORTED_MODULE_30__["PostblogComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_31__["PagenotfoundComponent"],
                _addblog_addblog_component__WEBPACK_IMPORTED_MODULE_32__["AddblogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyA7A6MSueZUOlgpxBsj2WbOP3rufjXG1Ys"
                }),
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__["HttpClientInMemoryWebApiModule"].forRoot(_in_memori_store__WEBPACK_IMPORTED_MODULE_8__["InMemoryStore"], { dataEncapsulation: false })
            ],
            providers: [_autentifikacija_service__WEBPACK_IMPORTED_MODULE_25__["AutentifikacijaService"], _postblog_service__WEBPACK_IMPORTED_MODULE_26__["PostblogService"], _shopping_service__WEBPACK_IMPORTED_MODULE_27__["ShoppingService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/autentifikacija.service.ts":
/*!********************************************!*\
  !*** ./src/app/autentifikacija.service.ts ***!
  \********************************************/
/*! exports provided: AutentifikacijaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutentifikacijaService", function() { return AutentifikacijaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AutentifikacijaService = /** @class */ (function () {
    function AutentifikacijaService(router) {
        this.router = router;
    }
    AutentifikacijaService.prototype.registrujkorisnika = function (email, sifra) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, sifra)
            .catch(function (error) { return console.log(error); });
    };
    AutentifikacijaService.prototype.prijaviKorisnika = function (email, sifra) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, sifra)
            .then(function (response) {
            _this.router.navigate(['/']);
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
                .then(function (token) { return _this.token = token; });
        })
            .catch(function (error) { return console.log(error); });
    };
    AutentifikacijaService.prototype.vratiToken = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AutentifikacijaService.prototype.prijavljen = function () {
        return this.token != null;
    };
    AutentifikacijaService.prototype.odjaviSe = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
        this.token = null;
    };
    AutentifikacijaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AutentifikacijaService);
    return AutentifikacijaService;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-img {\r\n  border-bottom-left-radius: 0px;\r\n  border-bottom-right-radius: 0px;\r\n  max-height: 230px;\r\n}\r\n\r\n.card-title {\r\n  margin-bottom: 0.3rem;\r\n}\r\n\r\n.cat {\r\n  display: inline-block;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.fa-users {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.card-footer {\r\n  font-size: 0.8rem;\r\n}\r\n\r\ni{\r\n    padding: 5px;\r\n}\r\n\r\n#upload{\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgbWF4LWhlaWdodDogMjMwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XHJcbn1cclxuXHJcbi5jYXQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZmEtdXNlcnMge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbml7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuI3VwbG9hZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">  \n    <div class=\"col-12 col-sm-8 col-md-6 col-lg-4 p-3\">\n      <div class=\"card\">\n        <img class=\"card-img\" src=\"./assets/slike/trekking1.jpg\" alt=\"Nepal\">\n        <div class=\"card-img-overlay\">\n         <!-- <a href=\"#\" class=\"btn btn-light btn-sm\">Read More</a>-->\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Trekking in Nepal</h4>\n          <small class=\"text-muted cat\">\n            <i class=\"fas fa-globe-asia\"></i>Travel\n            <i class=\"fas fa-thumbs-up\"></i>Recomanded\n          </small>\n          <p class=\"card-text\">Nepal is known globally for its picturesque mountains. Especially known to most is the mighty Mount Everest,\n             and a lot of people travel from all over to capture a glimpse of the world’s tallest peak.</p>\n          <a href=\"#\" class=\"btn btn-outline-info\">Read more</a>\n        </div>\n        <div class=\"card-footer text-muted d-flex justify-content-between bg-transparent border-top-0\">\n          <div class=\"views\">Avg 20, 12:45PM\n          </div>\n          <div class=\"stats\">\n           \t<i class=\"far fa-eye\"></i> 87\n            <i class=\"far fa-comment\"></i> 34\n          </div>\n           \n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-sm-8 col-md-6 col-lg-4 p-3\">\n      <div class=\"card\">\n        <img class=\"card-img\" src=\"./assets/slike/trekking2.jpg\" alt=\"\">\n        <div class=\"card-img-overlay\">\n          <!--<a href=\"#\" class=\"btn btn-light btn-sm\">Read More</a>-->\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">TIGER LEAPING GORGE TREKKING GUIDE</h4>\n          <small class=\"text-muted cat\">\n            <i class=\"fas fa-globe-asia\"></i>Travel\n            <i class=\"fas fa-thumbs-up\"></i>Recomanded\n          </small>\n          <p class=\"card-text\">Our ultimate Tiger Leaping Gorge trekking guide in China’s Yunnan province,\n             and all the information you would ever need! Vertical cliffs...</p>\n         <a href=\"#\" class=\"btn btn-outline-info\">Read More</a>\n        </div>\n        <div class=\"card-footer text-muted d-flex justify-content-between bg-transparent border-top-0\">\n          <div class=\"views\">Avg 20, 12:45PM\n          </div>\n          <div class=\"stats\">\n           \t<i class=\"far fa-eye\"></i> 873\n            <i class=\"far fa-comment\"></i> 9\n          </div>  \n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-sm-8 col-md-6 col-lg-4 p-3\">\n      <div class=\"card\">\n        <img class=\"card-img\" src=\"./assets/slike/trekking4.jpg\" alt=\"Bologna\">\n        <div class=\"card-img-overlay\">\n          <!--<a href=\"#\" class=\"btn btn-outline-info\">Read More</a>-->\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">6 MEMORABLE DAY HIKES IN THE BALKANS</h4>\n          <small class=\"text-muted cat\">\n            <i class=\"fas fa-globe-asia\"></i>Travel\n            <i class=\"fas fa-thumbs-up\"></i>Recomanded\n          </small>\n          <p class=\"card-text\">From exploring the sand pyramids of Bulgaria to trekking to ancient castles in Macedonia,\n             these are just some of the best day...</p>\n          <a href=\"#\" class=\"btn btn-outline-info\">Read More</a>\n        </div>\n        <div class=\"card-footer text-muted d-flex justify-content-between bg-transparent border-top-0\">\n          <div class=\"views\">Avg 20, 12:45PM\n          </div>\n          <div class=\"stats\">\n           \t<i class=\"far fa-eye\"></i> 347\n            <i class=\"far fa-comment\"></i> 19\n          </div>  \n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-sm-8 col-md-6 col-lg-4 p-3\">\n      <div class=\"card\">\n        <img class=\"card-img\" src=\"./assets/slike/trekking7.jpg\" alt=\"Bologna\">\n        <div class=\"card-img-overlay\">\n          <!--<a href=\"#\" class=\"btn btn-light btn-sm\">Read More</a>-->\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">USHUAIA – CHILLING AT THE END OF THE WORLD</h4>\n          <small class=\"text-muted cat\">\n            <i class=\"fas fa-globe-asia\"></i>Travel\n            <i class=\"fas fa-thumbs-up\"></i>Recomanded\n          </small>\n          <p class=\"card-text\">I’ve always been inspired by the far corners of the globe. The places where one continent ends,\n             tumbling into the sea and beckoning…</p>\n          <a href=\"#\" class=\"btn btn-outline-info\">Read More</a>\n        </div>\n        <div class=\"card-footer text-muted d-flex justify-content-between bg-transparent border-top-0\">\n          <div class=\"views\">Avg 20, 12:45PM\n          </div>\n          <div class=\"stats\">\n           \t<i class=\"far fa-eye\"></i> 245\n            <i class=\"far fa-comment\"></i> 24\n          </div>  \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"upload\">\n  <button type=\"submit\" routerLink=\"/postblog\"><i class=\"far fa-edit\"></i></button>\n</div>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/blog/postblog/postblog.component.css":
/*!******************************************************!*\
  !*** ./src/app/blog/postblog/postblog.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main{\r\n    background-color: rgb(201, 227, 238);\r\n    margin-top: 30px;\r\n    border-radius: 4px;\r\n    padding: 15px;\r\n}\r\nh2{\r\n    color:rgb(125, 168, 207);\r\n}\r\nh2 i{\r\n    display: inline;\r\n}\r\nhr{\r\n    border-top-color: rgb(234, 246, 246);\r\n}\r\nheader{\r\n    background-color: rgb(248, 251, 251);\r\n    padding: 10px;\r\n}\r\nimg{\r\n    max-width: 100px;\r\n    max-height: 100px;\r\n    border-radius: 50%;\r\n    margin-left: 20px;\r\n}\r\n#podaci{\r\n    margin-left: 15px;\r\n    display: block;\r\n    border-left: 1px solid gray;\r\n    padding: 5px;\r\n}\r\ninput{\r\n    border-radius: 3px;\r\n}\r\ninput:hover{\r\n    border-color: lightblue;\r\n}\r\ni{\r\n    padding: 5px;\r\n}\r\nh5{\r\n    display: inline;\r\n    padding: 10px;\r\n    color:whitesmoke;\r\n}\r\nh5:hover{\r\n    border-bottom: 2px solid rgb(29, 123, 199);\r\n}\r\ntr{\r\n    margin-bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9wb3N0YmxvZy9wb3N0YmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ibG9nL3Bvc3RibG9nL3Bvc3RibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIyNywgMjM4KTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbmgye1xyXG4gICAgY29sb3I6cmdiKDEyNSwgMTY4LCAyMDcpO1xyXG59XHJcbmgyIGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuaHJ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2IoMjM0LCAyNDYsIDI0Nik7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjUxLCAyNTEpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5pbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4jcG9kYWNpe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5pbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5pbnB1dDpob3ZlcntcclxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcbml7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuaDV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcclxufVxyXG5oNTpob3ZlcntcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjksIDEyMywgMTk5KTtcclxufVxyXG50cntcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/blog/postblog/postblog.component.html":
/*!*******************************************************!*\
  !*** ./src/app/blog/postblog/postblog.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"main\">\n  <div id=\"naslov\">\n    <h2>Post Blog:</h2>\n    <i class=\"fas fa-download\"></i>\n    <i class=\"fas fa-cogs\"></i>\n    <button type=\"button\" class=\"btn btn-outline-info btn-rounded\" routerLink=\"/addblog\">Create new post</button>\n    <hr/>\n  </div>\n  <div class=\"container\">\n    <header>\n      <div class=\"row\">\n        <img src=\"./assets/slike/Marko.JPG\" alt=\"Marko\" rounded />\n        <div id=\"podaci\">\n          <form>\n            <label for=\"autor\">Izaberi autore:</label>\n            <br/>\n            <input type=\"text\" id=\"author\" name=\"author\" placeholder=\"Choose author\"/>\n            <br/>\n            <small><i class=\"far fa-lightbulb\"></i>It's easy to menage your blog from your live website.Manage posts and comments, add writers & more.<a href='#'>Learn how</a></small>\n          </form>\n        </div>\n      </div>\n    </header>\n    <br/>\n    <section>\n      <div id=\"pregled\">\n        <h5>Published(5)</h5>\n        <h5>Drafts</h5>\n      </div>\n      <hr/>\n      <div class=\"tabela\">\n          <table class=\"table table-hover table-light bg-light\">\n              <tbody>\n                <tr *ngFor=\"let blog of blogs\">\n                  <td><img [src]=\"blog.url\"></td>\n                  <td>{{blog.title}}</td>\n                  <td>{{blog.description}}</td>\n                  <td>{{blog.date}}</td>\n                </tr>\n              </tbody>\n          </table>\n          <app-addblog [blog]=\"currentBlog\"></app-addblog>\n      </div>\n    </section>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/blog/postblog/postblog.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/blog/postblog/postblog.component.ts ***!
  \*****************************************************/
/*! exports provided: PostblogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostblogComponent", function() { return PostblogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_postblog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/postblog.service */ "./src/app/postblog.service.ts");



var PostblogComponent = /** @class */ (function () {
    function PostblogComponent(postblogService) {
        this.postblogService = postblogService;
    }
    PostblogComponent.prototype.ngOnInit = function () {
        this.getBlogs();
    };
    PostblogComponent.prototype.select = function (blog) {
        this.currentBlog = blog;
    };
    PostblogComponent.prototype.getBlogs = function () {
        var _this = this;
        this.postblogService.getBlogs()
            .subscribe(function (blogs) {
            _this.blogs = blogs;
        });
    };
    PostblogComponent.prototype.deleteBlog = function (blog) {
        this.blogs = this.blogs.filter(function (bl) { return bl !== blog; });
        this.postblogService.deleteBlog(blog);
    };
    PostblogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postblog',
            template: __webpack_require__(/*! ./postblog.component.html */ "./src/app/blog/postblog/postblog.component.html"),
            styles: [__webpack_require__(/*! ./postblog.component.css */ "./src/app/blog/postblog/postblog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_postblog_service__WEBPACK_IMPORTED_MODULE_2__["PostblogService"]])
    ], PostblogComponent);
    return PostblogComponent;
}());



/***/ }),

/***/ "./src/app/blogB.ts":
/*!**************************!*\
  !*** ./src/app/blogB.ts ***!
  \**************************/
/*! exports provided: MBlogP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MBlogP", function() { return MBlogP; });
var MBlogP = /** @class */ (function () {
    function MBlogP(id, title, description, url, date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.date = date;
    }
    return MBlogP;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    padding: 5px;\r\n    margin: 10px;\r\n}\r\n#contact{\r\n   text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0dBQ0csa0JBQWtCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuI2NvbnRhY3R7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-4\">\n  <h1 class=\"text-center text-secondary mb-5\">TREKKING GEAR & TREKKING ACCESSORIES</h1>\n  <div class=\"form-row text-center\">\n    <div class=\"col-12 col-sm\">\n      <div class=\" alert alert-secondary alert-rounded alert-secondary-outline\" role=\"alert\">\n        1. DELIVERY INFORMATION\n      </div>\n    </div>\n    <div class=\"col-12 col-sm\">\n      <div class=\" alert alert-secondary alert-rounded alert-secondary-outline\" role=\"alert\">\n        2.SHIPPING & PAYMENT \n      </div>\n    </div>\n    <div class=\"col-12 col-sm\">\n      <div class=\" alert alert-secondary alert-rounded alert-secondary-outline\" role=\"alert\">\n        3.THANK YOU \n      </div>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center mt-5\">\n    <div class=\"col-md-8\">\n        <div id=\"naslov\">\n            <h5>SHOPPING CART LIST<i class=\"fas fa-shopping-cart ml-2\"></i></h5>\n        </div>\n     \n      <table class=\"table  col-md-10  table-light table-bordered table-hover\" >\n          <thead>\n              <tr class=\"bg-secondary\">\n                  <td></td>\n                  <td>List of products</td>\n                  <td>Price</td>\n                  <td>Quantity</td>\n                  <td>Total</td>\n              </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor=\"let proizvod of korpa\">\n                  <td><img class=\"cars-img-top align-middle\" [src]=\"proizvod.url\" style=\"height:80px ; width: auto ;\"></td>\n                  <td class=\"align-middle\" style=\"text-align: left;\">{{proizvod.name}}</td>\n                  <td class=\"align-middle\">{{proizvod.price}}</td>\n                  <td class=\"align-middle\"></td>\n                  <td class=\"align-middle\"></td>\n              </tr>\n              <tr>\n                <td></td>\n                <td class=\"align-middle\" ></td>\n                <td class=\"align-middle\"></td>\n                <td class=\"align-middle\">{{brojStavki()}}</td>\n                <td class=\"align-middle\"></td>\n            </tr>\n          </tbody>\n        </table>\n    </div>\n  </div>\n  <section id=\"contact\" class=\"py-3\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"card p-4\" id=\"contact\">\n                <div class=\"card-body\">\n                  <h4>About us</h4>\n                  <p>Contact us for all questions</p>\n                  <hr/>\n                  <h4>Address</h4>\n                  <p><i class=\"fas fa-home\"></i> Partizanskih baza 4, Novi Sad, Serbia</p>\n                  <hr/>\n                  <h4>Email</h4>\n                  <p><i class=\"fas fa-envelope\"></i> mbakoc81@gmail.com</p>\n                  <hr/>\n                  <h4>Phone</h4>\n                  <p><i class=\"fas fa-mobile\"></i> +381 62 132 45 32</p>\n                </div>\n              </div>\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                  <h3>\n                    <strong>PAYMENT METHOD<i class=\"fas fa-money-bill-alt ml-2\"></i></strong> \n                    </h3>\n                <hr/>\n                <form [formGroup]=\"signupForm\" (ngSubmit)=\"onPosalji()\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <!--<label for=\"name\">Name</label>-->\n                            <input \n                            type=\"text\" \n                            id=\"name\" \n                            formControlName=\"name\"\n                            class=\"form-control\"\n                            placeholder=\"Name\">\n                            <span *ngIf=\"!signupForm.get('name').valid && signupForm.get('name').touched\">\n                              Enter your name!</span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <!--<label for=\"surname\">Surname</label>-->\n                            <input \n                            type=\"text\" \n                            id=\"surname\" \n                            formControlName=\"surname\"\n                            class=\"form-control\"\n                            placeholder=\"Surname\">\n                            <span *ngIf=\"!signupForm.get('surname').valid && signupForm.get('surname').touched\">\n                              Enter your name!</span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <!--<label for=\"email\">Email</label>-->\n                            <input \n                              type=\"email\" \n                              id=\"email\" \n                              formControlName=\"email\"\n                              class=\"form-control\"\n                              placeholder=\"Email\"/>\n                              <span *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\">\n                                Please enter a valid email!</span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <!--<label for=\"phone\">Phone number:</label>-->\n                            <input \n                              type=\"phone\" \n                              id=\"phone\" \n                              formControlName=\"phone\"\n                              class=\"form-control\" \n                              placeholder=\"Phone number\"/>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <textarea \n                              class=\"form-control\"\n                              id=\"textarea\"\n                              formControlName=\"textarea\"\n                              class=\"form-control\"\n                              placeholder=\"Write your message..\">\n                            </textarea>\n                        </div>\n                      </div>\n                      <div class=\"col-md-10\">\n                        <span *ngIf=\"!signupForm.valid && signupForm.touched\">\n                            Fill in the form!</span><br>\n                      </div>      \n                   </div>\n                   <div class=\"form-row mt-4\">\n                      <label for=\"paymentmethod\">Choose payment method</label>\n                      <div class=\"form-group col-md-12\">\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n                            <label class=\"form-check-label\" for=\"inlineRadio1\">Pay on delivery <i class=\"fas fa-truck\"></i></label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n                            <label class=\"form-check-label\" for=\"inlineRadio2\">Pay by ATM transfer <i class=\"fab fa-cc-mastercard\"></i><i class=\"fab fa-cc-visa\"></i></label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n                            <label class=\"form-check-label\" for=\"inlineRadio3\">Pay by electronic transfer <i class=\"fab fa-cc-paypal\"></i></label>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-row\">\n                      <div class=\"form-group col-md-12\">\n                        <label for=\"imputCard\">Enter your card number</label>\n                        <input type=\"number\" class=\"form-control\" id=\"imputCard\" placeholder=\"\">\n                      </div>\n                    </div>\n                    <div class=\"form-row col-md-6\">\n                      <div class=\"form-group col-md-12\">\n                        <label for=\"exampleFormControlInput1\"></label>\n                      </div>\n                    </div>\n                    <div class=\"form-row\">\n                      <div class=\"form-group col-md-6\">\n                        <h5>Choose a store</h5>\n                          <label for=\"inputCity\"> Choose your store city.</label>\n                          <select id=\"inputCity\" class=\"form-control\" required>\n                          <option selected value=\"\">Choose...</option>\n                          <option>Novi Sad</option>\n                          <option>Beograd</option>\n                          <option>Subotica</option>\n                          <option>Nis</option>\n                          <option>Zrenjanin</option>\n                          </select>\n                        <div class=\"invalid-feedback\">\n                          Choose your store city.\n                        </div>\n                      </div>\n                    </div>\n                      <button type=\"submit\" class=\"btn btn-outline-info\" (click)=\"onPosalji()\">Continue to buy</button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr/>\n      </div>\n    </section>\n  <!--<div class=\"container\">\n    <hr/>\n    <h5>\n      PAYMENT METHOD<i class=\"fas fa-money-bill-alt ml-2\"></i>\n    </h5>\n\n    <form action=\"\" novalidate>\n      <div class=\"form-row mt-4\">\n        <label for=\"paymentmethod\">Choose payment method</label>\n        <div class=\"form-group col-md-12\">\n          <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n              <label class=\"form-check-label\" for=\"inlineRadio1\">Pay on delivery </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n              <label class=\"form-check-label\" for=\"inlineRadio2\">Pay by ATM transfer </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n              <label class=\"form-check-label\" for=\"inlineRadio3\">Pay by electronic transfer </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-12\">\n          <label for=\"imputCard\">Enter your card name</label>\n          <input type=\"text\" class=\"form-control\" id=\"imputCard\" placeholder=\"\">\n        </div>\n      </div>\n      <div class=\"form-row col-md-6\">\n        <div class=\"form-group col-md-12\">\n          <label for=\"exampleFormControlInput1\"></label>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <h5>Choose a store</h5>\n            <label for=\"inputCity\"> Choose your store city.</label>\n            <select id=\"inputCity\" class=\"form-control\" required>\n            <option selected value=\"\">Choose...</option>\n            <option>Novi Sad</option>\n            <option>Beograd</option>\n            <option>Subotica</option>\n            <option>Nis</option>\n            <option>Zrenjanin</option>\n            </select>\n          <div class=\"invalid-feedback\">\n            Choose your store city.\n          </div>\n        </div>\n      </div>\n        <button type=\"submit\" class=\"btn btn-outline-secondary\">Continue to buy</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Checkout</button>\n    </form>\n  </div>\n</div>-->\n    \n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var CartComponent = /** @class */ (function () {
    function CartComponent(shoppingservice) {
        this.shoppingservice = shoppingservice;
        this.korpa = [];
        this.suma = 0;
        this.cene = [];
        this.korpa = this.shoppingservice.uzmiPredmete();
    }
    CartComponent.prototype.ngOnInit = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'surname': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'textarea': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    CartComponent.prototype.onPosalji = function () {
        console.log(this.signupForm);
        this.signupForm.reset();
    };
    CartComponent.prototype.isprazniKorpu = function () {
        this.korpa = this.shoppingservice.ocistiKorpu();
    };
    CartComponent.prototype.brojStavki = function () {
        return this.korpa.length;
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/galery/galery.component.css":
/*!*********************************************!*\
  !*** ./src/app/galery/galery.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: rgba(198, 230, 238, 0.794);\r\n    padding: 5px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n.row {\r\n    margin: 15px;\r\n}\r\n.thumbnails{\r\n    margin-right: -15px;\r\n  \r\n    \r\n\r\n}\r\n.thumbnails a {\r\n    float: left;\r\n    width: 25%;\r\n    padding-right: 15px;\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n    \r\n\r\n}\r\n.thumbnails img {\r\n    display: block;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}\r\n.thumbnails:hover img {\r\n    opacity: 0.6;\r\n    transform: scale(0.92) rotate(-3deg);\r\n}\r\n.thumbnails img:hover {\r\n    opacity: 1.0;\r\n    transform: scale(1.1) rotate(2deg);\r\n    box-shadow: 0 0 40px rgb(12, 133, 144);\r\n    \r\n}\r\n#grid1 {\r\n    height: auto;\r\n    padding-top: 20px;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n    padding-bottom: 100px;\r\n}\r\nh1{\r\n    color: white;\r\n    text-shadow: 2px 2px 4px #acb1f3;\r\n}\r\nhr{\r\n    border-top: 1px solid whitesmoke;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsZXJ5L2dhbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNENBQTRDO0lBQzVDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7Ozs7QUFJdkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7OztBQUcxQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQzs7QUFFcEM7QUFFQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsc0NBQXNDOztBQUUxQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvZ2FsZXJ5L2dhbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk4LCAyMzAsIDIzOCwgMC43OTQpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG4udGh1bWJuYWlsc3tcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIFxyXG59XHJcblxyXG4udGh1bWJuYWlsczpob3ZlciBpbWcge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkyKSByb3RhdGUoLTNkZWcpO1xyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWc6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgyZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYigxMiwgMTMzLCAxNDQpO1xyXG4gICAgXHJcbn1cclxuI2dyaWQxIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICNhY2IxZjM7XHJcbn1cclxuaHJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGVzbW9rZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/galery/galery.component.html":
/*!**********************************************!*\
  !*** ./src/app/galery/galery.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <h1>Trekking Image Galery</h1>\n  <hr/>\n</div>\n\n<div class=\"container\">\n  <div id=\"grid1\">\n  <div class=\"row thumbnails group\">\n    <a href=\"./assets/slike/trekking1.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking1.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking2.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking2.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking4.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking4.jpg\" class=\"img-fluid rounded\">\n    </a>\n  </div>\n  <div class=\"row thumbnails group\">\n    <a href=\"./assets/slike/trekking5.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking5.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking6.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking6.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking7.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking7.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking8.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking8.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking9.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking9.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking10.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking10.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking11.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking11.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking12.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking12.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking13.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking13.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking14.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking14.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking15.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking15.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking16.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking16.jpg\" class=\"img-fluid rounded\">\n    </a>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/galery/galery.component.ts":
/*!********************************************!*\
  !*** ./src/app/galery/galery.component.ts ***!
  \********************************************/
/*! exports provided: GaleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleryComponent", function() { return GaleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GaleryComponent = /** @class */ (function () {
    function GaleryComponent() {
    }
    GaleryComponent.prototype.ngOnInit = function () {
    };
    GaleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-galery',
            template: __webpack_require__(/*! ./galery.component.html */ "./src/app/galery/galery.component.html"),
            styles: [__webpack_require__(/*! ./galery.component.css */ "./src/app/galery/galery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GaleryComponent);
    return GaleryComponent;
}());



/***/ }),

/***/ "./src/app/home/carousel/carousel.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/carousel/carousel.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-3\">\n  <div class=\"carousel slide\" data-ride=\"carousel\" id=\"multi_item\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <div class=\"row\">\n          <div class=\"col-sm item\">\n            <div class=\"card\" style=\"width:300px; height:400px;\">\n              <img class=\"card-img-top\" src=\"./assets/slike/sat.jpg\" alt=\"\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Forerunner® 735XT</h4>\n                <a href=\"#\" class=\"btn btn-outline-primary\" [routerLink]=\"['/opis', 0]\">Shop now</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm item\">\n              <div class=\"card\" style=\"width:300px; height:400px;\">\n                  <img class=\"card-img-top\" src=\"/assets/slike/cipele1.jpg\" alt=\"Card image\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">Salewa Wild Hiker MID</h4>\n                    <a href=\"#\" class=\"btn btn-outline-primary\" [routerLink]=\"['/opis', 1]\">Shop now</a>\n                  </div>\n                </div>\n          </div>\n          <div class=\"col-sm item\">\n              <div class=\"card\" style=\"width:300px; height:400px;\">\n                  <img class=\"card-img-top\" src=\"/assets/slike/backpack.jpg\" alt=\"Card image\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">TRAIL BLITZ 12 - BACKPACK</h4>\n                    <a href=\"#\" class=\"btn btn-outline-primary\" [routerLink]=\"['/opis', 2]\">Shop now</a>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <div class=\"row\">\n          <div class=\"col-sm item\">\n              <div class=\"card\" style=\"width:300px; height:400px;\">\n                  <img class=\"card-img-top\" src=\"/assets/slike/ceonalampa.jpg\" alt=\"Card image\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">ASTRO175</h4>\n                    <a href=\"#\" class=\"btn btn-outline-primary\" [routerLink]=\"['/opis', 3]\">Shop now</a>\n                  </div>\n                </div>\n          </div>\n          <div class=\"col-sm item\">\n              <div class=\"card\" style=\"width:300px; height:400px;\">\n                  <img class=\"card-img-top\" src=\"/assets/slike/trailjacket.jpg\" alt=\"Card image\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">HELIO ACTIVE SHELL - MEN</h4>\n                    <a href=\"#\" class=\"btn btn-outline-primary\" [routerLink]=\"['/opis', 4]\">Shop now</a>\n                  </div>\n                </div>\n          </div>\n          <div class=\"col-sm item\">\n              <div class=\"card\" style=\"width:300px; height:400px;\">\n                  <img class=\"card-img-top\" src=\"/assets/slike/cipele.jpg\" alt=\"Card image\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">Salomon X Ultra 3 Mid Goretex </h4>\n                    <a href=\"#\" class=\"btn btn-outline-primary\" [routerLink]=\"['/opis', 5]\">Shop now</a>\n                  </div>\n                </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#multi_item\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#multi_item\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <hr/>\n</div>\n"

/***/ }),

/***/ "./src/app/home/carousel/carousel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.ts ***!
  \*****************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/home/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/home/carousel/carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/home/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/contact/contact.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n    height: 300px;\r\n}\r\ni{\r\n    padding: 10px;\r\n}\r\n#podaci{\r\n    text-align: center;\r\n}\r\ninput{\r\n    border: none;\r\n    border-bottom: 1px solid gray;\r\n}\r\ninput .ng-invalid .ng-touched{\r\n    border-bottom: 1px solid red;\r\n}\r\nspan{\r\n    color: red;\r\n}\r\n.col-md-4{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwe1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5pe1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4jcG9kYWNpe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlucHV0e1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuaW5wdXQgLm5nLWludmFsaWQgLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xyXG59XHJcbnNwYW57XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5jb2wtbWQtNHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"py-3\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n          <div class=\"card p-4\">\n            <div class=\"card-body\">\n              <h4>About us</h4>\n              <p>Contact us for all questions</p>\n              <hr/>\n              <h4>Address</h4>\n              <p><i class=\"fas fa-home\"></i>Partizanskih baza 4, Novi Sad, Serbia</p>\n              <hr/>\n              <h4>Email</h4>\n              <p><i class=\"fas fa-envelope\"></i>mbakoc81@gmail.com</p>\n              <hr/>\n              <h4>Phone</h4>\n              <p><i class=\"fas fa-mobile\"></i>+381 62 132 45 32</p>\n            </div>\n          </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card p-4\">\n          <div class=\"card-body\">\n            <h3>Fill in the form to be in touch</h3>\n            <hr/>\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"onPosalji()\">\n            <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <!--<label for=\"name\">Name</label>-->\n                        <input \n                        type=\"text\" \n                        id=\"name\" \n                        formControlName=\"name\"\n                        class=\"form-control\"\n                        placeholder=\"Name\">\n                        <span *ngIf=\"!signupForm.get('name').valid && signupForm.get('name').touched\">\n                          Enter your name!</span>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <!--<label for=\"surname\">Surname</label>-->\n                        <input \n                        type=\"text\" \n                        id=\"surname\" \n                        formControlName=\"surname\"\n                        class=\"form-control\"\n                        placeholder=\"Surname\">\n                        <span *ngIf=\"!signupForm.get('surname').valid && signupForm.get('surname').touched\">\n                          Enter your name!</span>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <!--<label for=\"email\">Email</label>-->\n                        <input \n                          type=\"email\" \n                          id=\"email\" \n                          formControlName=\"email\"\n                          class=\"form-control\"\n                          placeholder=\"Email\"/>\n                          <span *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\">\n                            Please enter a valid email!</span>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <!--<label for=\"phone\">Phone number:</label>-->\n                        <input \n                          type=\"phone\" \n                          id=\"phone\" \n                          formControlName=\"phone\"\n                          class=\"form-control\" \n                          placeholder=\"Phone number\"/>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <textarea \n                          class=\"form-control\"\n                          id=\"textarea\"\n                          formControlName=\"textarea\"\n                          class=\"form-control\"\n                          placeholder=\"Write your message..\">\n                        </textarea>\n                    </div>\n                  </div>\n                  <div class=\"col-md-10\">\n                    <span *ngIf=\"!signupForm.valid && signupForm.touched\">\n                        Fill in the form!</span><br>\n                    <button class=\"btn btn-outline-primary btn-block\" type=\"submit\">Send</button>\n                  </div>      \n               </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr/>\n  </div>\n</section>\n\n<div class=\"container\">\n  <agm-map \n        [latitude]=\"latitude\" \n        [longitude]=\"longitude\" \n        (mapClick)=\"onChoseLocation($event)\" >\n            <agm-marker \n                [latitude]=\"latitude\" \n                [longitude]=\"longitude\">\n            </agm-marker>\n    </agm-map>\n</div>\n"

/***/ }),

/***/ "./src/app/home/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.latitude = 45.2671;
        this.longitude = 19.8335;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'surname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'textarea': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    ContactComponent.prototype.onPosalji = function () {
        console.log(this.signupForm);
        this.signupForm.reset();
    };
    ContactComponent.prototype.onChoseLocation = function (event) {
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/home/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/home/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#section{\r\n    background: url(/assets/slike/trekking2.jpg) no-repeat;\r\n    background-size: cover;\r\n    max-height: 620px;\r\n    width: 100%;\r\n    min-height: 620px;\r\n    padding: 50px;\r\n    \r\n}\r\n.container{\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    position: relative;\r\n    padding: 150px;\r\n    margin-top: 0;\r\n    color: white;\r\n    font-size: 1.5em; \r\n}\r\n#text{\r\n    max-width: 100%;\r\n    text-align: center;\r\n    color: white;\r\n    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzREFBc0Q7SUFDdEQsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLCtEQUErRDtJQUMvRCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL3NsaWtlL3RyZWtraW5nMi5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNjIwcHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgXHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtOyBcclxufVxyXG4jdGV4dHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaywgMCAwIDI1cHggYmx1ZSwgMCAwIDVweCBkYXJrYmx1ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"section\">\n  <div class=\"container\">\n    \n      <div class=\"col-md-12 col-sm-12\" id=\"text\">\n        <h1>Trekking</h1>\n        <p id=\"text\">\"Trekking is a form of walking, undertaken with the specific purpose of exploring and enjoying the scenery.\"</p>\n      </div>\n    \n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/home/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/home/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/home/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-carousel></app-carousel>\n<app-video></app-video>\n<app-homegalery></app-homegalery>\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/homegalery/homegalery.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/homegalery/homegalery.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: rgba(198, 230, 238, 0.794);\r\n    padding: 5px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n.row {\r\n    margin: 15px;\r\n}\r\n.thumbnails{\r\n    margin-right: -15px;\r\n  \r\n    \r\n\r\n}\r\n.thumbnails a {\r\n    float: left;\r\n    width: 25%;\r\n    padding-right: 15px;\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n    \r\n\r\n}\r\n.thumbnails img {\r\n    display: block;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}\r\n.thumbnails:hover img {\r\n    opacity: 0.6;\r\n    transform: scale(0.92) rotate(-3deg);\r\n}\r\n.thumbnails img:hover {\r\n    opacity: 1.0;\r\n    transform: scale(1.1) rotate(2deg);\r\n    box-shadow: 0 0 40px rgb(12, 133, 144);\r\n    \r\n}\r\n#grid1 {\r\n    height: auto;\r\n    padding-top: 20px;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lZ2FsZXJ5L2hvbWVnYWxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1COzs7O0FBSXZCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCOzs7QUFHMUI7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7O0FBRXBDO0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLHNDQUFzQzs7QUFFMUM7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWVnYWxlcnkvaG9tZWdhbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk4LCAyMzAsIDIzOCwgMC43OTQpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG4udGh1bWJuYWlsc3tcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIFxyXG59XHJcblxyXG4udGh1bWJuYWlsczpob3ZlciBpbWcge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkyKSByb3RhdGUoLTNkZWcpO1xyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWc6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgyZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYigxMiwgMTMzLCAxNDQpO1xyXG4gICAgXHJcbn1cclxuI2dyaWQxIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/homegalery/homegalery.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/homegalery/homegalery.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"grid1\">\n  <div class=\"row thumbnails group\">\n    <a href=\"./assets/slike/trekking1.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking1.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking2.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking2.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking4.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking4.jpg\" class=\"img-fluid rounded\">\n    </a>\n  </div>\n  <div class=\"row thumbnails group\">\n    <a href=\"./assets/slike/trekking5.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking5.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking6.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking6.jpg\" class=\"img-fluid rounded\">\n    </a>\n    <a href=\"./assets/slike/trekking7.jpg\"  data-lightbox=\"gallery\" class=\"col-md-4\">\n      <img src=\"./assets/slike/trekking7.jpg\" class=\"img-fluid rounded\">\n    </a>\n  </div>\n  <button type=\"button\" class=\"btn btn-outline-info\" routerLink=\"/galery\">See All</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/home/homegalery/homegalery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/homegalery/homegalery.component.ts ***!
  \*********************************************************/
/*! exports provided: HomegaleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomegaleryComponent", function() { return HomegaleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomegaleryComponent = /** @class */ (function () {
    function HomegaleryComponent() {
    }
    HomegaleryComponent.prototype.ngOnInit = function () {
    };
    HomegaleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homegalery',
            template: __webpack_require__(/*! ./homegalery.component.html */ "./src/app/home/homegalery/homegalery.component.html"),
            styles: [__webpack_require__(/*! ./homegalery.component.css */ "./src/app/home/homegalery/homegalery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomegaleryComponent);
    return HomegaleryComponent;
}());



/***/ }),

/***/ "./src/app/home/video/video.component.css":
/*!************************************************!*\
  !*** ./src/app/home/video/video.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    text-align: center;\r\n    background: url(/assets/slike/mountain-984083_1280.jpg) no-repeat;\r\n    background-size: cover; \r\n    padding: 20px; \r\n}\r\nvideo{\r\n    max-width: 100%;\r\n}\r\ntable{\r\n    border-radius: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92aWRlby92aWRlby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlFQUFpRTtJQUNqRSxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS92aWRlby92aWRlby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL3NsaWtlL21vdW50YWluLTk4NDA4M18xMjgwLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICBwYWRkaW5nOiAyMHB4OyBcclxufVxyXG52aWRlb3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG50YWJsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/video/video.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/video/video.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"video\">\n    <video width=\"520\" height=\"440\" controls>\n      <source src=\"./assets/slike/190212_04_MarrakechAtlasMountains_HD_29.mp4\" type=\"video/mp4\">\n    Your browser does not support the video tag.\n    </video>\n  </div>\n  <table class=\"table table-borderless table-dark table-hover \">\n    <tbody>\n      <tr>\n        <td><i class=\"far fa-caret-square-right\"></i></td>\n        <td>Mont Blan</td>\n        <td>john@example.com</td>\n      </tr>\n      <tr>\n        <td><i class=\"far fa-caret-square-right\"></i></td>\n        <td>Atlas Mountains</td>\n        <td>mary@example.com</td>\n      </tr>\n      <tr>\n        <td><i class=\"far fa-caret-square-right\"></i></td>\n        <td>Mountain bridge</td>\n        <td>july@example.com</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/home/video/video.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/video/video.component.ts ***!
  \***********************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
        this.imageShow = true;
        this.video1Show = false;
        this.video2Show = false;
        this.video3Show = false;
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent.prototype.video1Play = function () {
        this.imageShow = false;
        this.video1Show = true;
    };
    VideoComponent.prototype.video2Play = function () {
        this.imageShow = false;
        this.video2Show = true;
    };
    VideoComponent.prototype.video3Play = function () {
        this.imageShow = false;
        this.video3Show = true;
    };
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/home/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/home/video/video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/in-memori-store.ts":
/*!************************************!*\
  !*** ./src/app/in-memori-store.ts ***!
  \************************************/
/*! exports provided: InMemoryStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryStore", function() { return InMemoryStore; });
var InMemoryStore = /** @class */ (function () {
    function InMemoryStore() {
    }
    InMemoryStore.prototype.createDb = function () {
        var blogovi = [
            {
                id: 0,
                title: 'Trekking in Nepal',
                description: 'Nepal is known globally for its picturesque...',
                url: './assets/slike/trekking1.jpg',
                date: '20.08.2019'
            },
            {
                id: 1,
                title: 'TIGER LEAPING GORGE TREKKING GUIDE',
                description: 'Our ultimate Tiger Leaping Gorge trekking guide...',
                url: './assets/slike/trekking2.jpg',
                date: '23.06.2019'
            },
            {
                id: 2,
                title: '6 MEMORABLE DAY HIKES IN THE BALKANS',
                description: 'From exploring the sand pyramids of Bulgaria...',
                url: './assets/slike/trekking4.jpg',
                date: '03.06.2019'
            },
            {
                id: 2,
                title: 'USHUAIA – CHILLING AT THE END OF THE WORLD',
                description: 'I’ve always been inspired by the far corners...',
                url: './assets/slike/trekking7.jpg',
                date: '03.06.2019'
            }
        ];
        return { blogovi: blogovi };
    };
    return InMemoryStore;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    background-color: rgb(30, 135, 167);\r\n    font-size: 1.2em;\r\n}\r\nstrong{\r\n    text-shadow: 1px 1px 2px rgb(190, 183, 183), 0 0 25px rgb(108, 108, 187), 0 0 5px rgb(170, 170, 228);\r\n}\r\nli{\r\n    position: relative;\r\n    padding: 2px;\r\n    margin: 2px;\r\n }\r\nli:hover {\r\n    box-shadow: 0 2px 2px rgba(202, 189, 189, 0.3);\r\n    border-bottom: 2px solid rgb(187, 222, 228);\r\n    left: .1em;\r\n    border-radius: 5px;\r\n    left: 3px;\r\n    color: white;\r\n    font-weight: bold;\r\n }\r\n.dropdown-menu{\r\n    background-color: rgb(115, 188, 211);\r\n }\r\n.dropdown-item{\r\n    color:rgb(230, 240, 243);\r\n }\r\n.dropdown-item:hover{\r\n    background-color: rgb(131, 192, 228);\r\n    color:rgb(195, 240, 184);\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0dBQW9HO0FBQ3hHO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7Q0FDZDtBQUNBO0lBQ0csOENBQThDO0lBQzlDLDJDQUEyQztJQUMzQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCO0FBQ0E7SUFDRyxvQ0FBb0M7Q0FDdkM7QUFDQTtJQUNHLHdCQUF3QjtDQUMzQjtBQUNBO0lBQ0csb0NBQW9DO0lBQ3BDLHdCQUF3QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMTM1LCAxNjcpO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5zdHJvbmd7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDE5MCwgMTgzLCAxODMpLCAwIDAgMjVweCByZ2IoMTA4LCAxMDgsIDE4NyksIDAgMCA1cHggcmdiKDE3MCwgMTcwLCAyMjgpO1xyXG59XHJcbmxpe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiB9XHJcbiBsaTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgyMDIsIDE4OSwgMTg5LCAwLjMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxODcsIDIyMiwgMjI4KTtcclxuICAgIGxlZnQ6IC4xZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIC5kcm9wZG93bi1tZW51e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNSwgMTg4LCAyMTEpO1xyXG4gfVxyXG4gLmRyb3Bkb3duLWl0ZW17XHJcbiAgICBjb2xvcjpyZ2IoMjMwLCAyNDAsIDI0Myk7XHJcbiB9XHJcbiAuZHJvcGRvd24taXRlbTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDE5MiwgMjI4KTtcclxuICAgIGNvbG9yOnJnYigxOTUsIDI0MCwgMTg0KTtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-fixed-top navbar-expand-md\">\n  <div class=\"container\">\n    <a href=\"#\" class=\"navbar-brand\"><img src=\"assets/slike/trekingpng.png\"><strong>Trekking World</strong></a>\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navigacija\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navigacija\">\n      <ul class=\"navbar-nav ml-auto\">\n      <!--<ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">-->\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/about\" class=\"nav-link\">About</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/blog\" class=\"nav-link\">Blog</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/galery\" class=\"nav-link\">Galery</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/shop\" class=\"nav-link\">Shop</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" routerLink=\"/cart\"><i class=\"fas fa-shopping-cart\"></i></a>\n        </li>\n      <!--</ng-template>-->\n      <!--<ng-template [ngIf]=\"!autentifikacijaService.prijavljen()\">-->\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-user-friends\"></i></a>\n            <div class=\"dropdown-menu\">\n              <a class=\"dropdown-item\" routerLink=\"/signup\" >Sign Up</a>\n              <a class=\"dropdown-item\" routerLink=\"/signin\">Sign In</a>\n              <a class=\"dropdown-item\" (click)=\"odjaviSe()\" style=\"color:whitesmoke;\">Sign Out</a>\n            </div>\n        </li>\n      <!--</ng-template>-->\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/opisproizvoda/opisproizvoda.component.css":
/*!***********************************************************!*\
  !*** ./src/app/opisproizvoda/opisproizvoda.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containe{\r\n    margin: 20px;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n.card{\r\n    padding: 15px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bpc3Byb2l6dm9kYS9vcGlzcHJvaXp2b2RhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL29waXNwcm9penZvZGEvb3Bpc3Byb2l6dm9kYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5le1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/opisproizvoda/opisproizvoda.component.html":
/*!************************************************************!*\
  !*** ./src/app/opisproizvoda/opisproizvoda.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Product Details</h2>\n  <hr/>\n  <div class=\"containe p-4\">\n    <div class=\"row\">\n      <div *ngIf=\"proizvod\">\n        <div class=\"col-md-8\">\n          <div class=\"card\">\n            <img class=\"cars-img-top\" [src]=\"proizvod.url\" alt=\"pantalone\" title=\"M's Trekking Lite Pant\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">{{proizvod.name}}</h4>\n              <p class=\"card-text\">${{proizvod.price}}</p>\n              <p class=\"card-text\" *ngIf=\"proizvod.description\">{{proizvod.description}}</p>\n              <a class=\"add-to-cart btn btn-primary\"\n               routerLink=\"/cart\"\n               (click)=\"staviUKorpu(proizvod)\">Buy Product</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/opisproizvoda/opisproizvoda.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/opisproizvoda/opisproizvoda.component.ts ***!
  \**********************************************************/
/*! exports provided: OpisproizvodaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpisproizvodaComponent", function() { return OpisproizvodaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_proizvodi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/proizvodi */ "./src/app/proizvodi.ts");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shopping.service */ "./src/app/shopping.service.ts");





var OpisproizvodaComponent = /** @class */ (function () {
    function OpisproizvodaComponent(route, shoppingService) {
        this.route = route;
        this.shoppingService = shoppingService;
        this.proizvodi = src_app_proizvodi__WEBPACK_IMPORTED_MODULE_3__["proizvodi"];
    }
    OpisproizvodaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.proizvod = _this.proizvodi[+params.get('proizvodId')];
        });
    };
    OpisproizvodaComponent.prototype.staviUKorpu = function (proizvod) {
        window.alert('Your product has been added to the cart!');
        this.shoppingService.dodajUKorpu(proizvod);
    };
    OpisproizvodaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opisproizvoda',
            template: __webpack_require__(/*! ./opisproizvoda.component.html */ "./src/app/opisproizvoda/opisproizvoda.component.html"),
            styles: [__webpack_require__(/*! ./opisproizvoda.component.css */ "./src/app/opisproizvoda/opisproizvoda.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shopping_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingService"]])
    ], OpisproizvodaComponent);
    return OpisproizvodaComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Page not found!!</h2>\n<p>Please go back on previous page...</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/postblog.service.ts":
/*!*************************************!*\
  !*** ./src/app/postblog.service.ts ***!
  \*************************************/
/*! exports provided: PostblogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostblogService", function() { return PostblogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostblogService = /** @class */ (function () {
    function PostblogService(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    PostblogService.prototype.getBlogs = function () {
        return this.httpClient.get('api/blogovi', {
            headers: this.headers
        });
    };
    PostblogService.prototype.storeBlogs = function (blog) {
        return this.httpClient.post('api/blogovi', blog, {
            headers: this.headers
        });
    };
    PostblogService.prototype.deleteBlog = function (blogD) {
        return this.httpClient.delete('api/blogovi/' + blogD.id, {
            headers: this.headers
        });
    };
    PostblogService.prototype.editBlog = function (blogE) {
        return this.httpClient.put('api/blogovi', blogE, {
            headers: this.headers
        });
    };
    PostblogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostblogService);
    return PostblogService;
}());



/***/ }),

/***/ "./src/app/proizvodi.ts":
/*!******************************!*\
  !*** ./src/app/proizvodi.ts ***!
  \******************************/
/*! exports provided: proizvodi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proizvodi", function() { return proizvodi; });
var proizvodi = [
    { 'name': 'Forerunner® 735XT',
        'price': '225.99',
        'description': 'Be a better athlete today than you were yesterday with Forerunner 735XT. This GPS running watch with multisport features is for athletes who want dialed-in data for training and a lighter load on race day.',
        'url': '/assets/slike/sat.jpg'
    },
    { 'name': 'Salewa Wild Hiker MID Goretex',
        'price': '125.99',
        'description': 'The Wild Hiker Is A Flexible And Comfortable Hiking Boot Designed For Mixed Mountain Terrain.Its Versatile And Multifunctional Vibram Oban Outsole Provides An Optimal Balance Between Traction, Flexibility And Self-Cleaning Lugs For Superb Grip And Stability.',
        'url': '/assets/slike/cipele1.jpg'
    },
    { 'name': 'TRAIL BLITZ 12 - BACKPACK',
        'price': '39.95',
        'description': 'Whether you’re bagging the Grand Teton in a quick car-to-car push, heading into the mountains for a scramble up your favorite ridge, or simply looking for a no-frills day pack for a few days of travel, the Trail Blitz carries everything you need while remaining light and fast. Featuring our signature Blitz-style main opening for quick and easy access to your gear.',
        'url': '/assets/slike/backpack.jpg'
    },
    { 'name': 'ASTRO175',
        'price': '17.99',
        'description': 'Strong enough for any mountain pursuit and compact enough for backup or emergency use, the new Astro175 boasts a powerful beam at 175 lumens, yet is simple, sleek and affordable',
        'url': '/assets/slike/ceonalampa.jpg'
    },
    { 'name': 'HELIO ACTIVE SHELL - MEN',
        'price': '175.99',
        'description': 'An ultralight ski touring jacket, the Black Diamond Helio Active is the ultimate shell for fast and light mountain missions. Featuring Gore-Tex® Active technology, this 3-layer jacket is extremely breathable, yet durably waterproof and windproof, making it the ideal solution for high-intensity days in the backcountry',
        'url': '/assets/slike/trailjacket.jpg'
    },
    { 'name': 'Salomon X Ultra 3 Mid Goretex',
        'price': '125.99',
        'description': 'If you are one of those who prefers a high or medium cane trekking boot, the Salomon X Ultra 3 Mid Goretex is your perfect choice for maximum stability and control of the ankle. ',
        'url': '/assets/slike/cipele.jpg'
    },
    { 'name': 'CIRQUE SHELL - WOMEN',
        'price': '125.99',
        'description': 'The Cirque Shell is a versatile, three-season shell built for climbing and trekking. Featuring 4-way stretch, double-weave fabric that’s weather resistant, the Cirque Shell keeps you moving fast in the mountains',
        'url': '/assets/slike/WJacket.jpg'
    },
    { 'name': 'BD FORGED TEE - MEN',
        'price': '25.99',
        'description': 'Our equipment and apparel has stood the test of rugged ascents for decades and has forever forged its way to the top. Wear the organic cotton BD.Forged tee with pride. ',
        'url': '/assets/slike/T-shirt.jpg'
    }
];


/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-6{\r\n    text-align: center;\r\n}\r\n.card{\r\n    text-align: center;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    height: 530px;\r\n}\r\nimg{\r\n    max-height: 200px;\r\n    width: 150px;\r\n}\r\n#slika{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtNntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbiNzbGlrYXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-2\">\n  <div *ngFor=\"let proizvod of proizvodi; index as proizvodId\">\n     <div class=\"col-md-6\">\n         <div class=\"card\" style=\"width: 20rem\">\n            <div id=\"slika\">\n             <img class=\"cars-img-top\" [src]=\"proizvod.url\"/>\n            </div>\n             <div class=\"card-block\">\n               <h4 class=\"card-title\">{{proizvod.name}}</h4>\n               <p class=\"card-text\">${{proizvod.price}}</p>\n               <p class=\"card-text\" *ngIf=\"proizvod.description\">{{proizvod.description}}</p>\n               <a class=\"add-to-cart btn btn-primary\" [routerLink]=\"['/opis', proizvodId]\">See details</a>\n             </div>\n     </div>\n </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var _proizvodi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proizvodi */ "./src/app/proizvodi.ts");




var ShopComponent = /** @class */ (function () {
    function ShopComponent(shoppingService) {
        this.shoppingService = shoppingService;
        this.proizvodi = _proizvodi__WEBPACK_IMPORTED_MODULE_3__["proizvodi"];
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/shopping.service.ts":
/*!*************************************!*\
  !*** ./src/app/shopping.service.ts ***!
  \*************************************/
/*! exports provided: ShoppingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingService", function() { return ShoppingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _proizvodi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proizvodi */ "./src/app/proizvodi.ts");



var ShoppingService = /** @class */ (function () {
    function ShoppingService() {
        this.proizvodi = _proizvodi__WEBPACK_IMPORTED_MODULE_2__["proizvodi"];
        this.korpa = [];
    }
    ShoppingService.prototype.dodajUKorpu = function (proizvod) {
        this.korpa.push(proizvod);
    };
    ShoppingService.prototype.uzmiPredmete = function () {
        return this.korpa;
    };
    ShoppingService.prototype.ocistiKorpu = function () {
        this.korpa = [];
        return this.korpa;
    };
    ShoppingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingService);
    return ShoppingService;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.component.css":
/*!*************************************************!*\
  !*** ./src/app/shopping/shopping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL3Nob3BwaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping/shopping.component.html":
/*!**************************************************!*\
  !*** ./src/app/shopping/shopping.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shopping works!\n</p>\n"

/***/ }),

/***/ "./src/app/shopping/shopping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shopping/shopping.component.ts ***!
  \************************************************/
/*! exports provided: ShoppingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function() { return ShoppingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent() {
    }
    ShoppingComponent.prototype.ngOnInit = function () {
    };
    ShoppingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping',
            template: __webpack_require__(/*! ./shopping.component.html */ "./src/app/shopping/shopping.component.html"),
            styles: [__webpack_require__(/*! ./shopping.component.css */ "./src/app/shopping/shopping.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingComponent);
    return ShoppingComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#section{\r\n    background: url(/assets/slike/trekking1.jpg) no-repeat;\r\n    background-size: cover;\r\n    min-height: 700px;\r\n    \r\n}\r\n#section .bckg{\r\n    background-color: rgba( 12, 12, 12, 0.5);\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: 700px;\r\n    text-align: center;\r\n    padding: 150px;\r\n}\r\n.card-form{\r\n   opacity: 0.8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0RBQXNEO0lBQ3RELHNCQUFzQjtJQUN0QixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtHQUNHLFlBQVk7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvc2xpa2UvdHJla2tpbmcxLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgXHJcbn1cclxuI3NlY3Rpb24gLmJja2d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCAxMiwgMTIsIDEyLCAwLjUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1MHB4O1xyXG59XHJcbi5jYXJkLWZvcm17XHJcbiAgIG9wYWNpdHk6IDAuODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"section\">\n  <div class=\"bckg\">\n    <div class=\"container content\">\n      <div class=\"row\">\n        <div class=\"col-md-6 d-none d-md-block text-light\">\n          <h1 class=\"display-4\"><strong>Sign In</strong></h1>\n          <p>Sign In if you wont to see all content of page</p>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card bg-success text-center card-form\">\n            <div class=\"card-body\">\n              <form (ngSubmit)=\"prijaviSe(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Email\" id=\"email\" name=\"email\" ngModel class=\"form-control form-control-lg\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" placeholder=\"Password\" id=\"password\" name=\"sifra\" ngModel class=\"form-control form-control-lg\">\n                </div>\n                <button class=\"btn btn-outline-info btn-block\" type=\"submit\">Sign In</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");



var SigninComponent = /** @class */ (function () {
    function SigninComponent(autentifikacijaService) {
        this.autentifikacijaService = autentifikacijaService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.prijaviSe = function (form) {
        var email = form.value.email;
        var sifra = form.value.sifra;
        this.autentifikacijaService.prijaviKorisnika(email, sifra);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__["AutentifikacijaService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#section{\r\n    background: url(/assets/slike/trekking1.jpg) no-repeat;\r\n    background-size: cover;\r\n    min-height: 700px;\r\n    \r\n}\r\n#section .bckg{\r\n    background-color: rgba( 12, 12, 12, 0.5);\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: 700px;\r\n    text-align: center;\r\n    padding: 150px;\r\n}\r\n.card-form{\r\n   opacity: 0.8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0RBQXNEO0lBQ3RELHNCQUFzQjtJQUN0QixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtHQUNHLFlBQVk7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvc2xpa2UvdHJla2tpbmcxLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgXHJcbn1cclxuI3NlY3Rpb24gLmJja2d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCAxMiwgMTIsIDEyLCAwLjUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1MHB4O1xyXG59XHJcbi5jYXJkLWZvcm17XHJcbiAgIG9wYWNpdHk6IDAuODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"section\">\n  <div class=\"bckg\">\n    <div class=\"container content\">\n      <div class=\"row\">\n        <div class=\"col-md-6 d-none d-md-block text-light\">\n          <h1 class=\"display-4\"><strong>Sign Up</strong></h1>\n          <p>Register if you wont to see all content of page</p>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card bg-warning text-center card-form\">\n            <div class=\"card-body\">\n              <form (ngSubmit)=\"registrujSe(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Email\" id=\"email\" name=\"email\" ngModel class=\"form-control form-control-lg\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" placeholder=\"Password\" id=\"password\" name=\"sifra\" ngModel class=\"form-control form-control-lg\">\n                </div>\n                <button class=\"btn btn-outline-info btn-block\" type=\"submit\">Sign Up</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(autentifikacijaService) {
        this.autentifikacijaService = autentifikacijaService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.registrujSe = function (form) {
        var email = form.value.email;
        var sifra = form.value.sifra;
        this.autentifikacijaService.registrujkorisnika(email, sifra);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__["AutentifikacijaService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\programiranje\SmartInIt kurs\KURS Zadaci\TrekkingAppF\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map