(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lists-lists-module"], {
    /***/
    "4QbO":
    /*!************************************************!*\
      !*** ./src/app/core/pages/lists/lists.page.ts ***!
      \************************************************/

    /*! exports provided: ListsPage */

    /***/
    function QbO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListsPage", function () {
        return ListsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lists_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lists.page.html */
      "8nS0");
      /* harmony import */


      var _lists_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lists.page.scss */
      "lmx7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_shared_services_lists_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/lists.service */
      "P2gn");
      /* harmony import */


      var src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/ui.service */
      "8nna");
      /* harmony import */


      var _shared_services_items_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/services/items.service */
      "V8OY");

      var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].SplashScreen;

      var ListsPage = /*#__PURE__*/function () {
        function ListsPage(listsService, itemsService, alertCtrl, uiService, route) {
          _classCallCheck(this, ListsPage);

          this.listsService = listsService;
          this.itemsService = itemsService;
          this.alertCtrl = alertCtrl;
          this.uiService = uiService;
          this.route = route;
          this.lists = [];
          this.enabled = true;
          this.list = {
            title: '',
            completed: false
          };
        }

        _createClass(ListsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.nextsItems();
            this.listsService.newList.subscribe(function (list) {
              _this.lists.unshift(list);

              _this.listId = list._id;
              _this.listTitle = list.title;
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            SplashScreen.hide()["catch"](function (error) {
              console.log(error);
            });
          } // Cargar las páginas

        }, {
          key: "loadLists",
          value: function loadLists(event) {
            this.nextsItems(event, true);
            this.enabled = true;
            this.lists = [];
          } // Infinite Scroll

        }, {
          key: "nextsItems",
          value: function nextsItems(event) {
            var pull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.listsService.getLists(pull) // getList de listService // Esto me devuelve las listas del usuario logeado
                      .subscribe(function (resp) {
                        var _this2$lists;

                        console.log(resp);

                        (_this2$lists = _this2.lists).push.apply(_this2$lists, _toConsumableArray(resp.lists));

                        if (event) {
                          event.target.complete();
                          if (resp.lists.length === 0) event.target.disabled = false;
                        }
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Crear nueva lista

        }, {
          key: "createdList",
          value: function createdList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(this.list);
                      _context2.next = 3;
                      return this.listsService.createdList(this.list);

                    case 3:
                      this.list = {
                        title: '',
                        completed: false
                      };
                      this.route.navigateByUrl("main/tabs/items/".concat(this.listId, "/").concat(this.listTitle));
                      console.log('Mandamos el listid --> ' + this.listId); // this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`)

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // Alert para crear lista

        }, {
          key: "addList",
          value: function addList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'alert-list',
                        header: 'Nueva lista',
                        inputs: [{
                          name: 'title',
                          type: 'text',
                          placeholder: 'Nombre de la lista '
                        }],
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }, {
                          text: 'Crear',
                          handler: function handler(data) {
                            if (data.title.length > 0) {
                              _this3.list.title = data.title;

                              _this3.createdList();
                            } else {
                              _this3.uiService.presentToast('Debe escribir un nombre para la lista');
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "goToItems",
          value: function goToItems(listId, listTitle) {
            this.route.navigateByUrl("main/tabs/items/".concat(listId, "/").concat(listTitle));
          } // Eliminar lista

        }, {
          key: "deleteList",
          value: function deleteList(listId, index) {
            this.listsService.deleteList(listId);
            this.itemsService.deleteItemsList(listId);
            this.lists.splice(index, 1);
          } // Alert para eliminar lista

        }, {
          key: "deleteListAlert",
          value: function deleteListAlert(listId, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        header: 'Eliminar Lista',
                        message: '¿ Está seguro que desea eliminar esta lista ?',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }, {
                          text: 'Borrar',
                          handler: function handler() {
                            _this4.deleteList(listId, index);

                            _this4.uiService.presentToast('Lista eliminada correctamente.');
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "editListAlert",
          value: function editListAlert(listId, list) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertCtrl.create({
                        header: 'Editar lista',
                        inputs: [{
                          name: 'titulo',
                          type: 'text',
                          value: list,
                          placeholder: 'Nombre de la lista '
                        }],
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar'); // this.list.closeSlidingItems();
                          }
                        }, {
                          text: 'Guardar',
                          handler: function handler(data) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                              var update;
                              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      console.log(data);
                                      this.list.title = data.titulo;
                                      _context5.next = 4;
                                      return this.listsService.updateList(listId, this.list);

                                    case 4:
                                      update = _context5.sent;

                                      if (update) {
                                        this.loadLists(list);
                                        this.uiService.presentToast('Item actualizado correctamente'); // Toast con mensaje de actualizado
                                      } else {
                                        this.uiService.presentToast('Error al actualizar item');
                                      }

                                    case 6:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return ListsPage;
      }();

      ListsPage.ctorParameters = function () {
        return [{
          type: src_app_shared_services_lists_service__WEBPACK_IMPORTED_MODULE_7__["ListsService"]
        }, {
          type: _shared_services_items_service__WEBPACK_IMPORTED_MODULE_9__["ItemsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_8__["UiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ListsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lists',
        template: _raw_loader_lists_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lists_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListsPage);
      /***/
    },

    /***/
    "8nS0":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/pages/lists/lists.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function nS0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- Menu -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" menu=\"first\"></ion-menu-button>\n    </ion-buttons>\n    <!-- Título -->\n    <ion-title class=\"ion-text-center\">Entrenamientos</ion-title>\n    <!-- Icono info -->\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"information-circle-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appAutoHide>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadLists($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\n        <ion-list>\n          <!-- | filtroCompletado:terminada -->\n          <ion-item-sliding *ngFor=\"let list of lists; let i = index\">\n            <!-- (click)=\"listSelect(list)\" -->\n            <ion-item detail (click)=\"goToItems(list._id, list.title)\">\n              <ion-label>{{ list.title }}</ion-label>\n              <ion-note slot=\"end\"></ion-note>\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n              <ion-item-option\n                (click)=\"deleteListAlert(list._id, i)\"\n                color=\"danger\"\n              >\n                <ion-icon\n                  color=\"soterosport-cream\"\n                  slot=\"icon-only\"\n                  name=\"close\"\n                ></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                (click)=\"editListAlert(list._id, list.title)\"\n                color=\"soterosport-blue\"\n              >\n                <ion-icon\n                  color=\"soterosport-cream\"\n                  slot=\"icon-only\"\n                  name=\"create-outline\"\n                ></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Infinite Scroll -->\n  <ion-infinite-scroll\n    [disabled]=\"!enabled\"\n    threshold=\"25%\"\n    (ionInfinite)=\"nextsItems($event)\"\n  >\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button color=\"soterosport-darkyellow\" (click)=\"addList()\">\n      <ion-icon color=\"soterosport-cream\" size=\"large\" name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "AREo":
    /*!**********************************************************!*\
      !*** ./src/app/core/pages/lists/lists-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: ListsPageRoutingModule */

    /***/
    function AREo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListsPageRoutingModule", function () {
        return ListsPageRoutingModule;
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


      var _lists_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lists.page */
      "4QbO");

      var routes = [{
        path: '',
        component: _lists_page__WEBPACK_IMPORTED_MODULE_3__["ListsPage"]
      }];

      var ListsPageRoutingModule = function ListsPageRoutingModule() {
        _classCallCheck(this, ListsPageRoutingModule);
      };

      ListsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListsPageRoutingModule);
      /***/
    },

    /***/
    "lmx7":
    /*!**************************************************!*\
      !*** ./src/app/core/pages/lists/lists.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function lmx7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "rm7G":
    /*!**************************************************!*\
      !*** ./src/app/core/pages/lists/lists.module.ts ***!
      \**************************************************/

    /*! exports provided: ListsPageModule */

    /***/
    function rm7G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListsPageModule", function () {
        return ListsPageModule;
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


      var _lists_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lists-routing.module */
      "AREo");
      /* harmony import */


      var _lists_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lists.page */
      "4QbO");

      var ListsPageModule = function ListsPageModule() {
        _classCallCheck(this, ListsPageModule);
      };

      ListsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lists_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListsPageRoutingModule"]],
        declarations: [_lists_page__WEBPACK_IMPORTED_MODULE_6__["ListsPage"]]
      })], ListsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=lists-lists-module-es5.js.map