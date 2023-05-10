"use strict";
(self["webpackChunkangularPortfolio"] = self["webpackChunkangularPortfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _componentes_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/navigation/navigation.component */ 8421);
/* harmony import */ var _componentes_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/hero/hero.component */ 5974);
/* harmony import */ var _componentes_about_me_aboutme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/about-me/aboutme.component */ 5261);
/* harmony import */ var _componentes_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/projects/projects.component */ 4746);
/* harmony import */ var _componentes_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/skills/skills.component */ 1236);
/* harmony import */ var _componentes_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/contact/contact.component */ 8027);
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/footer/footer.component */ 202);








class AppComponent {
  constructor() {
    this.title = 'angularPortfolio';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 7,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-navigation")(1, "app-hero")(2, "app-aboutme")(3, "app-projects")(4, "app-skills")(5, "app-contact")(6, "app-footer");
    }
  },
  dependencies: [_componentes_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent, _componentes_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__.HeroComponent, _componentes_about_me_aboutme_component__WEBPACK_IMPORTED_MODULE_2__.AboutmeComponent, _componentes_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _componentes_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__.SkillsComponent, _componentes_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent, _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _componentes_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/navigation/navigation.component */ 8421);
/* harmony import */ var _componentes_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/hero/hero.component */ 5974);
/* harmony import */ var _componentes_about_me_aboutme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/about-me/aboutme.component */ 5261);
/* harmony import */ var _componentes_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/projects/projects.component */ 4746);
/* harmony import */ var _componentes_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/skills/skills.component */ 1236);
/* harmony import */ var _componentes_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/contact/contact.component */ 8027);
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/footer/footer.component */ 202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _componentes_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__.NavigationComponent, _componentes_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__.HeroComponent, _componentes_about_me_aboutme_component__WEBPACK_IMPORTED_MODULE_4__.AboutmeComponent, _componentes_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsComponent, _componentes_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__.SkillsComponent, _componentes_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__.ContactComponent, _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 5261:
/*!***********************************************************!*\
  !*** ./src/app/componentes/about-me/aboutme.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutmeComponent": () => (/* binding */ AboutmeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutmeComponent {}
AboutmeComponent.ɵfac = function AboutmeComponent_Factory(t) {
  return new (t || AboutmeComponent)();
};
AboutmeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutmeComponent,
  selectors: [["app-aboutme"]],
  decls: 8,
  vars: 0,
  consts: [[1, "about-me", "mt-4"], [1, "container", "text-center"], [1, "row"], [1, "col-3"], ["src", "assets/images/fotoPerfil.png", "alt", "foto de perfil", 1, "img-fluid", "rounded-circle", "dos"], [1, "col-9"], [1, "mt-3"]],
  template: function AboutmeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi praesentium pianissimos quibusdam mollitia expedita repellat id quisquam architecto? Quod aperiam quia accusamus beatae illo quibusdam dolore, corporis reiciendis mollitia?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: [".dos[_ngcontent-%COMP%]{\n  width: 80%;\n}\n\n.about-me[_ngcontent-%COMP%]{\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYWJvdXQtbWUvYWJvdXRtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLmRvc3tcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmFib3V0LW1le1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8027:
/*!**********************************************************!*\
  !*** ./src/app/componentes/contact/contact.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ContactComponent {}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 0,
  vars: 0,
  template: function ContactComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 202:
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 6,
  vars: 0,
  consts: [[1, "fondo", "d-flex", "flex-column"], [1, "box-f", "d-flex"], ["src", "assets/images/logo5.png", "width", "80px", "alt", "logo", 1, "logos-f"], [1, "line"], [1, "footer-texto", "justify-content-center", "text-center"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Creado por JABM / Todos los Derechos Reservados (2022) \u00A9");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".box-f[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n  filter: invert(.2);\n  -webkit-filter: invert(.2); \n  -moz-filter: invert(.2)\n}\n\n\n.fondo[_ngcontent-%COMP%]{\n  background-color: #f4f5f6;\n  display: flex;\n  \n}\n\n.box-f[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 140px;\n  margin-top:5px;\n}\n\n\n.line[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 8px;\n  background-color: #ff8300;\n  height: 1px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.footer-texto[_ngcontent-%COMP%] {\n  color: #9D9EA3;\n  margin-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQjtBQUNGOztBQUVBLFdBQVc7QUFDWDtFQUNFLHlCQUF5QjtFQUN6QixhQUFhOztBQUVmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOzs7QUFHQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtZiAsaW1nIHtcbiAgZmlsdGVyOiBpbnZlcnQoLjIpO1xuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KC4yKTsgXG4gIC1tb3otZmlsdGVyOiBpbnZlcnQoLjIpXG59XG5cbi8qIGZvb3RlciAqL1xuLmZvbmRve1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbn1cblxuLmJveC1mIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xuICBtYXJnaW4tdG9wOjVweDtcbn1cblxuXG4ubGluZSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODMwMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5mb290ZXItdGV4dG8ge1xuICBjb2xvcjogIzlEOUVBMztcbiAgbWFyZ2luLXRvcDogODBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5974:
/*!****************************************************!*\
  !*** ./src/app/componentes/hero/hero.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroComponent": () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeroComponent {}
HeroComponent.ɵfac = function HeroComponent_Factory(t) {
  return new (t || HeroComponent)();
};
HeroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeroComponent,
  selectors: [["app-hero"]],
  decls: 8,
  vars: 0,
  consts: [["src", "assets/images/video.mp4", "autoplay", "", "loop", "", 1, "tre"], [1, "over"], [1, "conten"], [1, "text-center"]],
  template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A1Hola! Soy Abrahan Bass");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Desarrollador de Sitios Web.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["video[_ngcontent-%COMP%]{\nwidth: 100%;\nheight: 100%;\nobject-fit: cover;\n}\n.over[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 100vh;\n \n  background: rgba(0, 0, 0, 0.36);\n  top: 0;\n  left: 0;\n  margin-top: 100px;\n}\n\n.conten[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  display: block;\n  top: 50%;\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  \n  \n}\n\n\nh1[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n  font-family: 'Fira Sans Condensed', sans-serif;\n  color: #f4f5f6;\n  font-weight: 400px;\n}\n\n\n \nh2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #e36b1b;\n  font-weight: 300px;\n  \n}\n\n\n\n\n@media screen and (max-width: 800px){\n  h1[_ngcontent-%COMP%]{\n    font-size: 50px;\n  }\n  \n  .conten[_ngcontent-%COMP%]{\n    \n    top: 30%; \n  }\n   \n  h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: #e36b1b;\n    \n    \n  }\n}\n\n@media screen and (max-width: 500px){\n  h1[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }\n\n  \n   \n  h2[_ngcontent-%COMP%] {\n    font-size: 9px;\n    color: #e36b1b;\n    \n    \n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvaGVyby9oZXJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsaUJBQWlCOzs7O0FBSWpCO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixpQkFBaUI7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhOztFQUViLCtCQUErQjtFQUMvQixNQUFNO0VBQ04sT0FBTztFQUNQLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7OztBQUdwQjs7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsOENBQThDO0VBQzlDLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7Ozs7QUFJQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCOztBQUVwQjs7Ozs7QUFLQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYzs7O0VBR2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7Ozs7RUFJQTtJQUNFLGNBQWM7SUFDZCxjQUFjOzs7RUFHaEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi8qIFNlY2Npb24gSGVybyAqL1xuXG5cblxudmlkZW97XG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbm9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm92ZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuIFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uY29udGVue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgXG59XG5cblxuaDEge1xuICBmb250LXNpemU6IDQuNXJlbTtcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmNGY1ZjY7XG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcbn1cblxuXG4gXG5oMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBjb2xvcjogI2UzNmIxYjtcbiAgZm9udC13ZWlnaHQ6IDMwMHB4O1xuICBcbn1cblxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xuICBoMXtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgXG4gIC5jb250ZW57XG4gICAgXG4gICAgdG9wOiAzMCU7IFxuICB9XG4gICBcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2UzNmIxYjtcbiAgICBcbiAgICBcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gIGgxe1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIFxuICAgXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBjb2xvcjogI2UzNmIxYjtcbiAgICBcbiAgICBcbiAgfVxufVxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8421:
/*!****************************************************************!*\
  !*** ./src/app/componentes/navigation/navigation.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NavigationComponent {}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
  return new (t || NavigationComponent)();
};
NavigationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavigationComponent,
  selectors: [["app-navigation"]],
  decls: 54,
  vars: 0,
  consts: [[1, "navbar", "navbar-expand-md", "navbar-ligt"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbar-toggler", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbar-toggler", 1, "collapse", "navbar-collapse"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/logo5.png", "width", "90", "alt", "logo de Argentina Programa"], [1, "social-media", "d-flex", "flex-wrap"], ["href", "https://twitter.com/?lang=es", "target", "_blank", "rel", "noopener noreferrer"], [1, "icon", "bi", "bi-twitter"], ["href", "https://github.com/", "target", "_blank", "rel", "noopener noreferrer"], [1, "bi", "bi-github"], ["href", "https://www.linkedin.com/home", "target", "_blank", "rel", "noopener noreferrer"], [1, "bi", "bi-linkedin"], ["href", "https://www.instagram.com/", "target", "_blank", "rel", "noopener noreferrer"], [1, "bi", "bi-instagram"], ["href", "mailto:jbastidas.8911@gmail.com", "target", "_blank", "rel", "noopener noreferrer"], [1, "bi", "bi-envelope"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#loginModal", 1, "btn"], [1, "bi", "bi-person-fill-lock", "fs-4"], ["id", "loginModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], [1, "modal-body"], ["id", "contacto", "action", "#"], [1, "form"], [1, "topi"], ["src", "assets/images/logo3.png", "width", "70px", "alt", "logo code-ready"], [1, "grup"], ["for", "Nombre"], ["type", "text", "required", ""], ["for", "Email"], ["type", "email", "required", ""], ["for", "Tel\u00E9fono"], ["type", "number", "required", ""], ["for", "Comentarios"], ["name", "Comentarios", "id", "", "cols", "0", "rows", "0", "placeholder", "Agrega tus Comentarios"], ["type", "submit"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"]],
  template: function NavigationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a")(19, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20)(22, "div", 21)(23, "div", 22)(24, "div", 23)(25, "h1", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inicio de Sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 25)(28, "form", 26)(29, "div", 27)(30, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 30)(33, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 30)(37, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 30)(41, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Tel\u00E9fono");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30)(45, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Comentarios");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "textarea", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30)(49, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Enviar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 40)(52, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Salir");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: [".navbar[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #f4f5f6;\n  box-shadow: 0 4px 13px -4px rgb(0 0 0 / 16%);\n  \n}\n.navbar-brand[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n  filter: invert(.2);\n    -webkit-filter: invert(.9); \n    -moz-filter: invert(.2);\n    \n}\n\n\n\n\n\n.social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n  \n  \n}\n\n.social-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  padding: 10px;\n  border: 2px solid #9D9EA3;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  margin: 5px;\n  position: relative;\n  text-align: center;\n  display: inline-block;\n  color: #554f4f;\n  transition: all 0.2s ease-in;\n}\n\n.social-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ff8300;\n  color: #f5f6f7;  \n}\n \nbutton[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]{\n  color: #554f4f;\n  background-color:#ff8300 ;\n}\n\nbutton[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover{\n  background-color:#554f4f;\n  color: #f5f6f7;\n}\n\n\n\nform[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  \n}\n.topi[_ngcontent-%COMP%]{\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n.topi[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.form[_ngcontent-%COMP%] {\n  min-width: 40%;\n  background-color: #f4f5f6;\n  border-radius: 12px;\n  box-shadow: 0 0 6px 0 #ff8300;\n  padding: 30px;\n  \n}\n\n.grup[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 10px;\n  text-align: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: block;\n  text-align: justify;\n  color: #3b3838;\n  margin: 0px;\n  font-size: 1rem;\n}\ninput[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  border: 1px solid #e0e0e0;\n   border-radius: 12px;\n   font-size: 20px;\n   width: 100%;\n   margin-top: 0px;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n  margin-bottom: 0;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  font: inherit;\n}\n button[_ngcontent-%COMP%]{\n  border: 1px solid #e0e0e0;\n   border-radius: 12px;\n   font-size: 20px;\n   width: 100%;\n   margin-top: 8px;\n   color: #f4f5f6;\n   background-color: #554f4f\n }\n\n button[_ngcontent-%COMP%]:hover{\n   background-color: #ff8300;\n }\n\n\n\n \n\n @media screen and (max-width: 767px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n  display: none;\n  }\n \n  .social-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border: none;\n    margin: none;\n    position: none;\n    text-align: center;\n    display: flex;\n    color: #554f4f;\n  \n    \n    \n  } \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsNENBQTRDOztBQUU5QztBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCLDBCQUEwQjtJQUMxQix1QkFBdUI7O0FBRTNCOzs7QUFHQSxlQUFlOzs7QUFHZjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCOzs7QUFHbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCOzs7QUFHQSxhQUFhO0FBQ2I7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7O0FBRWY7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixhQUFhOztBQUVmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7R0FDeEIsbUJBQW1CO0dBQ25CLGVBQWU7R0FDZixXQUFXO0dBQ1gsZUFBZTtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7Q0FDQztFQUNDLHlCQUF5QjtHQUN4QixtQkFBbUI7R0FDbkIsZUFBZTtHQUNmLFdBQVc7R0FDWCxlQUFlO0dBQ2YsY0FBYztHQUNkO0NBQ0Y7O0NBRUE7R0FDRSx5QkFBeUI7Q0FDM0I7Ozs7Q0FJQSwwQkFBMEI7O0NBRTFCO0VBQ0M7RUFDQSxhQUFhO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7Ozs7RUFJaEI7O0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLm5hdmJhciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1ZjY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEzcHggLTRweCByZ2IoMCAwIDAgLyAxNiUpO1xuICBcbn1cbi5uYXZiYXItYnJhbmQgLCBpbWcge1xuICBmaWx0ZXI6IGludmVydCguMik7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCguOSk7IFxuICAgIC1tb3otZmlsdGVyOiBpbnZlcnQoLjIpO1xuICAgIFxufVxuXG5cbi8qIG5hdmlnYXRpb24gKi9cblxuXG4uc29jaWFsLW1lZGlhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBcbiAgXG59XG5cbi5zb2NpYWwtbWVkaWEgYSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5RDlFQTM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgbWFyZ2luOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNTU0ZjRmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuXG4uc29jaWFsLW1lZGlhICBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODMwMDtcbiAgY29sb3I6ICNmNWY2Zjc7ICBcbn1cbiBcbmJ1dHRvbiAsIC5idG57XG4gIGNvbG9yOiAjNTU0ZjRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZjgzMDAgO1xufVxuXG5idXR0b24gLCAuYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM1NTRmNGY7XG4gIGNvbG9yOiAjZjVmNmY3O1xufVxuXG5cbi8qIGNvbnRhY3RvICovXG5mb3JtIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxufVxuLnRvcGl7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi50b3BpIGltZyB7XG4gIHdpZHRoOiA3MHB4O1xufVxuLmZvcm0ge1xuICBtaW4td2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmNjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAwICNmZjgzMDA7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIFxufVxuXG4uZ3J1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgY29sb3I6ICMzYjM4Mzg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgZm9udC1zaXplOiAyMHB4O1xuICAgd2lkdGg6IDEwMCU7XG4gICBtYXJnaW4tdG9wOiAwcHg7XG59XG50ZXh0YXJlYSB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG4gYnV0dG9ue1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgIGZvbnQtc2l6ZTogMjBweDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgbWFyZ2luLXRvcDogOHB4O1xuICAgY29sb3I6ICNmNGY1ZjY7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU0ZjRmXG4gfVxuXG4gYnV0dG9uOmhvdmVye1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODMwMDtcbiB9XG5cblxuXG4gLypBZGFwdGFibGUgKFJlc3BvbnNpdmUpICovXG5cbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubmF2YmFyLWJyYW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgfVxuIFxuICAuc29jaWFsLW1lZGlhIGEge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IG5vbmU7XG4gICAgcG9zaXRpb246IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICM1NTRmNGY7XG4gIFxuICAgIFxuICAgIFxuICB9IFxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4746:
/*!************************************************************!*\
  !*** ./src/app/componentes/projects/projects.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProjectsComponent {}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)();
};
ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  decls: 40,
  vars: 0,
  consts: [["id", "proyectos", 1, "proyectos-recientes", "d-flex", "flex-column"], [1, "seccion-titulo", "texto-negro"], [1, "seccion-descripcion"], [1, "container", "text-center", "proyectos-contenedor"], [1, "row"], [1, "col-12", "col-md-4", "col-lg-4"], [1, "proyecto"], ["src", "assets/images/comida.jpg", "alt", "Proyecto 1"], [1, "overlay"], [1, "iconos-contenedor"], ["href", "https://github.com/", "target", "_blank", "rel", "noopener noreferrer"], [1, "bi", "bi-github"], ["href", "https://www.youtube.com/", "target", "_blank", "rel", "noopener noreferrer"], [1, "bi", "bi-laptop"], ["src", "assets/images/comida.jpg", "alt", "Proyecto "]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mis Proyectos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Proyectos que he creado Recientemente...");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Proyecto 1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5)(19, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8)(22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Proyecto 2 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9)(25, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5)(30, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8)(33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Proyecto 3 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9)(36, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1236:
/*!********************************************************!*\
  !*** ./src/app/componentes/skills/skills.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SkillsComponent {}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
  return new (t || SkillsComponent)();
};
SkillsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SkillsComponent,
  selectors: [["app-skills"]],
  decls: 9,
  vars: 0,
  consts: [["id", "habilidades", 1, "habilidades", "seccion-clara"], [1, "seccion-titulo", "texto-negro"], [1, "container", "text-center"], [1, "row"], [1, "col-12", "col-md-6"]],
  template: function SkillsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Habilidades");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Conocimientos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Estudios ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map