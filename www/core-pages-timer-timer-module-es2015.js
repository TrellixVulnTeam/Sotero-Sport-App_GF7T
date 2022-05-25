(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-pages-timer-timer-module"],{

/***/ "W89Q":
/*!**********************************************************!*\
  !*** ./src/app/core/pages/timer/timer-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: TimerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerPageRoutingModule", function() { return TimerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.page */ "dPra");




const routes = [
    {
        path: '',
        component: _timer_page__WEBPACK_IMPORTED_MODULE_3__["TimerPage"]
    }
];
let TimerPageRoutingModule = class TimerPageRoutingModule {
};
TimerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TimerPageRoutingModule);



/***/ }),

/***/ "dPra":
/*!************************************************!*\
  !*** ./src/app/core/pages/timer/timer.page.ts ***!
  \************************************************/
/*! exports provided: TimerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerPage", function() { return TimerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_timer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./timer.page.html */ "wV7M");
/* harmony import */ var _timer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.page.scss */ "hQX6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/items.service */ "V8OY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modals_timer_end_timer_end_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modals/timer-end/timer-end.page */ "iDyF");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "gcOT");











const { App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];
const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;
let TimerPage = class TimerPage {
    constructor(popoverCtrl, itemsService, modalCtrl, actvRoute, platform) {
        this.popoverCtrl = popoverCtrl;
        this.itemsService = itemsService;
        this.modalCtrl = modalCtrl;
        this.actvRoute = actvRoute;
        this.platform = platform;
        this.item = {
            title: '',
            description: '',
            preparation: null,
            sets: null,
            time: null,
            restSets: null,
            repeats: null,
            restReps: null,
            totalTime: null,
        };
        this.itemArray = [];
        this.percent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](100);
        this.time = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('00:00');
        this.state = 'stop';
        this.circleDasharray = circleDasharray;
        this.circleR = circleR;
        this.audio = new Audio();
        this.displayStage = 'Preparación';
        this.onlyDigits = false;
        this.noFeatures = false;
        this.mute = false;
        this.startDuration = 1;
        this.counterPreparation = 1;
    }
    ngOnInit() {
        this.itemId = this.actvRoute.snapshot.paramMap.get('itemId');
        console.log(this.itemId + ' Entrando al timer ');
        this.itemsService.getItemById(this.itemId)
            .subscribe(resp => {
            // Lo añado a un array por si hay retraso en la respuesta
            this.itemArray.push(...resp.items);
            const load = this.item = this.itemArray[0];
            if (load) {
                this.updateCountersAndDuration();
            }
        });
    }
    ngOnDestroy() {
        clearInterval(this.interval);
        this.time.next('00:00');
        this.updateCountersAndDuration();
    }
    updateCountersAndDuration() {
        // Duration
        this.preparation = this.item.preparation;
        this.timeEx = this.item.time;
        this.restReps = this.item.restReps;
        this.restSets = this.item.restSets;
        // Counters
        this.counterSets = this.item.sets;
        this.counterTimeEx = this.item.repeats * this.counterSets;
        this.counterRestReps = this.item.repeats - 1;
    }
    // Actualiza la duración
    updateTimeDisplay(durationPercent) {
        let minutes = this.timer / 60;
        let seconds = this.timer % 60;
        minutes = String('0' + Math.floor(minutes)).slice(-2);
        seconds = String('0' + Math.floor(seconds)).slice(-2);
        const text = minutes + ':' + seconds;
        this.time.next(text);
        const totalTime = this.startDuration * durationPercent;
        const percentage = ((totalTime - this.timer) / totalTime) * 100;
        this.percent.next(percentage);
    }
    // Preparación ------------------------------------------------------------------
    startPreparation(duration) {
        this.displayColor = 'restOut';
        console.log('Entramos en preparación');
        this.displayStage = 'Preparación';
        this.state = 'start';
        clearInterval(this.interval);
        this.timer = duration;
        this.durationPreparation();
        this.interval = setInterval(() => {
            this.durationPreparation();
        }, 1000);
    }
    durationPreparation() {
        this.updateTimeDisplay(this.preparation);
        --this.timer;
        if (this.timer < 2 && this.timer >= -1) {
            this.playAudio("../../assets/audio/audio02.wav");
        }
        if (this.timer < -1) {
            this.playAudio("../../assets/audio/audio04.wav");
        }
        //_________________________________________
        if (this.timer < -1) {
            this.startExercise(this.timeEx);
        }
    }
    // -------------------------------------------------------------------------------
    // Ejercicio ---------------------------------------------------------------------
    startExercise(duration) {
        console.log('Entramos en Ejercicio');
        this.displayColor = 'Rest';
        this.state = 'start';
        this.displayStage = 'Ejercicio';
        clearInterval(this.interval);
        this.timer = duration;
        this.durationExercise();
        this.interval = setInterval(() => {
            this.durationExercise();
        }, 1000);
    }
    durationExercise() {
        this.updateTimeDisplay(this.timeEx);
        --this.timer;
        if (this.timer < 2 && this.timer >= -1) {
            this.playAudio("../../assets/audio/audio02.wav");
        }
        if (this.timer < -1) {
            this.playAudio("../../assets/audio/audio05.wav");
        }
        if (this.timer < -1) {
            this.counterTimeEx--;
            this.startRestReps(this.restReps);
            if (this.counterTimeEx === this.counterSets) {
                this.startRestSets(this.restSets); // Empieza el descanso entre Series
                if (this.counterSets === 1) {
                    this.stopTimer();
                    this.updateCountersAndDuration();
                    this.modalEnd();
                }
            }
        }
    }
    // -------------------------------------------------------------------------------
    // Descanso Repeticion -----------------------------------------------------------
    startRestReps(duration) {
        console.log('Entramos en descanso repeticiones');
        this.displayColor = 'Ex';
        this.state = 'start';
        this.displayStage = 'Descanso';
        clearInterval(this.interval);
        this.timer = duration;
        this.durationRestReps();
        this.interval = setInterval(() => {
            this.durationRestReps();
        }, 1000);
    }
    durationRestReps() {
        this.updateTimeDisplay(this.restReps);
        --this.timer;
        if (this.timer < 2 && this.timer >= -1) {
            this.playAudio("../../assets/audio/audio02.wav");
        }
        if (this.timer < -1) {
            this.playAudio("../../assets/audio/audio04.wav");
        }
        if (this.timer < -1) {
            this.counterRestReps--;
            this.startExercise(this.timeEx);
        }
    }
    // --------------------------------------------------------------------------------
    // Descanso Series ----------------------------------------------------------------
    startRestSets(duration) {
        console.log('Entramos en descanso series');
        this.displayColor = 'restOut';
        this.state = 'start';
        this.displayStage = 'Descanso Serie';
        clearInterval(this.interval);
        this.timer = duration;
        this.durationRestSets();
        this.interval = setInterval(() => {
            this.durationRestSets();
        }, 1000);
    }
    durationRestSets() {
        this.updateTimeDisplay(this.restSets);
        --this.timer;
        if (this.timer < 2 && this.timer >= -1) {
            this.playAudio("../../assets/audio/audio02.wav");
        }
        if (this.timer < -1) {
            this.playAudio("../../assets/audio/audio04.wav");
        }
        if (this.timer < -1) {
            this.counterSets--;
            this.counterTimeEx++;
            this.startExercise(this.timeEx);
        }
    }
    // --------------------------------------------------------------------------------
    // Muestra el modal de final del ejercicio
    modalEnd() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                cssClass: 'modal-end',
                component: _modals_timer_end_timer_end_page__WEBPACK_IMPORTED_MODULE_8__["TimerEndPage"],
            });
            return yield modal.present();
        });
    }
    // Play audio
    playAudio(url) {
        let audio = new Audio();
        audio.src = url;
        audio.load();
        audio.play();
    }
    // Porcentage
    percentageOffset(percent) {
        const percentFloat = percent / 100;
        return circleDasharray * (1 - percentFloat);
    }
    // Stop timer
    stopTimer() {
        clearInterval(this.interval);
        this.time.next('00:00');
        this.updateCountersAndDuration();
        this.state = 'stop';
    }
};
TimerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _shared_services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
TimerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-timer',
        template: _raw_loader_timer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_timer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TimerPage);



/***/ }),

/***/ "dYf9":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/modals/timer-end/timer-end.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" class=\"ion-text-center\">\n  <img src=\"../../../../assets/img/cup.png\" alt=\"\" />\n  <h1 color=\"soterosport-darkyellow\"><strong>¡ Fin !</strong></h1>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n        Cerrar\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "hQX6":
/*!**************************************************!*\
  !*** ./src/app/core/pages/timer/timer.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 1.5em;\n}\n\nh3 {\n  font-size: 2.5em;\n  font-weight: 600;\n  margin-top: 30px;\n  color: #ffffff !important;\n}\n\n#progress-circle {\n  margin-top: 15px;\n  transform: rotate(-90deg);\n}\n\n.timer-text {\n  transform: rotate(90deg);\n  transform-origin: center;\n  font-size: 36px;\n  text-anchor: middle;\n  font-weight: 700;\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RpbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InRpbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbmgzIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuI3Byb2dyZXNzLWNpcmNsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi50aW1lci10ZXh0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAvLyBmaWxsOiAjZmZlZWQwO1xufVxuIl19 */");

/***/ }),

/***/ "iDyF":
/*!*********************************************************!*\
  !*** ./src/app/core/modals/timer-end/timer-end.page.ts ***!
  \*********************************************************/
/*! exports provided: TimerEndPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerEndPage", function() { return TimerEndPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_timer_end_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./timer-end.page.html */ "dYf9");
/* harmony import */ var _timer_end_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer-end.page.scss */ "o61L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let TimerEndPage = class TimerEndPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
};
TimerEndPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
TimerEndPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-timer-end',
        template: _raw_loader_timer_end_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_timer_end_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TimerEndPage);



/***/ }),

/***/ "o61L":
/*!***********************************************************!*\
  !*** ./src/app/core/modals/timer-end/timer-end.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 2.5em;\n}\n\nimg {\n  margin-top: 30px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RpbWVyLWVuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoidGltZXItZW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn1cblxuaW1nIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "wV7M":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/pages/timer/timer.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-header class=\"ion-no-border\">\n        <ion-toolbar class=\"ion-text-center\">\n            <!-- Menu -->\n            <ion-buttons slot=\"start\">\n                <ion-menu-button autoHide=\"false\" menu=\"first\"></ion-menu-button>\n            </ion-buttons>\n            <!-- Título -->\n            <ion-title>{{item.title}}</ion-title>\n\n            <!-- Icono info -->\n            <ion-buttons slot=\"end\">\n                <ion-button>\n                    <ion-icon name=\"information-circle-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-header>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n    <h3>{{displayStage}}</h3>\n\n    <ion-grid fixed>\n        <ion-row>\n            <ion-col class=\"ion-text-center\">\n                <svg id=\"progress-circle\" width=\"40vh\" height=\"40vh\" viewBox=\"0 0 175 175\">\n          <linearGradient id=\"linearColors1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n            <stop\n              *ngIf=\"displayColor === 'restOut'\"\n              offset=\"0%\"\n              stop-color=\"#4DD3E3\"\n            ></stop>\n            <stop\n              *ngIf=\"displayColor === 'restOut'\"\n              offset=\"100%\"\n              stop-color=\"#7DCFFF\"\n            ></stop>\n            <stop\n              *ngIf=\"displayColor === 'Ex'\"\n              offset=\"0%\"\n              stop-color=\"#ff9368\"\n            ></stop>\n            <stop\n              *ngIf=\"displayColor === 'Ex'\"\n              offset=\"100%\"\n              stop-color=\"#FF412C\"\n            ></stop>\n            <stop\n              *ngIf=\"displayColor === 'Rest'\"\n              offset=\"0%\"\n              stop-color=\"#A4FCE5\"\n            ></stop>\n            <stop\n              *ngIf=\"displayColor === 'Rest'\"\n              offset=\"100%\"\n              stop-color=\"#85FF8B\"\n            ></stop>\n          </linearGradient>\n          <circle\n            cx=\"50%\"\n            cy=\"50%\"\n            [attr.r]=\"circleR\"\n            fill=\"none\"\n            stroke=\"#34343C\"\n            stroke-width=\"14\"\n          />\n          <circle\n            cx=\"50%\"\n            cy=\"50%\"\n            [attr.r]=\"circleR\"\n            fill=\"none\"\n            stroke=\"#121213\"\n            stroke-width=\"12\"\n          />\n          <circle\n            cx=\"50%\"\n            cy=\"50%\"\n            [attr.r]=\"circleR\"\n            fill=\"none\"\n            stroke=\"url(#linearColors1)\"\n            stroke-width=\"9\"\n            stroke-linecap=\"round\"\n            [attr.stroke-dasharray]=\"circleDasharray\"\n            [attr.stroke-dashoffset]=\"percentageOffset(percent | async)\"\n          />\n          <text x=\"50%\" y=\"57%\" class=\"timer-text\">{{ time | async }}</text>\n        </svg>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-card class=\"ion-padding\">\n        <ion-item>\n            <ion-label>\n                <h2>Descripción</h2>\n                <p>{{item.description}}</p>\n            </ion-label>\n        </ion-item>\n    </ion-card>\n</ion-content>\n\n<ion-footer class=\"ion-padding\">\n    <ion-toolbar>\n        <ion-button *ngIf=\"state === 'stop'\" (click)=\"startPreparation(this.preparation)\" color=\"soterosport-blue\" expand=\"block\">\n            <ion-icon color=\"soterosport-darkcream\" name=\"play\"></ion-icon>\n        </ion-button>\n\n        <ion-button *ngIf=\"state === 'start'\" (click)=\"stopTimer()\" color=\"soterosport-red\" expand=\"block\">\n            <ion-icon *ngIf=\"state === 'start'\" color=\"soterosport-darkcream\" name=\"stop\"></ion-icon>\n        </ion-button>\n\n        <!-- (click)=\"startTimer()\" -->\n        <!-- *ngIf=\"state === 'stop'\" -->\n        <!-- *ngIf=\"state === 'start'\"  -->\n        <!-- (click)=\"stopTimer()\" -->\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "yVGo":
/*!**************************************************!*\
  !*** ./src/app/core/pages/timer/timer.module.ts ***!
  \**************************************************/
/*! exports provided: TimerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerPageModule", function() { return TimerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _timer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer-routing.module */ "W89Q");
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer.page */ "dPra");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-countdown */ "z+xu");








let TimerPageModule = class TimerPageModule {
};
TimerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ngx_countdown__WEBPACK_IMPORTED_MODULE_7__["CountdownModule"],
            _timer_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimerPageRoutingModule"]
        ],
        declarations: [_timer_page__WEBPACK_IMPORTED_MODULE_6__["TimerPage"]]
    })
], TimerPageModule);



/***/ }),

/***/ "z+xu":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js ***!
  \***************************************************************************/
/*! exports provided: CountdownComponent, CountdownGlobalConfig, CountdownModule, CountdownStatus, CountdownTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownComponent", function() { return CountdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownGlobalConfig", function() { return CountdownGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownModule", function() { return CountdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownStatus", function() { return CountdownStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownTimer", function() { return CountdownTimer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CountdownComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.i.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CountdownComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
var CountdownStatus;
(function (CountdownStatus) {
    CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
    CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
    CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
    CountdownStatus[CountdownStatus["done"] = 3] = "done";
})(CountdownStatus || (CountdownStatus = {}));

class CountdownTimer {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.fns = [];
        this.commands = [];
        this.ing = false;
    }
    start() {
        if (this.ing === true) {
            return;
        }
        this.ing = true;
        this.nextTime = +new Date();
        this.ngZone.runOutsideAngular(() => {
            this.process();
        });
    }
    process() {
        while (this.commands.length) {
            this.commands.shift()();
        }
        let diff = +new Date() - this.nextTime;
        const count = 1 + Math.floor(diff / 100);
        diff = 100 - (diff % 100);
        this.nextTime += 100 * count;
        for (let i = 0, len = this.fns.length; i < len; i += 2) {
            let frequency = this.fns[i + 1];
            // 100/s
            if (0 === frequency) {
                this.fns[i](count);
                // 1000/s
            }
            else {
                // 先把末位至0，再每次加2
                frequency += 2 * count - 1;
                const step = Math.floor(frequency / 20);
                if (step > 0) {
                    this.fns[i](step);
                }
                // 把末位还原成1
                this.fns[i + 1] = (frequency % 20) + 1;
            }
        }
        if (!this.ing) {
            return;
        }
        setTimeout(() => this.process(), diff);
    }
    add(fn, frequency) {
        this.commands.push(() => {
            this.fns.push(fn);
            this.fns.push(frequency === 1000 ? 1 : 0);
            this.ing = true;
        });
        return this;
    }
    remove(fn) {
        this.commands.push(() => {
            const i = this.fns.indexOf(fn);
            if (i !== -1) {
                this.fns.splice(i, 2);
            }
            this.ing = this.fns.length > 0;
        });
        return this;
    }
}
CountdownTimer.ɵfac = function CountdownTimer_Factory(t) { return new (t || CountdownTimer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CountdownTimer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountdownTimer, factory: CountdownTimer.ɵfac });
CountdownTimer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownTimer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();

// tslint:disable: no-inferrable-types
class CountdownGlobalConfig {
    constructor(locale) {
        this.locale = locale;
        this.demand = false;
        this.leftTime = 0;
        this.format = 'HH:mm:ss';
        this.timezone = '+0000';
        this.formatDate = ({ date, formatStr, timezone }) => {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(date), formatStr, this.locale, timezone || this.timezone || '+0000');
        };
    }
}
CountdownGlobalConfig.ɵfac = function CountdownGlobalConfig_Factory(t) { return new (t || CountdownGlobalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
CountdownGlobalConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function CountdownGlobalConfig_Factory() { return new CountdownGlobalConfig(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: CountdownGlobalConfig, providedIn: "root" });
CountdownGlobalConfig.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownGlobalConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, null); })();

class CountdownComponent {
    constructor(locale, timer, defCog, cdr, ngZone) {
        this.locale = locale;
        this.timer = timer;
        this.defCog = defCog;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.frequency = 1000;
        this._notify = {};
        this.status = CountdownStatus.ing;
        this.isDestroy = false;
        this.i = {};
        this.left = 0;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set config(i) {
        if (i.notify != null && !Array.isArray(i.notify) && i.notify > 0) {
            i.notify = [i.notify];
        }
        this._config = i;
    }
    get config() {
        return this._config;
    }
    /**
     * Start countdown, you must manually call when `demand: false`
     */
    begin() {
        this.status = CountdownStatus.ing;
        this.callEvent('start');
    }
    /**
     * Restart countdown
     */
    restart() {
        if (this.status !== CountdownStatus.stop) {
            this.destroy();
        }
        this.init();
        this.callEvent('restart');
    }
    /**
     * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
     */
    stop() {
        if (this.status === CountdownStatus.stop) {
            return;
        }
        this.status = CountdownStatus.stop;
        this.destroy();
        this.callEvent('stop');
    }
    /**
     * Pause countdown, you can use `resume` to recover again
     */
    pause() {
        if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) {
            return;
        }
        this.status = CountdownStatus.pause;
        this.callEvent('pause');
    }
    /**
     * Resume countdown
     */
    resume() {
        if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) {
            return;
        }
        this.status = CountdownStatus.ing;
        this.callEvent('resume');
    }
    callEvent(action) {
        this.event.emit({ action, left: this.left, status: this.status, text: this.i.text });
    }
    init() {
        const { locale, defCog } = this;
        const config = (this.config = Object.assign(Object.assign(Object.assign({}, new CountdownGlobalConfig(locale)), defCog), this.config));
        // tslint:disable-next-line: no-bitwise
        const frq = (this.frequency = ~config.format.indexOf('S') ? 100 : 1000);
        this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
        this.getLeft();
        // bind reflow to me
        const _reflow = this.reflow;
        this.reflow = (count = 0, force = false) => _reflow.apply(this, [count, force]);
        if (Array.isArray(config.notify)) {
            config.notify.forEach((time) => {
                if (time < 1) {
                    throw new Error(`The notify config must be a positive integer.`);
                }
                time = time * 1000;
                time = time - (time % frq);
                this._notify[time] = true;
            });
        }
        this.timer.add(this.reflow, frq).start();
        this.reflow(0, true);
    }
    destroy() {
        this.timer.remove(this.reflow);
        return this;
    }
    /**
     * 更新时钟
     */
    reflow(count = 0, force = false) {
        if (this.isDestroy) {
            return;
        }
        const { status, config, _notify } = this;
        if (!force && status !== CountdownStatus.ing) {
            return;
        }
        let value = (this.left = this.left - this.frequency * count);
        if (value < 1) {
            value = 0;
        }
        this.i = {
            value,
            text: config.formatDate({ date: value, formatStr: config.format, timezone: config.timezone }),
        };
        if (typeof config.prettyText === 'function') {
            this.i.text = config.prettyText(this.i.text);
        }
        this.cdr.detectChanges();
        if (config.notify === 0 || _notify[value]) {
            this.ngZone.run(() => {
                this.callEvent('notify');
            });
        }
        if (value === 0) {
            this.ngZone.run(() => {
                this.status = CountdownStatus.done;
                this.destroy();
                this.callEvent('done');
            });
        }
    }
    /**
     * 获取倒计时剩余帧数
     */
    getLeft() {
        const { config, frequency } = this;
        let left = config.leftTime * 1000;
        const end = config.stopTime;
        if (!left && end) {
            left = end - new Date().getTime();
        }
        this.left = left - (left % frequency);
    }
    ngOnInit() {
        this.init();
        if (!this.config.demand) {
            this.begin();
        }
    }
    ngOnDestroy() {
        this.isDestroy = true;
        this.destroy();
    }
    ngOnChanges(changes) {
        if (!changes.config.firstChange) {
            this.restart();
        }
    }
}
CountdownComponent.ɵfac = function CountdownComponent_Factory(t) { return new (t || CountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownTimer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownGlobalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CountdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountdownComponent, selectors: [["countdown"]], hostVars: 2, hostBindings: function CountdownComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("count-down", true);
    } }, inputs: { config: "config", render: "render" }, outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 5, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]], template: function CountdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountdownComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountdownComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.render);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.i));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
CountdownComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] },
    { type: CountdownTimer },
    { type: CountdownGlobalConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
CountdownComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    render: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'countdown',
                template: `
    <ng-container *ngIf="!render">
      <span [innerHTML]="i.text"></span>
    </ng-container>
    <ng-container *ngTemplateOutlet="render; context: { $implicit: i }"></ng-container>
  `,
                host: { '[class.count-down]': 'true' },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }, { type: CountdownTimer }, { type: CountdownGlobalConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], render: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class CountdownModule {
}
CountdownModule.ɵfac = function CountdownModule_Factory(t) { return new (t || CountdownModule)(); };
CountdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CountdownModule });
CountdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [CountdownTimer], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountdownModule, { declarations: function () { return [CountdownComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [CountdownComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [CountdownTimer],
                declarations: [CountdownComponent],
                exports: [CountdownComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-countdown.js.map

/***/ })

}]);
//# sourceMappingURL=core-pages-timer-timer-module-es2015.js.map