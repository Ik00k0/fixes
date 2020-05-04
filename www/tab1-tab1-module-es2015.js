(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-header>\n    <ion-toolbar>\n      <img class=\"ml-4\" src=\"../../assets/images/mindITicon.png\" alt=\"\">\n      <ion-title class=\"purple\">Date Functionality Goes Here</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid fixed>\n\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-row class=\"centerRow\">\n          <ion-col size=\"10\">\n            <h2 class=\"h5 text-center purple\">Hey {{this.nickname}},<br> How do you feel today?</h2>\n          </ion-col>\n        </ion-row>\n\n        <ion-button class=\"purpleBgIonic mt-4 addEntry\" expand=\"block\">\n\n          <div class=\"lead whiteText\" style=\"font-weight: normal;\">\n            <ion-icon slot=\"start\" name=\"add-circle-outline\" size=\"large\" class=\"align-middle\"></ion-icon>\n            <span class=\"align-middle pl-2\">Add Today's Entry</span>\n          </div>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <div class=\"centerVert\">\n\n      <ion-row class=\"centerRow mt-3\">\n        <ion-col size=\"12\" class=\"text-center\">\n          <img src=\"../../assets/images/noentry..png\" class=\"border-rad-none\" alt=\"\">\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"centerRow\">\n        <ion-col size=\"6\" class=\"text-center\">\n          <p class=\"lead purple\"> No Entries for April 2020</p>\n        </ion-col>\n      </ion-row>\n\n\n    </div>\n\n\n  </ion-grid>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"purpleBgIonic\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n\n    <ion-fab-list side=\"top\">\n      <small class=\"purple\">Today</small>\n      <ion-fab-button class=\"purpleBgIonic\">\n        <ion-icon name=\"time-outline\" class=\"whiteText\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n\n    <ion-fab-list side=\"top\">\n      <small class=\"purple sevenEm\">Yesterday</small>\n      <ion-fab-button class=\"purpleBgIonic\">\n        <ion-icon name=\"arrow-back-outline\" class=\"whiteText\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n\n    <ion-fab-list side=\"top\">\n      <small class=\"purple em14\">Other Day</small>\n      <ion-fab-button class=\"purpleBgIonic\">\n        <ion-icon name=\"calendar-outline\" class=\"whiteText\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n\n\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #f9f8f9;\n}\n\n.btn-round {\n  border-radius: 50%;\n  height: 12%;\n  width: 20%;\n  background-image: url('2.jpg');\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n}\n\n.container img {\n  width: 20%;\n  height: 12%;\n  border-radius: 50%;\n}\n\n.centerVert {\n  position: relative;\n  top: 5em;\n}\n\n.border-rad-none {\n  border-radius: 0px !important;\n}\n\n.container .btn {\n  position: absolute;\n  top: 50%;\n  left: 8%;\n  background-color: transparent;\n}\n\n.container .btn:hover {\n  background-color: transparent;\n}\n\n.circleBase {\n  border-radius: 50%;\n}\n\n.type1 {\n  width: 60%;\n  height: 50px;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n  border-radius: 50%;\n  height: inherit;\n  width: inherit;\n}\n\n.line {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  text-align: center;\n}\n\n.sevenEm {\n  margin-bottom: 7em;\n}\n\n.em14 {\n  margin-bottom: 13em;\n}\n\n.addEntry {\n  --padding-bottom: 2em;\n  --padding-end: 2em;\n  --padding-start: 2em;\n  --padding-top: 2em;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8xa29va28vRG9jdW1lbnRzL2lvbmljL01FTlRBTEhFQUxUSEFQUC9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0dGOztBREFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDR0Y7O0FEQUE7RUFDRSw2QkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0FDR0Y7O0FEQUE7RUFDRSw2QkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHRjs7QURBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QUREQTtFQUNFLG1CQUFBO0FDSUY7O0FEREE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0lGOztBRERBO0VBQ0UsOEJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmOWY4Zjk7XG59XG4uYnRuLXJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDEyJTtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvMi5qcGdcIik7XG59XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEyJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2VudGVyVmVydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1ZW07XG59XG5cbi5ib3JkZXItcmFkLW5vbmUge1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciAuYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogOCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGFpbmVyIC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNpcmNsZUJhc2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50eXBlMSB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLmxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNldmVuRW0ge1xuICBtYXJnaW4tYm90dG9tOiA3ZW07XG59XG4uZW0xNCB7XG4gIG1hcmdpbi1ib3R0b206IDEzZW07XG59XG5cbi5hZGRFbnRyeSB7XG4gIC0tcGFkZGluZy1ib3R0b206IDJlbTtcbiAgLS1wYWRkaW5nLWVuZDogMmVtO1xuICAtLXBhZGRpbmctc3RhcnQ6IDJlbTtcbiAgLS1wYWRkaW5nLXRvcDogMmVtO1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGV7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjhmOTtcbn1cblxuLmJ0bi1yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMiU7XG4gIHdpZHRoOiAyMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzLzIuanBnXCIpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEyJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2VudGVyVmVydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1ZW07XG59XG5cbi5ib3JkZXItcmFkLW5vbmUge1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciAuYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogOCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGFpbmVyIC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNpcmNsZUJhc2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50eXBlMSB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLmxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNldmVuRW0ge1xuICBtYXJnaW4tYm90dG9tOiA3ZW07XG59XG5cbi5lbTE0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTNlbTtcbn1cblxuLmFkZEVudHJ5IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMmVtO1xuICAtLXBhZGRpbmctZW5kOiAyZW07XG4gIC0tcGFkZGluZy1zdGFydDogMmVtO1xuICAtLXBhZGRpbmctdG9wOiAyZW07XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");







let Tab1Page = class Tab1Page {
    constructor(router, toast, platform, nativeStorage, nonStorage) {
        this.router = router;
        this.toast = toast;
        this.platform = platform;
        this.nativeStorage = nativeStorage;
        this.nonStorage = nonStorage;
        this.nickname = '';
    }
    ngOnInit() {
        this.userInfo = {
            nickname: "Peyi",
            agreed: false,
            mentOptions: {
                autism: { selected: false, style: null },
                adhd: { selected: false, style: null },
                ocd: { selected: false, style: null },
                depression: { selected: false, style: null },
                bipolar: { selected: false, style: null },
                ptsd: { selected: false, style: null },
                selfharm: { selected: false, style: null },
                schizo: { selected: false, style: null },
                eatingd: { selected: false, style: null },
                anxiety: { selected: false, style: null }
            }
        };
        this.nickname = this.userInfo.nickname;
        // if (this.platform.is("android")) {
        //   this.nativeStorage.getItem("userInfo").then(
        //     (data) => {
        //       this.userInfo = data;
        //       this.nickname = this.userInfo.nickname;
        //     },
        //     (failure) => {
        //       alert("Error retrieving user info #tab1");
        //     }
        //   )
        // }
        // if (this.platform.is("desktop") || this.platform.is("mobileweb")) {
        //   this.nonStorage.get("userInfo").then(
        //     (data) => {
        //       this.userInfo = data;
        //       this.nickname = this.userInfo.nickname;
        //     },
        //     (failure) => {
        //       alert("Error retrieving user info #tab1");
        //     }
        //   )
        // }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map