(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["startpages-page1-page1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/startpages/page1/page1.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/startpages/page1/page1.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStartpagesPage1Page1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"bg-class\">\n\n  <div>\n    <img class=\"img-class\" src=\"../assets/images/Group3.png\" />\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <h1 class=\"mindITHeader whiteText\">Welcome to MindIT</h1>\n      </ion-col>\n    </ion-row>\n\n    <ion-row text-center>\n\n      <ion-col size=\"8\" style=\"text-align: center;\">\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class=\"centerRow\">\n      <ion-col size=\"11\">\n        <div class=\"\">\n          <p class=\"whiteText paragraphText\">Your companion on your\n            journey to improved\n            mental health</p>\n\n        </div>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"centerRow mt-1\">\n      <ion-col size=\"8\">\n        <div class=\"\">\n          <p class=\"whiteText paragraphText \">What do your friends call you?</p>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <form action=\"\" [formGroup]=\"nameForm\" formnovalidate>\n      <ion-row class=\"centerRow mt-5\">\n        <ion-col size=\"10\">\n          <div class=\"form-group has-error mt-1\">\n\n            <input required type=\"text\" placeholder=\"You can call me..\" formControlName = \"name\" class=\"form-control\">\n\n\n            <!-- <ion-input required type=\"text\" placeholder=\"You Can Call Me...\" [(ngModel)]=\"name\"\n            [ngModelOptions]=\"{standalone:true}\"></ion-input> -->\n\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"centerRow mt-4\">\n        <ion-col size=\"10\" class=\"text-center\">\n          <button [disabled]=\"nameForm.invalid\" type=\"submit\" #continueButton (click)=\"next()\"\n            class=\"btn btn-primary btn-lg btn-block whiteText ripple-parent\">Continue</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/startpages/page1/page1-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/startpages/page1/page1-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: Page1PageRoutingModule */

  /***/
  function srcAppStartpagesPage1Page1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1PageRoutingModule", function () {
      return Page1PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _page1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page1.page */
    "./src/app/startpages/page1/page1.page.ts");

    const routes = [{
      path: '',
      component: _page1_page__WEBPACK_IMPORTED_MODULE_3__["Page1Page"]
    }];
    let Page1PageRoutingModule = class Page1PageRoutingModule {};
    Page1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Page1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/startpages/page1/page1.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/startpages/page1/page1.module.ts ***!
    \**************************************************/

  /*! exports provided: Page1PageModule */

  /***/
  function srcAppStartpagesPage1Page1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1PageModule", function () {
      return Page1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _page1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page1-routing.module */
    "./src/app/startpages/page1/page1-routing.module.ts");
    /* harmony import */


    var _page1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page1.page */
    "./src/app/startpages/page1/page1.page.ts");

    let Page1PageModule = class Page1PageModule {};
    Page1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _page1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Page1PageRoutingModule"]],
      declarations: [_page1_page__WEBPACK_IMPORTED_MODULE_6__["Page1Page"]]
    })], Page1PageModule);
    /***/
  },

  /***/
  "./src/app/startpages/page1/page1.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/startpages/page1/page1.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStartpagesPage1Page1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: lato;\n}\n\n.bg-class {\n  --background: linear-gradient(\n      194deg,\n      #662d72 23.3%,\n      #44a5c6 100%\n  ) !important;\n}\n\n.img-class {\n  height: 40%;\n  width: 40%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 40%;\n}\n\n#rounded {\n  width: 100%;\n  height: 50px;\n  border-radius: 15px;\n  margin-bottom: 5px;\n}\n\n#container {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 5%;\n}\n\n.ion-color-vibrant {\n  --ion-color-base: #662d72;\n  --ion-color-base-rgb: 102, 45, 114;\n  --ion-color-contrast: #000000;\n  --ion-color-contrast-rgb: 0, 0, 0;\n  --ion-color-shade: rgb(139, 0, 219);\n  --ion-color-tint: #ab1aff;\n}\n\nion-input {\n  --placeholder-color: black;\n  --placeholder-opacity: 1;\n  background-color: white;\n  --padding: 5px;\n}\n\ninput {\n  line-height: 2em;\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8xa29va28vRG9jdW1lbnRzL2lvbmljL01FTlRBTEhFQUxUSEFQUC9zcmMvYXBwL3N0YXJ0cGFnZXMvcGFnZTEvcGFnZTEucGFnZS5zY3NzIiwic3JjL2FwcC9zdGFydHBhZ2VzL3BhZ2UxL3BhZ2UxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSTs7OztjQUFBO0FDS0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURHQTtFQUNJLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNBSjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0cGFnZXMvcGFnZTEvcGFnZTEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBmb250LWZhbWlseTogbGF0bztcbn1cblxuLmJnLWNsYXNzIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTk0ZGVnLFxuICAgICAgICAjNjYyZDcyIDIzLjMlLFxuICAgICAgICAjNDRhNWM2IDEwMCVcbiAgICApICFpbXBvcnRhbnQ7IC8vd2UgbmVlZCB0byBjaGFtZ2UgdGhlIGdyYWRpZW50IHRvIG1hdGNoIHdoYXQgd2UgbmVlZFxufVxuXG4uaW1nLWNsYXNzIHtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogNDAlO1xufVxuXG4jcm91bmRlZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbiNjb250YWluZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4uaW9uLWNvbG9yLXZpYnJhbnQge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICM2NjJkNzI7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IDEwMiwgNDUsIDExNDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHJnYigxMzksIDAsIDIxOSk7XG4gICAgLS1pb24tY29sb3ItdGludDogI2FiMWFmZjtcbn1cblxuXG5pb24taW5wdXR7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC0tcGFkZGluZzogNXB4O1xuICAgIFxufVxuXG5pbnB1dHtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbiIsIioge1xuICBmb250LWZhbWlseTogbGF0bztcbn1cblxuLmJnLWNsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxOTRkZWcsXG4gICAgICAjNjYyZDcyIDIzLjMlLFxuICAgICAgIzQ0YTVjNiAxMDAlXG4gICkgIWltcG9ydGFudDtcbn1cblxuLmltZy1jbGFzcyB7XG4gIGhlaWdodDogNDAlO1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDQwJTtcbn1cblxuI3JvdW5kZWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5pb24tY29sb3ItdmlicmFudCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICM2NjJkNzI7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiAxMDIsIDQ1LCAxMTQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiByZ2IoMTM5LCAwLCAyMTkpO1xuICAtLWlvbi1jb2xvci10aW50OiAjYWIxYWZmO1xufVxuXG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLS1wYWRkaW5nOiA1cHg7XG59XG5cbmlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/startpages/page1/page1.page.ts":
  /*!************************************************!*\
    !*** ./src/app/startpages/page1/page1.page.ts ***!
    \************************************************/

  /*! exports provided: Page1Page */

  /***/
  function srcAppStartpagesPage1Page1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1Page", function () {
      return Page1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    let Page1Page = class Page1Page {
      constructor(router, nativeStorage, platform, storage) {
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.platform = platform;
        this.storage = storage;
        this.nameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])
        });
        this.userInfo = {
          nickname: "Peyi",
          agreed: false,
          mentOptions: {
            autism: {
              selected: false,
              style: null
            },
            adhd: {
              selected: false,
              style: null
            },
            ocd: {
              selected: false,
              style: null
            },
            depression: {
              selected: false,
              style: null
            },
            bipolar: {
              selected: false,
              style: null
            },
            ptsd: {
              selected: false,
              style: null
            },
            selfharm: {
              selected: false,
              style: null
            },
            schizo: {
              selected: false,
              style: null
            },
            eatingd: {
              selected: false,
              style: null
            },
            anxiety: {
              selected: false,
              style: null
            }
          }
        };
      }

      ngOnInit() {
        this.storage.clear();
      }

      next() {
        let specifiedName = this.nameForm.get('name').value;

        if (this.platform.is("android")) {
          this.nativeStorage.setItem("userInfo", this.userInfo);
        } else {
          this.storage.set("userInfo", this.userInfo); // localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
          // alert(localStorage.getItem("userInfo"));
        }

        if (specifiedName.includes(" ")) {
          let nameArray = specifiedName.split(" ");
          let name = lodash__WEBPACK_IMPORTED_MODULE_4__["upperCase"](nameArray[0]);
          this.router.navigateByUrl('page2/' + name);
        } else {
          this.userInfo.nickname = this.nameForm.get('name').value;
          this.router.navigateByUrl('page2/' + lodash__WEBPACK_IMPORTED_MODULE_4__["upperCase"](specifiedName));
        }
      }

    };

    Page1Page.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
    }, {
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
    }];

    Page1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/startpages/page1/page1.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page1.page.scss */
      "./src/app/startpages/page1/page1.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])], Page1Page);
    /***/
  }
}]);
//# sourceMappingURL=startpages-page1-page1-module-es5.js.map