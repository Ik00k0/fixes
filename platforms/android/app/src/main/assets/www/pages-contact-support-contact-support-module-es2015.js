(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-support-contact-support-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-support/contact-support.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-support/contact-support.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>contactSupport</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/contact-support/contact-support-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/contact-support/contact-support-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ContactSupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSupportPageRoutingModule", function() { return ContactSupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-support.page */ "./src/app/pages/contact-support/contact-support.page.ts");




const routes = [
    {
        path: '',
        component: _contact_support_page__WEBPACK_IMPORTED_MODULE_3__["ContactSupportPage"]
    }
];
let ContactSupportPageRoutingModule = class ContactSupportPageRoutingModule {
};
ContactSupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactSupportPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/contact-support/contact-support.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/contact-support/contact-support.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContactSupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSupportPageModule", function() { return ContactSupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_support_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-support-routing.module */ "./src/app/pages/contact-support/contact-support-routing.module.ts");
/* harmony import */ var _contact_support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-support.page */ "./src/app/pages/contact-support/contact-support.page.ts");







let ContactSupportPageModule = class ContactSupportPageModule {
};
ContactSupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_support_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactSupportPageRoutingModule"]
        ],
        declarations: [_contact_support_page__WEBPACK_IMPORTED_MODULE_6__["ContactSupportPage"]]
    })
], ContactSupportPageModule);



/***/ }),

/***/ "./src/app/pages/contact-support/contact-support.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/contact-support/contact-support.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3Qtc3VwcG9ydC9jb250YWN0LXN1cHBvcnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/contact-support/contact-support.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/contact-support/contact-support.page.ts ***!
  \***************************************************************/
/*! exports provided: ContactSupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSupportPage", function() { return ContactSupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactSupportPage = class ContactSupportPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactSupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-support',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-support.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-support/contact-support.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-support.page.scss */ "./src/app/pages/contact-support/contact-support.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactSupportPage);



/***/ })

}]);
//# sourceMappingURL=pages-contact-support-contact-support-module-es2015.js.map