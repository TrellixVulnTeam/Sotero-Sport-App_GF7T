(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "I5+9":
    /*!**************************************************************!*\
      !*** ./src/app/core/pages/profile/profile-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function I59(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "Y+5V");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "LJwE":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/pages/profile/profile.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function LJwE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- Menu -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"first\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Perfil</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"information-circle-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"ion-margin-bottom\">\n    <ion-card-content class=\"ion-text-center\">\n      <ion-row class=\"top-40\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <img src=\"assets/avatars/{{user.avatar}}\" class=\"img-avatar\" />\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"12\">\n          <ion-label class=\"ion-margin-top\" color=\"soterosport-cream\"\n            ><strong>{{user.name}}</strong></ion-label\n          ></ion-col\n        >\n      </ion-row>\n\n      <ion-label color=\"soterosport-cream\">{{user.email}}</ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <app-avatar-select\n    (avatarSelect)=\"user.avatar = $event\"\n    [currentAvatar]=\"user.avatar\"\n  >\n  </app-avatar-select>\n\n  <form class=\"top-40\" (ngSubmit)=\"update( formUpdate )\" #formUpdate=\"ngForm\">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-label position=\"stacked\">Email</ion-label>\n            <ion-input\n              name=\"email\"\n              type=\"email\"\n              [(ngModel)]=\"user.email\"\n              required\n            ></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Nombre</ion-label>\n            <ion-input\n              name=\"nombre\"\n              type=\"text\"\n              [(ngModel)]=\"user.name\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <!-- Este botón dispara el submit => ( ngSubmit ) = \"update( formUpdate )\" #formUpdate-->\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\">\n          <ion-icon\n            class=\"ion-margin-end\"\n            name=\"checkmark-circle-outline\"\n          ></ion-icon>\n          Actualizar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "NDQB":
    /*!******************************************************!*\
      !*** ./src/app/core/pages/profile/profile.module.ts ***!
      \******************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function NDQB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "I5+9");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "Y+5V");
      /* harmony import */


      var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/components.module */
      "V/fk");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "Y+5V":
    /*!****************************************************!*\
      !*** ./src/app/core/pages/profile/profile.page.ts ***!
      \****************************************************/

    /*! exports provided: ProfilePage */

    /***/
    function Y5V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "LJwE");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "v99S");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/ui.service */
      "8nna");
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      "kmKP");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(userService, uiService) {
          _classCallCheck(this, ProfilePage);

          this.userService = userService;
          this.uiService = uiService;
          this.user = {};
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = this.userService.getUser();
            console.log(this.user);
          } // Actualizar usuario

        }, {
          key: "update",
          value: function update(formUpdate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var updated;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!formUpdate.invalid) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      ;
                      _context.next = 5;
                      return this.userService.updateUser(this.user);

                    case 5:
                      updated = _context.sent;
                      console.info(updated);

                      if (updated) {
                        this.uiService.presentToast('Usuario actualizado correctamente'); // Toast con mensaje de actualizado
                      } else {
                        this.uiService.presentToast('Error al actualizar usuario');
                      }

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "v99S":
    /*!******************************************************!*\
      !*** ./src/app/core/pages/profile/profile.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function v99S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".img-avatar {\n  width: 100px;\n}\n\n.top-40 {\n  margin-top: 10px;\n}\n\nion-card {\n  background-color: #171718;\n  height: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQUVGIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG59XG4udG9wLTQwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE4O1xuICBoZWlnaHQ6IDI4MHB4O1xufVxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map