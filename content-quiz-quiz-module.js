(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-quiz-quiz-module"],{

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
/* harmony import */ var _check_score_check_score_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-score/check-score.component */ "Vt8v");
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz.component */ "Ysoh");
/* harmony import */ var projects_tc_lib_src_lib_tc_lib_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/tc-lib/src/lib/tc-lib.module */ "1tKd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _modal_change_place_change_place_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/change-place/change-place.component */ "VXQ1");
/* harmony import */ var _inside_quiz_inside_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inside-quiz/inside-quiz.component */ "oXAn");
/* harmony import */ var _outside_quiz_outside_quiz_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./outside-quiz/outside-quiz.component */ "JJtz");
/* harmony import */ var _modal_recheck_score_modal_recheck_score_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal/recheck-score-modal/recheck-score-modal.component */ "SI8K");
/* harmony import */ var _modal_reissue_certificate_modal_reissue_certificate_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/reissue-certificate-modal/reissue-certificate-modal.component */ "h5dW");
/* harmony import */ var _modal_bill_modal_bill_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/bill-modal/bill-modal.component */ "vSVe");
/* harmony import */ var _modal_admission_notice_modal_admission_notice_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/admission-notice-modal/admission-notice-modal.component */ "V0MC");
/* harmony import */ var _pipe_nature_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipe/nature.pipe */ "Bydz");
/* harmony import */ var _pipe_outside_exam_type_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipe/outside-exam-type.pipe */ "Foqx");
/* harmony import */ var _pipe_notice_type_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipe/notice-type.pipe */ "X4MI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class QuizModule {
}
QuizModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: QuizModule });
QuizModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function QuizModule_Factory(t) { return new (t || QuizModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _quiz_routing_module__WEBPACK_IMPORTED_MODULE_2__["QuizRoutingModule"],
            projects_tc_lib_src_lib_tc_lib_module__WEBPACK_IMPORTED_MODULE_5__["TcLibModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](QuizModule, { declarations: [_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"],
        _check_score_check_score_component__WEBPACK_IMPORTED_MODULE_3__["CheckScoreComponent"],
        _modal_change_place_change_place_component__WEBPACK_IMPORTED_MODULE_7__["ChangePlaceComponent"],
        _inside_quiz_inside_quiz_component__WEBPACK_IMPORTED_MODULE_8__["InsideQuizComponent"],
        _outside_quiz_outside_quiz_component__WEBPACK_IMPORTED_MODULE_9__["OutsideQuizComponent"],
        _modal_recheck_score_modal_recheck_score_modal_component__WEBPACK_IMPORTED_MODULE_10__["RecheckScoreModalComponent"],
        _modal_reissue_certificate_modal_reissue_certificate_modal_component__WEBPACK_IMPORTED_MODULE_11__["ReissueCertificateModalComponent"],
        _modal_bill_modal_bill_modal_component__WEBPACK_IMPORTED_MODULE_12__["BillModalComponent"],
        _modal_admission_notice_modal_admission_notice_modal_component__WEBPACK_IMPORTED_MODULE_13__["AdmissionNoticeModalComponent"],
        _pipe_nature_pipe__WEBPACK_IMPORTED_MODULE_14__["NaturePipe"],
        _pipe_outside_exam_type_pipe__WEBPACK_IMPORTED_MODULE_15__["OutsideExamTypePipe"],
        _pipe_notice_type_pipe__WEBPACK_IMPORTED_MODULE_16__["NoticeTypePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _quiz_routing_module__WEBPACK_IMPORTED_MODULE_2__["QuizRoutingModule"],
        projects_tc_lib_src_lib_tc_lib_module__WEBPACK_IMPORTED_MODULE_5__["TcLibModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();


/***/ }),

/***/ "Bydz":
/*!********************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/pipe/nature.pipe.ts ***!
  \********************************************************************/
/*! exports provided: NaturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaturePipe", function() { return NaturePipe; });
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/quiz.enum */ "Yn/n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NaturePipe {
    transform(type) {
        switch (type) {
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside:
                return '內部測驗';
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].outside:
                return '外部測驗';
            default:
                return '-';
        }
    }
}
NaturePipe.ɵfac = function NaturePipe_Factory(t) { return new (t || NaturePipe)(); };
NaturePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "naturePipe", type: NaturePipe, pure: true });


/***/ }),

/***/ "Foqx":
/*!*******************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/pipe/outside-exam-type.pipe.ts ***!
  \*******************************************************************************/
/*! exports provided: OutsideExamTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideExamTypePipe", function() { return OutsideExamTypePipe; });
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/quiz.enum */ "Yn/n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OutsideExamTypePipe {
    transform(type) {
        switch (type) {
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency:
                return '外幣考試';
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest:
                return '投資型考試';
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional:
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].common:
                return '公會考試(專業/共同科目)';
            default:
                return '-';
        }
    }
}
OutsideExamTypePipe.ɵfac = function OutsideExamTypePipe_Factory(t) { return new (t || OutsideExamTypePipe)(); };
OutsideExamTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "outsideExamTypePipe", type: OutsideExamTypePipe, pure: true });


/***/ }),

/***/ "JJtz":
/*!***************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/outside-quiz/outside-quiz.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OutsideQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideQuizComponent", function() { return OutsideQuizComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var projects_tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/tc-lib/src/lib/const/device.const */ "5V4s");
/* harmony import */ var projects_tc_lib_src_lib_const_icon_path_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/tc-lib/src/lib/const/icon-path.const */ "GNbt");
/* harmony import */ var projects_tc_lib_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/tc-lib/src/public-api */ "pzfE");
/* harmony import */ var _core_enums_signup_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/enums/signup-status.enum */ "5NdK");
/* harmony import */ var _shared_components_class_info_modal_class_info_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/class-info-modal/class-info-modal.component */ "s0oJ");
/* harmony import */ var _shared_components_signup_error_modal_signup_error_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/signup-error-modal/signup-error-modal.component */ "Izo8");
/* harmony import */ var _shared_components_signup_modal_signup_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/signup-modal/signup-modal.component */ "4+Vy");
/* harmony import */ var _const_register_type_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../const/register-type.const */ "ZxlW");
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/quiz.enum */ "Yn/n");
/* harmony import */ var _modal_admission_notice_modal_admission_notice_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal/admission-notice-modal/admission-notice-modal.component */ "V0MC");
/* harmony import */ var _modal_bill_modal_bill_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modal/bill-modal/bill-modal.component */ "vSVe");
/* harmony import */ var _modal_change_place_change_place_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modal/change-place/change-place.component */ "VXQ1");
/* harmony import */ var _outside_mock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./outside-mock */ "yD+f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/shared.service */ "VVBw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_date_show_date_show_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/components/date-show/date-show.component */ "ZOi9");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");

































function OutsideQuizComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "\u7DE8\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function OutsideQuizComponent_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", table_r5.header, " ");
} }
function OutsideQuizComponent_tr_74_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");
} }
function OutsideQuizComponent_tr_74_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "nz-option", 53);
} if (rf & 2) {
    const locate_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzValue", locate_r13.value)("nzLabel", locate_r13.label);
} }
function OutsideQuizComponent_tr_74_merc_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "merc-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OutsideQuizComponent_tr_74_merc_button_14_Template_merc_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16); const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r14.onPositiveClick(data_r6.btnList[0] == null ? null : data_r6.btnList[0].type, data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mercType", "secondary")("mercSize", ctx_r10.sharedService.userDevice === ctx_r10.DEVICE.PAD ? "large" : "small")("disabled", !data_r6.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r6.btnList[0] == null ? null : data_r6.btnList[0].title, " ");
} }
function OutsideQuizComponent_tr_74_ng_container_15_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OutsideQuizComponent_tr_74_ng_container_15_ng_container_9_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23); const btn_r20 = ctx.$implicit; const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r21.onPositiveClick(btn_r20.type, data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const btn_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", btn_r20.title, " ");
} }
function OutsideQuizComponent_tr_74_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "nz-button-group", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "merc-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OutsideQuizComponent_tr_74_ng_container_15_Template_merc_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26); const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r24.onPositiveClick(data_r6.btnList[0] == null ? null : data_r6.btnList[0].type, data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "nz-dropdown-menu", null, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, OutsideQuizComponent_tr_74_ng_container_15_ng_container_9_Template, 3, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](7);
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mercType", "secondary")("mercSize", ctx_r11.sharedService.userDevice === ctx_r11.DEVICE.PAD ? "large" : "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r6.btnList[0] == null ? null : data_r6.btnList[0].title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzDropdownMenu", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", data_r6.btnList);
} }
function OutsideQuizComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, OutsideQuizComponent_tr_74_td_1_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OutsideQuizComponent_tr_74_Template_td_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29); const data_r6 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r28.showInfo(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "nz-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function OutsideQuizComponent_tr_74_Template_nz_select_ngModelChange_5_listener($event) { const data_r6 = ctx.$implicit; return data_r6.location = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, OutsideQuizComponent_tr_74_nz_option_6_Template, 1, 2, "nz-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "app-date-show", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, OutsideQuizComponent_tr_74_merc_button_14_Template, 2, 4, "merc-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, OutsideQuizComponent_tr_74_ng_container_15_Template, 10, 5, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r6.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", data_r6.location)("nzDisabled", data_r6.register_status !== ctx_r2.QuizStatus.noStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.locationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r6.class, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r6.quiz_date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("startDate", data_r6.start_register_date)("endDate", data_r6.end_register_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (data_r6.btnList[0] == null ? null : data_r6.btnList[0].type) === ctx_r2.QuizAction.join);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (data_r6.btnList[0] == null ? null : data_r6.btnList[0].type) !== ctx_r2.QuizAction.join);
} }
function OutsideQuizComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "merc-icon", 2);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("iconType", ctx_r4.ICON_PATH.CALENDAR)("iconSize", 23);
} }
class OutsideQuizComponent {
    constructor(sharedService, formBuilder, swiperDatePickerService, taiwanDatePipe, modalService) {
        this.sharedService = sharedService;
        this.formBuilder = formBuilder;
        this.swiperDatePickerService = swiperDatePickerService;
        this.taiwanDatePipe = taiwanDatePipe;
        this.modalService = modalService;
        /** TODO: 假資料 */
        this.quizList = _outside_mock__WEBPACK_IMPORTED_MODULE_13__["outsideMockTable"];
        this.QuizStatus = _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizStatus"];
        this.QuizAction = _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"];
        /** 註冊狀態 */
        this.SignUpStatus = _core_enums_signup_status_enum__WEBPACK_IMPORTED_MODULE_4__["SignUpStatus"];
        this.pageSet = new projects_tc_lib_src_public_api__WEBPACK_IMPORTED_MODULE_3__["PageSet"]();
        this.DEVICE = projects_tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_1__["DEVICE"];
        this.tableSetting = [
            { header: '測驗名稱', primaryKey: 'title' },
            { header: '考區', primaryKey: 'location' },
            { header: '期別', primaryKey: 'class' },
            { header: '測驗日期', primaryKey: 'quiz_date' },
            { header: '報名日期', primaryKey: 'register_date' },
        ];
        this.btnList = [
            // hidden data.register_status !== QuizStatus.paying
            { title: '印繳款單', type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].printSlip },
            // hidden data.register_status !== QuizStatus.paid
            { title: '變更考區', type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].changePlace },
            // hidden data.register_status !== QuizStatus.succuss
            { title: '試場資訊', type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].info },
            // hidden data.register_status === QuizStatus.noStatus
            { title: '取消報名', type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].cancel },
            // hidden data.register_status !== QuizStatus.noStatus
            { title: '我要報名', type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].join },
            // hidden data.register_status === QuizStatus.fail
            { title: '報名失敗', type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].failReason },
        ];
        this.locationList = [
            { label: '台北區', value: '台北區' },
            { label: '台中區', value: '台中區' },
            { label: '桃竹區', value: '桃竹區' },
            { label: '嘉義區', value: '嘉義區' },
            { label: '台南區', value: '台南區' },
        ];
    }
    get ICON_PATH() { return projects_tc_lib_src_lib_const_icon_path_const__WEBPACK_IMPORTED_MODULE_2__["ICON_PATH"]; }
    ngOnInit() {
        // TODO: 暫時這樣寫
        this.quizList = this.quizList.map((item) => {
            if (item) {
                item.btnList = this.filterBtn(item.register_status);
            }
        });
        this.handleShowData();
        this.pageSet.initialize(_outside_mock__WEBPACK_IMPORTED_MODULE_13__["outsideMockTable"].length);
        this.initForm();
    }
    initForm() {
        this.searchForm = this.formBuilder.group({
            nature: [{ value: 'outside', disabled: true }],
            keyword: [''],
            str_date: [moment__WEBPACK_IMPORTED_MODULE_0__().add(-2, 'M').valueOf()],
            end_date: [moment__WEBPACK_IMPORTED_MODULE_0__().add(1, 'M').valueOf()],
        });
    }
    /**
     * TODO: 找更好看的寫法
     * @param status QuizStatus
     * @returns btn[]
     */
    filterBtn(status) {
        const list = this.btnList;
        const result = [];
        list.forEach((item) => {
            switch (status) {
                case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizStatus"].noStatus:
                    if (item.type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].join) {
                        result.push(item);
                    }
                    break;
                case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizStatus"].fail:
                    if (item.type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].failReason) {
                        result.push(item);
                    }
                    break;
                case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizStatus"].paying:
                    if (item.type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].printSlip) {
                        result.push(item);
                    }
                    break;
                case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizStatus"].paying:
                    if (item.type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].printSlip) {
                        result.push(item);
                    }
                    break;
                case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizStatus"].paid:
                    if (item.type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].changePlace) {
                        result.push(item);
                    }
                    break;
                case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizStatus"].succuss:
                    if (item.type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].info) {
                        result.push(item);
                    }
                    break;
                default:
                    break;
            }
            if (item.type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].cancel && status !== _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizStatus"].noStatus && status !== _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizStatus"].fail) {
                result.push(item);
            }
        });
        return result;
    }
    /**
     * 按鈕分配
     */
    onPositiveClick(action, data) {
        switch (action) {
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].join:
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].cancel:
                this.onSignClick(action, data);
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].info:
                this.onExamInfoClick(data);
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].changePlace:
                this.onChangePlaceClick(data);
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].printSlip:
                this.onPrintClick();
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].failReason:
                this.onRejectReason();
                break;
            default:
                break;
        }
    }
    onSearchClick() {
    }
    /**
     * 印繳款單
     */
    onPrintClick() {
        this.modalService.create({
            nzContent: _modal_bill_modal_bill_modal_component__WEBPACK_IMPORTED_MODULE_11__["BillModalComponent"],
            nzWidth: 850,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
            nzComponentParams: {}
        });
    }
    onExamInfoClick(data) {
        if (data.outside_exam_type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["OutsideExamType"].invest) {
            const url = 'https://edu.tii.org.tw/exam/users/user_status';
            window.open(url, '_blank');
        }
        else {
            this.modalService.create({
                nzContent: _modal_admission_notice_modal_admission_notice_modal_component__WEBPACK_IMPORTED_MODULE_10__["AdmissionNoticeModalComponent"],
                nzWidth: 850,
                nzMaskClosable: false,
                nzFooter: null,
                nzCentered: true,
                nzBodyStyle: { padding: '12px 24px' },
                nzComponentParams: {
                    outsideExam: data.outside_exam_type
                }
            });
        }
    }
    onChangePlaceClick(quiz) {
        this.modalService.create({
            nzContent: _modal_change_place_change_place_component__WEBPACK_IMPORTED_MODULE_12__["ChangePlaceComponent"],
            nzWidth: 600,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
            nzComponentParams: {
                quiz
            }
        });
    }
    /**
     * 報名
     * @param action
     * @param data
     */
    onSignClick(action, data) {
        let registerAction;
        switch (action) {
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].join:
                registerAction = _core_enums_signup_status_enum__WEBPACK_IMPORTED_MODULE_4__["SignUpStatus"].isOpen;
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_9__["QuizAction"].cancel:
                registerAction = _core_enums_signup_status_enum__WEBPACK_IMPORTED_MODULE_4__["SignUpStatus"].signed;
                break;
            default:
                break;
        }
        this.modalService.create({
            nzContent: _shared_components_signup_modal_signup_modal_component__WEBPACK_IMPORTED_MODULE_7__["SignupModalComponent"],
            nzWidth: 600,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
            nzComponentParams: {
                action: registerAction,
                // action: SignUpStatus.signed,
                type: _const_register_type_const__WEBPACK_IMPORTED_MODULE_8__["REGISTER_TYPE"].OUTSIDE_EXAM,
                outsideExam: data.outside_exam_type
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
        this.quizList = _outside_mock__WEBPACK_IMPORTED_MODULE_13__["outsideMockTable"].slice((this.pageSet.currentPage - 1) * this.pageSet.currentPageSize, (this.pageSet.currentPage) * this.pageSet.currentPageSize);
    }
    /** 顯示詳細資料 */
    showInfo(event) {
        const modal = this.modalService.create({
            nzContent: _shared_components_class_info_modal_class_info_modal_component__WEBPACK_IMPORTED_MODULE_5__["ClassInfoModalComponent"],
            nzWidth: 600,
            nzClosable: true,
            nzFooter: null,
            nzClassName: 'white-close-x',
            nzBodyStyle: {
                padding: '0',
            },
            nzComponentParams: {
                event
            }
        });
    }
    onRejectReason() {
        this.modalService.create({
            nzContent: _shared_components_signup_error_modal_signup_error_modal_component__WEBPACK_IMPORTED_MODULE_6__["SignupErrorModalComponent"],
            nzWidth: 400,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
        });
    }
}
OutsideQuizComponent.ɵfac = function OutsideQuizComponent_Factory(t) { return new (t || OutsideQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_15__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_17__["SwiperDatePickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_17__["TaiwanDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalService"])); };
OutsideQuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: OutsideQuizComponent, selectors: [["app-outside-quiz"]], decls: 77, vars: 35, consts: [[1, "tab-box"], [1, "search-header", "text-20", "text-fatty", "pb-3"], [3, "iconType", "iconSize"], [1, "search-zone"], ["nz-form", "", 3, "formGroup", "nzLayout"], [1, "row"], [1, "col-md-6", "col-lg-2", "col-12"], [1, "font-weight-bold"], ["formControlName", "nature", 3, "nzSize"], ["nzValue", "inside", "nzLabel", "\u5167\u90E8\u6E2C\u9A57"], ["nzValue", "outside", "nzLabel", "\u5916\u90E8\u6E2C\u9A57"], [3, "nzErrorTip"], ["formControlName", "keyword", "type", "text", "nz-input", "", "placeholder", "\u8ACB\u8F38\u5165\u95DC\u9375\u5B57", 3, "nzSize"], [1, "col-12", "col-lg-5"], [1, "col-6"], [1, "date-picker-wave", 3, "nzErrorTip"], ["formControlName", "str_date", 3, "mercSize"], [2, "opacity", "0"], ["formControlName", "end_date", 3, "mercSize"], [1, "col-lg-3", "col-12", "search-btns"], [3, "mercType", "outline", "mercSize", "mercWidth", "click"], [1, "ms-3", 3, "mercType", "mercSize", "mercWidth", "click"], [1, "mb-4"], [1, "table-header"], [1, "d-flex", "flex-wrap", "ms-3"], ["nz-checkbox", "", "nzValue", "A", 3, "ngModel"], ["nz-checkbox", "", "nzValue", "B", 3, "ngModel"], [1, "pagination"], [1, "pagesize", "py-2", "py-md-0"], [3, "ngModel", "ngModelChange"], ["nzLabel", "10", 3, "nzValue"], ["nzLabel", "25", 3, "nzValue"], ["nzLabel", "50", 3, "nzValue"], [1, "pagechange"], [3, "iconType", "iconSize", "click"], [1, "table-content"], [3, "mercType", "headTextColor"], ["class", "text-center", 4, "ngIf"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["calendar_icon", ""], ["data-title", "\u6E2C\u9A57\u540D\u7A31", 1, "text-lg-center", 2, "cursor", "pointer", 3, "click"], ["data-title", "\u8003\u5340", 1, "text-lg-center"], ["nzPlaceHolder", "\u8ACB\u9078\u64C7", 3, "ngModel", "nzDisabled", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["data-title", "\u671F\u5225", 1, "text-lg-center"], ["data-title", "\u6E2C\u9A57\u65E5\u671F", 1, "text-lg-center"], ["data-title", "\u5831\u540D\u65E5\u671F", 1, "text-lg-center"], [3, "startDate", "endDate"], ["data-title", "\u529F\u80FD", 1, "text-center"], [3, "mercType", "mercSize", "disabled", "click", 4, "ngIf"], [4, "ngIf"], [3, "nzValue", "nzLabel"], [3, "mercType", "mercSize", "disabled", "click"], ["id", "too-much-btn"], [3, "mercType", "mercSize", "click"], ["nz-button", "", "nz-dropdown", "", "nzPlacement", "bottomRight", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "caret-down", "nzTheme", "outline"], ["menu4", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"]], template: function OutsideQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "merc-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " \u67E5\u8A62\u689D\u4EF6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "\u6027\u8CEA");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "nz-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "nz-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "\u95DC\u9375\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "nz-form-control", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "\u4E0A\u8AB2\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "nz-form-control", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "merc-roc-date-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "nz-form-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, "\u8FC4\u65E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "nz-form-control", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "merc-roc-date-picker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "merc-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OutsideQuizComponent_Template_merc_button_click_36_listener() { return ctx.onClearClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "\u6E05\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "merc-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OutsideQuizComponent_Template_merc_button_click_38_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, " \u67E5\u8A62");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, " \u6E2C\u9A57\u5217\u8868 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "nz-checkbox-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47, "\u50C5\u986F\u793A\u5DF2\u5831\u540D\u6E2C\u9A57\u4E4B\u5834\u6B21");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50, "\u50C5\u986F\u793A\u53EF\u5831\u540D\u6E2C\u9A57\u4E4B\u5834\u6B21");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, " \u6BCF\u9801\u986F\u793A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "nz-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function OutsideQuizComponent_Template_nz_select_ngModelChange_54_listener($event) { return ctx.pageSet.currentPageSize = $event; })("ngModelChange", function OutsideQuizComponent_Template_nz_select_ngModelChange_54_listener() { return ctx.handleShowData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](55, "nz-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](56, "nz-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](57, "nz-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, " \u7B46 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "merc-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OutsideQuizComponent_Template_merc_icon_click_60_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "merc-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OutsideQuizComponent_Template_merc_icon_click_62_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "merc-flex-table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](67, OutsideQuizComponent_th_67_Template, 2, 0, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](68, OutsideQuizComponent_th_68_Template, 2, 1, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70, "\u5831\u540D\u72C0\u614B");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72, "\u529F\u80FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](74, OutsideQuizComponent_tr_74_Template, 16, 11, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](75, OutsideQuizComponent_ng_template_75_Template, 1, 2, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("iconType", ctx.ICON_PATH.BTN_SEARCH)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.searchForm)("nzLayout", "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mercType", "third")("outline", true)("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mercType", "third")("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.pageSet.currentPageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("iconType", ctx.ICON_PATH.PREV_STEP)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" \u7B2C", ctx.pageSet.currentPage, "\u9801, \u5171", ctx.pageSet.totalPages, "\u9801 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("iconType", ctx.ICON_PATH.NEXT_STEP)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mercType", "primary")("headTextColor", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.sharedService.userDevice === ctx.DEVICE.PAD);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.tableSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.quizList);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_17__["MercIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__["NzFormControlComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControlName"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_22__["NzInputDirective"], merc_lib__WEBPACK_IMPORTED_MODULE_17__["RocDatePickerComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_17__["ButtonComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_23__["NzCheckboxWrapperComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_23__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], merc_lib__WEBPACK_IMPORTED_MODULE_17__["FlexTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__["NzTrDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__["NzTbodyComponent"], _shared_components_date_show_date_show_component__WEBPACK_IMPORTED_MODULE_26__["DateShowComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_27__["NzButtonGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_28__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_27__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_29__["NzWaveDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_30__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_30__["NzDropDownDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_31__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_30__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_32__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_32__["NzMenuItemDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRzaWRlLXF1aXouY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Mckh":
/*!********************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/inside-quiz/mock.ts ***!
  \********************************************************************/
/*! exports provided: mockTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockTable", function() { return mockTable; });
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/quiz.enum */ "Yn/n");

const mockTable = [
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].fail,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-共同',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].common
    },
    {
        title: '公會考試',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-專業科目',
        location: '桃竹區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110123',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110123',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110123',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會班',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    }, {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台南區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公公會考試-專業科目會班',
        location: '高雄區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110456',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110456',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    }, {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
];


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

/***/ "SI8K":
/*!***********************************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/modal/recheck-score-modal/recheck-score-modal.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: RecheckScoreModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecheckScoreModalComponent", function() { return RecheckScoreModalComponent; });
/* harmony import */ var projects_tc_lib_src_lib_const_icon_path_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/tc-lib/src/lib/const/icon-path.const */ "GNbt");
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/quiz.enum */ "Yn/n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipe_outside_exam_type_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipe/outside-exam-type.pipe */ "Foqx");







function RecheckScoreModalComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u7533\u8ACB\u65B9\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u65BC\u6210\u7E3E\u516C\u5E03\u5F8C 3 \u500B\u65E5\u66C6\u5929\u5167\uFF0C\u81EA\u884C\u81F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u4FDD\u767C\u79D1\u7DB2\u7AD9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u7533\u8ACB\u6210\u7E3E\u8907\u67E5\uFF0C\u4E26\u7E73\u4EA4\u624B\u7E8C\u8CBB\u65B0\u53F0\u5E63 50 \u5143\u53CA\u639B\u865F\u90F5\u8CC7 28 \u5143\uFF0C\u5408\u8A08 78 \u5143\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u7533\u8ACB\u8907\u67E5\u6210\u7E3E\u4EE5\u4E00\u6B21\u70BA\u9650\uFF0C\u4FC2\u7531\u96FB\u8166\u518D\u91CD\u65B0\u95B1\u5377\uFF0C\u4E0D\u5F97\u8981\u6C42\u4EBA\u5DE5\u95B1\u89BD\u3001\u8907\u5370\u7B54\u6848\u6216\u5176\u4ED6\u6709\u95DC\u8CC7\u6599\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r0.examResultUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RecheckScoreModalComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u7533\u8ACB\u65B9\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u65BC\u6210\u7E3E\u516C\u5E03\u5F8C 3 \u500B\u65E5\u66C6\u5929\u5167\uFF0C\u65BC\u8A72\u6B21\u6E2C\u9A57\u6210\u7E3E\u516C\u5E03\u65E5\u5F8C\uFF0C\u4E8C\u9031\u5167\u61C9\u4EE5\u639B\u865F\u90F5\u5BC4\uFF08\u4EE5\u639B\u865F\u90F5\u6233\u70BA\u6E96\uFF09\uFF0C\u903E\u671F\u8005\u4EE5\u300C\u7533\u8ACB\u903E\u671F\u300D \u67E5\u8986\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u586B\u5BEB\u300C\u4EBA\u8EAB\u4FDD\u96AA\u696D\u52D9\u54E1\u8CC7\u683C\u6E2C\u9A57\u500B\u5225\u81EA\u8CBB\u7533\u8ACB\u6210\u7E3E\u8907\u67E5\u7533\u8ACB\u66F8\u300D\u4E26\u6AA2\u9644\u8EAB\u5206\u8B49\u5F71\u672C\u53CA\u90F5\u653F\u5283\u64A5\u6536\u64DA\u5F71\u672C\uFF0C\u4EE5\u639B\u865F\u51FD\u90F5\u5BC4\u58FD\u96AA\u516C\u6703\uFF0C\u4E26\u8ACB\u65BC\u4FE1\u51FD\u4E2D\u8A3B\u660E\u9023\u7D61\u96FB\u8A71\u53CA\u901A\u8A0A\u5730\u5740\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u8907\u67E5\u8CBB\u7528");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u6BCF\u79D1\u4EE5\u65B0\u53F0\u5E63 200 \u5143\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u5C08\u696D\u79D1\u76EE\u300C\u4FDD\u96AA\u6CD5\u898F\u300D\u53CA\u300C\u4FDD\u96AA\u5BE6\u52D9\u300D\u5206\u5225\u5404\u4EE5 1 \u79D1\u76EE\u8A08\u6536\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function RecheckScoreModalComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u7533\u8ACB\u65B9\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u65BC\u8A72\u6B21\u6E2C\u9A57\u6210\u7E3E\u516C\u5E03\u65E5\u5F8C\uFF0C\u4E8C\u9031\u5167\u61C9\u4EE5\u639B\u865F\u90F5\u5BC4\uFF08\u4EE5\u639B\u865F\u90F5\u6233\u70BA\u6E96\uFF09\uFF0C\u903E\u671F\u8005\u4EE5\u300C\u7533\u8ACB\u903E\u671F\u300D\u67E5\u8986\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u586B\u5BEB\u300C\u4EBA\u8EAB\u4FDD\u96AA\u696D\u52D9\u54E1\u92B7\u552E\u5916\u5E63\u6536\u4ED8\u975E\u6295\u8CC7\u578B\u4FDD\u96AA\u5546\u54C1\u6E2C\u9A57\u500B\u5225\u81EA\u8CBB\u6210\u7E3E\u8907\u67E5\u7533\u8ACB\u66F8\u300D\u4E26\u6AA2\u9644\u53C3\u52A0\u6E2C\u9A57\u6642\u4E4B\u8EAB\u5206\u8B49\u5F71\u672C\u53CA\u5283\u64A5\u6536\u64DA\u5F71\u672C\uFF0C\u4EE5\u639B\u865F\u51FD\u90F5\u5BC4\u58FD\u96AA\u516C\u6703\uFF0C\u4E26\u8ACB\u65BC\u4FE1\u51FD\u4E2D\u8A3B\u660E\u9023\u7D61\u96FB\u8A71\u53CA\u901A\u8A0A\u5730\u5740\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u8907\u67E5\u8CBB\u7528");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u6BCF\u79D1\u4EE5\u65B0\u53F0\u5E63 200 \u5143\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function RecheckScoreModalComponent_merc_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "merc-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecheckScoreModalComponent_merc_button_21_Template_merc_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onDownloadClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u9032\u5165\u4FDD\u767C\u4E2D\u5FC3\u7DB2\u7AD9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
} }
function RecheckScoreModalComponent_merc_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "merc-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecheckScoreModalComponent_merc_button_22_Template_merc_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onDownloadClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u4E0B\u8F09\u8907\u67E5\u7533\u8ACB\u66F8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
} }
class RecheckScoreModalComponent {
    constructor(modal) {
        this.modal = modal;
        this.ICON_PATH = projects_tc_lib_src_lib_const_icon_path_const__WEBPACK_IMPORTED_MODULE_0__["ICON_PATH"];
        this.OutsideExamType = _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["OutsideExamType"];
        this.examResultUrl = 'https://edu.tii.org.tw/exam/users/exam_result';
    }
    ngOnInit() {
    }
    onExamResultUrlClick() {
        window.open(this.examResultUrl, '_blank');
    }
    onDownloadClick() {
        let url = '';
        switch (this.outsideExam) {
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["OutsideExamType"].professional:
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["OutsideExamType"].common:
                url = 'https://www.mli.com.tw/aes/winz/p-trainning-7.pdf';
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["OutsideExamType"].foreignCurrency:
                url = 'https://www.mli.com.tw/aes/winz/p-trainning-8.pdf';
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["OutsideExamType"].invest:
                url = this.examResultUrl;
                break;
            default:
                break;
        }
        window.open(url, '_blank');
    }
}
RecheckScoreModalComponent.ɵfac = function RecheckScoreModalComponent_Factory(t) { return new (t || RecheckScoreModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"])); };
RecheckScoreModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecheckScoreModalComponent, selectors: [["app-recheck-score-modal"]], inputs: { outsideExam: "outsideExam" }, decls: 23, vars: 10, consts: [[1, "modal-margin"], [1, "header", "text-center"], [3, "iconType", "iconSize"], [1, "text-20", "text-fatty"], [1, "content"], [4, "ngIf"], [1, "reminder"], [1, "text-secondary", "text-lg"], [1, "footer", "d-flex", "justify-content-center", "mb-2"], [3, "mercType", "mercWidth", "mercSize", "click", 4, "ngIf"], [1, "info"], ["target", "_blank", 1, "text-secondary", "text-decoration-underline", 3, "href"], [1, "info", "pb-3"], [3, "mercType", "mercWidth", "mercSize", "click"]], template: function RecheckScoreModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "merc-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "outsideExamTypePipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RecheckScoreModalComponent_ng_container_8_Template, 12, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RecheckScoreModalComponent_ng_container_9_Template, 16, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RecheckScoreModalComponent_ng_container_10_Template, 14, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u6CE8\u610F\u4E8B\u9805");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u672A\u901A\u904E\u6E2C\u9A57\u4E4B\u8003\u751F\uFF0C\u5982\u7D93\u8907\u67E5\u7D50\u679C\u5176\u5BE6\u969B\u6210\u7E3E\u5DF2\u9054\u901A\u904E\u6A19\u6E96\u8005\uFF0C\u5373\u4E88\u66F4\u6B63\u6E2C\u9A57\u7D50\u679C\u901A\u77E5\u66F8\uFF0C\u4E26\u8F49\u77E5\u6240\u5C6C\u516C\u53F8\u53CA\u4E2D\u83EF\u6C11\u570B\u4EBA\u58FD\u4FDD\u96AA\u5546\u696D\u540C\u696D\u516C\u6703\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u539F\u5DF2\u901A\u904E\u6E2C\u9A57\u4E4B\u8003\u751F\uFF0C\u7D93\u8907\u67E5\u767C\u73FE\u5176\u6210\u7E3E\u4F4E\u65BC\u901A\u904E\u6A19\u6E96\u8005\uFF0C\u5373\u53D6\u6D88\u5176\u901A\u904E\u8CC7\u683C\uFF0C\u4E0D\u5F97\u7570\u8B70\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RecheckScoreModalComponent_merc_button_21_Template, 2, 3, "merc-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, RecheckScoreModalComponent_merc_button_22_Template, 2, 3, "merc-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconType", ctx.ICON_PATH.ALERT)("iconSize", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u500B\u5225\u81EA\u8CBB\u7533\u8ACB\u6210\u7E3E\u8907\u67E5\u8AAA\u660E - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, ctx.outsideExam), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.OutsideExamType.invest === ctx.outsideExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.OutsideExamType.professional === ctx.outsideExam || ctx.OutsideExamType.common === ctx.outsideExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.OutsideExamType.foreignCurrency === ctx.outsideExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.OutsideExamType.invest === ctx.outsideExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.OutsideExamType.invest !== ctx.outsideExam);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_4__["MercIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], merc_lib__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], pipes: [_pipe_outside_exam_type_pipe__WEBPACK_IMPORTED_MODULE_6__["OutsideExamTypePipe"]], styles: [".content[_ngcontent-%COMP%] {\n  max-width: 450px;\n  padding-bottom: 24px;\n  margin: 0px auto;\n}\n\nol[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3JlY2hlY2stc2NvcmUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoicmVjaGVjay1zY29yZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbm9se1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59Il19 */"] });


/***/ }),

/***/ "V0MC":
/*!*****************************************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/modal/admission-notice-modal/admission-notice-modal.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AdmissionNoticeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionNoticeModalComponent", function() { return AdmissionNoticeModalComponent; });
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/quiz.enum */ "Yn/n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var _pipe_notice_type_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipe/notice-type.pipe */ "X4MI");





function AdmissionNoticeModalComponent_merc_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "merc-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "merc-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u6E2C\u9A57\u6642\u9593");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " 110\u5E7403\u670804\u65E5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u5E74\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " 110-2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u8EAB\u5206\u8B49\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " G123456789 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u51FA\u751F\u65E5\u671F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " 79\u5E7400\u670800\u65E5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u6E2C\u9A57\u5730\u5340");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " \u53F0\u5317 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u6CD5\u898F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " \u4E0A\u534808:30-09:50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u5BE6\u52D9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " \u4E0A\u534810:00-11:00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u7DE8\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " 10110033 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u59D3\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " \u7C21\u66FC\u840D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u5EA7\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " 03 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u6E2C\u9A57\u5730\u9EDE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " \u5357\u5C71\u4E2D\u5EE3\u677E\u6C5F\u5927\u6A13(02)25000908 \u53F0\u5317\u5E02\u677E\u6C5F\u8DEF\uFF13\uFF17\uFF15\u865F\uFF12\u6A13 \u7B2C\uFF11\u8A66\u5834 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u4E4B\u8EAB\u5206\u8B49\u7D71\u4E00\u7DE8\u865F\u53CA\u51FA\u751F\u65E5\u671F\u5169\u8005\u7686\u932F\u8AA4\u8005\uFF0C\u61C9\u65BC\u6E2C\u9A57\u65E5\u524D\u5411\u539F\u6E2C\u9A57\u5831\u540D\u55AE\u4F4D\u53CD\u61C9\u4E26\u8FA6\u7406\u66F4\u6B63\uFF0C\u5426\u5247\u5C07\u4EE5\u975E\u5831\u540D\u53C3\u52A0\u6E2C\u9A57\u8005\u8AD6\uFF0C\u7576\u6B21\u6210\u7E3E\u4EE5\u96F6\u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " \u98B1\u98A8\u4F86\u8972\u4E4B\u8655\u7406\u65B9\u5F0F\uFF1A\u53C3\u52A0\u6E2C\u9A57\u8003\u5340\u6240\u5728\u7E23\u5E02\u653F\u5E9C\u5BA3\u5E03\u505C\u6B62\u4E0A\u73ED\uFF0C\u5247\u8A72\u6E2C\u9A57\u8003\u5340\u505C\u6B62\u8FA6\u7406\uFF0C\u5982\u9047\u505C\u6B62\u8FA6\u7406\u4E4B\u8003\u5340\uFF0C\u8ACB\u8A72\u8003\u5340\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u9015\u5411\u539F\u6E2C\u9A57\u5831\u540D\u55AE\u4F4D\u6D3D\u8FA6\u9000\u8CBB\u4E8B\u5B9C\uFF1B\u8A72\u53D6\u6D88\u6E2C\u9A57\u8A0A\u606F\u4E26\u5C07\u65BC\u5404\u6E2C\u9A57\u8003\u5340\u53CA\u672C\u516C\u6703\u7DB2\u7AD9(www.lia-roc.org.tw)\u63ED\u793A\u3002 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\u8ACB\u8A73\u95B1\u4EE5\u4E0B\u8A66\u5834\u898F\u5247\uFF0C\u4E26\u6191\u8EAB\u5206\u8B49\u4EF6\u5165\u5834\uFF0C\u7121\u8EAB\u5206\u8B49\u4EF6\u8005\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\u5C08\u696D\u79D1\u76EE \u8A66\u5834\u898F\u5247");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\u6E2C\u9A57\u6642\u9593\uFF1A\u4FDD\u96AA\u5BE6\u52D9 60 \u5206\u9418\uFF0C\u4FDD\u96AA\u6CD5\u898F 80 \u5206\u9418\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u6191\u8EAB\u5206\u8B49\u4EF6\uFF08\u9650\u7528\u4E2D\u83EF\u6C11\u570B\u8EAB\u5206\u8B49\u3001\u4E2D\u83EF\u6C11\u570B\u99D5\u99DB\u57F7\u7167\u3001\u9644\u6709\u76F8\u7247\u4E4B\u5065\u4FDD IC \u5361\u3001 \u81FA\u7063\u5730\u5340\u5C45\u7559\u8B49\u3001\u5916\u50D1\u6C38\u4E45\u5C45\u7559\u8B49\u6216\u5927\u9678\u5730\u5340\u914D\u5076\u9818\u6709\u4E4B\u9577\u671F\u5C45\u7559\u8B49\u4EF6\uFF09\u5165\u5834\uFF0C\u7121\u8EAB\u5206\u8B49\u4EF6\u8005\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u6E2C\u9A57\u958B\u59CB\u5F8C\u672A\u6EFF 20 \u5206\u9418\u4E0D\u51C6\u51FA\u5834\uFF0C\u8D85\u904E 15 \u5206\u9418\u4ECD\u672A\u5165\u5834\u8005\u5747\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u61C9\u4F9D\u6392\u5B9A\u4E4B\u6E2C\u9A57\u5834\u6B21\u53CA\u8A66\u5834\u5EA7\u865F\u5C0D\u865F\u5165\u5EA7\uFF0C\u5426\u5247\u5747\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u4E0D\u5F97\u4F7F\u7528\u96FB\u5B50\u8A08\u7B97\u6A5F\u61C9\u8A66\uFF0C\u4E14\u4E0D\u5F97\u651C\u5E36\u6216\u4F7F\u7528\u975E\u61C9\u8A66\u5FC5\u9700\u7528\u54C1\uFF0C\u4E26\u4E0D\u5F97\u7F6E\u65BC\u5EA7\u4F4D\u56DB\u5468\uFF0C\u5426\u5247\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5\u96F6\u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " \u6E2C\u9A57\u9032\u884C\u6642\uFF0C\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u7981\u6B62\u6709\u5DE6\u9867\u53F3\u76FC\u3001\u4F7F\u7528\u96FB\u5B50\u901A\u8A0A\u8A2D\u5099\u3001\u4EA4\u8AC7\u7B49\u4F01\u5716\u821E\u5F0A\u4E4B\u60C5\u4E8B\uFF0C\u96FB\u5B50\u901A\u8A0A\u8A2D\u5099\uFF08\u542B\u884C\u52D5\u96FB\u8A71\u3001\u4EFB\u4F55\u80FD\u767C\u51FA\u8072\u97FF\u53CA\u5177\u8A08\u6642\u6216\u9B27\u9234\u529F\u80FD\u4E4B\u96FB\u5B50\u8A2D\u5099\u7522\u54C1\uFF09\u61C9\u95DC\u9589\u96FB\u6E90\uFF0C\u5426\u5247\u4EE5\u9055\u898F\u8AD6\u3002\u8A66\u5834\u5167\u4E0D\u5F97\u98F2\u98DF\uFF0C\u82E5\u7D93\u76E3\u8003\u4EBA\u54E1\u5236\u6B62\u5F8C\u4ECD\u518D\u72AF\u8005\uFF0C\u5C07\u8ACB\u5176\u7ACB\u5373\u96E2\u5834\uFF0C\u4E26\u6536\u56DE\u8A66\u5377\u53CA\u7B54\u6848\u5377\u3002 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u7B54\u6848\u5377\u61C9\u4F9D\u8A66\u5377\u898F\u5B9A\u586B\u5BEB\u53CA\u5857\u8A18\uFF0C\u7B54\u6848\u5377\u4E0A\u4E26\u4E0D\u5F97\u51FA\u73FE\u4EFB\u4F55\u8207\u4F5C\u7B54\u7121\u95DC\u4E4B\u8A3B\u8A18\uFF0C\u5426\u5247\u4EE5\u7F3A\u8003\u8A08\u3002\u4E0D\u5F97\u6284\u9304\u8A66\u984C\u651C\u51FA\u8A66\u5834\uFF0C\u5426\u5247\u6263\u9664\u8A72\u79D1\u6210\u7E3E 20 \u5206\uFF0C\u82E5\u7D93\u76E3\u8003\u4EBA\u54E1\u5236\u6B62\u5F8C\u4ECD\u518D\u72AF\u8005\uFF0C\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5 0 \u5206\u8A08\u3002\u610F\u5716\u6216\u5DF2\u5C07\u8A66\u5377\u3001\u7B54\u6848\u5377\u651C\u51FA\u8A66\u5834\uFF0C\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5 0 \u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u61C9\u5728\u6E2C\u9A57\u898F\u5B9A\u6642\u9593\u5167\u7D50\u675F\u4F5C\u7B54\u3001\u7E73\u4EA4\u8A66\u5377\u53CA\u7B54\u6848\u5361\uFF0C\u9055\u53CD\u898F\u5B9A\u8005\u4F9D\u4E0B\u5217\u60C5\u5F62\u5206\u5225\u8655\u7406\uFF1A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "ol", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "\u6E2C\u9A57\u7D50\u675F\u9234\u8072\u97FF\u8D77\uFF0C\u4ECD\u7E7C\u7E8C\u4F5C\u7B54\u8005\u6263\u9664\u8A72\u79D1\u6210\u7E3E 20 \u5206\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\u7D93\u76E3\u8003\u4EBA\u54E1\u5236\u6B62\u5F8C\u4ECD\u7E7C\u7E8C\u4F5C\u7B54\u8005\uFF0C\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5 0 \u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\u7E73\u5377\u6642\uFF0C\u8A66\u5377\u53CA\u7B54\u6848\u5377\u5747\u61C9\u7E73\u56DE\uFF0C\u4E26\u61C9\u65BC\u76E3\u8003\u4EBA\u54E1\u63D0\u4F9B\u4E4B\u53C3\u52A0\u4EBA\u54E1\u7C3D\u5230\u8868\u7C3D\u540D\uFF0C\u4EE5\u4F5C\u70BA\u53C3\u52A0\u672C\u6B21\u6E2C\u9A57\u4E4B\u5230\u8003\u8B49\u660E\uFF0C\u82E5\u62D2\u7D55\u7C3D\u540D\u6216\u672A\u7C3D\u540D\u8005\u4E00\u5F8B\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u5982\u6709\u7591\u554F\uFF08\u5982\u8A66\u5377\u865F\u78BC\u8207\u7B54\u6848\u5377\u865F\u78BC\u4E0D\u540C\u3001\u57FA\u672C\u8CC7\u6599\u6709\u8AA4\u3001\u8A66\u984C\u5370\u5237\u4E0D\u6E05\u7B49\u60C5\u5F62\uFF09\uFF0C\u61C9\u8209\u624B\u8868\u793A\uFF0C\u5F85\u76E3\u8003\u4EBA\u54E1\u8FD1\u8EAB\u6642\u65B9\u53EF\u63D0\u51FA\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdmissionNoticeModalComponent_merc_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "merc-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "merc-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u6E2C\u9A57\u6642\u9593");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " 110\u5E7403\u670804\u65E5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u5E74\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " 110-2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u8EAB\u5206\u8B49\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " G123456789 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u51FA\u751F\u65E5\u671F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " 79\u5E7400\u670800\u65E5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u6E2C\u9A57\u5730\u5340");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " \u53F0\u5317 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u7DE8\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " 10110033 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u59D3\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " \u7C21\u66FC\u840D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u5EA7\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " 03 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u6E2C\u9A57\u5730\u9EDE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " \u5357\u5C71\u4E2D\u5EE3\u677E\u6C5F\u5927\u6A13(02)25000908 \u53F0\u5317\u5E02\u677E\u6C5F\u8DEF\uFF13\uFF17\uFF15\u865F\uFF12\u6A13 \u7B2C\uFF11\u8A66\u5834 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u4E4B\u8EAB\u5206\u8B49\u7D71\u4E00\u7DE8\u865F\u53CA\u51FA\u751F\u65E5\u671F\u5169\u8005\u7686\u932F\u8AA4\u8005\uFF0C\u61C9\u65BC\u6E2C\u9A57\u65E5\u524D\u5411\u539F\u6E2C\u9A57\u5831\u540D\u55AE\u4F4D\u53CD\u61C9\u4E26\u8FA6\u7406\u66F4\u6B63\uFF0C\u5426\u5247\u5C07\u4EE5\u975E\u5831\u540D\u53C3\u52A0\u6E2C\u9A57\u8005\u8AD6\uFF0C\u7576\u6B21\u6210\u7E3E\u4EE5\u96F6\u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " \u98B1\u98A8\u4F86\u8972\u4E4B\u8655\u7406\u65B9\u5F0F\uFF1A\u53C3\u52A0\u6E2C\u9A57\u8003\u5340\u6240\u5728\u7E23\u5E02\u653F\u5E9C\u5BA3\u5E03\u505C\u6B62\u4E0A\u73ED\uFF0C\u5247\u8A72\u6E2C\u9A57\u8003\u5340\u505C\u6B62\u8FA6\u7406\uFF0C\u5982\u9047\u505C\u6B62\u8FA6\u7406\u4E4B\u8003\u5340\uFF0C\u8ACB\u8A72\u8003\u5340\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u9015\u5411\u539F\u6E2C\u9A57\u5831\u540D\u55AE\u4F4D\u6D3D\u8FA6\u9000\u8CBB\u4E8B\u5B9C\uFF1B\u8A72\u53D6\u6D88\u6E2C\u9A57\u8A0A\u606F\u4E26\u5C07\u65BC\u5404\u6E2C\u9A57\u8003\u5340\u53CA\u672C\u516C\u6703\u7DB2\u7AD9(www.lia-roc.org.tw)\u63ED\u793A\u3002 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u8ACB\u8A73\u95B1\u4EE5\u4E0B\u8A66\u5834\u898F\u5247\uFF0C\u4E26\u6191\u8EAB\u5206\u8B49\u4EF6\u5165\u5834\uFF0C\u7121\u8EAB\u5206\u8B49\u4EF6\u8005\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u5171\u540C\u79D1\u76EE \u8A66\u5834\u898F\u5247");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\u6E2C\u9A57\u6642\u9593\uFF1A\u300C\u91D1\u878D\u5E02\u5834\u5E38\u8B58\u8207\u8077\u696D\u9053\u5FB7\u300D60 \u5206\u9418\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u6191\u8EAB\u5206\u8B49\u4EF6\uFF08\u9650\u7528\u4E2D\u83EF\u6C11\u570B\u8EAB\u5206\u8B49\u3001\u4E2D\u83EF\u6C11\u570B\u99D5\u99DB\u57F7\u7167\u3001\u9644\u6709\u76F8\u7247\u4E4B\u5065\u4FDD IC \u5361\u3001 \u81FA\u7063\u5730\u5340\u5C45\u7559\u8B49\u3001\u5916\u50D1\u6C38\u4E45\u5C45\u7559\u8B49\u6216\u5927\u9678\u5730\u5340\u914D\u5076\u9818\u6709\u4E4B\u9577\u671F\u5C45\u7559\u8B49\u4EF6\uFF09\u5165\u5834\uFF0C\u7121\u8EAB\u5206\u8B49\u4EF6\u8005\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u61C9\u65BC\u6E2C\u9A57\u9810\u5099\u9234\u97FF\u6642\u4F9D\u5EA7\u865F\u5165\u5EA7\uFF0C\u82E5\u9072\u5230\u8D85\u904E 15 \u5206\u9418\u8005\uFF0C\u4E0D\u51C6\u9032\u5165\u8003\u5834\uFF0C\u6E2C\u9A57\u958B\u59CB 30 \u5206\u9418\u5167\u4E0D\u51C6\u96E2\u5834\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u61C9\u4F9D\u6392\u5B9A\u4E4B\u6E2C\u9A57\u5834\u6B21\u53CA\u8A66\u5834\u5EA7\u865F\u5C0D\u865F\u5165\u5EA7\uFF0C\u5426\u5247\u5747\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u4E0D\u5F97\u4F7F\u7528\u96FB\u5B50\u8A08\u7B97\u6A5F\u61C9\u8A66\uFF0C\u4E14\u4E0D\u5F97\u651C\u5E36\u6216\u4F7F\u7528\u975E\u61C9\u8A66\u5FC5\u9700\u7528\u54C1\uFF0C\u4E26\u4E0D\u5F97\u7F6E\u65BC\u5EA7\u4F4D\u56DB\u5468\uFF0C\u5426\u5247\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5 0 \u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\u6E2C\u9A57\u9032\u884C\u6642\uFF0C\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u7981\u6B62\u6709\u5DE6\u9867\u53F3\u76FC\u3001\u4F7F\u7528\u96FB\u5B50\u901A\u8A0A\u8A2D\u5099\u3001\u4EA4\u8AC7\u7B49\u4F01\u5716\u821E\u5F0A\u4E4B\u60C5\u4E8B\uFF0C\u96FB\u5B50\u901A\u8A0A\u8A2D\u5099\uFF08\u542B\u884C\u52D5\u96FB\u8A71\u3001\u4EFB\u4F55\u80FD\u767C\u51FA\u8072\u97FF\u53CA\u5177\u8A08\u6642\u6216\u9B27\u9234\u529F\u80FD\u4E4B\u96FB\u5B50\u8A2D\u5099\u7522\u54C1\uFF09\u61C9\u95DC\u9589\u96FB\u6E90\uFF0C\u5426\u5247\u4EE5\u9055\u898F\u8AD6\u3002\u8A66\u5834\u5167\u4E0D\u5F97\u98F2\u98DF\uFF0C\u82E5\u7D93\u76E3\u8003\u4EBA\u54E1\u5236\u6B62\u5F8C\u4ECD\u518D\u72AF\u8005\uFF0C\u5C07\u8ACB\u5176\u7ACB\u5373\u96E2\u5834\uFF0C\u4E26\u6536\u56DE\u8A66\u5377\u53CA\u7B54\u6848\u5377\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\u7B54\u6848\u5377\u61C9\u4F9D\u8A66\u5377\u898F\u5B9A\u586B\u5BEB\u53CA\u5857\u8A18\uFF0C\u7B54\u6848\u5377\u4E0A\u4E26\u4E0D\u5F97\u51FA\u73FE\u4EFB\u4F55\u8207\u4F5C\u7B54\u7121\u95DC\u4E4B\u8A3B\u8A18\uFF0C\u5426\u5247\u4EE5\u7F3A\u8003\u8A08\u3002\u4E0D\u5F97\u6284\u9304\u8A66\u984C\u651C\u51FA\u8A66\u5834\uFF0C\u5426\u5247\u6263\u9664\u8A72\u79D1\u6210\u7E3E 20 \u5206\uFF0C\u82E5\u7D93\u76E3\u8003\u4EBA\u54E1\u5236\u6B62\u5F8C\u4ECD\u518D\u72AF\u8005\uFF0C\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5 0 \u5206\u8A08\u3002\u610F\u5716\u6216\u5DF2\u5C07\u8A66\u5377\u3001\u7B54\u6848\u5377\u651C\u51FA\u8A66\u5834\uFF0C\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5 0 \u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u61C9\u5728\u6E2C\u9A57\u898F\u5B9A\u6642\u9593\u5167\u7D50\u675F\u4F5C\u7B54\u3001\u7E73\u4EA4\u8A66\u5377\u53CA\u7B54\u6848\u5361\uFF0C\u9055\u53CD\u898F\u5B9A\u8005\u4F9D\u4E0B\u5217\u60C5\u5F62\u5206\u5225\u8655\u7406\uFF1A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ol", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\u6E2C\u9A57\u7D50\u675F\u9234\u8072\u97FF\u8D77\uFF0C\u4ECD\u7E7C\u7E8C\u4F5C\u7B54\u8005\u6263\u9664\u8A72\u79D1\u6210\u7E3E 20 \u5206\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\u7D93\u76E3\u8003\u4EBA\u54E1\u5236\u6B62\u5F8C\u4ECD\u7E7C\u7E8C\u4F5C\u7B54\u8005\uFF0C\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5 0 \u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u7E73\u5377\u6642\uFF0C\u8A66\u5377\u53CA\u7B54\u6848\u5377\u5747\u61C9\u7E73\u56DE\uFF0C\u4E26\u61C9\u65BC\u76E3\u8003\u4EBA\u54E1\u63D0\u4F9B\u4E4B\u53C3\u52A0\u4EBA\u54E1\u7C3D\u5230\u8868\u7C3D\u540D\uFF0C\u4EE5\u4F5C\u70BA\u53C3\u52A0\u672C\u6B21\u6E2C\u9A57\u4E4B\u5230\u8003\u8B49\u660E\uFF0C\u82E5\u62D2\u7D55\u7C3D\u540D\u6216\u672A\u7C3D\u540D\u8005\u4E00\u5F8B\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u5982\u6709\u7591\u554F\uFF08\u5982\u8A66\u5377\u865F\u78BC\u8207\u7B54\u6848\u5377\u865F\u78BC\u4E0D\u540C\u3001\u57FA\u672C\u8CC7\u6599\u6709\u8AA4\u3001\u8A66\u984C\u5370\u5237\u4E0D\u6E05\u7B49\u60C5\u5F62\uFF09\uFF0C\u61C9\u8209\u624B\u8868\u793A\uFF0C\u5F85\u76E3\u8003\u4EBA\u54E1\u8FD1\u8EAB\u6642\u65B9\u53EF\u63D0\u51FA\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u8A66\u984C\u5DF2\u516C\u544A\u8B93\u61C9\u8A66\u4EBA\u54E1\u514D\u8CBB\u4E0B\u8F09\uFF0C\u6545\u5404\u6E2C\u9A57\u55AE\u4F4D\u5C07\u4E0D\u53E6\u884C\u516C\u5E03\u89E3\u7B54\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdmissionNoticeModalComponent_merc_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "merc-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "merc-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u6E2C\u9A57\u6642\u9593");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " 110\u5E7403\u670804\u65E5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u5E74\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " 110-2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u8EAB\u5206\u8B49\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " G123456789 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u51FA\u751F\u65E5\u671F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " 79\u5E7400\u670800\u65E5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u6E2C\u9A57\u5730\u5340");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " \u53F0\u5317 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u7DE8\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " 10110033 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u59D3\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " \u7C21\u66FC\u840D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u5EA7\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " 03 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u6E2C\u9A57\u5730\u9EDE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " \u5357\u5C71\u4E2D\u5EE3\u677E\u6C5F\u5927\u6A13(02)25000908 \u53F0\u5317\u5E02\u677E\u6C5F\u8DEF\uFF13\uFF17\uFF15\u865F\uFF12\u6A13 \u7B2C\uFF11\u8A66\u5834 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u4E4B\u8EAB\u5206\u8B49\u7D71\u4E00\u7DE8\u865F\u53CA\u51FA\u751F\u65E5\u671F\u5169\u8005\u7686\u932F\u8AA4\u8005\uFF0C\u61C9\u65BC\u6E2C\u9A57\u65E5\u524D\u5411\u539F\u6E2C\u9A57\u5831\u540D\u55AE\u4F4D\u53CD\u61C9\u4E26\u8FA6\u7406\u66F4\u6B63\uFF0C\u5426\u5247\u5C07\u4EE5\u975E\u5831\u540D\u53C3\u52A0\u6E2C\u9A57\u8005\u8AD6\uFF0C\u7576\u6B21\u6210\u7E3E\u4EE5\u96F6\u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " \u98B1\u98A8\u4F86\u8972\u4E4B\u8655\u7406\u65B9\u5F0F\uFF1A\u53C3\u52A0\u6E2C\u9A57\u8003\u5340\u6240\u5728\u7E23\u5E02\u653F\u5E9C\u5BA3\u5E03\u505C\u6B62\u4E0A\u73ED\uFF0C\u5247\u8A72\u6E2C\u9A57\u8003\u5340\u505C\u6B62\u8FA6\u7406\uFF0C\u5982\u9047\u505C\u6B62\u8FA6\u7406\u4E4B\u8003\u5340\uFF0C\u8ACB\u8A72\u8003\u5340\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u9015\u5411\u539F\u6E2C\u9A57\u5831\u540D\u55AE\u4F4D\u6D3D\u8FA6\u9000\u8CBB\u4E8B\u5B9C\uFF1B\u8A72\u53D6\u6D88\u6E2C\u9A57\u8A0A\u606F\u4E26\u5C07\u65BC\u5404\u6E2C\u9A57\u8003\u5340\u53CA\u672C\u516C\u6703\u7DB2\u7AD9(www.lia-roc.org.tw)\u63ED\u793A\u3002 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u8ACB\u8A73\u95B1\u4EE5\u4E0B\u8A66\u5834\u898F\u5247\uFF0C\u4E26\u6191\u8EAB\u5206\u8B49\u4EF6\u5165\u5834\uFF0C\u7121\u8EAB\u5206\u8B49\u4EF6\u8005\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u5916\u5E63\u6E2C\u9A57 \u8A66\u5834\u898F\u5247");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\u6E2C\u9A57\u6642\u9593\uFF1A60 \u5206\u9418\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u6191\u8EAB\u5206\u8B49\u4EF6\uFF08\u9650\u7528\u4E2D\u83EF\u6C11\u570B\u8EAB\u5206\u8B49\u3001\u4E2D\u83EF\u6C11\u570B\u99D5\u99DB\u57F7\u7167\u3001\u9644\u6709\u76F8\u7247\u4E4B\u5065\u4FDD IC \u5361\u3001 \u81FA\u7063\u5730\u5340\u5C45\u7559\u8B49\u3001\u5916\u50D1\u6C38\u4E45\u5C45\u7559\u8B49\u6216\u5927\u9678\u5730\u5340\u914D\u5076\u9818\u6709\u4E4B\u9577\u671F\u5C45\u7559\u8B49\u4EF6\uFF09\u5165\u5834\uFF0C\u7121\u8EAB\u5206\u8B49\u4EF6\u8005\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u6E2C\u9A57\u958B\u59CB\u5F8C\u672A\u6EFF 20 \u5206\u9418\u4E0D\u51C6\u51FA\u5834\uFF0C\u8D85\u904E 15 \u5206\u9418\u4ECD\u672A\u5165\u5834\u8005\u5747\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u61C9\u4F9D\u6392\u5B9A\u4E4B\u6E2C\u9A57\u5834\u6B21\u53CA\u8A66\u5834\u5EA7\u865F\u5C0D\u865F\u5165\u5EA7\uFF0C\u5426\u5247\u5747\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u61C9\u4F9D\u6392\u5B9A\u4E4B\u6E2C\u9A57\u5834\u6B21\u53CA\u8A66\u5834\u5EA7\u865F\u5C0D\u865F\u5165\u5EA7\uFF0C\u5426\u5247\u5747\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u4E0D\u5F97\u4F7F\u7528\u96FB\u5B50\u8A08\u7B97\u6A5F\u61C9\u8A66\uFF0C\u4E14\u4E0D\u5F97\u651C\u5E36\u6216\u4F7F\u7528\u975E\u61C9\u8A66\u5FC5\u9700\u7528\u54C1\uFF0C\u4E26\u4E0D\u5F97\u7F6E\u65BC\u5EA7\u4F4D\u56DB\u5468\uFF0C\u5426\u5247\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5 0 \u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\u6E2C\u9A57\u9032\u884C\u6642\uFF0C\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u7981\u6B62\u6709\u5DE6\u9867\u53F3\u76FC\u3001\u4F7F\u7528\u96FB\u5B50\u901A\u8A0A\u8A2D\u5099\u3001\u4EA4\u8AC7\u7B49\u4F01\u5716\u821E\u5F0A\u4E4B\u60C5\u4E8B\uFF0C\u96FB\u5B50\u901A\u8A0A\u8A2D\u5099\uFF08\u542B\u884C\u52D5\u96FB\u8A71\u3001\u4EFB\u4F55\u80FD\u767C\u51FA\u8072\u97FF\u53CA\u5177\u8A08\u6642\u6216\u9B27\u9234\u529F\u80FD\u4E4B\u96FB\u5B50\u8A2D\u5099\u7522\u54C1\uFF09\u61C9\u95DC\u9589\u96FB\u6E90\uFF0C\u5426\u5247\u4EE5\u9055\u898F\u8AD6\u3002\u8A66\u5834\u5167\u4E0D\u5F97\u98F2\u98DF\uFF0C\u82E5\u7D93\u76E3\u8003\u4EBA\u54E1\u5236\u6B62\u5F8C\u4ECD\u518D\u72AF\u8005\uFF0C\u5C07\u8ACB\u5176\u7ACB\u5373\u96E2\u5834\uFF0C\u4E26\u6536\u56DE\u8A66\u5377\u53CA\u7B54\u6848\u5377\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u7B54\u6848\u5377\u61C9\u4F9D\u8A66\u5377\u898F\u5B9A\u586B\u5BEB\u53CA\u5857\u8A18\uFF0C\u7B54\u6848\u5377\u4E0A\u4E26\u4E0D\u5F97\u51FA\u73FE\u4EFB\u4F55\u8207\u4F5C\u7B54\u7121\u95DC\u4E4B\u8A3B\u8A18\uFF0C\u5426\u5247\u4EE5\u7F3A\u8003\u8A08\u3002\u4E0D\u5F97\u6284\u9304\u8A66\u984C\u651C\u51FA\u8A66\u5834\uFF0C\u5426\u5247\u6263\u9664\u8A72\u79D1\u6210\u7E3E 20 \u5206\uFF0C\u82E5\u7D93\u76E3\u8003\u4EBA\u54E1\u5236\u6B62\u5F8C\u4ECD\u518D\u72AF\u8005\uFF0C\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5 0 \u5206\u8A08\u3002\u610F\u5716\u6216\u5DF2\u5C07\u8A66\u5377\u3001\u7B54\u6848\u5377\u651C\u51FA\u8A66\u5834\uFF0C\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5 0 \u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u61C9\u5728\u6E2C\u9A57\u898F\u5B9A\u6642\u9593\u5167\u7D50\u675F\u4F5C\u7B54\u3001\u7E73\u4EA4\u8A66\u5377\u53CA\u7B54\u6848\u5361\uFF0C\u9055\u53CD\u898F\u5B9A\u8005\u4F9D\u4E0B\u5217\u60C5\u5F62\u5206\u5225\u8655\u7406\uFF1A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ol", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\u6E2C\u9A57\u7D50\u675F\u9234\u8072\u97FF\u8D77\uFF0C\u4ECD\u7E7C\u7E8C\u4F5C\u7B54\u8005\u6263\u9664\u8A72\u79D1\u6210\u7E3E 20 \u5206\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u7D93\u76E3\u8003\u4EBA\u54E1\u5236\u6B62\u5F8C\u4ECD\u7E7C\u7E8C\u4F5C\u7B54\u8005\uFF0C\u4EE5\u9055\u898F\u8AD6\uFF0C\u8A72\u79D1\u4EE5 0 \u5206\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u7E73\u5377\u6642\uFF0C\u8A66\u5377\u53CA\u7B54\u6848\u5377\u5747\u61C9\u7E73\u56DE\uFF0C\u4E26\u61C9\u65BC\u76E3\u8003\u4EBA\u54E1\u63D0\u4F9B\u4E4B\u53C3\u52A0\u4EBA\u54E1\u7C3D\u5230\u8868\u7C3D\u540D\uFF0C\u4EE5\u4F5C\u70BA\u53C3\u52A0\u672C\u6B21\u6E2C\u9A57\u4E4B\u5230\u8003\u8B49\u660E\uFF0C\u82E5\u62D2\u7D55\u7C3D\u540D\u6216\u672A\u7C3D\u540D\u8005\u4E00\u5F8B\u4EE5\u7F3A\u8003\u8A08\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u5982\u6709\u7591\u554F\uFF08\u5982\u8A66\u5377\u865F\u78BC\u8207\u7B54\u6848\u5377\u865F\u78BC\u4E0D\u540C\u3001\u57FA\u672C\u8CC7\u6599\u6709\u8AA4\u3001\u8A66\u984C\u5370\u5237\u4E0D\u6E05\u7B49\u60C5\u5F62\uFF09\uFF0C\u61C9\u8209\u624B\u8868\u793A\uFF0C\u5F85\u76E3\u8003\u4EBA\u54E1\u8FD1\u8EAB\u6642\u65B9\u53EF\u63D0\u51FA\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AdmissionNoticeModalComponent {
    constructor() {
        this.OutsideExamType = _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"];
    }
    ngOnInit() {
    }
}
AdmissionNoticeModalComponent.ɵfac = function AdmissionNoticeModalComponent_Factory(t) { return new (t || AdmissionNoticeModalComponent)(); };
AdmissionNoticeModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdmissionNoticeModalComponent, selectors: [["app-admission-notice-modal"]], inputs: { outsideExam: "outsideExam" }, decls: 14, vars: 12, consts: [[1, "notice-title"], [1, "text-decoration-underline"], [4, "ngIf"], [1, "footer", "btn-groups"], [3, "mercType", "mercWidth", "mercSize"], [1, "row"], [1, "col-md-4", "col-12"], [1, "info-item"], [1, "info-label"], [1, "row", "ms-2"], [1, "text-secondary", "text-lg", "text-center"], [1, ""], [1, "brackets"], [1, "col-md-6", "col-12"]], template: function AdmissionNoticeModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u4E09\u5546\u7F8E\u90A6\u4EBA\u58FD\u4FDD\u96AA\u80A1\u4EFD\u6709\u9650\u516C\u53F8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "noticeType");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdmissionNoticeModalComponent_merc_card_6_Template, 90, 0, "merc-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AdmissionNoticeModalComponent_merc_card_7_Template, 83, 0, "merc-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdmissionNoticeModalComponent_merc_card_8_Template, 83, 0, "merc-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "merc-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u4E0B\u8F09PDF\u6A94 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "merc-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u4E0B\u8F09JPG\u6A94 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u4EBA\u8EAB\u4FDD\u96AA\u696D\u52D9\u54E1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 10, ctx.outsideExam), " \u5165\u5834\u901A\u77E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.outsideExam === ctx.OutsideExamType.professional);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.outsideExam === ctx.OutsideExamType.common);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.outsideExam === ctx.OutsideExamType.foreignCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], merc_lib__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_3__["MercCardComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_3__["ɵb"]], pipes: [_pipe_notice_type_pipe__WEBPACK_IMPORTED_MODULE_4__["NoticeTypePipe"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-card[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0;\n  border: rgba(153, 153, 153, 0.2) 1px solid;\n  box-shadow: none;\n  background-color: #fff;\n  border-radius: 6px;\n  \n  \n  \n  \n  \n  \n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-self: center;\n  font-size: 25px;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 6px 6px 0 0;\n  color: #fff;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-content[_ngcontent-%COMP%] {\n  display: block;\n  padding: 35px 15px;\n}\n.merc-card.merc-card-primary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\n.merc-card.merc-card-primary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\n.merc-card.merc-card-secondary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\n.merc-card.merc-card-secondary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\n.merc-card.merc-card-third[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\n.merc-card.merc-card-third-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary-variant[_ngcontent-%COMP%] {\n  color: #ec6122;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary[_ngcontent-%COMP%] {\n  color: #ff6621;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary-variant[_ngcontent-%COMP%] {\n  color: #f8c73f;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third[_ngcontent-%COMP%] {\n  color: #58a8dd;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third-variant[_ngcontent-%COMP%] {\n  color: #fffaf1;\n}\n.merc-card.merc-card-small[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-card.merc-card-normal[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.merc-card.merc-card-large[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-table[_ngcontent-%COMP%] {\n  \n  \n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-header[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%] {\n  overflow-y: overlay !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > .ant-table-row[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]   .ant-table-column-has-sorters[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-placeholder[_ngcontent-%COMP%]   .ant-table-expanded-row-fixed[_ngcontent-%COMP%] {\n  margin: -4px -8px;\n  min-width: 100%;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\nmerc-table[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 0;\n  background-color: transparent;\n  position: absolute;\n  top: 50%;\n  right: 26px;\n  transform: translateY(-50%);\n  display: flex;\n  flex-wrap: nowrap;\n  transition: opacity 0.3s, background-color 0.3s;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) {\n  background-color: #c9c9c9;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)   .hover-to-edit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nmerc-table.merc-table-primary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\nmerc-table.merc-table-primary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\nmerc-table.merc-table-secondary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\nmerc-table.merc-table-secondary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\nmerc-table.merc-table-third[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\nmerc-table.merc-table-third-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-flex-table-primary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #e6002d;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #e6002d;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #e6002d;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ec6122;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ec6122;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ec6122;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ff6621;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ff6621;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ff6621;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #f8c73f;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #f8c73f;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #f8c73f;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #58a8dd;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #58a8dd;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #58a8dd;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #fffaf1;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #fffaf1;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #fffaf1;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-tab[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  \n  \n  \n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%] {\n  border: 0;\n  margin-bottom: 0px;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]::before {\n  border-bottom: hidden;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  border: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6002d;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6002d;\n  border-bottom-width: 0px !important;\n  padding: 0 15px;\n  height: 35px;\n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%]   .ant-tabs-close-x[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 16px;\n  height: 18px;\n  margin-right: 0 !important;\n  vertical-align: middle;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%]   .ant-tabs-tab-btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #fff;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-small[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 25px;\n}\nmerc-tab.merc-tab-normal[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 35px;\n}\nmerc-tab.merc-tab-large[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.toggle-float-btn[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #e6002d;\n  color: white;\n  border: 1px solid #e6002d;\n  border-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  height: 40px;\n  padding: 0 16px;\n  line-height: 38px;\n  cursor: pointer;\n}\n.toggle-float-btn[_ngcontent-%COMP%]   .toggle-wrap[_ngcontent-%COMP%] {\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n}\nmerc-tab[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\nmerc-tab[mercType=primary][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\nmerc-tab[mercType=primaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\nmerc-tab[mercType=secondary][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\nmerc-tab[mercType=secondaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\nmerc-tab[mercType=third][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\nmerc-tab[mercType=thirdVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\nmerc-tab[mercSize=small][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 30px;\n}\nmerc-tab[mercSize=normal][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 42px;\n}\nmerc-tab[mercSize=large][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  \n  \n  \n  \n  \n  \n  \n}\n.merc-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 2px 0 rgba(21, 28, 42, 0.17);\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #bd0025;\n  border: 1px solid #bd0025;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #e6002d;\n  background-color: #fff;\n  color: #e6002d;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #9a001e;\n  border: 1px solid #9a001e;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d34e12;\n  border: 1px solid #d34e12;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ec6122;\n  background-color: #fff;\n  color: #ec6122;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b2420f;\n  border: 1px solid #b2420f;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f74d00;\n  border: 1px solid #f74d00;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ff6621;\n  background-color: #fff;\n  color: #ff6621;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #d44200;\n  border: 1px solid #d44200;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f7bc18;\n  border: 1px solid #f7bc18;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #f8c73f;\n  background-color: #fff;\n  color: #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #e2a908;\n  border: 1px solid #e2a908;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #3696d6;\n  border: 1px solid #3696d6;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #58a8dd;\n  background-color: #fff;\n  color: #58a8dd;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #2784c1;\n  border: 1px solid #2784c1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ffebc8;\n  border: 1px solid #ffebc8;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #fffaf1;\n  background-color: #fff;\n  color: #fffaf1;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #ffdfa5;\n  border: 1px solid #ffdfa5;\n}\n.merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active    > *[_ngcontent-%COMP%], .merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover    > *[_ngcontent-%COMP%] {\n  transition: filter 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  filter: brightness(0.6);\n}\n.merc-btn.merc-btn-small[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-btn.merc-btn-normal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.merc-btn.merc-btn-large[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.merc-btn.merc-btn-xs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.merc-btn.merc-btn-sm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.merc-btn.merc-btn-md[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.merc-btn.merc-btn-lg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.merc-btn.merc-btn-xl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.merc-btn.disabled[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.25);\n  background: #f5f5f5;\n  border-color: #d9d9d9;\n  text-shadow: none;\n  box-shadow: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  width: 200px;\n  position: relative;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%]:hover   .clear[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 7px;\n  padding: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: white;\n  z-index: 999;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .selected-date[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 115%;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  max-width: 200px;\n  background-color: #fff;\n  z-index: 999;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 2px 0;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 16px;\n  text-align: center;\n  color: #e6002d;\n  display: inline-block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .week[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .months[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .not-present[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected.not-present[_ngcontent-%COMP%] {\n  background-color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #e6002d;\n  color: #e6002d;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today.not-present[_ngcontent-%COMP%] {\n  color: #efefef;\n  cursor: not-allowed;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%] {\n  color: #efefef;\n  margin: 10px;\n  opacity: 0.8;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .suffix-icon[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n .merc-year-select .ant-select-selection-item {\n  padding-right: 15px !important;\n}\n .merc-year-select .ant-select-item {\n  padding: 5px 8px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-calendar[_ngcontent-%COMP%]    > .rocYear[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n@media screen and (max-width: 750px) {\n  .merc-calendar[_ngcontent-%COMP%]    > .rocYear[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 45px;\n    justify-content: center;\n  }\n}\n.merc-calendar[_ngcontent-%COMP%]    > .rocYear-title[_ngcontent-%COMP%] {\n  position: relative;\n  top: 38px;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: #ff6621 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[disabled][_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n  border: #d9d9d9 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:hover:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:active:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .focus-today[_ngcontent-%COMP%] {\n  background-color: #ff8954;\n  border: #ff8954 1px solid;\n}\nmerc-card-content[_ngcontent-%COMP%] {\n  padding: 15px 25px !important;\n}\n.notice-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  padding: 15px;\n  text-align: center;\n}\n@media screen and (max-width: 767px) {\n  .notice-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 16px;\n}\n.info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  color: #ff6621;\n  width: 70px;\n  margin-right: 10px;\n  margin-bottom: 8px;\n  text-align-last: justify;\n}\nol[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\nol.brackets[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  counter-reset: list;\n}\nol.brackets[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nol.brackets[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n  counter-increment: list;\n  content: \"(\" counter(list) \")\";\n  counter-increment: list;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FkbWlzc2lvbi1ub3RpY2UtbW9kYWwuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jdXN0b20tc2V0dGluZy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9zdHlsZXMvY3VzdG9tLXNldHRpbmcuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvc3R5bGVzL19jb21wb25lbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lcmMtY2FyZC9tZXJjLWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lcmMtdGFibGUvbWVyYy10YWJsZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZmxleC10YWJsZS9mbGV4LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9tZXJjLXRhYi9tZXJjLXRhYi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWVyYy10YWIvdG9nZ2xlLWNvbGxhcHNlL3RvZ2dsZS1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvZGF0ZS9jb21wb25lbnRzL3JvYy1kYXRlLXBpY2tlci9yb2MtZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2RhdGUvY29tcG9uZW50cy9tZXJjLWNhbGVuZGFyL21lcmMtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGFBQUE7QUEwQkEsWUFBQTtBQWNBLFlBQUE7QUFDQSxtQkFBQTtBQWlCQSxpQkFBQTtBQUVBLG9CQUFBO0FBbUJBLGtCQUFBO0FBRUEscUJBQUE7QUFvQkEsbUJBQUE7QUFhQSxpQkFBQTtBQ2xIQSx3REFBQTtBQUNBLGFBQUE7QUF1QkEsWUFBQTtBQWNBLFlBQUE7QUFDQSxtQkFBQTtBQWlCQSxpQkFBQTtBQUVBLG9CQUFBO0FBbUJBLGtCQUFBO0FBRUEscUJBQUE7QUFvQkEsbUJBQUE7QUFhQSxpQkFBQTtBQ2hIQSxhQUFBO0FEQUEsd0RBQUE7QUFDQSxhQUFBO0FBdUJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QUU5R0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBa0JBLHNCQUFBO0VBeUJB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eTNCaEI7QU9weUJnQjtFQUNJLGNOcEZJO0VNcUZKLHFCTnJGSTtBRDIzQnhCO0FPcHlCZ0I7RUFDSSx5Qk54Rkk7RU15RkoscUJOekZJO0FEKzNCeEI7QU9oeUJvQjtFQUNJLHFCTmhHQTtBRGs0QnhCO0FPeHhCZ0I7RUFDSSxjTnpHRjtFTTBHRSxxQk4xR0Y7QURvNEJsQjtBT3h4QmdCO0VBQ0kseUJON0dGO0VNOEdFLHFCTjlHRjtBRHc0QmxCO0FPcHhCb0I7RUFDSSxxQk5ySE47QUQyNEJsQjtBTzV3QmdCO0VBQ0ksY045SE07RU0rSE4scUJOL0hNO0FENjRCMUI7QU81d0JnQjtFQUNJLHlCTmxJTTtFTW1JTixxQk5uSU07QURpNUIxQjtBT3h3Qm9CO0VBQ0kscUJOMUlFO0FEbzVCMUI7QU9od0JnQjtFQUNJLGNObkpOO0VNb0pNLHFCTnBKTjtBRHM1QmQ7QU9od0JnQjtFQUNJLHlCTnZKTjtFTXdKTSxxQk54Sk47QUQwNUJkO0FPNXZCb0I7RUFDSSxxQk4vSlY7QUQ2NUJkO0FPcHZCZ0I7RUFDSSxjTnhLRTtFTXlLRixxQk56S0U7QUQrNUJ0QjtBT3B2QmdCO0VBQ0kseUJONUtFO0VNNktGLHFCTjdLRTtBRG02QnRCO0FPaHZCb0I7RUFDSSxxQk5wTEY7QURzNkJ0QjtBT3R1Qlk7RUFDSSxZQUFBO0FQd3VCaEI7QU9qdUJZO0VBQ0ksWUFBQTtBUG11QmhCO0FPNXRCWTtFQUNJLFlBQUE7QVA4dEJoQjtBT3h0QkEsK0JBQUE7QUxyT0Esd0RBQUE7QUFDQSxhQUFBO0FBdUJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QU05R0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QVIwOEJKO0FReDhCSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FSMDhCUjtBUXQ4QkE7RUFDSSxhQUFBO0VBOERBLFdBQUE7RUFDQSxpQkFBQTtFQW1CQSxlQUFBO0FSMDNCSjtBUXo4QlE7RUFDSSx5QlA1Qkk7RU82QkoseUJBQUE7QVIyOEJaO0FRcjhCUTtFQUNJLHlCUGxDWTtFT21DWix5QkFBQTtBUnU4Qlo7QVF6N0JRO0VBQ0kseUJQaERNO0VPaUROLHlCQUFBO0FSMjdCWjtBUXI3QlE7RUFDSSx5QlB0RGM7RU91RGQseUJBQUE7QVJ1N0JaO0FRMTZCUTtFQUNJLHlCUG5FRTtFT29FRix5QkFBQTtBUjQ2Qlo7QVF2NkJRO0VBQ0kseUJQeEVVO0VPeUVWLHlCQUFBO0FSeTZCWjtBUWw2QlE7RUFDSSxZQUFBO0FSbzZCWjtBUS81QlE7RUFDSSxZQUFBO0FSaTZCWjtBUTU1QlE7RUFDSSxZQUFBO0FSODVCWjtBRXpnQ0Esd0RBQUE7QUFDQSxhQUFBO0FBdUJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QU85R0E7RUFDSSxxQkFBQTtFQVVBLGFBQUE7RUF3SkEsV0FBQTtFQUVBLGFBQUE7RUFhQSxXQUFBO0VBRUEsYUFBQTtFQXFCQSxXQUFBO0VBRUEsYUFBQTtBVGsxQko7QVMxaENJO0VBQ0ksZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FUNGhDUjtBU3RoQ1E7RUFDSSxXUklFO0VRSEYseUJSZEk7RVFlSix5QkFBQTtBVHdoQ1o7QVN0aENZO0VBRUkseUJBQUE7RUFDQSx5QkFBQTtBVHVoQ2hCO0FTbmhDUTtFQUNJLHlCQUFBO0VBQ0Esc0JSVEU7RVFVRixjUjNCSTtBRGdqQ2hCO0FTcGhDWTtFQUVJLGNBQUE7RUFDQSx5QkFBQTtBVHFoQ2hCO0FTOWdDUTtFQUNJLFdSdEJFO0VRdUJGLHlCUnRDWTtFUXVDWix5QkFBQTtBVGdoQ1o7QVMvZ0NZO0VBRUkseUJBQUE7RUFDQSx5QkFBQTtBVGdoQ2hCO0FTN2dDUTtFQUNJLHlCQUFBO0VBQ0Esc0JSakNFO0VRa0NGLGNSakRZO0FEZ2tDeEI7QVM5Z0NZO0VBRUksY0FBQTtFQUNBLHlCQUFBO0FUK2dDaEI7QVN6Z0NRO0VBQ0ksV1I3Q0U7RVE4Q0YseUJSM0RNO0VRNEROLHlCQUFBO0FUMmdDWjtBUzFnQ1k7RUFFSSx5QkFBQTtFQUNBLHlCQUFBO0FUMmdDaEI7QVN4Z0NRO0VBQ0kseUJBQUE7RUFDQSxzQlJ4REU7RVF5REYsY1J0RU07QURnbENsQjtBU3pnQ1k7RUFFSSxjQUFBO0VBQ0EseUJBQUE7QVQwZ0NoQjtBU3BnQ1E7RUFDSSxXUnBFRTtFUXFFRix5QlJoRmM7RVFpRmQseUJBQUE7QVRzZ0NaO0FTcmdDWTtFQUVJLHlCQUFBO0VBQ0EseUJBQUE7QVRzZ0NoQjtBU25nQ1E7RUFDSSx5QkFBQTtFQUNBLHNCUi9FRTtFUWdGRixjUjNGYztBRGdtQzFCO0FTcGdDWTtFQUVJLGNBQUE7RUFDQSx5QkFBQTtBVHFnQ2hCO0FTLy9CUTtFQUNJLFdSM0ZFO0VRNEZGLHlCUnJHRTtFUXNHRix5QkFBQTtBVGlnQ1o7QVNoZ0NZO0VBRUkseUJBQUE7RUFDQSx5QkFBQTtBVGlnQ2hCO0FTOS9CUTtFQUNJLHlCQUFBO0VBQ0Esc0JSdEdFO0VRdUdGLGNSaEhFO0FEZ25DZDtBUy8vQlk7RUFFSSxjQUFBO0VBQ0EseUJBQUE7QVRnZ0NoQjtBUzEvQlE7RUFDSSxXUmxIRTtFUW1IRix5QlIxSFU7RVEySFYseUJBQUE7QVQ0L0JaO0FTMy9CWTtFQUVJLHlCQUFBO0VBQ0EseUJBQUE7QVQ0L0JoQjtBU3ovQlE7RUFDSSx5QkFBQTtFQUNBLHNCUjdIRTtFUThIRixjUnJJVTtBRGdvQ3RCO0FTMS9CWTtFQUVJLGNBQUE7RUFDQSx5QkFBQTtBVDIvQmhCO0FTbi9CWTtFQUNJLDREQUFBO0VBQ0EsdUJBQUE7QVRxL0JoQjtB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Q0EsWUFBQTtFQUNBLGNBQUE7QVh3MENSO0FXdDBDSTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBWHcwQ1I7QVd0MENJOzs7RUFHSSx5QkFBQTtFQUNBLHlCQUFBO0FYdzBDUjtBQTMyQ0E7RUFDRSw2QkFBQTtBQTgyQ0Y7QUE1MkNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBKzJDRjtBQTkyQ0U7RUFMRjtJQU1JLGVBQUE7RUFpM0NGO0FBQ0Y7QUE5MkNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFpM0NGO0FBaDNDRTtFQUNFLGNDWGM7RURZZCxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBazNDSjtBQS8yQ0E7RUFDRSxrQkFBQTtBQWszQ0Y7QUFoM0NBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQW0zQ0Y7QUFsM0NFO0VBQ0UsZ0JBQUE7QUFvM0NKO0FBbDNDRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQW8zQ0oiLCJmaWxlIjoiYWRtaXNzaW9uLW5vdGljZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9jdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbm1lcmMtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweCAyNXB4ICFpbXBvcnRhbnQ7XG59XG4ubm90aWNlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4uaW5mby1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAuaW5mby1sYWJlbCB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGp1c3RpZnk7XG4gIH1cbn1cbm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxub2wuYnJhY2tldHMge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgY291bnRlci1yZXNldDogbGlzdDtcbiAgPiBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICA+IGxpOmJlZm9yZSB7XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3Q7XG4gICAgY29udGVudDogXCIoXCIgY291bnRlcihsaXN0KSBcIilcIjtcbiAgICBjb3VudGVyLWluY3JlbWVudDogbGlzdDtcbiAgfVxufVxuIiwiLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCwgMC44KTtcbi8vIOS4u+imgeiJslxuJHByaW1hcnktY29sb3I6ICNlNjAwMmQ7XG4vLyDkuLvopoHoibLororlvaJcbiRwcmltYXJ5LXZhcmlhbnQtY29sb3I6ICNlYzYxMjI7XG4vLyDmrKHopoHoibJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY2MjE7XG4vLyDmrKHopoHoibLororlvaJcbiRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjogI2Y4YzczZjtcbi8vIOesrOS4ieiJslxuJHRoaXJkLWNvbG9yOiAjNThhOGRkO1xuLy8g56ys5LiJ6Imy6K6K5b2iXG4kdGhpcmQtdmFyaWFudC1jb2xvcjogI2ZmZmFmMTtcblxuLy8g5re654GwXG4kY29sb3ItbGlnaHQtZ3JheTogI2VmZWZlZjtcbi8vIOa3seeBsFxuJGNvbG9yLWRhcmstZ3JheTogIzMzMzMzMztcbi8vIOeZvVxuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLXNpbHZlcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjIpO1xuJGNvbG9yLWxpZ2h0ZXItZ3JheTogI2Y5ZjlmOTtcbiRjb2xvci1ncmVlbjogIzg3Yjg0ODtcblxuLyoqIOWfuuekjuWFg+S7tuioreWumiAqL1xuJGZvbnQtc3o6IChcbiAgeGw6IDI1cHgsXG4gIGxnOiAxOHB4LFxuICBtZDogMTZweCxcbiAgc206IDE0cHgsXG4gIHhzOiAxMnB4LFxuKTtcblxuJGZvbnQtd2VpZ2h0OiAoXG4gIGZhdHR5OiA2MDAsXG4gIG5vcm1hbDogbm9ybWFsLFxuKTtcblxuLyoqIOW4uOeUqOWFg+S7tuioreWumiAqL1xuLyogYmFzZSBidG4gc3RhcnQgKi9cbiRidG46IChcbiAgYm9yZGVyLXJhZGl1czogM3B4LFxuICBzaGFkb3c6IDFweCAxcHggMnB4IDAgcmdiYSgyMSwgMjgsIDQyLCAwLjE3KSxcbik7XG4kYnRuLWhlaWdodDogKFxuICBsZzogNDBweCxcbiAgbWQ6IDM1cHgsXG4gIHNtOiAzMHB4LFxuKTtcbiRidG4td2lkdGg6IChcbiAgeGw6IDIwMHB4LFxuICBsZzogMTYwcHgsXG4gIG1kOiAxMjBweCxcbiAgc206IDkwcHgsXG4gIHhzOiA3MHB4LFxuKTtcbi8qIGJhc2UgYnRuIGVuZCAqL1xuXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cbiRiYXNlLWNhcmQ6IChcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLFxuICBib3gtc2hhZG93OiBub25lLFxuICBwYWRkaW5nOiAwLFxuICBib3JkZXI6ICRjb2xvci1zaWx2ZXIgMXB4IHNvbGlkLFxuICBib3JkZXItcmFkaXVzOiA2cHgsXG4pO1xuXG4kYmFzZS1jYXJkLWhlYWRlcjogKFxuICBhbGlnbi1zZWxmOiBjZW50ZXIsXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgeGwpLFxuICBmb250LXdlaWdodDogbWFwLWdldCgkZm9udC13ZWlnaHQsIGZhdHR5KSxcbiAgcGFkZGluZzogMTBweCAyMHB4LFxuKTtcblxuJGJhc2UtY2FyZC1jb250ZW50OiAoXG4gIHBhZGRpbmc6IDM1cHggMTVweCxcbik7XG4vKiogYmFzZSBjYXJkIGVuZCovXG5cbi8qIGJhc2UgdGFibGUgc3RhcnQgKi9cbiRiYXNlLXRhYmxlOiAoXG4gIC8vIGhvdmVyIOmhj+iJslxuICBob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLWxpZ2h0LWdyYXksIDE1JSksXG4gIC8vIOmWk+malOiJslxuICBldmVuLWNvbC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3IsXG4gIC8vIOWck+inklxuICByYWRpdXM6IDdweCxcbiAgLy8g6Zmw5b2xXG4gIHNoYWRvdzogMXB4IDJweCA0cHggI2Q1ZDVkNSxcbiAgLy8g6KGo6aCt44CB5YWn5a6577yIdGjjgIF0ZO+8iSDplpPpmpRcbiAgcGFkZGluZzogOHB4IDhweCxcbiAgLy8g5omL5qmf54mI6KGo6aCt44CB5YWn5a6577yIdGjjgIF0ZO+8iSDplpPpmpTvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBtby1wYWRkaW5nOiAzcHggOHB4LFxuICAvLyDlub5weOS7peS4i+S9v+eUqOaJi+apn+eJiO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIGJyZWFrLXBvaW50OiA3NjdweCxcbiAgLy8g5qyE5L2N5LiL5pa555qEYm9yZGVyLWJvdHRvbe+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLWJvcmRlci1ib3R0b20td2lkdGg6IDBweFxuKTtcblxuLyogYmFzZSB0YWIgc3RhcnQgKi9cbiRiYXNlLXRhYjogKFxuICAvLyDpoY/oibIobWVyYy10YWIg5pyq5YKz5YWlIG1lcmNUeXBlIOaZguacieaViClcbiAgdGFiLWNvbG9yOiAkcHJpbWFyeS1jb2xvcixcbiAgLy8gdGFiIOmCiuahhlxuICB0YWItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIC8vIGNvbnRlbnQg6YKK5qGGXG4gIGNvbnRlbnQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIC8vIOWck+inklxuICByYWRpdXM6IDdweCxcbiAgLy8g5a2X6auU5aSn5bCPXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbGcpXG4pO1xuLyogYmFzZSB0YWIgZW5kICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9zdHlsZXMvbWVyYy1saWIuc2Nzc1wiO1xuIiwiLyog5q2kc2Nzc+eCuuWFg+S7tuWFp+eahCBjdXN0b20tc2V0dGluZ++8jOiIh+WcluabuOmkqOWFqOWfn+eahCBjdXN0b20tc2V0dGluZyDkuI3lkIwgKi9cclxuLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xyXG4kY29sb3Itd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRjb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOCkgIWRlZmF1bHQ7XHJcbi8vIOS4u+imgeiJslxyXG4kcHJpbWFyeS1jb2xvcjogI2I5ZTFlNCAhZGVmYXVsdDtcclxuLy8g5Li76KaB6Imy6K6K5b2iXHJcbiRwcmltYXJ5LXZhcmlhbnQtY29sb3I6ICM1NGJlOWYgIWRlZmF1bHQ7XHJcbi8vIOasoeimgeiJslxyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNGI4YWM1ICFkZWZhdWx0O1xyXG4vLyDmrKHopoHoibLororlvaJcclxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjZTZmM2Y3ICFkZWZhdWx0O1xyXG4vLyDnrKzkuInoibJcclxuJHRoaXJkLWNvbG9yOiAjODAwMDgwICFkZWZhdWx0O1xyXG4vLyDnrKzkuInoibLororlvaJcclxuJHRoaXJkLXZhcmlhbnQtY29sb3I6ICNlZWQ3ZWQgIWRlZmF1bHQ7XHJcblxyXG4vLyDmt7rngbBcclxuJGNvbG9yLWxpZ2h0LWdyYXk6ICNlNWU1ZTUgIWRlZmF1bHQ7XHJcblxyXG4vLyDpoY/oibLlrprnvqnljIVcclxuJGNvbG9yU2V0OiBcInByaW1hcnlcIiAkcHJpbWFyeS1jb2xvciwgXCJwcmltYXJ5LXZhcmlhbnRcIiAkcHJpbWFyeS12YXJpYW50LWNvbG9yLCBcInNlY29uZGFyeVwiICRzZWNvbmRhcnktY29sb3IsXHJcbiAgXCJzZWNvbmRhcnktdmFyaWFudFwiICRzZWNvbmRhcnktdmFyaWFudC1jb2xvciwgXCJ0aGlyZFwiICR0aGlyZC1jb2xvciwgXCJ0aGlyZC12YXJpYW50XCIgJHRoaXJkLXZhcmlhbnQtY29sb3I7XHJcblxyXG4vKiog5Z+656SO5YWD5Lu26Kit5a6aICovXHJcbiRmb250LXN6OiAoXHJcbiAgeGw6IDMwcHgsXHJcbiAgbGc6IDE4cHgsXHJcbiAgbWQ6IDE2cHgsXHJcbiAgc206IDE0cHgsXHJcbiAgeHM6IDEycHgsXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC13ZWlnaHQ6IChcclxuICBmYXR0eTogNjAwLFxyXG4gIG5vcm1hbDogbm9ybWFsLFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLyoqIOW4uOeUqOWFg+S7tuioreWumiAqL1xyXG4vKiBiYXNlIGJ0biBzdGFydCAqL1xyXG4kYnRuOiAoXHJcbiAgYm9yZGVyLXJhZGl1czogN3B4LFxyXG4gIHNoYWRvdzogMXB4IDFweCAycHggMCByZ2JhKDIxLCAyOCwgNDIsIDAuMTcpLFxyXG4pICFkZWZhdWx0O1xyXG4kYnRuLWhlaWdodDogKFxyXG4gIGxnOiA0MHB4LFxyXG4gIG1kOiAzNXB4LFxyXG4gIHNtOiAzMHB4LFxyXG4pICFkZWZhdWx0O1xyXG4kYnRuLXdpZHRoOiAoXHJcbiAgeGw6IDIwMHB4LFxyXG4gIGxnOiAxNTBweCxcclxuICBtZDogMTIwcHgsXHJcbiAgc206IDkwcHgsXHJcbiAgeHM6IDYwcHgsXHJcbikgIWRlZmF1bHQ7XHJcbi8qIGJhc2UgYnRuIGVuZCAqL1xyXG5cclxuLyoqIGJhc2UgY2FyZCBzdGFydCovXHJcbiRiYXNlLWNhcmQ6IChcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUsXHJcbiAgYm94LXNoYWRvdzogbm9uZSxcclxuICBwYWRkaW5nOiAwLFxyXG4gIGJvcmRlcjogMCxcclxuICBib3JkZXItcmFkaXVzOiA2cHgsXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kYmFzZS1jYXJkLWhlYWRlcjogKFxyXG4gIGFsaWduLXNlbGY6IGNlbnRlcixcclxuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIGxnKSxcclxuICBmb250LXdlaWdodDogbWFwLWdldCgkZm9udC13ZWlnaHQsIGZhdHR5KSxcclxuICBwYWRkaW5nOiAwIDE1cHgsXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kYmFzZS1jYXJkLWNvbnRlbnQ6IChcclxuICBwYWRkaW5nOiAxMHB4IDE1cHgsXHJcbikgIWRlZmF1bHQ7XHJcbi8qKiBiYXNlIGNhcmQgZW5kKi9cclxuXHJcbi8qIGJhc2UgdGFibGUgc3RhcnQgKi9cclxuJGJhc2UtdGFibGU6IChcclxuICAvLyBob3ZlciDpoY/oibJcclxuICBob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLWxpZ2h0LWdyYXksIDE1JSksXHJcbiAgLy8g6ZaT6ZqU6ImyXHJcbiAgZXZlbi1jb2wtY29sb3I6ICRjb2xvci1saWdodC1ncmF5LFxyXG4gIC8vIOWck+inklxyXG4gIHJhZGl1czogN3B4LFxyXG4gIC8vIOmZsOW9sVxyXG4gIHNoYWRvdzogMXB4IDJweCA0cHggI2Q1ZDVkNSxcclxuICAvLyDooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malFxyXG4gIHBhZGRpbmc6IDRweCA4cHgsXHJcbiAgLy8g5omL5qmf54mI6KGo6aCt44CB5YWn5a6577yIdGjjgIF0ZO+8iSDplpPpmpTvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxyXG4gIG1vLXBhZGRpbmc6IDEwcHggOHB4LFxyXG4gIC8vIOW5vnB45Lul5LiL5L2/55So5omL5qmf54mI77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcclxuICBicmVhay1wb2ludDogOTkxcHgsXHJcbiAgLy8g5qyE5L2N5LiL5pa555qEYm9yZGVyLWJvdHRvbe+8iGZsZXggdGFibGUg5bCI55So77yJXHJcbiAgbW8tYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4XHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vKiBiYXNlIHRhYiBzdGFydCAqL1xyXG4kYmFzZS10YWI6IChcclxuICAvLyDpoY/oibIobWVyYy10YWIg5pyq5YKz5YWlIG1lcmNUeXBlIOaZguacieaViClcclxuICB0YWItY29sb3I6ICRwcmltYXJ5LWNvbG9yLFxyXG4gIC8vIHRhYiDnt6jmoYZcclxuICB0YWItYm9yZGVyLXdpZHRoOiAxcHgsXHJcbiAgLy8gY29udGVudCDnt6jmoYZcclxuICBjb250ZW50LWJvcmRlci13aWR0aDogMTBweCxcclxuICAvLyDlnJPop5JcclxuICByYWRpdXM6IDdweCxcclxuICAvLyDlrZfpq5TlpKflsI9cclxuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIGxnKVxyXG4pICFkZWZhdWx0O1xyXG4vKiBiYXNlIHRhYiBlbmQgKi9cclxuIiwiLyog5YWD5Lu2IHN0eWxlICovXHJcbkBpbXBvcnQgXCIuLi9saWIvY29tcG9uZW50cy9tZXJjLWNhcmQvbWVyYy1jYXJkLmNvbXBvbmVudC5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi9saWIvY29tcG9uZW50cy9tZXJjLXRhYmxlL21lcmMtdGFibGUuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL2ZsZXgtdGFibGUvZmxleC10YWJsZS5jb21wb25lbnQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvbWVyYy10YWIvbWVyYy10YWIuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL21lcmMtdGFiL3RvZ2dsZS1jb2xsYXBzZS90b2dnbGUtY29sbGFwc2UuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uL2RhdGUvY29tcG9uZW50cy9yb2MtZGF0ZS1waWNrZXIvcm9jLWRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi9kYXRlL2NvbXBvbmVudHMvbWVyYy1jYWxlbmRhci9tZXJjLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzXCI7XHJcbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XHJcblxyXG4ubWVyYy1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS1jYXJkLCBwYWRkaW5nKTtcclxuICAgIGJvcmRlcjogbWFwLWdldCgkYmFzZS1jYXJkLCBib3JkZXIpO1xyXG4gICAgYm94LXNoYWRvdzogbWFwLWdldCgkYmFzZS1jYXJkLCBib3gtc2hhZG93KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtY2FyZCwgYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlci1yYWRpdXMpO1xyXG5cclxuICAgIC5tZXJjLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogbWFwLWdldCgkYmFzZS1jYXJkLWhlYWRlciwgYWxpZ24tc2VsZik7XHJcbiAgICAgICAgZm9udC1zaXplOiBtYXAtZ2V0KCRiYXNlLWNhcmQtaGVhZGVyLCBmb250LXNpemUpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRiYXNlLWNhcmQtaGVhZGVyLCBmb250LXdlaWdodCk7XHJcbiAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS1jYXJkLWhlYWRlciwgcGFkZGluZyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkYmFzZS1jYXJkLCBib3JkZXItcmFkaXVzKSBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlci1yYWRpdXMpIDAgMDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXJjLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS1jYXJkLWNvbnRlbnQsIHBhZGRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGhlYWRlciDog4zmma/poY/oibIgc3RhcnQgKi9cclxuICAgIC8vIOS4u+mhjOiJslxyXG4gICAgJi5tZXJjLWNhcmQtcHJpbWFyeSA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIH1cclxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxyXG4gICAgJi5tZXJjLWNhcmQtcHJpbWFyeS12YXJpYW50ID4gLm1lcmMtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICB9XHJcbiAgICAvLyDmrKHopoHoibJcclxuICAgICYubWVyYy1jYXJkLXNlY29uZGFyeSA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXHJcbiAgICAmLm1lcmMtY2FyZC1zZWNvbmRhcnktdmFyaWFudCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICB9XHJcbiAgICAvLyDnrKzkuInoibJcclxuICAgICYubWVyYy1jYXJkLXRoaXJkID4gLm1lcmMtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcclxuICAgIH1cclxuICAgIC8vIOesrOS4ieiJsuiuiuW9olxyXG4gICAgJi5tZXJjLWNhcmQtdGhpcmQtdmFyaWFudCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcclxuICAgIH1cclxuICAgIC8qIGhlYWRlciDog4zmma/poY/oibIgZW5kICovXHJcblxyXG4gICAgLyogaGVhZGVyIOWtl+mrlOmhj+iJsiBzdGFydCAqL1xyXG4gICAgLy8g5Li76aGM6ImyXHJcbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICRjb2xvclNldCB7XHJcbiAgICAgICAgLm1lcmMtY2FyZC1oZWFkZXItI3skbmFtZX0ge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIGhlYWRlciDpoY/oibIgZW5kICovXHJcblxyXG4gICAgLyogaGVhZGVyIOmrmOW6piBzdGFydCAqL1xyXG4gICAgLy8g5bCPXHJcbiAgICAmLm1lcmMtY2FyZC1zbWFsbCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAvLyDkuK1cclxuICAgICYubWVyYy1jYXJkLW5vcm1hbCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICB9XHJcbiAgICAvLyDlpKdcclxuICAgICYubWVyYy1jYXJkLWxhcmdlID4gLm1lcmMtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC8qIGhlYWRlciDpq5jluqYgZW5kICovXHJcbn1cclxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcclxuXHJcbi8qIG92ZXJ3cml0ZSB0YWJsZSBzdHlsZSAqL1xyXG5tZXJjLXRhYmxlIHtcclxuICAgIC5hbnQtdGFibGUtY29udGFpbmVyIHtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnQtdGFibGUtaGVhZGVyLFxyXG4gICAgLmFudC10YWJsZS1ib2R5IHtcclxuICAgICAgICBvdmVyZmxvdy15OiBvdmVybGF5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC10YWJsZS10aGVhZCA+IC5hbnQtdGFibGUtcm93LFxyXG4gICAgdGhlYWQgPiB0ciB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgICAgICAuYW50LXRhYmxlLWNvbHVtbi1oYXMtc29ydGVycyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ZyT6KeSXHJcbiAgICAuYW50LXRhYmxlLWNvbnRhaW5lciB0YWJsZSA+IHRoZWFkIHtcclxuICAgICAgICB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC10YWJsZS10Ym9keSA+IHRyID4gdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHRkLXBhZGRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnQtdGFibGUtcGxhY2Vob2xkZXIgLmFudC10YWJsZS1leHBhbmRlZC1yb3ctZml4ZWQge1xyXG4gICAgICAgIG1hcmdpbjogLTRweCAtOHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDplpPpmpToibJcclxuICAgIC5hbnQtdGFibGUtdGJvZHkge1xyXG4gICAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGV2ZW4tY29sLWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaG92ZXIg57eo6LyvJibliKrpmaRcclxuICAgIC5ob3Zlci10by1lZGl0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICByaWdodDogMjZweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICAgIH1cclxuXHJcbiAgICAuYW50LXRhYmxlLXRib2R5ID4gdHIuYW50LXRhYmxlLXJvdzpob3ZlciA+IHRkLFxyXG4gICAgLmFudC10YWJsZS10Ym9keSA+IHRyOmhvdmVyOm5vdCguYW50LXRhYmxlLWV4cGFuZGVkLXJvdyk6bm90KC5hbnQtdGFibGUtcm93LXNlbGVjdGVkKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWJsZSwgaG92ZXItYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgLmhvdmVyLXRvLWVkaXQge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBoZWFkZXIg6aGP6ImyIHN0YXJ0ICovXHJcbiAgICAvLyDkuLvpoYzoibJcclxuICAgICYubWVyYy10YWJsZS1wcmltYXJ5IHtcclxuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxyXG4gICAgJi5tZXJjLXRhYmxlLXByaW1hcnktdmFyaWFudCB7XHJcbiAgICAgICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOasoeimgeiJslxyXG4gICAgJi5tZXJjLXRhYmxlLXNlY29uZGFyeSB7XHJcbiAgICAgICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOasoeimgeiJsuiuiuW9olxyXG4gICAgJi5tZXJjLXRhYmxlLXNlY29uZGFyeS12YXJpYW50IHtcclxuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDnrKzkuInoibJcclxuICAgICYubWVyYy10YWJsZS10aGlyZCB7XHJcbiAgICAgICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g56ys5LiJ6ImyXHJcbiAgICAmLm1lcmMtdGFibGUtdGhpcmQtdmFyaWFudCB7XHJcbiAgICAgICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBoZWFkZXIg6aGP6ImyIGVuZCAqL1xyXG59XHJcblxyXG4vLyDnt4rphLDlnKhjYXJk5LiL5pa555qE5LiN6KaB5ZyT6KeSXHJcbm1lcmMtY2FyZC1jb250ZW50ID4gbWVyYy10YWJsZSB7XHJcbiAgICAuYW50LXRhYmxlLWNvbnRhaW5lciB0YWJsZSA+IHRoZWFkIHtcclxuICAgICAgICB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyogZW5kIG9mIG92ZXJ3cml0ZSB0YWJsZSBzdHlsZSAqL1xyXG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xyXG5cclxuQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkY29sb3JTZXQge1xyXG4gICAgLm1lcmMtZmxleC10YWJsZS0jeyRuYW1lfSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIC5tZXJjLWZsZXgtdGFibGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkYmFzZS10YWJsZSwgc2hhZG93KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBwYWRkaW5nKTtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0Ym9keSB0ciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgcGFkZGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGV2ZW4tY29sLWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vLWRhdGEge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm8tZGF0YS1oaW50IHtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkNWQ1ZDU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGJyZWFrLXBvaW50KSkge1xyXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlLFxyXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRoZWFkLFxyXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRib2R5LFxyXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRmb290LFxyXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRoLFxyXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRkLFxyXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhlYWQgdHIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC05OTk5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTk5OTlweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0Ym9keSB0ciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHNoYWRvdyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgJGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBtby1wYWRkaW5nKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJGJhc2UtdGFibGUsIG1vLWJvcmRlci1ib3R0b20td2lkdGgpIHNvbGlkICRjb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1kYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBtby1wYWRkaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5uby1kYXRhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBtby1wYWRkaW5nKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcclxuXHJcbi8qIG92ZXJ3cml0ZSB0YWIgc3R5bGUgKi9cclxubWVyYy10YWIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xyXG4gICAgICAgIC5hbnQtdGFicy1uYXYge1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkYmFzZS10YWIsIGZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWIsIHJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWIsIHJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItYm9yZGVyLXdpZHRoKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLyog6Zec6ZaJ55qE5Y+J5Y+JICovXHJcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtY2xvc2UteCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hbnQtdGFicy10YWItYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWJvcmRlci13aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYW50LXRhYnMtdGFicGFuZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiBtYXAtZ2V0KCRiYXNlLXRhYiwgY29udGVudC1ib3JkZXItd2lkdGgpO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWIsIHJhZGl1cyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWIsIHJhZGl1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIOmhj+iJsiBzdGFydCAqL1xyXG4gICAgLy8g5Li76aGM6ImyXHJcbiAgICAmLm1lcmMtdGFiLXByaW1hcnkge1xyXG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xyXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xyXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLmFudC10YWJzLXRhYi1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxyXG4gICAgJi5tZXJjLXRhYi1wcmltYXJ5LXZhcmlhbnQge1xyXG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xyXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xyXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDmrKHopoHoibJcclxuICAgICYubWVyYy10YWItc2Vjb25kYXJ5IHtcclxuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcclxuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcclxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXHJcbiAgICAmLm1lcmMtdGFiLXNlY29uZGFyeS12YXJpYW50IHtcclxuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcclxuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcclxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLmFudC10YWJzLXRhYi1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOesrOS4ieiJslxyXG4gICAgJi5tZXJjLXRhYi10aGlyZCB7XHJcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XHJcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XHJcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoaXJkLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRoaXJkLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDnrKzkuInoibLororlvaJcclxuICAgICYubWVyYy10YWItdGhpcmQtdmFyaWFudCB7XHJcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XHJcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XHJcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyog6aGP6ImyIGVuZCAqL1xyXG5cclxuICAgIC8qIHRhYiDpq5jluqYgc3RhcnQgKi9cclxuICAgIC8vIOWwj1xyXG4gICAgJi5tZXJjLXRhYi1zbWFsbCB7XHJcbiAgICAgICAgPiAuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1uYXYge1xyXG4gICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOS4rVxyXG4gICAgJi5tZXJjLXRhYi1ub3JtYWwge1xyXG4gICAgICAgID4gLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtbmF2IHtcclxuICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDlpKdcclxuICAgICYubWVyYy10YWItbGFyZ2Uge1xyXG4gICAgICAgID4gLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtbmF2IHtcclxuICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiB0YWIg6auY5bqmIGVuZCAqL1xyXG59XHJcbi8qIGVuZCBvZiBvdmVyd3JpdGUgdGFiIHN0eWxlICovXHJcbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XHJcblxyXG4udG9nZ2xlLWZsb2F0LWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAudG9nZ2xlLXdyYXAge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxubWVyYy10YWIge1xyXG4gICAgLyog6aGP6ImyIHN0YXJ0ICovXHJcbiAgICAvLyDkuLvpoYzoibJcclxuICAgICZbbWVyY1R5cGU9XCJwcmltYXJ5XCJdIHtcclxuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDkuLvpoYzoibLororlvaJcclxuICAgICZbbWVyY1R5cGU9XCJwcmltYXJ5VmFyaWFudFwiXSB7XHJcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOasoeimgeiJslxyXG4gICAgJlttZXJjVHlwZT1cInNlY29uZGFyeVwiXSB7XHJcbiAgICAgICAgLy8gPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XHJcbiAgICAgICAgLy8gICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyID4gLmFudC10YWJzLWNvbnRlbnQgPiAuYW50LXRhYnMtdGFicGFuZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBtZXJjLXRvZ2dsZS1jb2xsYXBzZSAudG9nZ2xlLWZsb2F0LWJ0biB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAvLyAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXHJcbiAgICAmW21lcmNUeXBlPVwic2Vjb25kYXJ5VmFyaWFudFwiXSB7XHJcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOesrOS4ieiJslxyXG4gICAgJlttZXJjVHlwZT1cInRoaXJkXCJdIHtcclxuICAgICAgICAvLyA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcclxuICAgICAgICAvLyAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIgPiAuYW50LXRhYnMtY29udGVudCA+IC5hbnQtdGFicy10YWJwYW5lIHtcclxuICAgICAgICAvLyAgICAgICAgIC50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLWNvbG9yO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g56ys5LiJ6Imy6K6K5b2iXHJcbiAgICAmW21lcmNUeXBlPVwidGhpcmRWYXJpYW50XCJdIHtcclxuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIOmhj+iJsiBlbmQgKi9cclxuICAgIC8qIHRhYiDpq5jluqYgc3RhcnQgKi9cclxuICAgIC8vIOWwj1xyXG4gICAgJlttZXJjU2l6ZT1cInNtYWxsXCJdIHtcclxuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOS4rVxyXG4gICAgJlttZXJjU2l6ZT1cIm5vcm1hbFwiXSB7XHJcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDlpKdcclxuICAgICZbbWVyY1NpemU9XCJsYXJnZVwiXSB7XHJcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiB0YWIg6auY5bqmIGVuZCAqL1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XHJcblxyXG4ubWVyYy1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkYnRuLCBzaGFkb3cpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJ0biwgYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIOmhj+iJsiBzdGFydCAqL1xyXG4gICAgLy8g5Li76aGM6ImyXHJcbiAgICAmLm1lcmMtYnRuLXByaW1hcnkge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbiAgICAgICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgOCUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4JSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDE1JSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHByaW1hcnktY29sb3IsIDE1JSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Li76aGM6Imy6K6K5b2iXHJcbiAgICAmLm1lcmMtYnRuLXByaW1hcnktdmFyaWFudCB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDglKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkcHJpbWFyeS12YXJpYW50LWNvbG9yLCA4JSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHByaW1hcnktdmFyaWFudC1jb2xvciwgMTUlKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkcHJpbWFyeS12YXJpYW50LWNvbG9yLCAxNSUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5qyh6KaB6ImyXHJcbiAgICAmLm1lcmMtYnRuLXNlY29uZGFyeSB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktY29sb3IsIDglKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkc2Vjb25kYXJ5LWNvbG9yLCA4JSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgMTUlKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkc2Vjb25kYXJ5LWNvbG9yLCAxNSUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXHJcbiAgICAmLm1lcmMtYnRuLXNlY29uZGFyeS12YXJpYW50IHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktdmFyaWFudC1jb2xvciwgOCUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRzZWNvbmRhcnktdmFyaWFudC1jb2xvciwgOCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3IsIDE1JSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCAxNSUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g56ys5LiJ6ImyXHJcbiAgICAmLm1lcmMtYnRuLXRoaXJkIHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCR0aGlyZC1jb2xvciwgOCUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCR0aGlyZC1jb2xvciwgOCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICR0aGlyZC1jb2xvcjtcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkdGhpcmQtY29sb3IsIDE1JSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHRoaXJkLWNvbG9yLCAxNSUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g56ys5LiJ6Imy6K6K5b2iXHJcbiAgICAmLm1lcmMtYnRuLXRoaXJkLXZhcmlhbnQge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCR0aGlyZC12YXJpYW50LWNvbG9yLCA4JSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDglKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCR0aGlyZC12YXJpYW50LWNvbG9yLCAxNSUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCR0aGlyZC12YXJpYW50LWNvbG9yLCAxNSUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xyXG4gICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICA+ICoge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiDpoY/oibIgZW5kICovXHJcblxyXG4gICAgLyog6auY5bqmIHN0YXJ0ICovXHJcbiAgICAvLyDlsI9cclxuICAgICYubWVyYy1idG4tc21hbGwgYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IG1hcC1nZXQoJGJ0bi1oZWlnaHQsIHNtKTtcclxuICAgIH1cclxuICAgIC8vIOS4rVxyXG4gICAgJi5tZXJjLWJ0bi1ub3JtYWwgYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IG1hcC1nZXQoJGJ0bi1oZWlnaHQsIG1kKTtcclxuICAgIH1cclxuICAgIC8vIOWkp1xyXG4gICAgJi5tZXJjLWJ0bi1sYXJnZSBidXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogbWFwLWdldCgkYnRuLWhlaWdodCwgbGcpO1xyXG4gICAgfVxyXG4gICAgLyog6auY5bqmIGVuZCAqL1xyXG5cclxuICAgIC8qIOWvrOW6piBzdGFydCAqL1xyXG4gICAgLy8geHNcclxuICAgICYubWVyYy1idG4teHMgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogbWFwLWdldCgkYnRuLXdpZHRoLCB4cyk7XHJcbiAgICB9XHJcbiAgICAvLyBzbVxyXG4gICAgJi5tZXJjLWJ0bi1zbSBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHNtKTtcclxuICAgIH1cclxuICAgIC8vIG1kXHJcbiAgICAmLm1lcmMtYnRuLW1kIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IG1hcC1nZXQoJGJ0bi13aWR0aCwgbWQpO1xyXG4gICAgfVxyXG4gICAgLy8gbGdcclxuICAgICYubWVyYy1idG4tbGcgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogbWFwLWdldCgkYnRuLXdpZHRoLCBsZyk7XHJcbiAgICB9XHJcbiAgICAvLyB4bFxyXG4gICAgJi5tZXJjLWJ0bi14bCBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHhsKTtcclxuICAgIH1cclxuICAgIC8qIOWvrOW6piBlbmQgKi9cclxuXHJcbiAgICAvKiBEaXNhYmxlZCAqL1xyXG4gICAgJi5kaXNhYmxlZCBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gZmxleC1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJvYy1kYXRlLXBpY2tlciB7XHJcbiAgLmRhdGUtcGlja2VyIHtcclxuICAgIC8vIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAvLyBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgLy8gaGVpZ2h0OiAyNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIC8vICY6aG92ZXIge1xyXG4gICAgLy8gICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICAgIC8vIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAuY2xlYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGNsZWFyIGljb24gc3RhcnRcclxuICAuY2xlYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA3cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAvLyBjbGVhciBpY29uIGVuZFxyXG5cclxuICAuc2VsZWN0ZWQtZGF0ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC8vIGRpc3BsYXkgZm9ybWF0XHJcblxyXG4gIC8vIHBvcG91dCBtb2RhbCBzdGFydFxyXG4gIC5kYXRlcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAxMTUlO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMnB4IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vaGVhZGVyIHN0YXJ0XHJcbiAgLmhlYWRlci1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHBhZGRpbmc6IDEwcHggMnB4IDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWxhYmVsIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xyXG4gIH1cclxuXHJcbiAgLmFycm93LWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vY2FsZW5kYXIgc3RhcnRcclxuICAud2Vla3MsXHJcbiAgLmRheXMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbiAgfVxyXG5cclxuICAud2Vla3Mge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLndlZWssXHJcbiAgLmRheSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xyXG4gIH1cclxuXHJcbiAgLmRheSxcclxuICAueWVhciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAueWVhcnMsXHJcbiAgLm1vbnRocyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xyXG4gIH1cclxuXHJcbiAgLm5vdC1wcmVzZW50IHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXk7XHJcbiAgfVxyXG5cclxuICAuZGF5LnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5kYXkuc2VsZWN0ZWQubm90LXByZXNlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXk7XHJcbiAgfVxyXG5cclxuICAvLyDlupXpg6jku4rlpKlcclxuICAudG9kYXkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICYubm90LXByZXNlbnQge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXk7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaHIge1xyXG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ncmF5O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgLnN1ZmZpeC1pY29uIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tZXJjLXllYXItc2VsZWN0IHtcclxuICAuYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYW50LXNlbGVjdC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XHJcbi5tZXJjLWNhbGVuZGFye1xyXG4gICAgPi5yb2NZZWFyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3R0b206IDQ1cHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgID4ucm9jWWVhci10aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMzhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmZvci1jYWxlbmRhciA+IC5hbnQtYnRuIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICAgIC8vIGJvcmRlcjogIzJjM2U1MCAxcHggc29saWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBib3JkZXI6ICRzZWNvbmRhcnktY29sb3IgMXB4IHNvbGlkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIH1cclxuICAgIC5mb3ItY2FsZW5kYXIgPiAuYW50LWJ0bltkaXNhYmxlZF0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XHJcbiAgICAgICAgYm9yZGVyOiAjZDlkOWQ5IDFweCBzb2xpZDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG46aG92ZXI6bm90KFtkaXNhYmxlZF0pLFxyXG4gICAgLmZvci1jYWxlbmRhciA+IC5hbnQtYnRuOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSksXHJcbiAgICAuZm9yLWNhbGVuZGFyID4gLmZvY3VzLXRvZGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzZWNvbmRhcnktY29sb3IsIDEwJSk7XHJcbiAgICAgICAgYm9yZGVyOiBsaWdodGVuKCRzZWNvbmRhcnktY29sb3IsIDEwJSkgMXB4IHNvbGlkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "VXQ1":
/*!*********************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/modal/change-place/change-place.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ChangePlaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePlaceComponent", function() { return ChangePlaceComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var _const_icon_path_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../const/icon-path.const */ "T41C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");











class ChangePlaceComponent {
    constructor(modal, fb, modalService, messageService) {
        this.modal = modal;
        this.fb = fb;
        this.modalService = modalService;
        this.messageService = messageService;
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
        // TODO: 假資料
        const originLocate = '台北';
        const locate = '台北';
        for (const i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.valid) {
            const desc = `<div>您已將考區由「<span class="text-secondary">${originLocate}</span>」變更為「<span class="text-secondary">${locate}</span>」</div><div>請確實依考區應試</div>`;
            this.messageService.successModal(desc, { imgPath: './assets/image/icon/icon_success@3x.png', msgTitle: '變更考區成功', isHtmlCode: true });
            this.modal.triggerOk();
        }
    }
}
ChangePlaceComponent.ɵfac = function ChangePlaceComponent_Factory(t) { return new (t || ChangePlaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
ChangePlaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChangePlaceComponent, selectors: [["app-change-place"]], inputs: { quiz: "quiz" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 35, vars: 11, consts: [[1, "modal-margin"], [1, "header", "text-center"], [3, "iconType", "iconSize"], [1, "text-20", "text-fatty"], [1, "content"], ["nz-form", "", "nzNoColon", "true", 3, "formGroup"], [1, "row"], ["nzFor", "name", 1, "col-12", "text-align-left"], [1, "col-12"], ["nzSize", "large", "id", "name", "type", "text", "nz-input", "", "formControlName", "name"], ["nzFor", "name", 1, "col-12", "text-align-left", "label-required"], [3, "nzErrorTip"], ["formControlName", "location"], ["nz-radio", "", "nzValue", "\u53F0\u5317\u5340"], ["nz-radio", "", "nzValue", "\u6843\u7AF9\u5340"], ["nz-radio", "", "nzValue", "\u53F0\u4E2D\u5340"], ["nz-radio", "", "nzValue", "\u5609\u7FA9\u5340"], ["nz-radio", "", "nzValue", "\u53F0\u5357\u5340"], ["nz-radio", "", "nzValue", "\u9AD8\u96C4\u5340"], [1, "footer", "btn-groups"], [3, "mercType", "mercWidth", "outline", "mercSize", "click"], [3, "mercType", "mercWidth", "mercSize", "click"]], template: function ChangePlaceComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChangePlaceComponent_Template_merc_button_click_31_listener() { return ctx.modal.triggerCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u53D6\u6D88 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "merc-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChangePlaceComponent_Template_merc_button_click_33_listener() { return ctx.onSendClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\u78BA\u8A8D\u9001\u51FA ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("outline", true)("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_1__["MercIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__["NzRadioComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]], styles: [".modal-margin[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 24px 10px;\n}\n\n.ant-form-item-label[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.ant-form[_ngcontent-%COMP%]   .ant-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NoYW5nZS1wbGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtBQUlKIiwiZmlsZSI6ImNoYW5nZS1wbGFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1tYXJnaW4ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRlbnQge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IDI0cHggMTBweDtcbn1cbi5hbnQtZm9ybS1pdGVtLWxhYmVse1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYW50LWZvcm0gLmFudC1yYWRpby1ncm91cCBsYWJlbHtcbiAgICB3aWR0aDogNzVweFxufSJdfQ== */"] });


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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_models_pageset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/models/pageset */ "dtlk");
/* harmony import */ var _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../tc-lib/src/lib/const/device.const */ "5V4s");
/* harmony import */ var _const_icon_path_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../const/icon-path.const */ "T41C");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock */ "lCxi");
/* harmony import */ var _modal_reissue_certificate_modal_reissue_certificate_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/reissue-certificate-modal/reissue-certificate-modal.component */ "h5dW");
/* harmony import */ var _modal_recheck_score_modal_recheck_score_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/recheck-score-modal/recheck-score-modal.component */ "SI8K");
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/quiz.enum */ "Yn/n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/shared.service */ "VVBw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _pipe_nature_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pipe/nature.pipe */ "Bydz");






















function CheckScoreComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u7DE8\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CheckScoreComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", table_r5.header, " ");
} }
function CheckScoreComponent_tr_69_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");
} }
function CheckScoreComponent_tr_69_merc_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "merc-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CheckScoreComponent_tr_69_merc_button_18_Template_merc_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r12.onRecheckClick(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u6210\u7E3E\u8907\u67E5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mercType", "secondary")("mercSize", ctx_r9.sharedService.userDevice === ctx_r9.DEVICE.PAD ? "large" : "small");
} }
function CheckScoreComponent_tr_69_merc_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "merc-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CheckScoreComponent_tr_69_merc_button_19_Template_merc_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r15.onReissueClick(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u7533\u8ACB\u8B49\u66F8\u88DC\u767C");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mercType", "secondary")("mercSize", ctx_r10.sharedService.userDevice === ctx_r10.DEVICE.PAD ? "large" : "small")("outline", true);
} }
function CheckScoreComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckScoreComponent_tr_69_td_1_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "naturePipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, CheckScoreComponent_tr_69_merc_button_18_Template, 2, 2, "merc-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, CheckScoreComponent_tr_69_merc_button_19_Template, 2, 3, "merc-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 10, data_r6.nature), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r6.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r6.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r6.class, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r6.score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r6.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r6.quiz_date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r6.status === "\u4E0D\u5408\u683C" && data_r6.nature === ctx_r2.Nature.outside);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r6.status === "\u5408\u683C" && data_r6.nature === ctx_r2.Nature.outside);
} }
function CheckScoreComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "merc-icon", 2);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconType", ctx_r4.ICON_PATH.CALENDAR)("iconSize", 23);
} }
class CheckScoreComponent {
    constructor(sharedService, formBuilder, swiperDatePickerService, taiwanDatePipe, modalService) {
        this.sharedService = sharedService;
        this.formBuilder = formBuilder;
        this.swiperDatePickerService = swiperDatePickerService;
        this.taiwanDatePipe = taiwanDatePipe;
        this.modalService = modalService;
        this.scoreList = _mock__WEBPACK_IMPORTED_MODULE_4__["mockTable"];
        this.pageSet = new _core_models_pageset__WEBPACK_IMPORTED_MODULE_1__["PageSet"]();
        this.DEVICE = _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_2__["DEVICE"];
        this.Nature = _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_7__["Nature"];
        this.tableSetting = [
            { header: '性質', primaryKey: 'nature' },
            { header: '測驗名稱', primaryKey: 'title' },
            { header: '地區', primaryKey: 'location' },
            { header: '期別', primaryKey: 'class' },
            { header: '成績', primaryKey: 'score' },
            { header: '完訓狀態', primaryKey: 'status' },
            { header: '完訓日期', primaryKey: 'quiz_date' },
        ];
    }
    get ICON_PATH() { return _const_icon_path_const__WEBPACK_IMPORTED_MODULE_3__["ICON_PATH"]; }
    ngOnInit() {
        this.handleShowData();
        this.pageSet.initialize(_mock__WEBPACK_IMPORTED_MODULE_4__["mockTable"].length);
        this.initForm();
        console.log(this.scoreList);
    }
    initForm() {
        this.searchForm = this.formBuilder.group({
            nature: [],
            keyword: [''],
            str_date: [moment__WEBPACK_IMPORTED_MODULE_0__().add(-2, 'M').valueOf()],
            end_date: [moment__WEBPACK_IMPORTED_MODULE_0__().add(1, 'M').valueOf()],
            display_str_date: [this.taiwanDatePipe.transform(moment__WEBPACK_IMPORTED_MODULE_0__().add(-2, 'M').valueOf(), true)],
            display_end_date: [this.taiwanDatePipe.transform(moment__WEBPACK_IMPORTED_MODULE_0__().add(1, 'M').valueOf(), true)]
        });
    }
    scrollbarControl() {
        if (this.sharedService.userDevice === _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_2__["DEVICE"].MOBILE) {
            return { x: '960px' };
        }
        else {
            return {};
        }
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
        this.scoreList = _mock__WEBPACK_IMPORTED_MODULE_4__["mockTable"].slice((this.pageSet.currentPage - 1) * this.pageSet.currentPageSize, (this.pageSet.currentPage) * this.pageSet.currentPageSize);
    }
    onReissueClick(data) {
        this.modalService.create({
            nzContent: _modal_reissue_certificate_modal_reissue_certificate_modal_component__WEBPACK_IMPORTED_MODULE_5__["ReissueCertificateModalComponent"],
            nzWidth: 600,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
            nzComponentParams: {
                outsideExam: data.outside_exam_type
            }
        });
    }
    onRecheckClick(data) {
        this.modalService.create({
            nzContent: _modal_recheck_score_modal_recheck_score_modal_component__WEBPACK_IMPORTED_MODULE_6__["RecheckScoreModalComponent"],
            nzWidth: 600,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
            nzComponentParams: {
                outsideExam: data.outside_exam_type
            }
        });
    }
}
CheckScoreComponent.ɵfac = function CheckScoreComponent_Factory(t) { return new (t || CheckScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_11__["SwiperDatePickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_11__["TaiwanDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__["NzModalService"])); };
CheckScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CheckScoreComponent, selectors: [["app-check-score"]], decls: 72, vars: 34, consts: [[1, "tab-box"], [1, "search-header", "text-20", "text-fatty", "pb-3"], [3, "iconType", "iconSize"], [1, "search-zone"], ["nz-form", "", 3, "formGroup", "nzLayout"], [1, "row"], [1, "col-12", "col-md-6", "col-lg-2"], [1, "font-weight-bold"], ["formControlName", "nature", 3, "nzSize"], ["nzValue", "inside", "nzLabel", "\u5167\u90E8\u6E2C\u9A57"], ["nzValue", "outside", "nzLabel", "\u5916\u90E8\u6E2C\u9A57"], [3, "nzErrorTip"], ["formControlName", "keyword", "type", "text", "nz-input", "", "placeholder", "\u8ACB\u8F38\u5165\u95DC\u9375\u5B57", 3, "nzSize"], [1, "col-12", "col-lg-5"], [1, "col-6"], [1, "date-picker-wave", 3, "nzErrorTip"], ["formControlName", "str_date", 3, "mercSize"], [2, "opacity", "0"], ["formControlName", "end_date", 3, "mercSize"], [1, "col-12", "col-lg-3", "search-btns"], [3, "mercType", "outline", "mercSize", "mercWidth", "click"], [1, "ms-3", 3, "mercType", "mercSize", "mercWidth", "click"], [1, "mb-4"], [1, "table-header"], [1, "d-flex", "flex-wrap", "ms-3"], ["nz-checkbox", "", "nzValue", "A", 3, "ngModel"], [1, "pagination"], [1, "pagesize", "py-2", "py-md-0"], [3, "ngModel", "ngModelChange"], ["nzLabel", "10", 3, "nzValue"], ["nzLabel", "25", 3, "nzValue"], ["nzLabel", "50", 3, "nzValue"], [1, "pagechange"], [3, "iconType", "iconSize", "click"], [1, "table-content"], [3, "mercType", "headTextColor"], ["class", "text-center", 4, "ngIf"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["calendar_icon", ""], ["data-title", "\u6027\u8CEA", 1, "text-center"], ["data-title", "\u6E2C\u9A57\u540D\u7A31", 1, "text-center"], ["data-title", "\u5730\u5340", 1, "text-center"], ["data-title", "\u671F\u5225", 1, "text-center"], ["data-title", "\u6210\u7E3E", 1, "text-center"], ["data-title", "\u5B8C\u8A13\u72C0\u614B", 1, "text-center"], ["data-title", "\u5B8C\u8A13\u65E5\u671F", 1, "text-center"], ["data-title", "\u52D5\u4F5C", 1, "text-center"], ["nz-button", "", 3, "mercType", "mercSize", "click", 4, "ngIf"], ["class", "text-md mx-3", 3, "mercType", "mercSize", "outline", "click", 4, "ngIf"], ["nz-button", "", 3, "mercType", "mercSize", "click"], [1, "text-md", "mx-3", 3, "mercType", "mercSize", "outline", "click"]], template: function CheckScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "merc-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " \u67E5\u8A62\u689D\u4EF6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\u6027\u8CEA");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "nz-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "nz-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "\u95DC\u9375\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "nz-form-control", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "\u4E0A\u8AB2\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "nz-form-control", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "merc-roc-date-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "nz-form-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "\u8FC4\u65E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "nz-form-control", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "merc-roc-date-picker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "merc-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CheckScoreComponent_Template_merc_button_click_36_listener() { return ctx.onClearClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "\u6E05\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "merc-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CheckScoreComponent_Template_merc_button_click_38_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "\u67E5\u8A62");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, " \u6210\u7E3E\u5217\u8868 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "nz-checkbox-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "\u50C5\u986F\u793A\u5408\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, " \u6BCF\u9801\u986F\u793A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "nz-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CheckScoreComponent_Template_nz_select_ngModelChange_51_listener($event) { return ctx.pageSet.currentPageSize = $event; })("ngModelChange", function CheckScoreComponent_Template_nz_select_ngModelChange_51_listener() { return ctx.handleShowData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "nz-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "nz-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "nz-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, " \u7B46 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "merc-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CheckScoreComponent_Template_merc_icon_click_57_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "merc-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CheckScoreComponent_Template_merc_icon_click_59_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "merc-flex-table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, CheckScoreComponent_th_64_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, CheckScoreComponent_th_65_Template, 2, 1, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "\u52D5\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, CheckScoreComponent_tr_69_Template, 20, 12, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](70, CheckScoreComponent_ng_template_70_Template, 1, 2, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconType", ctx.ICON_PATH.BTN_SEARCH)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.searchForm)("nzLayout", "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mercType", "third")("outline", true)("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mercType", "third")("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.pageSet.currentPageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconType", ctx.ICON_PATH.PREV_STEP)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" \u7B2C", ctx.pageSet.currentPage, "\u9801, \u5171", ctx.pageSet.totalPages, "\u9801 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconType", ctx.ICON_PATH.NEXT_STEP)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mercType", "primary")("headTextColor", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sharedService.userDevice === ctx.DEVICE.PAD);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.tableSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.scoreList);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_11__["MercIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormControlComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__["NzOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputDirective"], merc_lib__WEBPACK_IMPORTED_MODULE_11__["RocDatePickerComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__["NzCheckboxWrapperComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], merc_lib__WEBPACK_IMPORTED_MODULE_11__["FlexTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTrDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTbodyComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"]], pipes: [_pipe_nature_pipe__WEBPACK_IMPORTED_MODULE_21__["NaturePipe"]], styles: ["td[_ngcontent-%COMP%]:last-child {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NoZWNrLXNjb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImNoZWNrLXNjb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQ6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "X4MI":
/*!*************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/pipe/notice-type.pipe.ts ***!
  \*************************************************************************/
/*! exports provided: NoticeTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeTypePipe", function() { return NoticeTypePipe; });
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/quiz.enum */ "Yn/n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NoticeTypePipe {
    transform(type) {
        switch (type) {
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency:
                return '銷售外幣收付非投資型保險商品資格測驗';
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest:
                return '投資型考試';
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional:
                return '資格測驗-專業科目';
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].common:
                return '資格測驗-共同科目';
            default:
                return '-';
        }
    }
}
NoticeTypePipe.ɵfac = function NoticeTypePipe_Factory(t) { return new (t || NoticeTypePipe)(); };
NoticeTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "noticeType", type: NoticeTypePipe, pure: true });


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
/* harmony import */ var _const_tab_param_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/tab-param.const */ "hyQT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var _inside_quiz_inside_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inside-quiz/inside-quiz.component */ "oXAn");
/* harmony import */ var _outside_quiz_outside_quiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outside-quiz/outside-quiz.component */ "JJtz");
/* harmony import */ var _check_score_check_score_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./check-score/check-score.component */ "Vt8v");








const _c0 = function () { return ["."]; };
const _c1 = function (a0) { return { tab: a0 }; };
function QuizComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u5167\u90E8\u6E2C\u9A57 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r0.TAB_PARAM.INSIDE_QUIZ_LIST));
} }
function QuizComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u5916\u90E8\u6E2C\u9A57 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r1.TAB_PARAM.OUTSIDE_QUIZ_LIST));
} }
function QuizComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u6210\u7E3E\u67E5\u8A62");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r2.TAB_PARAM.CHECK_SCORE));
} }
class QuizComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.selectedIndex = 0;
    }
    get TAB_PARAM() { return _const_tab_param_const__WEBPACK_IMPORTED_MODULE_0__["QUIZ_TAB_PARAM"]; }
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
QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], decls: 11, vars: 4, consts: [[3, "mercType", "mercSize"], ["nzLinkRouter", "", 3, "nzType", "nzTabBarGutter", "nzSelectedIndexChange"], [1, "normal-padding"], ["nz-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "queryParams", 4, "nzTabLink"], ["nz-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "queryParams"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "merc-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-tabset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzSelectedIndexChange", function QuizComponent_Template_nz_tabset_nzSelectedIndexChange_1_listener($event) { return ctx.selectTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QuizComponent_a_3_Template, 2, 5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-inside-quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, QuizComponent_a_6_Template, 2, 5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-outside-quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, QuizComponent_a_9_Template, 2, 5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-check-score");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mercType", "secondary")("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "card")("nzTabBarGutter", 10);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_3__["MercTabComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabLinkTemplateDirective"], _inside_quiz_inside_quiz_component__WEBPACK_IMPORTED_MODULE_5__["InsideQuizComponent"], _outside_quiz_outside_quiz_component__WEBPACK_IMPORTED_MODULE_6__["OutsideQuizComponent"], _check_score_check_score_component__WEBPACK_IMPORTED_MODULE_7__["CheckScoreComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-card[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0;\n  border: rgba(153, 153, 153, 0.2) 1px solid;\n  box-shadow: none;\n  background-color: #fff;\n  border-radius: 6px;\n  \n  \n  \n  \n  \n  \n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-self: center;\n  font-size: 25px;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 6px 6px 0 0;\n  color: #fff;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-content[_ngcontent-%COMP%] {\n  display: block;\n  padding: 35px 15px;\n}\n.merc-card.merc-card-primary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\n.merc-card.merc-card-primary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\n.merc-card.merc-card-secondary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\n.merc-card.merc-card-secondary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\n.merc-card.merc-card-third[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\n.merc-card.merc-card-third-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary-variant[_ngcontent-%COMP%] {\n  color: #ec6122;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary[_ngcontent-%COMP%] {\n  color: #ff6621;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary-variant[_ngcontent-%COMP%] {\n  color: #f8c73f;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third[_ngcontent-%COMP%] {\n  color: #58a8dd;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third-variant[_ngcontent-%COMP%] {\n  color: #fffaf1;\n}\n.merc-card.merc-card-small[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-card.merc-card-normal[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.merc-card.merc-card-large[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-table[_ngcontent-%COMP%] {\n  \n  \n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-header[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%] {\n  overflow-y: overlay !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > .ant-table-row[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]   .ant-table-column-has-sorters[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-placeholder[_ngcontent-%COMP%]   .ant-table-expanded-row-fixed[_ngcontent-%COMP%] {\n  margin: -4px -8px;\n  min-width: 100%;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\nmerc-table[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 0;\n  background-color: transparent;\n  position: absolute;\n  top: 50%;\n  right: 26px;\n  transform: translateY(-50%);\n  display: flex;\n  flex-wrap: nowrap;\n  transition: opacity 0.3s, background-color 0.3s;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) {\n  background-color: #c9c9c9;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)   .hover-to-edit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nmerc-table.merc-table-primary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\nmerc-table.merc-table-primary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\nmerc-table.merc-table-secondary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\nmerc-table.merc-table-secondary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\nmerc-table.merc-table-third[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\nmerc-table.merc-table-third-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-flex-table-primary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #e6002d;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #e6002d;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #e6002d;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ec6122;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ec6122;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ec6122;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ff6621;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ff6621;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ff6621;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #f8c73f;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #f8c73f;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #f8c73f;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #58a8dd;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #58a8dd;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #58a8dd;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #fffaf1;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #fffaf1;\n    border-radius: 7px;\n    box-shadow: 1px 2px 4px #d5d5d5;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #fffaf1;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-tab[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  \n  \n  \n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%] {\n  border: 0;\n  margin-bottom: 0px;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]::before {\n  border-bottom: hidden;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  border: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6002d;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6002d;\n  border-bottom-width: 0px !important;\n  padding: 0 15px;\n  height: 35px;\n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%]   .ant-tabs-close-x[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 16px;\n  height: 18px;\n  margin-right: 0 !important;\n  vertical-align: middle;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%]   .ant-tabs-tab-btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #fff;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-small[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 25px;\n}\nmerc-tab.merc-tab-normal[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 35px;\n}\nmerc-tab.merc-tab-large[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.toggle-float-btn[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #e6002d;\n  color: white;\n  border: 1px solid #e6002d;\n  border-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  height: 40px;\n  padding: 0 16px;\n  line-height: 38px;\n  cursor: pointer;\n}\n.toggle-float-btn[_ngcontent-%COMP%]   .toggle-wrap[_ngcontent-%COMP%] {\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n}\nmerc-tab[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\nmerc-tab[mercType=primary][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\nmerc-tab[mercType=primaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\nmerc-tab[mercType=secondary][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\nmerc-tab[mercType=secondaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\nmerc-tab[mercType=third][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\nmerc-tab[mercType=thirdVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\nmerc-tab[mercSize=small][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 30px;\n}\nmerc-tab[mercSize=normal][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 42px;\n}\nmerc-tab[mercSize=large][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  \n  \n  \n  \n  \n  \n  \n}\n.merc-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 2px 0 rgba(21, 28, 42, 0.17);\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #bd0025;\n  border: 1px solid #bd0025;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #e6002d;\n  background-color: #fff;\n  color: #e6002d;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #9a001e;\n  border: 1px solid #9a001e;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d34e12;\n  border: 1px solid #d34e12;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ec6122;\n  background-color: #fff;\n  color: #ec6122;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b2420f;\n  border: 1px solid #b2420f;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f74d00;\n  border: 1px solid #f74d00;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ff6621;\n  background-color: #fff;\n  color: #ff6621;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #d44200;\n  border: 1px solid #d44200;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f7bc18;\n  border: 1px solid #f7bc18;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #f8c73f;\n  background-color: #fff;\n  color: #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #e2a908;\n  border: 1px solid #e2a908;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #3696d6;\n  border: 1px solid #3696d6;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #58a8dd;\n  background-color: #fff;\n  color: #58a8dd;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #2784c1;\n  border: 1px solid #2784c1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ffebc8;\n  border: 1px solid #ffebc8;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #fffaf1;\n  background-color: #fff;\n  color: #fffaf1;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #ffdfa5;\n  border: 1px solid #ffdfa5;\n}\n.merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active    > *[_ngcontent-%COMP%], .merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover    > *[_ngcontent-%COMP%] {\n  transition: filter 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  filter: brightness(0.6);\n}\n.merc-btn.merc-btn-small[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-btn.merc-btn-normal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.merc-btn.merc-btn-large[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.merc-btn.merc-btn-xs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.merc-btn.merc-btn-sm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.merc-btn.merc-btn-md[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.merc-btn.merc-btn-lg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.merc-btn.merc-btn-xl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.merc-btn.disabled[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.25);\n  background: #f5f5f5;\n  border-color: #d9d9d9;\n  text-shadow: none;\n  box-shadow: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  width: 200px;\n  position: relative;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%]:hover   .clear[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 7px;\n  padding: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: white;\n  z-index: 999;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .selected-date[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 115%;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  max-width: 200px;\n  background-color: #fff;\n  z-index: 999;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 2px 0;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 16px;\n  text-align: center;\n  color: #e6002d;\n  display: inline-block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .week[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .months[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .not-present[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected.not-present[_ngcontent-%COMP%] {\n  background-color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #e6002d;\n  color: #e6002d;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today.not-present[_ngcontent-%COMP%] {\n  color: #efefef;\n  cursor: not-allowed;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%] {\n  color: #efefef;\n  margin: 10px;\n  opacity: 0.8;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .suffix-icon[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n .merc-year-select .ant-select-selection-item {\n  padding-right: 15px !important;\n}\n .merc-year-select .ant-select-item {\n  padding: 5px 8px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-calendar[_ngcontent-%COMP%]    > .rocYear[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n@media screen and (max-width: 750px) {\n  .merc-calendar[_ngcontent-%COMP%]    > .rocYear[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 45px;\n    justify-content: center;\n  }\n}\n.merc-calendar[_ngcontent-%COMP%]    > .rocYear-title[_ngcontent-%COMP%] {\n  position: relative;\n  top: 38px;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: #ff6621 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[disabled][_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n  border: #d9d9d9 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:hover:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:active:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .focus-today[_ngcontent-%COMP%] {\n  background-color: #ff8954;\n  border: #ff8954 1px solid;\n}\na[_ngcontent-%COMP%] {\n  color: unset;\n  transition: color 0.1s;\n}\na[_ngcontent-%COMP%]:active {\n  color: unset;\n}\na[_ngcontent-%COMP%]:hover {\n  color: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3F1aXouY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jdXN0b20tc2V0dGluZy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9zdHlsZXMvY3VzdG9tLXNldHRpbmcuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvc3R5bGVzL19jb21wb25lbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lcmMtY2FyZC9tZXJjLWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lcmMtdGFibGUvbWVyYy10YWJsZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZmxleC10YWJsZS9mbGV4LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9tZXJjLXRhYi9tZXJjLXRhYi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWVyYy10YWIvdG9nZ2xlLWNvbGxhcHNlL3RvZ2dsZS1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvZGF0ZS9jb21wb25lbnRzL3JvYy1kYXRlLXBpY2tlci9yb2MtZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2RhdGUvY29tcG9uZW50cy9tZXJjLWNhbGVuZGFyL21lcmMtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGFBQUE7QUEwQkEsWUFBQTtBQWNBLFlBQUE7QUFDQSxtQkFBQTtBQWlCQSxpQkFBQTtBQUVBLG9CQUFBO0FBbUJBLGtCQUFBO0FBRUEscUJBQUE7QUFvQkEsbUJBQUE7QUFhQSxpQkFBQTtBQ2xIQSx3REFBQTtBQUNBLGFBQUE7QUF1QkEsWUFBQTtBQWNBLFlBQUE7QUFDQSxtQkFBQTtBQWlCQSxpQkFBQTtBQUVBLG9CQUFBO0FBbUJBLGtCQUFBO0FBRUEscUJBQUE7QUFvQkEsbUJBQUE7QUFhQSxpQkFBQTtBQ2hIQSxhQUFBO0FEQUEsd0RBQUE7QUFDQSxhQUFBO0FBdUJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QUU5R0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBa0JBLHNCQUFBO0VBeUJBLG9CQUFBO0VBRUEsc0JBQUE7RUFPQSxrQkFBQTtFQUVBLG9CQUFBO0VBYUEsa0JBQUE7QUo1Qko7QUlyQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtF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LHlCQUFBO0VBQ0Esc0JSakNFO0VRa0NGLGNSakRZO0FEZ2tDeEI7QVM5Z0NZO0VBRUksY0FBQTtFQUNBLHlCQUFBO0FUK2dDaEI7QVN6Z0NRO0VBQ0ksV1I3Q0U7RVE4Q0YseUJSM0RNO0VRNEROLHlCQUFBO0FUMmdDWjtBUzFnQ1k7RUFFSSx5QkFBQTtFQUNBLHlCQUFBO0FUMmdDaEI7QVN4Z0NRO0VBQ0kseUJBQUE7RUFDQSxzQlJ4REU7RVF5REYsY1J0RU07QURnbENsQjtBU3pnQ1k7RUFFSSxjQUFBO0VBQ0EseUJBQUE7QVQwZ0NoQjtBU3BnQ1E7RUFDSSxXUnBFRTtFUXFFRix5QlJoRmM7RVFpRmQseUJBQUE7QVRzZ0NaO0FTcmdDWTtFQUVJLHlCQUFBO0VBQ0EseUJBQUE7QVRzZ0NoQjtBU25nQ1E7RUFDSSx5QkFBQTtFQUNBLHNCUi9FRTtFUWdGRixjUjNGYztBRGdtQzFCO0FTcGdDWTtFQUVJLGNBQUE7RUFDQSx5QkFBQTtBVHFnQ2hCO0FTLy9CUTtFQUNJLFdSM0ZFO0VRNEZGLHlCUnJHRTtFUXNHRix5QkFBQTtBVGlnQ1o7QVNoZ0NZO0VBRUkseUJBQUE7RUFDQSx5QkFBQTtBVGlnQ2hCO0FTOS9CUTtFQUNJLHlCQUFBO0VBQ0Esc0JSdEdFO0VRdUdGLGNSaEhFO0FEZ25DZDtBUy8vQlk7RUFFSSxjQUFBO0VBQ0EseUJBQUE7QVRnZ0NoQjtBUzEvQlE7RUFDSSxXUmxIRTtFUW1IRix5QlIxSFU7RVEySFYseUJBQUE7QVQ0L0JaO0FTMy9CWTtFQUVJLHlCQUFBO0VBQ0EseUJBQUE7QVQ0L0JoQjtBU3ovQlE7RUFDSSx5QkFBQTtFQUNBLHNCUjdIRTtFUThIRixjUnJJVTtBRGdvQ3RCO0FTMS9CWTtFQUVJLGNBQUE7RUFDQSx5QkFBQTtBVDIvQmhCO0FTbi9CWTtFQUNJLDREQUFBO0VBQ0EsdUJBQUE7QVRxL0JoQjtBUzcrQkk7RUFDSSxZQUFBO0FUKytCUjtBUzUrQkk7RUFDSSxZQUFBO0FUOCtCUjtBUzMrQkk7RUFDSSxZQUFBO0FUNitCUjtBU3YrQkk7RUFDSSxXQUFBO0FUeStCUjtB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QkFBQTtFQUNBLHlCQUFBO0FYdzBDUjtBQTUyQ0E7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUErMkNKO0FBNzJDQTtFQUNJLFlBQUE7QUFnM0NKO0FBNzJDQTtFQUNJLFlBQUE7QUFnM0NKIiwiZmlsZSI6InF1aXouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jdXN0b20tc2V0dGluZy5zY3NzJztcbmF7XG4gICAgY29sb3I6IHVuc2V0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XG59XG5hOmFjdGl2ZSB7XG4gICAgY29sb3I6IHVuc2V0O1xufVxuXG5hOmhvdmVyIHtcbiAgICBjb2xvcjogdW5zZXQ7XG59XG4iLCIvKiog5Z+656SO5Yqf6IO96Imy6Kit5a6aICovXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItZGFyazogcmdiYSgwLCAwLCAwLCAwLjgpO1xuLy8g5Li76KaB6ImyXG4kcHJpbWFyeS1jb2xvcjogI2U2MDAyZDtcbi8vIOS4u+imgeiJsuiuiuW9olxuJHByaW1hcnktdmFyaWFudC1jb2xvcjogI2VjNjEyMjtcbi8vIOasoeimgeiJslxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjYyMTtcbi8vIOasoeimgeiJsuiuiuW9olxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjZjhjNzNmO1xuLy8g56ys5LiJ6ImyXG4kdGhpcmQtY29sb3I6ICM1OGE4ZGQ7XG4vLyDnrKzkuInoibLororlvaJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZmZmYWYxO1xuXG4vLyDmt7rngbBcbiRjb2xvci1saWdodC1ncmF5OiAjZWZlZmVmO1xuLy8g5rex54GwXG4kY29sb3ItZGFyay1ncmF5OiAjMzMzMzMzO1xuLy8g55m9XG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3Itc2lsdmVyOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMik7XG4kY29sb3ItbGlnaHRlci1ncmF5OiAjZjlmOWY5O1xuJGNvbG9yLWdyZWVuOiAjODdiODQ4O1xuXG4vKiog5Z+656SO5YWD5Lu26Kit5a6aICovXG4kZm9udC1zejogKFxuICB4bDogMjVweCxcbiAgbGc6IDE4cHgsXG4gIG1kOiAxNnB4LFxuICBzbTogMTRweCxcbiAgeHM6IDEycHgsXG4pO1xuXG4kZm9udC13ZWlnaHQ6IChcbiAgZmF0dHk6IDYwMCxcbiAgbm9ybWFsOiBub3JtYWwsXG4pO1xuXG4vKiog5bi455So5YWD5Lu26Kit5a6aICovXG4vKiBiYXNlIGJ0biBzdGFydCAqL1xuJGJ0bjogKFxuICBib3JkZXItcmFkaXVzOiAzcHgsXG4gIHNoYWRvdzogMXB4IDFweCAycHggMCByZ2JhKDIxLCAyOCwgNDIsIDAuMTcpLFxuKTtcbiRidG4taGVpZ2h0OiAoXG4gIGxnOiA0MHB4LFxuICBtZDogMzVweCxcbiAgc206IDMwcHgsXG4pO1xuJGJ0bi13aWR0aDogKFxuICB4bDogMjAwcHgsXG4gIGxnOiAxNjBweCxcbiAgbWQ6IDEyMHB4LFxuICBzbTogOTBweCxcbiAgeHM6IDcwcHgsXG4pO1xuLyogYmFzZSBidG4gZW5kICovXG5cbi8qKiBiYXNlIGNhcmQgc3RhcnQqL1xuJGJhc2UtY2FyZDogKFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUsXG4gIGJveC1zaGFkb3c6IG5vbmUsXG4gIHBhZGRpbmc6IDAsXG4gIGJvcmRlcjogJGNvbG9yLXNpbHZlciAxcHggc29saWQsXG4gIGJvcmRlci1yYWRpdXM6IDZweCxcbik7XG5cbiRiYXNlLWNhcmQtaGVhZGVyOiAoXG4gIGFsaWduLXNlbGY6IGNlbnRlcixcbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCB4bCksXG4gIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRmb250LXdlaWdodCwgZmF0dHkpLFxuICBwYWRkaW5nOiAxMHB4IDIwcHgsXG4pO1xuXG4kYmFzZS1jYXJkLWNvbnRlbnQ6IChcbiAgcGFkZGluZzogMzVweCAxNXB4LFxuKTtcbi8qKiBiYXNlIGNhcmQgZW5kKi9cblxuLyogYmFzZSB0YWJsZSBzdGFydCAqL1xuJGJhc2UtdGFibGU6IChcbiAgLy8gaG92ZXIg6aGP6ImyXG4gIGhvdmVyLWJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3ItbGlnaHQtZ3JheSwgMTUlKSxcbiAgLy8g6ZaT6ZqU6ImyXG4gIGV2ZW4tY29sLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcixcbiAgLy8g5ZyT6KeSXG4gIHJhZGl1czogN3B4LFxuICAvLyDpmbDlvbFcbiAgc2hhZG93OiAxcHggMnB4IDRweCAjZDVkNWQ1LFxuICAvLyDooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malFxuICBwYWRkaW5nOiA4cHggOHB4LFxuICAvLyDmiYvmqZ/niYjooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLXBhZGRpbmc6IDNweCA4cHgsXG4gIC8vIOW5vnB45Lul5LiL5L2/55So5omL5qmf54mI77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcbiAgYnJlYWstcG9pbnQ6IDc2N3B4LFxuICAvLyDmrITkvY3kuIvmlrnnmoRib3JkZXItYm90dG9t77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcbiAgbW8tYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4XG4pO1xuXG4vKiBiYXNlIHRhYiBzdGFydCAqL1xuJGJhc2UtdGFiOiAoXG4gIC8vIOmhj+iJsihtZXJjLXRhYiDmnKrlgrPlhaUgbWVyY1R5cGUg5pmC5pyJ5pWIKVxuICB0YWItY29sb3I6ICRwcmltYXJ5LWNvbG9yLFxuICAvLyB0YWIg6YKK5qGGXG4gIHRhYi1ib3JkZXItd2lkdGg6IDFweCxcbiAgLy8gY29udGVudCDpgormoYZcbiAgY29udGVudC1ib3JkZXItd2lkdGg6IDFweCxcbiAgLy8g5ZyT6KeSXG4gIHJhZGl1czogN3B4LFxuICAvLyDlrZfpq5TlpKflsI9cbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZylcbik7XG4vKiBiYXNlIHRhYiBlbmQgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL3N0eWxlcy9tZXJjLWxpYi5zY3NzXCI7XG4iLCIvKiDmraRzY3Nz54K65YWD5Lu25YWn55qEIGN1c3RvbS1zZXR0aW5n77yM6IiH5ZyW5pu46aSo5YWo5Z+f55qEIGN1c3RvbS1zZXR0aW5nIOS4jeWQjCAqL1xyXG4vKiog5Z+656SO5Yqf6IO96Imy6Kit5a6aICovXHJcbiRjb2xvci13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcclxuJGNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCwgMC44KSAhZGVmYXVsdDtcclxuLy8g5Li76KaB6ImyXHJcbiRwcmltYXJ5LWNvbG9yOiAjYjllMWU0ICFkZWZhdWx0O1xyXG4vLyDkuLvopoHoibLororlvaJcclxuJHByaW1hcnktdmFyaWFudC1jb2xvcjogIzU0YmU5ZiAhZGVmYXVsdDtcclxuLy8g5qyh6KaB6ImyXHJcbiRzZWNvbmRhcnktY29sb3I6ICM0YjhhYzUgIWRlZmF1bHQ7XHJcbi8vIOasoeimgeiJsuiuiuW9olxyXG4kc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I6ICNlNmYzZjcgIWRlZmF1bHQ7XHJcbi8vIOesrOS4ieiJslxyXG4kdGhpcmQtY29sb3I6ICM4MDAwODAgIWRlZmF1bHQ7XHJcbi8vIOesrOS4ieiJsuiuiuW9olxyXG4kdGhpcmQtdmFyaWFudC1jb2xvcjogI2VlZDdlZCAhZGVmYXVsdDtcclxuXHJcbi8vIOa3uueBsFxyXG4kY29sb3ItbGlnaHQtZ3JheTogI2U1ZTVlNSAhZGVmYXVsdDtcclxuXHJcbi8vIOmhj+iJsuWumue+qeWMhVxyXG4kY29sb3JTZXQ6IFwicHJpbWFyeVwiICRwcmltYXJ5LWNvbG9yLCBcInByaW1hcnktdmFyaWFudFwiICRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIFwic2Vjb25kYXJ5XCIgJHNlY29uZGFyeS1jb2xvcixcclxuICBcInNlY29uZGFyeS12YXJpYW50XCIgJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCBcInRoaXJkXCIgJHRoaXJkLWNvbG9yLCBcInRoaXJkLXZhcmlhbnRcIiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcclxuXHJcbi8qKiDln7rnpI7lhYPku7boqK3lrpogKi9cclxuJGZvbnQtc3o6IChcclxuICB4bDogMzBweCxcclxuICBsZzogMThweCxcclxuICBtZDogMTZweCxcclxuICBzbTogMTRweCxcclxuICB4czogMTJweCxcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRmb250LXdlaWdodDogKFxyXG4gIGZhdHR5OiA2MDAsXHJcbiAgbm9ybWFsOiBub3JtYWwsXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vKiog5bi455So5YWD5Lu26Kit5a6aICovXHJcbi8qIGJhc2UgYnRuIHN0YXJ0ICovXHJcbiRidG46IChcclxuICBib3JkZXItcmFkaXVzOiA3cHgsXHJcbiAgc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYmEoMjEsIDI4LCA0MiwgMC4xNyksXHJcbikgIWRlZmF1bHQ7XHJcbiRidG4taGVpZ2h0OiAoXHJcbiAgbGc6IDQwcHgsXHJcbiAgbWQ6IDM1cHgsXHJcbiAgc206IDMwcHgsXHJcbikgIWRlZmF1bHQ7XHJcbiRidG4td2lkdGg6IChcclxuICB4bDogMjAwcHgsXHJcbiAgbGc6IDE1MHB4LFxyXG4gIG1kOiAxMjBweCxcclxuICBzbTogOTBweCxcclxuICB4czogNjBweCxcclxuKSAhZGVmYXVsdDtcclxuLyogYmFzZSBidG4gZW5kICovXHJcblxyXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cclxuJGJhc2UtY2FyZDogKFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSxcclxuICBib3gtc2hhZG93OiBub25lLFxyXG4gIHBhZGRpbmc6IDAsXHJcbiAgYm9yZGVyOiAwLFxyXG4gIGJvcmRlci1yYWRpdXM6IDZweCxcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRiYXNlLWNhcmQtaGVhZGVyOiAoXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyLFxyXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbGcpLFxyXG4gIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRmb250LXdlaWdodCwgZmF0dHkpLFxyXG4gIHBhZGRpbmc6IDAgMTVweCxcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRiYXNlLWNhcmQtY29udGVudDogKFxyXG4gIHBhZGRpbmc6IDEwcHggMTVweCxcclxuKSAhZGVmYXVsdDtcclxuLyoqIGJhc2UgY2FyZCBlbmQqL1xyXG5cclxuLyogYmFzZSB0YWJsZSBzdGFydCAqL1xyXG4kYmFzZS10YWJsZTogKFxyXG4gIC8vIGhvdmVyIOmhj+iJslxyXG4gIGhvdmVyLWJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3ItbGlnaHQtZ3JheSwgMTUlKSxcclxuICAvLyDplpPpmpToibJcclxuICBldmVuLWNvbC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXksXHJcbiAgLy8g5ZyT6KeSXHJcbiAgcmFkaXVzOiA3cHgsXHJcbiAgLy8g6Zmw5b2xXHJcbiAgc2hhZG93OiAxcHggMnB4IDRweCAjZDVkNWQ1LFxyXG4gIC8vIOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqUXHJcbiAgcGFkZGluZzogNHB4IDhweCxcclxuICAvLyDmiYvmqZ/niYjooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malO+8iGZsZXggdGFibGUg5bCI55So77yJXHJcbiAgbW8tcGFkZGluZzogMTBweCA4cHgsXHJcbiAgLy8g5bm+cHjku6XkuIvkvb/nlKjmiYvmqZ/niYjvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxyXG4gIGJyZWFrLXBvaW50OiA5OTFweCxcclxuICAvLyDmrITkvY3kuIvmlrnnmoRib3JkZXItYm90dG9t77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcclxuICBtby1ib3JkZXItYm90dG9tLXdpZHRoOiAxcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8qIGJhc2UgdGFiIHN0YXJ0ICovXHJcbiRiYXNlLXRhYjogKFxyXG4gIC8vIOmhj+iJsihtZXJjLXRhYiDmnKrlgrPlhaUgbWVyY1R5cGUg5pmC5pyJ5pWIKVxyXG4gIHRhYi1jb2xvcjogJHByaW1hcnktY29sb3IsXHJcbiAgLy8gdGFiIOe3qOahhlxyXG4gIHRhYi1ib3JkZXItd2lkdGg6IDFweCxcclxuICAvLyBjb250ZW50IOe3qOahhlxyXG4gIGNvbnRlbnQtYm9yZGVyLXdpZHRoOiAxMHB4LFxyXG4gIC8vIOWck+inklxyXG4gIHJhZGl1czogN3B4LFxyXG4gIC8vIOWtl+mrlOWkp+Wwj1xyXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbGcpXHJcbikgIWRlZmF1bHQ7XHJcbi8qIGJhc2UgdGFiIGVuZCAqL1xyXG4iLCIvKiDlhYPku7Ygc3R5bGUgKi9cclxuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL21lcmMtY2FyZC9tZXJjLWNhcmQuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL21lcmMtdGFibGUvbWVyYy10YWJsZS5jb21wb25lbnQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvZmxleC10YWJsZS9mbGV4LXRhYmxlLmNvbXBvbmVudC5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi9saWIvY29tcG9uZW50cy9tZXJjLXRhYi9tZXJjLXRhYi5jb21wb25lbnQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvbWVyYy10YWIvdG9nZ2xlLWNvbGxhcHNlL3RvZ2dsZS1jb2xsYXBzZS5jb21wb25lbnQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vZGF0ZS9jb21wb25lbnRzL3JvYy1kYXRlLXBpY2tlci9yb2MtZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uL2RhdGUvY29tcG9uZW50cy9tZXJjLWNhbGVuZGFyL21lcmMtY2FsZW5kYXIuY29tcG9uZW50LnNjc3NcIjtcclxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcclxuXHJcbi5tZXJjLWNhcmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIHBhZGRpbmcpO1xyXG4gICAgYm9yZGVyOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlcik7XHJcbiAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJveC1zaGFkb3cpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS1jYXJkLCBiYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtY2FyZCwgYm9yZGVyLXJhZGl1cyk7XHJcblxyXG4gICAgLm1lcmMtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBtYXAtZ2V0KCRiYXNlLWNhcmQtaGVhZGVyLCBhbGlnbi1zZWxmKTtcclxuICAgICAgICBmb250LXNpemU6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIGZvbnQtc2l6ZSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIGZvbnQtd2VpZ2h0KTtcclxuICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLWNhcmQtaGVhZGVyLCBwYWRkaW5nKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlci1yYWRpdXMpIG1hcC1nZXQoJGJhc2UtY2FyZCwgYm9yZGVyLXJhZGl1cykgMCAwO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lcmMtY2FyZC1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLWNhcmQtY29udGVudCwgcGFkZGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogaGVhZGVyIOiDjOaZr+mhj+iJsiBzdGFydCAqL1xyXG4gICAgLy8g5Li76aGM6ImyXHJcbiAgICAmLm1lcmMtY2FyZC1wcmltYXJ5ID4gLm1lcmMtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLy8g5Li76aGM6Imy6K6K5b2iXHJcbiAgICAmLm1lcmMtY2FyZC1wcmltYXJ5LXZhcmlhbnQgPiAubWVyYy1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcclxuICAgIH1cclxuICAgIC8vIOasoeimgeiJslxyXG4gICAgJi5tZXJjLWNhcmQtc2Vjb25kYXJ5ID4gLm1lcmMtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB9XHJcbiAgICAvLyDmrKHopoHoibLororlvaJcclxuICAgICYubWVyYy1jYXJkLXNlY29uZGFyeS12YXJpYW50ID4gLm1lcmMtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcclxuICAgIH1cclxuICAgIC8vIOesrOS4ieiJslxyXG4gICAgJi5tZXJjLWNhcmQtdGhpcmQgPiAubWVyYy1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLy8g56ys5LiJ6Imy6K6K5b2iXHJcbiAgICAmLm1lcmMtY2FyZC10aGlyZC12YXJpYW50ID4gLm1lcmMtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLyogaGVhZGVyIOiDjOaZr+mhj+iJsiBlbmQgKi9cclxuXHJcbiAgICAvKiBoZWFkZXIg5a2X6auU6aGP6ImyIHN0YXJ0ICovXHJcbiAgICAvLyDkuLvpoYzoibJcclxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJGNvbG9yU2V0IHtcclxuICAgICAgICAubWVyYy1jYXJkLWhlYWRlci0jeyRuYW1lfSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogaGVhZGVyIOmhj+iJsiBlbmQgKi9cclxuXHJcbiAgICAvKiBoZWFkZXIg6auY5bqmIHN0YXJ0ICovXHJcbiAgICAvLyDlsI9cclxuICAgICYubWVyYy1jYXJkLXNtYWxsID4gLm1lcmMtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC8vIOS4rVxyXG4gICAgJi5tZXJjLWNhcmQtbm9ybWFsID4gLm1lcmMtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgIH1cclxuICAgIC8vIOWkp1xyXG4gICAgJi5tZXJjLWNhcmQtbGFyZ2UgPiAubWVyYy1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLyogaGVhZGVyIOmrmOW6piBlbmQgKi9cclxufVxyXG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xyXG5cclxuLyogb3ZlcndyaXRlIHRhYmxlIHN0eWxlICovXHJcbm1lcmMtdGFibGUge1xyXG4gICAgLmFudC10YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC10YWJsZS1oZWFkZXIsXHJcbiAgICAuYW50LXRhYmxlLWJvZHkge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IG92ZXJsYXkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYW50LXRhYmxlLXRoZWFkID4gLmFudC10YWJsZS1yb3csXHJcbiAgICB0aGVhZCA+IHRyIHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xyXG4gICAgICAgIC5hbnQtdGFibGUtY29sdW1uLWhhcy1zb3J0ZXJzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDlnJPop5JcclxuICAgIC5hbnQtdGFibGUtY29udGFpbmVyIHRhYmxlID4gdGhlYWQge1xyXG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgdGQtcGFkZGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC10YWJsZS1wbGFjZWhvbGRlciAuYW50LXRhYmxlLWV4cGFuZGVkLXJvdy1maXhlZCB7XHJcbiAgICAgICAgbWFyZ2luOiAtNHB4IC04cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOmWk+malOiJslxyXG4gICAgLmFudC10YWJsZS10Ym9keSB7XHJcbiAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWJsZSwgZXZlbi1jb2wtY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBob3ZlciDnt6jovK8mJuWIqumZpFxyXG4gICAgLmhvdmVyLXRvLWVkaXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiAyNnB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnQtdGFibGUtdGJvZHkgPiB0ci5hbnQtdGFibGUtcm93OmhvdmVyID4gdGQsXHJcbiAgICAuYW50LXRhYmxlLXRib2R5ID4gdHI6aG92ZXI6bm90KC5hbnQtdGFibGUtZXhwYW5kZWQtcm93KTpub3QoLmFudC10YWJsZS1yb3ctc2VsZWN0ZWQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICAuaG92ZXItdG8tZWRpdCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGhlYWRlciDpoY/oibIgc3RhcnQgKi9cclxuICAgIC8vIOS4u+mhjOiJslxyXG4gICAgJi5tZXJjLXRhYmxlLXByaW1hcnkge1xyXG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5Li76aGM6Imy6K6K5b2iXHJcbiAgICAmLm1lcmMtdGFibGUtcHJpbWFyeS12YXJpYW50IHtcclxuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5qyh6KaB6ImyXHJcbiAgICAmLm1lcmMtdGFibGUtc2Vjb25kYXJ5IHtcclxuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXHJcbiAgICAmLm1lcmMtdGFibGUtc2Vjb25kYXJ5LXZhcmlhbnQge1xyXG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOesrOS4ieiJslxyXG4gICAgJi5tZXJjLXRhYmxlLXRoaXJkIHtcclxuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDnrKzkuInoibJcclxuICAgICYubWVyYy10YWJsZS10aGlyZC12YXJpYW50IHtcclxuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIGhlYWRlciDpoY/oibIgZW5kICovXHJcbn1cclxuXHJcbi8vIOe3iumEsOWcqGNhcmTkuIvmlrnnmoTkuI3opoHlnJPop5JcclxubWVyYy1jYXJkLWNvbnRlbnQgPiBtZXJjLXRhYmxlIHtcclxuICAgIC5hbnQtdGFibGUtY29udGFpbmVyIHRhYmxlID4gdGhlYWQge1xyXG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiBlbmQgb2Ygb3ZlcndyaXRlIHRhYmxlIHN0eWxlICovXHJcbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XHJcblxyXG5AZWFjaCAkbmFtZSwgJGNvbG9yIGluICRjb2xvclNldCB7XHJcbiAgICAubWVyYy1mbGV4LXRhYmxlLSN7JG5hbWV9IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgLm1lcmMtZmxleC10YWJsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBzaGFkb3cpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHBhZGRpbmcpO1xyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRib2R5IHRyIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBwYWRkaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWJsZSwgZXZlbi1jb2wtY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm8tZGF0YSB7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uby1kYXRhLWhpbnQge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Q1ZDVkNTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkYmFzZS10YWJsZSwgYnJlYWstcG9pbnQpKSB7XHJcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUsXHJcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGhlYWQsXHJcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGJvZHksXHJcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGZvb3QsXHJcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGgsXHJcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGQsXHJcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdHIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGVhZCB0ciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTk5OTlweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtOTk5OXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRib2R5IHRyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkYmFzZS10YWJsZSwgc2hhZG93KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtdGFibGUsIG1vLXBhZGRpbmcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkYmFzZS10YWJsZSwgbW8tYm9yZGVyLWJvdHRvbS13aWR0aCkgc29saWQgJGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtdGFibGUsIG1vLXBhZGRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLm5vLWRhdGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtdGFibGUsIG1vLXBhZGRpbmcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xyXG5cclxuLyogb3ZlcndyaXRlIHRhYiBzdHlsZSAqL1xyXG5tZXJjLXRhYiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XHJcbiAgICAgICAgLmFudC10YWJzLW5hdiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtYXAtZ2V0KCRiYXNlLXRhYiwgZm9udC1zaXplKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1ib3JkZXItd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiDpl5zplonnmoTlj4nlj4kgKi9cclxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy1jbG9zZS14IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFudC10YWJzLXRhYi1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItYm9yZGVyLXdpZHRoKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cclxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWItYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbnQtdGFicy10YWJwYW5lIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFiLCBjb250ZW50LWJvcmRlci13aWR0aCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyog6aGP6ImyIHN0YXJ0ICovXHJcbiAgICAvLyDkuLvpoYzoibJcclxuICAgICYubWVyYy10YWItcHJpbWFyeSB7XHJcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XHJcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XHJcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5Li76aGM6Imy6K6K5b2iXHJcbiAgICAmLm1lcmMtdGFiLXByaW1hcnktdmFyaWFudCB7XHJcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XHJcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XHJcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLmFudC10YWJzLXRhYi1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOasoeimgeiJslxyXG4gICAgJi5tZXJjLXRhYi1zZWNvbmRhcnkge1xyXG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xyXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xyXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDmrKHopoHoibLororlvaJcclxuICAgICYubWVyYy10YWItc2Vjb25kYXJ5LXZhcmlhbnQge1xyXG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xyXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xyXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g56ys5LiJ6ImyXHJcbiAgICAmLm1lcmMtdGFiLXRoaXJkIHtcclxuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcclxuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcclxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLmFudC10YWJzLXRhYi1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRoaXJkLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOesrOS4ieiJsuiuiuW9olxyXG4gICAgJi5tZXJjLXRhYi10aGlyZC12YXJpYW50IHtcclxuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcclxuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcclxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiDpoY/oibIgZW5kICovXHJcblxyXG4gICAgLyogdGFiIOmrmOW6piBzdGFydCAqL1xyXG4gICAgLy8g5bCPXHJcbiAgICAmLm1lcmMtdGFiLXNtYWxsIHtcclxuICAgICAgICA+IC5hbnQtdGFicy1jYXJkID4gLmFudC10YWJzLW5hdiB7XHJcbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5LitXHJcbiAgICAmLm1lcmMtdGFiLW5vcm1hbCB7XHJcbiAgICAgICAgPiAuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1uYXYge1xyXG4gICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOWkp1xyXG4gICAgJi5tZXJjLXRhYi1sYXJnZSB7XHJcbiAgICAgICAgPiAuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1uYXYge1xyXG4gICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIHRhYiDpq5jluqYgZW5kICovXHJcbn1cclxuLyogZW5kIG9mIG92ZXJ3cml0ZSB0YWIgc3R5bGUgKi9cclxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcclxuXHJcbi50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIC50b2dnbGUtd3JhcCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5tZXJjLXRhYiB7XHJcbiAgICAvKiDpoY/oibIgc3RhcnQgKi9cclxuICAgIC8vIOS4u+mhjOiJslxyXG4gICAgJlttZXJjVHlwZT1cInByaW1hcnlcIl0ge1xyXG4gICAgICAgID4gLnRvZ2dsZS1mbG9hdC1idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxyXG4gICAgJlttZXJjVHlwZT1cInByaW1hcnlWYXJpYW50XCJdIHtcclxuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5qyh6KaB6ImyXHJcbiAgICAmW21lcmNUeXBlPVwic2Vjb25kYXJ5XCJdIHtcclxuICAgICAgICAvLyA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcclxuICAgICAgICAvLyAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIgPiAuYW50LXRhYnMtY29udGVudCA+IC5hbnQtdGFicy10YWJwYW5lIHtcclxuICAgICAgICAvLyAgICAgICAgIG1lcmMtdG9nZ2xlLWNvbGxhcHNlIC50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLnRvZ2dsZS1mbG9hdC1idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmrKHopoHoibLororlvaJcclxuICAgICZbbWVyY1R5cGU9XCJzZWNvbmRhcnlWYXJpYW50XCJdIHtcclxuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g56ys5LiJ6ImyXHJcbiAgICAmW21lcmNUeXBlPVwidGhpcmRcIl0ge1xyXG4gICAgICAgIC8vID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xyXG4gICAgICAgIC8vICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciA+IC5hbnQtdGFicy1jb250ZW50ID4gLmFudC10YWJzLXRhYnBhbmUge1xyXG4gICAgICAgIC8vICAgICAgICAgLnRvZ2dsZS1mbG9hdC1idG4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcclxuICAgICAgICAvLyAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLnRvZ2dsZS1mbG9hdC1idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDnrKzkuInoibLororlvaJcclxuICAgICZbbWVyY1R5cGU9XCJ0aGlyZFZhcmlhbnRcIl0ge1xyXG4gICAgICAgID4gLnRvZ2dsZS1mbG9hdC1idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyog6aGP6ImyIGVuZCAqL1xyXG4gICAgLyogdGFiIOmrmOW6piBzdGFydCAqL1xyXG4gICAgLy8g5bCPXHJcbiAgICAmW21lcmNTaXplPVwic21hbGxcIl0ge1xyXG4gICAgICAgID4gLnRvZ2dsZS1mbG9hdC1idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5LitXHJcbiAgICAmW21lcmNTaXplPVwibm9ybWFsXCJdIHtcclxuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOWkp1xyXG4gICAgJlttZXJjU2l6ZT1cImxhcmdlXCJdIHtcclxuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIHRhYiDpq5jluqYgZW5kICovXHJcbn1cclxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcclxuXHJcbi5tZXJjLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCRidG4sIHNoYWRvdyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkYnRuLCBib3JkZXItcmFkaXVzKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyog6aGP6ImyIHN0YXJ0ICovXHJcbiAgICAvLyDkuLvpoYzoibJcclxuICAgICYubWVyYy1idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4JSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHByaW1hcnktY29sb3IsIDglKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTUlKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTUlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDkuLvpoYzoibLororlvaJcclxuICAgICYubWVyYy1idG4tcHJpbWFyeS12YXJpYW50IHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnktdmFyaWFudC1jb2xvciwgOCUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDglKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkcHJpbWFyeS12YXJpYW50LWNvbG9yLCAxNSUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDE1JSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDmrKHopoHoibJcclxuICAgICYubWVyYy1idG4tc2Vjb25kYXJ5IHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgOCUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRzZWNvbmRhcnktY29sb3IsIDglKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWNvbG9yLCAxNSUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRzZWNvbmRhcnktY29sb3IsIDE1JSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDmrKHopoHoibLororlvaJcclxuICAgICYubWVyYy1idG4tc2Vjb25kYXJ5LXZhcmlhbnQge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCA4JSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCA4JSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRzZWNvbmRhcnktdmFyaWFudC1jb2xvciwgMTUlKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3IsIDE1JSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDnrKzkuInoibJcclxuICAgICYubWVyYy1idG4tdGhpcmQge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLWNvbG9yO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHRoaXJkLWNvbG9yLCA4JSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHRoaXJkLWNvbG9yLCA4JSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoaXJkLWNvbG9yO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCR0aGlyZC1jb2xvciwgMTUlKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtY29sb3IsIDE1JSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDnrKzkuInoibLororlvaJcclxuICAgICYubWVyYy1idG4tdGhpcmQtdmFyaWFudCB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC12YXJpYW50LWNvbG9yO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDglKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtdmFyaWFudC1jb2xvciwgOCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtdmFyaWFudC1jb2xvcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XHJcbiAgICAgICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDE1JSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDE1JSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XHJcbiAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgID4gKiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIOmhj+iJsiBlbmQgKi9cclxuXHJcbiAgICAvKiDpq5jluqYgc3RhcnQgKi9cclxuICAgIC8vIOWwj1xyXG4gICAgJi5tZXJjLWJ0bi1zbWFsbCBidXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogbWFwLWdldCgkYnRuLWhlaWdodCwgc20pO1xyXG4gICAgfVxyXG4gICAgLy8g5LitXHJcbiAgICAmLm1lcmMtYnRuLW5vcm1hbCBidXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogbWFwLWdldCgkYnRuLWhlaWdodCwgbWQpO1xyXG4gICAgfVxyXG4gICAgLy8g5aSnXHJcbiAgICAmLm1lcmMtYnRuLWxhcmdlIGJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiBtYXAtZ2V0KCRidG4taGVpZ2h0LCBsZyk7XHJcbiAgICB9XHJcbiAgICAvKiDpq5jluqYgZW5kICovXHJcblxyXG4gICAgLyog5a+s5bqmIHN0YXJ0ICovXHJcbiAgICAvLyB4c1xyXG4gICAgJi5tZXJjLWJ0bi14cyBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHhzKTtcclxuICAgIH1cclxuICAgIC8vIHNtXHJcbiAgICAmLm1lcmMtYnRuLXNtIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IG1hcC1nZXQoJGJ0bi13aWR0aCwgc20pO1xyXG4gICAgfVxyXG4gICAgLy8gbWRcclxuICAgICYubWVyYy1idG4tbWQgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogbWFwLWdldCgkYnRuLXdpZHRoLCBtZCk7XHJcbiAgICB9XHJcbiAgICAvLyBsZ1xyXG4gICAgJi5tZXJjLWJ0bi1sZyBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIGxnKTtcclxuICAgIH1cclxuICAgIC8vIHhsXHJcbiAgICAmLm1lcmMtYnRuLXhsIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IG1hcC1nZXQoJGJ0bi13aWR0aCwgeGwpO1xyXG4gICAgfVxyXG4gICAgLyog5a+s5bqmIGVuZCAqL1xyXG5cclxuICAgIC8qIERpc2FibGVkICovXHJcbiAgICAmLmRpc2FibGVkIGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcclxuXHJcbkBtaXhpbiBmbGV4LWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucm9jLWRhdGUtcGlja2VyIHtcclxuICAuZGF0ZS1waWNrZXIge1xyXG4gICAgLy8gbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIC8vIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgLy8gJjpob3ZlciB7XHJcbiAgICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgLy8gfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIC5jbGVhciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gY2xlYXIgaWNvbiBzdGFydFxyXG4gIC5jbGVhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDdweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC8vIGNsZWFyIGljb24gZW5kXHJcblxyXG4gIC5zZWxlY3RlZC1kYXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLy8gZGlzcGxheSBmb3JtYXRcclxuXHJcbiAgLy8gcG9wb3V0IG1vZGFsIHN0YXJ0XHJcbiAgLmRhdGVzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDExNSU7XHJcbiAgICAvLyBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgLy9oZWFkZXIgc3RhcnRcclxuICAuaGVhZGVyLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcGFkZGluZzogMTBweCAycHggMDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItbGFiZWwge1xyXG4gICAgZmxleDogMTtcclxuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XHJcbiAgfVxyXG5cclxuICAuYXJyb3ctYnRuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9jYWxlbmRhciBzdGFydFxyXG4gIC53ZWVrcyxcclxuICAuZGF5cyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcclxuICB9XHJcblxyXG4gIC53ZWVrcyB7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgfVxyXG5cclxuICAud2VlayxcclxuICAuZGF5IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XHJcbiAgfVxyXG5cclxuICAuZGF5LFxyXG4gIC55ZWFyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC55ZWFycyxcclxuICAubW9udGhzIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XHJcbiAgfVxyXG5cclxuICAubm90LXByZXNlbnQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheTtcclxuICB9XHJcblxyXG4gIC5kYXkuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmRheS5zZWxlY3RlZC5ub3QtcHJlc2VudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheTtcclxuICB9XHJcblxyXG4gIC8vIOW6lemDqOS7iuWkqVxyXG4gIC50b2RheSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJi5ub3QtcHJlc2VudCB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ociB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAuc3VmZml4LWljb24ge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwLm1lcmMteWVhci1zZWxlY3Qge1xyXG4gIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi1pdGVtIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hbnQtc2VsZWN0LWl0ZW0ge1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcclxuLm1lcmMtY2FsZW5kYXJ7XHJcbiAgICA+LnJvY1llYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNDVweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgPi5yb2NZZWFyLXRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAzOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG4ge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAjMmMzZTUwIDFweCBzb2xpZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlcjogJHNlY29uZGFyeS1jb2xvciAxcHggc29saWQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLmZvci1jYWxlbmRhciA+IC5hbnQtYnRuW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcclxuICAgICAgICBib3JkZXI6ICNkOWQ5ZDkgMXB4IHNvbGlkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIH1cclxuICAgIC5mb3ItY2FsZW5kYXIgPiAuYW50LWJ0bjpob3Zlcjpub3QoW2Rpc2FibGVkXSksXHJcbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG46YWN0aXZlOm5vdChbZGlzYWJsZWRdKSxcclxuICAgIC5mb3ItY2FsZW5kYXIgPiAuZm9jdXMtdG9kYXkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHNlY29uZGFyeS1jb2xvciwgMTAlKTtcclxuICAgICAgICBib3JkZXI6IGxpZ2h0ZW4oJHNlY29uZGFyeS1jb2xvciwgMTAlKSAxcHggc29saWQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "h5dW":
/*!***********************************************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/modal/reissue-certificate-modal/reissue-certificate-modal.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ReissueCertificateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReissueCertificateModalComponent", function() { return ReissueCertificateModalComponent; });
/* harmony import */ var projects_tc_lib_src_lib_const_icon_path_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/tc-lib/src/lib/const/icon-path.const */ "GNbt");
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/quiz.enum */ "Yn/n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipe_outside_exam_type_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipe/outside-exam-type.pipe */ "Foqx");






function ReissueCertificateModalComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u8B49\u66F8\u767C\u653E\u8AAA\u660E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u6E2C\u9A57\u7D50\u675F 3 \u9031\u5167\uFF0C\u7531\u4FDD\u96AA\u4E2D\u5FC3\u7D71\u4E00\u5BC4\u767C\u5408\u683C\u8B49\u66F8\u81F3\u7E3D\u516C\u53F8\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u7E3D\u516C\u53F8\u65BC\u63A5\u6536\u8B49\u66F8\u5F8C\uFF0C\u5C07\u65BC 1 \u9031\u5167\uFF0C\u4F9D\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u6240\u5C6C\u5340\u90E8\uFF0C\u7D71\u4E00\u5BC4\u767C\u5408\u683C\u8B49\u66F8\u81F3\u5E02\u5834\u8A13\u7DF4\u8655/\u79D1\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u8B49\u66F8\u88DC\u767C\u7533\u8ACB\u65B9\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u4F9D\u7533\u8ACB\u985E\u5225\u4E0B\u8F09\u7533\u8ACB\u66F8\uFF0C\u65BC\u5099\u59A5\u76F8\u95DC\u8CC7\u6599\u5F8C\uFF0C\u81EA\u884C\u5411\u4FDD\u767C\u4E2D\u5FC3\u7533\u8ACB\uFF0C\u540C\u6642\u9700\u7E73\u4EA4\u624B\u7E8C\u8CBB 300 \u5143\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function ReissueCertificateModalComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u7533\u8ACB\u65B9\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u6E2C\u9A57\u7D50\u675F 3 \u9031\u5167\uFF0C\u7531\u7E3D\u516C\u53F8\u59D4\u6D3E\u4EBA\u54E1\u81F3\u58FD\u96AA\u516C\u6703\u9818\u53D6\u5408\u683C\u8B49\u66F8\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u7E3D\u516C\u53F8\u65BC\u63A5\u6536\u8B49\u66F8\u5F8C\uFF0C\u5C07\u65BC 1 \u9031\u5167\uFF0C\u4F9D\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u6240\u5C6C\u5340\u90E8\uFF0C\u7D71\u4E00\u5BC4\u767C\u5408\u683C\u8B49\u66F8\u81F3\u5E02\u5834\u8A13\u7DF4\u8655/\u79D1\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u8907\u67E5\u8CBB\u7528");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u4E0B\u8F09\u7533\u8ACB\u66F8\uFF0C\u65BC\u5099\u59A5\u76F8\u95DC\u8CC7\u6599\u5F8C\uFF0C\u7E73\u4EA4\u4E88\u5E02\u5834\u8A13\u7DF4\u8655/\u79D1\uFF0C\u540C\u6642\u9700\u7E73\u4EA4\u624B\u7E8C\u8CBB 300 \u5143\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function ReissueCertificateModalComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u7533\u8ACB\u65B9\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u6E2C\u9A57\u7D50\u675F 3 \u9031\u5167\uFF0C\u7531\u7E3D\u516C\u53F8\u59D4\u6D3E\u4EBA\u54E1\u81F3\u58FD\u96AA\u516C\u6703\u9818\u53D6\u5408\u683C\u8B49\u66F8\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u7E3D\u516C\u53F8\u65BC\u63A5\u6536\u8B49\u66F8\u5F8C\uFF0C\u5C07\u65BC 1 \u9031\u5167\uFF0C\u4F9D\u53C3\u52A0\u6E2C\u9A57\u4EBA\u54E1\u6240\u5C6C\u5340\u90E8\uFF0C\u7D71\u4E00\u5BC4\u767C\u5408\u683C\u8B49\u66F8\u81F3\u5E02\u5834\u8A13\u7DF4\u8655/\u79D1\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u8907\u67E5\u8CBB\u7528");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u4E0B\u8F09\u7533\u8ACB\u66F8\uFF0C\u65BC\u5099\u59A5\u76F8\u95DC\u8CC7\u6599\u5F8C\uFF0C\u7E73\u4EA4\u4E88\u5E02\u5834\u8A13\u7DF4\u8655/\u79D1\uFF0C\u540C\u6642\u9700\u7E73\u4EA4\u624B\u7E8C\u8CBB 300 \u5143\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function ReissueCertificateModalComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "merc-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReissueCertificateModalComponent_ng_container_12_Template_merc_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onDownloadClick(ctx_r5.CertificateInvestType.lost); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u4E0B\u8F09\u7533\u8ACB\u66F8-\u907A\u5931\u53CA\u8B8A\u66F4\u8CC7\u6599 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "merc-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReissueCertificateModalComponent_ng_container_12_Template_merc_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onDownloadClick(ctx_r7.CertificateInvestType.wrong); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u4E0B\u8F09\u7533\u8ACB\u66F8-\u8B49\u66F8\u5167\u5BB9\u932F\u8AA4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mercType", "secondary")("mercSize", "large");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mercType", "secondary")("mercSize", "large");
} }
function ReissueCertificateModalComponent_merc_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "merc-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReissueCertificateModalComponent_merc_button_13_Template_merc_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onDownloadClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u4E0B\u8F09\u7533\u8ACB\u66F8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
} }
class ReissueCertificateModalComponent {
    constructor() {
        this.ICON_PATH = projects_tc_lib_src_lib_const_icon_path_const__WEBPACK_IMPORTED_MODULE_0__["ICON_PATH"];
        this.OutsideExamType = _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["OutsideExamType"];
        this.CertificateInvestType = _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["CertificateInvestType"];
    }
    ngOnInit() {
    }
    /**
     * 下載連結
     */
    onDownloadClick(type) {
        let url = '';
        switch (this.outsideExam) {
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["OutsideExamType"].professional:
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["OutsideExamType"].common:
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["OutsideExamType"].foreignCurrency:
                url = 'https://www.mli.com.tw/aes/winz/p-trainning-10.pdf';
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["OutsideExamType"].invest:
                // 遺失及變更資料：連結https://www.mli.com.tw/aes/winz/p-trainning-11.pdf
                if (type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["CertificateInvestType"].lost) {
                    url = 'https://www.mli.com.tw/aes/winz/p-trainning-11.pdf';
                }
                else if (type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_1__["CertificateInvestType"].wrong) {
                    // 證書內容錯誤：連結https://www.mli.com.tw/aes/winz/p-trainning-12.pdf
                    url = 'https://www.mli.com.tw/aes/winz/p-trainning-12.pdf';
                }
                break;
            default:
                break;
        }
        window.open(url, '_blank');
    }
}
ReissueCertificateModalComponent.ɵfac = function ReissueCertificateModalComponent_Factory(t) { return new (t || ReissueCertificateModalComponent)(); };
ReissueCertificateModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReissueCertificateModalComponent, selectors: [["app-reissue-certificate-modal"]], inputs: { outsideExam: "outsideExam" }, decls: 14, vars: 10, consts: [[1, "modal-margin"], [1, "header", "text-center"], [3, "iconType", "iconSize"], [1, "text-20", "text-fatty"], [1, "content"], [4, "ngIf"], [1, "footer", "btn-groups"], ["class", "m-0", 3, "mercType", "mercWidth", "mercSize", "click", 4, "ngIf"], [1, "info"], [1, "text-secondary", "text-lg"], [1, "info", "pb-3"], [3, "mercType", "mercSize", "click"], [1, "m-0", 3, "mercType", "mercWidth", "mercSize", "click"]], template: function ReissueCertificateModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "merc-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "outsideExamTypePipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ReissueCertificateModalComponent_ng_container_8_Template, 14, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ReissueCertificateModalComponent_ng_container_9_Template, 14, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ReissueCertificateModalComponent_ng_container_10_Template, 14, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ReissueCertificateModalComponent_ng_container_12_Template, 5, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ReissueCertificateModalComponent_merc_button_13_Template, 2, 3, "merc-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconType", ctx.ICON_PATH.ALERT)("iconSize", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u8B49\u66F8\u88DC\u767C - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, ctx.outsideExam), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.OutsideExamType.invest === ctx.outsideExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.OutsideExamType.professional === ctx.outsideExam || ctx.OutsideExamType.common === ctx.outsideExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.OutsideExamType.foreignCurrency === ctx.outsideExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.OutsideExamType.invest === ctx.outsideExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.OutsideExamType.invest !== ctx.outsideExam);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_3__["MercIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], merc_lib__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], pipes: [_pipe_outside_exam_type_pipe__WEBPACK_IMPORTED_MODULE_5__["OutsideExamTypePipe"]], styles: [".content[_ngcontent-%COMP%] {\n  max-width: 450px;\n  padding-bottom: 24px;\n  margin: 0px auto;\n}\n\nol[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3JlaXNzdWUtY2VydGlmaWNhdGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoicmVpc3N1ZS1jZXJ0aWZpY2F0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbm9se1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59Il19 */"] });


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
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/quiz.enum */ "Yn/n");

const mockTable = [
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '不合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '70',
    },
    {
        title: '公會班-外幣',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '不合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].outside,
        score: '80',
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會班-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '不合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].outside,
        score: '90',
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會班-共同',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '不合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].outside,
        score: '90',
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].common
    },
    {
        title: '公會考試-投資類型',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '不合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].outside,
        score: '70',
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會班-外幣',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].outside,
        score: '80',
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會班-專業/共同',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].outside,
        score: '90',
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-投資型',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].outside,
        score: '70',
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '80'
    }, {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '合格'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '合格'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '合格'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '合格'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '合格'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '70'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '90'
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '65'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '80'
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        status: '合格',
        nature: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["Nature"].inside,
        score: '90'
    },
];


/***/ }),

/***/ "oXAn":
/*!*************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/inside-quiz/inside-quiz.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InsideQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsideQuizComponent", function() { return InsideQuizComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var projects_tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/tc-lib/src/lib/const/device.const */ "5V4s");
/* harmony import */ var projects_tc_lib_src_lib_const_icon_path_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/tc-lib/src/lib/const/icon-path.const */ "GNbt");
/* harmony import */ var projects_tc_lib_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/tc-lib/src/public-api */ "pzfE");
/* harmony import */ var _core_enums_signup_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/enums/signup-status.enum */ "5NdK");
/* harmony import */ var _shared_components_class_info_modal_class_info_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/class-info-modal/class-info-modal.component */ "s0oJ");
/* harmony import */ var _shared_components_signup_modal_signup_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/signup-modal/signup-modal.component */ "4+Vy");
/* harmony import */ var _const_register_type_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../const/register-type.const */ "ZxlW");
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/quiz.enum */ "Yn/n");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock */ "Mckh");
/* harmony import */ var _modal_change_place_change_place_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal/change-place/change-place.component */ "VXQ1");
/* harmony import */ var _shared_components_signup_error_modal_signup_error_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/signup-error-modal/signup-error-modal.component */ "Izo8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/shared.service */ "VVBw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_date_show_date_show_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/components/date-show/date-show.component */ "ZOi9");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");































function InsideQuizComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\u7DE8\u865F");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function InsideQuizComponent_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", table_r5.header, " ");
} }
function InsideQuizComponent_tr_74_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");
} }
function InsideQuizComponent_tr_74_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "nz-option", 53);
} if (rf & 2) {
    const locate_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", locate_r13.value)("nzLabel", locate_r13.label);
} }
function InsideQuizComponent_tr_74_merc_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "merc-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InsideQuizComponent_tr_74_merc_button_14_Template_merc_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16); const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r14.onPositiveClick(data_r6.btnList[0] == null ? null : data_r6.btnList[0].type, data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mercType", "secondary")("mercSize", ctx_r10.sharedService.userDevice === ctx_r10.DEVICE.PAD ? "large" : "small")("disabled", !data_r6.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", data_r6.btnList[0] == null ? null : data_r6.btnList[0].title, " ");
} }
function InsideQuizComponent_tr_74_ng_container_15_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InsideQuizComponent_tr_74_ng_container_15_ng_container_9_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23); const btn_r20 = ctx.$implicit; const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r21.onPositiveClick(btn_r20.type, data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const btn_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", btn_r20.title, " ");
} }
function InsideQuizComponent_tr_74_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "nz-button-group", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "merc-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InsideQuizComponent_tr_74_ng_container_15_Template_merc_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26); const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r24.onPositiveClick(data_r6.btnList[0] == null ? null : data_r6.btnList[0].type, data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "nz-dropdown-menu", null, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, InsideQuizComponent_tr_74_ng_container_15_ng_container_9_Template, 3, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mercType", "secondary")("mercSize", ctx_r11.sharedService.userDevice === ctx_r11.DEVICE.PAD ? "large" : "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", data_r6.btnList[0] == null ? null : data_r6.btnList[0].title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzDropdownMenu", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", data_r6.btnList);
} }
function InsideQuizComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, InsideQuizComponent_tr_74_td_1_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InsideQuizComponent_tr_74_Template_td_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29); const data_r6 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r28.showInfo(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "nz-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function InsideQuizComponent_tr_74_Template_nz_select_ngModelChange_5_listener($event) { const data_r6 = ctx.$implicit; return data_r6.location = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, InsideQuizComponent_tr_74_nz_option_6_Template, 1, 2, "nz-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "app-date-show", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, InsideQuizComponent_tr_74_merc_button_14_Template, 2, 4, "merc-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, InsideQuizComponent_tr_74_ng_container_15_Template, 10, 5, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", data_r6.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", data_r6.location)("nzDisabled", data_r6.register_status !== ctx_r2.QuizStatus.noStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.locationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", data_r6.class, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", data_r6.quiz_date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("startDate", data_r6.start_register_date)("endDate", data_r6.end_register_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (data_r6.btnList[0] == null ? null : data_r6.btnList[0].type) === ctx_r2.QuizAction.join);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (data_r6.btnList[0] == null ? null : data_r6.btnList[0].type) !== ctx_r2.QuizAction.join);
} }
function InsideQuizComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "merc-icon", 2);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("iconType", ctx_r4.ICON_PATH.CALENDAR)("iconSize", 23);
} }
class InsideQuizComponent {
    constructor(sharedService, formBuilder, swiperDatePickerService, taiwanDatePipe, modalService) {
        this.sharedService = sharedService;
        this.formBuilder = formBuilder;
        this.swiperDatePickerService = swiperDatePickerService;
        this.taiwanDatePipe = taiwanDatePipe;
        this.modalService = modalService;
        /** TODO: 假資料 */
        this.quizList = _mock__WEBPACK_IMPORTED_MODULE_9__["mockTable"];
        this.QuizStatus = _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizStatus"];
        this.QuizAction = _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"];
        /** 註冊狀態 */
        this.SignUpStatus = _core_enums_signup_status_enum__WEBPACK_IMPORTED_MODULE_4__["SignUpStatus"];
        this.pageSet = new projects_tc_lib_src_public_api__WEBPACK_IMPORTED_MODULE_3__["PageSet"]();
        this.DEVICE = projects_tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_1__["DEVICE"];
        this.tableSetting = [
            { header: '測驗名稱', primaryKey: 'title' },
            { header: '考區', primaryKey: 'location' },
            { header: '期別', primaryKey: 'class' },
            { header: '測驗日期', primaryKey: 'quiz_date' },
            { header: '報名日期', primaryKey: 'register_date' },
        ];
        /**
         * 顯示按鈕
         */
        this.btnList = [
            // hidden data.register_status !== QuizStatus.paid
            { title: '變更考區', type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].changePlace },
            // hidden data.register_status === QuizStatus.noStatus
            { title: '取消報名', type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].cancel },
            // hidden data.register_status !== QuizStatus.noStatus
            { title: '我要報名', type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].join },
            // hidden data.register_status === QuizStatus.fail
            { title: '報名失敗', type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].failReason },
        ];
        this.locationList = [
            { label: '台北區', value: '台北區' },
            { label: '台中區', value: '台中區' },
            { label: '桃竹區', value: '桃竹區' },
            { label: '嘉義區', value: '嘉義區' },
            { label: '台南區', value: '台南區' },
        ];
    }
    get ICON_PATH() { return projects_tc_lib_src_lib_const_icon_path_const__WEBPACK_IMPORTED_MODULE_2__["ICON_PATH"]; }
    ngOnInit() {
        // TODO: 暫時這樣寫
        this.quizList = this.quizList.map((item) => {
            if (item) {
                item.btnList = this.filterBtn(item.register_status);
            }
        });
        this.handleShowData();
        this.pageSet.initialize(_mock__WEBPACK_IMPORTED_MODULE_9__["mockTable"].length);
        this.initForm();
    }
    initForm() {
        this.searchForm = this.formBuilder.group({
            nature: [{ value: 'inside', disabled: true }],
            keyword: [''],
            str_date: [moment__WEBPACK_IMPORTED_MODULE_0__().add(-2, 'M').valueOf()],
            end_date: [moment__WEBPACK_IMPORTED_MODULE_0__().add(1, 'M').valueOf()],
        });
    }
    /**
     * TODO: 找更好看的寫法
     * @param status QuizStatus
     * @returns btn[]
     */
    filterBtn(status) {
        const list = this.btnList;
        const result = [];
        list.forEach((item) => {
            switch (status) {
                case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizStatus"].noStatus:
                    if (item.type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].join) {
                        result.push(item);
                    }
                    break;
                case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizStatus"].fail:
                    if (item.type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].failReason) {
                        result.push(item);
                    }
                    break;
                case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizStatus"].paid:
                    if (item.type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].changePlace) {
                        result.push(item);
                    }
                    break;
                default:
                    break;
            }
            if (item.type === _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].cancel && status !== _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizStatus"].noStatus && status !== _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizStatus"].fail) {
                result.push(item);
            }
        });
        return result;
    }
    onRejectReason() {
        this.modalService.create({
            nzContent: _shared_components_signup_error_modal_signup_error_modal_component__WEBPACK_IMPORTED_MODULE_11__["SignupErrorModalComponent"],
            nzWidth: 400,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
        });
    }
    /**
     * 按鈕分配
     */
    onPositiveClick(action, data) {
        switch (action) {
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].join:
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].cancel:
                this.onSignClick(action);
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].changePlace:
                this.onChangePlaceClick(data);
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].failReason:
                this.onRejectReason();
                break;
            default:
                break;
        }
    }
    onSearchClick() {
    }
    onChangePlaceClick(quiz) {
        this.modalService.create({
            nzContent: _modal_change_place_change_place_component__WEBPACK_IMPORTED_MODULE_10__["ChangePlaceComponent"],
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
                registerAction = _core_enums_signup_status_enum__WEBPACK_IMPORTED_MODULE_4__["SignUpStatus"].isOpen;
                break;
            case _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_8__["QuizAction"].cancel:
                registerAction = _core_enums_signup_status_enum__WEBPACK_IMPORTED_MODULE_4__["SignUpStatus"].signed;
                break;
            default:
                break;
        }
        this.modalService.create({
            nzContent: _shared_components_signup_modal_signup_modal_component__WEBPACK_IMPORTED_MODULE_6__["SignupModalComponent"],
            nzWidth: 600,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
            nzComponentParams: {
                action: registerAction,
                type: _const_register_type_const__WEBPACK_IMPORTED_MODULE_7__["REGISTER_TYPE"].INSIDE_EXAM
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
        this.quizList = _mock__WEBPACK_IMPORTED_MODULE_9__["mockTable"].slice((this.pageSet.currentPage - 1) * this.pageSet.currentPageSize, (this.pageSet.currentPage) * this.pageSet.currentPageSize);
    }
    showInfo(event) {
        const modal = this.modalService.create({
            nzContent: _shared_components_class_info_modal_class_info_modal_component__WEBPACK_IMPORTED_MODULE_5__["ClassInfoModalComponent"],
            nzWidth: 600,
            nzClosable: true,
            nzFooter: null,
            nzClassName: 'white-close-x',
            nzBodyStyle: {
                padding: '0',
            },
            nzComponentParams: {
                event
            }
        });
    }
}
InsideQuizComponent.ɵfac = function InsideQuizComponent_Factory(t) { return new (t || InsideQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_13__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_15__["SwiperDatePickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_15__["TaiwanDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalService"])); };
InsideQuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: InsideQuizComponent, selectors: [["app-inside-quiz"]], decls: 77, vars: 35, consts: [[1, "tab-box"], [1, "search-header", "text-20", "text-fatty", "pb-3"], [3, "iconType", "iconSize"], [1, "search-zone"], ["nz-form", "", 3, "formGroup", "nzLayout"], [1, "row"], [1, "col-md-6", "col-lg-2", "col-12"], [1, "font-weight-bold"], ["formControlName", "nature", 3, "nzSize"], ["nzValue", "inside", "nzLabel", "\u5167\u90E8\u6E2C\u9A57"], ["nzValue", "side", "nzLabel", "\u5916\u90E8\u6E2C\u9A57"], [3, "nzErrorTip"], ["formControlName", "keyword", "type", "text", "nz-input", "", "placeholder", "\u8ACB\u8F38\u5165\u95DC\u9375\u5B57", 3, "nzSize"], [1, "col-12", "col-lg-5"], [1, "col-6"], [1, "date-picker", "date-picker-wave", 3, "nzErrorTip"], ["formControlName", "str_date", 3, "mercSize"], [2, "opacity", "0"], ["formControlName", "end_date", 3, "mercSize"], [1, "col-lg-3", "col-12", "search-btns"], [3, "mercType", "outline", "mercSize", "mercWidth", "click"], [1, "ms-3", 3, "mercType", "mercSize", "mercWidth", "click"], [1, "mb-4"], [1, "table-header"], [1, "d-flex", "flex-wrap", "ms-3"], ["nz-checkbox", "", "nzValue", "A", 3, "ngModel"], ["nz-checkbox", "", "nzValue", "B", 3, "ngModel"], [1, "pagination"], [1, "pagesize", "py-2", "py-md-0"], [3, "ngModel", "ngModelChange"], ["nzLabel", "10", 3, "nzValue"], ["nzLabel", "25", 3, "nzValue"], ["nzLabel", "50", 3, "nzValue"], [1, "pagechange"], [3, "iconType", "iconSize", "click"], [1, "table-content"], [3, "mercType", "headTextColor"], ["class", "text-center", 4, "ngIf"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["calendar_icon", ""], ["data-title", "\u6E2C\u9A57\u540D\u7A31", 1, "text-lg-center", 2, "cursor", "pointer", 3, "click"], ["data-title", "\u8003\u5340", 1, "text-lg-center"], ["nzPlaceHolder", "\u8ACB\u9078\u64C7", 3, "ngModel", "nzDisabled", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["data-title", "\u671F\u5225", 1, "text-lg-center"], ["data-title", "\u6E2C\u9A57\u65E5\u671F", 1, "text-lg-center"], ["data-title", "\u5831\u540D\u65E5\u671F", 1, "text-lg-center"], [3, "startDate", "endDate"], ["data-title", "\u529F\u80FD", 1, "text-center"], [3, "mercType", "mercSize", "disabled", "click", 4, "ngIf"], [4, "ngIf"], [3, "nzValue", "nzLabel"], [3, "mercType", "mercSize", "disabled", "click"], ["id", "too-much-btn"], [3, "mercType", "mercSize", "click"], ["nz-button", "", "nz-dropdown", "", "nzPlacement", "bottomRight", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "caret-down", "nzTheme", "outline"], ["menu4", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"]], template: function InsideQuizComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "\u6027\u8CEA");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "nz-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "nz-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "\u95DC\u9375\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "nz-form-control", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "\u4E0A\u8AB2\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "nz-form-control", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "merc-roc-date-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "nz-form-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "\u8FC4\u65E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "nz-form-control", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "merc-roc-date-picker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "merc-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InsideQuizComponent_Template_merc_button_click_36_listener() { return ctx.onClearClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "\u6E05\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "merc-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InsideQuizComponent_Template_merc_button_click_38_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, " \u67E5\u8A62");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, " \u6E2C\u9A57\u5217\u8868 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "nz-checkbox-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "\u50C5\u986F\u793A\u5DF2\u5831\u540D\u6E2C\u9A57\u4E4B\u5834\u6B21");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "\u50C5\u986F\u793A\u53EF\u5831\u540D\u6E2C\u9A57\u4E4B\u5834\u6B21");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53, " \u6BCF\u9801\u986F\u793A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "nz-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function InsideQuizComponent_Template_nz_select_ngModelChange_54_listener($event) { return ctx.pageSet.currentPageSize = $event; })("ngModelChange", function InsideQuizComponent_Template_nz_select_ngModelChange_54_listener() { return ctx.handleShowData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](55, "nz-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](56, "nz-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](57, "nz-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, " \u7B46 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "merc-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InsideQuizComponent_Template_merc_icon_click_60_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "merc-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InsideQuizComponent_Template_merc_icon_click_62_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "merc-flex-table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](67, InsideQuizComponent_th_67_Template, 2, 0, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](68, InsideQuizComponent_th_68_Template, 2, 1, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, "\u5831\u540D\u72C0\u614B");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](72, "\u529F\u80FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](74, InsideQuizComponent_tr_74_Template, 16, 11, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](75, InsideQuizComponent_ng_template_75_Template, 1, 2, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("iconType", ctx.ICON_PATH.BTN_SEARCH)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.searchForm)("nzLayout", "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzErrorTip", "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B\u6B04\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mercType", "third")("outline", true)("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mercType", "third")("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", false);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.quizList);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_15__["MercIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__["NzFormControlComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControlName"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__["NzOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__["NzInputDirective"], merc_lib__WEBPACK_IMPORTED_MODULE_15__["RocDatePickerComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_15__["ButtonComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_21__["NzCheckboxWrapperComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_21__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], merc_lib__WEBPACK_IMPORTED_MODULE_15__["FlexTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTrDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTbodyComponent"], _shared_components_date_show_date_show_component__WEBPACK_IMPORTED_MODULE_24__["DateShowComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_25__["NzButtonGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_26__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_25__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_27__["NzWaveDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_28__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_28__["NzDropDownDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_28__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_30__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_30__["NzMenuItemDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNpZGUtcXVpei5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vSVe":
/*!*****************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/modal/bill-modal/bill-modal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BillModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillModalComponent", function() { return BillModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BillModalComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.header);
} }
function BillModalComponent_tr_18_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r7[item_r9.primaryKey], " ");
} }
function BillModalComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BillModalComponent_tr_18_td_1_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.userInfoTableSetting);
} }
function BillModalComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.header);
} }
function BillModalComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.quizName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.period, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.quiZDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.seq, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.fee, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.endDate, " ");
} }
const _c0 = function () { return {}; };
const _c1 = function (a0) { return [a0]; };
class BillModalComponent {
    constructor() {
        this.userInfoTableSetting = [
            { header: '身分證字號', primaryKey: 'id' },
            { header: '通訊處', primaryKey: 'comm' },
            { header: '姓名', primaryKey: 'name' },
        ];
        this.userInfoMockTable = [
            { id: 'A123456789', comm: '15930', name: '廖OO' }
        ];
        this.billTableSetting = [
            { header: '測驗名稱', primaryKey: 'quizName' },
            { header: '期別', primaryKey: 'period' },
            { header: '測驗日期', primaryKey: 'quiZDate' },
            { header: '考區', primaryKey: 'location' },
            { header: '報名序號', primaryKey: 'seq' },
            { header: '報名費', primaryKey: 'fee' },
            { header: '繳款截止日', primaryKey: 'endDate' },
        ];
        this.billMockTable = [
            {
                quizName: '公會考試-專業科目', period: '110081', quiZDate: '110/08/21',
                location: '台北', seq: '111008219999', fee: '400', endDate: '110/08/03'
            }
        ];
    }
    ngOnInit() {
    }
}
BillModalComponent.ɵfac = function BillModalComponent_Factory(t) { return new (t || BillModalComponent)(); };
BillModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillModalComponent, selectors: [["app-bill-modal"]], decls: 53, vars: 22, consts: [[1, "text-center", "text-xl", "text-fatty", "p-3"], [1, "text-decoration-underline"], [1, "table-header"], [1, "mb-2", "row"], [1, "mb-2", "col-7"], [3, "mercType"], [1, "bill-table", 3, "nzData", "nzShowPagination"], ["userInfoTable", ""], [4, "ngFor", "ngForOf"], [1, "mb-2", "col-5"], [1, "text-fatty", "text-primary"], [1, "mb-2"], ["billTable", ""], [1, "text-normal", "text-primary"], [1, ""], [1, "footer", "btn-groups"], [3, "mercType", "mercWidth", "mercSize"], [1, "text-primary"]], template: function BillModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u4E09\u5546\u7F8E\u90A6\u4EBA\u58FD\u4FDD\u96AA\u80A1\u4EFD\u6709\u9650\u516C\u53F8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5916\u90E8\u6E2C\u9A57 \u7E73\u6B3E\u55AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "merc-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "merc-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u7E73\u6B3E\u8CC7\u8A0A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "merc-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-table", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BillModalComponent_th_16_Template, 2, 1, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BillModalComponent_tr_18_Template, 2, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "merc-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u7E73\u6B3E\u6CE8\u610F\u4E8B\u9805");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u903E\u671F\u672A\u7E73\u6B3E\uFF0C\u8996\u540C\u53D6\u6D88\u5831\u540D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "merc-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-table", 6, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BillModalComponent_th_36_Template, 2, 1, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, BillModalComponent_tr_38_Template, 15, 7, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u7E73\u6B3E\u65B9\u5F0F\uFF1A\u901A\u8A0A\u8655\u52A9\u7406\u7AEF\uFF08\u73FE\u91D1\uFF09 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u8ACB\u63D0\u4F9B\u4EE5\u4E0B Bar-Code \u4E88\u901A\u8A0A\u8655\u52A9\u7406\u9032\u884C\u6536\u6B3E\u4F5C\u696D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u901A\u8A0A\u8655\u52A9\u7406\u7AEF\u6BCF\u65E5\u73FE\u91D1\u6536\u6B3E\u622A\u6B62\u6642\u9593\uFF0C\u4F9D\u696D\u52D9\u670D\u52D9\u79D1\u898F\u5B9A\u8FA6\u7406\uFF0C\u8ACB\u81EA\u884C\u7559\u610F\u6642\u9593\uFF01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " bar-code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "merc-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u4E0B\u8F09PDF\u6A94 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "merc-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u4E0B\u8F09JPG\u6A94 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mercType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.userInfoMockTable)("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userInfoTableSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mercType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0)))("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mercType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.billMockTable)("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.billTableSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r3.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_1__["MercCardComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["ɵb"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["MercTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTrDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTbodyComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzThMeasureDirective"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]], styles: ["merc-card-content[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2JpbGwtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGIiwiZmlsZSI6ImJpbGwtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtZXJjLWNhcmQtY29udGVudHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuLnRhYmxlLWhlYWRlcntcbiAgcGFkZGluZy1sZWZ0OiAwO1xufSJdfQ== */"] });


/***/ }),

/***/ "yD+f":
/*!*****************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/outside-quiz/outside-mock.ts ***!
  \*****************************************************************************/
/*! exports provided: outsideMockTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outsideMockTable", function() { return outsideMockTable; });
/* harmony import */ var _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/quiz.enum */ "Yn/n");

const outsideMockTable = [
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].fail,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-共同科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].common
    },
    {
        title: '公會考試-外幣',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會考試-投資型',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會班-專業科目',
        location: '台北區',
        class: '110123',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會班-共同',
        location: '台北區',
        class: '110123',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].common
    },
    {
        title: '公會班-外幣',
        location: '台北區',
        class: '110123',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會班-投資型',
        location: '台北區',
        class: '110123',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-投資',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-外幣',
        location: '桃竹區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110123',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會班-外幣',
        location: '台北區',
        class: '110123',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會考試-共同',
        location: '台北區',
        class: '110123',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].common
    },
    {
        title: '公會考試-投資',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-外幣',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會班-投資',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-投資',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-投資',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].foreignCurrency
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    }, {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-投資',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台南區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-投資',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].invest
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公公會考試-專業科目會班',
        location: '高雄區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110456',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110456',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    }, {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公公會考試-專業科目會班',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台中區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
    {
        title: '公會考試-專業科目',
        location: '台北區',
        class: '110021',
        quiz_date: '110/03/04',
        start_register_date: '110/02/04',
        end_register_date: '110/03/03',
        register_status: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss,
        outside_exam_type: _enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["OutsideExamType"].professional
    },
];


/***/ })

}]);
//# sourceMappingURL=content-quiz-quiz-module.js.map