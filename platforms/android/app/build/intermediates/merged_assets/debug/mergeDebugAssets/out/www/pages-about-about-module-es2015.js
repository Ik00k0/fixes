(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>about</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-card> -->\n    <!-- <ion-card-content> -->\n      <form #userProfileForm=\"ngForm\" (ngSubmit)=\"onSubmit(userProfileForm)\">\n        <ion-card>\n          <ion-card-header>\n            <ion-label>User Information</ion-label>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item>\n              <ion-label>Name: </ion-label>\n              <ion-input clearInput maxlength=20 type=\"text\" [(ngModel)]=\"uname\" name=\"uname\" value={{u_name}}> </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Gender: </ion-label>\n              <ion-select placeholder=\"Select One\">\n                <ion-select-option value=\"f\">Female</ion-select-option>\n                <ion-select-option value=\"m\">Male</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label>Date of Birth: </ion-label>\n              <ion-input type=\"date\" [(ngModel)]=\"udob\"  name=\"udob\" value={{p_dob}}> </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Phone Number: </ion-label>\n              <ion-input type=\"number\" [(ngModel)]=\"unumber\" required pattern='[0-9]{10}' name=\"unumber\" value={{p_num}}> </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>E-mail: </ion-label>\n              <ion-input type=\"E-mail\" [(ngModel)]=\"umail\" name=\"umail\" value={{u_mail}}> </ion-input>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n        \n\n        <ion-card>\n          <ion-card-header>\n              <ion-label>\n                Emergency Contact Detaails\n              </ion-label>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item>\n              <ion-label>Contact Name: </ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"cname\" name=\"cname\" value={{c_name}}> </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Contact Number: </ion-label>\n              <ion-input type=\"number\" [(ngModel)]=\"cnumber\" required pattern='[0-9]{10}' name=\"cnuber\" value={{c_num}}> </ion-input>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n        \n        \n        <ion-button type=\"submit\" [disabled]=\"!userProfileForm.form.valid\">save details</ion-button>\n      </form >\n    <!-- </ion-card-content> -->\n  <!-- </ion-card> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/about/about-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/pages/about/about-routing.module.ts");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/app/pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AboutPage = class AboutPage {
    constructor(http, activeRoute, router) {
        this.http = http;
        this.activeRoute = activeRoute;
        this.router = router;
    }
    ngOnInit() {
        let dataReceived = this.activeRoute.snapshot.paramMap.get('name');
        this.id = dataReceived;
        this.setPerson(dataReceived);
    }
    setPerson(user) {
        this.http.post('http://cs.ashesi.edu.gh/~godlove_otoo/MindITBackend/view/getuser.php', { user }, {})
            .then(data => {
            this.cont_datda = JSON.parse(data.data);
            this.u_name = this.cont_datda[0]['name'];
            this.p_dob = this.cont_datda[0]['dob'];
            this.p_num = this.cont_datda[0]['phoneNum'];
            this.u_mail = this.cont_datda[0]['email'];
            this.c_name = this.cont_datda[0]['EContactName'];
            this.c_num = this.cont_datda[0]['EContactNum'];
            this.gender = this.cont_datda[0]['gender'];
            //alert(this.personData);
        })
            .catch(error => {
            alert(error.status);
            alert(error.error); // error message as string
            alert(error.headers);
        });
    }
    onSubmit(form) {
        this.updatePerson();
    }
    updatePerson() {
        //alert(this.id+  this.name+ this.number);
        this.http.post('http://cs.ashesi.edu.gh/~godlove_otoo/MindITBackend/view/updateuser.php', {
            userId: this.id, name: this.u_name, gender: this.gender,
            dob: this.p_dob, phoneNum: this.p_num, email: this.u_mail,
            EContactName: this.c_name, EContactNum: this.c_num
        }, {}) //add all the details
            .then((data) => {
            alert("information updated");
            //alert(JSON.parse(data.data));
            //this.router.navigateByUrl('view-contacts');
        })
            .catch((error) => {
            alert(error);
        });
    }
};
AboutPage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.page.scss */ "./src/app/pages/about/about.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module-es2015.js.map