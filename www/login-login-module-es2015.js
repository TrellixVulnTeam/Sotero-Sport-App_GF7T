(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/user.service */ "kmKP");
/* harmony import */ var _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/ui.service */ "8nna");








let LoginPage = class LoginPage {
    constructor(loadingCtrl, userService, navCtrl, uiService, formBuilder, modalCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.slideNgIf = 0;
        this.loginUser = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)
                ])],
        });
        this.registerUser = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)
                ])],
            avatar: ['']
        });
    }
    ngOnInit() {
        this.slides.lockSwipes(true);
        console.log(this.avatar + ' el avatar');
    }
    presentLoading(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                cssClass: 'ion-loading-class',
                spinner: 'bubbles',
                message: msg,
            });
            yield this.loading.present();
        });
    }
    // Login
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loginUser.invalid) {
                this.uiService.alertInfo('Todos los campos son requeridos.');
                return;
            }
            this.presentLoading('Cargando...');
            const valid = yield this.userService.login(this.loginUser.get('email').value, this.loginUser.get('password').value);
            if (valid) {
                // navega a main
                this.loading.dismiss();
                // this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true }); // Para ir a los Posts
                this.navCtrl.navigateRoot('/main/tabs/lists', { animated: true }); // Para ir a las listas
            }
            else {
                // Mostrar alert : usuario/contraseña no correctos
                this.loading.dismiss();
                this.uiService.alertInfo('Email o contraseña incorrectos.');
            }
        });
    }
    // Registro
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.registerUser.invalid) {
                this.uiService.alertInfo('Todos los campos son requeridos.');
                return;
            }
            const checkPass = yield this.checkPassword();
            if (checkPass) {
                this.presentLoading('Creando usuario...');
                this.registerUser.get('avatar').setValue(this.avatar);
                const valid = yield this.userService.register(this.registerUser.getRawValue());
                if (valid) {
                    // navega a main
                    this.loading.dismiss();
                    this.navCtrl.navigateRoot('/main/tabs/lists', { animated: true });
                }
                else {
                    // Mostrar alert : usuario/contraseña no correctos
                    this.loading.dismiss();
                    this.uiService.alertInfo('El correo electronico ya existe.');
                }
            }
            else {
                this.uiService.alertInfo("Las contraseñas no coinciden: Por favor vuelva a intentarlo.");
            }
        });
    }
    // Compara contraseñas
    checkPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.registerUser.get('password').value === '') {
                this.uiService.alertInfo("Por favor introduzca una contraseña");
            }
            else if (this.password2 == '') {
                this.uiService.alertInfo("Por favor confirme la contraseña");
            }
            else if (this.registerUser.get('password').value != this.password2) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    showLogin() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
        this.slideNgIf = 0;
    }
    showRegister() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
        this.slideNgIf = 1;
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_7__["UiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
LoginPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slideLoginToRegister', { static: true },] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-slides class=\"mainSlide\" #slideLoginToRegister>\n        <ion-slide>\n            <form [formGroup]=\"loginUser\" (ngSubmit)=\"login()\">\n                <ion-grid fixed>\n                    <ion-row>\n                        <ion-col>\n                            <img src=\"/assets/img/soterosport-logo.png\" />\n                        </ion-col>\n                    </ion-row>\n                    <div class=\"container\">\n                        <ion-row>\n                            <ion-col>\n                                <ion-list>\n                                    <!-- Input email -->\n                                    <ion-item class=\"roundedInput\">\n                                        <ion-label position=\"floating\">Email</ion-label>\n                                        <ion-input formControlName=\"email\" type=\"email\" required>\n                                        </ion-input>\n                                    </ion-item>\n\n                                    <!-- Input contraseña -->\n                                    <ion-item class=\"roundedInput\">\n                                        <ion-label position=\"floating\">Contraseña</ion-label>\n                                        <ion-input formControlName=\"password\" type=\"password\" required></ion-input>\n                                    </ion-item>\n                                </ion-list>\n                            </ion-col>\n                        </ion-row>\n\n                        <!-- Boton login -->\n                        <ion-row>\n                            <ion-col>\n                                <ion-button color=\"soterosport-yellow\" type=\"submit\" expand=\"block\">\n                                    Login\n                                </ion-button>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </ion-grid>\n            </form>\n        </ion-slide>\n\n        <!-- ------------------------------------------------------------- -->\n\n        <ion-slide>\n            <ion-grid fixed>\n                <ion-row>\n                    <ion-col>\n                        <img src=\"/assets/img/soterosport-logo.png\" />\n                    </ion-col>\n                </ion-row>\n\n                <!-- REGISTRAR USUARIO -->\n\n                <form [formGroup]=\"registerUser\" (ngSubmit)=\"register()\">\n                    <div class=\"container\">\n                        <ion-row>\n                            <ion-col>\n                                <ion-list>\n                                    <!-- Email -->\n                                    <ion-item class=\"roundedInput\">\n                                        <ion-label position=\"floating\">Email</ion-label>\n                                        <ion-input formControlName=\"email\" type=\"email\" placeholder=\"soterosport@ejemplo...\" required>\n                                        </ion-input>\n                                    </ion-item>\n\n                                    <!-- Nombre -->\n                                    <ion-item class=\"roundedInput\">\n                                        <ion-label position=\"floating\">Nombre</ion-label>\n                                        <ion-input formControlName=\"name\" type=\"text\" required autocapitalize>\n                                        </ion-input>\n                                    </ion-item>\n\n                                    <!-- Contraseña -->\n                                    <ion-item class=\"roundedInput\">\n                                        <ion-label position=\"floating\">Contraseña</ion-label>\n                                        <ion-input formControlName=\"password\" type=\"password\" required></ion-input>\n                                    </ion-item>\n\n                                    <!-- Confirmar contraseña -->\n                                    <ion-item class=\"roundedInput\">\n                                        <ion-label position=\"floating\">Confirmar contraseña</ion-label>\n                                        <ion-input [(ngModel)]=\"password2\" [ngModelOptions]=\"{standalone: true}\" type=\"password\" required></ion-input>\n                                    </ion-item>\n                                </ion-list>\n                            </ion-col>\n                        </ion-row>\n                        <!-- *ngIf=\"registerUser.get('password').valid\" -->\n                        <div class=\"ion-margin-bottom\">\n                            <ion-item lines=\"none\" style=\"margin: 0px 0px 0px 8px\">\n                                <ion-label color=\"medium\"><strong>Seleccione avatar</strong></ion-label>\n                            </ion-item>\n\n                            <app-avatar-select (avatarSelect)=\"avatar = $event\"></app-avatar-select>\n                        </div>\n\n                        <!-- Botón de crear usuario -->\n                        <ion-row>\n                            <ion-col>\n                                <ion-button type=\"submit\" color=\"soterosport-yellow\" expand=\"block\">\n                                    Crear usuario\n                                </ion-button>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </form>\n            </ion-grid>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n\n<!-- Footer -->\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-row>\n            <div class=\"container\">\n                <ion-col *ngIf=\"slideNgIf === 1\">\n                    <!-- Botón ir al login -->\n                    <ion-button expand=\"block\" fill=\"outline\" color=\"tertiary\" (click)=\"showLogin()\" color=\"soterosport-blue\">\n                        Login\n                    </ion-button>\n                </ion-col>\n\n                <!-- Botón ir al registro -->\n                <ion-col *ngIf=\"slideNgIf === 0\">\n                    <ion-button expand=\"block\" fill=\"outline\" color=\"tertiary\" (click)=\"showRegister()\" color=\"soterosport-blue\">\n                        Registrarme\n                    </ion-button>\n                </ion-col>\n            </div>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/components.module */ "V/fk");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: myFont;\n  src: url('SFProDisplay-Regular.ttf');\n}\n* {\n  font-family: myFont;\n}\n.mainSlide,\n.mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\nimg {\n  width: 300px;\n}\n.pick-avatar {\n  width: 80px;\n  opacity: 0.8;\n}\n.pick-avatar-selected {\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n.roundedInput {\n  --border-radius: 5px;\n  --border-width: 1.5px;\n  --box-shadow: 2px gray;\n  --highlight-height: 0;\n  --background: #f6dab7;\n  --color: #333336;\n  margin-top: 10px;\n}\n.roundedInput.ion-invalid.item-has-focus {\n  --border-color: var(--ion-color-danger-shade);\n}\n.roundedInput.ion-valid.item-has-focus {\n  --border-color: var(--ion-color-success-shade);\n}\n.roundedInput.ion-invalid.ion-dirty {\n  --border-color: var(--ion-color-danger-shade);\n}\n.roundedInput.ion-valid.ion-dirty {\n  --border-color: var(--ion-color-success-shade);\n}\n.container {\n  width: 320px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7QUFDRjtBQUNBO0VBQ0UsbUJBQUE7QUFDRjtBQUNBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFRjtBQUNBO0VBQ0UsK0JBQUE7RUFDQSxxQkFBQTtBQUVGO0FBQ0E7RUFFRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0E7RUFDRSw2Q0FBQTtBQUVGO0FBQUE7RUFDRSw4Q0FBQTtBQUdGO0FBREE7RUFDRSw2Q0FBQTtBQUlGO0FBRkE7RUFDRSw4Q0FBQTtBQUtGO0FBSEE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU1GIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogbXlGb250O1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9zZnByby9TRlByb0Rpc3BsYXktUmVndWxhci50dGZcIik7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IG15Rm9udDtcbn1cbi5tYWluU2xpZGUsXG4ubWFpblNsaWRlIGlvbi1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLnBpY2stYXZhdGFyIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLnBpY2stYXZhdGFyLXNlbGVjdGVkIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZElucHV0IHtcbiAgLy8gLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3JkZXItd2lkdGg6IDEuNXB4O1xuICAtLWJveC1zaGFkb3c6IDJweCBncmF5O1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZDogI2Y2ZGFiNztcbiAgLS1jb2xvcjogIzMzMzMzNjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5yb3VuZGVkSW5wdXQuaW9uLWludmFsaWQuaXRlbS1oYXMtZm9jdXMge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG59XG4ucm91bmRlZElucHV0Lmlvbi12YWxpZC5pdGVtLWhhcy1mb2N1cyB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG4ucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLmlvbi1kaXJ0eSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbn1cbi5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLmlvbi1kaXJ0eSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map