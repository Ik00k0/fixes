(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title size=\"medium\">Own your Experence</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"medium\">Own your Experence</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- <ion-card> -->\n    <!-- <ion-card-header>\n  \n      <ion-item>\n        <ion-card-title>Settings</ion-card-title>\n      </ion-item>\n      \n    </ion-card-header> -->\n  \n    <!-- <ion-card-content> -->\n      <ion-grid>\n        <ion-col>\n          <ion-row>\n            \n          </ion-row>\n          <ion-item (click)=\"openProfilePage(2)\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n            <ion-label>Profile</ion-label>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-row>\n\n          </ion-row>\n          <ion-item>\n            <ion-icon name=\"analytics-outline\"></ion-icon>\n            <ion-label>Graphs and Report</ion-label>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-item>\n  \n          <ion-item>\n            <ion-icon name=\"alarm-outline\"></ion-icon>\n            <ion-label>Reminders</ion-label>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n          <ion-row>\n\n          </ion-row>\n          <ion-item id=\"themeToggle\">\n            <ion-icon name=\"contrast-outline\"></ion-icon>\n            <ion-label>Dark Mode</ion-label>\n            <ion-toggle [(ngModel)]=\"dark\" color=\"tertiary\"></ion-toggle>\n          </ion-item>\n    \n          <ion-item (click)=\"buttonClicked()\">\n            <ion-icon name=\"server-outline\"></ion-icon>\n            <ion-label>Enable Analysis</ion-label>\n            <ion-toggle [(ngModel)]=\"analysis\" color=\"tertiary\"></ion-toggle>\n          </ion-item>\n        </ion-col>\n       \n\n        <ion-col>\n          <ion-row>\n\n          </ion-row>\n\n          <ion-item>\n            <ion-icon name=\"download-outline\"></ion-icon>\n            <ion-label>Export Entries</ion-label>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-item>\n    \n          <ion-item>\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\n            <ion-label>Access Codes</ion-label>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-item>\n\n          <ion-item (click)=\"openSettingsPage()\">\n            <ion-icon name=\"people-outline\"></ion-icon>\n            <ion-label>More Settings</ion-label>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-item>\n    \n          <ion-item (click)=\"openContactSupport()\">\n            <ion-icon name=\"people-outline\"></ion-icon>\n            <ion-label>Contact Support</ion-label>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-item>\n    \n          \n        </ion-col>\n\n        <ion-col>\n          <ion-row>\n\n          </ion-row>\n          <ion-item (click)=\"openAboutUs()\">\n            <ion-icon name=\"help-circle-outline\"></ion-icon>\n            <ion-label>About</ion-label>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-item>\n        </ion-col>\n  \n        \n      </ion-grid>\n      \n\n    <!-- </ion-card-content>\n  </ion-card> -->\n\n  <!-- <app-explore-container name=\"Tab 4 page\"></app-explore-container> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"] }])
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8xa29va28vRG9jdW1lbnRzL2lvbmljL01FTlRBTEhFQUxUSEFQUC9zcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");




let Tab4Page = class Tab4Page {
    constructor(router, composer) {
        this.router = router;
        this.composer = composer;
    }
    buttonClicked() {
        alert("dfghjjh");
    }
    openContactSupport() {
        this.composer.isAvailable().then((available) => {
            if (available) {
                //Now we know we can send
            }
        });
        let email = {
            to: 'hodoa817@gmail.com',
            cc: 'albert.hodo@icloud.com',
            //bcc: ['john@doe.com', 'jane@doe.com'],
            attachments: [
            //attach the mind IT image details
            //'file://img/logo.png',
            //'res://icon.png',
            //'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
            //'file://README.pdf'
            ],
            subject: 'MIND IT SUPPORT | MENTAL HEALTH ISSUES',
            body: 'Hello Friend, ',
            isHtml: true
        };
        // Send a text message using default options
        this.composer.open(email);
        //this.router.navigateByUrl('contact-support');
    }
    openProfilePage(user) {
        //alert(user);
        this.router.navigateByUrl('about/' + user);
    }
    openAboutUs() {
        this.router.navigateByUrl("about-us");
    }
    openSettingsPage() {
        this.router.navigateByUrl("tabs/tab4/settings");
    }
};
Tab4Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"] }
];
Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"]])
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module-es2015.js.map