(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-quiz-quiz-module"],{

/***/ "5DpQ":
/*!***********************************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/quiz-list/modal/examroom-modal/examroom-modal.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ExamroomModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamroomModalComponent", function() { return ExamroomModalComponent; });
/* harmony import */ var _const_icon_path_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../const/icon-path.const */ "T41C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! merc-lib */ "c3fJ");




class ExamroomModalComponent {
    constructor(modal) {
        this.modal = modal;
    }
    get ICON_PATH() {
        return _const_icon_path_const__WEBPACK_IMPORTED_MODULE_0__["ICON_PATH"];
    }
    ngOnInit() {
        this.event = {
            subject: '公會考試-專業科目', examId: 'ABC12345678',
            date: '110/03/04（四）',
            time: '09:00～18:00',
            type: 'ＯＯＯＯ',
            location: '台北考區',
            room: 'ＯＯＯＯ',
            address: 'ＯＯＯＯＯＯＯＯＯＯＯＯＯＯＯＯＯＯＯＯ',
        };
    }
    onSendClick() {
    }
}
ExamroomModalComponent.ɵfac = function ExamroomModalComponent_Factory(t) { return new (t || ExamroomModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalRef"])); };
ExamroomModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExamroomModalComponent, selectors: [["app-examroom-modal"]], inputs: { event: "event" }, decls: 28, vars: 13, consts: [[1, "modal-margin"], [1, "header", "text-center"], [3, "iconType", "iconSize"], [1, "text-20", "text-fatty"], [1, "content"], [1, "pb-3"], [1, "text-secondary", "text-lg"], [1, "mb-3"], [1, "footer", "text-center"], [3, "mercType", "mercWidth", "mercSize", "click"]], template: function ExamroomModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "merc-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u8A66\u5834\u8CC7\u8A0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "merc-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExamroomModalComponent_Template_merc_button_click_26_listener() { return ctx.modal.triggerCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u78BA\u8A8D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("iconType", ctx.ICON_PATH.ALERT)("iconSize", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.event.subject, " \u6E2C\u9A57\u8CC7\u8A0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u51C6\u8003\u8B49\u865F\uFF1A", ctx.event.examId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u6E2C\u9A57\u65E5\u671F\uFF1A", ctx.event.date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u6E2C\u9A57\u6642\u9593\uFF1A", ctx.event.time, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u5831\u8003\u985E\u7D44\uFF1A", ctx.event.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u8003\u5340\uFF1A", ctx.event.location, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u8003\u5834\uFF1A", ctx.event.room, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u8003\u5834\u5730\u5740\uFF1A", ctx.event.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_3__["MercIconComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], styles: [".modal-margin[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 24px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2V4YW1yb29tLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJleGFtcm9vbS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1tYXJnaW57XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGVudHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDI0cHggYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "7loa":
/*!***************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/quiz.module.ts ***!
  \***************************************************************/
/*! exports provided: QuizModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return QuizModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/shared.module */ "S8bE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-routing-module */ "RHea");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "ac7a");
/* harmony import */ var _check_score_check_score_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-score/check-score.component */ "Vt8v");
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz.component */ "Ysoh");
/* harmony import */ var projects_tc_lib_src_lib_tc_lib_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/tc-lib/src/lib/tc-lib.module */ "1tKd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _quiz_list_modal_change_place_change_place_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz-list/modal/change-place/change-place.component */ "xy9R");
/* harmony import */ var _quiz_list_modal_examroom_modal_examroom_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz-list/modal/examroom-modal/examroom-modal.component */ "5DpQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class QuizModule {
}
QuizModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: QuizModule });
QuizModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function QuizModule_Factory(t) { return new (t || QuizModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _quiz_routing_module__WEBPACK_IMPORTED_MODULE_2__["QuizRoutingModule"],
            projects_tc_lib_src_lib_tc_lib_module__WEBPACK_IMPORTED_MODULE_6__["TcLibModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](QuizModule, { declarations: [_quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"],
        _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_3__["QuizListComponent"],
        _check_score_check_score_component__WEBPACK_IMPORTED_MODULE_4__["CheckScoreComponent"],
        _quiz_list_modal_change_place_change_place_component__WEBPACK_IMPORTED_MODULE_8__["ChangePlaceComponent"],
        _quiz_list_modal_examroom_modal_examroom_modal_component__WEBPACK_IMPORTED_MODULE_9__["ExamroomModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _quiz_routing_module__WEBPACK_IMPORTED_MODULE_2__["QuizRoutingModule"],
        projects_tc_lib_src_lib_tc_lib_module__WEBPACK_IMPORTED_MODULE_6__["TcLibModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();


/***/ }),

/***/ "RHea":
/*!***********************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/quiz-routing-module.ts ***!
  \***********************************************************************/
/*! exports provided: QuizRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoutingModule", function() { return QuizRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.component */ "Ysoh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _quiz_component__WEBPACK_IMPORTED_MODULE_1__["QuizComponent"],
    },
];
class QuizRoutingModule {
}
QuizRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: QuizRoutingModule });
QuizRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function QuizRoutingModule_Factory(t) { return new (t || QuizRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuizRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Vt8v":
/*!*************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/check-score/check-score.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CheckScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckScoreComponent", function() { return CheckScoreComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_models_pageset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/models/pageset */ "dtlk");
/* harmony import */ var _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../tc-lib/src/lib/const/device.const */ "5V4s");
/* harmony import */ var _const_icon_path_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../const/icon-path.const */ "T41C");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock */ "lCxi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.service */ "VVBw");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");


















function CheckScoreComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u7DE8\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CheckScoreComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", table_r5.header, " ");
} }
function CheckScoreComponent_tr_59_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");
} }
function CheckScoreComponent_tr_59_td_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const table_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r6[table_r12.primaryKey]);
} }
function CheckScoreComponent_tr_59_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const table_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r6[table_r12.primaryKey]);
} }
function CheckScoreComponent_tr_59_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CheckScoreComponent_tr_59_td_2_ng_container_1_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CheckScoreComponent_tr_59_td_2_ng_container_2_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-title", table_r12.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", table_r12.primaryKey !== "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", table_r12.primaryKey === "status");
} }
function CheckScoreComponent_tr_59_merc_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "merc-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u6210\u7E3E\u8907\u67E5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mercType", "secondary")("mercSize", ctx_r10.sharedService.userDevice === ctx_r10.DEVICE.PAD ? "large" : "small");
} }
function CheckScoreComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CheckScoreComponent_tr_59_td_1_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CheckScoreComponent_tr_59_td_2_Template, 3, 3, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CheckScoreComponent_tr_59_merc_button_4_Template, 2, 2, "merc-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.tableSetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", data_r6.score !== "\u5F85\u6E2C\u9A57");
} }
function CheckScoreComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "merc-icon", 2);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("iconType", ctx_r4.ICON_PATH.CALENDAR)("iconSize", 23);
} }
class CheckScoreComponent {
    constructor(sharedService, formBuilder, swiperDatePickerService, taiwanDatePipe) {
        this.sharedService = sharedService;
        this.formBuilder = formBuilder;
        this.swiperDatePickerService = swiperDatePickerService;
        this.taiwanDatePipe = taiwanDatePipe;
        this.scoreList = _mock__WEBPACK_IMPORTED_MODULE_6__["mockTable"];
        this.pageSet = new _core_models_pageset__WEBPACK_IMPORTED_MODULE_3__["PageSet"]();
        this.DEVICE = _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_4__["DEVICE"];
        this.tableSetting = [
            { header: '測驗名稱', primaryKey: 'title' },
            { header: '地區', primaryKey: 'location' },
            { header: '期別', primaryKey: 'class' },
            { header: '測驗日期', primaryKey: 'quiz_date' },
            { header: '狀態', primaryKey: 'status' },
            { header: '測驗成績', primaryKey: 'score' },
        ];
    }
    get ICON_PATH() { return _const_icon_path_const__WEBPACK_IMPORTED_MODULE_5__["ICON_PATH"]; }
    ngOnInit() {
        this.handleShowData();
        this.pageSet.initialize(_mock__WEBPACK_IMPORTED_MODULE_6__["mockTable"].length);
        this.initForm();
    }
    initForm() {
        this.searchForm = this.formBuilder.group({
            keyword: [''],
            str_date: [moment__WEBPACK_IMPORTED_MODULE_2__().add(-2, 'M').valueOf()],
            end_date: [moment__WEBPACK_IMPORTED_MODULE_2__().add(1, 'M').valueOf()],
            display_str_date: [this.taiwanDatePipe.transform(moment__WEBPACK_IMPORTED_MODULE_2__().add(-2, 'M').valueOf(), true)],
            display_end_date: [this.taiwanDatePipe.transform(moment__WEBPACK_IMPORTED_MODULE_2__().add(1, 'M').valueOf(), true)]
        });
    }
    scrollbarControl() {
        if (this.sharedService.userDevice === _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_4__["DEVICE"].MOBILE) {
            return { x: '960px' };
        }
        else {
            return {};
        }
    }
    /**
     * 點選起日
     */
    onSelectStartDateClick() {
        const form = this.searchForm.getRawValue();
        const start = moment__WEBPACK_IMPORTED_MODULE_2__().add(-2, 'M').valueOf();
        const defaultDate = form.str_date ? form.str_date : start;
        const maxDate = moment__WEBPACK_IMPORTED_MODULE_2__().valueOf();
        this.swiperDatePickerService.openDatePicker({ defaultDate, dateType: merc_lib__WEBPACK_IMPORTED_MODULE_1__["DateType"].startDate }).afterClose.subscribe(date => {
            var _a, _b, _c, _d, _e, _f;
            if (date) {
                // 必須設定結束日期
                (_a = this.searchForm.get('display_end_date')) === null || _a === void 0 ? void 0 : _a.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
                const formatDate = this.taiwanDatePipe.transform(date, true);
                (_b = this.searchForm.get('str_date')) === null || _b === void 0 ? void 0 : _b.patchValue(date);
                (_c = this.searchForm.get('display_str_date')) === null || _c === void 0 ? void 0 : _c.patchValue(formatDate);
                // 若選擇的起始日大於原本選擇的到期日就刪除他
                const selectStartDate = date;
                const selectEndDate = (_d = this.searchForm.get('end_date')) === null || _d === void 0 ? void 0 : _d.value;
                if (moment__WEBPACK_IMPORTED_MODULE_2__(selectEndDate).isBefore(selectStartDate)) {
                    (_e = this.searchForm.get('end_date')) === null || _e === void 0 ? void 0 : _e.patchValue('');
                    (_f = this.searchForm.get('display_end_date')) === null || _f === void 0 ? void 0 : _f.patchValue('');
                }
            }
        });
    }
    /**
     * 點選迄日
     */
    onSelectEndDateClick() {
        const form = this.searchForm.getRawValue();
        const defaultDate = form.end_date || form.str_date;
        const minDate = form.str_date || null;
        console.log(defaultDate);
        this.swiperDatePickerService.openDatePicker({ defaultDate, minDate, dateType: merc_lib__WEBPACK_IMPORTED_MODULE_1__["DateType"].endDate }).afterClose.subscribe(date => {
            var _a, _b, _c;
            if (date) {
                // 必須設定開始日期
                (_a = this.searchForm.get('display_str_date')) === null || _a === void 0 ? void 0 : _a.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
                const formatDate = this.taiwanDatePipe.transform(date, true);
                (_b = this.searchForm.get('end_date')) === null || _b === void 0 ? void 0 : _b.patchValue(date);
                (_c = this.searchForm.get('display_end_date')) === null || _c === void 0 ? void 0 : _c.patchValue(formatDate);
            }
        });
    }
    onSearchClick() {
    }
    /**
     * 清除鈕
     */
    onClearClick() {
    }
    /** 換頁 */
    onChangePageIndex(pageIndex) {
        if (pageIndex < 1 || pageIndex > this.pageSet.totalPages) {
            return;
        }
        this.pageSet.currentPage = pageIndex;
        this.handleShowData();
        console.log(this.pageSet.currentPage);
    }
    /** 顯示資料 */
    handleShowData() {
        this.scoreList = _mock__WEBPACK_IMPORTED_MODULE_6__["mockTable"].slice((this.pageSet.currentPage - 1) * this.pageSet.currentPageSize, (this.pageSet.currentPage) * this.pageSet.currentPageSize);
    }
}
CheckScoreComponent.ɵfac = function CheckScoreComponent_Factory(t) { return new (t || CheckScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_1__["SwiperDatePickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_1__["TaiwanDatePipe"])); };
CheckScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CheckScoreComponent, selectors: [["app-check-score"]], decls: 62, vars: 39, consts: [[1, "tab-box"], [1, "search-header", "text-20", "text-fatty", "pb-3"], [3, "iconType", "iconSize"], [1, "search-zone"], ["nz-form", "", 3, "formGroup", "nzLayout"], [1, "row"], [1, "col-md-3", "col-12"], [1, "font-weight-bold"], [3, "nzErrorTip"], ["formControlName", "keyword", "type", "text", "nz-input", "", "placeholder", "\u8ACB\u8F38\u5165\u95DC\u9375\u5B57", 3, "nzSize"], [1, "col-12", "col-md-6"], [1, "col-6"], [1, "date-picker", "date-picker-wave", 3, "nzSize", "nzSuffix", "click"], ["formControlName", "display_str_date", "type", "text", "nz-input", "", "placeholder", "\u8ACB\u9078\u64C7\u8D77\u65E5", 3, "nzSize", "readOnly"], [2, "opacity", "0"], [1, "date-picker", 3, "nzSize", "nzSuffix", "click"], ["formControlName", "display_end_date", "type", "text", "nz-input", "", "placeholder", "\u8ACB\u9078\u64C7\u8FC4\u65E5", 3, "readOnly"], [1, "col-md-3", "col-12", "search-btns"], [3, "mercType", "outline", "mercSize", "mercWidth", "click"], [1, "ms-3", 3, "mercType", "mercSize", "mercWidth", "click"], [1, "mb-4"], [1, "table-header"], [1, "text-md", "mx-3", 3, "mercType", "mercSize"], [1, "pagination"], [1, "pagesize", "py-2", "py-md-0"], [3, "ngModel", "ngModelChange"], ["nzLabel", "10", 3, "nzValue"], ["nzLabel", "25", 3, "nzValue"], ["nzLabel", "50", 3, "nzValue"], [1, "pagechange"], [3, "iconType", "iconSize", "click"], [3, "mercType", "headTextColor"], ["class", "text-center", 4, "ngIf"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["calendar_icon", ""], ["class", "text-lg-center", 4, "ngFor", "ngForOf"], ["data-title", "\u52D5\u4F5C", 1, "text-center"], ["nz-button", "", 3, "mercType", "mercSize", 4, "ngIf"], [1, "text-lg-center"], [4, "ngIf"], ["nz-button", "", 3, "mercType", "mercSize"]], template: function CheckScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "merc-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " \u67E5\u8A62\u689D\u4EF6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u95DC\u9375\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\u4E0A\u8AB2\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nz-input-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CheckScoreComponent_Template_nz_input_group_click_20_listener() { return ctx.onSelectStartDateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "nz-form-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "\u8FC4\u65E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "nz-input-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CheckScoreComponent_Template_nz_input_group_click_27_listener() { return ctx.onSelectEndDateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "merc-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CheckScoreComponent_Template_merc_button_click_30_listener() { return ctx.onClearClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "\u6E05\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "merc-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CheckScoreComponent_Template_merc_button_click_32_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\u67E5\u8A62");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " \u6210\u7E3E\u5217\u8868 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "merc-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "\u7533\u8ACB\u8B49\u66F8\u88DC\u767C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " \u6BCF\u9801\u986F\u793A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "nz-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CheckScoreComponent_Template_nz_select_ngModelChange_42_listener($event) { return ctx.pageSet.currentPageSize = $event; })("ngModelChange", function CheckScoreComponent_Template_nz_select_ngModelChange_42_listener() { return ctx.handleShowData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "nz-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "nz-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "nz-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " \u7B46 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "merc-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CheckScoreComponent_Template_merc_icon_click_48_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "merc-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CheckScoreComponent_Template_merc_icon_click_50_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "merc-flex-table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, CheckScoreComponent_th_54_Template, 2, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, CheckScoreComponent_th_55_Template, 2, 1, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "\u52D5\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, CheckScoreComponent_tr_59_Template, 5, 3, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, CheckScoreComponent_ng_template_60_Template, 1, 2, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("iconType", ctx.ICON_PATH.BTN_SEARCH)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.searchForm)("nzLayout", "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzSize", "large")("nzSuffix", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzSize", "large")("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzSize", "large")("nzSuffix", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mercType", "third")("outline", true)("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mercType", "third")("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mercType", "third")("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.pageSet.currentPageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("iconType", ctx.ICON_PATH.PREV_STEP)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" \u7B2C", ctx.pageSet.currentPage, "\u9801, \u5171", ctx.pageSet.totalPages, "\u9801 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("iconType", ctx.ICON_PATH.NEXT_STEP)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mercType", "primary")("headTextColor", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sharedService.userDevice === ctx.DEVICE.PAD);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.tableSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.scoreList);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_1__["MercIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputGroupWhitSuffixOrPrefixDirective"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzOptionComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["FlexTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTrDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTbodyComponent"]], styles: [".date-picker.date-picker-wave[_ngcontent-%COMP%]::after {\n  line-height: unset;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NoZWNrLXNjb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUFBUjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJjaGVjay1zY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlLXBpY2tlciB7XG4gICAgJi5kYXRlLXBpY2tlci13YXZlOjphZnRlciB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB1bnNldDtcbiAgICB9XG59XG50ZDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "Yev/":
/*!******************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/quiz-list/mock.ts ***!
  \******************************************************************/
/*! exports provided: mockTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockTable", function() { return mockTable; });
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/quiz.enum */ "Yn/n");

const mockTable = [
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid
    },
    {
        title: '公會考試',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying
    },
    {
        title: '公會考試-專業科目',
        location: '桃竹區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110123',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110123',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110123',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking
    },
    {
        title: '公會班',
        location: '嘉義區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying
    }, {
        title: '公會考試-專業科目',
        location: '台南區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus
    },
    {
        title: '公會考試-專業科目',
        location: '台南區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台南區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    }, {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus
    },
    {
        title: '公公會考試-專業科目會班',
        location: '高雄區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110456',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110456',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus
    }, {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        register_date: '110/02/04～110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss
    },
];


/***/ }),

/***/ "Ysoh":
/*!******************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/quiz.component.ts ***!
  \******************************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _const_tab_param_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const/tab-param.const */ "yjt8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "ac7a");
/* harmony import */ var _check_score_check_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check-score/check-score.component */ "Vt8v");







const _c0 = function () { return ["."]; };
const _c1 = function (a0) { return { tab: a0 }; };
function QuizComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u6E2C\u9A57\u5217\u8868 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r0.TAB_PARAM.QUIZ_LIST));
} }
function QuizComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u6210\u7E3E\u67E5\u8A62");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r1.TAB_PARAM.CHECK_SCORE));
} }
class QuizComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.selectedIndex = 0;
    }
    get TAB_PARAM() { return _const_tab_param_const__WEBPACK_IMPORTED_MODULE_0__["TAB_PARAM"]; }
    ngOnInit() {
    }
    /**
     * 取得 param
     * @param callback 取得queryParam後答覆
     */
    setInitParam(callback) {
        this.route.queryParams.subscribe(params => {
            callback(params);
        });
    }
    /** 選取tab序號 */
    selectTab(index) {
        this.selectedIndex = index;
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], decls: 8, vars: 4, consts: [[3, "mercType", "mercSize"], ["nzLinkRouter", "", 3, "nzType", "nzTabBarGutter", "nzSelectedIndexChange"], [1, "normal-padding"], ["nz-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "queryParams", 4, "nzTabLink"], ["nz-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "queryParams"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "merc-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-tabset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzSelectedIndexChange", function QuizComponent_Template_nz_tabset_nzSelectedIndexChange_1_listener($event) { return ctx.selectTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QuizComponent_a_3_Template, 2, 5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-quiz-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, QuizComponent_a_6_Template, 2, 5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-check-score");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mercType", "secondary")("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "card")("nzTabBarGutter", 10);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_3__["MercTabComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabLinkTemplateDirective"], _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_5__["QuizListComponent"], _check_score_check_score_component__WEBPACK_IMPORTED_MODULE_6__["CheckScoreComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-card[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0;\n  border: rgba(153, 153, 153, 0.2) 1px solid;\n  box-shadow: none;\n  background-color: #fff;\n  border-radius: 6px;\n  \n  \n  \n  \n  \n  \n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-self: center;\n  font-size: 25px;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 6px 6px 0 0;\n  color: #fff;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-content[_ngcontent-%COMP%] {\n  display: block;\n  padding: 35px 15px;\n}\n.merc-card.merc-card-primary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\n.merc-card.merc-card-primary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\n.merc-card.merc-card-secondary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\n.merc-card.merc-card-secondary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\n.merc-card.merc-card-third[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\n.merc-card.merc-card-third-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary-variant[_ngcontent-%COMP%] {\n  color: #ec6122;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary[_ngcontent-%COMP%] {\n  color: #ff6621;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary-variant[_ngcontent-%COMP%] {\n  color: #f8c73f;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third[_ngcontent-%COMP%] {\n  color: #58a8dd;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third-variant[_ngcontent-%COMP%] {\n  color: #fffaf1;\n}\n.merc-card.merc-card-small[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-card.merc-card-normal[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.merc-card.merc-card-large[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-table[_ngcontent-%COMP%] {\n  \n  \n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-header[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%] {\n  overflow-y: overlay !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > .ant-table-row[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]   .ant-table-column-has-sorters[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-placeholder[_ngcontent-%COMP%]   .ant-table-expanded-row-fixed[_ngcontent-%COMP%] {\n  margin: -4px -8px;\n  min-width: 100%;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\nmerc-table[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 0;\n  background-color: transparent;\n  position: absolute;\n  top: 50%;\n  right: 26px;\n  transform: translateY(-50%);\n  display: flex;\n  flex-wrap: nowrap;\n  transition: opacity 0.3s, background-color 0.3s;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) {\n  background-color: #c9c9c9;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)   .hover-to-edit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nmerc-table.merc-table-primary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\nmerc-table.merc-table-primary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\nmerc-table.merc-table-secondary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\nmerc-table.merc-table-secondary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\nmerc-table.merc-table-third[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\nmerc-table.merc-table-third-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-flex-table-primary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #e6002d;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #e6002d;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ec6122;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ec6122;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ff6621;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ff6621;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #f8c73f;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #f8c73f;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #58a8dd;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #58a8dd;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #fffaf1;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #fffaf1;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-tab[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  \n  \n  \n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%] {\n  border: 0;\n  margin-bottom: 0px;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]::before {\n  border-bottom: hidden;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  border: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6002d;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6002d;\n  border-bottom-width: 0px !important;\n  padding: 0 15px;\n  height: 35px;\n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%]   .ant-tabs-close-x[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 16px;\n  height: 18px;\n  margin-right: 0 !important;\n  vertical-align: middle;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%]   .ant-tabs-tab-btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #fff;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-small[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 25px;\n}\nmerc-tab.merc-tab-normal[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 35px;\n}\nmerc-tab.merc-tab-large[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.toggle-float-btn[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #e6002d;\n  color: white;\n  border: 1px solid #e6002d;\n  border-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  height: 40px;\n  padding: 0 16px;\n  line-height: 38px;\n  cursor: pointer;\n}\n.toggle-float-btn[_ngcontent-%COMP%]   .toggle-wrap[_ngcontent-%COMP%] {\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n}\nmerc-tab[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\nmerc-tab[mercType=primary][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\nmerc-tab[mercType=primaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\nmerc-tab[mercType=secondary][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\nmerc-tab[mercType=secondaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\nmerc-tab[mercType=third][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\nmerc-tab[mercType=thirdVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\nmerc-tab[mercSize=small][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 30px;\n}\nmerc-tab[mercSize=normal][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 42px;\n}\nmerc-tab[mercSize=large][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  \n  \n  \n  \n  \n  \n  \n}\n.merc-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 2px 0 rgba(21, 28, 42, 0.17);\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #bd0025;\n  border: 1px solid #bd0025;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #e6002d;\n  background-color: #fff;\n  color: #e6002d;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #9a001e;\n  border: 1px solid #9a001e;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d34e12;\n  border: 1px solid #d34e12;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ec6122;\n  background-color: #fff;\n  color: #ec6122;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b2420f;\n  border: 1px solid #b2420f;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f74d00;\n  border: 1px solid #f74d00;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ff6621;\n  background-color: #fff;\n  color: #ff6621;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #d44200;\n  border: 1px solid #d44200;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f7bc18;\n  border: 1px solid #f7bc18;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #f8c73f;\n  background-color: #fff;\n  color: #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #e2a908;\n  border: 1px solid #e2a908;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #3696d6;\n  border: 1px solid #3696d6;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #58a8dd;\n  background-color: #fff;\n  color: #58a8dd;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #2784c1;\n  border: 1px solid #2784c1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ffebc8;\n  border: 1px solid #ffebc8;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #fffaf1;\n  background-color: #fff;\n  color: #fffaf1;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #ffdfa5;\n  border: 1px solid #ffdfa5;\n}\n.merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active    > *[_ngcontent-%COMP%], .merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover    > *[_ngcontent-%COMP%] {\n  transition: filter 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  filter: brightness(0.6);\n}\n.merc-btn.merc-btn-small[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-btn.merc-btn-normal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.merc-btn.merc-btn-large[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.merc-btn.merc-btn-xs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.merc-btn.merc-btn-sm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.merc-btn.merc-btn-md[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.merc-btn.merc-btn-lg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.merc-btn.merc-btn-xl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.merc-btn.disabled[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.25);\n  background: #f5f5f5;\n  border-color: #d9d9d9;\n  text-shadow: none;\n  box-shadow: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  max-width: 200px;\n  min-width: 160px;\n  position: relative;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%]:hover   .clear[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 7px;\n  padding: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: white;\n  z-index: 999;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .selected-date[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 115%;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  min-width: 200px;\n  background-color: #fff;\n  z-index: 999;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 2px 0;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 16px;\n  text-align: center;\n  color: #e6002d;\n  display: inline-block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .week[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .months[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .not-present[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected.not-present[_ngcontent-%COMP%] {\n  background-color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #e6002d;\n  color: #e6002d;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today.not-present[_ngcontent-%COMP%] {\n  color: #efefef;\n  cursor: not-allowed;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%] {\n  color: #efefef;\n  margin: 10px;\n  opacity: 0.8;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .suffix-icon[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n .merc-year-select .ant-select-selection-item {\n  padding-right: 15px !important;\n}\n .merc-year-select .ant-select-item {\n  padding: 5px 8px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-calendar[_ngcontent-%COMP%]   .rocYear[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n@media screen and (max-width: 750px) {\n  .merc-calendar[_ngcontent-%COMP%]   .rocYear[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 45px;\n    justify-content: center;\n  }\n}\n.merc-calendar[_ngcontent-%COMP%]   .rocYear-title[_ngcontent-%COMP%] {\n  position: relative;\n  top: 38px;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: #ff6621 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[disabled][_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n  border: #d9d9d9 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:hover:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:active:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .focus-today[_ngcontent-%COMP%] {\n  background-color: #ff8954;\n  border: #ff8954 1px solid;\n}\na[_ngcontent-%COMP%] {\n  color: unset;\n  transition: color 0.1s;\n}\na[_ngcontent-%COMP%]:active {\n  color: unset;\n}\na[_ngcontent-%COMP%]:hover {\n  color: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3F1aXouY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jdXN0b20tc2V0dGluZy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9zdHlsZXMvY3VzdG9tLXNldHRpbmcuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvc3R5bGVzL19jb21wb25lbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lcmMtY2FyZC9tZXJjLWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lcmMtdGFibGUvbWVyYy10YWJsZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZmxleC10YWJsZS9mbGV4LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9tZXJjLXRhYi9tZXJjLXRhYi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWVyYy10YWIvdG9nZ2xlLWNvbGxhcHNlL3RvZ2dsZS1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvZGF0ZS9jb21wb25lbnRzL3JvYy1kYXRlLXBpY2tlci9yb2MtZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2RhdGUvY29tcG9uZW50cy9tZXJjLWNhbGVuZGFyL21lcmMtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGFBQUE7QUEwQkEsWUFBQTtBQWNBLFlBQUE7QUFDQSxtQkFBQTtBQWlCQSxpQkFBQTtBQUVBLG9CQUFBO0FBbUJBLGtCQUFBO0FBRUEscUJBQUE7QUFvQkEsbUJBQUE7QUFhQSxpQkFBQTtBQ2xIQSx3REFBQTtBQUNBLGFBQUE7QUF1QkEsWUFBQTtBQWNBLFlBQUE7QUFDQSxtQkFBQTtBQWlCQSxpQkFBQTtBQUVBLG9CQUFBO0FBbUJBLGtCQUFBO0FBRUEscUJBQUE7QUFvQkEsbUJBQUE7QUFhQSxpQkFBQTtBQ2hIQSxhQUFBO0FEQUEsd0RBQUE7QUFDQSxhQUFBO0FBdUJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QUU5R0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBa0JBLHNCQUFBO0VBeUJBLG9CQUFBO0VBRUEsc0JBQUE7RUFPQSxrQkFBQTtFQUVBLG9CQUFBO0VBYUEsa0JBQUE7QUo1Qko7QUlyQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtF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LHlCVDdHZTtBRHl2Q25CO0FVeG9DRTtFQS9IQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQStIRSw2QkFBQTtFQUNBLGNUaklZO0VTa0laLGVBQUE7QVY0b0NKO0FVM29DSTtFQUNFLGNUdkhhO0VTd0hiLG1CQUFBO0FWNm9DTjtBVXpvQ0U7RUFDRSxjVDdIZTtFUzhIZixZQUFBO0VBQ0EsWUFBQTtBVjJvQ0o7QVV4b0NFO0VBQ0UsY1RoSlk7QUQweENoQjtBVXJvQ0U7RUFDRSw4QkFBQTtBVndvQ0o7QVVyb0NFO0VBQ0UsZ0JBQUE7QVZ1b0NKO0FFcnlDQSx3REFBQTtBQUNBLGFBQUE7QUF1QkEsWUFBQTtBQWNBLFlBQUE7QUFDQSxtQkFBQTtBQWlCQSxpQkFBQTtBQUVBLG9CQUFBO0FBbUJBLGtCQUFBO0FBRUEscUJBQUE7QUFvQkEsbUJBQUE7QUFhQSxpQkFBQTtBUzlHSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QVhpekNSO0FXaHpDUTtFQUpKO0lBS1Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7RVhtekNWO0FBQ0Y7QVdqekNJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QVhtekNSO0FXanpDSTtFQUdJLHlCVmRVO0VVZVYseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBWGl6Q1I7QVcveUNJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FYaXpDUjtBVy95Q0k7OztFQUdJLHlCQUFBO0VBQ0EseUJBQUE7QVhpekNSO0FBcjFDQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQXcxQ0o7QUF0MUNBO0VBQ0ksWUFBQTtBQXkxQ0o7QUF0MUNBO0VBQ0ksWUFBQTtBQXkxQ0oiLCJmaWxlIjoicXVpei5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2N1c3RvbS1zZXR0aW5nLnNjc3MnO1xuYXtcbiAgICBjb2xvcjogdW5zZXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbn1cbmE6YWN0aXZlIHtcbiAgICBjb2xvcjogdW5zZXQ7XG59XG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiB1bnNldDtcbn1cbiIsIi8qKiDln7rnpI7lip/og73oibLoqK3lrpogKi9cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4vLyDkuLvopoHoibJcbiRwcmltYXJ5LWNvbG9yOiAjZTYwMDJkO1xuLy8g5Li76KaB6Imy6K6K5b2iXG4kcHJpbWFyeS12YXJpYW50LWNvbG9yOiAjZWM2MTIyO1xuLy8g5qyh6KaB6ImyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NjIxO1xuLy8g5qyh6KaB6Imy6K6K5b2iXG4kc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I6ICNmOGM3M2Y7XG4vLyDnrKzkuInoibJcbiR0aGlyZC1jb2xvcjogIzU4YThkZDtcbi8vIOesrOS4ieiJsuiuiuW9olxuJHRoaXJkLXZhcmlhbnQtY29sb3I6ICNmZmZhZjE7XG5cbi8vIOa3uueBsFxuJGNvbG9yLWxpZ2h0LWdyYXk6ICNlZmVmZWY7XG4vLyDmt7HngbBcbiRjb2xvci1kYXJrLWdyYXk6ICMzMzMzMzM7XG4vLyDnmb1cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1zaWx2ZXI6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKTtcbiRjb2xvci1saWdodGVyLWdyYXk6ICNmOWY5Zjk7XG4kY29sb3ItZ3JlZW46ICM4N2I4NDg7XG5cbi8qKiDln7rnpI7lhYPku7boqK3lrpogKi9cbiRmb250LXN6OiAoXG4gIHhsOiAyNXB4LFxuICBsZzogMThweCxcbiAgbWQ6IDE2cHgsXG4gIHNtOiAxNHB4LFxuICB4czogMTJweCxcbik7XG5cbiRmb250LXdlaWdodDogKFxuICBmYXR0eTogNjAwLFxuICBub3JtYWw6IG5vcm1hbCxcbik7XG5cbi8qKiDluLjnlKjlhYPku7boqK3lrpogKi9cbi8qIGJhc2UgYnRuIHN0YXJ0ICovXG4kYnRuOiAoXG4gIGJvcmRlci1yYWRpdXM6IDNweCxcbiAgc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYmEoMjEsIDI4LCA0MiwgMC4xNyksXG4pO1xuJGJ0bi1oZWlnaHQ6IChcbiAgbGc6IDQwcHgsXG4gIG1kOiAzNXB4LFxuICBzbTogMzBweCxcbik7XG4kYnRuLXdpZHRoOiAoXG4gIHhsOiAyMDBweCxcbiAgbGc6IDE2MHB4LFxuICBtZDogMTIwcHgsXG4gIHNtOiA5MHB4LFxuICB4czogNzBweCxcbik7XG4vKiBiYXNlIGJ0biBlbmQgKi9cblxuLyoqIGJhc2UgY2FyZCBzdGFydCovXG4kYmFzZS1jYXJkOiAoXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSxcbiAgYm94LXNoYWRvdzogbm9uZSxcbiAgcGFkZGluZzogMCxcbiAgYm9yZGVyOiAkY29sb3Itc2lsdmVyIDFweCBzb2xpZCxcbiAgYm9yZGVyLXJhZGl1czogNnB4LFxuKTtcblxuJGJhc2UtY2FyZC1oZWFkZXI6IChcbiAgYWxpZ24tc2VsZjogY2VudGVyLFxuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIHhsKSxcbiAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJGZvbnQtd2VpZ2h0LCBmYXR0eSksXG4gIHBhZGRpbmc6IDEwcHggMjBweCxcbik7XG5cbiRiYXNlLWNhcmQtY29udGVudDogKFxuICBwYWRkaW5nOiAzNXB4IDE1cHgsXG4pO1xuLyoqIGJhc2UgY2FyZCBlbmQqL1xuXG4vKiBiYXNlIHRhYmxlIHN0YXJ0ICovXG4kYmFzZS10YWJsZTogKFxuICAvLyBob3ZlciDpoY/oibJcbiAgaG92ZXItYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1saWdodC1ncmF5LCAxNSUpLFxuICAvLyDplpPpmpToibJcbiAgZXZlbi1jb2wtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yLFxuICAvLyDlnJPop5JcbiAgcmFkaXVzOiA3cHgsXG4gIC8vIOmZsOW9sVxuICBzaGFkb3c6IDFweCAycHggNHB4ICNkNWQ1ZDUsXG4gIC8vIOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqUXG4gIHBhZGRpbmc6IDhweCA4cHgsXG4gIC8vIOaJi+apn+eJiOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqU77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcbiAgbW8tcGFkZGluZzogM3B4IDhweCxcbiAgLy8g5bm+cHjku6XkuIvkvb/nlKjmiYvmqZ/niYjvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBicmVhay1wb2ludDogNzY3cHgsXG4gIC8vIOashOS9jeS4i+aWueeahGJvcmRlci1ib3R0b23vvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBtby1ib3JkZXItYm90dG9tLXdpZHRoOiAwcHhcbik7XG5cbi8qIGJhc2UgdGFiIHN0YXJ0ICovXG4kYmFzZS10YWI6IChcbiAgLy8g6aGP6ImyKG1lcmMtdGFiIOacquWCs+WFpSBtZXJjVHlwZSDmmYLmnInmlYgpXG4gIHRhYi1jb2xvcjogJHByaW1hcnktY29sb3IsXG4gIC8vIHRhYiDpgormoYZcbiAgdGFiLWJvcmRlci13aWR0aDogMXB4LFxuICAvLyBjb250ZW50IOmCiuahhlxuICBjb250ZW50LWJvcmRlci13aWR0aDogMXB4LFxuICAvLyDlnJPop5JcbiAgcmFkaXVzOiA3cHgsXG4gIC8vIOWtl+mrlOWkp+Wwj1xuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIGxnKVxuKTtcbi8qIGJhc2UgdGFiIGVuZCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvc3R5bGVzL21lcmMtbGliLnNjc3NcIjtcbiIsIi8qIOatpHNjc3PngrrlhYPku7blhafnmoQgY3VzdG9tLXNldHRpbmfvvIzoiIflnJbmm7jppKjlhajln5/nmoQgY3VzdG9tLXNldHRpbmcg5LiN5ZCMICovXG4vKiog5Z+656SO5Yqf6IO96Imy6Kit5a6aICovXG4kY29sb3Itd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kY29sb3ItZGFyazogcmdiYSgwLCAwLCAwLCAwLjgpICFkZWZhdWx0O1xuLy8g5Li76KaB6ImyXG4kcHJpbWFyeS1jb2xvcjogI2I5ZTFlNCAhZGVmYXVsdDtcbi8vIOS4u+imgeiJsuiuiuW9olxuJHByaW1hcnktdmFyaWFudC1jb2xvcjogIzU0YmU5ZiAhZGVmYXVsdDtcbi8vIOasoeimgeiJslxuJHNlY29uZGFyeS1jb2xvcjogIzRiOGFjNSAhZGVmYXVsdDtcbi8vIOasoeimgeiJsuiuiuW9olxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjZTZmM2Y3ICFkZWZhdWx0O1xuLy8g56ys5LiJ6ImyXG4kdGhpcmQtY29sb3I6ICM4MDAwODAgIWRlZmF1bHQ7XG4vLyDnrKzkuInoibLororlvaJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZWVkN2VkICFkZWZhdWx0O1xuXG4vLyDmt7rngbBcbiRjb2xvci1saWdodC1ncmF5OiAjZTVlNWU1ICFkZWZhdWx0O1xuXG4vLyDpoY/oibLlrprnvqnljIVcbiRjb2xvclNldDogXCJwcmltYXJ5XCIgJHByaW1hcnktY29sb3IsIFwicHJpbWFyeS12YXJpYW50XCIgJHByaW1hcnktdmFyaWFudC1jb2xvciwgXCJzZWNvbmRhcnlcIiAkc2Vjb25kYXJ5LWNvbG9yLFxuICBcInNlY29uZGFyeS12YXJpYW50XCIgJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCBcInRoaXJkXCIgJHRoaXJkLWNvbG9yLCBcInRoaXJkLXZhcmlhbnRcIiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcblxuLyoqIOWfuuekjuWFg+S7tuioreWumiAqL1xuJGZvbnQtc3o6IChcbiAgeGw6IDMwcHgsXG4gIGxnOiAxOHB4LFxuICBtZDogMTZweCxcbiAgc206IDE0cHgsXG4gIHhzOiAxMnB4LFxuKSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0OiAoXG4gIGZhdHR5OiA2MDAsXG4gIG5vcm1hbDogbm9ybWFsLFxuKSAhZGVmYXVsdDtcblxuLyoqIOW4uOeUqOWFg+S7tuioreWumiAqL1xuLyogYmFzZSBidG4gc3RhcnQgKi9cbiRidG46IChcbiAgYm9yZGVyLXJhZGl1czogN3B4LFxuICBzaGFkb3c6IDFweCAxcHggMnB4IDAgcmdiYSgyMSwgMjgsIDQyLCAwLjE3KSxcbikgIWRlZmF1bHQ7XG4kYnRuLWhlaWdodDogKFxuICBsZzogNDBweCxcbiAgbWQ6IDM1cHgsXG4gIHNtOiAzMHB4LFxuKSAhZGVmYXVsdDtcbiRidG4td2lkdGg6IChcbiAgeGw6IDIwMHB4LFxuICBsZzogMTUwcHgsXG4gIG1kOiAxMjBweCxcbiAgc206IDkwcHgsXG4gIHhzOiA2MHB4LFxuKSAhZGVmYXVsdDtcbi8qIGJhc2UgYnRuIGVuZCAqL1xuXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cbiRiYXNlLWNhcmQ6IChcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLFxuICBib3gtc2hhZG93OiBub25lLFxuICBwYWRkaW5nOiAwLFxuICBib3JkZXI6IDAsXG4gIGJvcmRlci1yYWRpdXM6IDZweCxcbikgIWRlZmF1bHQ7XG5cbiRiYXNlLWNhcmQtaGVhZGVyOiAoXG4gIGFsaWduLXNlbGY6IGNlbnRlcixcbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZyksXG4gIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRmb250LXdlaWdodCwgZmF0dHkpLFxuICBwYWRkaW5nOiAwIDE1cHgsXG4pICFkZWZhdWx0O1xuXG4kYmFzZS1jYXJkLWNvbnRlbnQ6IChcbiAgcGFkZGluZzogMTBweCAxNXB4LFxuKSAhZGVmYXVsdDtcbi8qKiBiYXNlIGNhcmQgZW5kKi9cblxuLyogYmFzZSB0YWJsZSBzdGFydCAqL1xuJGJhc2UtdGFibGU6IChcbiAgLy8gaG92ZXIg6aGP6ImyXG4gIGhvdmVyLWJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3ItbGlnaHQtZ3JheSwgMTUlKSxcbiAgLy8g6ZaT6ZqU6ImyXG4gIGV2ZW4tY29sLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheSxcbiAgLy8g5ZyT6KeSXG4gIHJhZGl1czogN3B4LFxuICAvLyDpmbDlvbFcbiAgc2hhZG93OiAxcHggMnB4IDRweCAjZDVkNWQ1LFxuICAvLyDooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malFxuICBwYWRkaW5nOiA0cHggOHB4LFxuICAvLyDmiYvmqZ/niYjooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLXBhZGRpbmc6IDEwcHggOHB4LFxuICAvLyDlub5weOS7peS4i+S9v+eUqOaJi+apn+eJiO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIGJyZWFrLXBvaW50OiA5OTFweCxcbiAgLy8g5qyE5L2N5LiL5pa555qEYm9yZGVyLWJvdHRvbe+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLWJvcmRlci1ib3R0b20td2lkdGg6IDFweFxuKSAhZGVmYXVsdDtcblxuLyogYmFzZSB0YWIgc3RhcnQgKi9cbiRiYXNlLXRhYjogKFxuICAvLyDpoY/oibIobWVyYy10YWIg5pyq5YKz5YWlIG1lcmNUeXBlIOaZguacieaViClcbiAgdGFiLWNvbG9yOiAkcHJpbWFyeS1jb2xvcixcbiAgLy8gdGFiIOe3qOahhlxuICB0YWItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIC8vIGNvbnRlbnQg57eo5qGGXG4gIGNvbnRlbnQtYm9yZGVyLXdpZHRoOiAxMHB4LFxuICAvLyDlnJPop5JcbiAgcmFkaXVzOiA3cHgsXG4gIC8vIOWtl+mrlOWkp+Wwj1xuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIGxnKVxuKSAhZGVmYXVsdDtcbi8qIGJhc2UgdGFiIGVuZCAqL1xuIiwiLyog5YWD5Lu2IHN0eWxlICovXG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvbWVyYy1jYXJkL21lcmMtY2FyZC5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL21lcmMtdGFibGUvbWVyYy10YWJsZS5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL2ZsZXgtdGFibGUvZmxleC10YWJsZS5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL21lcmMtdGFiL21lcmMtdGFiLmNvbXBvbmVudC5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvbWVyYy10YWIvdG9nZ2xlLWNvbGxhcHNlL3RvZ2dsZS1jb2xsYXBzZS5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3NcIjtcbkBpbXBvcnQgXCIuLi9kYXRlL2NvbXBvbmVudHMvcm9jLWRhdGUtcGlja2VyL3JvYy1kYXRlLXBpY2tlci5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2RhdGUvY29tcG9uZW50cy9tZXJjLWNhbGVuZGFyL21lcmMtY2FsZW5kYXIuY29tcG9uZW50LnNjc3NcIjtcbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbi5tZXJjLWNhcmQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtY2FyZCwgcGFkZGluZyk7XG4gICAgYm9yZGVyOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlcik7XG4gICAgYm94LXNoYWRvdzogbWFwLWdldCgkYmFzZS1jYXJkLCBib3gtc2hhZG93KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtY2FyZCwgYm9yZGVyLXJhZGl1cyk7XG5cbiAgICAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIGFsaWduLXNlbGYpO1xuICAgICAgICBmb250LXNpemU6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIGZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRiYXNlLWNhcmQtaGVhZGVyLCBmb250LXdlaWdodCk7XG4gICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIHBhZGRpbmcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlci1yYWRpdXMpIG1hcC1nZXQoJGJhc2UtY2FyZCwgYm9yZGVyLXJhZGl1cykgMCAwO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIH1cblxuICAgIC5tZXJjLWNhcmQtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLWNhcmQtY29udGVudCwgcGFkZGluZyk7XG4gICAgfVxuXG4gICAgLyogaGVhZGVyIOiDjOaZr+mhj+iJsiBzdGFydCAqL1xuICAgIC8vIOS4u+mhjOiJslxuICAgICYubWVyYy1jYXJkLXByaW1hcnkgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIH1cbiAgICAvLyDkuLvpoYzoibLororlvaJcbiAgICAmLm1lcmMtY2FyZC1wcmltYXJ5LXZhcmlhbnQgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgfVxuICAgIC8vIOasoeimgeiJslxuICAgICYubWVyYy1jYXJkLXNlY29uZGFyeSA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICB9XG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXG4gICAgJi5tZXJjLWNhcmQtc2Vjb25kYXJ5LXZhcmlhbnQgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICB9XG4gICAgLy8g56ys5LiJ6ImyXG4gICAgJi5tZXJjLWNhcmQtdGhpcmQgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICB9XG4gICAgLy8g56ys5LiJ6Imy6K6K5b2iXG4gICAgJi5tZXJjLWNhcmQtdGhpcmQtdmFyaWFudCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgfVxuICAgIC8qIGhlYWRlciDog4zmma/poY/oibIgZW5kICovXG5cbiAgICAvKiBoZWFkZXIg5a2X6auU6aGP6ImyIHN0YXJ0ICovXG4gICAgLy8g5Li76aGM6ImyXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkY29sb3JTZXQge1xuICAgICAgICAubWVyYy1jYXJkLWhlYWRlci0jeyRuYW1lfSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIGhlYWRlciDpoY/oibIgZW5kICovXG5cbiAgICAvKiBoZWFkZXIg6auY5bqmIHN0YXJ0ICovXG4gICAgLy8g5bCPXG4gICAgJi5tZXJjLWNhcmQtc21hbGwgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLy8g5LitXG4gICAgJi5tZXJjLWNhcmQtbm9ybWFsID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgfVxuICAgIC8vIOWkp1xuICAgICYubWVyYy1jYXJkLWxhcmdlID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIC8qIGhlYWRlciDpq5jluqYgZW5kICovXG59XG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG4vKiBvdmVyd3JpdGUgdGFibGUgc3R5bGUgKi9cbm1lcmMtdGFibGUge1xuICAgIC5hbnQtdGFibGUtY29udGFpbmVyIHtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLWhlYWRlcixcbiAgICAuYW50LXRhYmxlLWJvZHkge1xuICAgICAgICBvdmVyZmxvdy15OiBvdmVybGF5ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS10aGVhZCA+IC5hbnQtdGFibGUtcm93LFxuICAgIHRoZWFkID4gdHIge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAuYW50LXRhYmxlLWNvbHVtbi1oYXMtc29ydGVycyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlnJPop5JcbiAgICAuYW50LXRhYmxlLWNvbnRhaW5lciB0YWJsZSA+IHRoZWFkIHtcbiAgICAgICAgdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgICAgICB0cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCB0ZC1wYWRkaW5nKTtcbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLXBsYWNlaG9sZGVyIC5hbnQtdGFibGUtZXhwYW5kZWQtcm93LWZpeGVkIHtcbiAgICAgICAgbWFyZ2luOiAtNHB4IC04cHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAvLyDplpPpmpToibJcbiAgICAuYW50LXRhYmxlLXRib2R5IHtcbiAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGV2ZW4tY29sLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhvdmVyIOe3qOi8ryYm5Yiq6ZmkXG4gICAgLmhvdmVyLXRvLWVkaXQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAyNnB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLXRib2R5ID4gdHIuYW50LXRhYmxlLXJvdzpob3ZlciA+IHRkLFxuICAgIC5hbnQtdGFibGUtdGJvZHkgPiB0cjpob3Zlcjpub3QoLmFudC10YWJsZS1leHBhbmRlZC1yb3cpOm5vdCguYW50LXRhYmxlLXJvdy1zZWxlY3RlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgLmhvdmVyLXRvLWVkaXQge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIGhlYWRlciDpoY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICAmLm1lcmMtdGFibGUtcHJpbWFyeSB7XG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxuICAgICYubWVyYy10YWJsZS1wcmltYXJ5LXZhcmlhbnQge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeimgeiJslxuICAgICYubWVyYy10YWJsZS1zZWNvbmRhcnkge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeimgeiJsuiuiuW9olxuICAgICYubWVyYy10YWJsZS1zZWNvbmRhcnktdmFyaWFudCB7XG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmLm1lcmMtdGFibGUtdGhpcmQge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6ImyXG4gICAgJi5tZXJjLXRhYmxlLXRoaXJkLXZhcmlhbnQge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBoZWFkZXIg6aGP6ImyIGVuZCAqL1xufVxuXG4vLyDnt4rphLDlnKhjYXJk5LiL5pa555qE5LiN6KaB5ZyT6KeSXG5tZXJjLWNhcmQtY29udGVudCA+IG1lcmMtdGFibGUge1xuICAgIC5hbnQtdGFibGUtY29udGFpbmVyIHRhYmxlID4gdGhlYWQge1xuICAgICAgICB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKiBlbmQgb2Ygb3ZlcndyaXRlIHRhYmxlIHN0eWxlICovXG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG5AZWFjaCAkbmFtZSwgJGNvbG9yIGluICRjb2xvclNldCB7XG4gICAgLm1lcmMtZmxleC10YWJsZS0jeyRuYW1lfSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIC5tZXJjLWZsZXgtdGFibGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBzaGFkb3cpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBwYWRkaW5nKTtcblxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRib2R5IHRyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgcGFkZGluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBldmVuLWNvbC1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm5vLWRhdGEge1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uby1kYXRhLWhpbnQge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDVkNWQ1O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGJyZWFrLXBvaW50KSkge1xuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSxcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGhlYWQsXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRib2R5LFxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0Zm9vdCxcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGgsXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRkLFxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0ciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGhlYWQgdHIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC05OTk5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTk5OTlweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0Ym9keSB0ciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xuXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgbW8tcGFkZGluZykgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkYmFzZS10YWJsZSwgbW8tYm9yZGVyLWJvdHRvbS13aWR0aCkgc29saWQgJGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1kYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBtby1wYWRkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYubm8tZGF0YSB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgbW8tcGFkZGluZykgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuLyogb3ZlcndyaXRlIHRhYiBzdHlsZSAqL1xubWVyYy10YWIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IG1hcC1nZXQoJGJhc2UtdGFiLCBmb250LXNpemUpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItYm9yZGVyLXdpZHRoKTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgICAgIC8qIOmXnOmWieeahOWPieWPiSAqL1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy1jbG9zZS14IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWJvcmRlci13aWR0aCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi1idG4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogbWFwLWdldCgkYmFzZS10YWIsIGNvbnRlbnQtYm9yZGVyLXdpZHRoKTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWIsIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiDpoY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICAmLm1lcmMtdGFiLXByaW1hcnkge1xuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuLvpoYzoibLororlvaJcbiAgICAmLm1lcmMtdGFiLXByaW1hcnktdmFyaWFudCB7XG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibJcbiAgICAmLm1lcmMtdGFiLXNlY29uZGFyeSB7XG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibLororlvaJcbiAgICAmLm1lcmMtdGFiLXNlY29uZGFyeS12YXJpYW50IHtcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmLm1lcmMtdGFiLXRoaXJkIHtcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibLororlvaJcbiAgICAmLm1lcmMtdGFiLXRoaXJkLXZhcmlhbnQge1xuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiDpoY/oibIgZW5kICovXG5cbiAgICAvKiB0YWIg6auY5bqmIHN0YXJ0ICovXG4gICAgLy8g5bCPXG4gICAgJi5tZXJjLXRhYi1zbWFsbCB7XG4gICAgICAgID4gLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuK1cbiAgICAmLm1lcmMtdGFiLW5vcm1hbCB7XG4gICAgICAgID4gLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDlpKdcbiAgICAmLm1lcmMtdGFiLWxhcmdlIHtcbiAgICAgICAgPiAuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qIHRhYiDpq5jluqYgZW5kICovXG59XG4vKiBlbmQgb2Ygb3ZlcndyaXRlIHRhYiBzdHlsZSAqL1xuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLnRvZ2dsZS13cmFwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG5tZXJjLXRhYiB7XG4gICAgLyog6aGP6ImyIHN0YXJ0ICovXG4gICAgLy8g5Li76aGM6ImyXG4gICAgJlttZXJjVHlwZT1cInByaW1hcnlcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDkuLvpoYzoibLororlvaJcbiAgICAmW21lcmNUeXBlPVwicHJpbWFyeVZhcmlhbnRcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qyh6KaB6ImyXG4gICAgJlttZXJjVHlwZT1cInNlY29uZGFyeVwiXSB7XG4gICAgICAgIC8vID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAvLyAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIgPiAuYW50LXRhYnMtY29udGVudCA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgLy8gICAgICAgICBtZXJjLXRvZ2dsZS1jb2xsYXBzZSAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXG4gICAgJlttZXJjVHlwZT1cInNlY29uZGFyeVZhcmlhbnRcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmW21lcmNUeXBlPVwidGhpcmRcIl0ge1xuICAgICAgICAvLyA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgLy8gICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyID4gLmFudC10YWJzLWNvbnRlbnQgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgIC8vICAgICAgICAgLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJsuiuiuW9olxuICAgICZbbWVyY1R5cGU9XCJ0aGlyZFZhcmlhbnRcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyog6aGP6ImyIGVuZCAqL1xuICAgIC8qIHRhYiDpq5jluqYgc3RhcnQgKi9cbiAgICAvLyDlsI9cbiAgICAmW21lcmNTaXplPVwic21hbGxcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuK1cbiAgICAmW21lcmNTaXplPVwibm9ybWFsXCJdIHtcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5aSnXG4gICAgJlttZXJjU2l6ZT1cImxhcmdlXCJdIHtcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogdGFiIOmrmOW6piBlbmQgKi9cbn1cbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbi5tZXJjLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkYnRuLCBzaGFkb3cpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRidG4sIGJvcmRlci1yYWRpdXMpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAvKiDpoY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICAmLm1lcmMtYnRuLXByaW1hcnkge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG5cbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxuICAgICYubWVyYy1idG4tcHJpbWFyeS12YXJpYW50IHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHByaW1hcnktdmFyaWFudC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5qyh6KaB6ImyXG4gICAgJi5tZXJjLWJ0bi1zZWNvbmRhcnkge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgOCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkc2Vjb25kYXJ5LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibLororlvaJcbiAgICAmLm1lcmMtYnRuLXNlY29uZGFyeS12YXJpYW50IHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRzZWNvbmRhcnktdmFyaWFudC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJslxuICAgICYubWVyYy1idG4tdGhpcmQge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCR0aGlyZC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtY29sb3IsIDglKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHRoaXJkLWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6Imy6K6K5b2iXG4gICAgJi5tZXJjLWJ0bi10aGlyZC12YXJpYW50IHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCR0aGlyZC12YXJpYW50LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtdmFyaWFudC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xuICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICA+ICoge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjJzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiDpoY/oibIgZW5kICovXG5cbiAgICAvKiDpq5jluqYgc3RhcnQgKi9cbiAgICAvLyDlsI9cbiAgICAmLm1lcmMtYnRuLXNtYWxsIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogbWFwLWdldCgkYnRuLWhlaWdodCwgc20pO1xuICAgIH1cbiAgICAvLyDkuK1cbiAgICAmLm1lcmMtYnRuLW5vcm1hbCBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IG1hcC1nZXQoJGJ0bi1oZWlnaHQsIG1kKTtcbiAgICB9XG4gICAgLy8g5aSnXG4gICAgJi5tZXJjLWJ0bi1sYXJnZSBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IG1hcC1nZXQoJGJ0bi1oZWlnaHQsIGxnKTtcbiAgICB9XG4gICAgLyog6auY5bqmIGVuZCAqL1xuXG4gICAgLyog5a+s5bqmIHN0YXJ0ICovXG4gICAgLy8geHNcbiAgICAmLm1lcmMtYnRuLXhzIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHhzKTtcbiAgICB9XG4gICAgLy8gc21cbiAgICAmLm1lcmMtYnRuLXNtIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHNtKTtcbiAgICB9XG4gICAgLy8gbWRcbiAgICAmLm1lcmMtYnRuLW1kIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIG1kKTtcbiAgICB9XG4gICAgLy8gbGdcbiAgICAmLm1lcmMtYnRuLWxnIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIGxnKTtcbiAgICB9XG4gICAgLy8geGxcbiAgICAmLm1lcmMtYnRuLXhsIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHhsKTtcbiAgICB9XG4gICAgLyog5a+s5bqmIGVuZCAqL1xuXG4gICAgLyogRGlzYWJsZWQgKi9cbiAgICAmLmRpc2FibGVkIGJ1dHRvbltkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG5AbWl4aW4gZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvYy1kYXRlLXBpY2tlciB7XG4gIC5kYXRlLXBpY2tlciB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIC8vIGhlaWdodDogMjRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICAvLyAmOmhvdmVyIHtcbiAgICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgIC8vIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5jbGVhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjbGVhciBpY29uIHN0YXJ0XG4gIC5jbGVhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDdweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLy8gY2xlYXIgaWNvbiBlbmRcblxuICAuc2VsZWN0ZWQtZGF0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLy8gZGlzcGxheSBmb3JtYXRcblxuICAvLyBwb3BvdXQgbW9kYWwgc3RhcnRcbiAgLmRhdGVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTE1JTtcbiAgICAvLyBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgJi5hY3RpdmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIC8vaGVhZGVyIHN0YXJ0XG4gIC5oZWFkZXItYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZzogMTBweCAycHggMDtcbiAgfVxuXG4gIC5oZWFkZXItbGFiZWwge1xuICAgIGZsZXg6IDE7XG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcbiAgfVxuXG4gIC5hcnJvdy1idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgfVxuXG4gIC8vY2FsZW5kYXIgc3RhcnRcbiAgLndlZWtzLFxuICAuZGF5cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICB9XG5cbiAgLndlZWtzIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gIH1cblxuICAud2VlayxcbiAgLmRheSB7XG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcbiAgfVxuXG4gIC5kYXksXG4gIC55ZWFyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAueWVhcnMsXG4gIC5tb250aHMge1xuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XG4gIH1cblxuICAubm90LXByZXNlbnQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ncmF5O1xuICB9XG5cbiAgLmRheS5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5kYXkuc2VsZWN0ZWQubm90LXByZXNlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ncmF5O1xuICB9XG5cbiAgLy8g5bqV6YOo5LuK5aSpXG4gIC50b2RheSB7XG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmLm5vdC1wcmVzZW50IHtcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICB9XG5cbiAgLmhyIHtcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXk7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4gIC5zdWZmaXgtaWNvbiB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICB9XG59XG5cbjo6bmctZGVlcC5tZXJjLXllYXItc2VsZWN0IHtcbiAgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbnQtc2VsZWN0LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG4ubWVyYy1jYWxlbmRhcntcbiAgICAucm9jWWVhciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiA0NXB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJvY1llYXItdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMzhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG4ge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICAgICAgICAvLyBib3JkZXI6ICMyYzNlNTAgMXB4IHNvbGlkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICBib3JkZXI6ICRzZWNvbmRhcnktY29sb3IgMXB4IHNvbGlkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIH1cbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG5bZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcbiAgICAgICAgYm9yZGVyOiAjZDlkOWQ5IDFweCBzb2xpZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICB9XG4gICAgLmZvci1jYWxlbmRhciA+IC5hbnQtYnRuOmhvdmVyOm5vdChbZGlzYWJsZWRdKSxcbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG46YWN0aXZlOm5vdChbZGlzYWJsZWRdKSxcbiAgICAuZm9yLWNhbGVuZGFyID4gLmZvY3VzLXRvZGF5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkc2Vjb25kYXJ5LWNvbG9yLCAxMCUpO1xuICAgICAgICBib3JkZXI6IGxpZ2h0ZW4oJHNlY29uZGFyeS1jb2xvciwgMTAlKSAxcHggc29saWQ7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "ac7a":
/*!*********************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/quiz-list/quiz-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: QuizListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListComponent", function() { return QuizListComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../tc-lib/src/lib/const/device.const */ "5V4s");
/* harmony import */ var _modal_examroom_modal_examroom_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/examroom-modal/examroom-modal.component */ "5DpQ");
/* harmony import */ var _shared_components_singup_modal_singup_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/singup-modal/singup-modal.component */ "2stt");
/* harmony import */ var _const_icon_path_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../const/icon-path.const */ "T41C");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock */ "Yev/");
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/quiz.enum */ "Yn/n");
/* harmony import */ var _core_enums_register_action_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/enums/register-action.enum */ "1xBt");
/* harmony import */ var _core_models_pageset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/models/pageset */ "dtlk");
/* harmony import */ var _modal_change_place_change_place_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/change-place/change-place.component */ "xy9R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/shared.service */ "VVBw");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_quiz_status_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/pipes/quiz-status.pipe */ "SZwu");


























function QuizListComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\u7DE8\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function QuizListComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", table_r5.header, " ");
} }
function QuizListComponent_tr_70_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");
} }
function QuizListComponent_tr_70_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r11 = ctx.$implicit;
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("data-title", table_r11.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", data_r6[table_r11.primaryKey], " ");
} }
function QuizListComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QuizListComponent_tr_70_td_1_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, QuizListComponent_tr_70_td_2_Template, 2, 2, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "quizStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "merc-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuizListComponent_tr_70_Template_merc_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r13.onPrintClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "\u5370\u7E73\u6B3E\u55AE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "merc-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuizListComponent_tr_70_Template_merc_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14); const data_r6 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r15.onChangePlaceClick(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "\u8B8A\u66F4\u8003\u5340 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "merc-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuizListComponent_tr_70_Template_merc_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14); const data_r6 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r16.onExamInfoClick(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "\u8A66\u5834\u8CC7\u8A0A");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "merc-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuizListComponent_tr_70_Template_merc_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r17.onSignClick(ctx_r17.QuizAction.cancel); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "\u53D6\u6D88\u5831\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "merc-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuizListComponent_tr_70_Template_merc_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r18.onSignClick(ctx_r18.QuizAction.join); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "\u6211\u8981\u5831\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.tableSetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 19, data_r6.register_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", data_r6.register_status !== ctx_r2.QuizStatus.paying)("mercType", "secondary")("mercSize", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD ? "large" : "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", data_r6.register_status !== ctx_r2.QuizStatus.paid)("mercType", "secondary")("mercSize", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD ? "large" : "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", data_r6.register_status !== ctx_r2.QuizStatus.succuss)("mercType", "secondary")("mercSize", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD ? "large" : "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", data_r6.register_status === ctx_r2.QuizStatus.noStatus)("mercType", "secondary")("mercSize", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD ? "large" : "small")("outline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", data_r6.register_status !== ctx_r2.QuizStatus.noStatus)("mercType", "secondary")("mercSize", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD ? "large" : "small");
} }
function QuizListComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "merc-icon", 2);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("iconType", ctx_r4.ICON_PATH.CALENDAR)("iconSize", 23);
} }
class QuizListComponent {
    constructor(sharedService, formBuilder, swiperDatePickerService, taiwanDatePipe, modalService) {
        this.sharedService = sharedService;
        this.formBuilder = formBuilder;
        this.swiperDatePickerService = swiperDatePickerService;
        this.taiwanDatePipe = taiwanDatePipe;
        this.modalService = modalService;
        /** TODO: 假資料 */
        this.quizList = _mock__WEBPACK_IMPORTED_MODULE_7__["mockTable"];
        this.QuizStatus = _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizStatus"];
        this.QuizAction = _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"];
        /** 註冊狀態 */
        this.RegisterAction = _core_enums_register_action_enum__WEBPACK_IMPORTED_MODULE_9__["RegisterAction"];
        this.pageSet = new _core_models_pageset__WEBPACK_IMPORTED_MODULE_10__["PageSet"]();
        this.DEVICE = _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_3__["DEVICE"];
        this.tableSetting = [
            { header: '測驗名稱', primaryKey: 'title' },
            { header: '地區', primaryKey: 'location' },
            { header: '期別', primaryKey: 'class' },
            { header: '測驗日期', primaryKey: 'quiz_date' },
            { header: '報名日期', primaryKey: 'register_date' },
        ];
    }
    get ICON_PATH() { return _const_icon_path_const__WEBPACK_IMPORTED_MODULE_6__["ICON_PATH"]; }
    ngOnInit() {
        this.handleShowData();
        this.pageSet.initialize(_mock__WEBPACK_IMPORTED_MODULE_7__["mockTable"].length);
        this.initForm();
        this.scrollbarControl();
    }
    initForm() {
        this.searchForm = this.formBuilder.group({
            keyword: [''],
            str_date: [moment__WEBPACK_IMPORTED_MODULE_2__().add(-2, 'M').valueOf()],
            end_date: [moment__WEBPACK_IMPORTED_MODULE_2__().add(1, 'M').valueOf()],
            display_str_date: [this.taiwanDatePipe.transform(moment__WEBPACK_IMPORTED_MODULE_2__().add(-2, 'M').valueOf(), true)],
            display_end_date: [this.taiwanDatePipe.transform(moment__WEBPACK_IMPORTED_MODULE_2__().add(1, 'M').valueOf(), true)]
        });
    }
    scrollbarControl() {
        if (this.sharedService.userDevice === _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_3__["DEVICE"].MOBILE) {
            return { x: '960px' };
        }
        else {
            return {};
        }
    }
    /**
     * 點選起日
     */
    onSelectStartDateClick() {
        const form = this.searchForm.getRawValue();
        const start = moment__WEBPACK_IMPORTED_MODULE_2__().add(-2, 'M').valueOf();
        const defaultDate = form.str_date ? form.str_date : start;
        this.swiperDatePickerService.openDatePicker({ defaultDate, dateType: merc_lib__WEBPACK_IMPORTED_MODULE_1__["DateType"].startDate }).afterClose.subscribe(date => {
            var _a, _b, _c, _d, _e;
            if (date) {
                const formatDate = this.taiwanDatePipe.transform(date, true);
                // 必須設定結束日期
                (_a = this.searchForm.get('display_end_date')) === null || _a === void 0 ? void 0 : _a.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
                (_b = this.searchForm.get('str_date')) === null || _b === void 0 ? void 0 : _b.patchValue(date);
                (_c = this.searchForm.get('display_str_date')) === null || _c === void 0 ? void 0 : _c.patchValue(formatDate);
                // 若選擇的起始日大於原本選擇的到期日就刪除他
                const endDate = form.end_date;
                if (endDate && moment__WEBPACK_IMPORTED_MODULE_2__(endDate).isBefore(date)) {
                    (_d = this.searchForm.get('display_end_date')) === null || _d === void 0 ? void 0 : _d.patchValue('');
                    (_e = this.searchForm.get('end_date')) === null || _e === void 0 ? void 0 : _e.patchValue('');
                }
            }
        });
    }
    /**
     * 點選迄日
     */
    onSelectEndDateClick() {
        const form = this.searchForm.getRawValue();
        const defaultDate = form.end_date || form.str_date;
        const minDate = form.str_date || null;
        this.swiperDatePickerService.openDatePicker({ defaultDate, minDate, dateType: merc_lib__WEBPACK_IMPORTED_MODULE_1__["DateType"].endDate }).afterClose.subscribe(date => {
            var _a, _b, _c;
            if (date) {
                // 必須設定開始日期
                (_a = this.searchForm.get('display_str_date')) === null || _a === void 0 ? void 0 : _a.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
                const formatDate = this.taiwanDatePipe.transform(date, true);
                (_b = this.searchForm.get('end_date')) === null || _b === void 0 ? void 0 : _b.patchValue(date);
                (_c = this.searchForm.get('display_end_date')) === null || _c === void 0 ? void 0 : _c.patchValue(formatDate);
            }
        });
    }
    onSearchClick() {
    }
    onPrintClick() {
        console.log('印繳款單');
    }
    onExamInfoClick(quiz) {
        this.modalService.create({
            nzContent: _modal_examroom_modal_examroom_modal_component__WEBPACK_IMPORTED_MODULE_4__["ExamroomModalComponent"],
            nzWidth: 600,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
            nzComponentParams: {}
        });
    }
    onChangePlaceClick(quiz) {
        this.modalService.create({
            nzContent: _modal_change_place_change_place_component__WEBPACK_IMPORTED_MODULE_11__["ChangePlaceComponent"],
            nzWidth: 600,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
            nzComponentParams: {
                quiz
            }
        });
    }
    onSignClick(action) {
        let registerAction;
        switch (action) {
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].join:
                registerAction = _core_enums_register_action_enum__WEBPACK_IMPORTED_MODULE_9__["RegisterAction"].signup;
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].cancel:
                registerAction = _core_enums_register_action_enum__WEBPACK_IMPORTED_MODULE_9__["RegisterAction"].cancel;
                break;
            default:
                break;
        }
        this.modalService.create({
            nzContent: _shared_components_singup_modal_singup_modal_component__WEBPACK_IMPORTED_MODULE_5__["SingupModalComponent"],
            nzWidth: 600,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
            nzComponentParams: {
                action: registerAction
            }
        });
    }
    /**
     * 清除鈕
     */
    onClearClick() {
    }
    /** 換頁 */
    onChangePageIndex(pageIndex) {
        if (pageIndex < 1 || pageIndex > this.pageSet.totalPages) {
            return;
        }
        this.pageSet.currentPage = pageIndex;
        this.handleShowData();
        console.log(this.pageSet.currentPage);
    }
    /** 顯示資料 */
    handleShowData() {
        this.quizList = _mock__WEBPACK_IMPORTED_MODULE_7__["mockTable"].slice((this.pageSet.currentPage - 1) * this.pageSet.currentPageSize, (this.pageSet.currentPage) * this.pageSet.currentPageSize);
    }
}
QuizListComponent.ɵfac = function QuizListComponent_Factory(t) { return new (t || QuizListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_13__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_1__["SwiperDatePickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_1__["TaiwanDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_14__["NzModalService"])); };
QuizListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: QuizListComponent, selectors: [["app-quiz-list"]], decls: 73, vars: 39, consts: [[1, "tab-box"], [1, "search-header", "text-20", "text-fatty", "pb-3"], [3, "iconType", "iconSize"], [1, "search-zone"], ["nz-form", "", 3, "formGroup", "nzLayout"], [1, "row"], [1, "col-md-3", "col-12"], [1, "font-weight-bold"], [3, "nzErrorTip"], ["formControlName", "keyword", "type", "text", "nz-input", "", "placeholder", "\u8ACB\u8F38\u5165\u95DC\u9375\u5B57", 3, "nzSize"], [1, "col-12", "col-md-6"], [1, "col-6"], [1, "date-picker", "date-picker-wave", 3, "nzSize", "nzSuffix", "click"], ["formControlName", "display_str_date", "type", "text", "nz-input", "", "placeholder", "\u8ACB\u9078\u64C7\u8D77\u65E5", 3, "nzSize", "readOnly"], [2, "opacity", "0"], [1, "date-picker", 3, "nzSize", "nzSuffix", "click"], ["formControlName", "display_end_date", "type", "text", "nz-input", "", "placeholder", "\u8ACB\u9078\u64C7\u8FC4\u65E5", 3, "readOnly"], [1, "col-md-3", "col-12", "search-btns"], [3, "mercType", "outline", "mercSize", "mercWidth", "click"], [1, "ms-3", 3, "mercType", "mercSize", "mercWidth", "click"], [1, "mb-4"], [1, "table-header"], [1, "d-flex", "flex-wrap", "ms-3"], ["nz-checkbox", "", "nzValue", "A", 3, "ngModel"], ["nz-checkbox", "", "nzValue", "B", 3, "ngModel"], [1, "pagination"], [1, "pagesize", "py-2", "py-md-0"], [3, "ngModel", "ngModelChange"], ["nzLabel", "10", 3, "nzValue"], ["nzLabel", "25", 3, "nzValue"], ["nzLabel", "50", 3, "nzValue"], [1, "pagechange"], [3, "iconType", "iconSize", "click"], [1, "table-content"], [3, "mercType", "headTextColor"], ["class", "text-center", 4, "ngIf"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["calendar_icon", ""], ["class", "text-lg-center", 4, "ngFor", "ngForOf"], ["data-title", "\u5831\u540D\u72C0\u614B", 1, "text-center"], ["data-title", "\u529F\u80FD", 1, "text-center"], [3, "hidden", "mercType", "mercSize", "click"], ["data-title", "\u52D5\u4F5C", 1, "text-center"], [3, "hidden", "mercType", "mercSize", "outline", "click"], [1, "text-lg-center"]], template: function QuizListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "merc-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " \u67E5\u8A62\u689D\u4EF6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "\u95DC\u9375\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "\u4E0A\u8AB2\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "nz-input-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuizListComponent_Template_nz_input_group_click_20_listener() { return ctx.onSelectStartDateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "nz-form-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "\u8FC4\u65E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "nz-input-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuizListComponent_Template_nz_input_group_click_27_listener() { return ctx.onSelectEndDateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "merc-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuizListComponent_Template_merc_button_click_30_listener() { return ctx.onClearClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "\u6E05\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "merc-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuizListComponent_Template_merc_button_click_32_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, " \u67E5\u8A62");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, " \u6E2C\u9A57\u5217\u8868 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "nz-checkbox-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "\u50C5\u986F\u793A\u5DF2\u5831\u540D\u6E2C\u9A57\u4E4B\u5834\u6B21");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "\u50C5\u986F\u793A\u53EF\u5831\u540D\u6E2C\u9A57\u4E4B\u5834\u6B21");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, " \u6BCF\u9801\u986F\u793A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "nz-select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function QuizListComponent_Template_nz_select_ngModelChange_48_listener($event) { return ctx.pageSet.currentPageSize = $event; })("ngModelChange", function QuizListComponent_Template_nz_select_ngModelChange_48_listener() { return ctx.handleShowData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](49, "nz-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](50, "nz-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](51, "nz-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, " \u7B46 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "merc-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuizListComponent_Template_merc_icon_click_54_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "merc-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QuizListComponent_Template_merc_icon_click_56_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "merc-flex-table", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, QuizListComponent_th_61_Template, 2, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](62, QuizListComponent_th_62_Template, 2, 1, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](64, "\u5831\u540D\u72C0\u614B");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66, "\u529F\u80FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "\u52D5\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](70, QuizListComponent_tr_70_Template, 18, 21, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](71, QuizListComponent_ng_template_71_Template, 1, 2, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("iconType", ctx.ICON_PATH.BTN_SEARCH)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.searchForm)("nzLayout", "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSize", "large")("nzSuffix", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSize", "large")("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSize", "large")("nzSuffix", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mercType", "third")("outline", true)("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mercType", "third")("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.pageSet.currentPageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("iconType", ctx.ICON_PATH.PREV_STEP)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" \u7B2C", ctx.pageSet.currentPage, "\u9801, \u5171", ctx.pageSet.totalPages, "\u9801 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("iconType", ctx.ICON_PATH.NEXT_STEP)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mercType", "primary")("headTextColor", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.sharedService.userDevice === ctx.DEVICE.PAD);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.tableSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.quizList);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_1__["MercIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__["NzFormControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__["NzInputGroupWhitSuffixOrPrefixDirective"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__["NzCheckboxWrapperComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__["NzOptionComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["FlexTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__["NzTrDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__["NzTbodyComponent"]], pipes: [_shared_pipes_quiz_status_pipe__WEBPACK_IMPORTED_MODULE_23__["QuizStatusPipe"]], styles: [".date-picker.date-picker-wave[_ngcontent-%COMP%]::after {\n  line-height: unset;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3F1aXotbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FBQVI7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoicXVpei1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGUtcGlja2VyIHtcbiAgICAmLmRhdGUtcGlja2VyLXdhdmU6OmFmdGVyIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHVuc2V0O1xuICAgIH1cbn1cbnRkOmxhc3QtY2hpbGR7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "lCxi":
/*!********************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/check-score/mock.ts ***!
  \********************************************************************/
/*! exports provided: mockTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockTable", function() { return mockTable; });
const mockTable = [
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '70'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '可申請成績複查',
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '70'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '可申請成績複查',
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '待測驗'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '80'
    }, {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '已繳款',
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '可申請成績複查',
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '已繳款',
        score: '待測驗'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '可申請成績複查',
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '證書申請中',
        score: '待測驗'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '證書申請中',
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '可申請成績複查',
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '證書申請中',
        score: '待測驗'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '證書申請中',
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '可申請成績複查',
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '待測驗'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '已繳款',
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '可申請成績複查',
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '已繳款',
        score: '待測驗'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '可申請成績複查',
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '70'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '可申請成績複查',
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '65'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '尚未進行測驗',
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '可申請成績複查',
        score: '90'
    },
];


/***/ }),

/***/ "xy9R":
/*!*******************************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/quiz-list/modal/change-place/change-place.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ChangePlaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePlaceComponent", function() { return ChangePlaceComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var _const_icon_path_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../const/icon-path.const */ "T41C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");











class ChangePlaceComponent {
    constructor(fb, modalService, modal) {
        this.fb = fb;
        this.modalService = modalService;
        this.modal = modal;
        this.errorMsg = merc_lib__WEBPACK_IMPORTED_MODULE_1__["errorMsg"];
    }
    get ICON_PATH() {
        return _const_icon_path_const__WEBPACK_IMPORTED_MODULE_2__["ICON_PATH"];
    }
    ngOnInit() {
        console.log('???');
        console.log(this.quiz);
        this.initForm();
    }
    ngOnChanges() {
        console.log(this.quiz);
    }
    initForm() {
        console.log(this.quiz.location === '台北區');
        this.validateForm = this.fb.group({
            name: [{ value: this.quiz.title, disabled: true }],
            location: [this.quiz.location, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        console.log(this.validateForm.value);
    }
    onSendClick() {
        for (const i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.valid) {
            this.modal.triggerOk();
        }
    }
}
ChangePlaceComponent.ɵfac = function ChangePlaceComponent_Factory(t) { return new (t || ChangePlaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"])); };
ChangePlaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChangePlaceComponent, selectors: [["app-change-place"]], inputs: { quiz: "quiz" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 33, vars: 7, consts: [[1, "modal-margin"], [1, "header", "text-center"], [3, "iconType", "iconSize"], [1, "text-20", "text-fatty"], [1, "content"], ["nz-form", "", "nzNoColon", "true", 3, "formGroup"], [1, "row"], ["nzFor", "name", 1, "col-12", "text-align-left"], [1, "col-12"], ["nzSize", "large", "id", "name", "type", "text", "nz-input", "", "formControlName", "name"], ["nzFor", "name", 1, "col-12", "text-align-left", "label-required"], [3, "nzErrorTip"], ["formControlName", "location"], ["nz-radio", "", "nzValue", "\u53F0\u5317\u5340"], ["nz-radio", "", "nzValue", "\u6843\u7AF9\u5340"], ["nz-radio", "", "nzValue", "\u53F0\u4E2D\u5340"], ["nz-radio", "", "nzValue", "\u5609\u7FA9\u5340"], ["nz-radio", "", "nzValue", "\u53F0\u5357\u5340"], ["nz-radio", "", "nzValue", "\u9AD8\u96C4\u5340"], [1, "footer", "text-center"], [3, "mercType", "mercWidth", "mercSize", "click"]], template: function ChangePlaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "merc-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u8B8A\u66F4\u8003\u5340");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u6E2C\u9A57\u540D\u7A31");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-form-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u5730\u5340");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-form-control", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-radio-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u53F0\u5317");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u6843\u7AF9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u53F0\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\u5609\u7FA9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\u53F0\u5357");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\u9AD8\u96C4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "merc-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChangePlaceComponent_Template_merc_button_click_31_listener() { return ctx.onSendClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u78BA\u8A8D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("iconType", ctx.ICON_PATH.ALERT)("iconSize", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", ctx.errorMsg.getFormErrorStr(ctx.validateForm, "location"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_1__["MercIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__["NzRadioComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]], styles: [".modal-margin[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 24px 10px;\n}\n\n.ant-form-item-label[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.ant-form[_ngcontent-%COMP%]   .ant-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NoYW5nZS1wbGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtBQUlKIiwiZmlsZSI6ImNoYW5nZS1wbGFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1tYXJnaW4ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRlbnQge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IDI0cHggMTBweDtcbn1cbi5hbnQtZm9ybS1pdGVtLWxhYmVse1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYW50LWZvcm0gLmFudC1yYWRpby1ncm91cCBsYWJlbHtcbiAgICB3aWR0aDogNzVweFxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=content-quiz-quiz-module.js.map