(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lists-lists-module"],{

/***/ "4QbO":
/*!************************************************!*\
  !*** ./src/app/core/pages/lists/lists.page.ts ***!
  \************************************************/
/*! exports provided: ListsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsPage", function() { return ListsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lists_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lists.page.html */ "8nS0");
/* harmony import */ var _lists_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists.page.scss */ "lmx7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_services_lists_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/lists.service */ "P2gn");
/* harmony import */ var src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/ui.service */ "8nna");
/* harmony import */ var _shared_services_items_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/items.service */ "V8OY");










const { SplashScreen } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let ListsPage = class ListsPage {
    constructor(listsService, itemsService, alertCtrl, uiService, route) {
        this.listsService = listsService;
        this.itemsService = itemsService;
        this.alertCtrl = alertCtrl;
        this.uiService = uiService;
        this.route = route;
        this.lists = [];
        this.enabled = true;
        this.list = {
            title: '',
            completed: false,
        };
    }
    ngOnInit() {
        this.nextsItems();
        this.listsService.newList.subscribe(list => {
            this.lists.unshift(list);
            this.listId = list._id;
            this.listTitle = list.title;
        });
    }
    ionViewDidEnter() {
        SplashScreen.hide().catch(error => {
            console.log(error);
        });
    }
    // Cargar las páginas
    loadLists(event) {
        this.nextsItems(event, true);
        this.enabled = true;
        this.lists = [];
    }
    // Infinite Scroll
    nextsItems(event, pull = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.listsService.getLists(pull) // getList de listService // Esto me devuelve las listas del usuario logeado
                .subscribe(resp => {
                console.log(resp);
                this.lists.push(...resp.lists);
                if (event) {
                    event.target.complete();
                    if (resp.lists.length === 0)
                        event.target.disabled = false;
                }
            });
        });
    }
    // Crear nueva lista
    createdList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.list);
            yield this.listsService.createdList(this.list);
            this.list = {
                title: '',
                completed: false
            };
            this.route.navigateByUrl(`main/tabs/items/${this.listId}/${this.listTitle}`);
            console.log('Mandamos el listid --> ' + this.listId);
            // this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`)
        });
    }
    // Alert para crear lista
    addList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'alert-list',
                header: 'Nueva lista',
                inputs: [
                    {
                        name: 'title',
                        type: 'text',
                        placeholder: 'Nombre de la lista '
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    },
                    {
                        text: 'Crear',
                        handler: (data) => {
                            if (data.title.length > 0) {
                                this.list.title = data.title;
                                this.createdList();
                            }
                            else {
                                this.uiService.presentToast('Debe escribir un nombre para la lista');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    goToItems(listId, listTitle) {
        this.route.navigateByUrl(`main/tabs/items/${listId}/${listTitle}`);
    }
    // Eliminar lista
    deleteList(listId, index) {
        this.listsService.deleteList(listId);
        this.itemsService.deleteItemsList(listId);
        this.lists.splice(index, 1);
    }
    // Alert para eliminar lista
    deleteListAlert(listId, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Eliminar Lista',
                message: '¿ Está seguro que desea eliminar esta lista ?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    },
                    {
                        text: 'Borrar',
                        handler: () => {
                            this.deleteList(listId, index);
                            this.uiService.presentToast('Lista eliminada correctamente.');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editListAlert(listId, list) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Editar lista',
                inputs: [
                    {
                        name: 'titulo',
                        type: 'text',
                        value: list,
                        placeholder: 'Nombre de la lista '
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                            // this.list.closeSlidingItems();
                        }
                    },
                    {
                        text: 'Guardar',
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log(data);
                            this.list.title = data.titulo;
                            const update = yield this.listsService.updateList(listId, this.list);
                            if (update) {
                                this.loadLists(list);
                                this.uiService.presentToast('Item actualizado correctamente'); // Toast con mensaje de actualizado
                            }
                            else {
                                this.uiService.presentToast('Error al actualizar item');
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ListsPage.ctorParameters = () => [
    { type: src_app_shared_services_lists_service__WEBPACK_IMPORTED_MODULE_7__["ListsService"] },
    { type: _shared_services_items_service__WEBPACK_IMPORTED_MODULE_9__["ItemsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_8__["UiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ListsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lists',
        template: _raw_loader_lists_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lists_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListsPage);



/***/ }),

/***/ "8nS0":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/pages/lists/lists.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- Menu -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" menu=\"first\"></ion-menu-button>\n    </ion-buttons>\n    <!-- Título -->\n    <ion-title class=\"ion-text-center\">Entrenamientos</ion-title>\n    <!-- Icono info -->\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"information-circle-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appAutoHide>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadLists($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\n        <ion-list>\n          <!-- | filtroCompletado:terminada -->\n          <ion-item-sliding *ngFor=\"let list of lists; let i = index\">\n            <!-- (click)=\"listSelect(list)\" -->\n            <ion-item detail (click)=\"goToItems(list._id, list.title)\">\n              <ion-label>{{ list.title }}</ion-label>\n              <ion-note slot=\"end\"></ion-note>\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n              <ion-item-option\n                (click)=\"deleteListAlert(list._id, i)\"\n                color=\"danger\"\n              >\n                <ion-icon\n                  color=\"soterosport-cream\"\n                  slot=\"icon-only\"\n                  name=\"close\"\n                ></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                (click)=\"editListAlert(list._id, list.title)\"\n                color=\"soterosport-blue\"\n              >\n                <ion-icon\n                  color=\"soterosport-cream\"\n                  slot=\"icon-only\"\n                  name=\"create-outline\"\n                ></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Infinite Scroll -->\n  <ion-infinite-scroll\n    [disabled]=\"!enabled\"\n    threshold=\"25%\"\n    (ionInfinite)=\"nextsItems($event)\"\n  >\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button color=\"soterosport-darkyellow\" (click)=\"addList()\">\n      <ion-icon color=\"soterosport-cream\" size=\"large\" name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "AREo":
/*!**********************************************************!*\
  !*** ./src/app/core/pages/lists/lists-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ListsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsPageRoutingModule", function() { return ListsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lists_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lists.page */ "4QbO");




const routes = [
    {
        path: '',
        component: _lists_page__WEBPACK_IMPORTED_MODULE_3__["ListsPage"]
    }
];
let ListsPageRoutingModule = class ListsPageRoutingModule {
};
ListsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListsPageRoutingModule);



/***/ }),

/***/ "lmx7":
/*!**************************************************!*\
  !*** ./src/app/core/pages/lists/lists.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "rm7G":
/*!**************************************************!*\
  !*** ./src/app/core/pages/lists/lists.module.ts ***!
  \**************************************************/
/*! exports provided: ListsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsPageModule", function() { return ListsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lists_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lists-routing.module */ "AREo");
/* harmony import */ var _lists_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lists.page */ "4QbO");







let ListsPageModule = class ListsPageModule {
};
ListsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lists_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListsPageRoutingModule"],
        ],
        declarations: [_lists_page__WEBPACK_IMPORTED_MODULE_6__["ListsPage"]]
    })
], ListsPageModule);



/***/ })

}]);
//# sourceMappingURL=lists-lists-module-es2015.js.map