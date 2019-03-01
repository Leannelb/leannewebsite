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

/***/ "./src/app/app-material.ts":
/*!*********************************!*\
  !*** ./src/app/app-material.ts ***!
  \*********************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var materialComponets = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
];
var Material = /** @class */ (function () {
    function Material() {
    }
    Material = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: materialComponets,
            exports: materialComponets
        })
    ], Material);
    return Material;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_books_books_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/books/books.component */ "./src/app/components/books/books.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    // { path: 'about', component: AboutMeComponent },
    // { path: 'portfolio', component: PortfolioComponent },
    // { path: 'resume', component: ResumeComponent },
    // { path: 'code/:slug', component: CodeSnippitsComponent },
    { path: 'books', component: _components_books_books_component__WEBPACK_IMPORTED_MODULE_2__["BooksComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ".container {\n    display: flex; /* Or whatever */\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhLEVBQUUsZ0JBQWdCO0VBQ2pDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBPciB3aGF0ZXZlciAqL1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/code.service */ "./src/app/services/code.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'leannewebsite';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_services_code_service__WEBPACK_IMPORTED_MODULE_1__["CodeService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_code_snippits_code_snippits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/code-snippits/code-snippits.component */ "./src/app/components/code-snippits/code-snippits.component.ts");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_books_books_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/books/books.component */ "./src/app/components/books/books.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _app_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-material */ "./src/app/app-material.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
                _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"],
                _components_code_snippits_code_snippits_component__WEBPACK_IMPORTED_MODULE_8__["CodeSnippitsComponent"],
                _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_books_books_component__WEBPACK_IMPORTED_MODULE_12__["BooksComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_material__WEBPACK_IMPORTED_MODULE_15__["Material"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"]
            ],
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["APP_BASE_HREF"], useValue: window['_app_base'] || '/'
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-me/about-me.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-image{\n    height: 100vh;\n    width: 100vw;\n    background: url('sunset-image.png') no-repeat center center fixed; \n    background-size: cover;\n}\nh1{\n    color: #ffffff;\n    font-size: 3.5em;\n    font-family: 'Lobster';\ntext-align: center;\n}\n#about {\n    background: rgb(12, 3, 4);\n    padding-bottom: 66px;\n    padding-top:  66px;\n    overflow: hidden;\n    padding-left: 10%;\n    padding-right: 10%;\n    text-align: justify;\n }\n#about a, #about a:visited  { color: #fff; }\n#about a:hover, #about a:focus { color: #11ABB0; }\n#about h2 {\n    font: 22px/30px 'opensans-bold', sans-serif;\n    color: #fff;\n    margin-bottom: 12px;\n }\n#about p {\n    line-height: 30px;\n    color: #7A7A7A;\n }\n#about .profile-pic {\n    position: relative;\n    width: 120px;\n    height: 120px;\n    border-radius: 100%;\n }\n#about .contact-details { width: 41.66667%; }\n#about .download {\n    width: 58.33333%;\n    padding-top: 15px;\n }\n#about .main-col { padding-right: 5%; }\n#about .download .button {\n    margin-top: 6px;\n    background: #444;\n }\n#about .download .button:hover {\n    background: #fff;\n    color: #2B2B2B;\n }\n#about .download .button i {\n    margin-right: 15px;\n    font-size: 20px;\n }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpRUFBc0Y7SUFDdEYsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQixrQkFBa0I7QUFDbEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUVBLDhCQUE4QixXQUFXLEVBQUU7QUFDM0MsaUNBQWlDLGNBQWMsRUFBRTtBQUVqRDtJQUNHLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCO0FBQ0E7SUFDRyxpQkFBaUI7SUFDakIsY0FBYztDQUNqQjtBQUNBO0lBQ0csa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0lBQ0csZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjtBQUNBLG1CQUFtQixpQkFBaUIsRUFBRTtBQUN0QztJQUNHLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDQTtJQUNHLGdCQUFnQjtJQUNoQixjQUFjO0NBQ2pCO0FBQ0E7SUFDRyxrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWltYWdle1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N1bnNldC1pbWFnZS5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuaDF7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAzLjVlbTtcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYWJvdXQge1xuICAgIGJhY2tncm91bmQ6IHJnYigxMiwgMywgNCk7XG4gICAgcGFkZGluZy1ib3R0b206IDY2cHg7XG4gICAgcGFkZGluZy10b3A6ICA2NnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gfVxuXG4gI2Fib3V0IGEsICNhYm91dCBhOnZpc2l0ZWQgIHsgY29sb3I6ICNmZmY7IH1cbiAjYWJvdXQgYTpob3ZlciwgI2Fib3V0IGE6Zm9jdXMgeyBjb2xvcjogIzExQUJCMDsgfVxuIFxuICNhYm91dCBoMiB7XG4gICAgZm9udDogMjJweC8zMHB4ICdvcGVuc2Fucy1ib2xkJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuIH1cbiAjYWJvdXQgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICM3QTdBN0E7XG4gfVxuICNhYm91dCAucHJvZmlsZS1waWMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuIH1cbiAjYWJvdXQgLmNvbnRhY3QtZGV0YWlscyB7IHdpZHRoOiA0MS42NjY2NyU7IH1cbiAjYWJvdXQgLmRvd25sb2FkIHtcbiAgICB3aWR0aDogNTguMzMzMzMlO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuIH1cbiAjYWJvdXQgLm1haW4tY29sIHsgcGFkZGluZy1yaWdodDogNSU7IH1cbiAjYWJvdXQgLmRvd25sb2FkIC5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xuIH1cbiAjYWJvdXQgLmRvd25sb2FkIC5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMyQjJCMkI7XG4gfVxuICNhYm91dCAuZG93bmxvYWQgLmJ1dHRvbiBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuIH1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/components/about-me/about-me.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about-me/about-me.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/components/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/components/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/components/books/books.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/books/books.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#books {\n  background: #0c0304;\n  overflow: hidden;\n  padding: 10%;\n  padding-top: 15%;\n  color: #afaaaa;\n}\nh2 {\n  font: 22px/30px \"opensans-bold\", sans-serif;\n  color: #fff;\n}\nh3 {\n  font-size: 1rem;\n  font-style: italic;\n  color: #d4d1d1;\n  padding-top: 7%;\n  padding-bottom: 3%;\n  letter-spacing: 0.5px;\n}\np,\nli {\n  font-family: \"Montserrat\", sans-serif;\n  color: #afaaaa;\n  list-style: none;\n  font-size: 0.85rem;\n  text-align: -webkit-left;\n  line-height: 1.5rem;\n  text-align-last: left;\n}\nul {\n  -webkit-padding-start: 0%;\n          padding-inline-start: 0%;\n}\n.cite {\n  color: rgba(204, 140, 164, 0.7)!important;\n}\n.listGap{\n    padding-top: 5%;\n}\n#secondSection {\n  padding-top: 7%;\n}\n#books a,\n#books a:visited {\n  color: #fff;\n}\n#books a:hover,\n#books a:focus {\n  color: #11abb0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDJDQUEyQztFQUMzQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBd0I7VUFBeEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Jvb2tzIHtcbiAgYmFja2dyb3VuZDogIzBjMDMwNDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTAlO1xuICBwYWRkaW5nLXRvcDogMTUlO1xuICBjb2xvcjogI2FmYWFhYTtcbn1cbmgyIHtcbiAgZm9udDogMjJweC8zMHB4IFwib3BlbnNhbnMtYm9sZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbn1cbmgzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjZDRkMWQxO1xuICBwYWRkaW5nLXRvcDogNyU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxucCxcbmxpIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2FmYWFhYTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIHRleHQtYWxpZ24tbGFzdDogbGVmdDtcbn1cblxudWwge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMCU7XG59XG4uY2l0ZSB7XG4gIGNvbG9yOiByZ2JhKDIwNCwgMTQwLCAxNjQsIDAuNykhaW1wb3J0YW50O1xufVxuLmxpc3RHYXB7XG4gICAgcGFkZGluZy10b3A6IDUlO1xufVxuI3NlY29uZFNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogNyU7XG59XG4jYm9va3MgYSxcbiNib29rcyBhOnZpc2l0ZWQge1xuICBjb2xvcjogI2ZmZjtcbn1cbiNib29rcyBhOmhvdmVyLFxuI2Jvb2tzIGE6Zm9jdXMge1xuICBjb2xvcjogIzExYWJiMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/books/books.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/books/books.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<section id=\"books\">\n   <div class=\"row\">\n      <div class=\"col-sm-10 offset-1\">\n         <h2>Books I'm Currently Reading</h2>\n         <h3 class=\"books_h3\">You Don't Know JS - Scopes & Closure <cite class=\"cite\">by Kyle Simpson</cite></h3>\n         <p>Can be found at: <a target=\"blank\" href=\"https://github.com/getify/You-Dont-Know-JS\">https://github.com/getify/You-Dont-Know-JS</a>.\n\n            Guys, I can't say enough about this fantastic resource for anyone learning JS. Really helpful, you can\n            get them all FREE, all 6 books. You can purchase these in Kindle, hardback or paperback versions. If you\n            have the spare doe and would like a copy, I recommend going for it, splash out! As it's such a great and\n            coherent resource to have in the arsenal and supporting the author who made these brilliant resources\n            free just seems right!\n         </p>\n\n         <ul class=\"text-justify\">\n            <li>The books I am referring to</li>\n            <li> Up & Going</li>\n            <li> Scope & Closures</li>\n            <li>this & Object Prototypes</li>\n            <li>Types & Grammar</li>\n            <li>Async & Performance</li>\n            <li>ES6 & Beyond</li>\n         </ul>\n      </div>\n   </div>\n\n   <div class=\"row\">\n      <div class=\"col-sm-10 offset-1\">\n         <h3 class=\"books_h3\">The Last Man<cite class=\"cite\"> by Vince Flynn</cite></h3>\n         <p> Can be found at:\n            <a target=\"_blank\" href=\"https://www.vinceflynn.com/the-last-man\">https://www.vinceflynn.com/the-last-man</a>.\n            This is a great read, the entire Mitch Rapp (ex-cop now PI) series is fantastic. This is book #13.\n            If you would like to read the series, start here: American Assassin\n            (Mitch Rapp #1).\n            <a target=\"_blank\" href=\"https://www.goodreads.com/book/show/7959473-american-assassin\">Good Reads Review - American Assassin</a>.\n         </p>\n      </div>\n   </div>\n\n   <div class=\"row\">\n      <div class=\"col-sm-10 offset-1\">\n         <h3 class=\"books_h3\">The Eleventh Commandment<cite class=\"cite\"> by Jeffery Archer</cite></h3>\n         <p> Can be found at:\n            <a target=\"_blank\" href=\"https://www.goodreads.com/book/show/78977.The_Eleventh_Commandment\">Good Reads Review 3.87 / 5.00 - The Eleventh Commandment</a>.\n            Another CIA type thriller book, really I take anything that comes my way but I like exciting thrillers. Even though, usually I only read a chapter or two before bed!\n         </p>\n      </div>\n   </div>\n   <hr>\n\n   <div class=\"row\">\n      <div class=\"col-sm-10 offset-1\">\n         <h2 id=\"secondSection\">Books I've Read</h2>\n         <h3 class=\"books_h3\"><cite class=\"cite\">Books by Jeffery Archer</cite></h3>\n         <p>\n            For anyone who hasn't already, check out <cite class=\"cite\">Jeffery Archer</cite>. He's a genius. His book Kane and Able, in my\n            opinion is a masterpeice.\n            <a target=\"_blank\" href=\"https://www.goodreads.com/book/show/36397631-kane-able?from_search=true\">Good Reads Review - Kane and Able</a>.\n            <!-- </p>\n                     </p>\n                     <a target=\"_blank\" href=\"https://www.goodreads.com/book/show/78983.Kane_and_Abel\"</a>.\n                  -->\n         </p>\n         <p>                  Other books by <cite class=\"cite\">Jeffery Archer</cite> I have read:\n            </p>\n         <ul class=\"text-justify\">\n            <li>Not A Penny More, Not A Penny Less (1976)</li>\n            <li>Shall We Tell the President? (1977)</li>\n            <li>Kane and Abel (1980) </li>\n            <li>The Prodigal Daughter (1982) </li>\n            <li>First Among Equals (1984)</li>\n            <li>As the Crow Flies (1991) </li>\n            <li>Honour Among Thieves (1993) </li>\n            <li>A Prisoner of Birth (2008) </li>\n            <li>Only Time Will Tell (2011) </li>\n            <li>The Sins of the Father (2012) </li>\n            <li>Best Kept Secret (2013)</li>\n            <li>Mightier Than the Sword (2015) </li>\n            <li>Cometh the Hour (2016) </li>\n            <li>This Was a Man (2016)</li>\n\n            <li class=\"listGap cite\"><b><i>Non-fiction </i></b></li>\n            <li>Hell - Belmarsh (2002)</li>\n         </ul>\n\n         <h3 class=\"books_h3\"><cite class=\"cite\">Books by John Connolly</cite></h3>\n         <p>\n               <cite class=\"cite\">John Connolys </cite>work is fantastic, again, fantasy thrilling and just my cup of tea! Read book #1 in the Charlie Parker series, Every Dead Thing\n            <a target=\"_blank\" href=\"https://www.goodreads.com/book/show/175242.Every_Dead_Thing\">Good Reads Review - Every Dead Thing</a>.\n          \n         </p>\n         <p>  Other books by <cite class=\"cite\">John Connolly</cite> I have read:</p>\n         <ul class=\"text-justify\"> \n            <li>The Charlie Parker series:</li> \n            <li>Every Dead Thing (1999)</li>\n            <li>Dark Hollow (2000)</li>\n            <li>The Killing Kind (2001)</li>\n            <li>The White Road (2002) </li>\n         </ul>\n      </div>\n   </div>\n\n</section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/books/books.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/books/books.component.ts ***!
  \*****************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = /** @class */ (function () {
    function BooksComponent(router) {
        this.router = router;
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/components/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/components/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/components/code-snippits/code-snippits.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/code-snippits/code-snippits.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#code h1 {\n    font: 15px/24px 'opensans-semibold', sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    text-align: center;\n    margin-bottom: 48px;\n    color: #fff;\n }\n #code{\n     padding:10%;\n     background-color: rgba(230, 70, 100, .7);\n }\n .small-squares {\n    display: grid;\n    grid-gap: 30px;\n    /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2RlLXNuaXBwaXRzL2NvZGUtc25pcHBpdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztDQUNkO0NBQ0E7S0FDSSxXQUFXO0tBQ1gsd0NBQXdDO0NBQzVDO0NBRUQ7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtFQUFrRTtFQUNwRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29kZS1zbmlwcGl0cy9jb2RlLXNuaXBwaXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29kZSBoMSB7XG4gICAgZm9udDogMTVweC8yNHB4ICdvcGVuc2Fucy1zZW1pYm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuIH1cbiAjY29kZXtcbiAgICAgcGFkZGluZzoxMCU7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCA3MCwgMTAwLCAuNyk7XG4gfVxuXG4uc21hbGwtc3F1YXJlcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMzBweDtcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7ICovXG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/code-snippits/code-snippits.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/code-snippits/code-snippits.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"code\">\n    <div class=\"Leannelb\n    row\">\n      <div class=\"col-md-12\">\n                    <h1>Check Out Some of My Helpful (hopefully) Code Snippits</h1>\n                  </div>\n      </div>\n      <!-- <ul>\n        <li *ngFor=\"let code of codess\">\n          <a [routerLink]=\"['/code',  code.slug ]\">{{code.name}}</a>\n        </li>\n      </ul> -->\n\n      <div class=\"summary\">\n          <div class=\"block\"></div>\n        </div>\n        <div class=\"small-squares\">\n          <iframe   height='250' scrolling='no' title='1: Koala CSS' src='/embed/preview/NzxMYe/?height=291&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/NzxMYe/'>1: Koala CSS</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n          </iframe>\n          <iframe height='250' scrolling='no' title='Ticking clock no lag no smooth tick' src='embed/preview/YeaMNO/?height=410&theme-id=dark&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/YeaMNO/'>Ticking clock no lag no smooth tick</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n          </iframe>\n          <iframe height='250' scrolling='no' title='My Tribute Page - Dr. Martin Luther King' src='embed/preview/YYYjvZ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/YYYjvZ/'>My Tribute Page - Dr. Martin Luther King</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n          </iframe>\n          <iframe height='250' scrolling='no' title='Diamond ' src='embed/preview/zaNMOx/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/zaNMOx/'>Diamond </a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n          </iframe>\n          <iframe height='250' scrolling='no' title='Footer Font-awesome!' src='d/preview/JaXvLq/?height=284&theme-id=dark&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/JaXvLq/'>Footer Font-awesome!</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n          </iframe>\n        \n        </div>\n</section>"

/***/ }),

/***/ "./src/app/components/code-snippits/code-snippits.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/code-snippits/code-snippits.component.ts ***!
  \*********************************************************************/
/*! exports provided: CodeSnippitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippitsComponent", function() { return CodeSnippitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/code.service */ "./src/app/services/code.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodeSnippitsComponent = /** @class */ (function () {
    function CodeSnippitsComponent(codeService, route) {
        this.codeService = codeService;
        this.route = route;
    }
    CodeSnippitsComponent.prototype.ngOnInit = function () {
        this.code = this.codeService.getCode(this.route.snapshot.params.slug);
    };
    CodeSnippitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-code',
            template: __webpack_require__(/*! ./code-snippits.component.html */ "./src/app/components/code-snippits/code-snippits.component.html"),
            styles: [__webpack_require__(/*! ./code-snippits.component.css */ "./src/app/components/code-snippits/code-snippits.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_code_service__WEBPACK_IMPORTED_MODULE_2__["CodeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CodeSnippitsComponent);
    return CodeSnippitsComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact {\n    padding:10%;\n    padding-top: 30%;\n    background-color: rgba(230, 70, 100, .7);\n    padding-top: 30%;\n    color: #afaaaa;\n  }\n  h2 {\n    font: 22px/30px \"opensans-bold\", sans-serif;\n    color: #fff;\n  }\n  h3 {\n    font-size: 1rem;\n    font-style: italic;\n    color: #d4d1d1;\n    padding-top: 10%;\n    padding-bottom: 3%;\n    letter-spacing: 0.5px;\n  }\n  p,\n  li {\n    font-family: \"Montserrat\", sans-serif;\n    color: #afaaaa;\n    list-style: none;\n    font-size: 0.85rem;\n    text-align: -webkit-left;\n    line-height: 1.5rem;\n    text-align-last: left;\n  }\n  ul {\n    -webkit-padding-start: 0%;\n            padding-inline-start: 0%;\n  }\n  .cite {\n    color: rgba(204, 140, 164, 0.7);\n  }\n  .listGap{\n      padding-top: 5%;\n  }\n  #secondSection {\n    padding-top: 10%;\n  }\n  #contact a,\n  #contact a:visited {\n    color: #fff;\n  }\n  #contact a:hover,\n  #contact a:focus {\n    color: #11abb0;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSwyQ0FBMkM7SUFDM0MsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtFQUNBOztJQUVFLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtFQUN2QjtFQUVBO0lBQ0UseUJBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTs7SUFFRSxXQUFXO0VBQ2I7RUFDQTs7SUFFRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0IHtcbiAgICBwYWRkaW5nOjEwJTtcbiAgICBwYWRkaW5nLXRvcDogMzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCA3MCwgMTAwLCAuNyk7XG4gICAgcGFkZGluZy10b3A6IDMwJTtcbiAgICBjb2xvcjogI2FmYWFhYTtcbiAgfVxuICBoMiB7XG4gICAgZm9udDogMjJweC8zMHB4IFwib3BlbnNhbnMtYm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjZDRkMWQxO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgfVxuICBwLFxuICBsaSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjYWZhYWFhO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtbGVmdDtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIHRleHQtYWxpZ24tbGFzdDogbGVmdDtcbiAgfVxuICBcbiAgdWwge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwJTtcbiAgfVxuICAuY2l0ZSB7XG4gICAgY29sb3I6IHJnYmEoMjA0LCAxNDAsIDE2NCwgMC43KTtcbiAgfVxuICAubGlzdEdhcHtcbiAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgfVxuICAjc2Vjb25kU2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgfVxuICAjY29udGFjdCBhLFxuICAjY29udGFjdCBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICNjb250YWN0IGE6aG92ZXIsXG4gICNjb250YWN0IGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjMTFhYmIwO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card>\n   <h1>Get in touch!</h1>\n\n   <mat-form-field style=\"width: 100%\">\n     <input matInput placeholder=\"Name\" [formControl]=\"nameFormControl\" />\n     <mat-error *ngIf=\"nameFormControl.hasError('minlength')\">\n       Name must be at least 4 characters long.\n     </mat-error>\n     <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n       Name is <strong>required</strong>\n     </mat-error>\n   </mat-form-field>\n\n   <mat-form-field style=\"width: 100%\">\n     <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"/>\n     <mat-error *ngIf=\"emailFormControl.hasError('email')\">\n       Please enter a valid email address\n     </mat-error>\n     <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n       Email is <strong>required</strong>\n     </mat-error>\n   </mat-form-field>\n\n   <button\n     mat-raised-button\n     [disabled]=\"emailFormControl.invalid || nameFormControl.invalid || loading\"\n     color=\"primary\"\n     (click)=\"register()\"\n   >\n    Click me!\n   </button>\n </mat-card> -->\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/http.service */ "./src/app/shared/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(http) {
        this.http = http;
        this.image = "https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg";
        this.loading = false;
        this.buttonText = "Submit";
        this.emailformControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
        ]);
    }
    ContactComponent.prototype.ngOnInit = function () {
        console.log(this.http.test);
    };
    ContactComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.buttonText = "Submitting..";
        var user = {
            name: this.nameFormControl.value,
            email: this.emailformControl.value
        };
        this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(function (data) {
            var res = data;
            console.log("\uD83D\uDC4F > \uD83D\uDC4F > \uD83D\uDC4F > \uD83D\uDC4F " + user.name + " is successfully register and mail has been sent and the message id is " + res.messageId);
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.buttonText = "Submit";
        }, function () {
            _this.loading = false;
            _this.buttonText = "Submit";
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        /*Styling the icons*/\ni.fa {\n    font-size:50px;\n    color: rgba(230, 70, 100);\n    padding:30px;\n\n}\n#footer .items{\n    text-align:center;\n    max-width:100%;\n    background-color: rgba(230, 70, 100, .7);\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IlFBQVEsb0JBQW9CO0FBQzVCO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZOztBQUVoQjtBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx3Q0FBd0M7O0FBRTVDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgICAgIC8qU3R5bGluZyB0aGUgaWNvbnMqL1xuaS5mYSB7XG4gICAgZm9udC1zaXplOjUwcHg7XG4gICAgY29sb3I6IHJnYmEoMjMwLCA3MCwgMTAwKTtcbiAgICBwYWRkaW5nOjMwcHg7XG5cbn1cbiAgICAgICAgICAgIFxuICAgXG4jZm9vdGVyIC5pdGVtc3tcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXgtd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgNzAsIDEwMCwgLjcpO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"footer\">\n    <div class=items>\n       <i aria-hidden=\"true\" class=\"fa fa-facebook\"></i>\n       <i aria-hidden=\"true\" class=\"fa fa-youtube\"></i>\n       <i aria-hidden=\"true\" class=\"fa fa-envelope\"></i>\n       <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n       <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n    </div>\n</section> "

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  background-color: rgba(152, 1, 147, 0.2);\n}\n.mainSpace{\n  padding-top: 15%;\n  width: 100%;\n\n}\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-top: 15%;\n}\n#header {\n  position: relative;\n  height: 800px;\n  min-height: 500px;\n  width: 100%;\n  background: #161415 url('tree-beauty-mini.jpg') no-repeat\n    top center;\n  background-size: cover !important;\n  -webkit-background-size: cover !important;\n  text-align: center;\n  overflow: hidden;\n\n}\n.spacer {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    padding: .5rem 1rem;\n}\n.home-text {\n  padding-top: 5%;\n}\n.banner .banner-text {\n  width: 100px; /* Or whatever */\n  height: 100px; /* Or whatever */\n  margin: auto; /* Magic! */\n}\n.responsive-headline {\n  color: white;\n  text-transform: uppercase;\n  font-family: \"Montserrat\", sans-serif;\n}\n.banner-text {\n  /* font-family: \"Montserrat\", sans-serif; */\n  font-family: \"kblimelightlight\";\n  /* font-family: 'Limelight', cursive; */\n  font-size: 150%;\n  font-weight: 100;\n  color: #f4d9dd;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);\n}\nh3 span,\nh3 a {\n  color: #fff;\n  font-weight: 250;\n}\nh2 {\n  font: 22px/30px 'opensans-bold', sans-serif;\n  color: #fff;\n  margin-bottom: 5%;\n}\n/*! Generated by Font Squirrel (https://www.fontsquirrel.com) on August 26, 201*/\n@font-face {\n  font-family: \"kblimelightlight\";\n  src: url('kblimelight-webfont.woff2')\n      format(\"woff2\"),\n    url('kblimelight-webfont.woff')\n      format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Headers */\n.portfolioHeader .aboutHeader {\n  /* font: 22px/30px 'opensans-bold', sans-serif; */\n  color: #fff;\n  margin-bottom: 10%;\n}\n/* MAIN TEXT */\n/* ABOUT ME  */\n.main-image{\n  height: 100vh;\n  width: 100vw;\n  background: url('sunset-image.png') no-repeat center center fixed; \n  background-size: cover;\n}\n#about {\n  background: rgb(12, 3, 4);\n  padding-bottom: 66px;\n  padding-top: 30%;\n\n  overflow: hidden;\n  padding-left: 10%;\n  padding-right: 10%;\n  text-align: justify;\n}\n#about a, #about a:visited  { color: #fff; }\n#about a:hover, #about a:focus { color: #11ABB0; }\n#about p {\n  line-height: 30px;\n  color: #afaaaa;\n}\n#about .profile-pic {\n  position: right;\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n}\n#about .contact-details { width: 41.66667%; }\n#about .download {\n  width: 58.33333%;\n  padding-top: 15px;\n}\n#about .main-col { padding-right: 5%; }\n#about .download .button {\n  margin-top: 6px;\n  background: #444;\n}\n#about .download .button:hover {\n  background: #fff;\n  color: #2B2B2B;\n}\n#about .download .button i {\n  margin-right: 15px;\n  font-size: 20px;\n}\n#resume {\n  background: #0c0304;\n  overflow: hidden;\n  padding:10%;\n  padding-top:10%;\n  color: #afaaaa;\n}\n#resume a, #resume a:visited  { color: #11ABB0; }\n#resume a:hover, #resume a:focus { color: #313131; }\n#resume h1 {\n  /* text-transform: uppercase; */\n  text-align: left;\n  font: 22px/30px 'opensans-bold', sans-serif;\n  color: #fff;\n  letter-spacing: 1px;\n  color: #E3E2DF;\n}\n.resume_h3 {\n  /* font-family: \"Lora\", serif; */\n  font-size: 1rem;\n  font-style: italic;\n  /* color:white; */\n  color: rgba(204, 140, 164, .7);  \n  \n  padding-top: 3%;\n  padding-bottom: 3%;\n  letter-spacing: .5px;\n}\n.row{\n  margin-top: 1%;\n}\nli {\n  font-family: 'Montserrat', sans-serif;\n    /* letter-spacing: 1px; */\n    color: #afaaaa;\n    list-style: none;\n    font-size: .85rem;\n    font-display: justified;\n    line-height: 1.5rem;\n  }\nul  {\n  padding: 0;\n  list-style-type: none;\n}\n#resume .header-col { padding-top: 9px; }\n#resume .main-col { padding-right: 10%; }\n/* \n*   PORTFOLIO\n */\n.small-squares {\n  display: grid;\n  grid-gap: 30px;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n}\n#portfolio h1 {\n  /* font: 15px/24px 'opensans-semibold', sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-align: center;\n  margin-bottom: 48px;\n  color: #fff; */\n  font: 22px/30px 'opensans-bold', sans-serif;\n  color: #fff;\n  margin-bottom: 12px;\n}\n#portfolio{\n   padding:10%;\n   padding-top: 10%;\n   background-color: rgba(230, 70, 100, .7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7O0FBRWI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYO2NBQ1k7RUFDWixpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0FBRWxCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixhQUFhLEVBQUUsZ0JBQWdCO0VBQy9CLFlBQVksRUFBRSxXQUFXO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFDQUFxQztBQUN2QztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLCtCQUErQjtFQUMvQix1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsMkNBQTJDO0FBQzdDO0FBRUE7O0VBRUUsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQSxnRkFBZ0Y7QUFFaEY7RUFDRSwrQkFBK0I7RUFDL0I7OztvQkFHa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBLFlBQVk7QUFFWjtFQUNFLGlEQUFpRDtFQUNqRCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUEsY0FBYztBQUdkLGNBQWM7QUFFZDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUVBQXNGO0VBQ3RGLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7O0VBRWhCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUdBLDhCQUE4QixXQUFXLEVBQUU7QUFDM0MsaUNBQWlDLGNBQWMsRUFBRTtBQUdqRDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0EsbUJBQW1CLGlCQUFpQixFQUFFO0FBQ3RDO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUdBLGdDQUFnQyxjQUFjLEVBQUU7QUFDaEQsbUNBQW1DLGNBQWMsRUFBRTtBQUVuRDtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDhCQUE4Qjs7RUFFOUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFDQUFxQztJQUNuQyx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjtBQUNGO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2QjtBQUVBLHNCQUFzQixnQkFBZ0IsRUFBRTtBQUN4QyxvQkFBb0Isa0JBQWtCLEVBQUU7QUFHeEM7O0VBRUU7QUFFRjtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsNERBQTREO0FBQzlEO0FBRUE7RUFDRTs7Ozs7Z0JBS2M7RUFDZCwyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0dBQ0csV0FBVztHQUNYLGdCQUFnQjtHQUNoQix3Q0FBd0M7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUyLCAxLCAxNDcsIDAuMik7XG59XG4ubWFpblNwYWNle1xuICBwYWRkaW5nLXRvcDogMTUlO1xuICB3aWR0aDogMTAwJTtcblxufVxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxNSU7XG59XG4jaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDgwMHB4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMxNjE0MTUgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1iZWF1dHktbWluaS5qcGcpIG5vLXJlcGVhdFxuICAgIHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuLnNwYWNlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG59XG4uaG9tZS10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuLmJhbm5lciAuYmFubmVyLXRleHQge1xuICB3aWR0aDogMTAwcHg7IC8qIE9yIHdoYXRldmVyICovXG4gIGhlaWdodDogMTAwcHg7IC8qIE9yIHdoYXRldmVyICovXG4gIG1hcmdpbjogYXV0bzsgLyogTWFnaWMhICovXG59XG5cbi5yZXNwb25zaXZlLWhlYWRsaW5lIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5iYW5uZXItdGV4dCB7XG4gIC8qIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjsgKi9cbiAgZm9udC1mYW1pbHk6IFwia2JsaW1lbGlnaHRsaWdodFwiO1xuICAvKiBmb250LWZhbWlseTogJ0xpbWVsaWdodCcsIGN1cnNpdmU7ICovXG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICNmNGQ5ZGQ7XG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmgzIHNwYW4sXG5oMyBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAyNTA7XG59XG5cbmgyIHtcbiAgZm9udDogMjJweC8zMHB4ICdvcGVuc2Fucy1ib2xkJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLyohIEdlbmVyYXRlZCBieSBGb250IFNxdWlycmVsIChodHRwczovL3d3dy5mb250c3F1aXJyZWwuY29tKSBvbiBBdWd1c3QgMjYsIDIwMSovXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJrYmxpbWVsaWdodGxpZ2h0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL0tCTGltZUxpZ2h0Rm9udC9rYmxpbWVsaWdodC13ZWJmb250LndvZmYyXCIpXG4gICAgICBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvS0JMaW1lTGlnaHRGb250L2tibGltZWxpZ2h0LXdlYmZvbnQud29mZlwiKVxuICAgICAgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLyogSGVhZGVycyAqL1xuXG4ucG9ydGZvbGlvSGVhZGVyIC5hYm91dEhlYWRlciB7XG4gIC8qIGZvbnQ6IDIycHgvMzBweCAnb3BlbnNhbnMtYm9sZCcsIHNhbnMtc2VyaWY7ICovXG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi8qIE1BSU4gVEVYVCAqL1xuXG5cbi8qIEFCT1VUIE1FICAqL1xuXG4ubWFpbi1pbWFnZXtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdW5zZXQtaW1hZ2UucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNhYm91dCB7XG4gIGJhY2tncm91bmQ6IHJnYigxMiwgMywgNCk7XG4gIHBhZGRpbmctYm90dG9tOiA2NnB4O1xuICBwYWRkaW5nLXRvcDogMzAlO1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cblxuI2Fib3V0IGEsICNhYm91dCBhOnZpc2l0ZWQgIHsgY29sb3I6ICNmZmY7IH1cbiNhYm91dCBhOmhvdmVyLCAjYWJvdXQgYTpmb2N1cyB7IGNvbG9yOiAjMTFBQkIwOyB9XG5cblxuI2Fib3V0IHAge1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNhZmFhYWE7XG59XG4jYWJvdXQgLnByb2ZpbGUtcGljIHtcbiAgcG9zaXRpb246IHJpZ2h0O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4jYWJvdXQgLmNvbnRhY3QtZGV0YWlscyB7IHdpZHRoOiA0MS42NjY2NyU7IH1cbiNhYm91dCAuZG93bmxvYWQge1xuICB3aWR0aDogNTguMzMzMzMlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbiNhYm91dCAubWFpbi1jb2wgeyBwYWRkaW5nLXJpZ2h0OiA1JTsgfVxuI2Fib3V0IC5kb3dubG9hZCAuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xufVxuI2Fib3V0IC5kb3dubG9hZCAuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMyQjJCMkI7XG59XG4jYWJvdXQgLmRvd25sb2FkIC5idXR0b24gaSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5cbiNyZXN1bWUge1xuICBiYWNrZ3JvdW5kOiAjMGMwMzA0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOjEwJTtcbiAgcGFkZGluZy10b3A6MTAlO1xuICBjb2xvcjogI2FmYWFhYTtcbn1cblxuXG4jcmVzdW1lIGEsICNyZXN1bWUgYTp2aXNpdGVkICB7IGNvbG9yOiAjMTFBQkIwOyB9XG4jcmVzdW1lIGE6aG92ZXIsICNyZXN1bWUgYTpmb2N1cyB7IGNvbG9yOiAjMzEzMTMxOyB9XG5cbiNyZXN1bWUgaDEge1xuICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250OiAyMnB4LzMwcHggJ29wZW5zYW5zLWJvbGQnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6ICNFM0UyREY7XG59XG5cbi5yZXN1bWVfaDMge1xuICAvKiBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmOyAqL1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgLyogY29sb3I6d2hpdGU7ICovXG4gIGNvbG9yOiByZ2JhKDIwNCwgMTQwLCAxNjQsIC43KTsgIFxuICBcbiAgcGFkZGluZy10b3A6IDMlO1xuICBwYWRkaW5nLWJvdHRvbTogMyU7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xufVxuLnJvd3tcbiAgbWFyZ2luLXRvcDogMSU7XG59XG5saSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgLyogbGV0dGVyLXNwYWNpbmc6IDFweDsgKi9cbiAgICBjb2xvcjogI2FmYWFhYTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xuICAgIGZvbnQtZGlzcGxheToganVzdGlmaWVkO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIH1cbnVsICB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuI3Jlc3VtZSAuaGVhZGVyLWNvbCB7IHBhZGRpbmctdG9wOiA5cHg7IH1cbiNyZXN1bWUgLm1haW4tY29sIHsgcGFkZGluZy1yaWdodDogMTAlOyB9XG5cblxuLyogXG4qICAgUE9SVEZPTElPXG4gKi9cblxuLnNtYWxsLXNxdWFyZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMzBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xufVxuXG4jcG9ydGZvbGlvIGgxIHtcbiAgLyogZm9udDogMTVweC8yNHB4ICdvcGVuc2Fucy1zZW1pYm9sZCcsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgY29sb3I6ICNmZmY7ICovXG4gIGZvbnQ6IDIycHgvMzBweCAnb3BlbnNhbnMtYm9sZCcsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuI3BvcnRmb2xpb3tcbiAgIHBhZGRpbmc6MTAlO1xuICAgcGFkZGluZy10b3A6IDEwJTtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCA3MCwgMTAwLCAuNyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<section id=\"header\">\n    <div id=\"top\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"banner-text text-capitalize\">\n                        <h1 class=\"responsive-headline\">Hello, I'm Leanne.</h1>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-10 offset-1 text-center home-text\">\n                    <h3 class=\"banner-text\">I'm a <span>Junior Developer</span>, specialising in front end development,\n                        <span>my goal</span> is to <span>help you</span> make the web a <span>beautiful place</span>.\n                        <a class=\"smoothscroll\" href=\"#about\">Scroll</a>\n                        to learn more <a class=\"smoothscroll\" href=\"#about\">about me</a>.</h3>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section id=\"about\">\n    <div class=\"row\">\n     <div class=\"spacer\"></div>\n        <div class=\"col-sm-12 about-message\">\n            <h2 class=\"aboutHeader\">About Me</h2>\n        </div>\n        <div class=\"col-sm-12 col-md-9 about-paragraph\">\n            <p class=\"about-paragraph\">I'm Leanne, back in 2011 I graduated from Maynooth University in Ireland with a\n                Double Honors Degree in Computer Science and Biology, two of my passions. Since then, I've lived all\n                over, working in the pharmecutical industry before realising it's web development that makes me tick! I\n                am an extremely approachable, driven and friendly individual who wants to help you get the best from\n                the web! I currently live in sunny Malta and I am employed as a Junior Web Developer. If you'd like to\n                reach out and get in touch, I would be delighted to have a chat.\n            </p>\n        </div>\n        <div class=\"col-sm-12 col-md-3\">\n            <img class=\"profile-pic\" src=\"../../../assets/images/mesquare.png\" alt=\"\" />\n        </div>\n    </div>\n</section>\n<section id=\"portfolio\">\n    <div class=\"Leannelb\n  row\">\n        <div class=\"col-md-12\">\n            <h2 class=\"portfolioHeader\">Check Out Some of My Work</h2>\n        </div>\n    </div>\n\n    <div class=\"summary\">\n        <div class=\"block\"></div>\n    </div>\n    <div class=\"small-squares\">\n        <iframe height='250' scrolling='no' title='1: Koala CSS' src='//codepen.io/LeanneCodeGirl/embed/preview/NzxMYe/?height=291&theme-id=0&default-tab=css,result&embed-version=2'\n            frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/NzxMYe/'>1:\n                Koala CSS</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n        </iframe>\n        <iframe height='250' scrolling='no' title='Ticking clock no lag no smooth tick' src='//codepen.io/LeanneCodeGirl/embed/preview/YeaMNO/?height=410&theme-id=dark&default-tab=html,result&embed-version=2'\n            frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/YeaMNO/'>Ticking\n                clock no lag no smooth tick</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>)\n            on <a href='https://codepen.io'>CodePen</a>.\n        </iframe>\n        <iframe height='250' scrolling='no' title='My Tribute Page - Dr. Martin Luther King' src='//codepen.io/LeanneCodeGirl/embed/preview/YYYjvZ/?height=265&theme-id=0&default-tab=html,result&embed-version=2'\n            frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/YYYjvZ/'>My\n                Tribute Page - Dr. Martin Luther King</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>)\n            on <a href='https://codepen.io'>CodePen</a>.\n        </iframe>\n        <iframe height='250' scrolling='no' title='Diamond ' src='//codepen.io/LeanneCodeGirl/embed/preview/zaNMOx/?height=265&theme-id=dark&default-tab=css,result&embed-version=2'\n            frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/zaNMOx/'>Diamond\n            </a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n        </iframe>\n        <iframe height='250' scrolling='no' title='Footer Font-awesome!' src='//codepen.io/LeanneCodeGirl/embed/preview/JaXvLq/?height=284&theme-id=dark&default-tab=html,result&embed-version=2'\n            frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/JaXvLq/'>Footer\n                Font-awesome!</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a\n                href='https://codepen.io'>CodePen</a>.\n        </iframe>\n\n    </div>\n\n</section>\n<section id=\"resume\">\n    <div class=\"row education\">\n        <div class=\"col-md-12\">\n            <h1>Education</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>QA TESTER</h2>\n            <h3 class=\"resume_h3\">Bigpoint International Services Ltd. | Gzira, Malta | Sep 2017 - Jan 2018</h3>\n            <ul class=\"text-justify\">\n                <li><b>Testplan Execution &amp; Compilation:</b><br> Development and execution of test suites and test\n                    scripts\n                    for new and existing games.</li>\n                <li><b>Bug &amp; Defect Reports:</b><br> Submission, escalation and tracking of defects found during\n                    testing to\n                    ensure that they are\n                    resolved.</li>\n                <li><b>Bug Regression: </b><br>Reproduce issues when necessary in order to assist Game Development in\n                    resolving\n                    issues whilst\n                    utilising required resources e.g. Jira and Mantis for executing test cases and reporting defects.</li>\n                <li><b>Detailed Test Reports:</b><br>Provide detailed Test Reports during and at the end of each\n                    development.</li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>E-LEARNING CONSULTANT </h2>\n            <h3 class=\"resume_h3\">Inmarkets Trading as Skillcast | Mrehil, Malta | Dec 2017 - Aug 2018</h3>\n            <ul class=\"text-justify\">\n                <li><b>Project Management:</b><br> Manage client communications through meetings, phone calls and\n                    emails to produce and\n                    deliver excellent e-learning courses in a timely manner, ensuring good relationships are developed\n                    for excellent\n                    client satisfaction. </li>\n                <li><b>Effective Web-Based Training: </b><br>Ensuring ongoing excellent customer satisfaction when\n                    dealing with large and small\n                    clients.</li>\n                <li><b>Fantastic Customer Service: </b><br>Delivered in a web based environment.</li>\n                <li><b>Selection Instructional Techniques: </b><br>Meeting the needs of multiple learning modalities\n                    and sequences instructional\n                    content in storyboards.</li>\n                <li><b>Hardware and Software Knowledge: </b><br> Excel, Word, graphics (e.g. bitmap, jpeg, vector\n                    images), audio, interactivity,\n                    accessibility, programming languages, and e-learning authoring software programs to develop and\n                    deliver\n                    interactive training experiences.</li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>QC ANALYST </h2>\n            <h3 class=\"resume_h3\">Alexion Pharmaceuticals Inc. | Dublin, Ireland | Jan 2016 - Dec 2017</h3>\n            <ul class=\"text-justify\">\n                <li><b>Organising and Executing Tests: </b><br>Creating Standard Operating Procedures to carry out\n                    laboratory tests. Involved\n                    researching best practices within the industry and applying previous knowledge for best outputs.\n                </li>\n                <li><b>Company Start up: </b><br>Fast paced environment with regulatory considerations and new\n                    challenges.</li>\n                <li><b>Data Gathering and Dissection: </b><br>Applying knowledge and experience to understand data and\n                    report to direct and\n                    indirect team members on findings.</li>\n                <li><b>Training Representative: </b><br>Managed all training files of the QC department staff. Provided\n                    information to colleges on\n                    their training and presented to wider groups. </li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>BIOPROCESS SCIENTIST </h2>\n            <h3 class=\"resume_h3\">Pfizer | Grange Castle, Ireland | Jan 2015 - Dec 2015</h3>\n            <ul class=\"text-justify\">\n                <li><b>Experimental Design and Execution:</b><br>Responsible for leading and executing projects,\n                    including successful execution\n                    of projects and organizing partnership where appropriate.</li>\n                <li><b>Volunteering: </b><br>Volunteered as a ͚biotechnology agent͛ on site, promoting inclusion,\n                    patients, products, people\n                    and technology as part of a Pfizer wide program.</li>\n                <li><b>Own it!</b><br> Being a responsible and highly committed member of the team, striving for\n                    advancement, excellence and\n                    site-wide cohesion.</li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>UPSTREAM PROCESS TECHNOLOGIST </h2>\n            <h3 class=\"resume_h3\">Reliance Genemedix Ltd. | Co. Offaly, Ireland | Jun 2012 - Dec 2013</h3>\n            <ul class=\"text-justify\">\n                <li><b>Training:</b><br>Trained all new upstream processing staff to laboratory standards, including\n                    senior staff members.</li>\n                <li><b>Calibration and revalidation: </b><br>Calibration and re-qualification of equipment and\n                    machinery.</li>\n                <li><b>Scale up: </b><br>Heavily involved in a scale up process, resulted in workload and activities\n                    increasing by\n                    ~ 250%.</li>\n            </ul>\n        </div>\n    </div>\n</section>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.small-squares {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  }\n\n  #portfolio h1 {\n    font: 15px/24px 'opensans-semibold', sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    text-align: center;\n    margin-bottom: 48px;\n    color: #fff;\n }\n\n  #portfolio{\n     padding:10%;\n     background-color: rgba(230, 70, 100, .7);\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCw0REFBNEQ7RUFDOUQ7O0VBRUE7SUFDRSwrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZDs7RUFDQTtLQUNJLFdBQVc7S0FDWCx3Q0FBd0M7Q0FDNUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNtYWxsLXNxdWFyZXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICB9XG5cbiAgI3BvcnRmb2xpbyBoMSB7XG4gICAgZm9udDogMTVweC8yNHB4ICdvcGVuc2Fucy1zZW1pYm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuIH1cbiAjcG9ydGZvbGlve1xuICAgICBwYWRkaW5nOjEwJTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDcwLCAxMDAsIC43KTtcbiB9Il19 */"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-nav></app-nav>\n<section id=\"portfolio\">\n  <div class=\"Leannelb\n  row\">\n    <div class=\"col-md-12\">\n                  <h1>Check Out Some of My Work</h1>\n                </div>\n    </div>\n  \n        <div class=\"summary\">\n          <div class=\"block\"></div>\n        </div>\n        <div class=\"small-squares\">\n          <iframe   height='250' scrolling='no' title='1: Koala CSS' src='//codepen.io/LeanneCodeGirl/embed/preview/NzxMYe/?height=291&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/NzxMYe/'>1: Koala CSS</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n          </iframe>\n          <iframe height='250' scrolling='no' title='Ticking clock no lag no smooth tick' src='//codepen.io/LeanneCodeGirl/embed/preview/YeaMNO/?height=410&theme-id=dark&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/YeaMNO/'>Ticking clock no lag no smooth tick</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n          </iframe>\n          <iframe height='250' scrolling='no' title='My Tribute Page - Dr. Martin Luther King' src='//codepen.io/LeanneCodeGirl/embed/preview/YYYjvZ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/YYYjvZ/'>My Tribute Page - Dr. Martin Luther King</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n          </iframe>\n          <iframe height='250' scrolling='no' title='Diamond ' src='//codepen.io/LeanneCodeGirl/embed/preview/zaNMOx/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/zaNMOx/'>Diamond </a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n          </iframe>\n          <iframe height='250' scrolling='no' title='Footer Font-awesome!' src='//codepen.io/LeanneCodeGirl/embed/preview/JaXvLq/?height=284&theme-id=dark&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/LeanneCodeGirl/pen/JaXvLq/'>Footer Font-awesome!</a> by Leannelb (<a href='https://codepen.io/LeanneCodeGirl'>@LeanneCodeGirl</a>) on <a href='https://codepen.io'>CodePen</a>.\n          </iframe>\n        \n        </div>\n      \n      </section>\n      <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/components/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/resume/resume.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/resume/resume.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#resume {\n  background: rgb(12, 3, 4);\n  overflow: hidden;\n  padding:10%;\n}\n\n\n#resume a, #resume a:visited  { color: #11ABB0; }\n\n\n#resume a:hover, #resume a:focus { color: #313131; }\n\n\n#resume h1 {\n  font: 15px/24px 'opensans-semibold', sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-align: center;\n  color: #fff;\n}\n\n\nh2{\n  font-family: \"Montserrat\", sans-serif;\n  color:white;\n  margin-top: 10px;\n  letter-spacing: 2px;\n  font-size: 1.1rem;\n}\n\n\nh3 {\n  font-family: \"Lora\", serif;\n  font-size: 1rem;\n  font-style: italic;\n  /* color:white; */\n  color :rgb(252, 242, 244);\n  letter-spacing: .5px;\n}\n\n\n.row{\n  margin-top: 1%;\n}\n\n\nli {\n  font-family: 'Montserrat', sans-serif;\n    /* letter-spacing: 1px; */\n    color: white;\n    list-style: none;\n    font-size: .85rem;\n    font-display: justified;\n    line-height: 1.2rem;\n  }\n\n\nul  {\n  padding: 0;\n  list-style-type: none;\n}\n\n\n#resume .header-col { padding-top: 9px; }\n\n\n#resume .main-col { padding-right: 10%; }\n\n\n/*----------------------------------------------*/\n\n\n/*\tSkill Bars\n/*----------------------------------------------*/\n\n\n.bars {\n   width: 95%;\n   float: left;\n   padding: 0;\n   text-align: left;\n}\n\n\n.bars .skills {\n     margin-top: 36px;\n  list-style: none;\n}\n\n\n.bars li {\n  position: relative;\n     margin-bottom: 60px;\n     background: #ccc;\n     height: 42px;\n     border-radius: 3px;\n}\n\n\n.bars li em {\n   font: 15px 'opensans-bold', sans-serif;\n  color: #313131;\n   text-transform: uppercase;\n  letter-spacing: 2px;\n   font-weight: normal;\n  position: relative;\n   top: -36px;\n}\n\n\n.bar-expand {\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  margin: 0;\n  padding-right: 24px;\n     background: #313131;\n  display: inline-block;\n     height: 42px;\n  line-height: 42px;\n  border-radius: 3px 0 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7OztBQUdBLGdDQUFnQyxjQUFjLEVBQUU7OztBQUNoRCxtQ0FBbUMsY0FBYyxFQUFFOzs7QUFFbkQ7RUFDRSwrQ0FBK0M7RUFDL0MseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOzs7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7OztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7O0FBQ0E7RUFDRSxxQ0FBcUM7SUFDbkMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7OztBQUNGO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7O0FBRUEsc0JBQXNCLGdCQUFnQixFQUFFOzs7QUFDeEMsb0JBQW9CLGtCQUFrQixFQUFFOzs7QUFFeEMsaURBQWlEOzs7QUFDakQ7aURBQ2lEOzs7QUFFakQ7R0FDRyxVQUFVO0dBQ1YsV0FBVztHQUNYLFVBQVU7R0FDVixnQkFBZ0I7QUFDbkI7OztBQUNBO0tBQ0ssZ0JBQWdCO0VBQ25CLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRSxrQkFBa0I7S0FDZixtQkFBbUI7S0FDbkIsZ0JBQWdCO0tBQ2hCLFlBQVk7S0FDWixrQkFBa0I7QUFDdkI7OztBQUNBO0dBQ0csc0NBQXNDO0VBQ3ZDLGNBQWM7R0FDYix5QkFBeUI7RUFDMUIsbUJBQW1CO0dBQ2xCLG1CQUFtQjtFQUNwQixrQkFBa0I7R0FDakIsVUFBVTtBQUNiOzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTs7RUFFTixTQUFTO0VBQ1QsbUJBQW1CO0tBQ2hCLG1CQUFtQjtFQUN0QixxQkFBcUI7S0FDbEIsWUFBWTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3Jlc3VtZSB7XG4gIGJhY2tncm91bmQ6IHJnYigxMiwgMywgNCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6MTAlO1xufVxuXG5cbiNyZXN1bWUgYSwgI3Jlc3VtZSBhOnZpc2l0ZWQgIHsgY29sb3I6ICMxMUFCQjA7IH1cbiNyZXN1bWUgYTpob3ZlciwgI3Jlc3VtZSBhOmZvY3VzIHsgY29sb3I6ICMzMTMxMzE7IH1cblxuI3Jlc3VtZSBoMSB7XG4gIGZvbnQ6IDE1cHgvMjRweCAnb3BlbnNhbnMtc2VtaWJvbGQnLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuaDJ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6d2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICAvKiBjb2xvcjp3aGl0ZTsgKi9cbiAgY29sb3IgOnJnYigyNTIsIDI0MiwgMjQ0KTtcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG59XG4ucm93e1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cbmxpIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAvKiBsZXR0ZXItc3BhY2luZzogMXB4OyAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xuICAgIGZvbnQtZGlzcGxheToganVzdGlmaWVkO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG4gIH1cbnVsICB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuI3Jlc3VtZSAuaGVhZGVyLWNvbCB7IHBhZGRpbmctdG9wOiA5cHg7IH1cbiNyZXN1bWUgLm1haW4tY29sIHsgcGFkZGluZy1yaWdodDogMTAlOyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKlx0U2tpbGwgQmFyc1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmJhcnMge1xuICAgd2lkdGg6IDk1JTtcbiAgIGZsb2F0OiBsZWZ0O1xuICAgcGFkZGluZzogMDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYmFycyAuc2tpbGxzIHtcbiAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5iYXJzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgICBoZWlnaHQ6IDQycHg7XG4gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5iYXJzIGxpIGVtIHtcbiAgIGZvbnQ6IDE1cHggJ29wZW5zYW5zLWJvbGQnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMxMzEzMTtcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICB0b3A6IC0zNnB4O1xufVxuLmJhci1leHBhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgIGJhY2tncm91bmQ6ICMzMTMxMzE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/resume/resume.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<section id=\"resume\">\n  <div class=\"row education\">\n    <div class=\"col-md-12\">\n      <h1>Education</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>QA TESTER</h2>\n      <h3>Bigpoint International Services Ltd. | Gzira, Malta | Sep 2017 - Jan 2018</h3>\n      <ul class=\"text-justify\">\n        <li><b>Testplan Execution &amp; Compilation:</b><br> Development and execution of test suites and test scripts\n          for new and existing games.</li>\n        <li><b>Bug &amp; Defect Reports:</b><br> Submission, escalation and tracking of defects found during testing to\n          ensure that they are\n          resolved.</li>\n        <li><b>Bug Regression: </b><br>Reproduce issues when necessary in order to assist Game Development in resolving\n          issues whilst\n          utilising required resources e.g. Jira and Mantis for executing test cases and reporting defects.</li>\n        <li><b>Detailed Test Reports:</b><br>Provide detailed Test Reports during and at the end of each development.</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>E-LEARNING CONSULTANT </h2>\n        <h3>Inmarkets Trading as Skillcast | Mrehil, Malta | Dec 2017 - Aug 2018</h3>\n        <ul class=\"text-justify\">\n          <li><b>Project Management:</b><br>  Manage client communications through meetings, phone calls and emails to produce and\n            deliver excellent e-learning courses in a timely manner, ensuring good relationships are developed for excellent\n            client satisfaction. </li>\n          <li><b>Effective Web-Based Training: </b><br>Ensuring ongoing excellent customer satisfaction when dealing with large and small\n            clients.</li>\n          <li><b>Fantastic Customer Service: </b><br>Delivered in a web based environment.</li>\n          <li><b>Selection Instructional Techniques: </b><br>Meeting the needs of multiple learning modalities and sequences instructional\n            content in storyboards.</li>\n          <li><b>Hardware and Software Knowledge: </b><br> Excel, Word, graphics (e.g. bitmap, jpeg, vector images), audio, interactivity,\n              accessibility, programming languages, and e-learning authoring software programs to develop and deliver\n              interactive training experiences.</li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h2>QC ANALYST </h2>\n          <h3>Alexion Pharmaceuticals Inc. | Dublin, Ireland | Jan 2016 - Dec 2017</h3>\n          <ul class=\"text-justify\">\n            <li><b>Organising and Executing Tests: </b><br>Creating Standard Operating Procedures to carry out laboratory tests. Involved\n              researching best practices within the industry and applying previous knowledge for best outputs. </li>\n            <li><b>Company Start up: </b><br>Fast paced environment with regulatory considerations and new challenges.</li>\n            <li><b>Data Gathering and Dissection: </b><br>Applying knowledge and experience to understand data and report to direct and\n              indirect team members on findings.</li>\n            <li><b>Training Representative: </b><br>Managed all training files of the QC department staff. Provided information to colleges on\n              their training and presented to wider groups. </li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h2>BIOPROCESS SCIENTIST </h2>\n            <h3>Pfizer | Grange Castle, Ireland | Jan 2015 - Dec 2015</h3>\n            <ul class=\"text-justify\">\n              <li><b>Experimental Design and Execution:</b><br>Responsible for leading and executing projects, including successful execution\n                  of projects and organizing partnership where appropriate.</li>\n              <li><b>Volunteering: </b><br>Volunteered as a ͚biotechnology agent͛ on site, promoting inclusion, patients, products, people\n                and technology as part of a Pfizer wide program.</li>\n              <li><b>Own it!</b><br> Being a responsible and highly committed member of the team, striving for advancement, excellence and\n                site-wide cohesion.</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h2>UPSTREAM PROCESS TECHNOLOGIST </h2>\n              <h3>Reliance Genemedix Ltd. | Co. Offaly, Ireland | Jun 2012 - Dec 2013</h3>\n              <ul class=\"text-justify\">\n                <li><b>Training:</b><br>Trained all new upstream processing staff to laboratory standards, including senior staff members.</li>\n                <li><b>Calibration and revalidation: </b><br>Calibration and re-qualification of equipment and machinery.</li>\n                <li><b>Scale up: </b><br>Heavily involved in a scale up process, resulted in workload and activities increasing by\n                  ~ 250%.</li>\n              </ul>\n            </div>\n          </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/components/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/components/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: rgb(221, 71, 107) !important;\n  color: white;\n}\n.dropdown-menu {\n  background-color: rgb(221, 71, 107) !important;\n  color: white;\n}\n.navbar .navbar-brand {\n  color: white;\n}\n.navbar .navbar-brand:hover{\n  color: white;\n}\n.navbar .navbar-brand {\n  color: white;\n}\n.navbar .navbar-nav li a {\n  color: white;\n}\n.navbar .navbar-toggler .navbar-toggler-icon {\n  color:white;\n}\n.lillytext{\n  padding-left: 5%;\n}\n/* \n\n/***** Top menu \n.navbar .navbar-no-bg {\n  background-color: rgba(230, 70, 100, .7);\n}\n.dropdown-menu{\n  background-color: rgba(230, 70, 100, .7);\n  padding: 10px;\n}\na {\n  color: white;\n  padding: 10px;\n  \n}\n\n.navbar-dark .navbar-nav {\n  font-size: 15px;\n  color: #fff;\n  text-transform: uppercase;\n\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8);\n  border: 5%;\n}\n\n.navbar-dark .navbar-nav .nav-link:hover {\n  color: #fff;\n}\n\n.navbar-dark .navbar-nav .nav-link:focus {\n  color: #fff;\n  outline: 0;\n}\n\n.navbar-expand-md .navbar-nav .nav-link {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQThDO0VBQzlDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsOENBQThDO0VBQzlDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMkNFIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDcxLCAxMDcpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kcm9wZG93bi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzEsIDEwNykgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5hdmJhciAubmF2YmFyLWJyYW5kOmhvdmVye1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmF2YmFyIC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmF2YmFyIC5uYXZiYXItbmF2IGxpIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gIGNvbG9yOndoaXRlO1xufVxuLmxpbGx5dGV4dHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn0gICBcblxuXG4vKiBcblxuLyoqKioqIFRvcCBtZW51IFxuLm5hdmJhciAubmF2YmFyLW5vLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDcwLCAxMDAsIC43KTtcbn1cbi5kcm9wZG93bi1tZW51e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgNzAsIDEwMCwgLjcpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgXG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDUlO1xufVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogMDtcbn1cblxuLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG4gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\"> <img id=\"logo\" alt=\"Logo\" src=\"../../assets/images/lillycode2_icon.png\" width=\"65\"\n      height=\"65\"> <span class=\"lillytext\"> Lilly<b>Code</b></span> </a>\n  <button (click)=\"toggleCollapse()\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link scrollto\" href=\"#header\">Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link scrollto\" href=\"#about\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link scrollto\" href=\"#portfolio\">Portfolio</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link scrollto\" href=\"#resume\">Resume</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/books\">Books</a>\n      </li>\n      <!--\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\">Contact me</a>\n      </li>-->\n    </ul>\n  </div>\n</nav>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.show = false;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/services/code.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/code.service.ts ***!
  \******************************************/
/*! exports provided: CodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeService", function() { return CodeService; });
var CodeService = /** @class */ (function () {
    function CodeService() {
        this.codes = [
            { name: 'Pascal Precht', slug: "code-1" },
            { name: 'Christoph Burgdorf', slug: "code-2" },
            { name: 'Thomas Burleson', slug: "code-3" }
        ];
    }
    CodeService.prototype.getCodes = function () {
        return this.codes;
    };
    CodeService.prototype.getCode = function (slug) {
        return this.codes.find(function (contact) { return contact.slug == slug; });
    };
    return CodeService;
}());



/***/ }),

/***/ "./src/app/shared/http.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/http.service.ts ***!
  \****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.test = "How r u?";
    }
    HttpService.prototype.httpGet = function (url) {
        return this.http.get(url);
    };
    HttpService.prototype.httpPost = function (url, _a) {
        return this.http.post(url, { name: "Subrat" });
    };
    HttpService.prototype.sendEmail = function (url, data) {
        return this.http.post(url, data);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leannelacey-byrne/Sites/Angular/my_projects/leannewebsite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map