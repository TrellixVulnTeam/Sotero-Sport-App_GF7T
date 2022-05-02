(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["items-items-module"], {
    /***/
    "D3PC":
    /*!**********************************************************!*\
      !*** ./src/app/core/pages/items/items-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: ItemsPageRoutingModule */

    /***/
    function D3PC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsPageRoutingModule", function () {
        return ItemsPageRoutingModule;
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


      var _items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./items.page */
      "w9pa");

      var routes = [{
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_3__["ItemsPage"]
      }];

      var ItemsPageRoutingModule = function ItemsPageRoutingModule() {
        _classCallCheck(this, ItemsPageRoutingModule);
      };

      ItemsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ItemsPageRoutingModule);
      /***/
    },

    /***/
    "MRrs":
    /*!**************************************************!*\
      !*** ./src/app/core/pages/items/items.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function MRrs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "ORKG":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/pages/items/items.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ORKG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-text-center\">\n    <!-- Menu -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"first\"></ion-menu-button>\n    </ion-buttons>\n    <!-- Título -->\n    <ion-title>{{listTitle}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"information-circle-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Listas -->\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        <ion-label>Mis ejercicios</ion-label>\n      </ion-list-header>\n\n      <ion-item-sliding\n        *ngFor=\"let item of items; let i = index\"\n        class=\"animated fadeInDown\"\n      >\n        <ion-item detail (click)=\"goToTimer(item._id)\">\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"8\">\n                <ion-label>\n                  <h2>{{ item.title }}</h2>\n                  <p>{{ item.description }}</p>\n                </ion-label></ion-col\n              >\n              <ion-note slot=\"end\"></ion-note>\n              <ion-col size=\"4\"></ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n        <ion-item-options (click)=\"deleteItemAlert(item._id, i)\" side=\"end\">\n          <ion-item-option color=\"danger\">\n            <ion-icon\n              color=\"soterosport-cream\"\n              slot=\"icon-only\"\n              name=\"close\"\n            ></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n\n        <ion-item-options\n          (click)=\"goToAddEdit(item.list, item._id)\"\n          side=\"start\"\n        >\n          <ion-item-option color=\"soterosport-blue\">\n            <ion-icon\n              color=\"soterosport-cream\"\n              slot=\"icon-only\"\n              name=\"create-outline\"\n            ></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button color=\"soterosport-darkyellow\" (click)=\"goAddEdit()\">\n      <ion-icon size=\"large\" color=\"soterosport-cream\" name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "qUh1":
    /*!**************************************************!*\
      !*** ./src/app/core/pages/items/items.module.ts ***!
      \**************************************************/

    /*! exports provided: ItemsPageModule */

    /***/
    function qUh1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function () {
        return ItemsPageModule;
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


      var _items_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./items-routing.module */
      "D3PC");
      /* harmony import */


      var _items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./items.page */
      "w9pa");

      var ItemsPageModule = function ItemsPageModule() {
        _classCallCheck(this, ItemsPageModule);
      };

      ItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _items_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemsPageRoutingModule"]],
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]]
      })], ItemsPageModule);
      /***/
    },

    /***/
    "w9pa":
    /*!************************************************!*\
      !*** ./src/app/core/pages/items/items.page.ts ***!
      \************************************************/

    /*! exports provided: ItemsPage */

    /***/
    function w9pa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsPage", function () {
        return ItemsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_items_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./items.page.html */
      "ORKG");
      /* harmony import */


      var _items_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./items.page.scss */
      "MRrs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/items.service */
      "V8OY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/services/ui.service */
      "8nna");

      var ItemsPage = /*#__PURE__*/function () {
        function ItemsPage(itemsService, actvRoute, alertCtrl, uiService, router) {
          _classCallCheck(this, ItemsPage);

          this.itemsService = itemsService;
          this.actvRoute = actvRoute;
          this.alertCtrl = alertCtrl;
          this.uiService = uiService;
          this.router = router;
          this.items = [];
          this.enabled = true;
        }

        _createClass(ItemsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.listTitle = this.actvRoute.snapshot.paramMap.get('listTitle');
            this.listId = this.actvRoute.snapshot.paramMap.get('listId');
            this.itemsService.getItems(this.listId).subscribe(function (resp) {
              var _this$items;

              console.log(resp);

              (_this$items = _this.items).push.apply(_this$items, _toConsumableArray(resp.items)); // this.listTitle = resp.items[0]?.list.title // Obtengo el titulo del primer item

            });
            this.itemsService.newItem.subscribe(function (item) {
              // Insertamos el item en el array de items en la 1º posición
              _this.items.unshift(item);
            });
          } // Ir a añadir o editar

        }, {
          key: "goAddEdit",
          value: function goAddEdit() {
            this.router.navigateByUrl("/add/".concat(this.listId));
            console.log('Al añadir item tenemos listId --> ' + this.listId);
          }
        }, {
          key: "goToTimer",
          value: function goToTimer(itemId) {
            this.router.navigateByUrl("timer/".concat(itemId));
          }
        }, {
          key: "goToAddEdit",
          value: function goToAddEdit(listId, itemId) {
            this.router.navigateByUrl("edit/".concat(listId, "/").concat(itemId));
          } // Eliminar item

        }, {
          key: "deleteItem",
          value: function deleteItem(itemId, index) {
            this.itemsService.deleteItem(itemId);
            this.items.splice(index, 1);
          } // Alert para eliminar item

        }, {
          key: "deleteItemAlert",
          value: function deleteItemAlert(itemId, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Eliminar Item',
                        message: '¿ Está seguro que desea eliminar este item ?',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }, {
                          text: 'Borrar',
                          handler: function handler() {
                            _this2.deleteItem(itemId, index);

                            _this2.uiService.presentToast('Item eliminado correctamente.');
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ItemsPage;
      }();

      ItemsPage.ctorParameters = function () {
        return [{
          type: src_app_shared_services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_7__["UiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-items',
        template: _raw_loader_items_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_items_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ItemsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=items-items-module-es5.js.map