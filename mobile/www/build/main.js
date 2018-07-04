webpackJsonp([0],{

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_contract_search_contract__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_profile_edit_profile__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_logout_logout__ = __webpack_require__(822);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // platform: any;
        // private resetBackButton: any;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.pages = [
            { title: 'Contracten', component: __WEBPACK_IMPORTED_MODULE_5__pages_search_contract_search_contract__["a" /* SearchContractPage */] },
            { title: 'Edit Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_edit_profile_edit_profile__["a" /* EditProfilePage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_logout_logout__["a" /* LogoutPage */] },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    // ionViewDidEnter() {
    //   if (this.resetBackButton) {
    //     this.resetBackButton();
    //   }
    //   this.resetBackButton = this.platform.registerBackButtonAction(() => {
    //     (navigator as any).Backbutton.canGoBack();
    //   });
    // }
    // ionViewWillLeave() {
    //   if (this.resetBackButton) {
    //     this.resetBackButton();
    //     this.resetBackButton = null;
    //   }
    // }
    MyApp.prototype.openPage = function (page) {
        // this.nav.setRoot(page.component);
        console.log(page.component);
        if (page.component == __WEBPACK_IMPORTED_MODULE_7__pages_logout_logout__["a" /* LogoutPage */]) {
            this.nav.pop(page.component);
        }
        else if (page.component == __WEBPACK_IMPORTED_MODULE_5__pages_search_contract_search_contract__["a" /* SearchContractPage */]) {
        }
        else {
            this.nav.push(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-menu [content]=\"content\" [swipeEnabled]=\"false\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checklists; });
var Checklists = /** @class */ (function () {
    function Checklists() {
    }
    return Checklists;
}());

//# sourceMappingURL=checklists.js.map

/***/ }),

/***/ 1197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        // used for an example of ngFor and navigation
        debugger;
        this.pages = [
            { title: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */] }
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        debugger;
        console.log('Hello MenuPage Page');
    };
    MenuPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({

            selector: 'page-menu',template:/*ion-inline-start:"/Users/ifour/Desktop/projects/Accentis/Accentis/mobile/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'

        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_contract_search_contract__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_checklists__ = __webpack_require__(1118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menu, alertCtrl) {
        // debugger;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        console.log("angular version :::", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* VERSION */].full);
        this.ary = [];
        this.stringAry = [];
        var a = new __WEBPACK_IMPORTED_MODULE_3__models_checklists__["a" /* Checklists */]();
        a.Member = "abc";
        a.ItemCount = 10;
        a.FunctionName = "addition";
        a.Caption = "ionic";
        this.ary.push(a);
        var fullName = "Bob Bobbington";
        var age = 37;
        var sentence = "Hello, my name is " + fullName + ".\n\n" +
            "I'll be " + (age + 1) + " years old next month.";
        this.stringAry = ["1", "2", "3"];
        console.log("ary count ::::", this.stringAry.count);
        for (var _i = 0, _a = this.stringAry; _i < _a.length; _i++) {
            var e = _a[_i];
            console.log("element is :::::", e);
        }
        for (var i = 0; i < 10; i++) {
            console.log("i value is ::::", i);
            var a_1 = new __WEBPACK_IMPORTED_MODULE_3__models_checklists__["a" /* Checklists */]();
            a_1.Member = "abc" + i;
            a_1.ItemCount = 10 + i;
            a_1.FunctionName = "addition" + i;
            a_1.Caption = "ionic" + i;
            this.ary.push(a_1);
        }
    }
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_contract_search_contract__["a" /* SearchContractPage */]);
    };
    LoginPage.prototype.forgotPass = function () {
        var prompt = this.alertCtrl.create({
            title: 'Wachtwoord vergeten',
            message: "",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'E-mailadres',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Sluiten',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Wachtwoord reseten',
                    handler: function (data) {
                        console.log('reset password clicked ::;', data.email);
                    }
                }
            ]
        });
        prompt.present();
    };
    LoginPage.prototype.forgotPass1 = function () {
        debugger;
        // this.navCtrl.setRoot('MenuPage');
        var alert = this.alertCtrl.create();
        alert.setTitle('Confirm!');
        alert.setMessage('Message <strong>text</strong>!!!');
        alert.addButton({
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: function () {
                console.log('Confirm Cancel');
            }
        });
        alert.addButton({
            text: 'Okay',
            handler: function () {
                console.log('Confirm Ok');
            }
        });
        alert.present(alert).then(function () {
        });
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        console.log("called");
        this.menu.swipeEnable(false);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="toolbar-background text-alignment">\n\n      Accentis\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="animated fadeIn login auth-page">\n\n  <div class="login-content">\n\n    <div padding-horizontal text-center class="animated fadeInDown">\n\n      <!-- <div class="logo"></div> -->\n\n      <h2 ion-text class="text-dark">\n\n        <strong>ONLINE BEHEER VAN DAKEN</strong>\n\n      </h2>\n\n    </div>\n\n\n\n    <form class="list-form">\n\n      <ion-item>\n\n        <ion-label floating class="theme-text-color">\n\n          <ion-icon name="mail" item-start class="theme-text-color"></ion-icon>\n\n          E-mailadres\n\n        </ion-label>\n\n        <ion-input type="email" class="theme-text-color"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating class="theme-text-color">\n\n          <ion-icon name="lock" item-start class="theme-text-color"></ion-icon>\n\n          Wachtwoord\n\n        </ion-label>\n\n        <ion-input type="password" class="theme-text-color"></ion-input>\n\n      </ion-item>\n\n    </form>\n\n\n\n\n\n    <p text-left ion-text tappable (click)="forgotPass()">Wachtwoord vergeten?</p>\n\n\n\n    <button ion-button icon-start block tappable (click)="login()" class="theme-BG-color">\n\n      <ion-icon name="log-in"></ion-icon>\n\n      <strong>Inloggen</strong>\n\n    </button>\n\n  </div>\n\n\n\n  <!-- <ion-card>\n\n          <ion-list>\n\n            <h1 *ngFor="let item of stringAry"> {{item}} </h1>\n\n          </ion-list>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n          <ion-list *ngFor="let name of ary">\n\n            <h1> {{name.Member + name.ItemCount}} </h1>\n\n            <h2> {{name.Caption}} </h2>\n\n          </ion-list>\n\n        </ion-card> -->\n\n</ion-content>\n\n\n\n<!-- <kendo-grid [data]="gridData" [pageSize]="state.take" [skip]="state.skip" [sort]="state.sort" [filter]="state.filter" [sortable]="true"\n\n  [pageable]="true" [filterable]="true" (dataStateChange)="dataStateChange($event)">\n\n  <kendo-grid-column field="ProductID" title="ID" width="40" [filterable]="false">\n\n  </kendo-grid-column>\n\n  <kendo-grid-column field="ProductName" title="Product Name">\n\n  </kendo-grid-column>\n\n  <kendo-grid-column field="FirstOrderedOn" title="First Ordered On" width="240" filter="date" format="{0:d}">\n\n  </kendo-grid-column>\n\n  <kendo-grid-column field="UnitPrice" title="Unit Price" width="180" filter="numeric" format="{0:c}">\n\n  </kendo-grid-column>\n\n  <kendo-grid-column field="Discontinued" width="120" filter="boolean">\n\n    <ng-template kendoGridCellTemplate let-dataItem>\n\n      <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>\n\n    </ng-template>\n\n  </kendo-grid-column>\n\n</kendo-grid> -->'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchContractPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inspection_inspection__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { process, State } from '@progress/kendo-data-query';
// import { sampleProducts } from '../../models/products';
// import {
//   GridComponent,
//   GridDataResult,
//   DataStateChangeEvent
// } from '@progress/kendo-angular-grid';
var SearchContractPage = /** @class */ (function () {
    function SearchContractPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
    }
    // ionViewDidEnter() {
    //   console.log("called");
    //   this.menu.swipeEnable(false);
    // }
    SearchContractPage.prototype.inspectionDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inspection_inspection__["a" /* InspectionPage */]);
    };
    SearchContractPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-contract',template:/*ion-inline-start:"/Users/ifour/Desktop/projects/Accentis/Accentis/mobile/src/pages/search-contract/search-contract.html"*/'<ion-header>\n    <!-- <ion-navbar>\n      <ion-title class="toolbar-background text-alignment">\n        OVERZICHT CONTRACTEN\n      </ion-title>\n      <p text-right class="text-white"><strong>Inspecteur : </strong>Ja ap de Groot</p>\n    </ion-navbar> -->\n\n    <ion-toolbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu" class="custom-icon"></ion-icon>\n        </button>\n        <ion-title class="toolbar-background text-alignment">\n            OVERZICHT CONTRACTEN\n        </ion-title>\n        <p text-right class="text-white">\n            <strong>Inspecteur : </strong>Ja ap de Groot</p>\n    </ion-toolbar>\n\n</ion-header>\n<ion-content>\n    <ion-label class="lbl-background">zoek op contract nr,adres, plaats</ion-label>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n        <ion-item *ngFor="let item of items">\n            {{ item }}\n        </ion-item>\n    </ion-list>\n\n    <ion-card (click)="inspectionDetail()">\n        <ion-list>\n            <ion-item-sliding #item>\n                <ion-item>\n                    <ion-label>\n                        <strong>ordernummer : </strong> AD02 - 348\n                        <br/>\n                        <br/>AD02 - 348</ion-label>\n                    <!-- <ion-icon name="arrow-dropright" item-right></ion-icon> -->\n                </ion-item>\n                <ion-item-options side="left">\n                        <button ion-button (click)="favorite(item)">Favorite</button>\n                        <button ion-button color="danger" (click)="share(item)">Share</button>\n                </ion-item-options>\n                <!-- <ion-item-options side="right">\n                        <button ion-button (click)="unread(item)">Unread</button>\n                </ion-item-options> -->\n            </ion-item-sliding>\n        </ion-list>\n    </ion-card>\n\n    <ion-card (click)="inspectionDetail()">\n        <ion-list>\n            <ion-item>\n                <ion-label>\n                    <strong>ordernummer : </strong> AD02 - 349\n                    <br/>\n                    <br/>AD02 - 348</ion-label>\n                <!-- <ion-icon name="arrow-dropright" item-right></ion-icon> -->\n            </ion-item>\n        </ion-list>\n    </ion-card>\n    <ion-card (click)="inspectionDetail()">\n        <ion-list>\n            <ion-item>\n                <ion-label>\n                    <strong>ordernummer : </strong> AD02 - 350\n                    <br/>\n                    <br/>AD02 - 348</ion-label>\n                <!-- <ion-icon name="arrow-dropright" item-right></ion-icon> -->\n            </ion-item>\n        </ion-list>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/ifour/Desktop/projects/Accentis/Accentis/mobile/src/pages/search-contract/search-contract.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */]])
    ], SearchContractPage);
    return SearchContractPage;
}());

//# sourceMappingURL=search-contract.js.map

/***/ }),

/***/ 440:
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
webpackEmptyAsyncContext.id = 440;

/***/ }),

/***/ 482:
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
webpackEmptyAsyncContext.id = 482;

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inspection_detail_inspection_detail__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inspection_add_inspection_add__ = __webpack_require__(820);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InspectionPage = /** @class */ (function () {
    function InspectionPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        // debugger;
        this.inspectorName = 'kalupru';
        this.year = '01-0214';
        this.msg = 'Inspecteur : ' + this.inspectorName + 'Volgnummer : ' + this.year;
        this.finalInspector = 'Inspecteur : ' + this.inspectorName + '\n';
        this.finalYear = 'Volgnummer : ' + this.year;
        console.log(this.finalInspector, this.finalYear);
    }
    InspectionPage.prototype.addInspection = function () {
        console.log("inspection add");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inspection_add_inspection_add__["a" /* InspectionAddPage */]);
    };
    InspectionPage.prototype.addInspection1 = function () {
        var prompt = this.alertCtrl.create({
            title: 'Inspectie toevoeggen',
            message: "Inspecteur - Piet van Puffelen",
            inputs: [
                {
                    name: 'Volgnummer',
                    placeholder: 'Volgnummer'
                },
                {
                    name: 'Datum',
                    placeholder: 'Datum',
                    type: 'date'
                }
            ],
            buttons: [
                {
                    text: 'Sluiten',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Opslaan',
                    handler: function (data) {
                        console.log('Saved clicked', data.Volgnummer, data.Datum);
                        if (data.Volgnummer == "") {
                            console.log("first field empty");
                        }
                        if (data.Datum == "") {
                            console.log("second field empty");
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    InspectionPage.prototype.carryoutInspection = function () {
        var alert = this.alertCtrl.create({
            title: 'Inspectie uitvoeren',
            subTitle: 'Inspecteur : Piet van Puffelen <br/> Volgnummer : 01 - 2015',
            // login inspector name
            message: 'How wordt de inspectie uitgevoerd?',
            buttons: [
                {
                    text: 'NEN2767',
                    handler: function (data) {
                        console.log('nen2767 clicked');
                    }
                },
                {
                    text: 'Basis inspectiemethodiek',
                    handler: function (data) {
                        console.log('basis clicked');
                    }
                },
                {
                    text: 'Sluiten',
                    handler: function (data) {
                        console.log('close clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    InspectionPage.prototype.inspectionDetail = function () {
        console.log("inspection detail");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inspection_detail_inspection_detail__["a" /* InspectionDetailPage */]);
    };
    InspectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inspection',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\inspection\inspection.html"*/'<ion-header>\n\n  <ion-navbar class="left-padding-10">\n\n    <ion-title class="toolbar-background text-alignment">\n\n      OVERZICHT INSPECTIES\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-label class="lbl-background">Maak inspectie of selecteer ingeplande inspectie</ion-label>\n\n\n\n  <!-- <ion-row>\n\n    <ion-col width-25 class="theme-BG-color">\n\n      <ion-label>Test</ion-label>\n\n    </ion-col>\n\n    <ion-col width-25 style="background-color: rgb(10, 50, 57)">\n\n      <ion-label>Test123</ion-label>\n\n    </ion-col>\n\n    <ion-col width-25 style="background-color: rgb(180, 150, 157)">\n\n      <ion-label>Test123456</ion-label>\n\n    </ion-col>\n\n    <ion-col width-25 style="background-color: rgb(134, 87, 70)">\n\n      <ion-label>Test123456789</ion-label>\n\n    </ion-col>\n\n  </ion-row> -->\n\n\n\n  <!-- inspection address -->\n\n  <ion-row>\n\n    <ion-col width-75>\n\n      <ion-label class="left-padding-5">AD02-348</ion-label>\n\n    </ion-col>\n\n    <ion-col width-25>\n\n      <button ion-button clear (click)="addInspection()">\n\n        INSPECTIE\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-card (click)="inspectionDetail()">\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col width-50>\n\n          <ion-label>\n\n            <strong>01 2015</strong>\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n          <button ion-button color="primary">ingeplande</button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col width-50>\n\n          <ion-label>Inspecteur : person 1</ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n          <ion-label>01-01-2015</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="inspectionDetail()">\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col width-50>\n\n          <ion-label>\n\n            <strong>01 2014</strong>\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n          <button ion-button color="secondary">ingeplande</button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col width-50>\n\n          <ion-label>Inspecteur : person 2</ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n          <ion-label>01-01-2014</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <!-- <ion-list>\n\n      <ion-item detail-push>\n\n        <p>Terms Of Use</p>\n\n      </ion-item>\n\n  </ion-list> -->\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\inspection\inspection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], InspectionPage);
    return InspectionPage;
}());

//# sourceMappingURL=inspection.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inspection_edit_photo_inspection_edit_photo__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roof_add_edit_roof_add_edit__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roof_detail_roof_detail__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InspectionDetailPage = /** @class */ (function () {
    function InspectionDetailPage(navCtrl, actionSheetCtrl, camera) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.ary = [];
        for (var i = 1; i < 10; i++) {
            this.ary.push(i);
        }
    }
    InspectionDetailPage.prototype.clickCardNumber = function (i) {
        console.log("calling change data ::::", i);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inspection_edit_photo_inspection_edit_photo__["a" /* InspectionEditPhotoPage */]);
    };
    InspectionDetailPage.prototype.addPhoto = function () {
        var _this = this;
        console.log("calling add photo ::::");
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Kies foto',
            buttons: [
                {
                    text: 'Maak foto',
                    role: 'destructive',
                    handler: function () {
                        console.log('take photo clicked');
                        var options = {
                            quality: 100,
                            sourceType: _this.camera.PictureSourceType.CAMERA,
                            saveToPhotoAlbum: true,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            mediaType: _this.camera.MediaType.VIDEO
                        };
                        _this.camera.getPicture(options)
                            .then(function (imageData) {
                            console.log("camera imagedata ::::");
                        }).then(function (path) {
                            console.log("camera imagedata path ::::");
                        });
                    }
                },
                {
                    text: 'Fotobibliotheek',
                    role: 'destructive',
                    handler: function () {
                        console.log('photo library clicked');
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            sourceType: _this.camera.PictureSourceType.SAVEDPHOTOALBUM
                        };
                        _this.camera.getPicture(options)
                            .then(function (imageData) {
                            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
                            console.log("1234560 :::::", _this.base64Image);
                        }).then(function (path) {
                            console.log("path is :::::", path);
                        });
                        /*
                        this.camera.getPicture(options).then((imageData) => {
                            console.log(123);
                        // imageData is either a base64 encoded string or a file URI
                        // If it's base64:
                        this.base64Image  = 'data:image/jpeg;base64,' + imageData;
                        // this.photos.push(this.base64Image);
                        // this.photos.reverse();
                       }, (err) => {
                         // Handle error
                       })*/
                    }
                },
                {
                    text: 'Sluiten',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    InspectionDetailPage.prototype.addRoof = function () {
        console.log("calling add roof ::::");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__roof_add_edit_roof_add_edit__["a" /* RoofAddEditPage */]);
    };
    InspectionDetailPage.prototype.roofDetail = function () {
        console.log("calling roof detail ::::");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__roof_detail_roof_detail__["a" /* RoofDetailPage */]);
    };
    InspectionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inspection_detail',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\inspection_detail\inspection_detail.html"*/'<ion-header>\n\n  <ion-navbar class="left-padding-10">\n\n    <ion-title class="toolbar-background text-alignment">\n\n      Inspection Detail\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-label class="lbl-background">Kies het dak dat u wilt inspecteren</ion-label>\n\n\n\n  <ion-row>\n\n    <ion-col width-75>\n\n      <ion-label class="left-padding-5">\n\n        <strong>Gebouw</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col width-25>\n\n      <button ion-button clear (click)="addPhoto()">\n\n        Voeg foto toe\n\n      </button>\n\n      <!-- <img [src]="base64Image" />  -->\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-label class="left-padding-10">Hermanplatsoen 2-10 1344 AL Vlaardingen</ion-label>\n\n  <ion-label class="left-padding-10">Flatgebouw</ion-label>\n\n\n\n  <ion-scroll scrollX="true" style="width:100%; height:300px">\n\n    <ion-row nowrap>\n\n      <div *ngFor="let i of ary">\n\n        <!-- <ion-chip (click)="changeData(i)" style="height:100px">\n\n            <ion-label> {{i}} </ion-label>\n\n          </ion-chip> -->\n\n        <ion-card style="width:300px; height:300px;" (click)="clickCardNumber(i)"> {{i}}\n\n          <img src="assets/imgs/logo.png">\n\n        </ion-card>\n\n      </div>\n\n    </ion-row>\n\n  </ion-scroll>\n\n\n\n  <ion-label class="single-line"></ion-label>\n\n\n\n  <ion-row>\n\n    <ion-col width-75 class="left-padding-10">\n\n      <ion-label class="font-30">Daken</ion-label>\n\n    </ion-col>\n\n    <ion-col width-25>\n\n      <button ion-button clear (click)="addRoof()">\n\n        DAK\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-card (click)="roofDetail()">\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col width-50>\n\n          <ion-label>\n\n            <strong>01 - Hoge dak</strong>\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n          <ion-label>Vleugel A</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col width-50>\n\n          <ion-label>\n\n            <strong>Oriëntatie : </strong> tekst</ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n          <ion-label>\n\n            <strong>Hoogte : </strong> 21m</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\inspection_detail\inspection_detail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]])
    ], InspectionDetailPage);
    return InspectionDetailPage;
}());

//# sourceMappingURL=inspection_detail.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectionEditPhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imageZoom_imageZoom__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InspectionEditPhotoPage = /** @class */ (function () {
    function InspectionEditPhotoPage(navCtrl, actionSheetCtrl, camera) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];
    }
    InspectionEditPhotoPage.prototype.changePhoto = function () {
        var _this = this;
        console.log("change photo called");
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Kies foto',
            buttons: [
                {
                    text: 'Maak foto',
                    role: 'destructive',
                    handler: function () {
                        console.log('take photo clicked');
                        var options = {
                            quality: 100,
                            sourceType: _this.camera.PictureSourceType.CAMERA,
                            saveToPhotoAlbum: true,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            mediaType: _this.camera.MediaType.VIDEO
                        };
                        _this.camera.getPicture(options)
                            .then(function (imageData) {
                            console.log("camera imagedata ::::");
                        }).then(function (path) {
                            console.log("camera imagedata path ::::");
                        });
                    }
                },
                {
                    text: 'Fotobibliotheek',
                    role: 'destructive',
                    handler: function () {
                        console.log('photo library clicked');
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            sourceType: _this.camera.PictureSourceType.SAVEDPHOTOALBUM
                        };
                        _this.camera.getPicture(options)
                            .then(function (imageData) {
                            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
                            // console.log("1234560 :::::",this.base64Image);
                        }).then(function (path) {
                            console.log("path is :::::", path);
                        });
                        /*
                        this.camera.getPicture(options).then((imageData) => {
                            console.log(123);
                        // imageData is either a base64 encoded string or a file URI
                        // If it's base64:
                        this.base64Image  = 'data:image/jpeg;base64,' + imageData;
                        // this.photos.push(this.base64Image);
                        // this.photos.reverse();
                       }, (err) => {
                         // Handle error
                       })*/
                    }
                },
                {
                    text: 'Sluiten',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    InspectionEditPhotoPage.prototype.removePhoto = function () {
        console.log("remove photo called");
    };
    InspectionEditPhotoPage.prototype.save = function () {
        console.log("save called");
    };
    InspectionEditPhotoPage.prototype.imageZoominNextView = function () {
        console.log("imageZoominNextView called");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__imageZoom_imageZoom__["a" /* ImageZoomPage */]);
    };
    InspectionEditPhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inspection_edit_photo',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\inspection_edit_photo\inspection_edit_photo.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Inspection Edit Photo\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <button ion-button clear (click)="save()">\n\n                Opslaan\n\n            </button>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <button ion-button clear (click)="changePhoto()">\n\n                Foto Wijzigen\n\n            </button>\n\n            <button ion-button clear (click)="removePhoto()">\n\n                Verwijder foto\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="left-padding-10">\n\n        <strong>Gebouw</strong>\n\n    </ion-label>\n\n    <ion-label class="left-padding-10">Hermanplatsoen 2-10 1344 AL Vlaardingen</ion-label>\n\n    <ion-label class="left-padding-10">Flatgebouw</ion-label>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <!-- <ion-slides class="image-slider" loop="true" slidesPerView="2">\n\n        <ion-slide *ngFor="let img of images">\n\n            <ion-label> {{img}} </ion-label>\n\n            <img src="assets/imgs/{{img}}" class="thumb-img" imageViewer/>\n\n        </ion-slide>\n\n    </ion-slides> -->\n\n\n\n    <img [src]="base64Image" class="customImageCenter" (click)="imageZoominNextView()">\n\n    <!-- <img src="assets/imgs/3.jpeg" class="customImageCenter" alt=""> -->\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\inspection_edit_photo\inspection_edit_photo.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], InspectionEditPhotoPage);
    return InspectionEditPhotoPage;
}());

//# sourceMappingURL=inspection_edit_photo.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageZoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageZoomPage = /** @class */ (function () {
    function ImageZoomPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ImageZoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imageZoom',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\imageZoom\imageZoom.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Image Zoom\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <img [src]="base64Image" class="customImageCenter" alt="">\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\imageZoom\imageZoom.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], ImageZoomPage);
    return ImageZoomPage;
}());

//# sourceMappingURL=imageZoom.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoofAddEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoofAddEditPage = /** @class */ (function () {
    function RoofAddEditPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RoofAddEditPage.prototype.save = function () {
        debugger;
        console.log("save button click");
    };
    RoofAddEditPage.prototype.cancel = function () {
        debugger;
        console.log("cancel button click");
    };
    RoofAddEditPage.prototype.handleLogin = function () {
        debugger;
        //
        console.log("login");
    };
    RoofAddEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roof_add_edit',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\roof_add_edit\roof_add_edit.html"*/'<ion-header>\n\n  <ion-navbar class="left-padding-10">\n\n    <ion-title class="toolbar-background text-alignment">\n\n      Dak toevoegen\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form class="list-form">\n\n    <ion-item>\n\n      <ion-label floating class="theme-text-color">\n\n        Daknummer\n\n      </ion-label>\n\n      <ion-input type="number" class="theme-text-color" (keyup.enter)="handleLogin()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating class="theme-text-color">\n\n        Omschrijving\n\n      </ion-label>\n\n      <ion-input class="theme-text-color"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating class="theme-text-color">\n\n        Oppervlakte (m2)\n\n      </ion-label>\n\n      <ion-input type="number" class="theme-text-color"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating class="theme-text-color">\n\n        Verdieping\n\n      </ion-label>\n\n      <ion-input type="number" class="theme-text-color"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating class="theme-text-color">\n\n        Hoogte (m1)\n\n      </ion-label>\n\n      <ion-input type="number" class="theme-text-color"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating class="theme-text-color">\n\n        Orientatie\n\n      </ion-label>\n\n      <ion-input class="theme-text-color"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating class="theme-text-color">\n\n        Towing\n\n      </ion-label>\n\n      <ion-input class="theme-text-color"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating class="theme-text-color">\n\n        Toegang dak\n\n      </ion-label>\n\n      <ion-input class="theme-text-color"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating class="theme-text-color">\n\n        Sleutel nodig\n\n      </ion-label>\n\n      <ion-input class="theme-text-color"></ion-input>\n\n    </ion-item>\n\n\n\n    <br/>\n\n    <br/>\n\n    <br/>\n\n    <br/>\n\n    <br/>\n\n\n\n    <ion-row>\n\n      <ion-col width-50>\n\n        <button ion-button class="theme-BG-color" full (click)="save()">\n\n          Opslaan\n\n        </button>\n\n      </ion-col>\n\n      <ion-col width-50>\n\n        <button ion-button class="theme-BG-color" full (click)="cancel()">\n\n          Sluiten\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\roof_add_edit\roof_add_edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], RoofAddEditPage);
    return RoofAddEditPage;
}());

//# sourceMappingURL=roof_add_edit.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoofDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maintainance_advice_maintainance_advice__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roof_clean_roof_clean__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fileRecording_fileRecording__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_recording_MJOB_subtask_file_recording_MJOB_subtask__ = __webpack_require__(814);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoofDetailPage = /** @class */ (function () {
    function RoofDetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RoofDetailPage.prototype.editImage = function () {
        console.log("image edit");
    };
    RoofDetailPage.prototype.editRoof = function () {
        console.log("roof edit");
    };
    RoofDetailPage.prototype.adviesClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__maintainance_advice_maintainance_advice__["a" /* MaintainanceAdvicePage */]);
    };
    RoofDetailPage.prototype.roofClean = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__roof_clean_roof_clean__["a" /* RoofCleanPage */]);
    };
    RoofDetailPage.prototype.fileRecording = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fileRecording_fileRecording__["a" /* FileRecordingPage */]);
    };
    RoofDetailPage.prototype.fileRecordingMJOB = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__file_recording_MJOB_subtask_file_recording_MJOB_subtask__["a" /* FileRecordingMJOBSubtaskPage */]);
    };
    RoofDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roof_detail',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\roof_detail\roof_detail.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Roof Detail\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">AD02-348</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="font-30 left-padding-10">\n\n                <strong>Gebouw</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-icon name="create" item-start class="theme-text-color" style="zoom:3.0;" (click)="editRoof()"></ion-icon>\n\n            <!-- <ion-img width="20" height="20" src="assets/imgs/1.jpeg"></ion-img> -->\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-25>\n\n            <img style="width: 225px; height: 225px; padding-left: 10px" src="assets/imgs/logo.png">\n\n            <ion-icon name="create" item-start class="theme-text-color" style="zoom:3.0; padding-left: 20px;" (click)="editImage()"></ion-icon>\n\n        </ion-col>\n\n        <ion-col width-75>\n\n            <ion-label>\n\n                <strong>Daknummer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong> 01\n\n            </ion-label>\n\n            <ion-label>\n\n                <strong>Omschrijving &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong> Dak boven\n\n            </ion-label>\n\n            <ion-label>\n\n                <strong>Oppervlakte (m2) : </strong> 1000.00\n\n            </ion-label>\n\n            <ion-label>\n\n                <strong>Verdieping &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong> 7 </ion-label>\n\n            <ion-label>\n\n                <strong>Hoogte &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n                    : </strong> 17.0 </ion-label>\n\n            <ion-label>\n\n                <strong>Orientatie &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong> Vleugel </ion-label>\n\n            <ion-label>\n\n                <strong>Toegang dak &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong> Via dakpur </ion-label>\n\n            <ion-label>\n\n                <strong>Sleutel nodig &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong> Ja </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-label class="font-30 text-alignment">Uit te voeren werkzaamheden</ion-label>\n\n\n\n    <ion-card style="border: 1px solid blue !important;" (click)="adviesClick()">\n\n        <ion-list>\n\n            <ion-label class="left-padding-5">Inspectie dakvlak & Advies correctief onderhoud</ion-label>\n\n        </ion-list>\n\n    </ion-card>\n\n    <ion-card style="border: 1px solid blue !important;" (click)="roofClean()">\n\n        <ion-list>\n\n            <ion-label class="left-padding-5">Reinigen dakvlak</ion-label>\n\n        </ion-list>\n\n    </ion-card>\n\n    <ion-card style="border: 1px solid black !important;">\n\n        <ion-list>\n\n            <ion-label class="left-padding-5">Uitvoeren klenie reparaties</ion-label>\n\n        </ion-list>\n\n    </ion-card>\n\n    <ion-card style="border: 1px solid black !important;">\n\n        <ion-list>\n\n            <ion-label class="left-padding-5">Keuring & onderhoud dakveiligheid</ion-label>\n\n        </ion-list>\n\n    </ion-card>\n\n    <ion-card style="border: 1px solid black !important;">\n\n        <ion-list>\n\n            <ion-label class="left-padding-5">Daktuinonderhoud</ion-label>\n\n        </ion-list>\n\n    </ion-card>\n\n    <ion-card style="border: 1px solid blue !important;" (click)="fileRecording()">\n\n        <ion-list>\n\n            <ion-label class="left-padding-5">Bestandsopname</ion-label>\n\n        </ion-list>\n\n    </ion-card>\n\n    <ion-card style="border: 1px solid blue !important;" (click)="fileRecordingMJOB()">\n\n        <ion-list>\n\n            <ion-label class="left-padding-5">Bestandsopname MJOB</ion-label>\n\n        </ion-list>\n\n    </ion-card>\n\n    <ion-card style="border: 1px solid black !important;">\n\n        <ion-list>\n\n            <ion-label class="left-padding-5">RI&E en plan van aanpak dakveiligheid</ion-label>\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\roof_detail\roof_detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], RoofDetailPage);
    return RoofDetailPage;
}());

//# sourceMappingURL=roof_detail.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintainanceAdvicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inspecting_roof_surface_inspecting_roof_surface__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaintainanceAdvicePage = /** @class */ (function () {
    function MaintainanceAdvicePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    MaintainanceAdvicePage.prototype.adviceDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inspecting_roof_surface_inspecting_roof_surface__["a" /* InspectingRoofSurfacePage */]);
    };
    MaintainanceAdvicePage.prototype.statusClick = function () {
        console.log(123);
    };
    MaintainanceAdvicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maintainance_advice',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\maintainance_advice\maintainance_advice.html"*/'<ion-header>\n\n  <ion-navbar class="left-padding-10">\n\n    <ion-title class="toolbar-background text-alignment">\n\n      Inspect roof and corrective maintenance advice\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-label class="lbl-background">Address</ion-label>\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        <strong>Daknummer</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        {{documentNumber}}\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        <strong>Omschrijving</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        Dak boven woningen\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-label class="single-line"></ion-label>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-label class="font-30 text-alignment">Inspectie dakvlak & Advies correctief onderhoud</ion-label>\n\n  </ion-item>\n\n\n\n  <ion-card (click)="adviceDetail()" text-wrap>\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col width-50>\n\n          <img style="width: 100px; height: 100px;" src="assets/imgs/logo.png">\n\n        </ion-col>\n\n        <ion-col width-50>\n\n          <ion-label>\n\n            <strong>Inspectie algemeen</strong>\n\n          </ion-label>\n\n          <button ion-button style="background-color: rgb(255, 159, 0);">Nie t gestart</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-card text-wrap>\n\n    <ion-list>\n\n      <ion-row (click)="adviceDetail()">\n\n        <ion-col width-50>\n\n          <img style="width: 100px; height: 100px;" src="assets/imgs/logo.png">\n\n        </ion-col>\n\n        <ion-col width-50>\n\n          <ion-label>\n\n            <strong>Advies correctief onderhoud</strong>\n\n          </ion-label>\n\n          <button ion-button style="background-color: rgb(255, 159, 0);" (click)="statusClick()">Nie t gestart</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\maintainance_advice\maintainance_advice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], MaintainanceAdvicePage);
    return MaintainanceAdvicePage;
}());

//# sourceMappingURL=maintainance_advice.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectingRoofSurfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InspectingRoofSurfacePage = /** @class */ (function () {
    function InspectingRoofSurfacePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    InspectingRoofSurfacePage.prototype.updateWood = function () {
        console.log('wood new state:' + this.wood);
    };
    InspectingRoofSurfacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inspecting_roof_surface',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\inspecting_roof_surface\inspecting_roof_surface.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Inspecting roof surface / overall\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            {{documentNumber}}\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            Dak boven woningen\n\n            <button ion-button style="background-color: rgb(9, 255, 0); float: right;">Opslaan</button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-item text-wrap>\n\n        <ion-label>\n\n            <strong>Inspectie algemeen</strong>\n\n        </ion-label>\n\n    </ion-item>\n\n\n\n    <!-- first row -->\n\n    <ion-card center>\n\n        <ion-row>\n\n            <ion-label class="left-padding-5">Onderhoudsinvloeden</ion-label>\n\n        </ion-row>\n\n        <ion-row radio-group>\n\n            <ion-col width-30>\n\n                <ion-label>Begroeing rondom aanwezig</ion-label>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <ion-item>\n\n                    <ion-label>JA</ion-label>\n\n                    <ion-radio value="1"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <ion-item>\n\n                    <ion-label>NEE</ion-label>\n\n                    <ion-radio value="0"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row radio-group>\n\n            <ion-col width-30>\n\n                <ion-label>Wordt het regenwater goed afgevoerd</ion-label>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <ion-item>\n\n                    <ion-label>JA</ion-label>\n\n                    <ion-radio value="1"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <ion-item>\n\n                    <ion-label>NEE</ion-label>\n\n                    <ion-radio value="0"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <!-- second row -->\n\n    <ion-card center>\n\n        <ion-row>\n\n            <ion-label class="left-padding-5">Constructieve veiligheid</ion-label>\n\n        </ion-row>\n\n        <ion-row radio-group>\n\n            <ion-col width-25>\n\n                <ion-label>Type dakvloer</ion-label>\n\n            </ion-col>\n\n            <ion-col width-25>\n\n                <ion-item>\n\n                    <ion-label>HOUT</ion-label>\n\n                    <ion-checkbox [(ngModel)]="wood" (ionChange)="updateWood()"></ion-checkbox>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col width-25>\n\n                <ion-item>\n\n                    <ion-label>BETON</ion-label>\n\n                    <ion-checkbox [(ngModel)]="concrete"></ion-checkbox>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col width-25>\n\n                <ion-item>\n\n                    <ion-label>STAAL</ion-label>\n\n                    <ion-checkbox [(ngModel)]="steel"></ion-checkbox>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row radio-group>\n\n            <ion-col width-30>\n\n                <ion-label>Nood-overstorten aanwezig</ion-label>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <ion-item>\n\n                    <ion-label>JA</ion-label>\n\n                    <ion-radio value="1"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <ion-item>\n\n                    <ion-label>NEE</ion-label>\n\n                    <ion-radio value="0"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <!-- third row -->\n\n    <ion-card center>\n\n        <ion-row>\n\n            <ion-label class="left-padding-5">Bevestigin g dakbedekkingconstructie</ion-label>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col width-25>\n\n                <ion-label>Type</ion-label>\n\n            </ion-col>\n\n            <ion-col width-25>\n\n                <ion-item>\n\n                    <ion-label floating>Text1</ion-label>\n\n                    <ion-input type="text"></ion-input>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col width-25>\n\n                <ion-item>\n\n                    <ion-label floating>Text2</ion-label>\n\n                    <ion-input type="text"></ion-input>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col width-25>\n\n                <ion-item>\n\n                    <ion-label floating>Text3</ion-label>\n\n                    <ion-input type="text"></ion-input>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col width-30>\n\n                <ion-label>Is er twijfel over de stormvastheid</ion-label>\n\n            </ion-col>\n\n            <ion-col width-70>\n\n                <ion-item>\n\n                    <ion-label floating>Text Area</ion-label>\n\n                    <ion-input type="text"></ion-input>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <!-- fourth row -->\n\n    <ion-card center>\n\n        <ion-row>\n\n            <ion-label class="left-padding-5">Valbeveiliging</ion-label>\n\n        </ion-row>\n\n        <ion-row radio-group>\n\n            <ion-col width-30>\n\n                <ion-label>Is het dak veilig te bereiken</ion-label>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <ion-item>\n\n                    <ion-label>JA</ion-label>\n\n                    <ion-radio value="1"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <ion-item>\n\n                    <ion-label>NEE</ion-label>\n\n                    <ion-radio value="0"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row radio-group>\n\n            <ion-col width-30>\n\n                <ion-label>Is er valbeveiliging aanwezig</ion-label>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <ion-item>\n\n                    <ion-label>JA</ion-label>\n\n                    <ion-radio value="1"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col width-30>\n\n                <ion-item>\n\n                    <ion-label>NEE</ion-label>\n\n                    <ion-radio value="0"></ion-radio>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\inspecting_roof_surface\inspecting_roof_surface.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], InspectingRoofSurfacePage);
    return InspectingRoofSurfacePage;
}());

//# sourceMappingURL=inspecting_roof_surface.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoofCleanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoofCleanPage = /** @class */ (function () {
    function RoofCleanPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RoofCleanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roof_clean',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\roof_clean\roof_clean.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Roof Clean\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5 font-30">\n\n                Reinigen dakvlak\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <button ion-button style="background-color: rgb(9, 255, 0); float: right;">Opslaan</button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>1</ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>Dak boven woningen</ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-40>\n\n            <ion-row radio-group>\n\n                <ion-col width-30>\n\n                    <ion-label>\n\n                        <strong>Uitgevored</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-30>\n\n                    <ion-item>\n\n                        <ion-label>JA</ion-label>\n\n                        <ion-radio value="1"></ion-radio>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col width-30>\n\n                    <ion-item>\n\n                        <ion-label>NEE</ion-label>\n\n                        <ion-radio value="0"></ion-radio>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-100>\n\n            <ion-item>\n\n                <ion-label floating>Opmerkingen</ion-label>\n\n                <ion-input type="text"></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-label class="font-30 left-padding-10">\n\n        Foto’s\n\n    </ion-label>\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\roof_clean\roof_clean.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], RoofCleanPage);
    return RoofCleanPage;
}());

//# sourceMappingURL=roof_clean.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileRecordingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roof_drawing_roof_drawing__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inventroy_timbers_inventroy_timbers__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_roof_components_inventory_roof_components__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inspection_roof_components_inspection_roof_components__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FileRecordingPage = /** @class */ (function () {
    function FileRecordingPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    FileRecordingPage.prototype.roofDrawing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__roof_drawing_roof_drawing__["a" /* RoofDrawingPage */]);
    };
    FileRecordingPage.prototype.inventoryTimbers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inventroy_timbers_inventroy_timbers__["a" /* InventoryTimbersPage */]);
    };
    FileRecordingPage.prototype.inventoryRoofComponents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inventory_roof_components_inventory_roof_components__["a" /* InventoryRoofComponentsPage */]);
    };
    FileRecordingPage.prototype.inspectionRoofComponents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inspection_roof_components_inspection_roof_components__["a" /* InspectionRoofComponentsPage */]);
    };
    FileRecordingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fileRecording',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\fileRecording\fileRecording.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            File Recording\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-item text-wrap>\n\n        <ion-label class="font-30 text-alignment">File recording</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-card (click)="roofDrawing()" text-wrap>\n\n        <ion-list>\n\n            <ion-row>\n\n                <ion-col width-50>\n\n                    <img style="width: 100px; height: 100px;" src="assets/imgs/logo.png">\n\n                </ion-col>\n\n                <ion-col width-50>\n\n                    <ion-label>\n\n                        <strong>Making Daktekening</strong>\n\n                    </ion-label>\n\n                    <button ion-button style="background-color: rgb(255, 159, 0);">Nie t gestart</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="inventoryTimbers()" text-wrap>\n\n        <ion-list>\n\n            <ion-row>\n\n                <ion-col width-50>\n\n                    <img style="width: 100px; height: 100px;" src="assets/imgs/logo.png">\n\n                </ion-col>\n\n                <ion-col width-50>\n\n                    <ion-label>\n\n                        <strong>Inventory timbers</strong>\n\n                    </ion-label>\n\n                    <button ion-button style="background-color: rgb(255, 159, 0);">Nie t gestart</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="inventoryRoofComponents()" text-wrap>\n\n        <ion-list>\n\n            <ion-row>\n\n                <ion-col width-50>\n\n                    <img style="width: 100px; height: 100px;" src="assets/imgs/logo.png">\n\n                </ion-col>\n\n                <ion-col width-50>\n\n                    <ion-label>\n\n                        <strong>Inventory dakbouwdelen</strong>\n\n                    </ion-label>\n\n                    <button ion-button style="background-color: rgb(255, 159, 0);">Nie t gestart</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n            <ion-row>\n\n                <ion-col width-50>\n\n                    <img style="width: 100px; height: 100px;" src="assets/imgs/logo.png">\n\n                </ion-col>\n\n                <ion-col width-50>\n\n                    <ion-label>\n\n                        <strong>Inspecting general</strong>\n\n                    </ion-label>\n\n                    <button ion-button style="background-color: rgb(255, 159, 0);">Nie t gestart</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="inspectionRoofComponents()" text-wrap>\n\n        <ion-list>\n\n            <ion-row>\n\n                <ion-col width-50>\n\n                    <img style="width: 100px; height: 100px;" src="assets/imgs/logo.png">\n\n                </ion-col>\n\n                <ion-col width-50>\n\n                    <ion-label>\n\n                        <strong>Inspecting dakbouwdelen</strong>\n\n                    </ion-label>\n\n                    <button ion-button style="background-color: rgb(255, 159, 0);">Nie t gestart</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-list>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\fileRecording\fileRecording.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], FileRecordingPage);
    return FileRecordingPage;
}());

//# sourceMappingURL=fileRecording.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoofDrawingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoofDrawingPage = /** @class */ (function () {
    function RoofDrawingPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    RoofDrawingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roof_drawing',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\roof_drawing\roof_drawing.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Roof Drawing\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-item text-wrap>\n\n        <ion-label class="font-30 text-alignment">Daktekening maken</ion-label>\n\n    </ion-item>\n\n    \n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\roof_drawing\roof_drawing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], RoofDrawingPage);
    return RoofDrawingPage;
}());

//# sourceMappingURL=roof_drawing.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryTimbersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structural_part_structural_part__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryTimbersPage = /** @class */ (function () {
    function InventoryTimbersPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
        this.ary = [];
        for (var i = 1; i < 10; i++) {
            this.ary.push(i);
        }
    }
    InventoryTimbersPage.prototype.addStructuralPart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__structural_part_structural_part__["a" /* StructuralPartPage */]);
    };
    InventoryTimbersPage.prototype.addImage = function () {
    };
    InventoryTimbersPage.prototype.deleteRecord = function () {
    };
    InventoryTimbersPage.prototype.clickCardNumber = function (i) {
        console.log("calling change data ::::", i);
    };
    InventoryTimbersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inventroy_timbers',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\inventroy_timbers\inventroy_timbers.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Inventory Timbers\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="font-30">Inventarisatie dakconstructie</ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <button ion-button clear (click)="addStructuralPart()">\n\n                ONDERDEEL\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Overgangsweerstand binnen</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">0.13</ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        01\n\n                    </ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Type laag</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        Constructie\n\n                    </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>D (mm)</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        200\n\n                    </ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>La</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        2.500\n\n                    </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>RL</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        0.08\n\n                    </ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Bev.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        -\n\n                    </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        Beton\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25></ion-col>\n\n                <ion-col width-25>\n\n                    <button ion-button (click)="deleteRecord()">\n\n                        <ion-icon name="trash"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Overgangsweerstand buiten</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">0.04</ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Totale isolatie waarde (m2 k/w)</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">2.38</ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-25>\n\n            <button ion-button clear (click)="addImage()">\n\n                AFBEELDING\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-scroll scrollX="true" style="width:100%; height:300px">\n\n        <ion-row nowrap>\n\n            <div *ngFor="let i of ary">\n\n                <!-- <ion-chip (click)="changeData(i)" style="height:100px">\n\n              <ion-label> {{i}} </ion-label>\n\n            </ion-chip> -->\n\n                <ion-card style="width:300px; height:300px;" (click)="clickCardNumber(i)"> {{i}}\n\n                    <img src="assets/imgs/logo.png">\n\n                </ion-card>\n\n            </div>\n\n        </ion-row>\n\n    </ion-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\inventroy_timbers\inventroy_timbers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], InventoryTimbersPage);
    return InventoryTimbersPage;
}());

//# sourceMappingURL=inventroy_timbers.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StructuralPartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structural_data_add_structural_data_add__ = __webpack_require__(805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StructuralPartPage = /** @class */ (function () {
    function StructuralPartPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    StructuralPartPage.prototype.addStructuralData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__structural_data_add_structural_data_add__["a" /* StructuralDataAddPage */]);
    };
    StructuralPartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-structural_part',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\structural_part\structural_part.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Add structural part\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class=".left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class=".left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class=".left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class=".left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-label class="font-30 text-alignment">Toevoegen constructiedeel</ion-label>\n\n    </ion-row>\n\n\n\n    <ion-searchbar (ionInput)="getItems($event)">zoeken</ion-searchbar>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        01\n\n                    </ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Type laag</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Onderconstructie\n\n                    </ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col width-20>\n\n                    <button ion-button style="float: right; margin-right: 20px;" (click)="addStructuralData()">\n\n                        <ion-icon name="add"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Lamda</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1.500\n\n                    </ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Beton\n\n                    </ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col width-20></ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        02\n\n                    </ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Type laag</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Onderconstructie\n\n                    </ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col width-20>\n\n                    <button ion-button style="float: right; margin-right: 20px;" (click)="addStructuralData()">\n\n                        <ion-icon name="add"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Lamda</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1.700\n\n                    </ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Hout\n\n                    </ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col width-20></ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\structural_part\structural_part.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], StructuralPartPage);
    return StructuralPartPage;
}());

//# sourceMappingURL=structural_part.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StructuralDataAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StructuralDataAddPage = /** @class */ (function () {
    function StructuralDataAddPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.documentNumber = 1;
    }
    StructuralDataAddPage.prototype.dropdown = function () {
        var _this = this;
        console.log("dropdown");
        var alert = this.alertCtrl.create();
        alert.setTitle('Bevestiging');
        alert.addInput({
            type: 'radio',
            label: 'Gekleefd',
            value: 'Gekleefd',
            checked: true
        });
        alert.addButton({
            text: 'Opslaan',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.selectedResult = data;
            }
        });
        alert.addButton({
            text: 'Sluiten',
            handler: function (data) {
                _this.selectedResult = "";
            }
        });
        alert.present();
    };
    StructuralDataAddPage.prototype.save = function () {
        console.log("save");
    };
    StructuralDataAddPage.prototype.cancel = function () {
        console.log("cancel");
    };
    StructuralDataAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-structural_data_add',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\structural_data_add\structural_data_add.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Add Structural Data\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-label class="font-30 text-alignment">Voer gegevens in</ion-label>\n\n\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-10">\n\n        Materiaal\n\n      </ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-10">\n\n        APP 470 14 K\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-item>\n\n    <ion-label floating>\n\n      Dikte (mm)\n\n    </ion-label>\n\n    <ion-input></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>\n\n      Bevestiging\n\n    </ion-label>\n\n    <ion-input (click)="dropdown()" [(ngModel)]="selectedResult"> {{selectedResult}} </ion-input>\n\n  </ion-item>\n\n\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <button ion-button class="theme-BG-color" full (click)="save()">\n\n        Opslaan\n\n      </button>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <button ion-button class="theme-BG-color" full (click)="cancel()">\n\n        Sluiten\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\structural_data_add\structural_data_add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], StructuralDataAddPage);
    return StructuralDataAddPage;
}());

//# sourceMappingURL=structural_data_add.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryRoofComponentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roof_construction_part_roof_construction_part__ = __webpack_require__(807);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryRoofComponentsPage = /** @class */ (function () {
    function InventoryRoofComponentsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    InventoryRoofComponentsPage.prototype.addRoofComponent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__roof_construction_part_roof_construction_part__["a" /* RoofConstructionPartPage */]);
    };
    InventoryRoofComponentsPage.prototype.editRecord = function () {
    };
    InventoryRoofComponentsPage.prototype.deleteRecord = function () {
    };
    InventoryRoofComponentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inventory_roof_components',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\inventory_roof_components\inventory_roof_components.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Inventory of roof components\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n                <button ion-button style="background-color: rgb(9, 255, 0); float: right;">Naar conditiemeting</button>\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-75>\n\n            <ion-label class="font-30">Inventarisatie dakbouwdelen</ion-label>\n\n        </ion-col>\n\n        <ion-col width-25>\n\n            <button ion-button clear (click)="addRoofComponent()">\n\n                DAKBOUWDEEL\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Naar conditiemeting\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-icon name="create" item-end class="theme-text-color" style="zoom:2.0; float: right; margin-right: 20px;" (click)="editRecord()"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omvang</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1000\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Eenheid</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        m2\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-icon name="trash" item-end class="theme-text-color" style="zoom:2.0; float: right; margin-right: 20px;" (click)="deleteRecord()"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\inventory_roof_components\inventory_roof_components.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], InventoryRoofComponentsPage);
    return InventoryRoofComponentsPage;
}());

//# sourceMappingURL=inventory_roof_components.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoofConstructionPartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roof_construction_data_add_roof_construction_data_add__ = __webpack_require__(808);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoofConstructionPartPage = /** @class */ (function () {
    function RoofConstructionPartPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    RoofConstructionPartPage.prototype.addRecord = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__roof_construction_data_add_roof_construction_data_add__["a" /* RoofConstructionDataAddPage */]);
    };
    RoofConstructionPartPage.prototype.selectAll = function () {
    };
    RoofConstructionPartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roof_construction_part',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\roof_construction_part\roof_construction_part.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Roof construction part\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-75>\n\n            <ion-label class="font-30">Toevoegen dakbouwdeel</ion-label>\n\n        </ion-col>\n\n        <ion-col width-25>\n\n            <button ion-button clear (click)="selectAll()">\n\n                SelectAll\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Naar conditiemeting\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-icon name="add" item-end class="theme-text-color" style="zoom:2.0; float: right; margin-right: 20px;" (click)="addRecord()"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\roof_construction_part\roof_construction_part.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], RoofConstructionPartPage);
    return RoofConstructionPartPage;
}());

//# sourceMappingURL=roof_construction_part.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoofConstructionDataAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoofConstructionDataAddPage = /** @class */ (function () {
    function RoofConstructionDataAddPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.documentNumber = 1;
    }
    RoofConstructionDataAddPage.prototype.dropdown = function () {
        var _this = this;
        console.log("dropdown");
        var alert = this.alertCtrl.create();
        alert.setTitle('Bevestiging');
        alert.addInput({
            type: 'radio',
            label: 'm2',
            value: 'm2',
            checked: true
        });
        alert.addButton({
            text: 'Opslaan',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.selectedResult = data;
            }
        });
        alert.addButton({
            text: 'Sluiten',
            handler: function (data) {
                _this.selectedResult = "";
            }
        });
        alert.present();
    };
    RoofConstructionDataAddPage.prototype.add = function () {
        console.log("add");
    };
    RoofConstructionDataAddPage.prototype.cancel = function () {
        console.log("cancel");
    };
    RoofConstructionDataAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roof_construction_data_add',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\roof_construction_data_add\roof_construction_data_add.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Add Roof Construction Data\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-label class="font-30 text-alignment">Voer gegevens in</ion-label>\n\n\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-10">\n\n        Dakbouwdeel\n\n      </ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-10">\n\n        Dakbedekking\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-item>\n\n    <ion-label floating>\n\n      Omvang\n\n    </ion-label>\n\n    <ion-input type="number"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>\n\n      Eenheid\n\n    </ion-label>\n\n    <ion-input (click)="dropdown()" [(ngModel)]="selectedResult"> {{selectedResult}} </ion-input>\n\n  </ion-item>\n\n\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <button ion-button class="theme-BG-color" full (click)="add()">\n\n        Toevoegen\n\n      </button>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <button ion-button class="theme-BG-color" full (click)="cancel()">\n\n        Sluiten\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\roof_construction_data_add\roof_construction_data_add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RoofConstructionDataAddPage);
    return RoofConstructionDataAddPage;
}());

//# sourceMappingURL=roof_construction_data_add.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectionRoofComponentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assessment_defects_assessment_defects__ = __webpack_require__(810);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InspectionRoofComponentsPage = /** @class */ (function () {
    function InspectionRoofComponentsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    InspectionRoofComponentsPage.prototype.openAssesmentDefects = function () {
        debugger;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assessment_defects_assessment_defects__["a" /* AssessmentDefectsPage */]);
    };
    InspectionRoofComponentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inspection_roof_components',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\inspection_roof_components\inspection_roof_components.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Inspection of Roof Components\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-75>\n\n            <ion-label class="font-30 text-alignment">Inspectie dakbouwdelen</ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Dakbedekking\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-icon name="arrow-dropright" item-end class="theme-text-color" style="zoom:2.0; float: right; margin-right: 20px;"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omvang</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1000 m2\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Conditie</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label style="background-color: red; color: white; width: 100px;">\n\n                        &nbsp;Slecht\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20></ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        2\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Dakrandafwerking\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-icon name="arrow-dropright" item-end class="theme-text-color" style="zoom:2.0; float: right; margin-right: 20px;" (click)="openAssesmentDefects()"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omvang</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        100 m1\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Conditie</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        &nbsp;Niet bekend\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20></ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\inspection_roof_components\inspection_roof_components.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], InspectionRoofComponentsPage);
    return InspectionRoofComponentsPage;
}());

//# sourceMappingURL=inspection_roof_components.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentDefectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_defect_choose_defect__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choose_defect_add_image_choose_defect_add_image__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssessmentDefectsPage = /** @class */ (function () {
    function AssessmentDefectsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    AssessmentDefectsPage.prototype.rating = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_defect_choose_defect__["a" /* ChooseDefectPage */]);
    };
    AssessmentDefectsPage.prototype.addImage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__choose_defect_add_image_choose_defect_add_image__["a" /* ChooseDefectAddImagePage */]);
    };
    AssessmentDefectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assessment_defects',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\assessment_defects\assessment_defects.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Assessment of defects\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Dakbouwdeel</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                Dakbedekking\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omvang</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                1000\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Eenheid</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            m2\n\n            <button ion-button style="background-color: red; float: right; margin-right: 20px;">Slecht</button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="font-30">Beoordeling gebreken</ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <button ion-button clear (click)="rating()">\n\n                BEOORDELING\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        1\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        Craquele\n\n                    </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Omvang</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        Regalmating 20-60%\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Stadium</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        Eind stadium\n\n                    </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Afbeelding</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <img src="assets/imgs/logo1.png" style="padding-top: 20px;" (click)="addImage()">\n\n                </ion-col>\n\n                <ion-col width-25></ion-col>\n\n                <ion-col width-25></ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\assessment_defects\assessment_defects.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], AssessmentDefectsPage);
    return AssessmentDefectsPage;
}());

//# sourceMappingURL=assessment_defects.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseDefectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_defect_data_add_choose_defect_data_add__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChooseDefectPage = /** @class */ (function () {
    function ChooseDefectPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    ChooseDefectPage.prototype.addRecord = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_defect_data_add_choose_defect_data_add__["a" /* ChooseDefectDataAddPage */]);
    };
    ChooseDefectPage.prototype.selectAll = function () {
    };
    ChooseDefectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choose_defect',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\choose_defect\choose_defect.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Choose a defect\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Dakbouwdeel</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dakbedekking\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omvang</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                1000\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Eenheid</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                m2\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-75>\n\n            <ion-label class="font-30">Kies een gebrek</ion-label>\n\n        </ion-col>\n\n        <ion-col width-25>\n\n            <button ion-button clear (click)="selectAll()">\n\n                SelectAll\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Geen\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-icon name="add" item-end class="theme-text-color" style="zoom:2.0; float: right; margin-right: 20px;" (click)="addRecord()"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\choose_defect\choose_defect.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], ChooseDefectPage);
    return ChooseDefectPage;
}());

//# sourceMappingURL=choose_defect.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseDefectDataAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChooseDefectDataAddPage = /** @class */ (function () {
    function ChooseDefectDataAddPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.documentNumber = 1;
    }
    ChooseDefectDataAddPage.prototype.updateLocal = function () {
    };
    ChooseDefectDataAddPage.prototype.updateRegular = function () {
    };
    ChooseDefectDataAddPage.prototype.updateEveryWhere = function () {
    };
    ChooseDefectDataAddPage.prototype.updateBegin = function () {
    };
    ChooseDefectDataAddPage.prototype.updateAdvance = function () {
    };
    ChooseDefectDataAddPage.prototype.updateEnd = function () {
    };
    ChooseDefectDataAddPage.prototype.save = function () {
        console.log("save");
    };
    ChooseDefectDataAddPage.prototype.cancel = function () {
        console.log("cancel");
    };
    ChooseDefectDataAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choose_defect_data_add',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\choose_defect_data_add\choose_defect_data_add.html"*/'<ion-header>\n\n  <ion-navbar class="left-padding-10">\n\n    <ion-title class="toolbar-background text-alignment">\n\n      Add Choose Defect Data\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-label class="lbl-background">Address</ion-label>\n\n\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        <strong>Daknummer</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        {{documentNumber}}\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        <strong>Omschrijving</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        Dak boven woningen\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-label class="single-line"></ion-label>\n\n\n\n  <ion-label class="font-30 text-alignment">Voer gegevens in</ion-label>\n\n\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-10">\n\n        Gebrek\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-10">\n\n        Craquele\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-card center>\n\n    <ion-row radio-group>\n\n      <ion-col width-25>\n\n        <ion-label>Omvang</ion-label>\n\n      </ion-col>\n\n      <ion-col width-25>\n\n        <ion-item>\n\n          <ion-label>Plaatselijk 0-20%</ion-label>\n\n          <ion-checkbox [(ngModel)]="local" (ionChange)="updateLocal()"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col width-25>\n\n        <ion-item>\n\n          <ion-label>Regelmatig 20-60%</ion-label>\n\n          <ion-checkbox [(ngModel)]="regular" (ionChange)="updateRegular()"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col width-25>\n\n        <ion-item>\n\n          <ion-label>Overal 60-100%</ion-label>\n\n          <ion-checkbox [(ngModel)]="everyWhere" (ionChange)="updateEveryWhere()"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card center>\n\n    <ion-row radio-group>\n\n      <ion-col width-25>\n\n        <ion-label>Stadium</ion-label>\n\n      </ion-col>\n\n      <ion-col width-25>\n\n        <ion-item>\n\n          <ion-label>Begin</ion-label>\n\n          <ion-checkbox [(ngModel)]="begin" (ionChange)="updateBegin()"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col width-25>\n\n        <ion-item>\n\n          <ion-label>Gevorderd</ion-label>\n\n          <ion-checkbox [(ngModel)]="advance" (ionChange)="updateAdvance()"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col width-25>\n\n        <ion-item>\n\n          <ion-label>Eind</ion-label>\n\n          <ion-checkbox [(ngModel)]="end" (ionChange)="updateEnd()"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <button ion-button class="theme-BG-color" full (click)="save()">\n\n        Opslaan\n\n      </button>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <button ion-button class="theme-BG-color" full (click)="cancel()">\n\n        Sluiten\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\choose_defect_data_add\choose_defect_data_add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ChooseDefectDataAddPage);
    return ChooseDefectDataAddPage;
}());

//# sourceMappingURL=choose_defect_data_add.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseDefectAddImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChooseDefectAddImagePage = /** @class */ (function () {
    function ChooseDefectAddImagePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
        this.ary = [];
        for (var i = 1; i < 10; i++) {
            this.ary.push(i);
        }
    }
    ChooseDefectAddImagePage.prototype.addPhotos = function () {
    };
    ChooseDefectAddImagePage.prototype.clickCardNumber = function () {
    };
    ChooseDefectAddImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choose_defect_add_image',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\choose_defect_add_image\choose_defect_add_image.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Add Images\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Dakbouwdeel</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                Dakbedekking\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omvang</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                1000\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Eenheid</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            m2\n\n            <button ion-button style="background-color: red; float: right; margin-right: 20px;">Slecht</button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="font-30">Foto’s Craquelé</ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <button ion-button clear (click)="addPhotos()">\n\n                Foto\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-scroll scrollX="true" style="width:100%; height:300px">\n\n        <ion-row nowrap>\n\n            <div *ngFor="let i of ary">\n\n                <ion-card style="width:300px; height:300px;" (click)="clickCardNumber(i)"> {{i}}\n\n                    <img src="assets/imgs/logo.png">\n\n                </ion-card>\n\n            </div>\n\n        </ion-row>\n\n    </ion-scroll>\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\choose_defect_add_image\choose_defect_add_image.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], ChooseDefectAddImagePage);
    return ChooseDefectAddImagePage;
}());

//# sourceMappingURL=choose_defect_add_image.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileRecordingMJOBSubtaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advice_corrective_maintainance_advice_corrective_maintainance__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roof_components_condition_roof_components_condition__ = __webpack_require__(818);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileRecordingMJOBSubtaskPage = /** @class */ (function () {
    function FileRecordingMJOBSubtaskPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    FileRecordingMJOBSubtaskPage.prototype.adviceCorrectiveMaintainance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__advice_corrective_maintainance_advice_corrective_maintainance__["a" /* AdviceCorrectiveMaintainancePage */]);
    };
    FileRecordingMJOBSubtaskPage.prototype.advicePlannedMaintainance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__roof_components_condition_roof_components_condition__["a" /* RoofComponentsConditionPage */]);
    };
    FileRecordingMJOBSubtaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-file_recording_MJOB_subtask',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\file_recording_MJOB_subtask\file_recording_MJOB_subtask.html"*/'<ion-header>\n\n  <ion-navbar class="left-padding-10">\n\n    <ion-title class="toolbar-background text-alignment">\n\n      File Recording Subtask\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-label class="lbl-background">Address</ion-label>\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        <strong>Daknummer</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        {{documentNumber}}\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        <strong>Omschrijving</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        Dak boven woningen\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-label class="single-line"></ion-label>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-label class="font-30 text-alignment">File Recording MJOB Subtask</ion-label>\n\n  </ion-item>\n\n\n\n  <ion-card (click)="adviceCorrectiveMaintainance()" text-wrap>\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col width-50>\n\n          <img style="width: 100px; height: 100px;" src="assets/imgs/logo.png">\n\n        </ion-col>\n\n        <ion-col width-50>\n\n          <ion-label>\n\n            <strong>Task Opinion corrective maintenance</strong>\n\n          </ion-label>\n\n          <button ion-button style="background-color: rgb(255, 159, 0);">Nie t gestart</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="advicePlannedMaintainance()" text-wrap>\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col width-50>\n\n          <img style="width: 100px; height: 100px;" src="assets/imgs/logo.png">\n\n        </ion-col>\n\n        <ion-col width-50>\n\n          <ion-label>\n\n            <strong>Task Opinion planned maintenance</strong>\n\n          </ion-label>\n\n          <button ion-button style="background-color: rgb(255, 159, 0);">Nie t gestart</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\file_recording_MJOB_subtask\file_recording_MJOB_subtask.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], FileRecordingMJOBSubtaskPage);
    return FileRecordingMJOBSubtaskPage;
}());

//# sourceMappingURL=file_recording_MJOB_subtask.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdviceCorrectiveMaintainancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assessment_corrective_maintainance_assessment_corrective_maintainance__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdviceCorrectiveMaintainancePage = /** @class */ (function () {
    function AdviceCorrectiveMaintainancePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    AdviceCorrectiveMaintainancePage.prototype.openAssesmentAdvice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assessment_corrective_maintainance_assessment_corrective_maintainance__["a" /* AssessmentCorrectiveMaintainancePage */]);
    };
    AdviceCorrectiveMaintainancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-advice_corrective_maintainance',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\advice_corrective_maintainance\advice_corrective_maintainance.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Advice corrective maintenance\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-75>\n\n            <ion-label class="font-30 text-alignment">Advies correctief onderhoud</ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Dakbedekking\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-icon name="arrow-dropright" item-end class="theme-text-color" style="zoom:2.0; float: right; margin-right: 20px;"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omvang</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1000 m2\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Conditie</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label style="background-color: red; color: white; width: 100px;">\n\n                        &nbsp;Slecht\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20></ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        2\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Dakrandafwerking\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-icon name="arrow-dropright" item-end class="theme-text-color" style="zoom:2.0; float: right; margin-right: 20px;" (click)="openAssesmentAdvice()"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omvang</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        100 m1\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Conditie</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        &nbsp;Niet bekend\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20></ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\advice_corrective_maintainance\advice_corrective_maintainance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], AdviceCorrectiveMaintainancePage);
    return AdviceCorrectiveMaintainancePage;
}());

//# sourceMappingURL=advice_corrective_maintainance.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentCorrectiveMaintainancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__corrective_maintainance_data_add_corrective_maintainance_data_add__ = __webpack_require__(817);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssessmentCorrectiveMaintainancePage = /** @class */ (function () {
    function AssessmentCorrectiveMaintainancePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    AssessmentCorrectiveMaintainancePage.prototype.editRecord = function () {
    };
    AssessmentCorrectiveMaintainancePage.prototype.deleteRecord = function () {
    };
    AssessmentCorrectiveMaintainancePage.prototype.advice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__corrective_maintainance_data_add_corrective_maintainance_data_add__["a" /* CorrectiveMaintainanceDataAddPage */]);
    };
    AssessmentCorrectiveMaintainancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assessment_corrective_maintainance',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\assessment_corrective_maintainance\assessment_corrective_maintainance.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Assessment of Corrective Maintainance\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Dakbouwdeel</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                Dakbedekking\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omvang</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label>\n\n                1000\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Eenheid</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            m2\n\n            <button ion-button style="background-color: red; float: right; margin-right: 20px;">Slecht</button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="font-30">Advies correctief onderhoud</ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <button ion-button clear (click)="advice()">\n\n                Advies\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Herstel mootregel</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Reinigen\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-icon name="create" item-end class="theme-text-color" style="zoom:2.0; float: right; margin-right: 20px;" (click)="editRecord()"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Omvang</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        1000 m2\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Periode</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        2015\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-icon name="trash" item-end class="theme-text-color" style="zoom:2.0; float: right; margin-right: 20px;" (click)="deleteRecord()"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        <strong>Toelichting</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20>\n\n                    <ion-label>\n\n                        Hard nodig\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-20></ion-col>\n\n                <ion-col width-20></ion-col>\n\n                <ion-col width-20></ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\assessment_corrective_maintainance\assessment_corrective_maintainance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], AssessmentCorrectiveMaintainancePage);
    return AssessmentCorrectiveMaintainancePage;
}());

//# sourceMappingURL=assessment_corrective_maintainance.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorrectiveMaintainanceDataAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CorrectiveMaintainanceDataAddPage = /** @class */ (function () {
    function CorrectiveMaintainanceDataAddPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.documentNumber = 1;
    }
    CorrectiveMaintainanceDataAddPage.prototype.dropdownMeasure = function () {
        var _this = this;
        console.log("dropdown");
        var alert = this.alertCtrl.create();
        alert.setTitle('Maatregel');
        alert.addInput({
            type: 'radio',
            label: 'Reinigen',
            value: 'Reinigen',
            checked: true
        });
        alert.addButton({
            text: 'Opslaan',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.selectedMeasure = data;
            }
        });
        alert.addButton({
            text: 'Sluiten',
            handler: function (data) {
                _this.selectedMeasure = "";
            }
        });
        alert.present();
    };
    CorrectiveMaintainanceDataAddPage.prototype.add = function () {
        console.log("save");
    };
    CorrectiveMaintainanceDataAddPage.prototype.cancel = function () {
        console.log("cancel");
    };
    CorrectiveMaintainanceDataAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-corrective_maintainance_data_add',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\corrective_maintainance_data_add\corrective_maintainance_data_add.html"*/'<ion-header>\n\n  <ion-navbar class="left-padding-10">\n\n    <ion-title class="toolbar-background text-alignment">\n\n      Add Corrective Maintainance Data\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-label class="lbl-background">Address</ion-label>\n\n\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        <strong>Daknummer</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        {{documentNumber}}\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        <strong>Omschrijving</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-5">\n\n        Dak boven woningen\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-label class="single-line"></ion-label>\n\n\n\n  <ion-label class="font-30 text-alignment">Voer gegevens in</ion-label>\n\n\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-10">\n\n        Dakbouwdeel\n\n      </ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col width-50>\n\n      <ion-label class="left-padding-10">\n\n        Dakbedekking\n\n      </ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-item>\n\n    <ion-label floating>\n\n      Maatregel\n\n    </ion-label>\n\n    <ion-input (click)="dropdownMeasure()" [(ngModel)]="selectedMeasure"> {{selectedMeasure}} </ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>\n\n      Omvang\n\n    </ion-label>\n\n    <ion-input type="number"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>\n\n      Periode\n\n    </ion-label>\n\n    <ion-input type="number"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>\n\n      Toelichting\n\n    </ion-label>\n\n    <ion-input></ion-input>\n\n  </ion-item>\n\n\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <button ion-button class="theme-BG-color" full (click)="add()">\n\n        Toevoegen\n\n      </button>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <button ion-button class="theme-BG-color" full (click)="cancel()">\n\n        Sluiten\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\corrective_maintainance_data_add\corrective_maintainance_data_add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CorrectiveMaintainanceDataAddPage);
    return CorrectiveMaintainanceDataAddPage;
}());

//# sourceMappingURL=corrective_maintainance_data_add.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoofComponentsConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advice_planned_maintainance_advice_planned_maintainance__ = __webpack_require__(819);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoofComponentsConditionPage = /** @class */ (function () {
    function RoofComponentsConditionPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.documentNumber = 1;
    }
    RoofComponentsConditionPage.prototype.advice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__advice_planned_maintainance_advice_planned_maintainance__["a" /* AdvicePlannedMaintainancePage */]);
    };
    RoofComponentsConditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roof_components_condition',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\roof_components_condition\roof_components_condition.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Current condition of roof components\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-100>\n\n            <ion-label class="font-30 text-alignment">Huidige conditie dakbouwdelen</ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        1\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        Dakbedekking\n\n                    </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Omvang</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        1000 m2\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Conditie</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label style="background-color: red; color: white; width: 100px;">\n\n                        &nbsp;Slecht\n\n                    </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        2\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Omschrijving</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        Dakrandafwerking\n\n                    </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Omvang</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        100 m1\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Conditie</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        &nbsp;Niet bekend\n\n                    </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="font-30">Advies planmatig onderhoud</ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <button ion-button clear (click)="advice()">\n\n                Advies\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card text-wrap>\n\n        <ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Nr.</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Datum</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n\n\n                    </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n                        <strong>Toelichting</strong>\n\n                    </ion-label>\n\n                </ion-col>\n\n                <ion-col width-25>\n\n                    <ion-label>\n\n\n\n                    </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\roof_components_condition\roof_components_condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], RoofComponentsConditionPage);
    return RoofComponentsConditionPage;
}());

//# sourceMappingURL=roof_components_condition.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvicePlannedMaintainancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvicePlannedMaintainancePage = /** @class */ (function () {
    function AdvicePlannedMaintainancePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.documentNumber = 1;
    }
    AdvicePlannedMaintainancePage.prototype.dropdown = function () {
        var _this = this;
        console.log("dropdown");
        var alert = this.alertCtrl.create();
        alert.setTitle('Resterende levensduur');
        alert.addInput({
            type: 'radio',
            label: '0-2 jaar',
            value: '0-2 jaar',
            checked: true
        });
        alert.addButton({
            text: 'Opslaan',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.selectedResult = data;
            }
        });
        alert.addButton({
            text: 'Sluiten',
            handler: function (data) {
                _this.selectedResult = "";
            }
        });
        alert.present();
    };
    AdvicePlannedMaintainancePage.prototype.save = function () {
    };
    AdvicePlannedMaintainancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-advice_planned_maintainance',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\advice_planned_maintainance\advice_planned_maintainance.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Advice planned maintenance\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-label class="lbl-background">Address</ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Daknummer</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                {{documentNumber}}\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                <strong>Omschrijving</strong>\n\n            </ion-label>\n\n        </ion-col>\n\n        <ion-col width-50>\n\n            <ion-label class="left-padding-5">\n\n                Dak boven woningen\n\n            </ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-label class="single-line"></ion-label>\n\n\n\n    <ion-row>\n\n        <ion-col width-100>\n\n            <ion-label class="font-30 text-alignment">Advies planmatig onderhoud</ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-item>\n\n        <ion-label floating>\n\n            Resterende levensduur\n\n        </ion-label>\n\n        <ion-input (click)="dropdown()" [(ngModel)]="selectedResult"> {{selectedResult}} </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>\n\n            Toelichting\n\n        </ion-label>\n\n        <ion-input></ion-input>\n\n    </ion-item>\n\n\n\n    <br/>\n\n    <br/>\n\n    <br/>\n\n    <br/>\n\n    <br/>\n\n    <ion-row>\n\n        <ion-col width-100>\n\n            <button ion-button class="theme-BG-color" full (click)="save()">\n\n                Opslaan\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\advice_planned_maintainance\advice_planned_maintainance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AdvicePlannedMaintainancePage);
    return AdvicePlannedMaintainancePage;
}());

//# sourceMappingURL=advice_planned_maintainance.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectionAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InspectionAddPage = /** @class */ (function () {
    function InspectionAddPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    InspectionAddPage.prototype.carryoutInspection = function () {
        var _this = this;
        console.log("carryoutInspection");
        var alert = this.alertCtrl.create();
        alert.setTitle('Inspectie uitvoeren');
        alert.addInput({
            type: 'radio',
            label: 'Basis inspectiemethodiek',
            value: 'Basis inspectiemethodiek',
            checked: true
        });
        alert.addButton({
            text: 'Opslaan',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.selectedResult = data;
            }
        });
        alert.addButton({
            text: 'Sluiten',
            handler: function (data) {
                _this.selectedResult = "";
            }
        });
        alert.present();
    };
    InspectionAddPage.prototype.save = function () {
        console.log("save");
    };
    InspectionAddPage.prototype.cancel = function () {
        console.log("cancel");
    };
    InspectionAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inspection_add',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\inspection_add\inspection_add.html"*/'<ion-header>\n\n  <ion-navbar class="left-padding-10">\n\n    <ion-title class="toolbar-background text-alignment">\n\n      Inspectie toevoeggen\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- <ion-label style="padding-left: 10px;"><strong>Inspecteur </strong>Piet van Puffelen</ion-label> -->\n\n  <ion-label class="lbl-background">Inspecteur - Piet van Puffelen</ion-label>\n\n\n\n  <ion-item>\n\n    <ion-label floating class="theme-text-color">\n\n      Volgnummer\n\n    </ion-label>\n\n    <ion-input type="number" class="theme-text-color"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating class="theme-text-color">\n\n      Datum\n\n    </ion-label>\n\n    <!-- <ion-input class="theme-text-color"></ion-input> -->\n\n    <ion-datetime displayFormat="DD-MM-YYYY" [(ngModel)]="today"></ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating class="theme-text-color">\n\n      Inspectie uitvoeren\n\n    </ion-label>\n\n    <ion-input class="theme-text-color" (click)="carryoutInspection()" [(ngModel)]="selectedResult"> {{selectedResult}} </ion-input>\n\n  </ion-item>\n\n\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <ion-row>\n\n    <ion-col width-50>\n\n      <button ion-button class="theme-BG-color" full (click)="save()">\n\n        Opslaan\n\n      </button>\n\n    </ion-col>\n\n    <ion-col width-50>\n\n      <button ion-button class="theme-BG-color" full (click)="cancel()">\n\n        Sluiten\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\inspection_add\inspection_add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], InspectionAddPage);
    return InspectionAddPage;
}());

//# sourceMappingURL=inspection_add.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit_profile',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\edit_profile\edit_profile.html"*/'<ion-header>\n\n    <ion-navbar class="left-padding-10">\n\n        <ion-title class="toolbar-background text-alignment">\n\n            Edit Profile\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\edit_profile\edit_profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit_profile.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"D:\Projets\Accentis\Mobile\src\pages\logout\logout.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster\n\n  <p>\n\n    Detail\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"D:\Projets\Accentis\Mobile\src\pages\logout\logout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ifour/Desktop/projects/Accentis/Accentis/mobile/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar class="left-padding-10">\n    <ion-title class="toolbar-background text-alignment">\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/ifour/Desktop/projects/Accentis/Accentis/mobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(837);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(1117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__ = __webpack_require__(1119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_contract_search_contract__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_inspection_inspection__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_inspection_detail_inspection_detail__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_inspection_add_inspection_add__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_inspection_edit_photo_inspection_edit_photo__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_roof_add_edit_roof_add_edit__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_roof_detail_roof_detail__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_imageZoom_imageZoom__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_maintainance_advice_maintainance_advice__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_inspecting_roof_surface_inspecting_roof_surface__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_roof_clean_roof_clean__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_fileRecording_fileRecording__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_roof_drawing_roof_drawing__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_inventroy_timbers_inventroy_timbers__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_structural_part_structural_part__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_structural_data_add_structural_data_add__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_inventory_roof_components_inventory_roof_components__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_roof_construction_part_roof_construction_part__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_roof_construction_data_add_roof_construction_data_add__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_inspection_roof_components_inspection_roof_components__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_assessment_defects_assessment_defects__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_choose_defect_choose_defect__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_choose_defect_data_add_choose_defect_data_add__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_choose_defect_add_image_choose_defect_add_image__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_advice_corrective_maintainance_advice_corrective_maintainance__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_assessment_corrective_maintainance_assessment_corrective_maintainance__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_corrective_maintainance_data_add_corrective_maintainance_data_add__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_file_recording_MJOB_subtask_file_recording_MJOB_subtask__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_roof_components_condition_roof_components_condition__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_advice_planned_maintainance_advice_planned_maintainance__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_edit_profile_edit_profile__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_menu_menu__ = __webpack_require__(1197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













































// import { inspectNativeElement } from '@angular/platform-browser/src/dom/debug/ng_probe';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_contract_search_contract__["a" /* SearchContractPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_inspection_inspection__["a" /* InspectionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_inspection_add_inspection_add__["a" /* InspectionAddPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_inspection_detail_inspection_detail__["a" /* InspectionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_inspection_edit_photo_inspection_edit_photo__["a" /* InspectionEditPhotoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_roof_add_edit_roof_add_edit__["a" /* RoofAddEditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_roof_detail_roof_detail__["a" /* RoofDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_imageZoom_imageZoom__["a" /* ImageZoomPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_maintainance_advice_maintainance_advice__["a" /* MaintainanceAdvicePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_inspecting_roof_surface_inspecting_roof_surface__["a" /* InspectingRoofSurfacePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_roof_clean_roof_clean__["a" /* RoofCleanPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_fileRecording_fileRecording__["a" /* FileRecordingPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_roof_drawing_roof_drawing__["a" /* RoofDrawingPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_inventroy_timbers_inventroy_timbers__["a" /* InventoryTimbersPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_structural_part_structural_part__["a" /* StructuralPartPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_structural_data_add_structural_data_add__["a" /* StructuralDataAddPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_inventory_roof_components_inventory_roof_components__["a" /* InventoryRoofComponentsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_roof_construction_part_roof_construction_part__["a" /* RoofConstructionPartPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_roof_construction_data_add_roof_construction_data_add__["a" /* RoofConstructionDataAddPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_inspection_roof_components_inspection_roof_components__["a" /* InspectionRoofComponentsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_assessment_defects_assessment_defects__["a" /* AssessmentDefectsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_choose_defect_choose_defect__["a" /* ChooseDefectPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_choose_defect_data_add_choose_defect_data_add__["a" /* ChooseDefectDataAddPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_choose_defect_add_image_choose_defect_add_image__["a" /* ChooseDefectAddImagePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_advice_corrective_maintainance_advice_corrective_maintainance__["a" /* AdviceCorrectiveMaintainancePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_assessment_corrective_maintainance_assessment_corrective_maintainance__["a" /* AssessmentCorrectiveMaintainancePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_corrective_maintainance_data_add_corrective_maintainance_data_add__["a" /* CorrectiveMaintainanceDataAddPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_file_recording_MJOB_subtask_file_recording_MJOB_subtask__["a" /* FileRecordingMJOBSubtaskPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_roof_components_condition_roof_components_condition__["a" /* RoofComponentsConditionPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_advice_planned_maintainance_advice_planned_maintainance__["a" /* AdvicePlannedMaintainancePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_menu_menu__["a" /* MenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition'
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_contract_search_contract__["a" /* SearchContractPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_inspection_inspection__["a" /* InspectionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_inspection_add_inspection_add__["a" /* InspectionAddPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_inspection_detail_inspection_detail__["a" /* InspectionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_inspection_edit_photo_inspection_edit_photo__["a" /* InspectionEditPhotoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_roof_add_edit_roof_add_edit__["a" /* RoofAddEditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_roof_detail_roof_detail__["a" /* RoofDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_imageZoom_imageZoom__["a" /* ImageZoomPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_maintainance_advice_maintainance_advice__["a" /* MaintainanceAdvicePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_inspecting_roof_surface_inspecting_roof_surface__["a" /* InspectingRoofSurfacePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_roof_clean_roof_clean__["a" /* RoofCleanPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_fileRecording_fileRecording__["a" /* FileRecordingPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_roof_drawing_roof_drawing__["a" /* RoofDrawingPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_inventroy_timbers_inventroy_timbers__["a" /* InventoryTimbersPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_structural_part_structural_part__["a" /* StructuralPartPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_structural_data_add_structural_data_add__["a" /* StructuralDataAddPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_inventory_roof_components_inventory_roof_components__["a" /* InventoryRoofComponentsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_roof_construction_part_roof_construction_part__["a" /* RoofConstructionPartPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_roof_construction_data_add_roof_construction_data_add__["a" /* RoofConstructionDataAddPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_inspection_roof_components_inspection_roof_components__["a" /* InspectionRoofComponentsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_assessment_defects_assessment_defects__["a" /* AssessmentDefectsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_choose_defect_choose_defect__["a" /* ChooseDefectPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_choose_defect_data_add_choose_defect_data_add__["a" /* ChooseDefectDataAddPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_choose_defect_add_image_choose_defect_add_image__["a" /* ChooseDefectAddImagePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_advice_corrective_maintainance_advice_corrective_maintainance__["a" /* AdviceCorrectiveMaintainancePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_assessment_corrective_maintainance_assessment_corrective_maintainance__["a" /* AssessmentCorrectiveMaintainancePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_corrective_maintainance_data_add_corrective_maintainance_data_add__["a" /* CorrectiveMaintainanceDataAddPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_file_recording_MJOB_subtask_file_recording_MJOB_subtask__["a" /* FileRecordingMJOBSubtaskPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_roof_components_condition_roof_components_condition__["a" /* RoofComponentsConditionPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_advice_planned_maintainance_advice_planned_maintainance__["a" /* AdvicePlannedMaintainancePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_menu_menu__["a" /* MenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ })

},[829]);
//# sourceMappingURL=main.js.map