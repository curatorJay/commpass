function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"home\">\n            <ion-icon name='home'></ion-icon>\n            <ion-label class=\"tab-title\">Home</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"activity\">\n            <ion-icon src=\"./assets/sample-icons/tabs/line-chart.svg\"></ion-icon>\n            <ion-label class=\"tab-title\">Activity</ion-label>\n        </ion-tab-button>\n        <!-- <ion-tab-button tab=\"history\" *ngIf='role !== \"security\"'>\n            <ion-icon name='time'></ion-icon>\n            <ion-label class=\"tab-title\">History</ion-label>\n        </ion-tab-button> -->\n        <ion-tab-button tab=\"emergency\">\n            <ion-icon src=\"./assets/sample-icons/tabs/bandage.svg\"></ion-icon>\n            <ion-label class=\"tab-title\">Emergency</ion-label>\n        </ion-tab-button>\n        <!-- <ion-tab-button tab=\"carpooling/home\" *ngIf='role !== \"security\"'>\n            <ion-icon name='car'></ion-icon>\n            <ion-label class=\"tab-title\">Carpooling</ion-label>\n        </ion-tab-button> -->\n        <ion-tab-button tab=\"user\">\n            <ion-icon src=\"./assets/sample-icons/tabs/profile.svg\"></ion-icon>\n            <ion-label class=\"tab-title\">Profile</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/tabs/styles/tabs.page.scss":
  /*!********************************************!*\
    !*** ./src/app/tabs/styles/tabs.page.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsStylesTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-tab-button {\n  --color: var(--ion-color-medium-shade);\n  --color-selected: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC90YWJzL3N0eWxlcy90YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy9zdHlsZXMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC90YWJzL3N0eWxlcy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuIiwiaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs.router.module */
    "./src/app/tabs/tabs.router.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
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


    var _hoa_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../hoa-store.service */
    "./src/app/hoa-store.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var TabsPage =
    /*#__PURE__*/
    function () {
      function TabsPage(menu, store) {
        _classCallCheck(this, TabsPage);

        this.menu = menu;
        this.store = store;
        this.role = this.store.getItem('hoa-role');
      }

      _createClass(TabsPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menu.enable(true);
        }
      }]);

      return TabsPage;
    }();

    TabsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_2__["HoaStoreService"]
      }];
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
      providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_2__["HoaStoreService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/tabs.page.scss */
      "./src/app/tabs/styles/tabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _hoa_store_service__WEBPACK_IMPORTED_MODULE_2__["HoaStoreService"]])], TabsPage);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.router.module.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/tabs.router.module.ts ***!
    \********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
      children: [{
        path: 'categories',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | categories-categories-module */
            [__webpack_require__.e("common"), __webpack_require__.e("categories-categories-module")]).then(__webpack_require__.bind(null,
            /*! ../categories/categories.module */
            "./src/app/categories/categories.module.ts")).then(function (m) {
              return m.CategoriesPageModule;
            });
          }
        }, {
          path: 'fashion',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | fashion-listing-fashion-listing-module */
            [__webpack_require__.e("common"), __webpack_require__.e("fashion-listing-fashion-listing-module")]).then(__webpack_require__.bind(null,
            /*! ../fashion/listing/fashion-listing.module */
            "./src/app/fashion/listing/fashion-listing.module.ts")).then(function (m) {
              return m.FashionListingPageModule;
            });
          }
        }, {
          path: 'fashion/:productId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | fashion-details-fashion-details-module */
            [__webpack_require__.e("common"), __webpack_require__.e("fashion-details-fashion-details-module")]).then(__webpack_require__.bind(null,
            /*! ../fashion/details/fashion-details.module */
            "./src/app/fashion/details/fashion-details.module.ts")).then(function (m) {
              return m.FashionDetailsPageModule;
            });
          }
        }, {
          path: 'food',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | food-listing-food-listing-module */
            [__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("food-listing-food-listing-module")]).then(__webpack_require__.bind(null,
            /*! ../food/listing/food-listing.module */
            "./src/app/food/listing/food-listing.module.ts")).then(function (m) {
              return m.FoodListingPageModule;
            });
          }
        }, {
          path: 'food/:productId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | food-details-food-details-module */
            [__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("food-details-food-details-module")]).then(__webpack_require__.bind(null,
            /*! ../food/details/food-details.module */
            "./src/app/food/details/food-details.module.ts")).then(function (m) {
              return m.FoodDetailsPageModule;
            });
          }
        }, {
          path: 'travel',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | travel-listing-travel-listing-module */
            [__webpack_require__.e("common"), __webpack_require__.e("travel-listing-travel-listing-module")]).then(__webpack_require__.bind(null,
            /*! ../travel/listing/travel-listing.module */
            "./src/app/travel/listing/travel-listing.module.ts")).then(function (m) {
              return m.TravelListingPageModule;
            });
          }
        }, {
          path: 'travel/:productId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | travel-details-travel-details-module */
            [__webpack_require__.e("common"), __webpack_require__.e("travel-details-travel-details-module")]).then(__webpack_require__.bind(null,
            /*! ../travel/details/travel-details.module */
            "./src/app/travel/details/travel-details.module.ts")).then(function (m) {
              return m.TravelDetailsPageModule;
            });
          }
        }, {
          path: 'deals',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | deals-listing-deals-listing-module */
            [__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("deals-listing-deals-listing-module")]).then(__webpack_require__.bind(null,
            /*! ../deals/listing/deals-listing.module */
            "./src/app/deals/listing/deals-listing.module.ts")).then(function (m) {
              return m.DealsListingPageModule;
            });
          }
        }, {
          path: 'deals/:productId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | deals-details-deals-details-module */
            [__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("deals-details-deals-details-module")]).then(__webpack_require__.bind(null,
            /*! ../deals/details/deals-details.module */
            "./src/app/deals/details/deals-details.module.ts")).then(function (m) {
              return m.DealsDetailsPageModule;
            });
          }
        }, {
          path: 'real-estate',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | real-estate-listing-real-estate-listing-module */
            [__webpack_require__.e("common"), __webpack_require__.e("real-estate-listing-real-estate-listing-module")]).then(__webpack_require__.bind(null,
            /*! ../real-estate/listing/real-estate-listing.module */
            "./src/app/real-estate/listing/real-estate-listing.module.ts")).then(function (m) {
              return m.RealEstateListingPageModule;
            });
          }
        }, {
          path: 'real-estate/:productId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | real-estate-details-real-estate-details-module */
            [__webpack_require__.e("common"), __webpack_require__.e("real-estate-details-real-estate-details-module")]).then(__webpack_require__.bind(null,
            /*! ../real-estate/details/real-estate-details.module */
            "./src/app/real-estate/details/real-estate-details.module.ts")).then(function (m) {
              return m.RealEstateDetailsPageModule;
            });
          }
        }]
      }, {
        path: 'user',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-profile-user-profile-module */
            [__webpack_require__.e("common"), __webpack_require__.e("user-profile-user-profile-module")]).then(__webpack_require__.bind(null,
            /*! ../user/profile/user-profile.module */
            "./src/app/user/profile/user-profile.module.ts")).then(function (m) {
              return m.UserProfilePageModule;
            });
          }
        }, {
          path: 'friends',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-friends-user-friends-module */
            [__webpack_require__.e("common"), __webpack_require__.e("user-friends-user-friends-module")]).then(__webpack_require__.bind(null,
            /*! ../user/friends/user-friends.module */
            "./src/app/user/friends/user-friends.module.ts")).then(function (m) {
              return m.UserFriendsPageModule;
            });
          }
        }]
      }, {
        path: 'notifications',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | notifications-notifications-module */
            "notifications-notifications-module").then(__webpack_require__.bind(null,
            /*! ../notifications/notifications.module */
            "./src/app/notifications/notifications.module.ts")).then(function (m) {
              return m.NotificationsPageModule;
            });
          }
        }]
      }, {
        path: 'activity',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | activity-activity-module */
            [__webpack_require__.e("common"), __webpack_require__.e("activity-activity-module")]).then(__webpack_require__.bind(null,
            /*! ../activity/activity.module */
            "./src/app/activity/activity.module.ts")).then(function (m) {
              return m.ActivityPageModule;
            });
          }
        }]
      }, {
        path: 'history',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | history-history-module */
            [__webpack_require__.e("common"), __webpack_require__.e("history-history-module")]).then(__webpack_require__.bind(null,
            /*! ../history/history.module */
            "./src/app/history/history.module.ts")).then(function (m) {
              return m.HistoryPageModule;
            });
          }
        }]
      }, {
        path: 'emergency',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | emergency-emergency-module */
            [__webpack_require__.e("common"), __webpack_require__.e("emergency-emergency-module")]).then(__webpack_require__.bind(null,
            /*! ../emergency/emergency.module */
            "./src/app/emergency/emergency.module.ts")).then(function (m) {
              return m.EmergencyPageModule;
            });
          }
        }]
      }, {
        path: 'carpooling/home',
        // children: [
        //       path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | carpooling-home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("carpooling-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ../carpooling/home/home.module */
          "./src/app/carpooling/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        } // ]

      }, {
        path: 'home',
        // children: [
        //       path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | landing-landing-module */
          "landing-landing-module").then(__webpack_require__.bind(null,
          /*! ../landing/landing.module */
          "./src/app/landing/landing.module.ts")).then(function (m) {
            return m.LandingPageModule;
          });
        } // ]

      }]
    }, // /app/ redirect
    {
      path: '',
      redirectTo: 'app/activity',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    })], TabsPageRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map