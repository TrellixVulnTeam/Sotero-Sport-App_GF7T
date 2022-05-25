(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-pages-add-edit-add-edit-module"], {
    /***/
    "DGle":
    /*!****************************************************************!*\
      !*** ./src/app/core/pages/add-edit/add-edit-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: AddEditPageRoutingModule */

    /***/
    function DGle(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditPageRoutingModule", function () {
        return AddEditPageRoutingModule;
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


      var _add_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-edit.page */
      "j08m");

      var routes = [{
        path: '',
        component: _add_edit_page__WEBPACK_IMPORTED_MODULE_3__["AddEditPage"]
      }];

      var AddEditPageRoutingModule = function AddEditPageRoutingModule() {
        _classCallCheck(this, AddEditPageRoutingModule);
      };

      AddEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddEditPageRoutingModule);
      /***/
    },

    /***/
    "O4fp":
    /*!********************************************************!*\
      !*** ./src/app/core/pages/add-edit/add-edit.module.ts ***!
      \********************************************************/

    /*! exports provided: AddEditPageModule */

    /***/
    function O4fp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditPageModule", function () {
        return AddEditPageModule;
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


      var _add_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-edit-routing.module */
      "DGle");
      /* harmony import */


      var _add_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-edit.page */
      "j08m");

      var AddEditPageModule = function AddEditPageModule() {
        _classCallCheck(this, AddEditPageModule);
      };

      AddEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddEditPageRoutingModule"]],
        declarations: [_add_edit_page__WEBPACK_IMPORTED_MODULE_6__["AddEditPage"]]
      })], AddEditPageModule);
      /***/
    },

    /***/
    "OHMk":
    /*!********************************************************!*\
      !*** ./src/app/core/pages/add-edit/add-edit.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function OHMk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: myFont;\n  src: url('SFProDisplay-Semibold.ttf');\n}\n* {\n  font-family: myFont;\n}\n.mInput {\n  font-size: 1.5em;\n  margin-bottom: 10px;\n}\n.rep {\n  margin-left: 148px;\n}\nspan {\n  color: #b8a990;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FkZC1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EscUNBQUE7QUFDRjtBQUNBO0VBQ0UsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiYWRkLWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBteUZvbnQ7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3NmcHJvL1NGUHJvRGlzcGxheS1TZW1pYm9sZC50dGZcIik7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IG15Rm9udDtcbn1cblxuLm1JbnB1dCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5yZXAge1xuICBtYXJnaW4tbGVmdDogMTQ4cHg7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogI2I4YTk5MDtcbn1cblxuLy8gaW9uLWNhcmQtaGVhZGVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2M0MTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyB9XG4vLyBpb24taXRlbSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMzYzNjNDE7XG4vLyB9XG4iXX0= */";
      /***/
    },

    /***/
    "fJ5Q":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/pages/add-edit/add-edit.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function fJ5Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-label *ngIf=\"item.title.length < 1\" color=\"soterosport-cream\"\n      >Nuevo ejercicio</ion-label\n    >\n    <ion-label>{{item.title}}</ion-label>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" menu=\"first\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-card style=\"margin-top: 30px\">\n    <!-- --------------------------------------------------------------------------------------- -->\n    <!-- ------------------------------------ TÍTULO ------------------------------------------- -->\n\n    <form (ngSubmit)=\"createdItem(formAddEdit)\" #formAddEdit=\"ngForm\">\n      <ion-item>\n        <ion-input\n          [(ngModel)]=\"item.title\"\n          name=\"title\"\n          type=\"text\"\n          autocapitalize\n          required\n          clearInput\n          placeholder=\"Ejercicio\"\n        ></ion-input>\n        <ion-icon color=\"soterosport-blue\" slot=\"end\" name=\"bookmark\"></ion-icon>\n      </ion-item>\n\n      <!-- ------------------------------------------------------------------------------------- -->\n      <!-- -------------------------------- DESCRIPCIÓN ---------------------------------------- -->\n\n      <ion-item>\n        <ion-input\n          [(ngModel)]=\"item.description\"\n          name=\"description\"\n          type=\"text\"\n          autocapitalize\n          clearInput\n          required\n          placeholder=\"Descripción\"\n        ></ion-input>\n        <ion-icon\n          color=\"soterosport-darkcream\"\n          slot=\"end\"\n          name=\"clipboard\"\n        ></ion-icon>\n      </ion-item>\n\n      <!-- ------------------------------------------------------------------------------------- -->\n      <!-- -------------------------------- PREPARACIÓN ---------------------------------------- -->\n\n      <ion-item lines=\"none\">\n        <span class=\"ion-no-margin\">Preparación</span>\n      </ion-item>\n      <ion-item>\n        <ion-row>\n          <!-- MINUTOS -->\n          <ion-col size=\"6\">\n            <ion-row>\n              <ion-button (click)=\"removeTime('preparationMin')\" fill=\"outline\">\n                <ion-icon name=\"remove-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-input\n                class=\"ion-text-center\"\n                [(ngModel)]=\"preparationMin\"\n                [ngModelOptions]=\"{standalone: true}\"\n                type=\"number\"\n                disabled\n              ></ion-input\n              ><ion-button (click)=\"addTime('preparationMin')\" fill=\"outline\">\n                <ion-icon\n                  name=\"add-outline\"\n                  slot=\"icon-only\"\n                ></ion-icon> </ion-button></ion-row\n          ></ion-col>\n\n          <!-- SEGUNDOS -->\n          <ion-col size=\"6\">\n            <ion-row>\n              <ion-button (click)=\"removeTime('preparationSec')\" fill=\"outline\">\n                <ion-icon name=\"remove-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-input\n                class=\"ion-text-center\"\n                [(ngModel)]=\"preparationSec\"\n                [ngModelOptions]=\"{standalone: true}\"\n                type=\"number\"\n                disabled\n              ></ion-input\n              ><ion-button (click)=\"addTime('preparationSec')\" fill=\"outline\">\n                <ion-icon\n                  name=\"add-outline\"\n                  slot=\"icon-only\"\n                ></ion-icon> </ion-button></ion-row\n          ></ion-col>\n        </ion-row>\n      </ion-item>\n\n      <!-- ------------------------------------------------------------------------------------- -->\n      <!-- ----------------------------------- TIEMPO ------------------------------------------ -->\n\n      <ion-item lines=\"none\">\n        <span class=\"ion-no-margin\">Tiempo</span>\n      </ion-item>\n\n      <ion-item>\n        <ion-row>\n          <!-- MINUTOS -->\n          <ion-col size=\"6\">\n            <ion-row>\n              <ion-button (click)=\"removeTime('timeMin')\" fill=\"outline\">\n                <ion-icon name=\"remove-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-input\n                class=\"ion-text-center\"\n                [(ngModel)]=\"timeMin\"\n                [ngModelOptions]=\"{standalone: true}\"\n                type=\"number\"\n                disabled\n              ></ion-input\n              ><ion-button (click)=\"addTime('timeMin')\" fill=\"outline\">\n                <ion-icon\n                  name=\"add-outline\"\n                  slot=\"icon-only\"\n                ></ion-icon> </ion-button></ion-row\n          ></ion-col>\n\n          <!-- SEGUNDOS -->\n          <ion-col size=\"6\">\n            <ion-row>\n              <ion-button (click)=\"removeTime('timeSec')\" fill=\"outline\">\n                <ion-icon name=\"remove-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-input\n                class=\"ion-text-center\"\n                [(ngModel)]=\"timeSec\"\n                [ngModelOptions]=\"{standalone: true}\"\n                type=\"number\"\n                disabled\n              ></ion-input\n              ><ion-button (click)=\"addTime('timeSec')\" fill=\"outline\">\n                <ion-icon\n                  name=\"add-outline\"\n                  slot=\"icon-only\"\n                ></ion-icon> </ion-button></ion-row\n          ></ion-col>\n        </ion-row>\n      </ion-item>\n\n      <!-- ------------------------------------------------------------------------------------- -->\n      <!-- --------------------------------- REPETICIONES -------------------------------------- -->\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <!-- Título -->\n          <ion-item lines=\"none\">\n            <span class=\"ion-no-margin\">Repeticiones</span>\n          </ion-item>\n          <!-- Input -->\n          <ion-item>\n            <ion-row>\n              <ion-button (click)=\"removeTime('repeats')\" fill=\"outline\">\n                <ion-icon name=\"remove-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-input\n                class=\"ion-text-center\"\n                [(ngModel)]=\"item.repeats\"\n                name=\"repeats\"\n                type=\"number\"\n                disabled\n              >\n              </ion-input\n              ><ion-button (click)=\"addTime('repeats')\" fill=\"outline\">\n                <ion-icon\n                  name=\"add-outline\"\n                  slot=\"icon-only\"\n                ></ion-icon> </ion-button\n            ></ion-row>\n          </ion-item>\n        </ion-col>\n\n        <!-- --------------------------------------------------------------------------------- -->\n        <!-- ----------------------------------- SERIES -------------------------------------- -->\n\n        <ion-col size=\"6\">\n          <!-- Título -->\n          <ion-item lines=\"none\">\n            <span>Series</span>\n          </ion-item>\n          <!-- Input -->\n          <ion-item>\n            <ion-row>\n              <ion-button (click)=\"removeTime('sets')\" fill=\"outline\">\n                <ion-icon name=\"remove-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-input\n                class=\"ion-text-center\"\n                [(ngModel)]=\"item.sets\"\n                name=\"sets\"\n                type=\"number\"\n                disabled\n              >\n              </ion-input\n              ><ion-button (click)=\"addTime('sets')\" fill=\"outline\">\n                <ion-icon\n                  name=\"add-outline\"\n                  slot=\"icon-only\"\n                ></ion-icon> </ion-button\n            ></ion-row>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- ------------------------------------------------------------------------------------- -->\n      <!-- -------------------------------- DESCANSO REPETICIONES ------------------------------ -->\n\n      <ion-item lines=\"none\">\n        <span class=\"ion-no-margin\">Descanso repeticiones</span>\n      </ion-item>\n\n      <ion-item>\n        <ion-row>\n          <!-- MINUTOS -->\n          <ion-col size=\"6\">\n            <ion-row>\n              <ion-button (click)=\"removeTime('restRepsMin')\" fill=\"outline\">\n                <ion-icon name=\"remove-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-input\n                class=\"ion-text-center\"\n                [(ngModel)]=\"restRepsMin\"\n                [ngModelOptions]=\"{standalone: true}\"\n                type=\"number\"\n                disabled\n              ></ion-input\n              ><ion-button (click)=\"addTime('restRepsMin')\" fill=\"outline\">\n                <ion-icon\n                  name=\"add-outline\"\n                  slot=\"icon-only\"\n                ></ion-icon> </ion-button></ion-row\n          ></ion-col>\n\n          <!-- SEGUNDOS -->\n          <ion-col size=\"6\">\n            <ion-row>\n              <ion-button (click)=\"removeTime('restRepsSec')\" fill=\"outline\">\n                <ion-icon name=\"remove-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-input\n                class=\"ion-text-center\"\n                [(ngModel)]=\"restRepsSec\"\n                [ngModelOptions]=\"{standalone: true}\"\n                type=\"number\"\n                disabled\n              ></ion-input\n              ><ion-button (click)=\"addTime('restRepsSec')\" fill=\"outline\">\n                <ion-icon\n                  name=\"add-outline\"\n                  slot=\"icon-only\"\n                ></ion-icon> </ion-button></ion-row\n          ></ion-col>\n        </ion-row>\n      </ion-item>\n\n      <!-- ------------------------------------------------------------------------------------- -->\n      <!-- --------------------------------DESCANSO SERIES ------------------------------------- -->\n\n      <ion-item lines=\"none\">\n        <span class=\"ion-no-margin\">Descanso series</span>\n      </ion-item>\n\n      <ion-item>\n        <ion-row>\n          <!-- MINUTOS -->\n          <ion-col size=\"6\">\n            <ion-row>\n              <ion-button (click)=\"removeTime('restSetsMin')\" fill=\"outline\">\n                <ion-icon name=\"remove-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-input\n                class=\"ion-text-center\"\n                [(ngModel)]=\"restSetsMin\"\n                [ngModelOptions]=\"{standalone: true}\"\n                type=\"number\"\n                disabled\n              ></ion-input\n              ><ion-button (click)=\"addTime('restSetsMin')\" fill=\"outline\">\n                <ion-icon\n                  name=\"add-outline\"\n                  slot=\"icon-only\"\n                ></ion-icon> </ion-button></ion-row\n          ></ion-col>\n\n          <!-- SEGUNDOS -->\n          <ion-col size=\"6\">\n            <ion-row>\n              <ion-button (click)=\"removeTime('restSetsSec')\" fill=\"outline\">\n                <ion-icon name=\"remove-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-input\n                class=\"ion-text-center\"\n                [(ngModel)]=\"restSetsSec\"\n                [ngModelOptions]=\"{standalone: true}\"\n                type=\"number\"\n                disabled\n              ></ion-input\n              ><ion-button (click)=\"addTime('restSetsSec')\" fill=\"outline\">\n                <ion-icon\n                  name=\"add-outline\"\n                  slot=\"icon-only\"\n                ></ion-icon> </ion-button></ion-row\n          ></ion-col>\n        </ion-row>\n      </ion-item>\n\n      <!-- ------------------------------------------------------------------------------------- -->\n      <!-- ------------------------------------ BOTONES ---------------------------------------- -->\n\n      <!-- Botón guardar -->\n      <ion-button\n        *ngIf=\"buttonStatus === 'create'\"\n        type=\"submit\"\n        [disabled]=\"\n        (item.title.length &&\n        item.description.length &&\n        (preparationMin || preparationSec) &&\n        (restSetsMin || restSetsSec) &&\n        (restRepsMin || restRepsSec) &&\n        (timeMin || timeSec) &&\n        item.sets &&\n        item.repeats ) < 1\"\n        class=\"ion-margin\"\n        color=\"soterosport-yellow\"\n        expand=\"block\"\n      >\n        <ion-icon slot=\"end\" name=\"folder-open\"></ion-icon>\n        Guardar\n      </ion-button>\n\n      <ion-button\n        *ngIf=\"buttonStatus === 'update'\"\n        type=\"submit\"\n        [disabled]=\"item.title.length < 1\"\n        class=\"ion-margin\"\n        color=\"soterosport-yellow\"\n        expand=\"block\"\n      >\n        <ion-icon slot=\"end\" name=\"folder-open\"></ion-icon>\n        Actualizar\n      </ion-button>\n    </form>\n  </ion-card>\n</ion-content>\n\n<!-- Footer con los botones -->\n<ion-footer class=\"ion-text-center\"> </ion-footer>\n";
      /***/
    },

    /***/
    "j08m":
    /*!******************************************************!*\
      !*** ./src/app/core/pages/add-edit/add-edit.page.ts ***!
      \******************************************************/

    /*! exports provided: AddEditPage */

    /***/
    function j08m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditPage", function () {
        return AddEditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-edit.page.html */
      "fJ5Q");
      /* harmony import */


      var _add_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-edit.page.scss */
      "OHMk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/services/items.service */
      "V8OY");
      /* harmony import */


      var _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/services/ui.service */
      "8nna");

      var AddEditPage = /*#__PURE__*/function () {
        function AddEditPage(itemsService, actvdRoute, uiService, route) {
          _classCallCheck(this, AddEditPage);

          this.itemsService = itemsService;
          this.actvdRoute = actvdRoute;
          this.uiService = uiService;
          this.route = route;
          this.item = {
            title: '',
            description: '',
            created: null,
            completed: false,
            preparation: null,
            sets: 2,
            time: null,
            restSets: null,
            repeats: 2,
            restReps: null,
            totalTime: null,
            list: null
          }; // Nubers

          this.preparationSec = 0;
          this.preparationMin = 0;
          this.timeSec = 0;
          this.timeMin = 0;
          this.restRepsSec = 0;
          this.restRepsMin = 0;
          this.restSetsSec = 0;
          this.restSetsMin = 0;
          this.date = new Date().toISOString();
        }

        _createClass(AddEditPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.listId = this.actvdRoute.snapshot.paramMap.get('listId');
            this.itemId = this.actvdRoute.snapshot.paramMap.get('itemId');

            if (this.itemId !== null) {
              this.buttonStatus = 'update';
              this.itemsService.getItemById(this.itemId).subscribe(function (resp) {
                var rItem = resp.items[0];
                var load = _this.item = rItem;
                _this.preparationMin = Math.trunc(rItem.preparation / 60);
                _this.preparationSec = rItem.preparation %= 60;
                _this.timeMin = Math.trunc(rItem.time / 60);
                _this.timeSec = rItem.time %= 60;
                _this.restRepsMin = Math.trunc(rItem.restReps / 60);
                _this.restRepsSec = rItem.restReps %= 60;
                _this.restSetsMin = Math.trunc(rItem.restSets / 60);
                _this.restSetsSec = rItem.restSets %= 60;

                if (load) {
                  _this.load = true;
                }
              });
            } else {
              this.buttonStatus = 'create';
            }
          }
        }, {
          key: "addTime",
          value: function addTime(option) {
            switch (option) {
              case 'preparationMin':
                if (this.preparationMin === 59) {
                  this.preparationMin = 0;
                } else {
                  this.preparationMin++;
                }

                break;

              case 'preparationSec':
                if (this.preparationSec === 59) {
                  this.preparationSec = 0;
                } else {
                  this.preparationSec++;
                }

                break;

              case 'timeMin':
                if (this.timeMin === 59) {
                  this.timeMin = 0;
                } else {
                  this.timeMin++;
                }

                break;

              case 'timeSec':
                if (this.timeSec === 59) {
                  this.timeSec = 0;
                } else {
                  this.timeSec++;
                }

                break;

              case 'restSetsMin':
                if (this.restSetsMin === 59) {
                  this.restSetsMin = 0;
                } else {
                  this.restSetsMin++;
                }

                break;

              case 'restSetsSec':
                if (this.restSetsSec === 59) {
                  this.restSetsSec = 0;
                } else {
                  this.restSetsSec++;
                }

                break;

              case 'restRepsMin':
                if (this.restRepsMin === 59) {
                  this.restRepsMin = 0;
                } else {
                  this.restRepsMin++;
                }

                break;

              case 'restRepsSec':
                if (this.restRepsSec === 59) {
                  this.restRepsSec = 0;
                } else {
                  this.restRepsSec++;
                }

                break;

              case 'repeats':
                if (this.item.repeats === 100) {
                  this.item.repeats = 2;
                } else {
                  this.item.repeats++;
                }

                break;

              case 'sets':
                if (this.item.sets === 100) {
                  this.item.sets = 2;
                } else {
                  this.item.sets++;
                }

                break;

              default:
                break;
            }
          }
        }, {
          key: "removeTime",
          value: function removeTime(option) {
            switch (option) {
              case 'preparationMin':
                if (this.preparationMin === 0) {
                  this.preparationMin = 59;
                } else {
                  this.preparationMin--;
                }

                break;

              case 'preparationSec':
                if (this.preparationSec === 0) {
                  this.preparationSec = 59;
                } else {
                  this.preparationSec--;
                }

                break;

              case 'timeMin':
                if (this.timeMin === 0) {
                  this.timeMin = 59;
                } else {
                  this.timeMin--;
                }

                break;

              case 'timeSec':
                if (this.timeSec === 0) {
                  this.timeSec = 59;
                } else {
                  this.timeSec--;
                }

                break;

              case 'restSetsMin':
                if (this.restSetsMin === 0) {
                  this.restSetsMin = 59;
                } else {
                  this.restSetsMin--;
                }

                break;

              case 'restSetsSec':
                if (this.restSetsSec === 0) {
                  this.restSetsSec = 59;
                } else {
                  this.restSetsSec--;
                }

                break;

              case 'restRepsMin':
                if (this.restRepsMin === 0) {
                  this.restRepsMin = 59;
                } else {
                  this.restRepsMin--;
                }

                break;

              case 'restRepsSec':
                if (this.restRepsSec === 0) {
                  this.restRepsSec = 59;
                } else {
                  this.restRepsSec--;
                }

                break;

              case 'repeats':
                if (this.item.repeats === 2) {
                  this.item.repeats = 100;
                } else {
                  this.item.repeats--;
                }

                break;

              case 'sets':
                if (this.item.sets === 2) {
                  this.item.sets = 100;
                } else {
                  this.item.sets--;
                }

                break;

              default:
                break;
            }
          } // Crear Item y actualizar item

        }, {
          key: "createdItem",
          value: function createdItem(formAddEdit) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var updated, valid;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.preparationMin != 0) {
                        this.item.preparation = this.preparationSec + this.preparationMin * 60;
                      } else {
                        this.item.preparation = this.preparationSec;
                      }

                      if (this.restSetsMin != 0) {
                        this.item.restSets = this.restSetsSec + this.restSetsMin * 60;
                      } else {
                        this.item.restSets = this.restSetsSec;
                      }

                      if (this.timeMin != 0) {
                        this.item.time = this.timeSec + this.timeMin * 60;
                      } else {
                        this.item.time = this.timeSec;
                      }

                      if (this.restRepsMin != 0) {
                        this.item.restReps = this.restRepsSec + this.restRepsMin * 60;
                      } else {
                        this.item.restReps = this.restRepsSec;
                      }

                      if (!(this.load === true)) {
                        _context.next = 15;
                        break;
                      }

                      if (!formAddEdit.invalid) {
                        _context.next = 7;
                        break;
                      }

                      return _context.abrupt("return");

                    case 7:
                      ;
                      _context.next = 10;
                      return this.itemsService.updateItem(this.listId, this.itemId, this.item);

                    case 10:
                      updated = _context.sent;
                      console.info(updated);

                      if (updated) {
                        this.route.navigate(['/main/tabs/items/' + this.listId]).then(function () {
                          window.location.reload();
                        });
                      } else {
                        this.uiService.presentToast('Error al actualizar item');
                      }

                      _context.next = 22;
                      break;

                    case 15:
                      if (!formAddEdit.invalid) {
                        _context.next = 17;
                        break;
                      }

                      return _context.abrupt("return");

                    case 17:
                      console.log(this.item); // Total Time

                      _context.next = 20;
                      return this.itemsService.createdItem(this.item, this.listId);

                    case 20:
                      valid = _context.sent;

                      if (valid) {
                        // Volvemos a la lista de items
                        this.route.navigateByUrl("/main/tabs/items/".concat(this.listId));
                        console.log('Mandamos el listId respuesta --> ' + this.listId); // Purgamos el objeto para dejarlo vacio

                        this.item = {
                          title: '',
                          description: '',
                          created: null,
                          completed: false,
                          preparation: null,
                          sets: null,
                          time: null,
                          restSets: null,
                          repeats: null,
                          restReps: null,
                          totalTime: null,
                          list: null
                        };
                      } else {
                        this.uiService.alertInfo('Error al crear ejercicio');
                      }

                    case 22:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AddEditPage;
      }();

      AddEditPage.ctorParameters = function () {
        return [{
          type: _shared_services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AddEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-edit',
        template: _raw_loader_add_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddEditPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=core-pages-add-edit-add-edit-module-es5.js.map