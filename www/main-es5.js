(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/t0x1cx/Escritorio/Aplicación Final de Curso/Sotero-Sport-App/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "9Xeq":
    /*!**********************************************!*\
      !*** ./src/app/shared/pipes/pipes.module.ts ***!
      \**********************************************/

    /*! exports provided: PipesModule */

    /***/
    function Xeq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dom-sanitizer.pipe */
      "mvKb");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__["DomSanitizerPipe"]],
        exports: [_dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__["DomSanitizerPipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        url: 'https://sotero-sport-backend.herokuapp.com'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "D+VW":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/avatar-select/avatar-select.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AvatarSelectComponent */

    /***/
    function DVW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvatarSelectComponent", function () {
        return AvatarSelectComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_avatar_select_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./avatar-select.component.html */
      "x4+8");
      /* harmony import */


      var _avatar_select_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./avatar-select.component.scss */
      "ke4L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AvatarSelectComponent = /*#__PURE__*/function () {
        function AvatarSelectComponent() {
          _classCallCheck(this, AvatarSelectComponent);

          this.avatarSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.currentAvatar = "userDefault.png";
          this.avatars = [{
            img: 'userDefault.png',
            seleccionado: true
          }, {
            img: 'avatar01.png',
            seleccionado: false
          }, {
            img: 'avatar02.png',
            seleccionado: false
          }, {
            img: 'avatar03.png',
            seleccionado: false
          }, {
            img: 'avatar04.png',
            seleccionado: false
          }, {
            img: 'avatar05.png',
            seleccionado: false
          }, {
            img: 'avatar06.png',
            seleccionado: false
          }, {
            img: 'avatar07.png',
            seleccionado: false
          }, {
            img: 'avatar08.png',
            seleccionado: false
          }, {
            img: 'avatar09.png',
            seleccionado: false
          }];
          this.avatarSlide = {
            slidesPerView: 3.5
          };
        }

        _createClass(AvatarSelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.avatars.forEach(function (av) {
              return av.seleccionado = false;
            });

            var _iterator = _createForOfIteratorHelper(this.avatars),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var avatar = _step.value;

                if (avatar.img === this.currentAvatar) {
                  avatar.seleccionado = true;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } // Avatar seleccionado

        }, {
          key: "avatarSelected",
          value: function avatarSelected(avatar) {
            this.avatars.forEach(function (av) {
              return av.seleccionado = false;
            });
            avatar.seleccionado = true; // Esto manda la imagen del avatar mediante el @Output

            this.avatarSelect.emit(avatar.img);
            console.log(avatar.img);
          }
        }]);

        return AvatarSelectComponent;
      }();

      AvatarSelectComponent.ctorParameters = function () {
        return [];
      };

      AvatarSelectComponent.propDecorators = {
        avatarSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        currentAvatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AvatarSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-avatar-select',
        template: _raw_loader_avatar_select_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_avatar_select_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AvatarSelectComponent);
      /***/
    },

    /***/
    "EdM3":
    /*!*************************************************************!*\
      !*** ./src/app/shared/components/_menu/menu.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function EdM3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIHdpZHRoOiAxMjBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "KiJU":
    /*!*********************************************!*\
      !*** ./src/app/shared/guards/user.guard.ts ***!
      \*********************************************/

    /*! exports provided: UserGuard */

    /***/
    function KiJU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserGuard", function () {
        return UserGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user.service */
      "kmKP");

      var UserGuard = /*#__PURE__*/function () {
        function UserGuard(userService) {
          _classCallCheck(this, UserGuard);

          this.userService = userService;
        } // Métodos para los guards
        //Este guard decide si se pueden cargar elementos secundarios, si todos ls guards devuelven true la navegacion puede continuar.


        _createClass(UserGuard, [{
          key: "canLoad",
          value: function canLoad() {
            return this.userService.validateToken();
          }
        }]);

        return UserGuard;
      }();

      UserGuard.ctorParameters = function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      };

      UserGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserGuard);
      /***/
    },

    /***/
    "KwcL":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function KwcL(module, exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": ["jDxf", 43],
        "./pwa-camera-modal-instance.entry.js": ["37vE", 44],
        "./pwa-camera-modal.entry.js": ["cJxf", 45],
        "./pwa-camera.entry.js": ["eGHz", 46],
        "./pwa-toast.entry.js": ["fHjd", 47]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "KwcL";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "P2gn":
    /*!**************************************************!*\
      !*** ./src/app/shared/services/lists.service.ts ***!
      \**************************************************/

    /*! exports provided: ListsService */

    /***/
    function P2gn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListsService", function () {
        return ListsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user.service */
      "kmKP");

      var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;

      var ListsService = /*#__PURE__*/function () {
        function ListsService(http, userService) {
          _classCallCheck(this, ListsService);

          this.http = http;
          this.userService = userService;
          this.newList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.listPage = 0;
        } // Obtener listas


        _createClass(ListsService, [{
          key: "getLists",
          value: function getLists() {
            var pull = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (pull) {
              this.listPage = 0;
            }

            this.listPage++;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': this.userService.token // Traemos el token del userService

            });
            return this.http.get("".concat(URL, "/lists/?page=").concat(this.listPage), {
              headers: headers
            }); // Hay que pasarle el header aqui IMPORTANTE!!
          } // Crear listas

        }, {
          key: "createdList",
          value: function createdList(list) {
            var _this = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-token': this.userService.token
            });
            return new Promise(function (resolve) {
              _this.http.post("".concat(URL, "/lists"), list, {
                headers: headers
              }).subscribe(function (resp) {
                _this.newList.emit(resp['list']);

                resolve(true);
              });
            });
          } // Borrar listas

        }, {
          key: "deleteList",
          value: function deleteList(listId) {
            var _this2 = this;

            return new Promise(function (resolve) {
              _this2.http["delete"]("".concat(URL, "/lists/delete/").concat(listId)).subscribe(function (resp) {
                if (resp['ok']) {
                  resolve(true);
                  console.log('Lista eliminada correctamente');
                  console.log(resp);
                } else {
                  resolve(false);
                  console.error('Error al eliminar lista');
                }
              });
            });
          } // Actualizar listas

        }, {
          key: "updateList",
          value: function updateList(listId, list) {
            var _this3 = this;

            return new Promise(function (resolve) {
              _this3.http.post("".concat(URL, "/lists/update/").concat(listId), list).subscribe(function (resp) {
                if (resp['ok']) {
                  resolve(true);
                  console.log('Item actualizado correctamente');
                  console.log(resp);
                } else {
                  resolve(false);
                  console.error('Error al actualizar item');
                }
              });
            });
          }
        }]);

        return ListsService;
      }();

      ListsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      };

      ListsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ListsService);
      /***/
    },

    /***/
    "Pdnx":
    /*!***********************************************************!*\
      !*** ./src/app/shared/components/_menu/menu.component.ts ***!
      \***********************************************************/

    /*! exports provided: MenuComponent */

    /***/
    function Pdnx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menu.component.html */
      "rJln");
      /* harmony import */


      var _menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu.component.scss */
      "EdM3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/user.service */
      "kmKP");
      /* harmony import */


      var _services_lists_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/lists.service */
      "P2gn");

      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent(userService, listService) {
          _classCallCheck(this, MenuComponent);

          this.userService = userService;
          this.listService = listService;
        }

        _createClass(MenuComponent, [{
          key: "logout",
          value: function logout() {
            this.listService.listPage = 0;
            this.userService.logout();
          }
        }]);

        return MenuComponent;
      }();

      MenuComponent.ctorParameters = function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _services_lists_service__WEBPACK_IMPORTED_MODULE_5__["ListsService"]
        }];
      };

      MenuComponent.propDecorators = {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MenuComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_back_button_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/services/back-button.service */
      "nAjk");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(backButtonService) {
          _classCallCheck(this, AppComponent);

          this.backButtonService = backButtonService;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            this.backButtonService.init();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _shared_services_back_button_service__WEBPACK_IMPORTED_MODULE_4__["BackButtonService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "V/fk":
    /*!********************************************************!*\
      !*** ./src/app/shared/components/components.module.ts ***!
      \********************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function VFk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _avatar_select_avatar_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./avatar-select/avatar-select.component */
      "D+VW");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./_menu/menu.component */
      "Pdnx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_avatar_select_avatar_select_component__WEBPACK_IMPORTED_MODULE_5__["AvatarSelectComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]],
        exports: [_avatar_select_avatar_select_component__WEBPACK_IMPORTED_MODULE_5__["AvatarSelectComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <app-menu></app-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/components/components.module */
      "V/fk"); // My imports


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "ke4L":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/avatar-select/avatar-select.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function ke4L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pick-avatar {\n  width: 60px;\n  opacity: 0.5;\n}\n\n.pick-avatar-selected {\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2F2YXRhci1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxxQkFBQTtBQUNGIiwiZmlsZSI6ImF2YXRhci1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGljay1hdmF0YXIge1xuICB3aWR0aDogNjBweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ucGljay1hdmF0YXItc2VsZWN0ZWQge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "kmKP":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/user.service.ts ***!
      \*************************************************/

    /*! exports provided: UserService */

    /***/
    function kmKP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;
      var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;

      var UserService = /*#__PURE__*/function () {
        function UserService(http, navCtrl) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.navCtrl = navCtrl;
          this.token = null;
          this.user = {};
        } // Login usuario


        _createClass(UserService, [{
          key: "login",
          value: function login(email, password) {
            var _this4 = this;

            var data = {
              email: email,
              password: password
            }; // Mandamos el correo y el password

            return new Promise(function (resolve) {
              _this4.http.post("".concat(URL, "/user/login"), data).subscribe(function (resp) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          console.log(resp);

                          if (!resp['ok']) {
                            _context.next = 7;
                            break;
                          }

                          _context.next = 4;
                          return this.saveToken(resp['token']);

                        case 4:
                          // Async para que espera a guardar el token
                          resolve(true);
                          _context.next = 10;
                          break;

                        case 7:
                          this.token = null;
                          Storage.clear();
                          resolve(false);

                        case 10:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            });
          } // Logout cerrar sesión usuario

        }, {
          key: "logout",
          value: function logout() {
            this.token = null; // Primero limpiamos el TOKEN.

            this.user = null; // Limpiamos también el usuario.

            Storage.clear(); // Limpiamos el storage donde almacenamos el token.

            this.navCtrl.navigateRoot('/login', {
              animated: true
            }); // Volvemos al login.
          } // Registro de usuario

        }, {
          key: "register",
          value: function register(user) {
            var _this5 = this;

            return new Promise(function (resolve) {
              _this5.http.post("".concat(URL, "/user/create"), user).subscribe(function (resp) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          console.log(resp);

                          if (!resp['ok']) {
                            _context2.next = 7;
                            break;
                          }

                          _context2.next = 4;
                          return this.saveToken(resp['token']);

                        case 4:
                          resolve(true);
                          _context2.next = 10;
                          break;

                        case 7:
                          this.token = null;
                          Storage.clear();
                          resolve(false);

                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });
            });
          } // Obtener información del usuario ----------------------------------------------

        }, {
          key: "getUser",
          value: function getUser() {
            if (!this.user) {
              this.validateToken();
            }

            return Object.assign({}, this.user); // Se destruye la relación, para generar un nuevo objeto
          } // Guarda token en capacitorStorage

        }, {
          key: "saveToken",
          value: function saveToken(token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.token = token; // Recibimos el token

                      _context3.next = 3;
                      return Storage.set({
                        key: 'token',
                        value: token
                      });

                    case 3:
                      _context3.next = 5;
                      return this.validateToken();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // Cargar el token

        }, {
          key: "loadToken",
          value: function loadToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var token;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return Storage.get({
                        key: 'token'
                      });

                    case 2:
                      token = _context4.sent;
                      this.token = token.value;
                      console.log(this.token);

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // Validar el token ---------------------------------------------

        }, {
          key: "validateToken",
          value: function validateToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadToken();

                    case 2:
                      if (this.token) {
                        _context5.next = 5;
                        break;
                      }

                      this.navCtrl.navigateRoot('/login');
                      return _context5.abrupt("return", Promise.resolve(false));

                    case 5:
                      return _context5.abrupt("return", new Promise(function (resolve) {
                        // Token
                        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                          'x-token': _this6.token
                        });

                        _this6.http.get("".concat(URL, "/user/"), {
                          headers: headers
                        }) // Ruta del usuario
                        .subscribe(function (resp) {
                          if (resp['ok']) {
                            _this6.user = resp['user'];
                            resolve(true);
                          } else {
                            _this6.navCtrl.navigateRoot('/login');

                            resolve(false);
                          }
                        });
                      }));

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // ---------------------------------------------------------------
          // Actualizar usuario --------------------------------------------

        }, {
          key: "updateUser",
          value: function updateUser(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this7 = this;

              var headers;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'x-token': this.token
                      });
                      return _context6.abrupt("return", new Promise(function (resolve) {
                        _this7.http.post("".concat(URL, "/user/update"), user, {
                          headers: headers
                        }).subscribe(function (resp) {
                          if (resp['ok']) {
                            _this7.saveToken(resp['token']);

                            resolve(true);
                            console.log('Usuario actualizado correctamente');
                            console.log(resp);
                          } else {
                            resolve(false);
                            console.error('Error al actualizar usuario');
                          }
                        });
                      }));

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserService);
      /***/
    },

    /***/
    "mvKb":
    /*!****************************************************!*\
      !*** ./src/app/shared/pipes/dom-sanitizer.pipe.ts ***!
      \****************************************************/

    /*! exports provided: DomSanitizerPipe */

    /***/
    function mvKb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomSanitizerPipe", function () {
        return DomSanitizerPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var DomSanitizerPipe = /*#__PURE__*/function () {
        function DomSanitizerPipe(domSanitizer) {
          _classCallCheck(this, DomSanitizerPipe);

          this.domSanitizer = domSanitizer;
        }

        _createClass(DomSanitizerPipe, [{
          key: "transform",
          value: function transform(img) {
            var domImg = "background-image: url('".concat(img, "')");
            return this.domSanitizer.bypassSecurityTrustStyle(domImg);
          }
        }]);

        return DomSanitizerPipe;
      }();

      DomSanitizerPipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      DomSanitizerPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'domSanitizer'
      })], DomSanitizerPipe);
      /***/
    },

    /***/
    "nAjk":
    /*!********************************************************!*\
      !*** ./src/app/shared/services/back-button.service.ts ***!
      \********************************************************/

    /*! exports provided: BackButtonService */

    /***/
    function nAjk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackButtonService", function () {
        return BackButtonService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BackButtonService = /*#__PURE__*/function () {
        function BackButtonService(navControler, platform, router, alertCtrl) {
          _classCallCheck(this, BackButtonService);

          this.navControler = navControler;
          this.platform = platform;
          this.router = router;
          this.alertCtrl = alertCtrl;
        }

        _createClass(BackButtonService, [{
          key: "init",
          value: function init() {
            var _this8 = this;

            this.platform.backButton.subscribeWithPriority(10, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var currentUrl;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        currentUrl = this.router.url;

                        if (currentUrl === "/main/tabs/lists") {
                          this.exitAlert("¿Desea salir de la app?", function () {
                            navigator['app'].exitApp();
                          });
                        } else if (currentUrl === "/login") {
                          this.exitAlert("¿Desea salir de la app?", function () {
                            navigator['app'].exitApp();
                          });
                        } else {
                          this.navControler.back();
                        }

                      case 2:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            });
          }
        }, {
          key: "exitAlert",
          value: function exitAlert(message, action) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertCtrl.create({
                        message: message,
                        buttons: [{
                          text: "Cancelar",
                          role: "cancel"
                        }, {
                          text: "Salir",
                          handler: action
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return BackButtonService;
      }();

      BackButtonService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      BackButtonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], BackButtonService);
      /***/
    },

    /***/
    "rJln":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/_menu/menu.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rJln(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n  <ion-header class=\"ion-no-border\">\n    <ion-row style=\"margin: 10px 0px 0px 15px\">\n      <ion-col>\n        <img src=\"/assets/img/soterosport-logo.png\" />\n      </ion-col>\n    </ion-row>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-menu-toggle>\n        <ion-item [routerLink]=\"'/main/tabs/lists'\" detail>\n          <ion-icon\n            name=\"clipboard-outline\"\n            class=\"ion-margin-end\"\n            color=\"soterosport-blue\"\n            slot=\"start\"\n          ></ion-icon>\n          Entrenamientos\n        </ion-item>\n        <ion-item [routerLink]=\"'/main/tabs/calendar'\" detail>\n          <ion-icon\n            name=\"calendar-number-outline\"\n            class=\"ion-margin-end\"\n            color=\"soterosport-blue\"\n            slot=\"start\"\n          ></ion-icon>\n          Calendario\n        </ion-item>\n        <ion-item [routerLink]=\"'/main/tabs/profile'\" detail>\n          <ion-icon\n            name=\"person-outline\"\n            class=\"ion-margin-end\"\n            color=\"soterosport-blue\"\n            slot=\"start\"\n          ></ion-icon>\n          Perfil\n        </ion-item>\n        <ion-item (click)=\"logout()\" detail>\n          <ion-icon\n            class=\"ion-margin-end\"\n            slot=\"start\"\n            color=\"soterosport-blue\"\n            name=\"log-out-outline\"\n          ></ion-icon>\n          Salir\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n  </ion-content>\n  <ion-footer> </ion-footer>\n</ion-menu>\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_guards_user_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/guards/user.guard */
      "KiJU");

      var routes = [// Login
      {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, // Core
      {
        path: 'main',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | core-pages-tabs-tabs-module */
          "core-pages-tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./core/pages/tabs/tabs.module */
          "dl94")).then(function (m) {
            return m.TabsPageModule;
          });
        },
        canLoad: [_shared_guards_user_guard__WEBPACK_IMPORTED_MODULE_3__["UserGuard"]]
      }, // Añadir listas
      {
        path: 'add/:listId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | core-pages-add-edit-add-edit-module */
          [__webpack_require__.e("common"), __webpack_require__.e("core-pages-add-edit-add-edit-module")]).then(__webpack_require__.bind(null,
          /*! ./core/pages/add-edit/add-edit.module */
          "O4fp")).then(function (m) {
            return m.AddEditPageModule;
          });
        }
      }, // Añadir items
      {
        path: 'edit/:listId/:itemId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | core-pages-add-edit-add-edit-module */
          [__webpack_require__.e("common"), __webpack_require__.e("core-pages-add-edit-add-edit-module")]).then(__webpack_require__.bind(null,
          /*! ./core/pages/add-edit/add-edit.module */
          "O4fp")).then(function (m) {
            return m.AddEditPageModule;
          });
        }
      }, // Timer
      {
        path: 'timer/:itemId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | core-pages-timer-timer-module */
          [__webpack_require__.e("common"), __webpack_require__.e("core-pages-timer-timer-module")]).then(__webpack_require__.bind(null,
          /*! ./core/pages/timer/timer.module */
          "yVGo")).then(function (m) {
            return m.TimerPageModule;
          });
        }
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main/tabs/lists'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          onSameUrlNavigation: 'reload'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "x4+8":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/avatar-select/avatar-select.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x48(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row>\n  <ion-col>\n    <ion-slides [options]=\"avatarSlide\">\n      <ion-slide *ngFor=\"let avatar of avatars\">\n        <ion-img\n          class=\"pick-avatar\"\n          src=\"/assets/avatars/{{ avatar.img }}\"\n          [ngClass]=\"{ 'pick-avatar-selected': avatar.seleccionado }\"\n          (click)=\"avatarSelected(avatar)\"\n        >\n        </ion-img>\n      </ion-slide>\n    </ion-slides>\n  </ion-col>\n</ion-row>\n\n<!-- <ion-row>\n  <ion-col class=\"ion-text-center\">\n    <h3>Avatars</h3>\n  </ion-col>\n</ion-row> -->\n";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      "2Zi2");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      }); // Call the element loader after the platform has been bootstrapped

      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map