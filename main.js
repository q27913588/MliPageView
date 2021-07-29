(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+ySv":
/*!*****************************************************************!*\
  !*** ./projects/tc-front/src/app/layout/menu/menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../tc-lib/src/lib/const/device.const */ "5V4s");
/* harmony import */ var _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/const/routing-path.const */ "2fUu");
/* harmony import */ var _content_quiz_const_tab_param_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content/quiz/const/tab-param.const */ "yjt8");
/* harmony import */ var _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/enums/account-type.enum */ "riHe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.service */ "VVBw");
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/account.service */ "TyOg");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











function MenuComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " \u5C08\u6848 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r0.ROUTING_PATH.PROJECTS);
} }
const _c0 = function (a0) { return { tab: a0 }; };
class MenuComponent {
    constructor(sharedService, accountService) {
        this.sharedService = sharedService;
        this.accountService = accountService;
        this.AccountType = _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__["AccountType"];
        this.TAB_PARAM = _content_quiz_const_tab_param_const__WEBPACK_IMPORTED_MODULE_2__["TAB_PARAM"];
    }
    /**
     * routing 路徑
     */
    get ROUTING_PATH() { return _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"]; }
    /**
     * 裝置
     */
    get DEVICE() { return _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_0__["DEVICE"]; }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 15, vars: 8, consts: [[1, "menu-bar", "font-weight-bold"], ["nz-menu", "", "nzMode", "horizontal", 2, "overflow", "auto hidden"], ["nz-menu-item", "", "nzMatchRouter", ""], [3, "routerLink"], [3, "routerLink", "queryParams"], ["nz-menu-item", "", "nzMatchRouter", "", 4, "ngIf"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " \u884C\u4E8B\u66C6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u500B\u4EBA\u8CC7\u8A0A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " \u8AB2\u7A0B/\u6D3B\u52D5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " \u6E2C\u9A57 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MenuComponent_li_14_Template, 3, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.ROUTING_PATH.HOME);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.ROUTING_PATH.PERSONAL_INFO);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.ROUTING_PATH.COURSE);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.ROUTING_PATH.QUIZ)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, ctx.TAB_PARAM.QUIZ_LIST));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.accountService.account.account_type === ctx.AccountType.sales);
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.menu-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  border-bottom: 2px solid #cdcdcd;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: 90px;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWdyYXk6ICNjZGNkY2Q7XG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tZW51LWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbG9yLWdyYXk7XG59XG51bCBsaSA+IGEge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./projects/tc-front/src/main.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tsaotingwei/Documents/GitHub/TrainingCourse/projects/tc-front/src/main.ts */"4LhN");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1tKd":
/*!**************************************************!*\
  !*** ./projects/tc-lib/src/lib/tc-lib.module.ts ***!
  \**************************************************/
/*! exports provided: TcLibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TcLibModule", function() { return TcLibModule; });
/* harmony import */ var _pipes_str_hide_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/str-hide.pipe */ "ZvfN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var _nz_nz_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nz/nz.modules */ "F2Bu");
/* harmony import */ var _tc_lib_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tc-lib.component */ "xYah");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class TcLibModule {
}
TcLibModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: TcLibModule });
TcLibModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function TcLibModule_Factory(t) { return new (t || TcLibModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: merc_lib__WEBPACK_IMPORTED_MODULE_2__["LoaderInterceptor"],
            multi: true,
        },
    ], imports: [[
            _nz_nz_modules__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"],
            merc_lib__WEBPACK_IMPORTED_MODULE_2__["MercLibModule"],
            merc_lib__WEBPACK_IMPORTED_MODULE_2__["MercDateModule"]
        ], _nz_nz_modules__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"],
        merc_lib__WEBPACK_IMPORTED_MODULE_2__["MercLibModule"],
        merc_lib__WEBPACK_IMPORTED_MODULE_2__["MercDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TcLibModule, { declarations: [_tc_lib_component__WEBPACK_IMPORTED_MODULE_4__["TcLibComponent"],
        _pipes_str_hide_pipe__WEBPACK_IMPORTED_MODULE_0__["StrHidePipe"]], imports: [_nz_nz_modules__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"],
        merc_lib__WEBPACK_IMPORTED_MODULE_2__["MercLibModule"],
        merc_lib__WEBPACK_IMPORTED_MODULE_2__["MercDateModule"]], exports: [_tc_lib_component__WEBPACK_IMPORTED_MODULE_4__["TcLibComponent"],
        _nz_nz_modules__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"],
        merc_lib__WEBPACK_IMPORTED_MODULE_2__["MercLibModule"],
        merc_lib__WEBPACK_IMPORTED_MODULE_2__["MercDateModule"],
        _pipes_str_hide_pipe__WEBPACK_IMPORTED_MODULE_0__["StrHidePipe"]] }); })();


/***/ }),

/***/ "1xBt":
/*!**********************************************************************!*\
  !*** ./projects/tc-front/src/app/core/enums/register-action.enum.ts ***!
  \**********************************************************************/
/*! exports provided: RegisterAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterAction", function() { return RegisterAction; });
/**
 * 報名操作
 */
var RegisterAction;
(function (RegisterAction) {
    // TODO:假的代號
    /**
     * 確認報名
     */
    RegisterAction[RegisterAction["signup"] = 1] = "signup";
    /**
     * 取消報名
     */
    RegisterAction[RegisterAction["cancel"] = 2] = "cancel";
})(RegisterAction || (RegisterAction = {}));


/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2fUu":
/*!***********************************************************************!*\
  !*** ./projects/tc-front/src/app/content/const/routing-path.const.ts ***!
  \***********************************************************************/
/*! exports provided: ROUTING_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING_PATH", function() { return ROUTING_PATH; });
const ROUTING_PATH = {
    /**
     * 新增員
     */
    ADD_PERSONAL_INFO: 'add-personal-info',
    /**
     * 首頁
     */
    HOME: 'home',
    /**
     * 個人資料
     */
    PERSONAL_INFO: 'personal-info',
    /**
     * 課程/活動
     */
    COURSE: 'course',
    /**
     * 測驗
     */
    QUIZ: 'quiz',
    /**
     * 專案
     */
    PROJECTS: 'projects',
};


/***/ }),

/***/ "2stt":
/*!********************************************************************************************!*\
  !*** ./projects/tc-front/src/app/shared/components/singup-modal/singup-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SingupModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupModalComponent", function() { return SingupModalComponent; });
/* harmony import */ var _content_const_icon_path_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../content/const/icon-path.const */ "T41C");
/* harmony import */ var _content_const_register_type_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../content/const/register-type.const */ "ZxlW");
/* harmony import */ var _core_enums_register_action_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/enums/register-action.enum */ "1xBt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SingupModalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u78BA\u8A8D\u5831\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function SingupModalComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u53D6\u6D88\u5831\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function SingupModalComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "2.\u8ACB\u63D0\u524D10\u5206\u9418\u62B5\u9054\uFF0C\u4EE5\u5B8C\u6210\u5831\u5230\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("1.\u53C3\u52A0", ctx_r2.typeWording, "\u6642\uFF0C\u8ACB\u651C\u5E36\u696D\u52D9\u54E1\u767B\u9304\u8B49\u6216\u8EAB\u5206\u8B49\u3002");
} }
function SingupModalComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "1.\u53D6\u6D88\u5F8C\uFF0C\u5982\u9700\u518D\u6B21\u5831\u540D\uFF0C\u8ACB\u6CE8\u610F\u5831\u540D\u6642\u9593\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
class SingupModalComponent {
    constructor(modalRef) {
        this.modalRef = modalRef;
        /** 報名課程 or 報名考試 */
        this.type = 'course';
        this.REGISTER = _content_const_register_type_const__WEBPACK_IMPORTED_MODULE_1__["REGISTER_TYPE"];
        // 報名操作enum
        this.RegisterAction = _core_enums_register_action_enum__WEBPACK_IMPORTED_MODULE_2__["RegisterAction"];
    }
    get ICON_PATH() {
        return _content_const_icon_path_const__WEBPACK_IMPORTED_MODULE_0__["ICON_PATH"];
    }
    ngOnInit() {
        if (this.type === _content_const_register_type_const__WEBPACK_IMPORTED_MODULE_1__["REGISTER_TYPE"].COUSRE) {
            this.typeWording = '課程';
        }
        else {
            this.typeWording = '測驗';
        }
        this.event = { subject: '行銷工具班 - 行動辦公室鳳翔日誌篇', location: '行銷工具班 - 行動辦公室鳳翔日誌篇', date: '110/03/04（四）～110/03/05（五）', time: '09:00～18:00' };
    }
    onSendClick() {
        this.modalRef.triggerOk();
    }
}
SingupModalComponent.ɵfac = function SingupModalComponent_Factory(t) { return new (t || SingupModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"])); };
SingupModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SingupModalComponent, selectors: [["app-singup-modal"]], inputs: { action: "action", event: "event", type: "type" }, decls: 29, vars: 20, consts: [[1, "signup"], [1, "header", "text-center"], [3, "iconType", "iconSize"], [4, "ngIf"], [1, "content"], [1, "info", "pb-3"], [1, "text-secondary", "text-lg"], [1, "reminder"], [1, "footer", "btn-groups"], [3, "mercWidth", "mercSize", "click"], [3, "mercType", "mercWidth", "mercSize", "click"], [1, "text-20", "text-fatty"]], template: function SingupModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "merc-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SingupModalComponent_ng_container_3_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SingupModalComponent_ng_container_4_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u6CE8\u610F\u4E8B\u9805");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, SingupModalComponent_ng_container_22_Template, 5, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, SingupModalComponent_ng_container_23_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "merc-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SingupModalComponent_Template_merc_button_click_25_listener() { return ctx.modalRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u53D6\u6D88");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "merc-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SingupModalComponent_Template_merc_button_click_27_listener() { return ctx.onSendClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u78BA\u8A8D\u9001\u51FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("iconType", ctx.ICON_PATH.ALERT)("iconSize", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.action === ctx.RegisterAction.signup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.action === ctx.RegisterAction.cancel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.typeWording, "\u8CC7\u8A0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.typeWording, "\u540D\u7A31\uFF1A", ctx.event.subject, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.type === ctx.REGISTER.COUSRE ? "\u4E0A\u8AB2\u5730\u5340" : "\u8003\u5340", "\uFF1A", ctx.event.location, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.typeWording, "\u65E5\u671F\uFF1A", ctx.event.date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.typeWording, "\u6642\u9593\uFF1A", ctx.event.time, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.action === ctx.RegisterAction.signup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.action === ctx.RegisterAction.cancel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mercWidth", "lg")("mercSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_5__["MercIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], merc_lib__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]], styles: [".signup[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  max-width: 344px;\n  padding-bottom: 24px;\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Npbmd1cC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFBRiIsImZpbGUiOiJzaW5ndXAtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwe1xuXG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5jb250ZW50e1xuICBtYXgtd2lkdGg6IDM0NHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4LhN":
/*!***************************************!*\
  !*** ./projects/tc-front/src/main.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "bL8K");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "7e7m");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5V4s":
/*!*******************************************************!*\
  !*** ./projects/tc-lib/src/lib/const/device.const.ts ***!
  \*******************************************************/
/*! exports provided: DEVICE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE", function() { return DEVICE; });
const DEVICE = {
    MOBILE: 'mobile',
    PAD: 'pad'
};


/***/ }),

/***/ "7e7m":
/*!***********************************************************!*\
  !*** ./projects/tc-front/src/environments/environment.ts ***!
  \***********************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    appVersion: __webpack_require__(/*! package.json */ "kiQV").version + '-dev',
    production: false,
    DEFAULT_IP: '',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "9MJj":
/*!**********************************************************!*\
  !*** ./projects/tc-front/src/app/content/course/mock.ts ***!
  \**********************************************************/
/*! exports provided: mockTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockTable", function() { return mockTable; });
const mockTable = [
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 0 },
    {
        title: '行銷工具班 - 行動辦公室鳳翔日誌篇', location: '台北', class: '11028',
        startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2
    },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 1 },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 1 },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 },
    { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 },
    {
        title: '行銷工具班 - 行動辦公室鳳翔日誌篇', location: '台北', class: '11028',
        startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2
    },
    {
        title: '行銷工具班 - 行動辦公室鳳翔日誌篇', location: '台北', class: '11028',
        startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2
    },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 1 },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 1 },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 },
    { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 },
    {
        title: '行銷工具班 - 行動辦公室鳳翔日誌篇', location: '台北', class: '11028',
        startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2
    },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 1 },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 1 },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 },
    { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 }, { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 },
    { title: '安安', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 },
    {
        title: '行銷工具班 - 行動辦公室鳳翔日誌篇', location: '台北', class: '11028',
        startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2
    },
    {
        title: '行銷工具班 - 行動辦公室鳳翔日誌篇', location: '台北', class: '11028',
        startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2
    },
    {
        title: '行銷工具班 - 行動辦公室鳳翔日誌篇', location: '台北', class: '11028',
        startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2
    },
    { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 },
    { title: '公會班', location: '台北', class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2 },
    {
        title: '一二三四五六七八九十一二三四五六七八九十', location: '台北',
        class: '11028', startDate: '110/09/08~110/10/01', signDate: '110/09/08~110/10/01', signUp: 2
    },
];


/***/ }),

/***/ "BZNK":
/*!*********************************************************!*\
  !*** ./projects/tc-front/src/app/app-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _content_home_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/home/calendar/calendar.component */ "h30Q");
/* harmony import */ var _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/const/routing-path.const */ "2fUu");
/* harmony import */ var _content_course_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/course/course.component */ "qHqY");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/guard/auth.guard */ "bqKb");
/* harmony import */ var _content_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/home/home.component */ "PlFV");
/* harmony import */ var _content_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/index-page/index-page.component */ "xR/m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__["ROUTING_PATH"].ADD_PERSONAL_INFO,
        loadChildren: () => Promise.all(/*! import() | content-add-personal-info-add-personal-info-module */[__webpack_require__.e("common"), __webpack_require__.e("content-add-personal-info-add-personal-info-module")]).then(__webpack_require__.bind(null, /*! ./content/add-personal-info/add-personal-info.module */ "jrv+")).then(m => m.AddPersonalInfoModule),
        // component: AddPersonalInfoComponent,
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__["ROUTING_PATH"].QUIZ,
        loadChildren: () => __webpack_require__.e(/*! import() | content-quiz-quiz-module */ "content-quiz-quiz-module").then(__webpack_require__.bind(null, /*! ./content/quiz/quiz.module */ "7loa")).then(m => m.QuizModule),
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__["ROUTING_PATH"].COURSE,
        component: _content_course_course_component__WEBPACK_IMPORTED_MODULE_3__["CourseComponent"],
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__["ROUTING_PATH"].PERSONAL_INFO,
        loadChildren: () => Promise.all(/*! import() | content-personal-info-personal-info-module */[__webpack_require__.e("common"), __webpack_require__.e("content-personal-info-personal-info-module")]).then(__webpack_require__.bind(null, /*! ./content/personal-info/personal-info.module */ "5Ks8")).then(m => m.PersonalInfoModule),
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__["ROUTING_PATH"].PROJECTS, loadChildren: () => Promise.all(/*! import() | content-projects-projects-module */[__webpack_require__.e("common"), __webpack_require__.e("content-projects-projects-module")]).then(__webpack_require__.bind(null, /*! ./content/projects/projects.module */ "Mpwn")).then(m => m.ProjectsModule),
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    // {
    //   path: ROUTING_PATH.HOME,
    //   component: App,
    //   canActivate: [AuthGuard]
    // },
    {
        path: _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__["ROUTING_PATH"].HOME,
        component: _content_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: '',
        component: _content_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_6__["IndexPageComponent"],
    },
    {
        path: '**',
        component: _content_home_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"],
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "BlqQ":
/*!***********************************************************************!*\
  !*** ./projects/tc-front/src/app/core/services/permission.service.ts ***!
  \***********************************************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/const/routing-path.const */ "2fUu");
/* harmony import */ var _enums_account_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/account-type.enum */ "riHe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.service */ "TyOg");





class PermissionService {
    constructor(accountService) {
        this.accountService = accountService;
        /**
         * 身分可進入的頁面
         */
        this.canActivatePath = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
    }
    /**
     * TODO: for demo，目前沒作用
     * 依取得身分別判斷可進入的頁面
     */
    initCanActivatePaths() {
        console.log('initCanActivatePaths');
        const accountType = this.accountService.account.account_type;
        switch (accountType) {
            case _enums_account_type_enum__WEBPACK_IMPORTED_MODULE_2__["AccountType"].sales:
                this.canActivatePath.next([
                    _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].HOME,
                    _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].PERSONAL_INFO,
                    _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].COURSE,
                    _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].QUIZ,
                    _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].PROJECTS,
                ]);
                break;
            case _enums_account_type_enum__WEBPACK_IMPORTED_MODULE_2__["AccountType"].newRecruit:
                this.canActivatePath.next([
                    _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].HOME,
                    _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].PERSONAL_INFO,
                    _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].COURSE,
                    _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].QUIZ
                ]);
                break;
            case _enums_account_type_enum__WEBPACK_IMPORTED_MODULE_2__["AccountType"].new:
                this.canActivatePath.next([
                    _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].ADD_PERSONAL_INFO,
                ]);
                break;
            default:
                console.warn('沒拿到 account type');
                this.canActivatePath.next(['']);
                break;
        }
    }
    /**
     * 取得身分可進入的頁面
     */
    getPath() {
        return this.canActivatePath.asObservable();
    }
}
PermissionService.ɵfac = function PermissionService_Factory(t) { return new (t || PermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"])); };
PermissionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PermissionService, factory: PermissionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Dz0X":
/*!****************************************************************!*\
  !*** ./projects/tc-front/src/app/core/services/pwa-service.ts ***!
  \****************************************************************/
/*! exports provided: PwaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwaService", function() { return PwaService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");



class PwaService {
    constructor(swUpdate) {
        this.swUpdate = swUpdate;
    }
    checkForUpdates() {
        this.subAvailable =
            this.subAvailable ||
                this.swUpdate.available.subscribe(() => {
                    this.swUpdate.activateUpdate().then(() => document.location.reload());
                });
        if (this.swUpdate.isEnabled) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(6 * 60 * 60).subscribe(() => this.swUpdate.checkForUpdate());
        }
    }
}
PwaService.ɵfac = function PwaService_Factory(t) { return new (t || PwaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"])); };
PwaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PwaService, factory: PwaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ENPd":
/*!***************************************************!*\
  !*** ./projects/tc-lib/src/lib/tc-lib.service.ts ***!
  \***************************************************/
/*! exports provided: TcLibService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TcLibService", function() { return TcLibService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TcLibService {
    constructor() { }
}
TcLibService.ɵfac = function TcLibService_Factory(t) { return new (t || TcLibService)(); };
TcLibService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TcLibService, factory: TcLibService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "F2Bu":
/*!**************************************************!*\
  !*** ./projects/tc-lib/src/lib/nz/nz.modules.ts ***!
  \**************************************************/
/*! exports provided: NgZorroAntdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgZorroAntdModule", function() { return NgZorroAntdModule; });
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/affix */ "4hBO");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "7vlg");
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ "Jioy");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/back-top */ "KAwd");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/calendar */ "Py9c");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/carousel */ "Etcd");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "q0Us");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/trans-button */ "exsu");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/mention */ "WCIo");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "3/1E");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-zorro-antd/rate */ "L1u3");
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng-zorro-antd/result */ "Mean");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng-zorro-antd/slider */ "tAs6");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "A07A");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng-zorro-antd/steps */ "OEtX");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ng-zorro-antd/switch */ "EGpF");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "ix5O");
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ng-zorro-antd/timeline */ "ncdi");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ng-zorro-antd/transfer */ "GuFl");
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ng-zorro-antd/tree */ "nxWG");
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ "VXpv");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ng-zorro-antd/resizable */ "1zMu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/core */ "fXoL");


































































class NgZorroAntdModule {
}
NgZorroAntdModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_65__["ɵɵdefineNgModule"]({ type: NgZorroAntdModule });
NgZorroAntdModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_65__["ɵɵdefineInjector"]({ factory: function NgZorroAntdModule_Factory(t) { return new (t || NgZorroAntdModule)(); }, imports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_0__["NzAffixModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__["NzAlertModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__["NzAnchorModule"],
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__["NzAutocompleteModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_5__["NzBackTopModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__["NzBadgeModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__["NzBreadCrumbModule"],
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_9__["NzCalendarModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardModule"],
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_11__["NzCarouselModule"],
        ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_12__["NzCascaderModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_14__["NzCollapseModule"],
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_15__["NzCommentModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__["NzDatePickerModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_20__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_22__["NzDrawerModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__["NzDropDownModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_24__["NzEmptyModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzGridModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__["NzI18nModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_29__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_30__["NzInputNumberModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_31__["NzLayoutModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_32__["NzListModule"],
        ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_33__["NzMentionModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_34__["NzMenuModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_35__["NzMessageModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_36__["NzModalModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_37__["NzNotificationModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_38__["NzPageHeaderModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_39__["NzPaginationModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_40__["NzPopconfirmModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_41__["NzPopoverModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_42__["NzProgressModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_43__["NzRadioModule"],
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_44__["NzRateModule"],
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_45__["NzResultModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_46__["NzSelectModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_47__["NzSkeletonModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_48__["NzSliderModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_49__["NzSpinModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_50__["NzStatisticModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_51__["NzStepsModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_52__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_53__["NzTableModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_54__["NzTabsModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_55__["NzTagModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_56__["NzTimePickerModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_57__["NzTimelineModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_58__["NzToolTipModule"],
        ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_17__["NzTransButtonModule"],
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_59__["NzTransferModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_60__["NzTreeModule"],
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_61__["NzTreeSelectModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_62__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_63__["NzUploadModule"],
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__["NzWaveModule"],
        ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_64__["NzResizableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_65__["ɵɵsetNgModuleScope"](NgZorroAntdModule, { exports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_0__["NzAffixModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__["NzAlertModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__["NzAnchorModule"],
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__["NzAutocompleteModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_5__["NzBackTopModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__["NzBadgeModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__["NzBreadCrumbModule"],
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_9__["NzCalendarModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardModule"],
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_11__["NzCarouselModule"],
        ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_12__["NzCascaderModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_14__["NzCollapseModule"],
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_15__["NzCommentModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__["NzDatePickerModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_20__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_22__["NzDrawerModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__["NzDropDownModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_24__["NzEmptyModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzGridModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__["NzI18nModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_29__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_30__["NzInputNumberModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_31__["NzLayoutModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_32__["NzListModule"],
        ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_33__["NzMentionModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_34__["NzMenuModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_35__["NzMessageModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_36__["NzModalModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_37__["NzNotificationModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_38__["NzPageHeaderModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_39__["NzPaginationModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_40__["NzPopconfirmModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_41__["NzPopoverModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_42__["NzProgressModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_43__["NzRadioModule"],
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_44__["NzRateModule"],
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_45__["NzResultModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_46__["NzSelectModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_47__["NzSkeletonModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_48__["NzSliderModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_49__["NzSpinModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_50__["NzStatisticModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_51__["NzStepsModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_52__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_53__["NzTableModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_54__["NzTabsModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_55__["NzTagModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_56__["NzTimePickerModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_57__["NzTimelineModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_58__["NzToolTipModule"],
        ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_17__["NzTransButtonModule"],
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_59__["NzTransferModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_60__["NzTreeModule"],
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_61__["NzTreeSelectModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_62__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_63__["NzUploadModule"],
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__["NzWaveModule"],
        ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_64__["NzResizableModule"]] }); })();


/***/ }),

/***/ "K2EU":
/*!****************************************************************!*\
  !*** ./projects/tc-front/src/app/core/models/account.model.ts ***!
  \****************************************************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
class Account {
}


/***/ }),

/***/ "LmJt":
/*!***********************************************************!*\
  !*** ./projects/tc-back/src/app/shared/shared.service.ts ***!
  \***********************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SharedService {
    constructor() {
        this.userDeviceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * 使用者使用的裝置
         */
        this.userDevice = '';
    }
    set setUserDeviceSubject(value) {
        this.userDeviceSubject.next(value);
        this.userDevice = value;
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "M09Z":
/*!**********************************************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/home/calendar/modal/calendar-event-modal/calendar-event-modal.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CalendarEventModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventModalComponent", function() { return CalendarEventModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merc-lib */ "c3fJ");


class CalendarEventModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
CalendarEventModalComponent.ɵfac = function CalendarEventModalComponent_Factory(t) { return new (t || CalendarEventModalComponent)(); };
CalendarEventModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarEventModalComponent, selectors: [["app-calendar-event-modal"]], inputs: { arg: "arg" }, decls: 25, vars: 0, consts: [["headerColor", "red-to-orange"], [1, "desc"]], template: function CalendarEventModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "merc-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "merc-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u884C\u92B7\u5DE5\u5177\u73ED - \u884C\u52D5\u8FA6\u516C\u5BA4\u9CF3\u7FD4\u65E5\u8A8C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "merc-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u8A13\u7DF4\u65E5\u671F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "5\u67087\u65E5\uFF08\u4E94\uFF09\uFF5E5\u67089\u65E5\uFF08\u65E5\uFF09 14\uFF1A00\uFF5E18\uFF1A00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u8A13\u7DF4\u5730\u9EDE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u53F0\u5317\u5E02\u4FE1\u7FA9\u5340\u4FE1\u7FA9\u8DEF\u4E94\u6BB5150\u5DF72\u865F B2 107\u6703\u8B70\u5BA4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u8A13\u7DF4\u5167\u5BB9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u6559\u5C0E\u5982\u4F55\u64CD\u4F5C\u8207\u64B0\u5BEB\u9CF3\u7FD4\u65E5\u8A8C\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u6CE8\u610F\u4E8B\u9805 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u53C3\u52A0\u6642\uFF0C\u8ACB\u651C\u5E36\u53EF\u8FA8\u5225\u500B\u4EBA\u8EAB\u5206\u4E4B\u696D\u52D9\u54E1\u767B\u9304\u8B49\u6216\u8EAB\u5206\u8B49\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u8ACB\u63D0\u524D10\u5206\u9418\u62B5\u9054\uFF0C\u4EE5\u5B8C\u6210\u5831\u5230\u624B\u7E8C\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u5982\u6709\u4EFB\u4F55\u7591\u554F\uFF0C\u8ACB\u6D3D\u5340\u90E8\u5E02\u5834\u8A13\u7DF4\u8655/\u79D1\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_1__["MercCardComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["ɵa"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["ɵb"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-card[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0;\n  border: rgba(153, 153, 153, 0.2) 1px solid;\n  box-shadow: none;\n  background-color: #fff;\n  border-radius: 6px;\n  \n  \n  \n  \n  \n  \n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-self: center;\n  font-size: 25px;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 6px 6px 0 0;\n  color: #fff;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-content[_ngcontent-%COMP%] {\n  display: block;\n  padding: 35px 15px;\n}\n.merc-card.merc-card-primary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\n.merc-card.merc-card-primary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\n.merc-card.merc-card-secondary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\n.merc-card.merc-card-secondary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\n.merc-card.merc-card-third[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\n.merc-card.merc-card-third-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary-variant[_ngcontent-%COMP%] {\n  color: #ec6122;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary[_ngcontent-%COMP%] {\n  color: #ff6621;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary-variant[_ngcontent-%COMP%] {\n  color: #f8c73f;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third[_ngcontent-%COMP%] {\n  color: #58a8dd;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third-variant[_ngcontent-%COMP%] {\n  color: #fffaf1;\n}\n.merc-card.merc-card-small[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-card.merc-card-normal[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.merc-card.merc-card-large[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-table[_ngcontent-%COMP%] {\n  \n  \n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-header[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%] {\n  overflow-y: overlay !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > .ant-table-row[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]   .ant-table-column-has-sorters[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-placeholder[_ngcontent-%COMP%]   .ant-table-expanded-row-fixed[_ngcontent-%COMP%] {\n  margin: -4px -8px;\n  min-width: 100%;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\nmerc-table[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 0;\n  background-color: transparent;\n  position: absolute;\n  top: 50%;\n  right: 26px;\n  transform: translateY(-50%);\n  display: flex;\n  flex-wrap: nowrap;\n  transition: opacity 0.3s, background-color 0.3s;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) {\n  background-color: #c9c9c9;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)   .hover-to-edit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nmerc-table.merc-table-primary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\nmerc-table.merc-table-primary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\nmerc-table.merc-table-secondary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\nmerc-table.merc-table-secondary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\nmerc-table.merc-table-third[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\nmerc-table.merc-table-third-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-flex-table-primary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #e6002d;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #e6002d;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ec6122;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ec6122;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ff6621;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ff6621;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #f8c73f;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #f8c73f;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #58a8dd;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #58a8dd;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #fffaf1;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #fffaf1;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-tab[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  \n  \n  \n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%] {\n  border: 0;\n  margin-bottom: 0px;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]::before {\n  border-bottom: hidden;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  border: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6002d;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6002d;\n  border-bottom-width: 0px !important;\n  padding: 0 15px;\n  height: 35px;\n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%]   .ant-tabs-close-x[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 16px;\n  height: 18px;\n  margin-right: 0 !important;\n  vertical-align: middle;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%]   .ant-tabs-tab-btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #fff;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-small[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 25px;\n}\nmerc-tab.merc-tab-normal[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 35px;\n}\nmerc-tab.merc-tab-large[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.toggle-float-btn[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #e6002d;\n  color: white;\n  border: 1px solid #e6002d;\n  border-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  height: 40px;\n  padding: 0 16px;\n  line-height: 38px;\n  cursor: pointer;\n}\n.toggle-float-btn[_ngcontent-%COMP%]   .toggle-wrap[_ngcontent-%COMP%] {\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n}\nmerc-tab[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\nmerc-tab[mercType=primary][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\nmerc-tab[mercType=primaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\nmerc-tab[mercType=secondary][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\nmerc-tab[mercType=secondaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\nmerc-tab[mercType=third][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\nmerc-tab[mercType=thirdVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\nmerc-tab[mercSize=small][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 30px;\n}\nmerc-tab[mercSize=normal][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 42px;\n}\nmerc-tab[mercSize=large][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  \n  \n  \n  \n  \n  \n  \n}\n.merc-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 2px 0 rgba(21, 28, 42, 0.17);\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #bd0025;\n  border: 1px solid #bd0025;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #e6002d;\n  background-color: #fff;\n  color: #e6002d;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #9a001e;\n  border: 1px solid #9a001e;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d34e12;\n  border: 1px solid #d34e12;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ec6122;\n  background-color: #fff;\n  color: #ec6122;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b2420f;\n  border: 1px solid #b2420f;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f74d00;\n  border: 1px solid #f74d00;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ff6621;\n  background-color: #fff;\n  color: #ff6621;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #d44200;\n  border: 1px solid #d44200;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f7bc18;\n  border: 1px solid #f7bc18;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #f8c73f;\n  background-color: #fff;\n  color: #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #e2a908;\n  border: 1px solid #e2a908;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #3696d6;\n  border: 1px solid #3696d6;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #58a8dd;\n  background-color: #fff;\n  color: #58a8dd;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #2784c1;\n  border: 1px solid #2784c1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ffebc8;\n  border: 1px solid #ffebc8;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #fffaf1;\n  background-color: #fff;\n  color: #fffaf1;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #ffdfa5;\n  border: 1px solid #ffdfa5;\n}\n.merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active    > *[_ngcontent-%COMP%], .merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover    > *[_ngcontent-%COMP%] {\n  transition: filter 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  filter: brightness(0.6);\n}\n.merc-btn.merc-btn-small[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-btn.merc-btn-normal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.merc-btn.merc-btn-large[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.merc-btn.merc-btn-xs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.merc-btn.merc-btn-sm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.merc-btn.merc-btn-md[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.merc-btn.merc-btn-lg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.merc-btn.merc-btn-xl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.merc-btn.disabled[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.25);\n  background: #f5f5f5;\n  border-color: #d9d9d9;\n  text-shadow: none;\n  box-shadow: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  max-width: 200px;\n  min-width: 160px;\n  position: relative;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%]:hover   .clear[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 7px;\n  padding: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: white;\n  z-index: 999;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .selected-date[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 115%;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  min-width: 200px;\n  background-color: #fff;\n  z-index: 999;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 2px 0;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 16px;\n  text-align: center;\n  color: #e6002d;\n  display: inline-block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .week[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .months[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .not-present[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected.not-present[_ngcontent-%COMP%] {\n  background-color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #e6002d;\n  color: #e6002d;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today.not-present[_ngcontent-%COMP%] {\n  color: #efefef;\n  cursor: not-allowed;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%] {\n  color: #efefef;\n  margin: 10px;\n  opacity: 0.8;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .suffix-icon[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n .merc-year-select .ant-select-selection-item {\n  padding-right: 15px !important;\n}\n .merc-year-select .ant-select-item {\n  padding: 5px 8px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-calendar[_ngcontent-%COMP%]   .rocYear[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n@media screen and (max-width: 750px) {\n  .merc-calendar[_ngcontent-%COMP%]   .rocYear[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 45px;\n    justify-content: center;\n  }\n}\n.merc-calendar[_ngcontent-%COMP%]   .rocYear-title[_ngcontent-%COMP%] {\n  position: relative;\n  top: 38px;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: #ff6621 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[disabled][_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n  border: #d9d9d9 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:hover:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:active:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .focus-today[_ngcontent-%COMP%] {\n  background-color: #ff8954;\n  border: #ff8954 1px solid;\n}\nmerc-card[_ngcontent-%COMP%] {\n  border: 0px !important;\n}\nmerc-card[_ngcontent-%COMP%]   merc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: -webkit-fit-content !important;\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n  \n}\nmerc-card[_ngcontent-%COMP%]   merc-card-header[headerColor=red-to-orange][_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #e6002d, #ff6621);\n  color: #fff;\n}\nmerc-card[_ngcontent-%COMP%]   merc-card-content[_ngcontent-%COMP%] {\n  padding: 20px 35px !important;\n}\n@media screen and (max-width: 575px) {\n  merc-card[_ngcontent-%COMP%]   merc-card-content[_ngcontent-%COMP%] {\n    padding: 20px 10px !important;\n  }\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  \n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 16px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u2022\";\n  color: #ec6122;\n  \n  font-weight: bold;\n  \n  display: inline-block;\n  \n  width: 1em;\n  \n  margin-left: -1em;\n  \n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NhbGVuZGFyLWV2ZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY3VzdG9tLXNldHRpbmcuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvc3R5bGVzL2N1c3RvbS1zZXR0aW5nLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL3N0eWxlcy9fY29tcG9uZW50cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9tZXJjLWNhcmQvbWVyYy1jYXJkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9tZXJjLXRhYmxlL21lcmMtdGFibGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2ZsZXgtdGFibGUvZmxleC10YWJsZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWVyYy10YWIvbWVyYy10YWIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lcmMtdGFiL3RvZ2dsZS1jb2xsYXBzZS90b2dnbGUtY29sbGFwc2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2RhdGUvY29tcG9uZW50cy9yb2MtZGF0ZS1waWNrZXIvcm9jLWRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9kYXRlL2NvbXBvbmVudHMvbWVyYy1jYWxlbmRhci9tZXJjLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixhQUFBO0FBMEJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QUNsSEEsd0RBQUE7QUFDQSxhQUFBO0FBdUJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QUNoSEEsYUFBQTtBREFBLHdEQUFBO0FBQ0EsYUFBQTtBQXVCQSxZQUFBO0FBY0EsWUFBQTtBQUNBLG1CQUFBO0FBaUJBLGlCQUFBO0FBRUEsb0JBQUE7QUFtQkEsa0JBQUE7QUFFQSxxQkFBQTtBQW9CQSxtQkFBQTtBQWFBLGlCQUFBO0FFOUdBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Es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NEROLHlCQUFBO0FUbS9CWjtBU2wvQlk7RUFFSSx5QkFBQTtFQUNBLHlCQUFBO0FUbS9CaEI7QVNoL0JRO0VBQ0kseUJBQUE7RUFDQSxzQlJ4REU7RVF5REYsY1J0RU07QUR3akNsQjtBU2ovQlk7RUFFSSxjQUFBO0VBQ0EseUJBQUE7QVRrL0JoQjtBUzUrQlE7RUFDSSxXUnBFRTtFUXFFRix5QlJoRmM7RVFpRmQseUJBQUE7QVQ4K0JaO0FTNytCWTtFQUVJLHlCQUFBO0VBQ0EseUJBQUE7QVQ4K0JoQjtBUzMrQlE7RUFDSSx5QkFBQTtFQUNBLHNCUi9FRTtFUWdGRixjUjNGYztBRHdrQzFCO0FTNStCWTtFQUVJLGNBQUE7RUFDQSx5QkFBQTtBVDYrQmhCO0FTditCUTtFQUNJLFdSM0ZFO0VRNEZGLHlCUnJHRTtFUXNHRix5QkFBQTtBVHkrQlo7QVN4K0JZO0VBRUkseUJBQUE7RUFDQSx5QkFBQTtBVHkrQmhCO0FTdCtCUTtFQUNJLHlCQUFBO0VBQ0Esc0JSdEdFO0VRdUdGLGNSaEhFO0FEd2xDZDtBU3YrQlk7RUFFSSxjQUFBO0VBQ0EseUJBQUE7QVR3K0JoQjtBU2wrQlE7RUFDSSxXUmxIRTtFUW1IRix5QlIxSFU7RVEySFYseUJBQUE7QVRvK0JaO0FTbitCWTtFQUVJLHlCQUFBO0VBQ0EseUJBQUE7QVRvK0JoQjtBU2orQlE7RUFDSSx5QkFBQTtFQUNBLHNCUjdIRTtFUThIRixjUnJJVTtBRHdtQ3RCO0FTbCtCWTtFQUVJLGNBQUE7RUFDQSx5QkFBQTtBVG0rQmhCO0FTMzlCWTtFQUNJLDREQUFBO0VBQ0EsdUJBQUE7QVQ2OUJoQjtBU3I5Qkk7RUFDSSxZQUFBO0FUdTlCUjtBU3A5Qkk7RUFDSSxZQUFBO0FUczlCUjtBU245Qkk7RUFDSSxZQUFBO0FUcTlCUjtBUy84Qkk7RUFDSSxXQUFBO0FUaTlCUjtBUzk4Qkk7RUFDSSxXQUFBO0FUZzlCUjtBUzc4Qkk7RUFDSSxZQUFBO0FUKzhCUjtBUzU4Qkk7RUFDSSxZQUFBO0FUODhCUjtBUzM4Qkk7RUFDSSxZQUFBO0FUNjhCUjtBU3g4Qkk7RUFDSSww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QTtFQUFBLG1DQUFBO0VBQUEsOEJBQUE7RUFDQSw0QkFBQTtBQXcxQ1I7QUF2MUNRO0VBQ0ksdURBQUE7RUFDQSxXQ1NFO0FEZzFDZDtBQXQxQ0k7RUFDSSw2QkFBQTtBQXcxQ1I7QUF2MUNRO0VBRko7SUFHUSw2QkFBQTtFQTAxQ1Y7QUFDRjtBQXYxQ0E7RUFDSSxnQkFBQTtFQUFrQiwyQkFBQTtBQTIxQ3RCO0FBMTFDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBNDFDUjtBQTMxQ1E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUE2MUNaO0FBejFDQTtFQUNJLFlBQUE7RUFDQSxjQzlCb0I7RUQ4QlcscUJBQUE7RUFDL0IsaUJBQUE7RUFBbUIsOEJBQUE7RUFDbkIscUJBQUE7RUFBdUIsd0RBQUE7RUFDdkIsVUFBQTtFQUFZLDRDQUFBO0VBQ1osaUJBQUE7RUFBbUIsNENBQUE7RUFDbkIsZUFBQTtBQWkyQ0oiLCJmaWxlIjoiY2FsZW5kYXItZXZlbnQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG5tZXJjLWNhcmQge1xuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8qIGNhcmQgaGVhZGVyIGNvbG9yIHN0YXJ0ICovXG4gICAgICAgICZbaGVhZGVyQ29sb3I9XCJyZWQtdG8tb3JhbmdlXCJdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHByaW1hcnktY29sb3IsICRzZWNvbmRhcnktY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtZXJjLWNhcmQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMzVweCAhaW1wb3J0YW50O1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgYnVsbGV0cyAqL1xuICAgIGxpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgLmRlc2Mge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbWQpO1xuICAgICAgICB9XG4gICAgfVxufVxudWwgbGk6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjJcIjtcbiAgICBjb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjsgLyogQ2hhbmdlIHRoZSBjb2xvciAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvKiBJZiB5b3Ugd2FudCBpdCB0byBiZSBib2xkICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiBOZWVkZWQgdG8gYWRkIHNwYWNlIGJldHdlZW4gdGhlIGJ1bGxldCBhbmQgdGhlIHRleHQgKi9cbiAgICB3aWR0aDogMWVtOyAvKiBBbHNvIG5lZWRlZCBmb3Igc3BhY2UgKHR3ZWFrIGlmIG5lZWRlZCkgKi9cbiAgICBtYXJnaW4tbGVmdDogLTFlbTsgLyogQWxzbyBuZWVkZWQgZm9yIHNwYWNlICh0d2VhayBpZiBuZWVkZWQpICovXG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuIiwiLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCwgMC44KTtcbi8vIOS4u+imgeiJslxuJHByaW1hcnktY29sb3I6ICNlNjAwMmQ7XG4vLyDkuLvopoHoibLororlvaJcbiRwcmltYXJ5LXZhcmlhbnQtY29sb3I6ICNlYzYxMjI7XG4vLyDmrKHopoHoibJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY2MjE7XG4vLyDmrKHopoHoibLororlvaJcbiRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjogI2Y4YzczZjtcbi8vIOesrOS4ieiJslxuJHRoaXJkLWNvbG9yOiAjNThhOGRkO1xuLy8g56ys5LiJ6Imy6K6K5b2iXG4kdGhpcmQtdmFyaWFudC1jb2xvcjogI2ZmZmFmMTtcblxuLy8g5re654GwXG4kY29sb3ItbGlnaHQtZ3JheTogI2VmZWZlZjtcbi8vIOa3seeBsFxuJGNvbG9yLWRhcmstZ3JheTogIzMzMzMzMztcbi8vIOeZvVxuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLXNpbHZlcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjIpO1xuJGNvbG9yLWxpZ2h0ZXItZ3JheTogI2Y5ZjlmOTtcbiRjb2xvci1ncmVlbjogIzg3Yjg0ODtcblxuLyoqIOWfuuekjuWFg+S7tuioreWumiAqL1xuJGZvbnQtc3o6IChcbiAgeGw6IDI1cHgsXG4gIGxnOiAxOHB4LFxuICBtZDogMTZweCxcbiAgc206IDE0cHgsXG4gIHhzOiAxMnB4LFxuKTtcblxuJGZvbnQtd2VpZ2h0OiAoXG4gIGZhdHR5OiA2MDAsXG4gIG5vcm1hbDogbm9ybWFsLFxuKTtcblxuLyoqIOW4uOeUqOWFg+S7tuioreWumiAqL1xuLyogYmFzZSBidG4gc3RhcnQgKi9cbiRidG46IChcbiAgYm9yZGVyLXJhZGl1czogM3B4LFxuICBzaGFkb3c6IDFweCAxcHggMnB4IDAgcmdiYSgyMSwgMjgsIDQyLCAwLjE3KSxcbik7XG4kYnRuLWhlaWdodDogKFxuICBsZzogNDBweCxcbiAgbWQ6IDM1cHgsXG4gIHNtOiAzMHB4LFxuKTtcbiRidG4td2lkdGg6IChcbiAgeGw6IDIwMHB4LFxuICBsZzogMTYwcHgsXG4gIG1kOiAxMjBweCxcbiAgc206IDkwcHgsXG4gIHhzOiA3MHB4LFxuKTtcbi8qIGJhc2UgYnRuIGVuZCAqL1xuXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cbiRiYXNlLWNhcmQ6IChcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLFxuICBib3gtc2hhZG93OiBub25lLFxuICBwYWRkaW5nOiAwLFxuICBib3JkZXI6ICRjb2xvci1zaWx2ZXIgMXB4IHNvbGlkLFxuICBib3JkZXItcmFkaXVzOiA2cHgsXG4pO1xuXG4kYmFzZS1jYXJkLWhlYWRlcjogKFxuICBhbGlnbi1zZWxmOiBjZW50ZXIsXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgeGwpLFxuICBmb250LXdlaWdodDogbWFwLWdldCgkZm9udC13ZWlnaHQsIGZhdHR5KSxcbiAgcGFkZGluZzogMTBweCAyMHB4LFxuKTtcblxuJGJhc2UtY2FyZC1jb250ZW50OiAoXG4gIHBhZGRpbmc6IDM1cHggMTVweCxcbik7XG4vKiogYmFzZSBjYXJkIGVuZCovXG5cbi8qIGJhc2UgdGFibGUgc3RhcnQgKi9cbiRiYXNlLXRhYmxlOiAoXG4gIC8vIGhvdmVyIOmhj+iJslxuICBob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLWxpZ2h0LWdyYXksIDE1JSksXG4gIC8vIOmWk+malOiJslxuICBldmVuLWNvbC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3IsXG4gIC8vIOWck+inklxuICByYWRpdXM6IDdweCxcbiAgLy8g6Zmw5b2xXG4gIHNoYWRvdzogMXB4IDJweCA0cHggI2Q1ZDVkNSxcbiAgLy8g6KGo6aCt44CB5YWn5a6577yIdGjjgIF0ZO+8iSDplpPpmpRcbiAgcGFkZGluZzogOHB4IDhweCxcbiAgLy8g5omL5qmf54mI6KGo6aCt44CB5YWn5a6577yIdGjjgIF0ZO+8iSDplpPpmpTvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBtby1wYWRkaW5nOiAzcHggOHB4LFxuICAvLyDlub5weOS7peS4i+S9v+eUqOaJi+apn+eJiO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIGJyZWFrLXBvaW50OiA3NjdweCxcbiAgLy8g5qyE5L2N5LiL5pa555qEYm9yZGVyLWJvdHRvbe+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLWJvcmRlci1ib3R0b20td2lkdGg6IDBweFxuKTtcblxuLyogYmFzZSB0YWIgc3RhcnQgKi9cbiRiYXNlLXRhYjogKFxuICAvLyDpoY/oibIobWVyYy10YWIg5pyq5YKz5YWlIG1lcmNUeXBlIOaZguacieaViClcbiAgdGFiLWNvbG9yOiAkcHJpbWFyeS1jb2xvcixcbiAgLy8gdGFiIOmCiuahhlxuICB0YWItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIC8vIGNvbnRlbnQg6YKK5qGGXG4gIGNvbnRlbnQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIC8vIOWck+inklxuICByYWRpdXM6IDdweCxcbiAgLy8g5a2X6auU5aSn5bCPXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbGcpXG4pO1xuLyogYmFzZSB0YWIgZW5kICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9zdHlsZXMvbWVyYy1saWIuc2Nzc1wiO1xuIiwiLyog5q2kc2Nzc+eCuuWFg+S7tuWFp+eahCBjdXN0b20tc2V0dGluZ++8jOiIh+WcluabuOmkqOWFqOWfn+eahCBjdXN0b20tc2V0dGluZyDkuI3lkIwgKi9cbi8qKiDln7rnpI7lip/og73oibLoqK3lrpogKi9cbiRjb2xvci13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRjb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOCkgIWRlZmF1bHQ7XG4vLyDkuLvopoHoibJcbiRwcmltYXJ5LWNvbG9yOiAjYjllMWU0ICFkZWZhdWx0O1xuLy8g5Li76KaB6Imy6K6K5b2iXG4kcHJpbWFyeS12YXJpYW50LWNvbG9yOiAjNTRiZTlmICFkZWZhdWx0O1xuLy8g5qyh6KaB6ImyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNGI4YWM1ICFkZWZhdWx0O1xuLy8g5qyh6KaB6Imy6K6K5b2iXG4kc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I6ICNlNmYzZjcgIWRlZmF1bHQ7XG4vLyDnrKzkuInoibJcbiR0aGlyZC1jb2xvcjogIzgwMDA4MCAhZGVmYXVsdDtcbi8vIOesrOS4ieiJsuiuiuW9olxuJHRoaXJkLXZhcmlhbnQtY29sb3I6ICNlZWQ3ZWQgIWRlZmF1bHQ7XG5cbi8vIOa3uueBsFxuJGNvbG9yLWxpZ2h0LWdyYXk6ICNlNWU1ZTUgIWRlZmF1bHQ7XG5cbi8vIOmhj+iJsuWumue+qeWMhVxuJGNvbG9yU2V0OiBcInByaW1hcnlcIiAkcHJpbWFyeS1jb2xvciwgXCJwcmltYXJ5LXZhcmlhbnRcIiAkcHJpbWFyeS12YXJpYW50LWNvbG9yLCBcInNlY29uZGFyeVwiICRzZWNvbmRhcnktY29sb3IsXG4gIFwic2Vjb25kYXJ5LXZhcmlhbnRcIiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3IsIFwidGhpcmRcIiAkdGhpcmQtY29sb3IsIFwidGhpcmQtdmFyaWFudFwiICR0aGlyZC12YXJpYW50LWNvbG9yO1xuXG4vKiog5Z+656SO5YWD5Lu26Kit5a6aICovXG4kZm9udC1zejogKFxuICB4bDogMzBweCxcbiAgbGc6IDE4cHgsXG4gIG1kOiAxNnB4LFxuICBzbTogMTRweCxcbiAgeHM6IDEycHgsXG4pICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQ6IChcbiAgZmF0dHk6IDYwMCxcbiAgbm9ybWFsOiBub3JtYWwsXG4pICFkZWZhdWx0O1xuXG4vKiog5bi455So5YWD5Lu26Kit5a6aICovXG4vKiBiYXNlIGJ0biBzdGFydCAqL1xuJGJ0bjogKFxuICBib3JkZXItcmFkaXVzOiA3cHgsXG4gIHNoYWRvdzogMXB4IDFweCAycHggMCByZ2JhKDIxLCAyOCwgNDIsIDAuMTcpLFxuKSAhZGVmYXVsdDtcbiRidG4taGVpZ2h0OiAoXG4gIGxnOiA0MHB4LFxuICBtZDogMzVweCxcbiAgc206IDMwcHgsXG4pICFkZWZhdWx0O1xuJGJ0bi13aWR0aDogKFxuICB4bDogMjAwcHgsXG4gIGxnOiAxNTBweCxcbiAgbWQ6IDEyMHB4LFxuICBzbTogOTBweCxcbiAgeHM6IDYwcHgsXG4pICFkZWZhdWx0O1xuLyogYmFzZSBidG4gZW5kICovXG5cbi8qKiBiYXNlIGNhcmQgc3RhcnQqL1xuJGJhc2UtY2FyZDogKFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUsXG4gIGJveC1zaGFkb3c6IG5vbmUsXG4gIHBhZGRpbmc6IDAsXG4gIGJvcmRlcjogMCxcbiAgYm9yZGVyLXJhZGl1czogNnB4LFxuKSAhZGVmYXVsdDtcblxuJGJhc2UtY2FyZC1oZWFkZXI6IChcbiAgYWxpZ24tc2VsZjogY2VudGVyLFxuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIGxnKSxcbiAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJGZvbnQtd2VpZ2h0LCBmYXR0eSksXG4gIHBhZGRpbmc6IDAgMTVweCxcbikgIWRlZmF1bHQ7XG5cbiRiYXNlLWNhcmQtY29udGVudDogKFxuICBwYWRkaW5nOiAxMHB4IDE1cHgsXG4pICFkZWZhdWx0O1xuLyoqIGJhc2UgY2FyZCBlbmQqL1xuXG4vKiBiYXNlIHRhYmxlIHN0YXJ0ICovXG4kYmFzZS10YWJsZTogKFxuICAvLyBob3ZlciDpoY/oibJcbiAgaG92ZXItYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1saWdodC1ncmF5LCAxNSUpLFxuICAvLyDplpPpmpToibJcbiAgZXZlbi1jb2wtY29sb3I6ICRjb2xvci1saWdodC1ncmF5LFxuICAvLyDlnJPop5JcbiAgcmFkaXVzOiA3cHgsXG4gIC8vIOmZsOW9sVxuICBzaGFkb3c6IDFweCAycHggNHB4ICNkNWQ1ZDUsXG4gIC8vIOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqUXG4gIHBhZGRpbmc6IDRweCA4cHgsXG4gIC8vIOaJi+apn+eJiOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqU77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcbiAgbW8tcGFkZGluZzogMTBweCA4cHgsXG4gIC8vIOW5vnB45Lul5LiL5L2/55So5omL5qmf54mI77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcbiAgYnJlYWstcG9pbnQ6IDk5MXB4LFxuICAvLyDmrITkvY3kuIvmlrnnmoRib3JkZXItYm90dG9t77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcbiAgbW8tYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4XG4pICFkZWZhdWx0O1xuXG4vKiBiYXNlIHRhYiBzdGFydCAqL1xuJGJhc2UtdGFiOiAoXG4gIC8vIOmhj+iJsihtZXJjLXRhYiDmnKrlgrPlhaUgbWVyY1R5cGUg5pmC5pyJ5pWIKVxuICB0YWItY29sb3I6ICRwcmltYXJ5LWNvbG9yLFxuICAvLyB0YWIg57eo5qGGXG4gIHRhYi1ib3JkZXItd2lkdGg6IDFweCxcbiAgLy8gY29udGVudCDnt6jmoYZcbiAgY29udGVudC1ib3JkZXItd2lkdGg6IDEwcHgsXG4gIC8vIOWck+inklxuICByYWRpdXM6IDdweCxcbiAgLy8g5a2X6auU5aSn5bCPXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbGcpXG4pICFkZWZhdWx0O1xuLyogYmFzZSB0YWIgZW5kICovXG4iLCIvKiDlhYPku7Ygc3R5bGUgKi9cbkBpbXBvcnQgXCIuLi9saWIvY29tcG9uZW50cy9tZXJjLWNhcmQvbWVyYy1jYXJkLmNvbXBvbmVudC5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvbWVyYy10YWJsZS9tZXJjLXRhYmxlLmNvbXBvbmVudC5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvZmxleC10YWJsZS9mbGV4LXRhYmxlLmNvbXBvbmVudC5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvbWVyYy10YWIvbWVyYy10YWIuY29tcG9uZW50LnNjc3NcIjtcbkBpbXBvcnQgXCIuLi9saWIvY29tcG9uZW50cy9tZXJjLXRhYi90b2dnbGUtY29sbGFwc2UvdG9nZ2xlLWNvbGxhcHNlLmNvbXBvbmVudC5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2RhdGUvY29tcG9uZW50cy9yb2MtZGF0ZS1waWNrZXIvcm9jLWRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vZGF0ZS9jb21wb25lbnRzL21lcmMtY2FsZW5kYXIvbWVyYy1jYWxlbmRhci5jb21wb25lbnQuc2Nzc1wiO1xuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuLm1lcmMtY2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS1jYXJkLCBwYWRkaW5nKTtcbiAgICBib3JkZXI6IG1hcC1nZXQoJGJhc2UtY2FyZCwgYm9yZGVyKTtcbiAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJveC1zaGFkb3cpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtY2FyZCwgYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkYmFzZS1jYXJkLCBib3JkZXItcmFkaXVzKTtcblxuICAgIC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogbWFwLWdldCgkYmFzZS1jYXJkLWhlYWRlciwgYWxpZ24tc2VsZik7XG4gICAgICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkYmFzZS1jYXJkLWhlYWRlciwgZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIGZvbnQtd2VpZ2h0KTtcbiAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS1jYXJkLWhlYWRlciwgcGFkZGluZyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtY2FyZCwgYm9yZGVyLXJhZGl1cykgbWFwLWdldCgkYmFzZS1jYXJkLCBib3JkZXItcmFkaXVzKSAwIDA7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgfVxuXG4gICAgLm1lcmMtY2FyZC1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtY2FyZC1jb250ZW50LCBwYWRkaW5nKTtcbiAgICB9XG5cbiAgICAvKiBoZWFkZXIg6IOM5pmv6aGP6ImyIHN0YXJ0ICovXG4gICAgLy8g5Li76aGM6ImyXG4gICAgJi5tZXJjLWNhcmQtcHJpbWFyeSA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgfVxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxuICAgICYubWVyYy1jYXJkLXByaW1hcnktdmFyaWFudCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICB9XG4gICAgLy8g5qyh6KaB6ImyXG4gICAgJi5tZXJjLWNhcmQtc2Vjb25kYXJ5ID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIH1cbiAgICAvLyDmrKHopoHoibLororlvaJcbiAgICAmLm1lcmMtY2FyZC1zZWNvbmRhcnktdmFyaWFudCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmLm1lcmMtY2FyZC10aGlyZCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgIH1cbiAgICAvLyDnrKzkuInoibLororlvaJcbiAgICAmLm1lcmMtY2FyZC10aGlyZC12YXJpYW50ID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICB9XG4gICAgLyogaGVhZGVyIOiDjOaZr+mhj+iJsiBlbmQgKi9cblxuICAgIC8qIGhlYWRlciDlrZfpq5TpoY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICRjb2xvclNldCB7XG4gICAgICAgIC5tZXJjLWNhcmQtaGVhZGVyLSN7JG5hbWV9IHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogaGVhZGVyIOmhj+iJsiBlbmQgKi9cblxuICAgIC8qIGhlYWRlciDpq5jluqYgc3RhcnQgKi9cbiAgICAvLyDlsI9cbiAgICAmLm1lcmMtY2FyZC1zbWFsbCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAvLyDkuK1cbiAgICAmLm1lcmMtY2FyZC1ub3JtYWwgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICB9XG4gICAgLy8g5aSnXG4gICAgJi5tZXJjLWNhcmQtbGFyZ2UgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgLyogaGVhZGVyIOmrmOW6piBlbmQgKi9cbn1cbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbi8qIG92ZXJ3cml0ZSB0YWJsZSBzdHlsZSAqL1xubWVyYy10YWJsZSB7XG4gICAgLmFudC10YWJsZS1jb250YWluZXIge1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cblxuICAgIC5hbnQtdGFibGUtaGVhZGVyLFxuICAgIC5hbnQtdGFibGUtYm9keSB7XG4gICAgICAgIG92ZXJmbG93LXk6IG92ZXJsYXkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLXRoZWFkID4gLmFudC10YWJsZS1yb3csXG4gICAgdGhlYWQgPiB0ciB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgIC5hbnQtdGFibGUtY29sdW1uLWhhcy1zb3J0ZXJzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWck+inklxuICAgIC5hbnQtdGFibGUtY29udGFpbmVyIHRhYmxlID4gdGhlYWQge1xuICAgICAgICB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHRkLXBhZGRpbmcpO1xuICAgIH1cblxuICAgIC5hbnQtdGFibGUtcGxhY2Vob2xkZXIgLmFudC10YWJsZS1leHBhbmRlZC1yb3ctZml4ZWQge1xuICAgICAgICBtYXJnaW46IC00cHggLThweDtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC8vIOmWk+malOiJslxuICAgIC5hbnQtdGFibGUtdGJvZHkge1xuICAgICAgICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWJsZSwgZXZlbi1jb2wtY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaG92ZXIg57eo6LyvJibliKrpmaRcbiAgICAuaG92ZXItdG8tZWRpdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICAgIH1cblxuICAgIC5hbnQtdGFibGUtdGJvZHkgPiB0ci5hbnQtdGFibGUtcm93OmhvdmVyID4gdGQsXG4gICAgLmFudC10YWJsZS10Ym9keSA+IHRyOmhvdmVyOm5vdCguYW50LXRhYmxlLWV4cGFuZGVkLXJvdyk6bm90KC5hbnQtdGFibGUtcm93LXNlbGVjdGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAuaG92ZXItdG8tZWRpdCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogaGVhZGVyIOmhj+iJsiBzdGFydCAqL1xuICAgIC8vIOS4u+mhjOiJslxuICAgICYubWVyYy10YWJsZS1wcmltYXJ5IHtcbiAgICAgICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5Li76aGM6Imy6K6K5b2iXG4gICAgJi5tZXJjLXRhYmxlLXByaW1hcnktdmFyaWFudCB7XG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5qyh6KaB6ImyXG4gICAgJi5tZXJjLXRhYmxlLXNlY29uZGFyeSB7XG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXG4gICAgJi5tZXJjLXRhYmxlLXNlY29uZGFyeS12YXJpYW50IHtcbiAgICAgICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJslxuICAgICYubWVyYy10YWJsZS10aGlyZCB7XG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmLm1lcmMtdGFibGUtdGhpcmQtdmFyaWFudCB7XG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIGhlYWRlciDpoY/oibIgZW5kICovXG59XG5cbi8vIOe3iumEsOWcqGNhcmTkuIvmlrnnmoTkuI3opoHlnJPop5Jcbm1lcmMtY2FyZC1jb250ZW50ID4gbWVyYy10YWJsZSB7XG4gICAgLmFudC10YWJsZS1jb250YWluZXIgdGFibGUgPiB0aGVhZCB7XG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qIGVuZCBvZiBvdmVyd3JpdGUgdGFibGUgc3R5bGUgKi9cbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbkBlYWNoICRuYW1lLCAkY29sb3IgaW4gJGNvbG9yU2V0IHtcbiAgICAubWVyYy1mbGV4LXRhYmxlLSN7JG5hbWV9IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgLm1lcmMtZmxleC10YWJsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHNoYWRvdyk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHBhZGRpbmcpO1xuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGJvZHkgdHIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG5cbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBwYWRkaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGV2ZW4tY29sLWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWJsZSwgaG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubm8tZGF0YSB7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5vLWRhdGEtaGludCB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNkNWQ1ZDU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkYmFzZS10YWJsZSwgYnJlYWstcG9pbnQpKSB7XG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlLFxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0aGVhZCxcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGJvZHksXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRmb290LFxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0aCxcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGQsXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0aGVhZCB0ciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogLTk5OTlweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtOTk5OXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRib2R5IHRyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XG5cbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBtby1wYWRkaW5nKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBtby1ib3JkZXItYm90dG9tLXdpZHRoKSBzb2xpZCAkY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWRhcms7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtdGFibGUsIG1vLXBhZGRpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5uby1kYXRhIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBtby1wYWRkaW5nKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG4vKiBvdmVyd3JpdGUgdGFiIHN0eWxlICovXG5tZXJjLXRhYiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkYmFzZS10YWIsIGZvbnQtc2l6ZSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWIsIHJhZGl1cyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1ib3JkZXItd2lkdGgpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuXG4gICAgICAgICAgICAgICAgLyog6Zec6ZaJ55qE5Y+J5Y+JICovXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLWNsb3NlLXgge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItYm9yZGVyLXdpZHRoKTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG5cbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiBtYXAtZ2V0KCRiYXNlLXRhYiwgY29udGVudC1ib3JkZXItd2lkdGgpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWIsIHJhZGl1cyk7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWIsIHJhZGl1cyk7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIOmhj+iJsiBzdGFydCAqL1xuICAgIC8vIOS4u+mhjOiJslxuICAgICYubWVyYy10YWItcHJpbWFyeSB7XG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLmFudC10YWJzLXRhYi1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxuICAgICYubWVyYy10YWItcHJpbWFyeS12YXJpYW50IHtcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLmFudC10YWJzLXRhYi1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeimgeiJslxuICAgICYubWVyYy10YWItc2Vjb25kYXJ5IHtcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLmFudC10YWJzLXRhYi1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeimgeiJsuiuiuW9olxuICAgICYubWVyYy10YWItc2Vjb25kYXJ5LXZhcmlhbnQge1xuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLmFudC10YWJzLXRhYi1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJslxuICAgICYubWVyYy10YWItdGhpcmQge1xuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLmFudC10YWJzLXRhYi1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJsuiuiuW9olxuICAgICYubWVyYy10YWItdGhpcmQtdmFyaWFudCB7XG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiLmFudC10YWJzLXRhYi1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qIOmhj+iJsiBlbmQgKi9cblxuICAgIC8qIHRhYiDpq5jluqYgc3RhcnQgKi9cbiAgICAvLyDlsI9cbiAgICAmLm1lcmMtdGFiLXNtYWxsIHtcbiAgICAgICAgPiAuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOS4rVxuICAgICYubWVyYy10YWItbm9ybWFsIHtcbiAgICAgICAgPiAuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOWkp1xuICAgICYubWVyYy10YWItbGFyZ2Uge1xuICAgICAgICA+IC5hbnQtdGFicy1jYXJkID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogdGFiIOmrmOW6piBlbmQgKi9cbn1cbi8qIGVuZCBvZiBvdmVyd3JpdGUgdGFiIHN0eWxlICovXG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG4udG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAudG9nZ2xlLXdyYXAge1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG5cbm1lcmMtdGFiIHtcbiAgICAvKiDpoY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICAmW21lcmNUeXBlPVwicHJpbWFyeVwiXSB7XG4gICAgICAgID4gLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxuICAgICZbbWVyY1R5cGU9XCJwcmltYXJ5VmFyaWFudFwiXSB7XG4gICAgICAgID4gLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmrKHopoHoibJcbiAgICAmW21lcmNUeXBlPVwic2Vjb25kYXJ5XCJdIHtcbiAgICAgICAgLy8gPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgIC8vICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciA+IC5hbnQtdGFicy1jb250ZW50ID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAvLyAgICAgICAgIG1lcmMtdG9nZ2xlLWNvbGxhcHNlIC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgLy8gICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmrKHopoHoibLororlvaJcbiAgICAmW21lcmNUeXBlPVwic2Vjb25kYXJ5VmFyaWFudFwiXSB7XG4gICAgICAgID4gLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJslxuICAgICZbbWVyY1R5cGU9XCJ0aGlyZFwiXSB7XG4gICAgICAgIC8vID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAvLyAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIgPiAuYW50LXRhYnMtY29udGVudCA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgLy8gICAgICAgICAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgLy8gICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLWNvbG9yO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6Imy6K6K5b2iXG4gICAgJlttZXJjVHlwZT1cInRoaXJkVmFyaWFudFwiXSB7XG4gICAgICAgID4gLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiDpoY/oibIgZW5kICovXG4gICAgLyogdGFiIOmrmOW6piBzdGFydCAqL1xuICAgIC8vIOWwj1xuICAgICZbbWVyY1NpemU9XCJzbWFsbFwiXSB7XG4gICAgICAgID4gLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOS4rVxuICAgICZbbWVyY1NpemU9XCJub3JtYWxcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDlpKdcbiAgICAmW21lcmNTaXplPVwibGFyZ2VcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiB0YWIg6auY5bqmIGVuZCAqL1xufVxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuLm1lcmMtYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCRidG4sIHNoYWRvdyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJ0biwgYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC8qIOmhj+iJsiBzdGFydCAqL1xuICAgIC8vIOS4u+mhjOiJslxuICAgICYubWVyYy1idG4tcHJpbWFyeSB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcblxuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHByaW1hcnktY29sb3IsIDglKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDE1JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Li76aGM6Imy6K6K5b2iXG4gICAgJi5tZXJjLWJ0bi1wcmltYXJ5LXZhcmlhbnQge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnktdmFyaWFudC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkcHJpbWFyeS12YXJpYW50LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHByaW1hcnktdmFyaWFudC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHByaW1hcnktdmFyaWFudC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibJcbiAgICAmLm1lcmMtYnRuLXNlY29uZGFyeSB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRzZWNvbmRhcnktY29sb3IsIDglKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkc2Vjb25kYXJ5LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeimgeiJsuiuiuW9olxuICAgICYubWVyYy1idG4tc2Vjb25kYXJ5LXZhcmlhbnQge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktdmFyaWFudC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6ImyXG4gICAgJi5tZXJjLWJ0bi10aGlyZCB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHRoaXJkLWNvbG9yLCA4JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCR0aGlyZC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkdGhpcmQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCR0aGlyZC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibLororlvaJcbiAgICAmLm1lcmMtYnRuLXRoaXJkLXZhcmlhbnQge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkdGhpcmQtdmFyaWFudC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtdmFyaWFudC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCR0aGlyZC12YXJpYW50LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XG4gICAgICAgICY6YWN0aXZlLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgID4gKiB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qIOmhj+iJsiBlbmQgKi9cblxuICAgIC8qIOmrmOW6piBzdGFydCAqL1xuICAgIC8vIOWwj1xuICAgICYubWVyYy1idG4tc21hbGwgYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiBtYXAtZ2V0KCRidG4taGVpZ2h0LCBzbSk7XG4gICAgfVxuICAgIC8vIOS4rVxuICAgICYubWVyYy1idG4tbm9ybWFsIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogbWFwLWdldCgkYnRuLWhlaWdodCwgbWQpO1xuICAgIH1cbiAgICAvLyDlpKdcbiAgICAmLm1lcmMtYnRuLWxhcmdlIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogbWFwLWdldCgkYnRuLWhlaWdodCwgbGcpO1xuICAgIH1cbiAgICAvKiDpq5jluqYgZW5kICovXG5cbiAgICAvKiDlr6zluqYgc3RhcnQgKi9cbiAgICAvLyB4c1xuICAgICYubWVyYy1idG4teHMgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IG1hcC1nZXQoJGJ0bi13aWR0aCwgeHMpO1xuICAgIH1cbiAgICAvLyBzbVxuICAgICYubWVyYy1idG4tc20gYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IG1hcC1nZXQoJGJ0bi13aWR0aCwgc20pO1xuICAgIH1cbiAgICAvLyBtZFxuICAgICYubWVyYy1idG4tbWQgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IG1hcC1nZXQoJGJ0bi13aWR0aCwgbWQpO1xuICAgIH1cbiAgICAvLyBsZ1xuICAgICYubWVyYy1idG4tbGcgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IG1hcC1nZXQoJGJ0bi13aWR0aCwgbGcpO1xuICAgIH1cbiAgICAvLyB4bFxuICAgICYubWVyYy1idG4teGwgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IG1hcC1nZXQoJGJ0bi13aWR0aCwgeGwpO1xuICAgIH1cbiAgICAvKiDlr6zluqYgZW5kICovXG5cbiAgICAvKiBEaXNhYmxlZCAqL1xuICAgICYuZGlzYWJsZWQgYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XG4gICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbkBtaXhpbiBmbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucm9jLWRhdGUtcGlja2VyIHtcbiAgLmRhdGUtcGlja2VyIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgLy8gaGVpZ2h0OiAyNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIC8vICY6aG92ZXIge1xuICAgIC8vICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gICAgLy8gfVxuICAgICY6aG92ZXIge1xuICAgICAgLmNsZWFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNsZWFyIGljb24gc3RhcnRcbiAgLmNsZWFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogN3B4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAvLyBjbGVhciBpY29uIGVuZFxuXG4gIC5zZWxlY3RlZC1kYXRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAvLyBkaXNwbGF5IGZvcm1hdFxuXG4gIC8vIHBvcG91dCBtb2RhbCBzdGFydFxuICAuZGF0ZXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMTUlO1xuICAgIC8vIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgLy9oZWFkZXIgc3RhcnRcbiAgLmhlYWRlci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nOiAxMHB4IDJweCAwO1xuICB9XG5cbiAgLmhlYWRlci1sYWJlbCB7XG4gICAgZmxleDogMTtcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xuICB9XG5cbiAgLmFycm93LWJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICB9XG5cbiAgLy9jYWxlbmRhciBzdGFydFxuICAud2Vla3MsXG4gIC5kYXlzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XG4gIH1cblxuICAud2Vla3Mge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgfVxuXG4gIC53ZWVrLFxuICAuZGF5IHtcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xuICB9XG5cbiAgLmRheSxcbiAgLnllYXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC55ZWFycyxcbiAgLm1vbnRocyB7XG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcbiAgfVxuXG4gIC5ub3QtcHJlc2VudCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXk7XG4gIH1cblxuICAuZGF5LnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLmRheS5zZWxlY3RlZC5ub3QtcHJlc2VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXk7XG4gIH1cblxuICAvLyDlupXpg6jku4rlpKlcbiAgLnRvZGF5IHtcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICYubm90LXByZXNlbnQge1xuICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ncmF5O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gIH1cblxuICAuaHIge1xuICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgLnN1ZmZpeC1pY29uIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gIH1cbn1cblxuOjpuZy1kZWVwLm1lcmMteWVhci1zZWxlY3Qge1xuICAuYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFudC1zZWxlY3QtaXRlbSB7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgfVxufVxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcbi5tZXJjLWNhbGVuZGFye1xuICAgIC5yb2NZZWFyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDQ1cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucm9jWWVhci10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAzOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5mb3ItY2FsZW5kYXIgPiAuYW50LWJ0biB7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG4gICAgICAgIC8vIGJvcmRlcjogIzJjM2U1MCAxcHggc29saWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIGJvcmRlcjogJHNlY29uZGFyeS1jb2xvciAxcHggc29saWQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgfVxuICAgIC5mb3ItY2FsZW5kYXIgPiAuYW50LWJ0bltkaXNhYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xuICAgICAgICBib3JkZXI6ICNkOWQ5ZDkgMXB4IHNvbGlkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIH1cbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG46aG92ZXI6bm90KFtkaXNhYmxlZF0pLFxuICAgIC5mb3ItY2FsZW5kYXIgPiAuYW50LWJ0bjphY3RpdmU6bm90KFtkaXNhYmxlZF0pLFxuICAgIC5mb3ItY2FsZW5kYXIgPiAuZm9jdXMtdG9kYXkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzZWNvbmRhcnktY29sb3IsIDEwJSk7XG4gICAgICAgIGJvcmRlcjogbGlnaHRlbigkc2Vjb25kYXJ5LWNvbG9yLCAxMCUpIDFweCBzb2xpZDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "PlFV":
/*!******************************************************************!*\
  !*** ./projects/tc-front/src/app/content/home/home.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/enums/account-type.enum */ "riHe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/account.service */ "TyOg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar/calendar.component */ "h30Q");
/* harmony import */ var _apply_home_apply_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apply-home/apply-home.component */ "qH8J");






function HomeComponent_app_calendar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-calendar");
} }
function HomeComponent_app_apply_home_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-apply-home");
} }
class HomeComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.AccountType = _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_0__["AccountType"];
    }
    ngOnInit() {
    }
    /** 選取tab序號 */
    selectTab(index) {
        this.selectedIndex = index;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_app_calendar_0_Template, 1, 0, "app-calendar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_app_apply_home_1_Template, 1, 0, "app-apply-home", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.accountService.account.account_type !== ctx.AccountType.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.accountService.account.account_type === ctx.AccountType.new);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"], _apply_home_apply_home_component__WEBPACK_IMPORTED_MODULE_5__["ApplyHomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "PnsQ":
/*!***************************************************!*\
  !*** ./projects/tc-lib/src/lib/models/pageset.ts ***!
  \***************************************************/
/*! exports provided: PageSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSet", function() { return PageSet; });
class PageSet {
    constructor() {
        /** 資料總數 */
        this.totalCounts = 0;
        /** 目前頁數 */
        this.pageIndex = 1;
        /** 每頁顯示筆數 */
        this.pageSize = 10;
    }
    initialize(totalCounts) {
        this.pageIndex = 1;
        this.pageSize = 10;
        this.totalCounts = totalCounts;
    }
    /** 總頁數 */
    get totalPages() {
        return Math.ceil(this.totalCounts / this.pageSize) === 0 ? 1 : Math.ceil(this.totalCounts / this.pageSize);
    }
    get currentPage() {
        return this.pageIndex;
    }
    set currentPage(index) {
        this.pageIndex = index;
    }
    get currentPageSize() {
        return this.pageSize;
    }
    set currentPageSize(size) {
        this.pageIndex = 1;
        this.pageSize = size;
    }
}


/***/ }),

/***/ "Qc4n":
/*!************************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/home/calendar/const/event-color.const.ts ***!
  \************************************************************************************/
/*! exports provided: EVENT_COLOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_COLOR", function() { return EVENT_COLOR; });
/**
 * 事件顏色
 */
const EVENT_COLOR = {
    normal: '#ec6122',
    danger: '#e6002d'
};


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S8bE":
/*!***********************************************************!*\
  !*** ./projects/tc-front/src/app/shared/shared.module.ts ***!
  \***********************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _components_state_light_state_light_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/state-light/state-light.component */ "n22H");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var projects_tc_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/tc-lib/src/public-api */ "pzfE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_course_status_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/course-status.pipe */ "Smgp");
/* harmony import */ var _components_singup_modal_singup_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/singup-modal/singup-modal.component */ "2stt");
/* harmony import */ var _pipes_account_type_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/account-type.pipe */ "dziO");
/* harmony import */ var _pipes_quiz_status_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/quiz-status.pipe */ "SZwu");
/* harmony import */ var _directives_is_scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/is-scroll-to-bottom.directive */ "zZcE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            projects_tc_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__["TcLibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_course_status_pipe__WEBPACK_IMPORTED_MODULE_4__["CourseStatusPipe"],
        _components_singup_modal_singup_modal_component__WEBPACK_IMPORTED_MODULE_5__["SingupModalComponent"],
        _pipes_account_type_pipe__WEBPACK_IMPORTED_MODULE_6__["AccountTypePipe"],
        _pipes_quiz_status_pipe__WEBPACK_IMPORTED_MODULE_7__["QuizStatusPipe"],
        _directives_is_scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_8__["IsScrollToBottomDirective"],
        _components_state_light_state_light_component__WEBPACK_IMPORTED_MODULE_0__["StateLightComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        projects_tc_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__["TcLibModule"]], exports: [_pipes_course_status_pipe__WEBPACK_IMPORTED_MODULE_4__["CourseStatusPipe"],
        _components_singup_modal_singup_modal_component__WEBPACK_IMPORTED_MODULE_5__["SingupModalComponent"],
        _pipes_account_type_pipe__WEBPACK_IMPORTED_MODULE_6__["AccountTypePipe"],
        _pipes_quiz_status_pipe__WEBPACK_IMPORTED_MODULE_7__["QuizStatusPipe"],
        _directives_is_scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_8__["IsScrollToBottomDirective"],
        _components_state_light_state_light_component__WEBPACK_IMPORTED_MODULE_0__["StateLightComponent"]] }); })();


/***/ }),

/***/ "SZwu":
/*!********************************************************************!*\
  !*** ./projects/tc-front/src/app/shared/pipes/quiz-status.pipe.ts ***!
  \********************************************************************/
/*! exports provided: QuizStatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizStatusPipe", function() { return QuizStatusPipe; });
/* harmony import */ var _content_quiz_enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../content/quiz/enums/quiz.enum */ "Yn/n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class QuizStatusPipe {
    transform(type) {
        const typeMap = {
            [_content_quiz_enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].checking]: '資料審核中',
            [_content_quiz_enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paying]: '繳款中',
            [_content_quiz_enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].succuss]: '報名成功',
            [_content_quiz_enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].paid]: '已繳款',
            [_content_quiz_enums_quiz_enum__WEBPACK_IMPORTED_MODULE_0__["QuizStatus"].noStatus]: '-',
        };
        return typeMap[type];
    }
}
QuizStatusPipe.ɵfac = function QuizStatusPipe_Factory(t) { return new (t || QuizStatusPipe)(); };
QuizStatusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "quizStatus", type: QuizStatusPipe, pure: true });


/***/ }),

/***/ "Smgp":
/*!**********************************************************************!*\
  !*** ./projects/tc-front/src/app/shared/pipes/course-status.pipe.ts ***!
  \**********************************************************************/
/*! exports provided: CourseStatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseStatusPipe", function() { return CourseStatusPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CourseStatusPipe {
    transform(value, ...args) {
        switch (value) {
            case 0:
                return '已結訓';
            case 1:
                return '我要報名';
            case 2:
                return '取消報名';
            default:
                return '未定義';
        }
    }
}
CourseStatusPipe.ɵfac = function CourseStatusPipe_Factory(t) { return new (t || CourseStatusPipe)(); };
CourseStatusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "courseStatus", type: CourseStatusPipe, pure: true });


/***/ }),

/***/ "T41C":
/*!********************************************************************!*\
  !*** ./projects/tc-front/src/app/content/const/icon-path.const.ts ***!
  \********************************************************************/
/*! exports provided: ICON_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_PATH", function() { return ICON_PATH; });
const ICON_PATH = {
    BTN_SEARCH: 'btn_search@3x.png',
    USER_ORANGE: 'icon_user@3x.png',
    SUCCESS: 'icon_success@3x.png',
    PASSWORD: 'icon_password.png',
    PASSWORD_ORANGE: 'icon_password_orange.svg',
    HOUSE: 'icon_contact@3x.png',
    EDUCATION: 'icon_education@3x.png',
    CALENDAR: 'btn_calendar_default@3x.png',
    CALENDAR_DISABLED: 'btn_calendar_disable@3x.png',
    ALERT: 'icon_alert@3x.png',
    CHECKED: 'icon_checked.svg',
    DOCUMENT: 'icon_document@3x.png',
    PHOTO: 'btn_photo@3x.png',
    PREV_STEP: 'btn_laststep_default@3x.png',
    NEXT_STEP: 'btn_nextstep_default@3x.png',
    MORE: 'btn_more@3x.png',
    SEARCH_NOT_FOUND: 'search_not_found.svg',
    GREEN_LIGHT: 'green_light.svg',
    WHITE_LIGHT: 'white_light.svg'
};


/***/ }),

/***/ "TyOg":
/*!********************************************************************!*\
  !*** ./projects/tc-front/src/app/core/services/account.service.ts ***!
  \********************************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _models_account_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/account.model */ "K2EU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AccountService {
    constructor() {
        /**
         * 身分
         */
        this.account = new _models_account_model__WEBPACK_IMPORTED_MODULE_0__["Account"]();
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UTSv":
/*!**************************************************************!*\
  !*** ./projects/tc-front/src/app/layout/layout.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "7e7m");
/* harmony import */ var _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../tc-lib/src/lib/const/device.const */ "5V4s");
/* harmony import */ var _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/const/routing-path.const */ "2fUu");
/* harmony import */ var _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/enums/account-type.enum */ "riHe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/account.service */ "TyOg");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.service */ "VVBw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_permission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/services/permission.service */ "BlqQ");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./menu/menu.component */ "+ySv");
/* harmony import */ var _menu_mobile_menu_mobile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./menu-mobile/menu-mobile.component */ "X+/4");
/* harmony import */ var _shared_pipes_account_type_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/pipes/account-type.pipe */ "dziO");



















function LayoutComponent_merc_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "merc-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutComponent_merc_button_4_Template_merc_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.onHomeClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u9996\u9801 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mercType", "secondary")("outline", true);
} }
function LayoutComponent_merc_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "merc-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutComponent_merc_button_5_Template_merc_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.onHomeClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mercType", "secondary")("outline", true);
} }
function LayoutComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "merc-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutComponent_div_8_Template_merc_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.onAccountTypeChange(ctx_r11.AccountType.new); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u65B0\u589E\u54E1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "merc-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutComponent_div_8_Template_merc_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.onAccountTypeChange(ctx_r13.AccountType.newRecruit); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " \u65B0\u8058\u54E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "merc-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutComponent_div_8_Template_merc_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.onAccountTypeChange(ctx_r14.AccountType.sales); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " \u696D\u52D9\u54E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "accountTypePipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mercSize", "small")("mercWidth", "xs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mercSize", "small")("mercWidth", "xs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mercSize", "small")("mercWidth", "xs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u73FE\u5728\u8EAB\u4EFD\uFF1A ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 7, ctx_r2.accountService.account.account_type), "");
} }
function LayoutComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u8EAB\u4EFD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nz-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LayoutComponent_div_9_Template_nz_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.onAccountTypeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "accountTypePipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "accountTypePipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "accountTypePipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.accountService.account.account_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", ctx_r3.AccountType.new)("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 7, ctx_r3.AccountType.new));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", ctx_r3.AccountType.newRecruit)("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 9, ctx_r3.AccountType.newRecruit));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", ctx_r3.AccountType.sales)("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 11, ctx_r3.AccountType.sales));
} }
function LayoutComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u767B\u51FA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "merc-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("iconType", "btn_signout@3x.png")("tooltip", "\u767B\u51FA")("iconHover", false)("iconSize", 30);
} }
function LayoutComponent_app_menu_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-menu");
} }
function LayoutComponent_app_menu_mobile_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-menu-mobile");
} }
const _c0 = function (a0) { return { "margin-top": a0 }; };
class LayoutComponent {
    constructor(accountService, sharedService, router, route, permissionService) {
        this.accountService = accountService;
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        this.permissionService = permissionService;
        /**
         * 版本號
         */
        this.currentAppVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appVersion;
        this.DEVICE = _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_1__["DEVICE"];
        /**
         * 是否已切換為 pad 以上的尺寸
         */
        this.isPad = true;
        this.AccountType = _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__["AccountType"];
    }
    /**
     * routing 路徑
     */
    get ROUTING_PATH() { return _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__["ROUTING_PATH"]; }
    /** TODO: for demo */
    get showMenu() {
        if (this.accountService.account.account_type) {
            return this.accountService.account.account_type !== _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__["AccountType"].new;
        }
        return false;
    }
    ngOnInit() {
        this.initUserDevice(document.documentElement.clientWidth);
        // this.accountService.initCanActivatePaths();
        // this.permissionService.initCanActivatePaths();
    }
    onResize(event) {
        const size = document.documentElement.clientWidth;
        this.detectScreenSize(size);
    }
    initUserDevice(size) {
        // 網頁版
        if (size >= 768) {
            this.sharedService.setUserDeviceSubject = _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_1__["DEVICE"].PAD;
            // 手機版
        }
        else if (size > 0 && size < 768) {
            this.sharedService.setUserDeviceSubject = _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_1__["DEVICE"].MOBILE;
        }
    }
    detectScreenSize(size) {
        // 網頁版
        if (size >= 768) {
            if (!this.isPad) {
                this.sharedService.setUserDeviceSubject = _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_1__["DEVICE"].PAD;
                this.isPad = true;
            }
            // 手機版
        }
        else if (size > 0 && size < 768) {
            if (this.isPad) {
                this.sharedService.setUserDeviceSubject = _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_1__["DEVICE"].MOBILE;
                this.isPad = false;
            }
        }
    }
    /**
     * 是否登入
     */
    isLogin() {
        // if (localStorage.getItem(COMMON.TOKEN)) {
        //   return true;
        // }
        // return false;
        return true;
    }
    onLogoutClick() {
    }
    /** TODO:  account_type 可能需要調整  */
    onHomeClick() {
        this.router.navigate([_content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__["ROUTING_PATH"].HOME]);
        // if (this.accountService.account.account_type === AccountType.new) {
        //   this.router.navigate([ROUTING_PATH.ADD_PERSONAL_INFO]);
        // } else {
        //   this.router.navigate([ROUTING_PATH.HOME]);
        // }
    }
    /**
     * for user 測試用
     */
    onAccountTypeChange(value) {
        switch (value) {
            case _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__["AccountType"].new:
                this.accountService.account.account_type = _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__["AccountType"].new;
                // this.permissionService.initCanActivatePaths();
                // this.router.navigate([ROUTING_PATH.ADD_PERSONAL_INFO]);
                break;
            case _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__["AccountType"].newRecruit:
                this.accountService.account.account_type = _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__["AccountType"].newRecruit;
                // this.permissionService.initCanActivatePaths();
                // this.router.navigate([ROUTING_PATH.HOME]);
                break;
            case _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__["AccountType"].sales:
                this.accountService.account.account_type = _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__["AccountType"].sales;
                // this.permissionService.initCanActivatePaths();
                // this.router.navigate([ROUTING_PATH.HOME]);
                break;
            default:
                break;
        }
        this.router.navigate([_content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__["ROUTING_PATH"].HOME]);
        this.permissionService.canActivatePath.complete();
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_permission_service__WEBPACK_IMPORTED_MODULE_8__["PermissionService"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], hostBindings: function LayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function LayoutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 17, vars: 14, consts: [[3, "ngClass"], [1, "logo-bar"], ["height", "30", "alt", "", 3, "src", "width"], ["class", "mx-2", 3, "mercType", "outline", "click", 4, "ngIf"], ["id", "mobile-home", "class", "mx-2", 3, "mercType", "outline", "click", 4, "ngIf"], [1, "ver"], ["class", "mx-1 d-flex align-items-center", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "font-weight-bold", "ms-auto"], ["href", "javascript:void(0)", "class", "text-gray signout", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "ngStyle"], [1, "mx-2", 3, "mercType", "outline", "click"], ["nz-icon", "", "nzType", "home", "nzTheme", "fill"], ["id", "mobile-home", 1, "mx-2", 3, "mercType", "outline", "click"], [1, "mx-1", "d-flex", "align-items-center"], [3, "mercSize", "mercWidth", "click"], [1, "ms-3"], [1, "d-flex", "align-items-center"], ["nzPlaceHolder", "\u672A\u9078\u64C7", 2, "width", "90px", "height", "35px", "margin-left", "5px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel"], ["href", "javascript:void(0)", 1, "text-gray", "signout", 3, "click"], [3, "iconType", "tooltip", "iconHover", "iconSize"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LayoutComponent_merc_button_4_Template, 3, 2, "merc-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, LayoutComponent_merc_button_5_Template, 2, 2, "merc-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, LayoutComponent_div_8_Template, 10, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, LayoutComponent_div_9_Template, 9, 13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, LayoutComponent_a_11_Template, 3, 4, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, LayoutComponent_app_menu_13_Template, 1, 0, "app-menu", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, LayoutComponent_app_menu_mobile_14_Template, 1, 0, "app-menu-mobile", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nz-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.showMenu ? "" : "no-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "./assets/image/logo/mli_logo.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("width", ctx.sharedService.userDevice === ctx.DEVICE.PAD ? 134 : 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sharedService.userDevice === ctx.DEVICE.PAD);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sharedService.userDevice === ctx.DEVICE.MOBILE);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("v", ctx.currentAppVersion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sharedService.userDevice === ctx.DEVICE.PAD);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sharedService.userDevice === ctx.DEVICE.MOBILE);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMenu && ctx.sharedService.userDevice === ctx.DEVICE.PAD);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMenu && ctx.sharedService.userDevice === ctx.DEVICE.MOBILE);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c0, ctx.showMenu ? "103px" : "63px"));
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__["NzHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__["NzContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], merc_lib__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__["NzOptionComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_11__["MercIconComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"], _menu_mobile_menu_mobile_component__WEBPACK_IMPORTED_MODULE_17__["MenuMobileComponent"]], pipes: [_shared_pipes_account_type_pipe__WEBPACK_IMPORTED_MODULE_18__["AccountTypePipe"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-card[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0;\n  border: rgba(153, 153, 153, 0.2) 1px solid;\n  box-shadow: none;\n  background-color: #fff;\n  border-radius: 6px;\n  \n  \n  \n  \n  \n  \n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-self: center;\n  font-size: 25px;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 6px 6px 0 0;\n  color: #fff;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-content[_ngcontent-%COMP%] {\n  display: block;\n  padding: 35px 15px;\n}\n.merc-card.merc-card-primary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\n.merc-card.merc-card-primary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\n.merc-card.merc-card-secondary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\n.merc-card.merc-card-secondary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\n.merc-card.merc-card-third[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\n.merc-card.merc-card-third-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary-variant[_ngcontent-%COMP%] {\n  color: #ec6122;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary[_ngcontent-%COMP%] {\n  color: #ff6621;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary-variant[_ngcontent-%COMP%] {\n  color: #f8c73f;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third[_ngcontent-%COMP%] {\n  color: #58a8dd;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third-variant[_ngcontent-%COMP%] {\n  color: #fffaf1;\n}\n.merc-card.merc-card-small[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-card.merc-card-normal[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.merc-card.merc-card-large[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-table[_ngcontent-%COMP%] {\n  \n  \n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-header[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%] {\n  overflow-y: overlay !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > .ant-table-row[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]   .ant-table-column-has-sorters[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-placeholder[_ngcontent-%COMP%]   .ant-table-expanded-row-fixed[_ngcontent-%COMP%] {\n  margin: -4px -8px;\n  min-width: 100%;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\nmerc-table[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 0;\n  background-color: transparent;\n  position: absolute;\n  top: 50%;\n  right: 26px;\n  transform: translateY(-50%);\n  display: flex;\n  flex-wrap: nowrap;\n  transition: opacity 0.3s, background-color 0.3s;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) {\n  background-color: #c9c9c9;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)   .hover-to-edit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nmerc-table.merc-table-primary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\nmerc-table.merc-table-primary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\nmerc-table.merc-table-secondary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\nmerc-table.merc-table-secondary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\nmerc-table.merc-table-third[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\nmerc-table.merc-table-third-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-flex-table-primary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #e6002d;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #e6002d;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ec6122;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ec6122;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ff6621;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ff6621;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #f8c73f;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #f8c73f;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #58a8dd;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #58a8dd;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #fffaf1;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #fffaf1;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-tab[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  \n  \n  \n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%] {\n  border: 0;\n  margin-bottom: 0px;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]::before {\n  border-bottom: hidden;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  border: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6002d;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6002d;\n  border-bottom-width: 0px !important;\n  padding: 0 15px;\n  height: 35px;\n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%]   .ant-tabs-close-x[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 16px;\n  height: 18px;\n  margin-right: 0 !important;\n  vertical-align: middle;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%]   .ant-tabs-tab-btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #fff;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-small[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 25px;\n}\nmerc-tab.merc-tab-normal[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 35px;\n}\nmerc-tab.merc-tab-large[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.toggle-float-btn[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #e6002d;\n  color: white;\n  border: 1px solid #e6002d;\n  border-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  height: 40px;\n  padding: 0 16px;\n  line-height: 38px;\n  cursor: pointer;\n}\n.toggle-float-btn[_ngcontent-%COMP%]   .toggle-wrap[_ngcontent-%COMP%] {\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n}\nmerc-tab[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\nmerc-tab[mercType=primary][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\nmerc-tab[mercType=primaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\nmerc-tab[mercType=secondary][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\nmerc-tab[mercType=secondaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\nmerc-tab[mercType=third][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\nmerc-tab[mercType=thirdVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\nmerc-tab[mercSize=small][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 30px;\n}\nmerc-tab[mercSize=normal][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 42px;\n}\nmerc-tab[mercSize=large][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  \n  \n  \n  \n  \n  \n  \n}\n.merc-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 2px 0 rgba(21, 28, 42, 0.17);\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #bd0025;\n  border: 1px solid #bd0025;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #e6002d;\n  background-color: #fff;\n  color: #e6002d;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #9a001e;\n  border: 1px solid #9a001e;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d34e12;\n  border: 1px solid #d34e12;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ec6122;\n  background-color: #fff;\n  color: #ec6122;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b2420f;\n  border: 1px solid #b2420f;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f74d00;\n  border: 1px solid #f74d00;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ff6621;\n  background-color: #fff;\n  color: #ff6621;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #d44200;\n  border: 1px solid #d44200;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f7bc18;\n  border: 1px solid #f7bc18;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #f8c73f;\n  background-color: #fff;\n  color: #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #e2a908;\n  border: 1px solid #e2a908;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #3696d6;\n  border: 1px solid #3696d6;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #58a8dd;\n  background-color: #fff;\n  color: #58a8dd;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #2784c1;\n  border: 1px solid #2784c1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ffebc8;\n  border: 1px solid #ffebc8;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #fffaf1;\n  background-color: #fff;\n  color: #fffaf1;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #ffdfa5;\n  border: 1px solid #ffdfa5;\n}\n.merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active    > *[_ngcontent-%COMP%], .merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover    > *[_ngcontent-%COMP%] {\n  transition: filter 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  filter: brightness(0.6);\n}\n.merc-btn.merc-btn-small[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-btn.merc-btn-normal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.merc-btn.merc-btn-large[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.merc-btn.merc-btn-xs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.merc-btn.merc-btn-sm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.merc-btn.merc-btn-md[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.merc-btn.merc-btn-lg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.merc-btn.merc-btn-xl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.merc-btn.disabled[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.25);\n  background: #f5f5f5;\n  border-color: #d9d9d9;\n  text-shadow: none;\n  box-shadow: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  max-width: 200px;\n  min-width: 160px;\n  position: relative;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%]:hover   .clear[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 7px;\n  padding: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: white;\n  z-index: 999;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .selected-date[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 115%;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  min-width: 200px;\n  background-color: #fff;\n  z-index: 999;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 2px 0;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 16px;\n  text-align: center;\n  color: #e6002d;\n  display: inline-block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .week[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .months[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .not-present[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected.not-present[_ngcontent-%COMP%] {\n  background-color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #e6002d;\n  color: #e6002d;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today.not-present[_ngcontent-%COMP%] {\n  color: #efefef;\n  cursor: not-allowed;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%] {\n  color: #efefef;\n  margin: 10px;\n  opacity: 0.8;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .suffix-icon[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n .merc-year-select .ant-select-selection-item {\n  padding-right: 15px !important;\n}\n .merc-year-select .ant-select-item {\n  padding: 5px 8px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-calendar[_ngcontent-%COMP%]   .rocYear[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n@media screen and (max-width: 750px) {\n  .merc-calendar[_ngcontent-%COMP%]   .rocYear[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 45px;\n    justify-content: center;\n  }\n}\n.merc-calendar[_ngcontent-%COMP%]   .rocYear-title[_ngcontent-%COMP%] {\n  position: relative;\n  top: 38px;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: #ff6621 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[disabled][_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n  border: #d9d9d9 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:hover:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:active:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .focus-today[_ngcontent-%COMP%] {\n  background-color: #ff8954;\n  border: #ff8954 1px solid;\n}\nnz-layout[_ngcontent-%COMP%] {\n  position: relative;\n}\nnz-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nnz-header.ant-layout-header.no-menu[_ngcontent-%COMP%] {\n  height: 68px !important;\n}\nnz-content[_ngcontent-%COMP%] {\n  padding: 24px 50px;\n}\n@media screen and (max-width: 1023px) {\n  nz-content[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n}\n@media screen and (max-width: 767px) {\n  nz-content[_ngcontent-%COMP%] {\n    padding: 24px 8px;\n  }\n}\nhr[_ngcontent-%COMP%] {\n  height: 3px;\n  border-width: 0px;\n  background: linear-gradient(to right, #e6002d, #ff6621);\n  width: calc(100% + 50px);\n  margin: 0 0 0 -50px;\n  opacity: 1;\n}\n.logo-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 60px;\n  line-height: 60px;\n  padding: 15px 32px 15px 50px;\n}\n@media screen and (max-width: 767px) {\n  .logo-bar[_ngcontent-%COMP%] {\n    padding: 15px 5px 15px 15px;\n  }\n}\n.signout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  line-height: 60px;\n}\n.signout[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #666666;\n}\n.ver[_ngcontent-%COMP%] {\n  font-size: 12px;\n  position: absolute;\n  z-index: 100;\n  top: 24px;\n}\nmerc-button#mobile-home[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xheW91dC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2N1c3RvbS1zZXR0aW5nLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL3N0eWxlcy9jdXN0b20tc2V0dGluZy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9zdHlsZXMvX2NvbXBvbmVudHMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWVyYy1jYXJkL21lcmMtY2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWVyYy10YWJsZS9tZXJjLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9mbGV4LXRhYmxlL2ZsZXgtdGFibGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lcmMtdGFiL21lcmMtdGFiLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9tZXJjLXRhYi90b2dnbGUtY29sbGFwc2UvdG9nZ2xlLWNvbGxhcHNlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9kYXRlL2NvbXBvbmVudHMvcm9jLWRhdGUtcGlja2VyL3JvYy1kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvZGF0ZS9jb21wb25lbnRzL21lcmMtY2FsZW5kYXIvbWVyYy1jYWxlbmRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsYUFBQTtBQTBCQSxZQUFBO0FBY0EsWUFBQTtBQUNBLG1CQUFBO0FBaUJBLGlCQUFBO0FBRUEsb0JBQUE7QUFtQkEsa0JBQUE7QUFFQSxxQkFBQTtBQW9CQSxtQkFBQTtBQWFBLGlCQUFBO0FDbEhBLHdEQUFBO0FBQ0EsYUFBQTtBQXVCQSxZQUFBO0FBY0EsWUFBQTtBQUNBLG1CQUFBO0FBaUJBLGlCQUFBO0FBRUEsb0JBQUE7QUFtQkEsa0JBQUE7QUFFQSxxQkFBQTtBQW9CQSxtQkFBQTtBQWFBLGlCQUFBO0FDaEhBLGFBQUE7QURBQSx3REFBQTtBQUNBLGFBQUE7QUF1QkEsWUFBQTtBQWNBLFlBQUE7QUFDQSxtQkFBQTtBQWlCQSxpQkFBQTtBQUVBLG9CQUFBO0FBbUJBLGtCQUFBO0FBRUEscUJBQUE7QUFvQkEsbUJBQUE7QUFhQSxpQkFBQTtBRTlHQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFrQkEsc0JBQUE7RUF5QkEsb0JBQUE7RUFFQSxzQkFBQTtFQU9BLGtCQUFBO0VBRUEsb0JBQUE7RUFhQSxrQkFBQTtBSjVCSjtBSXJDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSww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QSx1REFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBbTFDSjtBQWgxQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQW0xQ0o7QUFqMUNJO0VBUEo7SUFRUSwyQkFBQTtFQW8xQ047QUFDRjtBQWoxQ0E7RUFLSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWcxQ0o7QUF0MUNJO0VBQ0kscUJBQUE7RUFDQSxjQXpEUTtBQWk1Q2hCO0FBajFDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBbzFDSjtBQWwxQ0E7RUFDSSxXQUFBO0FBcTFDSiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG4kc2lnbi1vdXQtZ3JheTogIzY2NjY2NjtcblxubnotbGF5b3V0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbm56LWhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICAmLmFudC1sYXlvdXQtaGVhZGVyIHtcbiAgICAgICAgJi5uby1tZW51IHtcbiAgICAgICAgICAgIGhlaWdodDogNjhweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5uei1jb250ZW50IHtcbiAgICAvLyBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTNweCk7XG4gICAgcGFkZGluZzogMjRweCA1MHB4O1xuXG4gICAgLy8gZm9yIG1vYmlsZVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgICAgICBwYWRkaW5nOiAyNHB4IDIwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgcGFkZGluZzogMjRweCA4cHg7XG4gICAgfVxufVxuXG5ociB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkcHJpbWFyeS1jb2xvciwgJHNlY29uZGFyeS1jb2xvcik7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDUwcHgpO1xuICAgIG1hcmdpbjogMCAwIDAgLTUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmxvZ28tYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMzJweCAxNXB4IDUwcHg7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDVweCAxNXB4IDE1cHg7XG4gICAgfVxufVxuXG4uc2lnbm91dCB7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICRzaWduLW91dC1ncmF5O1xuICAgIH1cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5cbi52ZXIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHRvcDogMjRweDtcbn1cbm1lcmMtYnV0dG9uI21vYmlsZS1ob21lID4gYnV0dG9uIHtcbiAgICB3aWR0aDogNDBweDtcbn1cbiIsIi8qKiDln7rnpI7lip/og73oibLoqK3lrpogKi9cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4vLyDkuLvopoHoibJcbiRwcmltYXJ5LWNvbG9yOiAjZTYwMDJkO1xuLy8g5Li76KaB6Imy6K6K5b2iXG4kcHJpbWFyeS12YXJpYW50LWNvbG9yOiAjZWM2MTIyO1xuLy8g5qyh6KaB6ImyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NjIxO1xuLy8g5qyh6KaB6Imy6K6K5b2iXG4kc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I6ICNmOGM3M2Y7XG4vLyDnrKzkuInoibJcbiR0aGlyZC1jb2xvcjogIzU4YThkZDtcbi8vIOesrOS4ieiJsuiuiuW9olxuJHRoaXJkLXZhcmlhbnQtY29sb3I6ICNmZmZhZjE7XG5cbi8vIOa3uueBsFxuJGNvbG9yLWxpZ2h0LWdyYXk6ICNlZmVmZWY7XG4vLyDmt7HngbBcbiRjb2xvci1kYXJrLWdyYXk6ICMzMzMzMzM7XG4vLyDnmb1cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1zaWx2ZXI6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKTtcbiRjb2xvci1saWdodGVyLWdyYXk6ICNmOWY5Zjk7XG4kY29sb3ItZ3JlZW46ICM4N2I4NDg7XG5cbi8qKiDln7rnpI7lhYPku7boqK3lrpogKi9cbiRmb250LXN6OiAoXG4gIHhsOiAyNXB4LFxuICBsZzogMThweCxcbiAgbWQ6IDE2cHgsXG4gIHNtOiAxNHB4LFxuICB4czogMTJweCxcbik7XG5cbiRmb250LXdlaWdodDogKFxuICBmYXR0eTogNjAwLFxuICBub3JtYWw6IG5vcm1hbCxcbik7XG5cbi8qKiDluLjnlKjlhYPku7boqK3lrpogKi9cbi8qIGJhc2UgYnRuIHN0YXJ0ICovXG4kYnRuOiAoXG4gIGJvcmRlci1yYWRpdXM6IDNweCxcbiAgc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYmEoMjEsIDI4LCA0MiwgMC4xNyksXG4pO1xuJGJ0bi1oZWlnaHQ6IChcbiAgbGc6IDQwcHgsXG4gIG1kOiAzNXB4LFxuICBzbTogMzBweCxcbik7XG4kYnRuLXdpZHRoOiAoXG4gIHhsOiAyMDBweCxcbiAgbGc6IDE2MHB4LFxuICBtZDogMTIwcHgsXG4gIHNtOiA5MHB4LFxuICB4czogNzBweCxcbik7XG4vKiBiYXNlIGJ0biBlbmQgKi9cblxuLyoqIGJhc2UgY2FyZCBzdGFydCovXG4kYmFzZS1jYXJkOiAoXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSxcbiAgYm94LXNoYWRvdzogbm9uZSxcbiAgcGFkZGluZzogMCxcbiAgYm9yZGVyOiAkY29sb3Itc2lsdmVyIDFweCBzb2xpZCxcbiAgYm9yZGVyLXJhZGl1czogNnB4LFxuKTtcblxuJGJhc2UtY2FyZC1oZWFkZXI6IChcbiAgYWxpZ24tc2VsZjogY2VudGVyLFxuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIHhsKSxcbiAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJGZvbnQtd2VpZ2h0LCBmYXR0eSksXG4gIHBhZGRpbmc6IDEwcHggMjBweCxcbik7XG5cbiRiYXNlLWNhcmQtY29udGVudDogKFxuICBwYWRkaW5nOiAzNXB4IDE1cHgsXG4pO1xuLyoqIGJhc2UgY2FyZCBlbmQqL1xuXG4vKiBiYXNlIHRhYmxlIHN0YXJ0ICovXG4kYmFzZS10YWJsZTogKFxuICAvLyBob3ZlciDpoY/oibJcbiAgaG92ZXItYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1saWdodC1ncmF5LCAxNSUpLFxuICAvLyDplpPpmpToibJcbiAgZXZlbi1jb2wtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yLFxuICAvLyDlnJPop5JcbiAgcmFkaXVzOiA3cHgsXG4gIC8vIOmZsOW9sVxuICBzaGFkb3c6IDFweCAycHggNHB4ICNkNWQ1ZDUsXG4gIC8vIOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqUXG4gIHBhZGRpbmc6IDhweCA4cHgsXG4gIC8vIOaJi+apn+eJiOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqU77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcbiAgbW8tcGFkZGluZzogM3B4IDhweCxcbiAgLy8g5bm+cHjku6XkuIvkvb/nlKjmiYvmqZ/niYjvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBicmVhay1wb2ludDogNzY3cHgsXG4gIC8vIOashOS9jeS4i+aWueeahGJvcmRlci1ib3R0b23vvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBtby1ib3JkZXItYm90dG9tLXdpZHRoOiAwcHhcbik7XG5cbi8qIGJhc2UgdGFiIHN0YXJ0ICovXG4kYmFzZS10YWI6IChcbiAgLy8g6aGP6ImyKG1lcmMtdGFiIOacquWCs+WFpSBtZXJjVHlwZSDmmYLmnInmlYgpXG4gIHRhYi1jb2xvcjogJHByaW1hcnktY29sb3IsXG4gIC8vIHRhYiDpgormoYZcbiAgdGFiLWJvcmRlci13aWR0aDogMXB4LFxuICAvLyBjb250ZW50IOmCiuahhlxuICBjb250ZW50LWJvcmRlci13aWR0aDogMXB4LFxuICAvLyDlnJPop5JcbiAgcmFkaXVzOiA3cHgsXG4gIC8vIOWtl+mrlOWkp+Wwj1xuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIGxnKVxuKTtcbi8qIGJhc2UgdGFiIGVuZCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvc3R5bGVzL21lcmMtbGliLnNjc3NcIjtcbiIsIi8qIOatpHNjc3PngrrlhYPku7blhafnmoQgY3VzdG9tLXNldHRpbmfvvIzoiIflnJbmm7jppKjlhajln5/nmoQgY3VzdG9tLXNldHRpbmcg5LiN5ZCMICovXG4vKiog5Z+656SO5Yqf6IO96Imy6Kit5a6aICovXG4kY29sb3Itd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kY29sb3ItZGFyazogcmdiYSgwLCAwLCAwLCAwLjgpICFkZWZhdWx0O1xuLy8g5Li76KaB6ImyXG4kcHJpbWFyeS1jb2xvcjogI2I5ZTFlNCAhZGVmYXVsdDtcbi8vIOS4u+imgeiJsuiuiuW9olxuJHByaW1hcnktdmFyaWFudC1jb2xvcjogIzU0YmU5ZiAhZGVmYXVsdDtcbi8vIOasoeimgeiJslxuJHNlY29uZGFyeS1jb2xvcjogIzRiOGFjNSAhZGVmYXVsdDtcbi8vIOasoeimgeiJsuiuiuW9olxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjZTZmM2Y3ICFkZWZhdWx0O1xuLy8g56ys5LiJ6ImyXG4kdGhpcmQtY29sb3I6ICM4MDAwODAgIWRlZmF1bHQ7XG4vLyDnrKzkuInoibLororlvaJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZWVkN2VkICFkZWZhdWx0O1xuXG4vLyDmt7rngbBcbiRjb2xvci1saWdodC1ncmF5OiAjZTVlNWU1ICFkZWZhdWx0O1xuXG4vLyDpoY/oibLlrprnvqnljIVcbiRjb2xvclNldDogXCJwcmltYXJ5XCIgJHByaW1hcnktY29sb3IsIFwicHJpbWFyeS12YXJpYW50XCIgJHByaW1hcnktdmFyaWFudC1jb2xvciwgXCJzZWNvbmRhcnlcIiAkc2Vjb25kYXJ5LWNvbG9yLFxuICBcInNlY29uZGFyeS12YXJpYW50XCIgJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCBcInRoaXJkXCIgJHRoaXJkLWNvbG9yLCBcInRoaXJkLXZhcmlhbnRcIiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcblxuLyoqIOWfuuekjuWFg+S7tuioreWumiAqL1xuJGZvbnQtc3o6IChcbiAgeGw6IDMwcHgsXG4gIGxnOiAxOHB4LFxuICBtZDogMTZweCxcbiAgc206IDE0cHgsXG4gIHhzOiAxMnB4LFxuKSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0OiAoXG4gIGZhdHR5OiA2MDAsXG4gIG5vcm1hbDogbm9ybWFsLFxuKSAhZGVmYXVsdDtcblxuLyoqIOW4uOeUqOWFg+S7tuioreWumiAqL1xuLyogYmFzZSBidG4gc3RhcnQgKi9cbiRidG46IChcbiAgYm9yZGVyLXJhZGl1czogN3B4LFxuICBzaGFkb3c6IDFweCAxcHggMnB4IDAgcmdiYSgyMSwgMjgsIDQyLCAwLjE3KSxcbikgIWRlZmF1bHQ7XG4kYnRuLWhlaWdodDogKFxuICBsZzogNDBweCxcbiAgbWQ6IDM1cHgsXG4gIHNtOiAzMHB4LFxuKSAhZGVmYXVsdDtcbiRidG4td2lkdGg6IChcbiAgeGw6IDIwMHB4LFxuICBsZzogMTUwcHgsXG4gIG1kOiAxMjBweCxcbiAgc206IDkwcHgsXG4gIHhzOiA2MHB4LFxuKSAhZGVmYXVsdDtcbi8qIGJhc2UgYnRuIGVuZCAqL1xuXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cbiRiYXNlLWNhcmQ6IChcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLFxuICBib3gtc2hhZG93OiBub25lLFxuICBwYWRkaW5nOiAwLFxuICBib3JkZXI6IDAsXG4gIGJvcmRlci1yYWRpdXM6IDZweCxcbikgIWRlZmF1bHQ7XG5cbiRiYXNlLWNhcmQtaGVhZGVyOiAoXG4gIGFsaWduLXNlbGY6IGNlbnRlcixcbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZyksXG4gIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRmb250LXdlaWdodCwgZmF0dHkpLFxuICBwYWRkaW5nOiAwIDE1cHgsXG4pICFkZWZhdWx0O1xuXG4kYmFzZS1jYXJkLWNvbnRlbnQ6IChcbiAgcGFkZGluZzogMTBweCAxNXB4LFxuKSAhZGVmYXVsdDtcbi8qKiBiYXNlIGNhcmQgZW5kKi9cblxuLyogYmFzZSB0YWJsZSBzdGFydCAqL1xuJGJhc2UtdGFibGU6IChcbiAgLy8gaG92ZXIg6aGP6ImyXG4gIGhvdmVyLWJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3ItbGlnaHQtZ3JheSwgMTUlKSxcbiAgLy8g6ZaT6ZqU6ImyXG4gIGV2ZW4tY29sLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheSxcbiAgLy8g5ZyT6KeSXG4gIHJhZGl1czogN3B4LFxuICAvLyDpmbDlvbFcbiAgc2hhZG93OiAxcHggMnB4IDRweCAjZDVkNWQ1LFxuICAvLyDooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malFxuICBwYWRkaW5nOiA0cHggOHB4LFxuICAvLyDmiYvmqZ/niYjooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLXBhZGRpbmc6IDEwcHggOHB4LFxuICAvLyDlub5weOS7peS4i+S9v+eUqOaJi+apn+eJiO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIGJyZWFrLXBvaW50OiA5OTFweCxcbiAgLy8g5qyE5L2N5LiL5pa555qEYm9yZGVyLWJvdHRvbe+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLWJvcmRlci1ib3R0b20td2lkdGg6IDFweFxuKSAhZGVmYXVsdDtcblxuLyogYmFzZSB0YWIgc3RhcnQgKi9cbiRiYXNlLXRhYjogKFxuICAvLyDpoY/oibIobWVyYy10YWIg5pyq5YKz5YWlIG1lcmNUeXBlIOaZguacieaViClcbiAgdGFiLWNvbG9yOiAkcHJpbWFyeS1jb2xvcixcbiAgLy8gdGFiIOe3qOahhlxuICB0YWItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIC8vIGNvbnRlbnQg57eo5qGGXG4gIGNvbnRlbnQtYm9yZGVyLXdpZHRoOiAxMHB4LFxuICAvLyDlnJPop5JcbiAgcmFkaXVzOiA3cHgsXG4gIC8vIOWtl+mrlOWkp+Wwj1xuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIGxnKVxuKSAhZGVmYXVsdDtcbi8qIGJhc2UgdGFiIGVuZCAqL1xuIiwiLyog5YWD5Lu2IHN0eWxlICovXG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvbWVyYy1jYXJkL21lcmMtY2FyZC5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL21lcmMtdGFibGUvbWVyYy10YWJsZS5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL2ZsZXgtdGFibGUvZmxleC10YWJsZS5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL21lcmMtdGFiL21lcmMtdGFiLmNvbXBvbmVudC5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvbWVyYy10YWIvdG9nZ2xlLWNvbGxhcHNlL3RvZ2dsZS1jb2xsYXBzZS5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3NcIjtcbkBpbXBvcnQgXCIuLi9kYXRlL2NvbXBvbmVudHMvcm9jLWRhdGUtcGlja2VyL3JvYy1kYXRlLXBpY2tlci5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2RhdGUvY29tcG9uZW50cy9tZXJjLWNhbGVuZGFyL21lcmMtY2FsZW5kYXIuY29tcG9uZW50LnNjc3NcIjtcbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbi5tZXJjLWNhcmQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtY2FyZCwgcGFkZGluZyk7XG4gICAgYm9yZGVyOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlcik7XG4gICAgYm94LXNoYWRvdzogbWFwLWdldCgkYmFzZS1jYXJkLCBib3gtc2hhZG93KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtY2FyZCwgYm9yZGVyLXJhZGl1cyk7XG5cbiAgICAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIGFsaWduLXNlbGYpO1xuICAgICAgICBmb250LXNpemU6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIGZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRiYXNlLWNhcmQtaGVhZGVyLCBmb250LXdlaWdodCk7XG4gICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIHBhZGRpbmcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlci1yYWRpdXMpIG1hcC1nZXQoJGJhc2UtY2FyZCwgYm9yZGVyLXJhZGl1cykgMCAwO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIH1cblxuICAgIC5tZXJjLWNhcmQtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLWNhcmQtY29udGVudCwgcGFkZGluZyk7XG4gICAgfVxuXG4gICAgLyogaGVhZGVyIOiDjOaZr+mhj+iJsiBzdGFydCAqL1xuICAgIC8vIOS4u+mhjOiJslxuICAgICYubWVyYy1jYXJkLXByaW1hcnkgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIH1cbiAgICAvLyDkuLvpoYzoibLororlvaJcbiAgICAmLm1lcmMtY2FyZC1wcmltYXJ5LXZhcmlhbnQgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgfVxuICAgIC8vIOasoeimgeiJslxuICAgICYubWVyYy1jYXJkLXNlY29uZGFyeSA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICB9XG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXG4gICAgJi5tZXJjLWNhcmQtc2Vjb25kYXJ5LXZhcmlhbnQgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICB9XG4gICAgLy8g56ys5LiJ6ImyXG4gICAgJi5tZXJjLWNhcmQtdGhpcmQgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICB9XG4gICAgLy8g56ys5LiJ6Imy6K6K5b2iXG4gICAgJi5tZXJjLWNhcmQtdGhpcmQtdmFyaWFudCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgfVxuICAgIC8qIGhlYWRlciDog4zmma/poY/oibIgZW5kICovXG5cbiAgICAvKiBoZWFkZXIg5a2X6auU6aGP6ImyIHN0YXJ0ICovXG4gICAgLy8g5Li76aGM6ImyXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkY29sb3JTZXQge1xuICAgICAgICAubWVyYy1jYXJkLWhlYWRlci0jeyRuYW1lfSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIGhlYWRlciDpoY/oibIgZW5kICovXG5cbiAgICAvKiBoZWFkZXIg6auY5bqmIHN0YXJ0ICovXG4gICAgLy8g5bCPXG4gICAgJi5tZXJjLWNhcmQtc21hbGwgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLy8g5LitXG4gICAgJi5tZXJjLWNhcmQtbm9ybWFsID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgfVxuICAgIC8vIOWkp1xuICAgICYubWVyYy1jYXJkLWxhcmdlID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIC8qIGhlYWRlciDpq5jluqYgZW5kICovXG59XG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG4vKiBvdmVyd3JpdGUgdGFibGUgc3R5bGUgKi9cbm1lcmMtdGFibGUge1xuICAgIC5hbnQtdGFibGUtY29udGFpbmVyIHtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLWhlYWRlcixcbiAgICAuYW50LXRhYmxlLWJvZHkge1xuICAgICAgICBvdmVyZmxvdy15OiBvdmVybGF5ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS10aGVhZCA+IC5hbnQtdGFibGUtcm93LFxuICAgIHRoZWFkID4gdHIge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAuYW50LXRhYmxlLWNvbHVtbi1oYXMtc29ydGVycyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlnJPop5JcbiAgICAuYW50LXRhYmxlLWNvbnRhaW5lciB0YWJsZSA+IHRoZWFkIHtcbiAgICAgICAgdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgICAgICB0cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCB0ZC1wYWRkaW5nKTtcbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLXBsYWNlaG9sZGVyIC5hbnQtdGFibGUtZXhwYW5kZWQtcm93LWZpeGVkIHtcbiAgICAgICAgbWFyZ2luOiAtNHB4IC04cHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAvLyDplpPpmpToibJcbiAgICAuYW50LXRhYmxlLXRib2R5IHtcbiAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGV2ZW4tY29sLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhvdmVyIOe3qOi8ryYm5Yiq6ZmkXG4gICAgLmhvdmVyLXRvLWVkaXQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAyNnB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLXRib2R5ID4gdHIuYW50LXRhYmxlLXJvdzpob3ZlciA+IHRkLFxuICAgIC5hbnQtdGFibGUtdGJvZHkgPiB0cjpob3Zlcjpub3QoLmFudC10YWJsZS1leHBhbmRlZC1yb3cpOm5vdCguYW50LXRhYmxlLXJvdy1zZWxlY3RlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgLmhvdmVyLXRvLWVkaXQge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIGhlYWRlciDpoY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICAmLm1lcmMtdGFibGUtcHJpbWFyeSB7XG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxuICAgICYubWVyYy10YWJsZS1wcmltYXJ5LXZhcmlhbnQge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeimgeiJslxuICAgICYubWVyYy10YWJsZS1zZWNvbmRhcnkge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeimgeiJsuiuiuW9olxuICAgICYubWVyYy10YWJsZS1zZWNvbmRhcnktdmFyaWFudCB7XG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmLm1lcmMtdGFibGUtdGhpcmQge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6ImyXG4gICAgJi5tZXJjLXRhYmxlLXRoaXJkLXZhcmlhbnQge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBoZWFkZXIg6aGP6ImyIGVuZCAqL1xufVxuXG4vLyDnt4rphLDlnKhjYXJk5LiL5pa555qE5LiN6KaB5ZyT6KeSXG5tZXJjLWNhcmQtY29udGVudCA+IG1lcmMtdGFibGUge1xuICAgIC5hbnQtdGFibGUtY29udGFpbmVyIHRhYmxlID4gdGhlYWQge1xuICAgICAgICB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKiBlbmQgb2Ygb3ZlcndyaXRlIHRhYmxlIHN0eWxlICovXG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG5AZWFjaCAkbmFtZSwgJGNvbG9yIGluICRjb2xvclNldCB7XG4gICAgLm1lcmMtZmxleC10YWJsZS0jeyRuYW1lfSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIC5tZXJjLWZsZXgtdGFibGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBzaGFkb3cpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBwYWRkaW5nKTtcblxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRib2R5IHRyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgcGFkZGluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBldmVuLWNvbC1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm5vLWRhdGEge1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uby1kYXRhLWhpbnQge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDVkNWQ1O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGJyZWFrLXBvaW50KSkge1xuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSxcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGhlYWQsXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRib2R5LFxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0Zm9vdCxcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGgsXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRkLFxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0ciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGhlYWQgdHIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC05OTk5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTk5OTlweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0Ym9keSB0ciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xuXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgbW8tcGFkZGluZykgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkYmFzZS10YWJsZSwgbW8tYm9yZGVyLWJvdHRvbS13aWR0aCkgc29saWQgJGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1kYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBtby1wYWRkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYubm8tZGF0YSB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgbW8tcGFkZGluZykgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuLyogb3ZlcndyaXRlIHRhYiBzdHlsZSAqL1xubWVyYy10YWIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IG1hcC1nZXQoJGJhc2UtdGFiLCBmb250LXNpemUpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItYm9yZGVyLXdpZHRoKTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgICAgIC8qIOmXnOmWieeahOWPieWPiSAqL1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy1jbG9zZS14IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWJvcmRlci13aWR0aCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi1idG4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogbWFwLWdldCgkYmFzZS10YWIsIGNvbnRlbnQtYm9yZGVyLXdpZHRoKTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWIsIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiDpoY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICAmLm1lcmMtdGFiLXByaW1hcnkge1xuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuLvpoYzoibLororlvaJcbiAgICAmLm1lcmMtdGFiLXByaW1hcnktdmFyaWFudCB7XG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibJcbiAgICAmLm1lcmMtdGFiLXNlY29uZGFyeSB7XG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibLororlvaJcbiAgICAmLm1lcmMtdGFiLXNlY29uZGFyeS12YXJpYW50IHtcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmLm1lcmMtdGFiLXRoaXJkIHtcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibLororlvaJcbiAgICAmLm1lcmMtdGFiLXRoaXJkLXZhcmlhbnQge1xuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiDpoY/oibIgZW5kICovXG5cbiAgICAvKiB0YWIg6auY5bqmIHN0YXJ0ICovXG4gICAgLy8g5bCPXG4gICAgJi5tZXJjLXRhYi1zbWFsbCB7XG4gICAgICAgID4gLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuK1cbiAgICAmLm1lcmMtdGFiLW5vcm1hbCB7XG4gICAgICAgID4gLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDlpKdcbiAgICAmLm1lcmMtdGFiLWxhcmdlIHtcbiAgICAgICAgPiAuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qIHRhYiDpq5jluqYgZW5kICovXG59XG4vKiBlbmQgb2Ygb3ZlcndyaXRlIHRhYiBzdHlsZSAqL1xuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLnRvZ2dsZS13cmFwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG5tZXJjLXRhYiB7XG4gICAgLyog6aGP6ImyIHN0YXJ0ICovXG4gICAgLy8g5Li76aGM6ImyXG4gICAgJlttZXJjVHlwZT1cInByaW1hcnlcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDkuLvpoYzoibLororlvaJcbiAgICAmW21lcmNUeXBlPVwicHJpbWFyeVZhcmlhbnRcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qyh6KaB6ImyXG4gICAgJlttZXJjVHlwZT1cInNlY29uZGFyeVwiXSB7XG4gICAgICAgIC8vID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAvLyAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIgPiAuYW50LXRhYnMtY29udGVudCA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgLy8gICAgICAgICBtZXJjLXRvZ2dsZS1jb2xsYXBzZSAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXG4gICAgJlttZXJjVHlwZT1cInNlY29uZGFyeVZhcmlhbnRcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmW21lcmNUeXBlPVwidGhpcmRcIl0ge1xuICAgICAgICAvLyA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgLy8gICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyID4gLmFudC10YWJzLWNvbnRlbnQgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgIC8vICAgICAgICAgLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJsuiuiuW9olxuICAgICZbbWVyY1R5cGU9XCJ0aGlyZFZhcmlhbnRcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyog6aGP6ImyIGVuZCAqL1xuICAgIC8qIHRhYiDpq5jluqYgc3RhcnQgKi9cbiAgICAvLyDlsI9cbiAgICAmW21lcmNTaXplPVwic21hbGxcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuK1cbiAgICAmW21lcmNTaXplPVwibm9ybWFsXCJdIHtcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5aSnXG4gICAgJlttZXJjU2l6ZT1cImxhcmdlXCJdIHtcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogdGFiIOmrmOW6piBlbmQgKi9cbn1cbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbi5tZXJjLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkYnRuLCBzaGFkb3cpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRidG4sIGJvcmRlci1yYWRpdXMpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAvKiDpoY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICAmLm1lcmMtYnRuLXByaW1hcnkge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG5cbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxuICAgICYubWVyYy1idG4tcHJpbWFyeS12YXJpYW50IHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHByaW1hcnktdmFyaWFudC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5qyh6KaB6ImyXG4gICAgJi5tZXJjLWJ0bi1zZWNvbmRhcnkge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgOCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkc2Vjb25kYXJ5LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibLororlvaJcbiAgICAmLm1lcmMtYnRuLXNlY29uZGFyeS12YXJpYW50IHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRzZWNvbmRhcnktdmFyaWFudC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJslxuICAgICYubWVyYy1idG4tdGhpcmQge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCR0aGlyZC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtY29sb3IsIDglKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHRoaXJkLWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6Imy6K6K5b2iXG4gICAgJi5tZXJjLWJ0bi10aGlyZC12YXJpYW50IHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCR0aGlyZC12YXJpYW50LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtdmFyaWFudC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xuICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICA+ICoge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjJzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiDpoY/oibIgZW5kICovXG5cbiAgICAvKiDpq5jluqYgc3RhcnQgKi9cbiAgICAvLyDlsI9cbiAgICAmLm1lcmMtYnRuLXNtYWxsIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogbWFwLWdldCgkYnRuLWhlaWdodCwgc20pO1xuICAgIH1cbiAgICAvLyDkuK1cbiAgICAmLm1lcmMtYnRuLW5vcm1hbCBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IG1hcC1nZXQoJGJ0bi1oZWlnaHQsIG1kKTtcbiAgICB9XG4gICAgLy8g5aSnXG4gICAgJi5tZXJjLWJ0bi1sYXJnZSBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IG1hcC1nZXQoJGJ0bi1oZWlnaHQsIGxnKTtcbiAgICB9XG4gICAgLyog6auY5bqmIGVuZCAqL1xuXG4gICAgLyog5a+s5bqmIHN0YXJ0ICovXG4gICAgLy8geHNcbiAgICAmLm1lcmMtYnRuLXhzIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHhzKTtcbiAgICB9XG4gICAgLy8gc21cbiAgICAmLm1lcmMtYnRuLXNtIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHNtKTtcbiAgICB9XG4gICAgLy8gbWRcbiAgICAmLm1lcmMtYnRuLW1kIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIG1kKTtcbiAgICB9XG4gICAgLy8gbGdcbiAgICAmLm1lcmMtYnRuLWxnIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIGxnKTtcbiAgICB9XG4gICAgLy8geGxcbiAgICAmLm1lcmMtYnRuLXhsIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHhsKTtcbiAgICB9XG4gICAgLyog5a+s5bqmIGVuZCAqL1xuXG4gICAgLyogRGlzYWJsZWQgKi9cbiAgICAmLmRpc2FibGVkIGJ1dHRvbltkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG5AbWl4aW4gZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvYy1kYXRlLXBpY2tlciB7XG4gIC5kYXRlLXBpY2tlciB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIC8vIGhlaWdodDogMjRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICAvLyAmOmhvdmVyIHtcbiAgICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgIC8vIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5jbGVhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjbGVhciBpY29uIHN0YXJ0XG4gIC5jbGVhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDdweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLy8gY2xlYXIgaWNvbiBlbmRcblxuICAuc2VsZWN0ZWQtZGF0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLy8gZGlzcGxheSBmb3JtYXRcblxuICAvLyBwb3BvdXQgbW9kYWwgc3RhcnRcbiAgLmRhdGVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTE1JTtcbiAgICAvLyBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgJi5hY3RpdmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIC8vaGVhZGVyIHN0YXJ0XG4gIC5oZWFkZXItYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZzogMTBweCAycHggMDtcbiAgfVxuXG4gIC5oZWFkZXItbGFiZWwge1xuICAgIGZsZXg6IDE7XG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcbiAgfVxuXG4gIC5hcnJvdy1idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgfVxuXG4gIC8vY2FsZW5kYXIgc3RhcnRcbiAgLndlZWtzLFxuICAuZGF5cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICB9XG5cbiAgLndlZWtzIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gIH1cblxuICAud2VlayxcbiAgLmRheSB7XG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcbiAgfVxuXG4gIC5kYXksXG4gIC55ZWFyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAueWVhcnMsXG4gIC5tb250aHMge1xuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XG4gIH1cblxuICAubm90LXByZXNlbnQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ncmF5O1xuICB9XG5cbiAgLmRheS5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5kYXkuc2VsZWN0ZWQubm90LXByZXNlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ncmF5O1xuICB9XG5cbiAgLy8g5bqV6YOo5LuK5aSpXG4gIC50b2RheSB7XG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmLm5vdC1wcmVzZW50IHtcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICB9XG5cbiAgLmhyIHtcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXk7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4gIC5zdWZmaXgtaWNvbiB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICB9XG59XG5cbjo6bmctZGVlcC5tZXJjLXllYXItc2VsZWN0IHtcbiAgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbnQtc2VsZWN0LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG4ubWVyYy1jYWxlbmRhcntcbiAgICAucm9jWWVhciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiA0NXB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJvY1llYXItdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMzhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG4ge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICAgICAgICAvLyBib3JkZXI6ICMyYzNlNTAgMXB4IHNvbGlkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICBib3JkZXI6ICRzZWNvbmRhcnktY29sb3IgMXB4IHNvbGlkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIH1cbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG5bZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcbiAgICAgICAgYm9yZGVyOiAjZDlkOWQ5IDFweCBzb2xpZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICB9XG4gICAgLmZvci1jYWxlbmRhciA+IC5hbnQtYnRuOmhvdmVyOm5vdChbZGlzYWJsZWRdKSxcbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG46YWN0aXZlOm5vdChbZGlzYWJsZWRdKSxcbiAgICAuZm9yLWNhbGVuZGFyID4gLmZvY3VzLXRvZGF5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkc2Vjb25kYXJ5LWNvbG9yLCAxMCUpO1xuICAgICAgICBib3JkZXI6IGxpZ2h0ZW4oJHNlY29uZGFyeS1jb2xvciwgMTAlKSAxcHggc29saWQ7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "VVBw":
/*!************************************************************!*\
  !*** ./projects/tc-front/src/app/shared/shared.service.ts ***!
  \************************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SharedService {
    constructor() {
        this.userDeviceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * 使用者使用的裝置
         */
        this.userDevice = '';
    }
    set setUserDeviceSubject(value) {
        this.userDeviceSubject.next(value);
        this.userDevice = value;
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WLLR":
/*!********************************************************!*\
  !*** ./projects/tc-lib/src/lib/validators/errorMsg.ts ***!
  \********************************************************/
/*! exports provided: errorMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMsg", function() { return errorMsg; });
const errorMsg = {
    /**
     * 表單錯誤訊息
     */
    getFormErrorStr(form, key, customMsg) {
        let msg = '';
        const formCtrl = form === null || form === void 0 ? void 0 : form.get(key);
        const errors = formCtrl === null || formCtrl === void 0 ? void 0 : formCtrl.errors;
        if (!form ||
            !formCtrl ||
            !formCtrl.dirty ||
            !errors) {
            msg = '';
        }
        if (errors === null || errors === void 0 ? void 0 : errors.required) {
            return msg = '*此欄位為必填欄位';
        }
        if (errors === null || errors === void 0 ? void 0 : errors.msg) {
            msg = errors.msg;
        }
        if (errors && customMsg) {
            msg = customMsg;
        }
        return msg;
    }
};


/***/ }),

/***/ "X+/4":
/*!*******************************************************************************!*\
  !*** ./projects/tc-front/src/app/layout/menu-mobile/menu-mobile.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MenuMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuMobileComponent", function() { return MenuMobileComponent; });
/* harmony import */ var _content_const_icon_path_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../content/const/icon-path.const */ "T41C");
/* harmony import */ var _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/const/routing-path.const */ "2fUu");
/* harmony import */ var _content_quiz_const_tab_param_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content/quiz/const/tab-param.const */ "yjt8");
/* harmony import */ var _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/enums/account-type.enum */ "riHe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/account.service */ "TyOg");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












function MenuMobileComponent_ng_container_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r3.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
} }
const _c0 = function (a0) { return { tab: a0 }; };
function MenuMobileComponent_ng_container_2_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r3.url)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, item_r3.param));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
} }
function MenuMobileComponent_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MenuMobileComponent_ng_container_2_li_1_a_1_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MenuMobileComponent_ng_container_2_li_1_a_2_Template, 2, 5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r3.param);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r3.param);
} }
function MenuMobileComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MenuMobileComponent_ng_container_2_li_1_Template, 3, 2, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r4 < 3);
} }
function MenuMobileComponent_ng_container_8_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r11.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
} }
function MenuMobileComponent_ng_container_8_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r11.url)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, item_r11.param));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
} }
function MenuMobileComponent_ng_container_8_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r11.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
} }
function MenuMobileComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MenuMobileComponent_ng_container_8_a_2_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MenuMobileComponent_ng_container_8_a_3_Template, 2, 5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MenuMobileComponent_ng_container_8_a_4_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r11.param && item_r11.url !== ctx_r2.ROUTING_PATH.PROJECTS);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r11.param && item_r11.url !== ctx_r2.ROUTING_PATH.PROJECTS);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r11.url === ctx_r2.ROUTING_PATH.PROJECTS && ctx_r2.accountService.account.account_type === ctx_r2.AccountType.sales);
} }
class MenuMobileComponent {
    constructor(accountService) {
        this.accountService = accountService;
        /**
         * TODO: 跟pad版整合
         * menu
         */
        this.projectMenu = [
            { name: '行事曆', url: _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].HOME },
            { name: '個人資訊', url: _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].PERSONAL_INFO },
            { name: '課程/活動', url: _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].COURSE },
            { name: '測驗', url: _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].QUIZ, param: _content_quiz_const_tab_param_const__WEBPACK_IMPORTED_MODULE_2__["TAB_PARAM"].QUIZ_LIST },
            { name: '專案', url: _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].PROJECTS },
        ];
        this.ICON_PATH = _content_const_icon_path_const__WEBPACK_IMPORTED_MODULE_0__["ICON_PATH"];
        this.ROUTING_PATH = _content_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"];
        this.AccountType = _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_3__["AccountType"];
    }
    ngOnInit() {
    }
}
MenuMobileComponent.ɵfac = function MenuMobileComponent_Factory(t) { return new (t || MenuMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"])); };
MenuMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MenuMobileComponent, selectors: [["app-menu-mobile"]], decls: 9, vars: 5, consts: [[1, "menu-bar", "font-weight-bold"], ["nz-menu", "", "nzMode", "horizontal"], [4, "ngFor", "ngForOf"], ["nz-dropdown", "", "nzTrigger", "click", 3, "nzDropdownMenu"], [2, "width", "20px", "text-align", "center"], [3, "iconType", "iconSize"], ["id", "for-menu"], ["menu", "nzDropdownMenu"], ["nz-menu-item", "", "nzMatchRouter", "", 4, "ngIf"], ["nz-menu-item", "", "nzMatchRouter", ""], [3, "routerLink", 4, "ngIf"], [3, "routerLink", "queryParams", 4, "ngIf"], [3, "routerLink"], [3, "routerLink", "queryParams"]], template: function MenuMobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MenuMobileComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "merc-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nz-dropdown-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MenuMobileComponent_ng_container_8_Template, 5, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.projectMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMenu", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("iconType", ctx.ICON_PATH.MORE)("iconSize", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.projectMenu);
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_8__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_8__["NzDropDownDirective"], merc_lib__WEBPACK_IMPORTED_MODULE_9__["MercIconComponent"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_8__["NzDropdownMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-card[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0;\n  border: rgba(153, 153, 153, 0.2) 1px solid;\n  box-shadow: none;\n  background-color: #fff;\n  border-radius: 6px;\n  \n  \n  \n  \n  \n  \n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-self: center;\n  font-size: 25px;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 6px 6px 0 0;\n  color: #fff;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-content[_ngcontent-%COMP%] {\n  display: block;\n  padding: 35px 15px;\n}\n.merc-card.merc-card-primary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\n.merc-card.merc-card-primary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\n.merc-card.merc-card-secondary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\n.merc-card.merc-card-secondary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\n.merc-card.merc-card-third[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\n.merc-card.merc-card-third-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary-variant[_ngcontent-%COMP%] {\n  color: #ec6122;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary[_ngcontent-%COMP%] {\n  color: #ff6621;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary-variant[_ngcontent-%COMP%] {\n  color: #f8c73f;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third[_ngcontent-%COMP%] {\n  color: #58a8dd;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third-variant[_ngcontent-%COMP%] {\n  color: #fffaf1;\n}\n.merc-card.merc-card-small[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-card.merc-card-normal[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.merc-card.merc-card-large[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-table[_ngcontent-%COMP%] {\n  \n  \n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-header[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%] {\n  overflow-y: overlay !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > .ant-table-row[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]   .ant-table-column-has-sorters[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-placeholder[_ngcontent-%COMP%]   .ant-table-expanded-row-fixed[_ngcontent-%COMP%] {\n  margin: -4px -8px;\n  min-width: 100%;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\nmerc-table[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 0;\n  background-color: transparent;\n  position: absolute;\n  top: 50%;\n  right: 26px;\n  transform: translateY(-50%);\n  display: flex;\n  flex-wrap: nowrap;\n  transition: opacity 0.3s, background-color 0.3s;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) {\n  background-color: #c9c9c9;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)   .hover-to-edit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nmerc-table.merc-table-primary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\nmerc-table.merc-table-primary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\nmerc-table.merc-table-secondary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\nmerc-table.merc-table-secondary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\nmerc-table.merc-table-third[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\nmerc-table.merc-table-third-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-flex-table-primary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #e6002d;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #e6002d;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ec6122;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ec6122;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ff6621;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ff6621;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #f8c73f;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #f8c73f;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #58a8dd;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #58a8dd;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #fffaf1;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #fffaf1;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-tab[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  \n  \n  \n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%] {\n  border: 0;\n  margin-bottom: 0px;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]::before {\n  border-bottom: hidden;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  border: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6002d;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6002d;\n  border-bottom-width: 0px !important;\n  padding: 0 15px;\n  height: 35px;\n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%]   .ant-tabs-close-x[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 16px;\n  height: 18px;\n  margin-right: 0 !important;\n  vertical-align: middle;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%]   .ant-tabs-tab-btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #fff;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-small[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 25px;\n}\nmerc-tab.merc-tab-normal[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 35px;\n}\nmerc-tab.merc-tab-large[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.toggle-float-btn[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #e6002d;\n  color: white;\n  border: 1px solid #e6002d;\n  border-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  height: 40px;\n  padding: 0 16px;\n  line-height: 38px;\n  cursor: pointer;\n}\n.toggle-float-btn[_ngcontent-%COMP%]   .toggle-wrap[_ngcontent-%COMP%] {\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n}\nmerc-tab[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\nmerc-tab[mercType=primary][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\nmerc-tab[mercType=primaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\nmerc-tab[mercType=secondary][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\nmerc-tab[mercType=secondaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\nmerc-tab[mercType=third][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\nmerc-tab[mercType=thirdVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\nmerc-tab[mercSize=small][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 30px;\n}\nmerc-tab[mercSize=normal][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 42px;\n}\nmerc-tab[mercSize=large][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  \n  \n  \n  \n  \n  \n  \n}\n.merc-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 2px 0 rgba(21, 28, 42, 0.17);\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #bd0025;\n  border: 1px solid #bd0025;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #e6002d;\n  background-color: #fff;\n  color: #e6002d;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #9a001e;\n  border: 1px solid #9a001e;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d34e12;\n  border: 1px solid #d34e12;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ec6122;\n  background-color: #fff;\n  color: #ec6122;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b2420f;\n  border: 1px solid #b2420f;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f74d00;\n  border: 1px solid #f74d00;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ff6621;\n  background-color: #fff;\n  color: #ff6621;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #d44200;\n  border: 1px solid #d44200;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f7bc18;\n  border: 1px solid #f7bc18;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #f8c73f;\n  background-color: #fff;\n  color: #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #e2a908;\n  border: 1px solid #e2a908;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #3696d6;\n  border: 1px solid #3696d6;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #58a8dd;\n  background-color: #fff;\n  color: #58a8dd;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #2784c1;\n  border: 1px solid #2784c1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ffebc8;\n  border: 1px solid #ffebc8;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #fffaf1;\n  background-color: #fff;\n  color: #fffaf1;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #ffdfa5;\n  border: 1px solid #ffdfa5;\n}\n.merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active    > *[_ngcontent-%COMP%], .merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover    > *[_ngcontent-%COMP%] {\n  transition: filter 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  filter: brightness(0.6);\n}\n.merc-btn.merc-btn-small[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-btn.merc-btn-normal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.merc-btn.merc-btn-large[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.merc-btn.merc-btn-xs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.merc-btn.merc-btn-sm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.merc-btn.merc-btn-md[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.merc-btn.merc-btn-lg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.merc-btn.merc-btn-xl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.merc-btn.disabled[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.25);\n  background: #f5f5f5;\n  border-color: #d9d9d9;\n  text-shadow: none;\n  box-shadow: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  max-width: 200px;\n  min-width: 160px;\n  position: relative;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%]:hover   .clear[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 7px;\n  padding: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: white;\n  z-index: 999;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .selected-date[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 115%;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  min-width: 200px;\n  background-color: #fff;\n  z-index: 999;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 2px 0;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 16px;\n  text-align: center;\n  color: #e6002d;\n  display: inline-block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .week[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .months[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .not-present[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected.not-present[_ngcontent-%COMP%] {\n  background-color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #e6002d;\n  color: #e6002d;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today.not-present[_ngcontent-%COMP%] {\n  color: #efefef;\n  cursor: not-allowed;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%] {\n  color: #efefef;\n  margin: 10px;\n  opacity: 0.8;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .suffix-icon[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n .merc-year-select .ant-select-selection-item {\n  padding-right: 15px !important;\n}\n .merc-year-select .ant-select-item {\n  padding: 5px 8px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-calendar[_ngcontent-%COMP%]   .rocYear[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n@media screen and (max-width: 750px) {\n  .merc-calendar[_ngcontent-%COMP%]   .rocYear[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 45px;\n    justify-content: center;\n  }\n}\n.merc-calendar[_ngcontent-%COMP%]   .rocYear-title[_ngcontent-%COMP%] {\n  position: relative;\n  top: 38px;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: #ff6621 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[disabled][_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n  border: #d9d9d9 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:hover:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:active:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .focus-today[_ngcontent-%COMP%] {\n  background-color: #ff8954;\n  border: #ff8954 1px solid;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.menu-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  border-bottom: 2px solid #cdcdcd;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: 60px;\n  display: flex;\n  justify-content: center;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 10px !important;\n}\n.ant-dropdown[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21lbnUtbW9iaWxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY3VzdG9tLXNldHRpbmcuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvc3R5bGVzL2N1c3RvbS1zZXR0aW5nLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL3N0eWxlcy9fY29tcG9uZW50cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9tZXJjLWNhcmQvbWVyYy1jYXJkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9tZXJjLXRhYmxlL21lcmMtdGFibGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2ZsZXgtdGFibGUvZmxleC10YWJsZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWVyYy10YWIvbWVyYy10YWIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lcmMtdGFiL3RvZ2dsZS1jb2xsYXBzZS90b2dnbGUtY29sbGFwc2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2RhdGUvY29tcG9uZW50cy9yb2MtZGF0ZS1waWNrZXIvcm9jLWRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9kYXRlL2NvbXBvbmVudHMvbWVyYy1jYWxlbmRhci9tZXJjLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixhQUFBO0FBMEJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QUNsSEEsd0RBQUE7QUFDQSxhQUFBO0FBdUJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QUNoSEEsYUFBQTtBREFBLHdEQUFBO0FBQ0EsYUFBQTtBQXVCQSxZQUFBO0FBY0EsWUFBQTtBQUNBLG1CQUFBO0FBaUJBLGlCQUFBO0FBRUEsb0JBQUE7QUFtQkEsa0JBQUE7QUFFQSxxQkFBQTtBQW9CQSxtQkFBQTtBQWFBLGlCQUFBO0FFOUdBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQWtCQSxzQkFBQTtFQXlCQSxvQkFBQTtFQUVBLHNCQUFBO0VBT0Esa0JBQUE7RUFFQSxvQkFBQTtFQWFBLGtCQUFBO0FKNUJKO0FJckNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Es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a0JBQUE7QUF5MUNKIiwiZmlsZSI6Im1lbnUtbW9iaWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vY3VzdG9tLXNldHRpbmcuc2Nzcyc7XG4kY29sb3ItZ3JheTogI2NkY2RjZDtcbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1lbnUtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY29sb3ItZ3JheTtcbn1cblxudWwgbGkgPiBhIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxudWwgbGkge1xuICAgIG1hcmdpbjogMHB4IDEwcHggIWltcG9ydGFudDtcbn1cbi5hbnQtZHJvcGRvd24ge1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4iLCIvKiog5Z+656SO5Yqf6IO96Imy6Kit5a6aICovXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItZGFyazogcmdiYSgwLCAwLCAwLCAwLjgpO1xuLy8g5Li76KaB6ImyXG4kcHJpbWFyeS1jb2xvcjogI2U2MDAyZDtcbi8vIOS4u+imgeiJsuiuiuW9olxuJHByaW1hcnktdmFyaWFudC1jb2xvcjogI2VjNjEyMjtcbi8vIOasoeimgeiJslxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjYyMTtcbi8vIOasoeimgeiJsuiuiuW9olxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjZjhjNzNmO1xuLy8g56ys5LiJ6ImyXG4kdGhpcmQtY29sb3I6ICM1OGE4ZGQ7XG4vLyDnrKzkuInoibLororlvaJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZmZmYWYxO1xuXG4vLyDmt7rngbBcbiRjb2xvci1saWdodC1ncmF5OiAjZWZlZmVmO1xuLy8g5rex54GwXG4kY29sb3ItZGFyay1ncmF5OiAjMzMzMzMzO1xuLy8g55m9XG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3Itc2lsdmVyOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMik7XG4kY29sb3ItbGlnaHRlci1ncmF5OiAjZjlmOWY5O1xuJGNvbG9yLWdyZWVuOiAjODdiODQ4O1xuXG4vKiog5Z+656SO5YWD5Lu26Kit5a6aICovXG4kZm9udC1zejogKFxuICB4bDogMjVweCxcbiAgbGc6IDE4cHgsXG4gIG1kOiAxNnB4LFxuICBzbTogMTRweCxcbiAgeHM6IDEycHgsXG4pO1xuXG4kZm9udC13ZWlnaHQ6IChcbiAgZmF0dHk6IDYwMCxcbiAgbm9ybWFsOiBub3JtYWwsXG4pO1xuXG4vKiog5bi455So5YWD5Lu26Kit5a6aICovXG4vKiBiYXNlIGJ0biBzdGFydCAqL1xuJGJ0bjogKFxuICBib3JkZXItcmFkaXVzOiAzcHgsXG4gIHNoYWRvdzogMXB4IDFweCAycHggMCByZ2JhKDIxLCAyOCwgNDIsIDAuMTcpLFxuKTtcbiRidG4taGVpZ2h0OiAoXG4gIGxnOiA0MHB4LFxuICBtZDogMzVweCxcbiAgc206IDMwcHgsXG4pO1xuJGJ0bi13aWR0aDogKFxuICB4bDogMjAwcHgsXG4gIGxnOiAxNjBweCxcbiAgbWQ6IDEyMHB4LFxuICBzbTogOTBweCxcbiAgeHM6IDcwcHgsXG4pO1xuLyogYmFzZSBidG4gZW5kICovXG5cbi8qKiBiYXNlIGNhcmQgc3RhcnQqL1xuJGJhc2UtY2FyZDogKFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUsXG4gIGJveC1zaGFkb3c6IG5vbmUsXG4gIHBhZGRpbmc6IDAsXG4gIGJvcmRlcjogJGNvbG9yLXNpbHZlciAxcHggc29saWQsXG4gIGJvcmRlci1yYWRpdXM6IDZweCxcbik7XG5cbiRiYXNlLWNhcmQtaGVhZGVyOiAoXG4gIGFsaWduLXNlbGY6IGNlbnRlcixcbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCB4bCksXG4gIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRmb250LXdlaWdodCwgZmF0dHkpLFxuICBwYWRkaW5nOiAxMHB4IDIwcHgsXG4pO1xuXG4kYmFzZS1jYXJkLWNvbnRlbnQ6IChcbiAgcGFkZGluZzogMzVweCAxNXB4LFxuKTtcbi8qKiBiYXNlIGNhcmQgZW5kKi9cblxuLyogYmFzZSB0YWJsZSBzdGFydCAqL1xuJGJhc2UtdGFibGU6IChcbiAgLy8gaG92ZXIg6aGP6ImyXG4gIGhvdmVyLWJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3ItbGlnaHQtZ3JheSwgMTUlKSxcbiAgLy8g6ZaT6ZqU6ImyXG4gIGV2ZW4tY29sLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcixcbiAgLy8g5ZyT6KeSXG4gIHJhZGl1czogN3B4LFxuICAvLyDpmbDlvbFcbiAgc2hhZG93OiAxcHggMnB4IDRweCAjZDVkNWQ1LFxuICAvLyDooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malFxuICBwYWRkaW5nOiA4cHggOHB4LFxuICAvLyDmiYvmqZ/niYjooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLXBhZGRpbmc6IDNweCA4cHgsXG4gIC8vIOW5vnB45Lul5LiL5L2/55So5omL5qmf54mI77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcbiAgYnJlYWstcG9pbnQ6IDc2N3B4LFxuICAvLyDmrITkvY3kuIvmlrnnmoRib3JkZXItYm90dG9t77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcbiAgbW8tYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4XG4pO1xuXG4vKiBiYXNlIHRhYiBzdGFydCAqL1xuJGJhc2UtdGFiOiAoXG4gIC8vIOmhj+iJsihtZXJjLXRhYiDmnKrlgrPlhaUgbWVyY1R5cGUg5pmC5pyJ5pWIKVxuICB0YWItY29sb3I6ICRwcmltYXJ5LWNvbG9yLFxuICAvLyB0YWIg6YKK5qGGXG4gIHRhYi1ib3JkZXItd2lkdGg6IDFweCxcbiAgLy8gY29udGVudCDpgormoYZcbiAgY29udGVudC1ib3JkZXItd2lkdGg6IDFweCxcbiAgLy8g5ZyT6KeSXG4gIHJhZGl1czogN3B4LFxuICAvLyDlrZfpq5TlpKflsI9cbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZylcbik7XG4vKiBiYXNlIHRhYiBlbmQgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL3N0eWxlcy9tZXJjLWxpYi5zY3NzXCI7XG4iLCIvKiDmraRzY3Nz54K65YWD5Lu25YWn55qEIGN1c3RvbS1zZXR0aW5n77yM6IiH5ZyW5pu46aSo5YWo5Z+f55qEIGN1c3RvbS1zZXR0aW5nIOS4jeWQjCAqL1xuLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xuJGNvbG9yLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCwgMC44KSAhZGVmYXVsdDtcbi8vIOS4u+imgeiJslxuJHByaW1hcnktY29sb3I6ICNiOWUxZTQgIWRlZmF1bHQ7XG4vLyDkuLvopoHoibLororlvaJcbiRwcmltYXJ5LXZhcmlhbnQtY29sb3I6ICM1NGJlOWYgIWRlZmF1bHQ7XG4vLyDmrKHopoHoibJcbiRzZWNvbmRhcnktY29sb3I6ICM0YjhhYzUgIWRlZmF1bHQ7XG4vLyDmrKHopoHoibLororlvaJcbiRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjogI2U2ZjNmNyAhZGVmYXVsdDtcbi8vIOesrOS4ieiJslxuJHRoaXJkLWNvbG9yOiAjODAwMDgwICFkZWZhdWx0O1xuLy8g56ys5LiJ6Imy6K6K5b2iXG4kdGhpcmQtdmFyaWFudC1jb2xvcjogI2VlZDdlZCAhZGVmYXVsdDtcblxuLy8g5re654GwXG4kY29sb3ItbGlnaHQtZ3JheTogI2U1ZTVlNSAhZGVmYXVsdDtcblxuLy8g6aGP6Imy5a6a576p5YyFXG4kY29sb3JTZXQ6IFwicHJpbWFyeVwiICRwcmltYXJ5LWNvbG9yLCBcInByaW1hcnktdmFyaWFudFwiICRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIFwic2Vjb25kYXJ5XCIgJHNlY29uZGFyeS1jb2xvcixcbiAgXCJzZWNvbmRhcnktdmFyaWFudFwiICRzZWNvbmRhcnktdmFyaWFudC1jb2xvciwgXCJ0aGlyZFwiICR0aGlyZC1jb2xvciwgXCJ0aGlyZC12YXJpYW50XCIgJHRoaXJkLXZhcmlhbnQtY29sb3I7XG5cbi8qKiDln7rnpI7lhYPku7boqK3lrpogKi9cbiRmb250LXN6OiAoXG4gIHhsOiAzMHB4LFxuICBsZzogMThweCxcbiAgbWQ6IDE2cHgsXG4gIHNtOiAxNHB4LFxuICB4czogMTJweCxcbikgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodDogKFxuICBmYXR0eTogNjAwLFxuICBub3JtYWw6IG5vcm1hbCxcbikgIWRlZmF1bHQ7XG5cbi8qKiDluLjnlKjlhYPku7boqK3lrpogKi9cbi8qIGJhc2UgYnRuIHN0YXJ0ICovXG4kYnRuOiAoXG4gIGJvcmRlci1yYWRpdXM6IDdweCxcbiAgc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYmEoMjEsIDI4LCA0MiwgMC4xNyksXG4pICFkZWZhdWx0O1xuJGJ0bi1oZWlnaHQ6IChcbiAgbGc6IDQwcHgsXG4gIG1kOiAzNXB4LFxuICBzbTogMzBweCxcbikgIWRlZmF1bHQ7XG4kYnRuLXdpZHRoOiAoXG4gIHhsOiAyMDBweCxcbiAgbGc6IDE1MHB4LFxuICBtZDogMTIwcHgsXG4gIHNtOiA5MHB4LFxuICB4czogNjBweCxcbikgIWRlZmF1bHQ7XG4vKiBiYXNlIGJ0biBlbmQgKi9cblxuLyoqIGJhc2UgY2FyZCBzdGFydCovXG4kYmFzZS1jYXJkOiAoXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSxcbiAgYm94LXNoYWRvdzogbm9uZSxcbiAgcGFkZGluZzogMCxcbiAgYm9yZGVyOiAwLFxuICBib3JkZXItcmFkaXVzOiA2cHgsXG4pICFkZWZhdWx0O1xuXG4kYmFzZS1jYXJkLWhlYWRlcjogKFxuICBhbGlnbi1zZWxmOiBjZW50ZXIsXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbGcpLFxuICBmb250LXdlaWdodDogbWFwLWdldCgkZm9udC13ZWlnaHQsIGZhdHR5KSxcbiAgcGFkZGluZzogMCAxNXB4LFxuKSAhZGVmYXVsdDtcblxuJGJhc2UtY2FyZC1jb250ZW50OiAoXG4gIHBhZGRpbmc6IDEwcHggMTVweCxcbikgIWRlZmF1bHQ7XG4vKiogYmFzZSBjYXJkIGVuZCovXG5cbi8qIGJhc2UgdGFibGUgc3RhcnQgKi9cbiRiYXNlLXRhYmxlOiAoXG4gIC8vIGhvdmVyIOmhj+iJslxuICBob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLWxpZ2h0LWdyYXksIDE1JSksXG4gIC8vIOmWk+malOiJslxuICBldmVuLWNvbC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXksXG4gIC8vIOWck+inklxuICByYWRpdXM6IDdweCxcbiAgLy8g6Zmw5b2xXG4gIHNoYWRvdzogMXB4IDJweCA0cHggI2Q1ZDVkNSxcbiAgLy8g6KGo6aCt44CB5YWn5a6577yIdGjjgIF0ZO+8iSDplpPpmpRcbiAgcGFkZGluZzogNHB4IDhweCxcbiAgLy8g5omL5qmf54mI6KGo6aCt44CB5YWn5a6577yIdGjjgIF0ZO+8iSDplpPpmpTvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBtby1wYWRkaW5nOiAxMHB4IDhweCxcbiAgLy8g5bm+cHjku6XkuIvkvb/nlKjmiYvmqZ/niYjvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBicmVhay1wb2ludDogOTkxcHgsXG4gIC8vIOashOS9jeS4i+aWueeahGJvcmRlci1ib3R0b23vvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBtby1ib3JkZXItYm90dG9tLXdpZHRoOiAxcHhcbikgIWRlZmF1bHQ7XG5cbi8qIGJhc2UgdGFiIHN0YXJ0ICovXG4kYmFzZS10YWI6IChcbiAgLy8g6aGP6ImyKG1lcmMtdGFiIOacquWCs+WFpSBtZXJjVHlwZSDmmYLmnInmlYgpXG4gIHRhYi1jb2xvcjogJHByaW1hcnktY29sb3IsXG4gIC8vIHRhYiDnt6jmoYZcbiAgdGFiLWJvcmRlci13aWR0aDogMXB4LFxuICAvLyBjb250ZW50IOe3qOahhlxuICBjb250ZW50LWJvcmRlci13aWR0aDogMTBweCxcbiAgLy8g5ZyT6KeSXG4gIHJhZGl1czogN3B4LFxuICAvLyDlrZfpq5TlpKflsI9cbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZylcbikgIWRlZmF1bHQ7XG4vKiBiYXNlIHRhYiBlbmQgKi9cbiIsIi8qIOWFg+S7tiBzdHlsZSAqL1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL21lcmMtY2FyZC9tZXJjLWNhcmQuY29tcG9uZW50LnNjc3NcIjtcbkBpbXBvcnQgXCIuLi9saWIvY29tcG9uZW50cy9tZXJjLXRhYmxlL21lcmMtdGFibGUuY29tcG9uZW50LnNjc3NcIjtcbkBpbXBvcnQgXCIuLi9saWIvY29tcG9uZW50cy9mbGV4LXRhYmxlL2ZsZXgtdGFibGUuY29tcG9uZW50LnNjc3NcIjtcbkBpbXBvcnQgXCIuLi9saWIvY29tcG9uZW50cy9tZXJjLXRhYi9tZXJjLXRhYi5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL21lcmMtdGFiL3RvZ2dsZS1jb2xsYXBzZS90b2dnbGUtY29sbGFwc2UuY29tcG9uZW50LnNjc3NcIjtcbkBpbXBvcnQgXCIuLi9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vZGF0ZS9jb21wb25lbnRzL3JvYy1kYXRlLXBpY2tlci9yb2MtZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3NcIjtcbkBpbXBvcnQgXCIuLi9kYXRlL2NvbXBvbmVudHMvbWVyYy1jYWxlbmRhci9tZXJjLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzXCI7XG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG4ubWVyYy1jYXJkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIHBhZGRpbmcpO1xuICAgIGJvcmRlcjogbWFwLWdldCgkYmFzZS1jYXJkLCBib3JkZXIpO1xuICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJGJhc2UtY2FyZCwgYm94LXNoYWRvdyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS1jYXJkLCBiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlci1yYWRpdXMpO1xuXG4gICAgLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBtYXAtZ2V0KCRiYXNlLWNhcmQtaGVhZGVyLCBhbGlnbi1zZWxmKTtcbiAgICAgICAgZm9udC1zaXplOiBtYXAtZ2V0KCRiYXNlLWNhcmQtaGVhZGVyLCBmb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogbWFwLWdldCgkYmFzZS1jYXJkLWhlYWRlciwgZm9udC13ZWlnaHQpO1xuICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLWNhcmQtaGVhZGVyLCBwYWRkaW5nKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkYmFzZS1jYXJkLCBib3JkZXItcmFkaXVzKSBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlci1yYWRpdXMpIDAgMDtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB9XG5cbiAgICAubWVyYy1jYXJkLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS1jYXJkLWNvbnRlbnQsIHBhZGRpbmcpO1xuICAgIH1cblxuICAgIC8qIGhlYWRlciDog4zmma/poY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICAmLm1lcmMtY2FyZC1wcmltYXJ5ID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICB9XG4gICAgLy8g5Li76aGM6Imy6K6K5b2iXG4gICAgJi5tZXJjLWNhcmQtcHJpbWFyeS12YXJpYW50ID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgIH1cbiAgICAvLyDmrKHopoHoibJcbiAgICAmLm1lcmMtY2FyZC1zZWNvbmRhcnkgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgfVxuICAgIC8vIOasoeimgeiJsuiuiuW9olxuICAgICYubWVyYy1jYXJkLXNlY29uZGFyeS12YXJpYW50ID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgfVxuICAgIC8vIOesrOS4ieiJslxuICAgICYubWVyYy1jYXJkLXRoaXJkID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgfVxuICAgIC8vIOesrOS4ieiJsuiuiuW9olxuICAgICYubWVyYy1jYXJkLXRoaXJkLXZhcmlhbnQgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgIH1cbiAgICAvKiBoZWFkZXIg6IOM5pmv6aGP6ImyIGVuZCAqL1xuXG4gICAgLyogaGVhZGVyIOWtl+mrlOmhj+iJsiBzdGFydCAqL1xuICAgIC8vIOS4u+mhjOiJslxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJGNvbG9yU2V0IHtcbiAgICAgICAgLm1lcmMtY2FyZC1oZWFkZXItI3skbmFtZX0ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBoZWFkZXIg6aGP6ImyIGVuZCAqL1xuXG4gICAgLyogaGVhZGVyIOmrmOW6piBzdGFydCAqL1xuICAgIC8vIOWwj1xuICAgICYubWVyYy1jYXJkLXNtYWxsID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIC8vIOS4rVxuICAgICYubWVyYy1jYXJkLW5vcm1hbCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgIH1cbiAgICAvLyDlpKdcbiAgICAmLm1lcmMtY2FyZC1sYXJnZSA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAvKiBoZWFkZXIg6auY5bqmIGVuZCAqL1xufVxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuLyogb3ZlcndyaXRlIHRhYmxlIHN0eWxlICovXG5tZXJjLXRhYmxlIHtcbiAgICAuYW50LXRhYmxlLWNvbnRhaW5lciB7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS1oZWFkZXIsXG4gICAgLmFudC10YWJsZS1ib2R5IHtcbiAgICAgICAgb3ZlcmZsb3cteTogb3ZlcmxheSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hbnQtdGFibGUtdGhlYWQgPiAuYW50LXRhYmxlLXJvdyxcbiAgICB0aGVhZCA+IHRyIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgLmFudC10YWJsZS1jb2x1bW4taGFzLXNvcnRlcnMge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5ZyT6KeSXG4gICAgLmFudC10YWJsZS1jb250YWluZXIgdGFibGUgPiB0aGVhZCB7XG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICAgICAgdHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgdGQtcGFkZGluZyk7XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS1wbGFjZWhvbGRlciAuYW50LXRhYmxlLWV4cGFuZGVkLXJvdy1maXhlZCB7XG4gICAgICAgIG1hcmdpbjogLTRweCAtOHB4O1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLy8g6ZaT6ZqU6ImyXG4gICAgLmFudC10YWJsZS10Ym9keSB7XG4gICAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBldmVuLWNvbC1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBob3ZlciDnt6jovK8mJuWIqumZpFxuICAgIC5ob3Zlci10by1lZGl0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMjZweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS10Ym9keSA+IHRyLmFudC10YWJsZS1yb3c6aG92ZXIgPiB0ZCxcbiAgICAuYW50LXRhYmxlLXRib2R5ID4gdHI6aG92ZXI6bm90KC5hbnQtdGFibGUtZXhwYW5kZWQtcm93KTpub3QoLmFudC10YWJsZS1yb3ctc2VsZWN0ZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWJsZSwgaG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIC5ob3Zlci10by1lZGl0IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBoZWFkZXIg6aGP6ImyIHN0YXJ0ICovXG4gICAgLy8g5Li76aGM6ImyXG4gICAgJi5tZXJjLXRhYmxlLXByaW1hcnkge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuLvpoYzoibLororlvaJcbiAgICAmLm1lcmMtdGFibGUtcHJpbWFyeS12YXJpYW50IHtcbiAgICAgICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibJcbiAgICAmLm1lcmMtdGFibGUtc2Vjb25kYXJ5IHtcbiAgICAgICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibLororlvaJcbiAgICAmLm1lcmMtdGFibGUtc2Vjb25kYXJ5LXZhcmlhbnQge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6ImyXG4gICAgJi5tZXJjLXRhYmxlLXRoaXJkIHtcbiAgICAgICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJslxuICAgICYubWVyYy10YWJsZS10aGlyZC12YXJpYW50IHtcbiAgICAgICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogaGVhZGVyIOmhj+iJsiBlbmQgKi9cbn1cblxuLy8g57eK6YSw5ZyoY2FyZOS4i+aWueeahOS4jeimgeWck+inklxubWVyYy1jYXJkLWNvbnRlbnQgPiBtZXJjLXRhYmxlIHtcbiAgICAuYW50LXRhYmxlLWNvbnRhaW5lciB0YWJsZSA+IHRoZWFkIHtcbiAgICAgICAgdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgICAgICB0cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuLyogZW5kIG9mIG92ZXJ3cml0ZSB0YWJsZSBzdHlsZSAqL1xuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkY29sb3JTZXQge1xuICAgIC5tZXJjLWZsZXgtdGFibGUtI3skbmFtZX0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkYmFzZS10YWJsZSwgc2hhZG93KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgcGFkZGluZyk7XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0Ym9keSB0ciB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcblxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHBhZGRpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWJsZSwgZXZlbi1jb2wtY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5uby1kYXRhIHtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubm8tZGF0YS1oaW50IHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Q1ZDVkNTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBicmVhay1wb2ludCkpIHtcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUsXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRoZWFkLFxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0Ym9keSxcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGZvb3QsXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRoLFxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0ZCxcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdHIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRoZWFkIHRyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAtOTk5OXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC05OTk5cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGJvZHkgdHIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcblxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgJGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtdGFibGUsIG1vLXBhZGRpbmcpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJGJhc2UtdGFibGUsIG1vLWJvcmRlci1ib3R0b20td2lkdGgpIHNvbGlkICRjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZGFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgbW8tcGFkZGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLm5vLWRhdGEge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtdGFibGUsIG1vLXBhZGRpbmcpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbi8qIG92ZXJ3cml0ZSB0YWIgc3R5bGUgKi9cbm1lcmMtdGFiIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgIC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtYXAtZ2V0KCRiYXNlLXRhYiwgZm9udC1zaXplKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWIsIHJhZGl1cyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWJvcmRlci13aWR0aCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG5cbiAgICAgICAgICAgICAgICAvKiDpl5zplonnmoTlj4nlj4kgKi9cbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtY2xvc2UteCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFudC10YWJzLXRhYi1hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1ib3JkZXItd2lkdGgpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcblxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWItYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFiLCBjb250ZW50LWJvcmRlci13aWR0aCk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyog6aGP6ImyIHN0YXJ0ICovXG4gICAgLy8g5Li76aGM6ImyXG4gICAgJi5tZXJjLXRhYi1wcmltYXJ5IHtcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5Li76aGM6Imy6K6K5b2iXG4gICAgJi5tZXJjLXRhYi1wcmltYXJ5LXZhcmlhbnQge1xuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5qyh6KaB6ImyXG4gICAgJi5tZXJjLXRhYi1zZWNvbmRhcnkge1xuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXG4gICAgJi5tZXJjLXRhYi1zZWNvbmRhcnktdmFyaWFudCB7XG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6ImyXG4gICAgJi5tZXJjLXRhYi10aGlyZCB7XG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6Imy6K6K5b2iXG4gICAgJi5tZXJjLXRhYi10aGlyZC12YXJpYW50IHtcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyog6aGP6ImyIGVuZCAqL1xuXG4gICAgLyogdGFiIOmrmOW6piBzdGFydCAqL1xuICAgIC8vIOWwj1xuICAgICYubWVyYy10YWItc21hbGwge1xuICAgICAgICA+IC5hbnQtdGFicy1jYXJkID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5LitXG4gICAgJi5tZXJjLXRhYi1ub3JtYWwge1xuICAgICAgICA+IC5hbnQtdGFicy1jYXJkID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5aSnXG4gICAgJi5tZXJjLXRhYi1sYXJnZSB7XG4gICAgICAgID4gLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiB0YWIg6auY5bqmIGVuZCAqL1xufVxuLyogZW5kIG9mIG92ZXJ3cml0ZSB0YWIgc3R5bGUgKi9cbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbi50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC50b2dnbGUtd3JhcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxubWVyYy10YWIge1xuICAgIC8qIOmhj+iJsiBzdGFydCAqL1xuICAgIC8vIOS4u+mhjOiJslxuICAgICZbbWVyY1R5cGU9XCJwcmltYXJ5XCJdIHtcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Li76aGM6Imy6K6K5b2iXG4gICAgJlttZXJjVHlwZT1cInByaW1hcnlWYXJpYW50XCJdIHtcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOasoeimgeiJslxuICAgICZbbWVyY1R5cGU9XCJzZWNvbmRhcnlcIl0ge1xuICAgICAgICAvLyA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgLy8gICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyID4gLmFudC10YWJzLWNvbnRlbnQgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgIC8vICAgICAgICAgbWVyYy10b2dnbGUtY29sbGFwc2UgLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAvLyAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOasoeimgeiJsuiuiuW9olxuICAgICZbbWVyY1R5cGU9XCJzZWNvbmRhcnlWYXJpYW50XCJdIHtcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6ImyXG4gICAgJlttZXJjVHlwZT1cInRoaXJkXCJdIHtcbiAgICAgICAgLy8gPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgIC8vICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciA+IC5hbnQtdGFicy1jb250ZW50ID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAvLyAgICAgICAgIC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAvLyAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtY29sb3I7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibLororlvaJcbiAgICAmW21lcmNUeXBlPVwidGhpcmRWYXJpYW50XCJdIHtcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIOmhj+iJsiBlbmQgKi9cbiAgICAvKiB0YWIg6auY5bqmIHN0YXJ0ICovXG4gICAgLy8g5bCPXG4gICAgJlttZXJjU2l6ZT1cInNtYWxsXCJdIHtcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5LitXG4gICAgJlttZXJjU2l6ZT1cIm5vcm1hbFwiXSB7XG4gICAgICAgID4gLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOWkp1xuICAgICZbbWVyY1NpemU9XCJsYXJnZVwiXSB7XG4gICAgICAgID4gLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIHRhYiDpq5jluqYgZW5kICovXG59XG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG4ubWVyYy1idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJGJ0biwgc2hhZG93KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkYnRuLCBib3JkZXItcmFkaXVzKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLyog6aGP6ImyIHN0YXJ0ICovXG4gICAgLy8g5Li76aGM6ImyXG4gICAgJi5tZXJjLWJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuXG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgOCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgOCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHByaW1hcnktY29sb3IsIDE1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDkuLvpoYzoibLororlvaJcbiAgICAmLm1lcmMtYnRuLXByaW1hcnktdmFyaWFudCB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeS12YXJpYW50LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkcHJpbWFyeS12YXJpYW50LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkcHJpbWFyeS12YXJpYW50LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeimgeiJslxuICAgICYubWVyYy1idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgOCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRzZWNvbmRhcnktY29sb3IsIDE1JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRzZWNvbmRhcnktY29sb3IsIDE1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXG4gICAgJi5tZXJjLWJ0bi1zZWNvbmRhcnktdmFyaWFudCB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRzZWNvbmRhcnktdmFyaWFudC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRzZWNvbmRhcnktdmFyaWFudC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmLm1lcmMtYnRuLXRoaXJkIHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkdGhpcmQtY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHRoaXJkLWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCR0aGlyZC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHRoaXJkLWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJsuiuiuW9olxuICAgICYubWVyYy1idG4tdGhpcmQtdmFyaWFudCB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCR0aGlyZC12YXJpYW50LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCR0aGlyZC12YXJpYW50LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkdGhpcmQtdmFyaWFudC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgPiAqIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyog6aGP6ImyIGVuZCAqL1xuXG4gICAgLyog6auY5bqmIHN0YXJ0ICovXG4gICAgLy8g5bCPXG4gICAgJi5tZXJjLWJ0bi1zbWFsbCBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IG1hcC1nZXQoJGJ0bi1oZWlnaHQsIHNtKTtcbiAgICB9XG4gICAgLy8g5LitXG4gICAgJi5tZXJjLWJ0bi1ub3JtYWwgYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiBtYXAtZ2V0KCRidG4taGVpZ2h0LCBtZCk7XG4gICAgfVxuICAgIC8vIOWkp1xuICAgICYubWVyYy1idG4tbGFyZ2UgYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiBtYXAtZ2V0KCRidG4taGVpZ2h0LCBsZyk7XG4gICAgfVxuICAgIC8qIOmrmOW6piBlbmQgKi9cblxuICAgIC8qIOWvrOW6piBzdGFydCAqL1xuICAgIC8vIHhzXG4gICAgJi5tZXJjLWJ0bi14cyBidXR0b24ge1xuICAgICAgICB3aWR0aDogbWFwLWdldCgkYnRuLXdpZHRoLCB4cyk7XG4gICAgfVxuICAgIC8vIHNtXG4gICAgJi5tZXJjLWJ0bi1zbSBidXR0b24ge1xuICAgICAgICB3aWR0aDogbWFwLWdldCgkYnRuLXdpZHRoLCBzbSk7XG4gICAgfVxuICAgIC8vIG1kXG4gICAgJi5tZXJjLWJ0bi1tZCBidXR0b24ge1xuICAgICAgICB3aWR0aDogbWFwLWdldCgkYnRuLXdpZHRoLCBtZCk7XG4gICAgfVxuICAgIC8vIGxnXG4gICAgJi5tZXJjLWJ0bi1sZyBidXR0b24ge1xuICAgICAgICB3aWR0aDogbWFwLWdldCgkYnRuLXdpZHRoLCBsZyk7XG4gICAgfVxuICAgIC8vIHhsXG4gICAgJi5tZXJjLWJ0bi14bCBidXR0b24ge1xuICAgICAgICB3aWR0aDogbWFwLWdldCgkYnRuLXdpZHRoLCB4bCk7XG4gICAgfVxuICAgIC8qIOWvrOW6piBlbmQgKi9cblxuICAgIC8qIERpc2FibGVkICovXG4gICAgJi5kaXNhYmxlZCBidXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuQG1peGluIGZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb2MtZGF0ZS1waWNrZXIge1xuICAuZGF0ZS1waWNrZXIge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAvLyBoZWlnaHQ6IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgLy8gJjpob3ZlciB7XG4gICAgLy8gICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbiAgICAvLyB9XG4gICAgJjpob3ZlciB7XG4gICAgICAuY2xlYXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY2xlYXIgaWNvbiBzdGFydFxuICAuY2xlYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA3cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC8vIGNsZWFyIGljb24gZW5kXG5cbiAgLnNlbGVjdGVkLWRhdGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC8vIGRpc3BsYXkgZm9ybWF0XG5cbiAgLy8gcG9wb3V0IG1vZGFsIHN0YXJ0XG4gIC5kYXRlcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDExNSU7XG4gICAgLy8gYm94LXNoYWRvdzogMnB4IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgei1pbmRleDogOTk5O1xuICAgICYuYWN0aXZlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICAvL2hlYWRlciBzdGFydFxuICAuaGVhZGVyLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmc6IDEwcHggMnB4IDA7XG4gIH1cblxuICAuaGVhZGVyLWxhYmVsIHtcbiAgICBmbGV4OiAxO1xuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XG4gIH1cblxuICAuYXJyb3ctYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG4gIH1cblxuICAvL2NhbGVuZGFyIHN0YXJ0XG4gIC53ZWVrcyxcbiAgLmRheXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgfVxuXG4gIC53ZWVrcyB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICB9XG5cbiAgLndlZWssXG4gIC5kYXkge1xuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XG4gIH1cblxuICAuZGF5LFxuICAueWVhciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnllYXJzLFxuICAubW9udGhzIHtcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xuICB9XG5cbiAgLm5vdC1wcmVzZW50IHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheTtcbiAgfVxuXG4gIC5kYXkuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAuZGF5LnNlbGVjdGVkLm5vdC1wcmVzZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheTtcbiAgfVxuXG4gIC8vIOW6lemDqOS7iuWkqVxuICAudG9kYXkge1xuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJi5ub3QtcHJlc2VudCB7XG4gICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXk7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxuXG4gIC5ociB7XG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ncmF5O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuICAuc3VmZml4LWljb24ge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgfVxufVxuXG46Om5nLWRlZXAubWVyYy15ZWFyLXNlbGVjdCB7XG4gIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi1pdGVtIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYW50LXNlbGVjdC1pdGVtIHtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICB9XG59XG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuLm1lcmMtY2FsZW5kYXJ7XG4gICAgLnJvY1llYXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNDVweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yb2NZZWFyLXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDM4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmZvci1jYWxlbmRhciA+IC5hbnQtYnRuIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgICAgICAgLy8gYm9yZGVyOiAjMmMzZTUwIDFweCBzb2xpZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgYm9yZGVyOiAkc2Vjb25kYXJ5LWNvbG9yIDFweCBzb2xpZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICB9XG4gICAgLmZvci1jYWxlbmRhciA+IC5hbnQtYnRuW2Rpc2FibGVkXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XG4gICAgICAgIGJvcmRlcjogI2Q5ZDlkOSAxcHggc29saWQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgfVxuICAgIC5mb3ItY2FsZW5kYXIgPiAuYW50LWJ0bjpob3Zlcjpub3QoW2Rpc2FibGVkXSksXG4gICAgLmZvci1jYWxlbmRhciA+IC5hbnQtYnRuOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSksXG4gICAgLmZvci1jYWxlbmRhciA+IC5mb2N1cy10b2RheSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHNlY29uZGFyeS1jb2xvciwgMTAlKTtcbiAgICAgICAgYm9yZGVyOiBsaWdodGVuKCRzZWNvbmRhcnktY29sb3IsIDEwJSkgMXB4IHNvbGlkO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Yn/n":
/*!*******************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/enums/quiz.enum.ts ***!
  \*******************************************************************/
/*! exports provided: QuizAction, QuizStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizAction", function() { return QuizAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizStatus", function() { return QuizStatus; });
/**
 * 測驗列表頁工作
 */
var QuizAction;
(function (QuizAction) {
    /** 報名 */
    QuizAction[QuizAction["join"] = 0] = "join";
    /** 取消報名 */
    QuizAction[QuizAction["cancel"] = 1] = "cancel";
    /** 入場通知(試場資訊) */
    QuizAction[QuizAction["info"] = 2] = "info";
    /** 變更考區 */
    QuizAction[QuizAction["changePlace"] = 3] = "changePlace";
    /** 印繳款單 */
    QuizAction[QuizAction["printSlip"] = 4] = "printSlip";
})(QuizAction || (QuizAction = {}));
var QuizStatus;
(function (QuizStatus) {
    /** 資料審核中 */
    QuizStatus[QuizStatus["checking"] = 0] = "checking";
    /** 繳款中 */
    QuizStatus[QuizStatus["paying"] = 1] = "paying";
    /** 報名成功 */
    QuizStatus[QuizStatus["succuss"] = 2] = "succuss";
    /** 已繳款 */
    QuizStatus[QuizStatus["paid"] = 3] = "paid";
    /** 沒狀態 */
    QuizStatus[QuizStatus["noStatus"] = 4] = "noStatus";
})(QuizStatus || (QuizStatus = {}));


/***/ }),

/***/ "ZvfN":
/*!********************************************************!*\
  !*** ./projects/tc-lib/src/lib/pipes/str-hide.pipe.ts ***!
  \********************************************************/
/*! exports provided: StrHidePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrHidePipe", function() { return StrHidePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StrHidePipe {
    /**
     * 字串隱碼
     */
    transform(value, ...args) {
        var _a;
        console.log(args);
        // 隱藏幾碼
        const hideNum = (_a = args[0]) !== null && _a !== void 0 ? _a : 4;
        const hideStr = value.slice(0, -hideNum) + '*'.repeat(hideNum);
        return hideStr;
    }
}
StrHidePipe.ɵfac = function StrHidePipe_Factory(t) { return new (t || StrHidePipe)(); };
StrHidePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "strHide", type: StrHidePipe, pure: true });


/***/ }),

/***/ "ZxlW":
/*!************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/const/register-type.const.ts ***!
  \************************************************************************/
/*! exports provided: REGISTER_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_TYPE", function() { return REGISTER_TYPE; });
const REGISTER_TYPE = {
    // 課程
    COUSRE: 'course',
    // 測驗
    EXAM: 'exam'
};


/***/ }),

/***/ "bL8K":
/*!*************************************************!*\
  !*** ./projects/tc-front/src/app/app.module.ts ***!
  \*************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "BZNK");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "lbyr");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "Kd/A");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout.component */ "UTSv");
/* harmony import */ var projects_tc_lib_src_public_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! projects/tc-lib/src/public-api */ "pzfE");
/* harmony import */ var _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/menu/menu.component */ "+ySv");
/* harmony import */ var _content_home_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content/home/calendar/calendar.component */ "h30Q");
/* harmony import */ var _content_course_course_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./content/course/course.component */ "qHqY");
/* harmony import */ var _content_home_calendar_modal_calendar_event_modal_calendar_event_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content/home/calendar/modal/calendar-event-modal/calendar-event-modal.component */ "M09Z");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "S8bE");
/* harmony import */ var _content_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./content/home/home.component */ "PlFV");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "7e7m");
/* harmony import */ var _content_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./content/index-page/index-page.component */ "xR/m");
/* harmony import */ var _content_home_apply_home_apply_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./content/home/apply-home/apply-home.component */ "qH8J");
/* harmony import */ var _layout_menu_mobile_menu_mobile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/menu-mobile/menu-mobile.component */ "X+/4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");

























Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["zh_TW"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            projects_tc_lib_src_public_api__WEBPACK_IMPORTED_MODULE_10__["TcLibModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
        _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
        _content_home_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_12__["CalendarComponent"],
        _content_course_course_component__WEBPACK_IMPORTED_MODULE_13__["CourseComponent"],
        _content_home_calendar_modal_calendar_event_modal_calendar_event_modal_component__WEBPACK_IMPORTED_MODULE_14__["CalendarEventModalComponent"],
        _content_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        _content_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_19__["IndexPageComponent"],
        _content_home_apply_home_apply_home_component__WEBPACK_IMPORTED_MODULE_20__["ApplyHomeComponent"],
        _layout_menu_mobile_menu_mobile_component__WEBPACK_IMPORTED_MODULE_21__["MenuMobileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        projects_tc_lib_src_public_api__WEBPACK_IMPORTED_MODULE_10__["TcLibModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "bqKb":
/*!************************************************************!*\
  !*** ./projects/tc-front/src/app/core/guard/auth.guard.ts ***!
  \************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/account.service */ "TyOg");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/permission.service */ "BlqQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(accountService, permissionService, router, route) {
        this.accountService = accountService;
        this.permissionService = permissionService;
        this.router = router;
        this.route = route;
    }
    canActivate(next, state) {
        if (next.routeConfig && next.routeConfig.path) {
            this.path = next.routeConfig.path;
        }
        // TODO:  for demo
        if (this.accountService.account.account_type) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
        // return this.permissionService.getPath().pipe(
        //   map(canActivatePath => {
        //     if (canActivatePath.length && canActivatePath.indexOf(p) !== -1) {
        //       console.log(this.path);
        //       return true;
        //     }
        //     this.router.navigate(['']);
        //     return false;
        //   })
        // );
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_permission_service__WEBPACK_IMPORTED_MODULE_2__["PermissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dtlk":
/*!**********************************************************!*\
  !*** ./projects/tc-front/src/app/core/models/pageset.ts ***!
  \**********************************************************/
/*! exports provided: PageSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSet", function() { return PageSet; });
class PageSet {
    constructor() {
        /** 資料總數 */
        this.totalCounts = 0;
        /** 目前頁數 */
        this.pageIndex = 1;
        /** 每頁顯示筆數 */
        this.pageSize = 10;
    }
    initialize(totalCounts) {
        this.pageIndex = 1;
        this.pageSize = 10;
        this.totalCounts = totalCounts;
    }
    /** 總頁數 */
    get totalPages() {
        return Math.ceil(this.totalCounts / this.pageSize);
    }
    get currentPage() {
        return this.pageIndex;
    }
    set currentPage(index) {
        this.pageIndex = index;
    }
    get currentPageSize() {
        return this.pageSize;
    }
    set currentPageSize(size) {
        this.pageIndex = 1;
        this.pageSize = size;
    }
}


/***/ }),

/***/ "dziO":
/*!*********************************************************************!*\
  !*** ./projects/tc-front/src/app/shared/pipes/account-type.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: AccountTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTypePipe", function() { return AccountTypePipe; });
/* harmony import */ var _core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/enums/account-type.enum */ "riHe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AccountTypePipe {
    /** TODO: 等後端開好才知道是string還是number */
    transform(type) {
        const typeMap = {
            [_core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_0__["AccountType"].new]: '新增員',
            [_core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_0__["AccountType"].newRecruit]: '新聘員',
            [_core_enums_account_type_enum__WEBPACK_IMPORTED_MODULE_0__["AccountType"].sales]: '業務員',
        };
        return typeMap[type] ? typeMap[type] : '未選擇';
    }
}
AccountTypePipe.ɵfac = function AccountTypePipe_Factory(t) { return new (t || AccountTypePipe)(); };
AccountTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "accountTypePipe", type: AccountTypePipe, pure: true });


/***/ }),

/***/ "h30Q":
/*!*******************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/home/calendar/calendar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal_calendar_event_modal_calendar_event_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/calendar-event-modal/calendar-event-modal.component */ "M09Z");
/* harmony import */ var _const_event_color_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const/event-color.const */ "Qc4n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! merc-lib */ "c3fJ");






const _c0 = ["rocCalendar"];
class CalendarComponent {
    constructor(modalService) {
        this.modalService = modalService;
        /**
         * 月曆外觀設置及事件觸發設定
         * @references https://fullcalendar.io/docs/angular
         */
        this.calendarOptions = {
            navLinks: false,
        };
        this.radioValue = 'today';
    }
    ngOnInit() {
        // 日期點擊事件
        this.rocCalendar.calendarOptions.dateClick = this.onDateClick.bind(this);
        // 事件點擊事件
        this.rocCalendar.calendarOptions.eventClick = this.onEventClick.bind(this);
        // 月曆開始渲染的時候
        this.rocCalendar.calendarOptions.datesSet = this.onDatesRender.bind(this);
    }
    ngAfterViewInit() {
    }
    onDateClick(arg) {
        console.log('click date: ', arg.dateStr);
    }
    onEventClick(arg) {
        console.log(arg.event.title, ': ', arg);
        const modal = this.modalService.create({
            nzContent: _modal_calendar_event_modal_calendar_event_modal_component__WEBPACK_IMPORTED_MODULE_1__["CalendarEventModalComponent"],
            nzClosable: true,
            nzFooter: null,
            nzClassName: 'white-close-x',
            nzBodyStyle: {
                padding: '0',
            },
            nzComponentParams: {
                arg
            }
        });
    }
    /**
     * 月曆開始渲染的時候
     * @param arg DatesSetArg
     */
    onDatesRender(arg) {
        this.getCalendarEvents();
    }
    /**
     * 取得Event
     * @reference Event Object https://fullcalendar.io/docs/event-object
     */
    getCalendarEvents() {
        console.log('rendar Event');
        // TODO: for demo假資料
        const result = [
            {
                id: 'a',
                title: '投資型考試',
                start: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('yyyy-MM-DD'),
                end: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).add(3, 'day').format('yyyy-MM-DD'),
                color: _const_event_color_const__WEBPACK_IMPORTED_MODULE_2__["EVENT_COLOR"].danger
            },
            {
                id: 'b',
                title: '行銷工具班 - 行動辦公室',
                start: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).add(-7, 'day').format('yyyy-MM-DD'),
                end: moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).add(-5, 'day').format('yyyy-MM-DD'),
                color: _const_event_color_const__WEBPACK_IMPORTED_MODULE_2__["EVENT_COLOR"].normal
            }
        ];
        this.rocCalendar.calendarOptions.events = result;
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalService"])); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.rocCalendar = _t.first);
    } }, decls: 4, vars: 3, consts: [[3, "isRocType", "prevLimit", "nextLimit"], ["rocCalendar", ""]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "merc-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "merc-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "merc-calendar", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isRocType", true)("prevLimit", 2)("nextLimit", 2);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_5__["MercCardComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_5__["ɵb"], merc_lib__WEBPACK_IMPORTED_MODULE_5__["MercCalendarComponent"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-card[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0;\n  border: rgba(153, 153, 153, 0.2) 1px solid;\n  box-shadow: none;\n  background-color: #fff;\n  border-radius: 6px;\n  \n  \n  \n  \n  \n  \n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-self: center;\n  font-size: 25px;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 6px 6px 0 0;\n  color: #fff;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-content[_ngcontent-%COMP%] {\n  display: block;\n  padding: 35px 15px;\n}\n.merc-card.merc-card-primary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\n.merc-card.merc-card-primary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\n.merc-card.merc-card-secondary[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\n.merc-card.merc-card-secondary-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\n.merc-card.merc-card-third[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\n.merc-card.merc-card-third-variant[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-primary-variant[_ngcontent-%COMP%] {\n  color: #ec6122;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary[_ngcontent-%COMP%] {\n  color: #ff6621;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-secondary-variant[_ngcontent-%COMP%] {\n  color: #f8c73f;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third[_ngcontent-%COMP%] {\n  color: #58a8dd;\n}\n.merc-card[_ngcontent-%COMP%]   .merc-card-header-third-variant[_ngcontent-%COMP%] {\n  color: #fffaf1;\n}\n.merc-card.merc-card-small[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-card.merc-card-normal[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.merc-card.merc-card-large[_ngcontent-%COMP%]    > .merc-card-header[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-table[_ngcontent-%COMP%] {\n  \n  \n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-header[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-body[_ngcontent-%COMP%] {\n  overflow-y: overlay !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > .ant-table-row[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]   .ant-table-column-has-sorters[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-placeholder[_ngcontent-%COMP%]   .ant-table-expanded-row-fixed[_ngcontent-%COMP%] {\n  margin: -4px -8px;\n  min-width: 100%;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\nmerc-table[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 0;\n  background-color: transparent;\n  position: absolute;\n  top: 50%;\n  right: 26px;\n  transform: translateY(-50%);\n  display: flex;\n  flex-wrap: nowrap;\n  transition: opacity 0.3s, background-color 0.3s;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) {\n  background-color: #c9c9c9;\n}\nmerc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr.ant-table-row[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%]   .hover-to-edit[_ngcontent-%COMP%], merc-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)   .hover-to-edit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nmerc-table.merc-table-primary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n}\nmerc-table.merc-table-primary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n}\nmerc-table.merc-table-secondary[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n}\nmerc-table.merc-table-secondary-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n}\nmerc-table.merc-table-third[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n}\nmerc-table.merc-table-third-variant[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0;\n}\nmerc-card-content[_ngcontent-%COMP%]    > merc-table[_ngcontent-%COMP%]   .ant-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.merc-flex-table-primary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #e6002d;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #e6002d;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #e6002d;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ec6122;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-primary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ec6122;\n    border-radius: 7px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ec6122;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-primary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #ff6621;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #ff6621;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #ff6621;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #f8c73f;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #f8c73f;\n    border-radius: 7px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #f8c73f;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-secondary-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #58a8dd;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #58a8dd;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #58a8dd;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%] {\n  display: block;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 2px 4px #d5d5d5;\n  border-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background: #fffaf1;\n  border: none;\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 7px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, background-color 0.3s;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fffaf1;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c9c9c9;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%] {\n  min-height: 160px;\n  color: #d5d5d5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.merc-flex-table-third-variant[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   .no-data-hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n    border-top: 2px solid #fffaf1;\n    border-radius: 7px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 8px !important;\n    padding-left: 120px !important;\n    height: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 0px solid #fffaf1;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-title);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: bold;\n    padding: 3px 8px;\n  }\n  .merc-flex-table-third-variant[_ngcontent-%COMP%]   .merc-flex-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.no-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n    padding: 3px 8px !important;\n    justify-content: center;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmerc-tab[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  \n  \n  \n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%] {\n  border: 0;\n  margin-bottom: 0px;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]::before {\n  border-bottom: hidden;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  border: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6002d;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6002d;\n  border-bottom-width: 0px !important;\n  padding: 0 15px;\n  height: 35px;\n  \n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%]   .ant-tabs-close-x[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 16px;\n  height: 18px;\n  margin-right: 0 !important;\n  vertical-align: middle;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab-active[_ngcontent-%COMP%]   .ant-tabs-tab-btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #fff;\n}\nmerc-tab[_ngcontent-%COMP%]   .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]   .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-width: 1px;\n  border-color: #e6002d;\n  border-style: solid;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #e6002d;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-primary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ec6122;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #ff6621;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-secondary-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #f8c73f;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #58a8dd;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab.ant-tabs-tab-active[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-third-variant[_ngcontent-%COMP%]    > .ant-tabs.ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-content-holder[_ngcontent-%COMP%]    > .ant-tabs-content[_ngcontent-%COMP%]    > .ant-tabs-tabpane[_ngcontent-%COMP%] {\n  border-color: #fffaf1;\n}\nmerc-tab.merc-tab-small[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 25px;\n}\nmerc-tab.merc-tab-normal[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 35px;\n}\nmerc-tab.merc-tab-large[_ngcontent-%COMP%]    > .ant-tabs-card[_ngcontent-%COMP%]    > .ant-tabs-nav[_ngcontent-%COMP%]   .ant-tabs-tab[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.toggle-float-btn[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #e6002d;\n  color: white;\n  border: 1px solid #e6002d;\n  border-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  height: 40px;\n  padding: 0 16px;\n  line-height: 38px;\n  cursor: pointer;\n}\n.toggle-float-btn[_ngcontent-%COMP%]   .toggle-wrap[_ngcontent-%COMP%] {\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n}\nmerc-tab[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\nmerc-tab[mercType=primary][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\nmerc-tab[mercType=primaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\nmerc-tab[mercType=secondary][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\nmerc-tab[mercType=secondaryVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\nmerc-tab[mercType=third][_ngcontent-%COMP%]   .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\nmerc-tab[mercType=thirdVariant][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\nmerc-tab[mercSize=small][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 30px;\n}\nmerc-tab[mercSize=normal][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 42px;\n}\nmerc-tab[mercSize=large][_ngcontent-%COMP%]    > .toggle-float-btn[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  \n  \n  \n  \n  \n  \n  \n}\n.merc-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 2px 0 rgba(21, 28, 42, 0.17);\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e6002d;\n  border: 1px solid #e6002d;\n}\n.merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #bd0025;\n  border: 1px solid #bd0025;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #e6002d;\n  background-color: #fff;\n  color: #e6002d;\n}\n.merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #9a001e;\n  border: 1px solid #9a001e;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ec6122;\n  border: 1px solid #ec6122;\n}\n.merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d34e12;\n  border: 1px solid #d34e12;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ec6122;\n  background-color: #fff;\n  color: #ec6122;\n}\n.merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-primary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #b2420f;\n  border: 1px solid #b2420f;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff6621;\n  border: 1px solid #ff6621;\n}\n.merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f74d00;\n  border: 1px solid #f74d00;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ff6621;\n  background-color: #fff;\n  color: #ff6621;\n}\n.merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #d44200;\n  border: 1px solid #d44200;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f8c73f;\n  border: 1px solid #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f7bc18;\n  border: 1px solid #f7bc18;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #f8c73f;\n  background-color: #fff;\n  color: #f8c73f;\n}\n.merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-secondary-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #e2a908;\n  border: 1px solid #e2a908;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #58a8dd;\n  border: 1px solid #58a8dd;\n}\n.merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #3696d6;\n  border: 1px solid #3696d6;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #58a8dd;\n  background-color: #fff;\n  color: #58a8dd;\n}\n.merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #2784c1;\n  border: 1px solid #2784c1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fffaf1;\n  border: 1px solid #fffaf1;\n}\n.merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ffebc8;\n  border: 1px solid #ffebc8;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #fffaf1;\n  background-color: #fff;\n  color: #fffaf1;\n}\n.merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .merc-btn.merc-btn-third-variant.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #ffdfa5;\n  border: 1px solid #ffdfa5;\n}\n.merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active    > *[_ngcontent-%COMP%], .merc-btn.merc-btn-outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover    > *[_ngcontent-%COMP%] {\n  transition: filter 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  filter: brightness(0.6);\n}\n.merc-btn.merc-btn-small[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.merc-btn.merc-btn-normal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.merc-btn.merc-btn-large[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.merc-btn.merc-btn-xs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.merc-btn.merc-btn-sm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.merc-btn.merc-btn-md[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.merc-btn.merc-btn-lg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.merc-btn.merc-btn-xl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.merc-btn.disabled[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.25);\n  background: #f5f5f5;\n  border-color: #d9d9d9;\n  text-shadow: none;\n  box-shadow: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  max-width: 200px;\n  min-width: 160px;\n  position: relative;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%]:hover   .clear[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 7px;\n  padding: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: white;\n  z-index: 999;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .selected-date[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 115%;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  min-width: 200px;\n  background-color: #fff;\n  z-index: 999;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .dates.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 2px 0;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 16px;\n  text-align: center;\n  color: #e6002d;\n  display: inline-block;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .arrow-btn[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.roc-date-picker[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .week[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%], .roc-date-picker[_ngcontent-%COMP%]   .months[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .not-present[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected[_ngcontent-%COMP%] {\n  background-color: #e6002d;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .day.selected.not-present[_ngcontent-%COMP%] {\n  background-color: #efefef;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #e6002d;\n  color: #e6002d;\n  cursor: pointer;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .today.not-present[_ngcontent-%COMP%] {\n  color: #efefef;\n  cursor: not-allowed;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%] {\n  color: #efefef;\n  margin: 10px;\n  opacity: 0.8;\n}\n.roc-date-picker[_ngcontent-%COMP%]   .suffix-icon[_ngcontent-%COMP%] {\n  color: #e6002d;\n}\n .merc-year-select .ant-select-selection-item {\n  padding-right: 15px !important;\n}\n .merc-year-select .ant-select-item {\n  padding: 5px 8px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.merc-calendar[_ngcontent-%COMP%]   .rocYear[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n@media screen and (max-width: 750px) {\n  .merc-calendar[_ngcontent-%COMP%]   .rocYear[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 45px;\n    justify-content: center;\n  }\n}\n.merc-calendar[_ngcontent-%COMP%]   .rocYear-title[_ngcontent-%COMP%] {\n  position: relative;\n  top: 38px;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%] {\n  background-color: #ff6621;\n  border: #ff6621 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[disabled][_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n  border: #d9d9d9 1px solid;\n  color: white;\n  line-height: 0;\n}\n.merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:hover:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .ant-btn[_ngcontent-%COMP%]:active:not([disabled]), .merc-calendar[_ngcontent-%COMP%]   .for-calendar[_ngcontent-%COMP%]    > .focus-today[_ngcontent-%COMP%] {\n  background-color: #ff8954;\n  border: #ff8954 1px solid;\n}\nmerc-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.06);\n}\nmerc-card[_ngcontent-%COMP%]   merc-card-content[_ngcontent-%COMP%] {\n  padding: 0px 25px 25px 25px !important;\n}\n@media screen and (max-width: 750px) {\n  merc-card[_ngcontent-%COMP%] {\n    padding-top: 25px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY3VzdG9tLXNldHRpbmcuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvc3R5bGVzL2N1c3RvbS1zZXR0aW5nLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL3N0eWxlcy9fY29tcG9uZW50cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9tZXJjLWNhcmQvbWVyYy1jYXJkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9saWIvY29tcG9uZW50cy9tZXJjLXRhYmxlL21lcmMtdGFibGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2ZsZXgtdGFibGUvZmxleC10YWJsZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWVyYy10YWIvbWVyYy10YWIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lcmMtdGFiL3RvZ2dsZS1jb2xsYXBzZS90b2dnbGUtY29sbGFwc2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWVyYy1saWIvc3JjL2RhdGUvY29tcG9uZW50cy9yb2MtZGF0ZS1waWNrZXIvcm9jLWRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lcmMtbGliL3NyYy9kYXRlL2NvbXBvbmVudHMvbWVyYy1jYWxlbmRhci9tZXJjLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixhQUFBO0FBMEJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QUNsSEEsd0RBQUE7QUFDQSxhQUFBO0FBdUJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QUNoSEEsYUFBQTtBREFBLHdEQUFBO0FBQ0EsYUFBQTtBQXVCQSxZQUFBO0FBY0EsWUFBQTtBQUNBLG1CQUFBO0FBaUJBLGlCQUFBO0FBRUEsb0JBQUE7QUFtQkEsa0JBQUE7QUFFQSxxQkFBQTtBQW9CQSxtQkFBQTtBQWFBLGlCQUFBO0FFOUdBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQWtCQSxzQkFBQTtFQXlCQSxvQkFBQTtFQUVBLHNCQUFBO0VBT0Esa0JBQUE7RUFFQSxvQkFBQTtFQWFBLGtCQUFBO0FK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QUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FWNm9DSjtBVTFvQ0U7RUFDRSx5QlQ3R2U7QUR5dkNuQjtBVXhvQ0U7RUEvSEEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUErSEUsNkJBQUE7RUFDQSxjVGpJWTtFU2tJWixlQUFBO0FWNG9DSjtBVTNvQ0k7RUFDRSxjVHZIYTtFU3dIYixtQkFBQTtBVjZvQ047QVV6b0NFO0VBQ0UsY1Q3SGU7RVM4SGYsWUFBQTtFQUNBLFlBQUE7QVYyb0NKO0FVeG9DRTtFQUNFLGNUaEpZO0FEMHhDaEI7QVVyb0NFO0VBQ0UsOEJBQUE7QVZ3b0NKO0FVcm9DRTtFQUNFLGdCQUFBO0FWdW9DSjtBRXJ5Q0Esd0RBQUE7QUFDQSxhQUFBO0FBdUJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QVM5R0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FYaXpDUjtBV2h6Q1E7RUFKSjtJQUtRLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VYbXpDVjtBQUNGO0FXanpDSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FYbXpDUjtBV2p6Q0k7RUFHSSx5QlZkVTtFVWVWLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QVhpekNSO0FXL3lDSTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBWGl6Q1I7QVcveUNJOzs7RUFHSSx5QkFBQTtFQUNBLHlCQUFBO0FYaXpDUjtBQXAxQ0E7RUFDSSwrQ0FBQTtBQXUxQ0o7QUF0MUNJO0VBQ0ksc0NBQUE7QUF3MUNSO0FBdDFDSTtFQUxKO0lBTVEsNEJBQUE7RUF5MUNOO0FBQ0YiLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG5tZXJjLWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDFweCByZ2IoMCAwIDAgLyA2JSk7XG4gICAgbWVyYy1jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAwcHggMjVweCAyNXB4IDI1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbiIsIi8qKiDln7rnpI7lip/og73oibLoqK3lrpogKi9cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4vLyDkuLvopoHoibJcbiRwcmltYXJ5LWNvbG9yOiAjZTYwMDJkO1xuLy8g5Li76KaB6Imy6K6K5b2iXG4kcHJpbWFyeS12YXJpYW50LWNvbG9yOiAjZWM2MTIyO1xuLy8g5qyh6KaB6ImyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NjIxO1xuLy8g5qyh6KaB6Imy6K6K5b2iXG4kc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I6ICNmOGM3M2Y7XG4vLyDnrKzkuInoibJcbiR0aGlyZC1jb2xvcjogIzU4YThkZDtcbi8vIOesrOS4ieiJsuiuiuW9olxuJHRoaXJkLXZhcmlhbnQtY29sb3I6ICNmZmZhZjE7XG5cbi8vIOa3uueBsFxuJGNvbG9yLWxpZ2h0LWdyYXk6ICNlZmVmZWY7XG4vLyDmt7HngbBcbiRjb2xvci1kYXJrLWdyYXk6ICMzMzMzMzM7XG4vLyDnmb1cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1zaWx2ZXI6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKTtcbiRjb2xvci1saWdodGVyLWdyYXk6ICNmOWY5Zjk7XG4kY29sb3ItZ3JlZW46ICM4N2I4NDg7XG5cbi8qKiDln7rnpI7lhYPku7boqK3lrpogKi9cbiRmb250LXN6OiAoXG4gIHhsOiAyNXB4LFxuICBsZzogMThweCxcbiAgbWQ6IDE2cHgsXG4gIHNtOiAxNHB4LFxuICB4czogMTJweCxcbik7XG5cbiRmb250LXdlaWdodDogKFxuICBmYXR0eTogNjAwLFxuICBub3JtYWw6IG5vcm1hbCxcbik7XG5cbi8qKiDluLjnlKjlhYPku7boqK3lrpogKi9cbi8qIGJhc2UgYnRuIHN0YXJ0ICovXG4kYnRuOiAoXG4gIGJvcmRlci1yYWRpdXM6IDNweCxcbiAgc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYmEoMjEsIDI4LCA0MiwgMC4xNyksXG4pO1xuJGJ0bi1oZWlnaHQ6IChcbiAgbGc6IDQwcHgsXG4gIG1kOiAzNXB4LFxuICBzbTogMzBweCxcbik7XG4kYnRuLXdpZHRoOiAoXG4gIHhsOiAyMDBweCxcbiAgbGc6IDE2MHB4LFxuICBtZDogMTIwcHgsXG4gIHNtOiA5MHB4LFxuICB4czogNzBweCxcbik7XG4vKiBiYXNlIGJ0biBlbmQgKi9cblxuLyoqIGJhc2UgY2FyZCBzdGFydCovXG4kYmFzZS1jYXJkOiAoXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSxcbiAgYm94LXNoYWRvdzogbm9uZSxcbiAgcGFkZGluZzogMCxcbiAgYm9yZGVyOiAkY29sb3Itc2lsdmVyIDFweCBzb2xpZCxcbiAgYm9yZGVyLXJhZGl1czogNnB4LFxuKTtcblxuJGJhc2UtY2FyZC1oZWFkZXI6IChcbiAgYWxpZ24tc2VsZjogY2VudGVyLFxuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIHhsKSxcbiAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJGZvbnQtd2VpZ2h0LCBmYXR0eSksXG4gIHBhZGRpbmc6IDEwcHggMjBweCxcbik7XG5cbiRiYXNlLWNhcmQtY29udGVudDogKFxuICBwYWRkaW5nOiAzNXB4IDE1cHgsXG4pO1xuLyoqIGJhc2UgY2FyZCBlbmQqL1xuXG4vKiBiYXNlIHRhYmxlIHN0YXJ0ICovXG4kYmFzZS10YWJsZTogKFxuICAvLyBob3ZlciDpoY/oibJcbiAgaG92ZXItYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1saWdodC1ncmF5LCAxNSUpLFxuICAvLyDplpPpmpToibJcbiAgZXZlbi1jb2wtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yLFxuICAvLyDlnJPop5JcbiAgcmFkaXVzOiA3cHgsXG4gIC8vIOmZsOW9sVxuICBzaGFkb3c6IDFweCAycHggNHB4ICNkNWQ1ZDUsXG4gIC8vIOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqUXG4gIHBhZGRpbmc6IDhweCA4cHgsXG4gIC8vIOaJi+apn+eJiOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqU77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcbiAgbW8tcGFkZGluZzogM3B4IDhweCxcbiAgLy8g5bm+cHjku6XkuIvkvb/nlKjmiYvmqZ/niYjvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBicmVhay1wb2ludDogNzY3cHgsXG4gIC8vIOashOS9jeS4i+aWueeahGJvcmRlci1ib3R0b23vvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxuICBtby1ib3JkZXItYm90dG9tLXdpZHRoOiAwcHhcbik7XG5cbi8qIGJhc2UgdGFiIHN0YXJ0ICovXG4kYmFzZS10YWI6IChcbiAgLy8g6aGP6ImyKG1lcmMtdGFiIOacquWCs+WFpSBtZXJjVHlwZSDmmYLmnInmlYgpXG4gIHRhYi1jb2xvcjogJHByaW1hcnktY29sb3IsXG4gIC8vIHRhYiDpgormoYZcbiAgdGFiLWJvcmRlci13aWR0aDogMXB4LFxuICAvLyBjb250ZW50IOmCiuahhlxuICBjb250ZW50LWJvcmRlci13aWR0aDogMXB4LFxuICAvLyDlnJPop5JcbiAgcmFkaXVzOiA3cHgsXG4gIC8vIOWtl+mrlOWkp+Wwj1xuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIGxnKVxuKTtcbi8qIGJhc2UgdGFiIGVuZCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tZXJjLWxpYi9zcmMvc3R5bGVzL21lcmMtbGliLnNjc3NcIjtcbiIsIi8qIOatpHNjc3PngrrlhYPku7blhafnmoQgY3VzdG9tLXNldHRpbmfvvIzoiIflnJbmm7jppKjlhajln5/nmoQgY3VzdG9tLXNldHRpbmcg5LiN5ZCMICovXG4vKiog5Z+656SO5Yqf6IO96Imy6Kit5a6aICovXG4kY29sb3Itd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kY29sb3ItZGFyazogcmdiYSgwLCAwLCAwLCAwLjgpICFkZWZhdWx0O1xuLy8g5Li76KaB6ImyXG4kcHJpbWFyeS1jb2xvcjogI2I5ZTFlNCAhZGVmYXVsdDtcbi8vIOS4u+imgeiJsuiuiuW9olxuJHByaW1hcnktdmFyaWFudC1jb2xvcjogIzU0YmU5ZiAhZGVmYXVsdDtcbi8vIOasoeimgeiJslxuJHNlY29uZGFyeS1jb2xvcjogIzRiOGFjNSAhZGVmYXVsdDtcbi8vIOasoeimgeiJsuiuiuW9olxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjZTZmM2Y3ICFkZWZhdWx0O1xuLy8g56ys5LiJ6ImyXG4kdGhpcmQtY29sb3I6ICM4MDAwODAgIWRlZmF1bHQ7XG4vLyDnrKzkuInoibLororlvaJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZWVkN2VkICFkZWZhdWx0O1xuXG4vLyDmt7rngbBcbiRjb2xvci1saWdodC1ncmF5OiAjZTVlNWU1ICFkZWZhdWx0O1xuXG4vLyDpoY/oibLlrprnvqnljIVcbiRjb2xvclNldDogXCJwcmltYXJ5XCIgJHByaW1hcnktY29sb3IsIFwicHJpbWFyeS12YXJpYW50XCIgJHByaW1hcnktdmFyaWFudC1jb2xvciwgXCJzZWNvbmRhcnlcIiAkc2Vjb25kYXJ5LWNvbG9yLFxuICBcInNlY29uZGFyeS12YXJpYW50XCIgJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCBcInRoaXJkXCIgJHRoaXJkLWNvbG9yLCBcInRoaXJkLXZhcmlhbnRcIiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcblxuLyoqIOWfuuekjuWFg+S7tuioreWumiAqL1xuJGZvbnQtc3o6IChcbiAgeGw6IDMwcHgsXG4gIGxnOiAxOHB4LFxuICBtZDogMTZweCxcbiAgc206IDE0cHgsXG4gIHhzOiAxMnB4LFxuKSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0OiAoXG4gIGZhdHR5OiA2MDAsXG4gIG5vcm1hbDogbm9ybWFsLFxuKSAhZGVmYXVsdDtcblxuLyoqIOW4uOeUqOWFg+S7tuioreWumiAqL1xuLyogYmFzZSBidG4gc3RhcnQgKi9cbiRidG46IChcbiAgYm9yZGVyLXJhZGl1czogN3B4LFxuICBzaGFkb3c6IDFweCAxcHggMnB4IDAgcmdiYSgyMSwgMjgsIDQyLCAwLjE3KSxcbikgIWRlZmF1bHQ7XG4kYnRuLWhlaWdodDogKFxuICBsZzogNDBweCxcbiAgbWQ6IDM1cHgsXG4gIHNtOiAzMHB4LFxuKSAhZGVmYXVsdDtcbiRidG4td2lkdGg6IChcbiAgeGw6IDIwMHB4LFxuICBsZzogMTUwcHgsXG4gIG1kOiAxMjBweCxcbiAgc206IDkwcHgsXG4gIHhzOiA2MHB4LFxuKSAhZGVmYXVsdDtcbi8qIGJhc2UgYnRuIGVuZCAqL1xuXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cbiRiYXNlLWNhcmQ6IChcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLFxuICBib3gtc2hhZG93OiBub25lLFxuICBwYWRkaW5nOiAwLFxuICBib3JkZXI6IDAsXG4gIGJvcmRlci1yYWRpdXM6IDZweCxcbikgIWRlZmF1bHQ7XG5cbiRiYXNlLWNhcmQtaGVhZGVyOiAoXG4gIGFsaWduLXNlbGY6IGNlbnRlcixcbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZyksXG4gIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRmb250LXdlaWdodCwgZmF0dHkpLFxuICBwYWRkaW5nOiAwIDE1cHgsXG4pICFkZWZhdWx0O1xuXG4kYmFzZS1jYXJkLWNvbnRlbnQ6IChcbiAgcGFkZGluZzogMTBweCAxNXB4LFxuKSAhZGVmYXVsdDtcbi8qKiBiYXNlIGNhcmQgZW5kKi9cblxuLyogYmFzZSB0YWJsZSBzdGFydCAqL1xuJGJhc2UtdGFibGU6IChcbiAgLy8gaG92ZXIg6aGP6ImyXG4gIGhvdmVyLWJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3ItbGlnaHQtZ3JheSwgMTUlKSxcbiAgLy8g6ZaT6ZqU6ImyXG4gIGV2ZW4tY29sLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheSxcbiAgLy8g5ZyT6KeSXG4gIHJhZGl1czogN3B4LFxuICAvLyDpmbDlvbFcbiAgc2hhZG93OiAxcHggMnB4IDRweCAjZDVkNWQ1LFxuICAvLyDooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malFxuICBwYWRkaW5nOiA0cHggOHB4LFxuICAvLyDmiYvmqZ/niYjooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLXBhZGRpbmc6IDEwcHggOHB4LFxuICAvLyDlub5weOS7peS4i+S9v+eUqOaJi+apn+eJiO+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIGJyZWFrLXBvaW50OiA5OTFweCxcbiAgLy8g5qyE5L2N5LiL5pa555qEYm9yZGVyLWJvdHRvbe+8iGZsZXggdGFibGUg5bCI55So77yJXG4gIG1vLWJvcmRlci1ib3R0b20td2lkdGg6IDFweFxuKSAhZGVmYXVsdDtcblxuLyogYmFzZSB0YWIgc3RhcnQgKi9cbiRiYXNlLXRhYjogKFxuICAvLyDpoY/oibIobWVyYy10YWIg5pyq5YKz5YWlIG1lcmNUeXBlIOaZguacieaViClcbiAgdGFiLWNvbG9yOiAkcHJpbWFyeS1jb2xvcixcbiAgLy8gdGFiIOe3qOahhlxuICB0YWItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIC8vIGNvbnRlbnQg57eo5qGGXG4gIGNvbnRlbnQtYm9yZGVyLXdpZHRoOiAxMHB4LFxuICAvLyDlnJPop5JcbiAgcmFkaXVzOiA3cHgsXG4gIC8vIOWtl+mrlOWkp+Wwj1xuICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc3osIGxnKVxuKSAhZGVmYXVsdDtcbi8qIGJhc2UgdGFiIGVuZCAqL1xuIiwiLyog5YWD5Lu2IHN0eWxlICovXG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvbWVyYy1jYXJkL21lcmMtY2FyZC5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL21lcmMtdGFibGUvbWVyYy10YWJsZS5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL2ZsZXgtdGFibGUvZmxleC10YWJsZS5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL21lcmMtdGFiL21lcmMtdGFiLmNvbXBvbmVudC5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vbGliL2NvbXBvbmVudHMvbWVyYy10YWIvdG9nZ2xlLWNvbGxhcHNlL3RvZ2dsZS1jb2xsYXBzZS5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3NcIjtcbkBpbXBvcnQgXCIuLi9kYXRlL2NvbXBvbmVudHMvcm9jLWRhdGUtcGlja2VyL3JvYy1kYXRlLXBpY2tlci5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2RhdGUvY29tcG9uZW50cy9tZXJjLWNhbGVuZGFyL21lcmMtY2FsZW5kYXIuY29tcG9uZW50LnNjc3NcIjtcbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbi5tZXJjLWNhcmQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtY2FyZCwgcGFkZGluZyk7XG4gICAgYm9yZGVyOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlcik7XG4gICAgYm94LXNoYWRvdzogbWFwLWdldCgkYmFzZS1jYXJkLCBib3gtc2hhZG93KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtY2FyZCwgYm9yZGVyLXJhZGl1cyk7XG5cbiAgICAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIGFsaWduLXNlbGYpO1xuICAgICAgICBmb250LXNpemU6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIGZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRiYXNlLWNhcmQtaGVhZGVyLCBmb250LXdlaWdodCk7XG4gICAgICAgIHBhZGRpbmc6IG1hcC1nZXQoJGJhc2UtY2FyZC1oZWFkZXIsIHBhZGRpbmcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLWNhcmQsIGJvcmRlci1yYWRpdXMpIG1hcC1nZXQoJGJhc2UtY2FyZCwgYm9yZGVyLXJhZGl1cykgMCAwO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIH1cblxuICAgIC5tZXJjLWNhcmQtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLWNhcmQtY29udGVudCwgcGFkZGluZyk7XG4gICAgfVxuXG4gICAgLyogaGVhZGVyIOiDjOaZr+mhj+iJsiBzdGFydCAqL1xuICAgIC8vIOS4u+mhjOiJslxuICAgICYubWVyYy1jYXJkLXByaW1hcnkgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIH1cbiAgICAvLyDkuLvpoYzoibLororlvaJcbiAgICAmLm1lcmMtY2FyZC1wcmltYXJ5LXZhcmlhbnQgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgfVxuICAgIC8vIOasoeimgeiJslxuICAgICYubWVyYy1jYXJkLXNlY29uZGFyeSA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICB9XG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXG4gICAgJi5tZXJjLWNhcmQtc2Vjb25kYXJ5LXZhcmlhbnQgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICB9XG4gICAgLy8g56ys5LiJ6ImyXG4gICAgJi5tZXJjLWNhcmQtdGhpcmQgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICB9XG4gICAgLy8g56ys5LiJ6Imy6K6K5b2iXG4gICAgJi5tZXJjLWNhcmQtdGhpcmQtdmFyaWFudCA+IC5tZXJjLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgfVxuICAgIC8qIGhlYWRlciDog4zmma/poY/oibIgZW5kICovXG5cbiAgICAvKiBoZWFkZXIg5a2X6auU6aGP6ImyIHN0YXJ0ICovXG4gICAgLy8g5Li76aGM6ImyXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkY29sb3JTZXQge1xuICAgICAgICAubWVyYy1jYXJkLWhlYWRlci0jeyRuYW1lfSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIGhlYWRlciDpoY/oibIgZW5kICovXG5cbiAgICAvKiBoZWFkZXIg6auY5bqmIHN0YXJ0ICovXG4gICAgLy8g5bCPXG4gICAgJi5tZXJjLWNhcmQtc21hbGwgPiAubWVyYy1jYXJkLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLy8g5LitXG4gICAgJi5tZXJjLWNhcmQtbm9ybWFsID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgfVxuICAgIC8vIOWkp1xuICAgICYubWVyYy1jYXJkLWxhcmdlID4gLm1lcmMtY2FyZC1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIC8qIGhlYWRlciDpq5jluqYgZW5kICovXG59XG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG4vKiBvdmVyd3JpdGUgdGFibGUgc3R5bGUgKi9cbm1lcmMtdGFibGUge1xuICAgIC5hbnQtdGFibGUtY29udGFpbmVyIHtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLWhlYWRlcixcbiAgICAuYW50LXRhYmxlLWJvZHkge1xuICAgICAgICBvdmVyZmxvdy15OiBvdmVybGF5ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS10aGVhZCA+IC5hbnQtdGFibGUtcm93LFxuICAgIHRoZWFkID4gdHIge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAuYW50LXRhYmxlLWNvbHVtbi1oYXMtc29ydGVycyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlnJPop5JcbiAgICAuYW50LXRhYmxlLWNvbnRhaW5lciB0YWJsZSA+IHRoZWFkIHtcbiAgICAgICAgdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgICAgICB0cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFudC10YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCB0ZC1wYWRkaW5nKTtcbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLXBsYWNlaG9sZGVyIC5hbnQtdGFibGUtZXhwYW5kZWQtcm93LWZpeGVkIHtcbiAgICAgICAgbWFyZ2luOiAtNHB4IC04cHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAvLyDplpPpmpToibJcbiAgICAuYW50LXRhYmxlLXRib2R5IHtcbiAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGV2ZW4tY29sLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhvdmVyIOe3qOi8ryYm5Yiq6ZmkXG4gICAgLmhvdmVyLXRvLWVkaXQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAyNnB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLXRib2R5ID4gdHIuYW50LXRhYmxlLXJvdzpob3ZlciA+IHRkLFxuICAgIC5hbnQtdGFibGUtdGJvZHkgPiB0cjpob3Zlcjpub3QoLmFudC10YWJsZS1leHBhbmRlZC1yb3cpOm5vdCguYW50LXRhYmxlLXJvdy1zZWxlY3RlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgLmhvdmVyLXRvLWVkaXQge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIGhlYWRlciDpoY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICAmLm1lcmMtdGFibGUtcHJpbWFyeSB7XG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxuICAgICYubWVyYy10YWJsZS1wcmltYXJ5LXZhcmlhbnQge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeimgeiJslxuICAgICYubWVyYy10YWJsZS1zZWNvbmRhcnkge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeimgeiJsuiuiuW9olxuICAgICYubWVyYy10YWJsZS1zZWNvbmRhcnktdmFyaWFudCB7XG4gICAgICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmLm1lcmMtdGFibGUtdGhpcmQge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6ImyXG4gICAgJi5tZXJjLXRhYmxlLXRoaXJkLXZhcmlhbnQge1xuICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBoZWFkZXIg6aGP6ImyIGVuZCAqL1xufVxuXG4vLyDnt4rphLDlnKhjYXJk5LiL5pa555qE5LiN6KaB5ZyT6KeSXG5tZXJjLWNhcmQtY29udGVudCA+IG1lcmMtdGFibGUge1xuICAgIC5hbnQtdGFibGUtY29udGFpbmVyIHRhYmxlID4gdGhlYWQge1xuICAgICAgICB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKiBlbmQgb2Ygb3ZlcndyaXRlIHRhYmxlIHN0eWxlICovXG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG5AZWFjaCAkbmFtZSwgJGNvbG9yIGluICRjb2xvclNldCB7XG4gICAgLm1lcmMtZmxleC10YWJsZS0jeyRuYW1lfSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIC5tZXJjLWZsZXgtdGFibGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBzaGFkb3cpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBwYWRkaW5nKTtcblxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWJsZSwgcmFkaXVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRib2R5IHRyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgcGFkZGluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBldmVuLWNvbC1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm5vLWRhdGEge1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uby1kYXRhLWhpbnQge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDVkNWQ1O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFibGUsIGJyZWFrLXBvaW50KSkge1xuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSxcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGhlYWQsXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRib2R5LFxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0Zm9vdCxcbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGgsXG4gICAgICAgICAgICAubWVyYy1mbGV4LXRhYmxlIHRkLFxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0ciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZXJjLWZsZXgtdGFibGUgdGhlYWQgdHIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC05OTk5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTk5OTlweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lcmMtZmxleC10YWJsZSB0Ym9keSB0ciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCByYWRpdXMpO1xuXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFibGUsIHJhZGl1cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgbW8tcGFkZGluZykgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkYmFzZS10YWJsZSwgbW8tYm9yZGVyLWJvdHRvbS13aWR0aCkgc29saWQgJGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1kYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBtYXAtZ2V0KCRiYXNlLXRhYmxlLCBtby1wYWRkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYubm8tZGF0YSB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogbWFwLWdldCgkYmFzZS10YWJsZSwgbW8tcGFkZGluZykgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuLyogb3ZlcndyaXRlIHRhYiBzdHlsZSAqL1xubWVyYy10YWIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IG1hcC1nZXQoJGJhc2UtdGFiLCBmb250LXNpemUpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItY29sb3IpO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBtYXAtZ2V0KCRiYXNlLXRhYiwgcmFkaXVzKTtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IG1hcC1nZXQoJGJhc2UtdGFiLCB0YWItYm9yZGVyLXdpZHRoKTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgICAgIC8qIOmXnOmWieeahOWPieWPiSAqL1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy1jbG9zZS14IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWJvcmRlci13aWR0aCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuXG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi1idG4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogbWFwLWdldCgkYmFzZS10YWIsIGNvbnRlbnQtYm9yZGVyLXdpZHRoKTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IG1hcC1nZXQoJGJhc2UtdGFiLCByYWRpdXMpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogbWFwLWdldCgkYmFzZS10YWIsIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiDpoY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICAmLm1lcmMtdGFiLXByaW1hcnkge1xuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuLvpoYzoibLororlvaJcbiAgICAmLm1lcmMtdGFiLXByaW1hcnktdmFyaWFudCB7XG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibJcbiAgICAmLm1lcmMtdGFiLXNlY29uZGFyeSB7XG4gICAgICAgID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAgICAgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgICAgICAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIge1xuICAgICAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibLororlvaJcbiAgICAmLm1lcmMtdGFiLXNlY29uZGFyeS12YXJpYW50IHtcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmLm1lcmMtdGFiLXRoaXJkIHtcbiAgICAgICAgPiAuYW50LXRhYnMuYW50LXRhYnMtY2FyZCB7XG4gICAgICAgICAgICA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibLororlvaJcbiAgICAmLm1lcmMtdGFiLXRoaXJkLXZhcmlhbnQge1xuICAgICAgICA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgICAgID4gLmFudC10YWJzLW5hdiB7XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC10YWJzLXRhYi5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA+IC5hbnQtdGFicy1jb250ZW50LWhvbGRlciB7XG4gICAgICAgICAgICAgICAgPiAuYW50LXRhYnMtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgID4gLmFudC10YWJzLXRhYnBhbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiDpoY/oibIgZW5kICovXG5cbiAgICAvKiB0YWIg6auY5bqmIHN0YXJ0ICovXG4gICAgLy8g5bCPXG4gICAgJi5tZXJjLXRhYi1zbWFsbCB7XG4gICAgICAgID4gLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuK1cbiAgICAmLm1lcmMtdGFiLW5vcm1hbCB7XG4gICAgICAgID4gLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtbmF2IHtcbiAgICAgICAgICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDlpKdcbiAgICAmLm1lcmMtdGFiLWxhcmdlIHtcbiAgICAgICAgPiAuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1uYXYge1xuICAgICAgICAgICAgLmFudC10YWJzLXRhYiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qIHRhYiDpq5jluqYgZW5kICovXG59XG4vKiBlbmQgb2Ygb3ZlcndyaXRlIHRhYiBzdHlsZSAqL1xuIiwiQGltcG9ydCBcImN1c3RvbS1zZXR0aW5nLnNjc3NcIjtcblxuLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRiYXNlLXRhYiwgdGFiLWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkYmFzZS10YWIsIHRhYi1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLnRvZ2dsZS13cmFwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG5tZXJjLXRhYiB7XG4gICAgLyog6aGP6ImyIHN0YXJ0ICovXG4gICAgLy8g5Li76aGM6ImyXG4gICAgJlttZXJjVHlwZT1cInByaW1hcnlcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDkuLvpoYzoibLororlvaJcbiAgICAmW21lcmNUeXBlPVwicHJpbWFyeVZhcmlhbnRcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qyh6KaB6ImyXG4gICAgJlttZXJjVHlwZT1cInNlY29uZGFyeVwiXSB7XG4gICAgICAgIC8vID4gLmFudC10YWJzLmFudC10YWJzLWNhcmQge1xuICAgICAgICAvLyAgICAgPiAuYW50LXRhYnMtY29udGVudC1ob2xkZXIgPiAuYW50LXRhYnMtY29udGVudCA+IC5hbnQtdGFicy10YWJwYW5lIHtcbiAgICAgICAgLy8gICAgICAgICBtZXJjLXRvZ2dsZS1jb2xsYXBzZSAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qyh6KaB6Imy6K6K5b2iXG4gICAgJlttZXJjVHlwZT1cInNlY29uZGFyeVZhcmlhbnRcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnrKzkuInoibJcbiAgICAmW21lcmNUeXBlPVwidGhpcmRcIl0ge1xuICAgICAgICAvLyA+IC5hbnQtdGFicy5hbnQtdGFicy1jYXJkIHtcbiAgICAgICAgLy8gICAgID4gLmFudC10YWJzLWNvbnRlbnQtaG9sZGVyID4gLmFudC10YWJzLWNvbnRlbnQgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICAgIC8vICAgICAgICAgLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLnRvZ2dsZS1mbG9hdC1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJsuiuiuW9olxuICAgICZbbWVyY1R5cGU9XCJ0aGlyZFZhcmlhbnRcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoaXJkLXZhcmlhbnQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyog6aGP6ImyIGVuZCAqL1xuICAgIC8qIHRhYiDpq5jluqYgc3RhcnQgKi9cbiAgICAvLyDlsI9cbiAgICAmW21lcmNTaXplPVwic21hbGxcIl0ge1xuICAgICAgICA+IC50b2dnbGUtZmxvYXQtYnRuIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuK1cbiAgICAmW21lcmNTaXplPVwibm9ybWFsXCJdIHtcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5aSnXG4gICAgJlttZXJjU2l6ZT1cImxhcmdlXCJdIHtcbiAgICAgICAgPiAudG9nZ2xlLWZsb2F0LWJ0biB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogdGFiIOmrmOW6piBlbmQgKi9cbn1cbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG5cbi5tZXJjLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkYnRuLCBzaGFkb3cpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCRidG4sIGJvcmRlci1yYWRpdXMpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAvKiDpoY/oibIgc3RhcnQgKi9cbiAgICAvLyDkuLvpoYzoibJcbiAgICAmLm1lcmMtYnRuLXByaW1hcnkge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG5cbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOS4u+mhjOiJsuiuiuW9olxuICAgICYubWVyYy1idG4tcHJpbWFyeS12YXJpYW50IHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHByaW1hcnktdmFyaWFudC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LXZhcmlhbnQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5qyh6KaB6ImyXG4gICAgJi5tZXJjLWJ0bi1zZWNvbmRhcnkge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgOCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkc2Vjb25kYXJ5LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHopoHoibLororlvaJcbiAgICAmLm1lcmMtYnRuLXNlY29uZGFyeS12YXJpYW50IHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCA4JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5tZXJjLWJ0bi1vdXRsaW5lIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRzZWNvbmRhcnktdmFyaWFudC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHNlY29uZGFyeS12YXJpYW50LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOesrOS4ieiJslxuICAgICYubWVyYy1idG4tdGhpcmQge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCR0aGlyZC1jb2xvciwgOCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtY29sb3IsIDglKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhpcmQtY29sb3I7XG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHRoaXJkLWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtY29sb3IsIDE1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56ys5LiJ6Imy6K6K5b2iXG4gICAgJi5tZXJjLWJ0bi10aGlyZC12YXJpYW50IHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtdmFyaWFudC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHRoaXJkLXZhcmlhbnQtY29sb3IsIDglKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lcmMtYnRuLW91dGxpbmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICR0aGlyZC12YXJpYW50LWNvbG9yO1xuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCR0aGlyZC12YXJpYW50LWNvbG9yLCAxNSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkdGhpcmQtdmFyaWFudC1jb2xvciwgMTUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYubWVyYy1idG4tb3V0bGluZSBidXR0b24ge1xuICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICA+ICoge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjJzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiDpoY/oibIgZW5kICovXG5cbiAgICAvKiDpq5jluqYgc3RhcnQgKi9cbiAgICAvLyDlsI9cbiAgICAmLm1lcmMtYnRuLXNtYWxsIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogbWFwLWdldCgkYnRuLWhlaWdodCwgc20pO1xuICAgIH1cbiAgICAvLyDkuK1cbiAgICAmLm1lcmMtYnRuLW5vcm1hbCBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IG1hcC1nZXQoJGJ0bi1oZWlnaHQsIG1kKTtcbiAgICB9XG4gICAgLy8g5aSnXG4gICAgJi5tZXJjLWJ0bi1sYXJnZSBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IG1hcC1nZXQoJGJ0bi1oZWlnaHQsIGxnKTtcbiAgICB9XG4gICAgLyog6auY5bqmIGVuZCAqL1xuXG4gICAgLyog5a+s5bqmIHN0YXJ0ICovXG4gICAgLy8geHNcbiAgICAmLm1lcmMtYnRuLXhzIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHhzKTtcbiAgICB9XG4gICAgLy8gc21cbiAgICAmLm1lcmMtYnRuLXNtIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHNtKTtcbiAgICB9XG4gICAgLy8gbWRcbiAgICAmLm1lcmMtYnRuLW1kIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIG1kKTtcbiAgICB9XG4gICAgLy8gbGdcbiAgICAmLm1lcmMtYnRuLWxnIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIGxnKTtcbiAgICB9XG4gICAgLy8geGxcbiAgICAmLm1lcmMtYnRuLXhsIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBtYXAtZ2V0KCRidG4td2lkdGgsIHhsKTtcbiAgICB9XG4gICAgLyog5a+s5bqmIGVuZCAqL1xuXG4gICAgLyogRGlzYWJsZWQgKi9cbiAgICAmLmRpc2FibGVkIGJ1dHRvbltkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwiY3VzdG9tLXNldHRpbmcuc2Nzc1wiO1xuXG5AbWl4aW4gZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvYy1kYXRlLXBpY2tlciB7XG4gIC5kYXRlLXBpY2tlciB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIC8vIGhlaWdodDogMjRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICAvLyAmOmhvdmVyIHtcbiAgICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgIC8vIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5jbGVhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjbGVhciBpY29uIHN0YXJ0XG4gIC5jbGVhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDdweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLy8gY2xlYXIgaWNvbiBlbmRcblxuICAuc2VsZWN0ZWQtZGF0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLy8gZGlzcGxheSBmb3JtYXRcblxuICAvLyBwb3BvdXQgbW9kYWwgc3RhcnRcbiAgLmRhdGVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTE1JTtcbiAgICAvLyBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgJi5hY3RpdmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIC8vaGVhZGVyIHN0YXJ0XG4gIC5oZWFkZXItYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZzogMTBweCAycHggMDtcbiAgfVxuXG4gIC5oZWFkZXItbGFiZWwge1xuICAgIGZsZXg6IDE7XG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcbiAgfVxuXG4gIC5hcnJvdy1idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgfVxuXG4gIC8vY2FsZW5kYXIgc3RhcnRcbiAgLndlZWtzLFxuICAuZGF5cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICB9XG5cbiAgLndlZWtzIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gIH1cblxuICAud2VlayxcbiAgLmRheSB7XG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcbiAgfVxuXG4gIC5kYXksXG4gIC55ZWFyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAueWVhcnMsXG4gIC5tb250aHMge1xuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XG4gIH1cblxuICAubm90LXByZXNlbnQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ncmF5O1xuICB9XG5cbiAgLmRheS5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5kYXkuc2VsZWN0ZWQubm90LXByZXNlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ncmF5O1xuICB9XG5cbiAgLy8g5bqV6YOo5LuK5aSpXG4gIC50b2RheSB7XG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmLm5vdC1wcmVzZW50IHtcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICB9XG5cbiAgLmhyIHtcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXk7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4gIC5zdWZmaXgtaWNvbiB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICB9XG59XG5cbjo6bmctZGVlcC5tZXJjLXllYXItc2VsZWN0IHtcbiAgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbnQtc2VsZWN0LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJjdXN0b20tc2V0dGluZy5zY3NzXCI7XG4ubWVyYy1jYWxlbmRhcntcbiAgICAucm9jWWVhciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiA0NXB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJvY1llYXItdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMzhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG4ge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICAgICAgICAvLyBib3JkZXI6ICMyYzNlNTAgMXB4IHNvbGlkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICBib3JkZXI6ICRzZWNvbmRhcnktY29sb3IgMXB4IHNvbGlkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIH1cbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG5bZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcbiAgICAgICAgYm9yZGVyOiAjZDlkOWQ5IDFweCBzb2xpZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICB9XG4gICAgLmZvci1jYWxlbmRhciA+IC5hbnQtYnRuOmhvdmVyOm5vdChbZGlzYWJsZWRdKSxcbiAgICAuZm9yLWNhbGVuZGFyID4gLmFudC1idG46YWN0aXZlOm5vdChbZGlzYWJsZWRdKSxcbiAgICAuZm9yLWNhbGVuZGFyID4gLmZvY3VzLXRvZGF5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkc2Vjb25kYXJ5LWNvbG9yLCAxMCUpO1xuICAgICAgICBib3JkZXI6IGxpZ2h0ZW4oJHNlY29uZGFyeS1jb2xvciwgMTAlKSAxcHggc29saWQ7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"training-course\",\"version\":\"1.1.1\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"start:front\":\"ng serve tc-front --port 3010 --host 0.0.0.0\",\"start:back\":\"ng serve tc-back --port 3011 --host 0.0.0.0\",\"prebuild:front\":\"npm --no-git-tag-version version minor\",\"prebuild:front:patch\":\"npm --no-git-tag-version version patch\",\"prebuild:back\":\"npm --no-git-tag-version version minor\",\"prebuild:back:patch\":\"npm --no-git-tag-version version patch\",\"build:front\":\"ng build tc-front --base-href /tc-front/static/\",\"build:front:patch\":\"ng build --base-href /tc-front/static/\",\"build:back\":\"ng build tc-back --base-href /tc-back/static/\",\"build:back:patch\":\"ng build --base-href /tc-back/static/\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~11.1.2\",\"@angular/common\":\"~11.1.2\",\"@angular/compiler\":\"~11.1.2\",\"@angular/core\":\"~11.1.2\",\"@angular/forms\":\"~11.1.2\",\"@angular/platform-browser\":\"~11.1.2\",\"@angular/platform-browser-dynamic\":\"~11.1.2\",\"@angular/router\":\"~11.1.2\",\"@angular/service-worker\":\"~11.1.2\",\"bootstrap\":\"~5.0.1\",\"merc-lib\":\"^1.11.1\",\"moment\":\"^2.29.1\",\"ng-zorro-antd\":\"^11.4.2\",\"rxjs\":\"~6.6.0\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.11.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1101.4\",\"@angular/cli\":\"~11.1.4\",\"@angular/compiler-cli\":\"~11.1.2\",\"@types/jasmine\":\"~3.6.0\",\"@types/node\":\"^12.11.1\",\"codelyzer\":\"^6.0.0\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.2.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage\":\"~2.0.3\",\"karma-jasmine\":\"~4.0.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"ng-packagr\":\"^11.0.0\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~4.1.2\"}}");

/***/ }),

/***/ "lbyr":
/*!****************************************************!*\
  !*** ./projects/tc-front/src/app/app.component.ts ***!
  \****************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_pwa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/pwa-service */ "Dz0X");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "UTSv");




class AppComponent {
    constructor(pwaService) {
        this.pwaService = pwaService;
        this.title = 'tc-front';
        this.prevUrl = '';
        this.currentUrl = '';
        this.pwaService.checkForUpdates();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_pwa_service__WEBPACK_IMPORTED_MODULE_1__["PwaService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "merc-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-layout");
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "n22H":
/*!******************************************************************************************!*\
  !*** ./projects/tc-front/src/app/shared/components/state-light/state-light.component.ts ***!
  \******************************************************************************************/
/*! exports provided: StateLightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateLightComponent", function() { return StateLightComponent; });
/* harmony import */ var projects_tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/tc-lib/src/lib/const/device.const */ "5V4s");
/* harmony import */ var _content_const_icon_path_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../content/const/icon-path.const */ "T41C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_tc_front_src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/tc-front/src/app/shared/shared.service */ "VVBw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! merc-lib */ "c3fJ");






function StateLightComponent_ng_container_0_merc_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "merc-icon", 2);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconType", ctx_r2.ICON_PATH.GREEN_LIGHT)("iconSize", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD ? 14 : 12);
} }
function StateLightComponent_ng_container_0_merc_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "merc-icon", 2);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconType", ctx_r3.ICON_PATH.WHITE_LIGHT)("iconSize", ctx_r3.sharedService.userDevice === ctx_r3.DEVICE.PAD ? 14 : 12);
} }
function StateLightComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StateLightComponent_ng_container_0_merc_icon_1_Template, 1, 2, "merc-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, StateLightComponent_ng_container_0_merc_icon_2_Template, 1, 2, "merc-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const isSign_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isSign_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !isSign_r1);
} }
class StateLightComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        /**
         * 滿分多少
         */
        this.totalState = 5;
        /**
         * 目前狀態
         */
        this.state = 3;
        this.DEVICE = projects_tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_0__["DEVICE"];
        this.stateArray = new Array(this.totalState);
    }
    get ICON_PATH() {
        return _content_const_icon_path_const__WEBPACK_IMPORTED_MODULE_1__["ICON_PATH"];
    }
    ngOnInit() {
        this.stateArray.fill(true);
        this.stateArray.forEach((s, index) => this.stateArray[index] = (index + 1) <= this.state);
    }
}
StateLightComponent.ɵfac = function StateLightComponent_Factory(t) { return new (t || StateLightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_tc_front_src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
StateLightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StateLightComponent, selectors: [["app-state-light"]], inputs: { totalState: "totalState", state: "state" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "iconType", "iconSize", 4, "ngIf"], [3, "iconType", "iconSize"]], template: function StateLightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, StateLightComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.stateArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], merc_lib__WEBPACK_IMPORTED_MODULE_5__["MercIconComponent"]], styles: ["merc-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\nmerc-icon[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0YXRlLWxpZ2h0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjtBQUFFO0VBQ0UsaUJBQUE7QUFFSiIsImZpbGUiOiJzdGF0ZS1saWdodC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1lcmMtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "pzfE":
/*!*******************************************!*\
  !*** ./projects/tc-lib/src/public-api.ts ***!
  \*******************************************/
/*! exports provided: TcLibService, TcLibComponent, TcLibModule, errorMsg, PageSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tc_lib_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/tc-lib.service */ "ENPd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TcLibService", function() { return _lib_tc_lib_service__WEBPACK_IMPORTED_MODULE_0__["TcLibService"]; });

/* harmony import */ var _lib_tc_lib_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/tc-lib.component */ "xYah");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TcLibComponent", function() { return _lib_tc_lib_component__WEBPACK_IMPORTED_MODULE_1__["TcLibComponent"]; });

/* harmony import */ var _lib_tc_lib_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/tc-lib.module */ "1tKd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TcLibModule", function() { return _lib_tc_lib_module__WEBPACK_IMPORTED_MODULE_2__["TcLibModule"]; });

/* harmony import */ var _lib_validators_errorMsg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/validators/errorMsg */ "WLLR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorMsg", function() { return _lib_validators_errorMsg__WEBPACK_IMPORTED_MODULE_3__["errorMsg"]; });

/* harmony import */ var _lib_models_pageset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models/pageset */ "PnsQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSet", function() { return _lib_models_pageset__WEBPACK_IMPORTED_MODULE_4__["PageSet"]; });

/*
 * Public API Surface of tc-lib
 */



// errorMsg

// pagesetting



/***/ }),

/***/ "qH8J":
/*!***********************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/home/apply-home/apply-home.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ApplyHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyHomeComponent", function() { return ApplyHomeComponent; });
/* harmony import */ var projects_tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/tc-lib/src/lib/const/device.const */ "5V4s");
/* harmony import */ var _const_icon_path_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/icon-path.const */ "T41C");
/* harmony import */ var _const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/routing-path.const */ "2fUu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_tc_back_src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/tc-back/src/app/shared/shared.service */ "LmJt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");









function ApplyHomeComponent_div_11_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "merc-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApplyHomeComponent_div_11_tr_16_Template_merc_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r5.onEditClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u7DE8\u8F2F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r3.apply_date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r3.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mercType", "secondary")("mercSize", ctx_r2.sharedService.userDevice === ctx_r2.DEVICE.PAD ? "large" : "small");
} }
function ApplyHomeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u7533\u8ACB\u7D00\u9304 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "merc-flex-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u7533\u8ACB\u8005\u540D\u7A31");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u7533\u8ACB\u65E5\u671F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u72C0\u614B");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u529F\u80FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ApplyHomeComponent_div_11_tr_16_Template, 10, 5, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mercType", "primary")("headTextColor", "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.applyList);
} }
function ApplyHomeComponent_merc_card_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "merc-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "merc-card-content", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "merc-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u5C1A\u672A\u7533\u8ACB\u4EBA\u4E8B\u8CC7\u6599\uFF0C\u524D\u5F80\u7533\u8ACB\u5427\uFF01");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "merc-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApplyHomeComponent_merc_card_12_Template_merc_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.onEditClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u65B0\u589E\u4EBA\u4E8B\u8CC7\u6599 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("iconType", ctx_r1.ICON_PATH.SEARCH_NOT_FOUND)("iconSize", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mercType", "secondary")("mercWidth", "lg")("mercSize", "large");
} }
class ApplyHomeComponent {
    constructor(sharedService, router) {
        this.sharedService = sharedService;
        this.router = router;
        /**
         * TODO: 假資料
         */
        // applyList = [{ name: '阿嚕嚕/A123456789', apply_date: '2021/05/24', status: '尚未送出申請' }];
        this.applyList = [];
        this.DEVICE = projects_tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_0__["DEVICE"];
    }
    get ICON_PATH() {
        return _const_icon_path_const__WEBPACK_IMPORTED_MODULE_1__["ICON_PATH"];
    }
    ngOnInit() {
    }
    onEditClick() {
        this.router.navigate([_const_routing_path_const__WEBPACK_IMPORTED_MODULE_2__["ROUTING_PATH"].ADD_PERSONAL_INFO]);
    }
    /**
     * TODO: for demo
     * - unSend 尚未送出申請
     * - return 退件
     * - noData 還沒開始申請
     */
    onMockListChange(key) {
        this.applyList = [];
        switch (key) {
            case 'unSend':
                this.applyList = [{ name: '阿嚕嚕/A123456789', apply_date: '2021/05/24', status: '尚未送出申請' }];
                ;
                break;
            case 'return':
                this.applyList = [{ name: '阿嚕嚕/A123456789', apply_date: '2021/05/30', status: '退件' }];
                break;
            case 'noData':
                this.applyList = [];
                break;
            default:
                break;
        }
    }
}
ApplyHomeComponent.ɵfac = function ApplyHomeComponent_Factory(t) { return new (t || ApplyHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_tc_back_src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ApplyHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ApplyHomeComponent, selectors: [["app-apply-home"]], decls: 13, vars: 2, consts: [[1, "text-black", "mt-4", "title"], [1, "mb-3"], [3, "click"], ["class", "mb-4", 4, "ngIf"], [4, "ngIf"], [1, "mb-4"], [1, "table-header"], [1, "table-content", "mt-3"], [3, "mercType", "headTextColor"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["data-title", "\u7533\u8ACB\u8005\u540D\u7A31", 1, "text-lg-center"], ["data-title", "\u7533\u8ACB\u65E5\u671F", 1, "text-lg-center"], ["data-title", "\u72C0\u614B", 1, "text-center"], ["data-title", "\u529F\u80FD", 1, "text-center"], [3, "mercType", "mercSize", "click"], [1, "no-data"], [3, "iconType", "iconSize"], [1, "text-gray", "mb-3", "mt-3"], [3, "mercType", "mercWidth", "mercSize", "click"]], template: function ApplyHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u7533\u8ACB\u4EBA\u4E8B\u8CC7\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "demo\u7528\u8CC7\u6599\u72C0\u614B\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "merc-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApplyHomeComponent_Template_merc_button_click_5_listener() { return ctx.onMockListChange("unSend"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u5C1A\u672A\u9001\u51FA\u7533\u8ACB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "merc-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApplyHomeComponent_Template_merc_button_click_7_listener() { return ctx.onMockListChange("return"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u9000\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "merc-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApplyHomeComponent_Template_merc_button_click_9_listener() { return ctx.onMockListChange("noData"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u7121\u8CC7\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ApplyHomeComponent_div_11_Template, 17, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ApplyHomeComponent_merc_card_12_Template, 8, 5, "merc-card", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.applyList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.applyList.length === 0);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], merc_lib__WEBPACK_IMPORTED_MODULE_6__["FlexTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], merc_lib__WEBPACK_IMPORTED_MODULE_6__["MercCardComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_6__["ɵb"], merc_lib__WEBPACK_IMPORTED_MODULE_6__["MercIconComponent"]], styles: [".title[_ngcontent-%COMP%] {\n  -webkit-text-stroke: 0.5px black;\n  font-weight: bolder;\n  font-size: 36px;\n  text-align: center;\n  margin-bottom: 17px;\n}\n@media screen and (max-width: 575px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.no-data[_ngcontent-%COMP%] {\n  height: 382px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcGx5LWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBTko7SUFPUSxlQUFBO0VBR047QUFDRjtBQURBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFJSiIsImZpbGUiOiJhcHBseS1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjVweCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NTc1cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbn1cbi5uby1kYXRhIHtcbiAgICBoZWlnaHQ6IDM4MnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ "qHqY":
/*!**********************************************************************!*\
  !*** ./projects/tc-front/src/app/content/course/course.component.ts ***!
  \**********************************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var merc_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merc-lib */ "c3fJ");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _const_icon_path_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/icon-path.const */ "T41C");
/* harmony import */ var _shared_components_singup_modal_singup_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/singup-modal/singup-modal.component */ "2stt");
/* harmony import */ var _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../tc-lib/src/lib/const/device.const */ "5V4s");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock */ "9MJj");
/* harmony import */ var _core_models_pageset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/models/pageset */ "dtlk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/shared.service */ "VVBw");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_course_status_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/pipes/course-status.pipe */ "Smgp");






















function CourseComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u5E8F\u865F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CourseComponent_th_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", table_r5.header, " ");
} }
function CourseComponent_tr_79_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", table_r9.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r6[table_r9.primaryKey], " ");
} }
function CourseComponent_tr_79_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "merc-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CourseComponent_tr_79_ng_container_3_td_2_Template_merc_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r15.onPositiveClick(data_r6.signUp); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "courseStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", table_r9.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mercType", "secondary")("mercSize", ctx_r12.sharedService.userDevice === ctx_r12.DEVICE.PAD ? "large" : "small")("disabled", data_r6.signUp === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, data_r6.signUp));
} }
function CourseComponent_tr_79_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CourseComponent_tr_79_ng_container_3_td_1_Template, 2, 2, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CourseComponent_tr_79_ng_container_3_td_2_Template, 4, 7, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const j_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", j_r10 + 1 !== ctx_r8.tableSetting.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", j_r10 + 1 === ctx_r8.tableSetting.length);
} }
function CourseComponent_tr_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CourseComponent_tr_79_ng_container_3_Template, 3, 2, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.tableSetting);
} }
function CourseComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "merc-icon", 3);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconType", ctx_r4.ICON_PATH.CALENDAR)("iconSize", 23);
} }
class CourseComponent {
    constructor(fb, swiperDatePickerService, taiwanDatePipe, modalService, sharedService) {
        this.fb = fb;
        this.swiperDatePickerService = swiperDatePickerService;
        this.taiwanDatePipe = taiwanDatePipe;
        this.modalService = modalService;
        this.sharedService = sharedService;
        this.DEVICE = _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_5__["DEVICE"];
        this.pageSet = new _core_models_pageset__WEBPACK_IMPORTED_MODULE_7__["PageSet"]();
        this.validateForm = this.fb.group({
            subject: [''],
            display_startDate: [''],
            startDate: [''],
            display_endDate: [''],
            endDate: [''],
            type: [''],
            class: ['']
        });
        this.listOfData = _mock__WEBPACK_IMPORTED_MODULE_6__["mockTable"];
        this.tableSetting = [
            { header: '課程/活動名稱', primaryKey: 'title' },
            { header: '地區', primaryKey: 'location' },
            { header: '期別', primaryKey: 'class' },
            { header: '上課日期', primaryKey: 'startDate' },
            { header: '報名時間', primaryKey: 'signDate' },
            { header: '報名', primaryKey: 'signUp' },
        ];
    }
    get ICON_PATH() {
        return _const_icon_path_const__WEBPACK_IMPORTED_MODULE_3__["ICON_PATH"];
    }
    ngOnInit() {
        this.pageSet.initialize(_mock__WEBPACK_IMPORTED_MODULE_6__["mockTable"].length);
        this.handleShowData();
        this.initSearchDate();
    }
    onPositiveClick(signupAction) {
        this.modalService.create({
            nzContent: _shared_components_singup_modal_singup_modal_component__WEBPACK_IMPORTED_MODULE_4__["SingupModalComponent"],
            nzWidth: 600,
            nzMaskClosable: false,
            nzFooter: null,
            nzBodyStyle: { padding: '12px 24px' },
            nzComponentParams: { action: signupAction }
        });
    }
    onClearClick() {
        this.validateForm.reset();
    }
    /** 預設搜尋日期 */
    initSearchDate() {
        var _a, _b, _c, _d;
        const startDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(2, 'M').valueOf();
        const endDate = moment__WEBPACK_IMPORTED_MODULE_2__().add(1, 'M').valueOf();
        (_a = this.validateForm.get('display_startDate')) === null || _a === void 0 ? void 0 : _a.patchValue(this.taiwanDatePipe.transform(startDate, true));
        (_b = this.validateForm.get('startDate')) === null || _b === void 0 ? void 0 : _b.patchValue(startDate);
        (_c = this.validateForm.get('display_endDate')) === null || _c === void 0 ? void 0 : _c.patchValue(this.taiwanDatePipe.transform(endDate, true));
        (_d = this.validateForm.get('endDate')) === null || _d === void 0 ? void 0 : _d.patchValue(endDate);
    }
    // 日曆相關 start
    onStartDateClick() {
        const form = this.validateForm.getRawValue();
        const defaultDate = form.startDate || moment__WEBPACK_IMPORTED_MODULE_2__('1981-10-02').valueOf();
        const maxDate = form.endDate || undefined;
        this.swiperDatePickerService.openDatePicker({ defaultDate, dateType: merc_lib__WEBPACK_IMPORTED_MODULE_1__["DateType"].startDate }).afterClose.subscribe(date => {
            var _a, _b, _c, _d, _e;
            if (date) {
                (_a = this.validateForm.get('display_endDate')) === null || _a === void 0 ? void 0 : _a.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
                (_b = this.validateForm.get('display_startDate')) === null || _b === void 0 ? void 0 : _b.patchValue(this.taiwanDatePipe.transform(date, true));
                (_c = this.validateForm.get('startDate')) === null || _c === void 0 ? void 0 : _c.patchValue(date);
                // 如果大於迄日則重置迄日
                const endDate = form.endDate;
                if (endDate && moment__WEBPACK_IMPORTED_MODULE_2__(endDate).isBefore(date)) {
                    (_d = this.validateForm.get('display_endDate')) === null || _d === void 0 ? void 0 : _d.patchValue('');
                    (_e = this.validateForm.get('endDate')) === null || _e === void 0 ? void 0 : _e.patchValue('');
                }
            }
        });
    }
    onEndDateClick() {
        const form = this.validateForm.getRawValue();
        const defaultDate = form.endDate || form.startDate;
        const minDate = form.startDate || null;
        this.swiperDatePickerService.openDatePicker({ defaultDate, minDate, dateType: merc_lib__WEBPACK_IMPORTED_MODULE_1__["DateType"].endDate }).afterClose.subscribe(date => {
            var _a, _b, _c;
            if (date) {
                (_a = this.validateForm.get('display_strDate')) === null || _a === void 0 ? void 0 : _a.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
                (_b = this.validateForm.get('display_endDate')) === null || _b === void 0 ? void 0 : _b.patchValue(this.taiwanDatePipe.transform(date, true));
                (_c = this.validateForm.get('endDate')) === null || _c === void 0 ? void 0 : _c.patchValue(date);
            }
        });
    }
    // 日曆 end
    scrollbarControl() {
        if (this.sharedService.userDevice === _tc_lib_src_lib_const_device_const__WEBPACK_IMPORTED_MODULE_5__["DEVICE"].MOBILE) {
            return { x: '960px' };
        }
        else {
            return {};
        }
    }
    log(value) {
        console.log(value);
    }
    // pageset start
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
        this.listOfData = _mock__WEBPACK_IMPORTED_MODULE_6__["mockTable"].slice((this.pageSet.currentPage - 1) * this.pageSet.currentPageSize, (this.pageSet.currentPage) * this.pageSet.currentPageSize);
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_1__["SwiperDatePickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](merc_lib__WEBPACK_IMPORTED_MODULE_1__["TaiwanDatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"])); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], decls: 82, vars: 38, consts: [[1, "tab-box"], [1, "search-box"], [1, "search-header", "text-20", "text-fatty", "pb-2"], [3, "iconType", "iconSize"], [1, "search-content"], ["nz-form", "", 3, "nzLayout", "nzNoColon", "formGroup"], [1, "row"], [1, "col-12", "col-md-6", "col-xl-3"], ["nzFor", "subject"], ["nz-input", "", "name", "subject", "type", "text", "id", "subject", "formControlName", "subject", 3, "nzSize"], [1, "col-12", "col-md-6", "col-xl-4"], [1, "col-6"], ["nzFor", "startDate"], [1, "date-picker-wave"], [3, "nzSize", "nzSuffix", "click"], ["type", "text", "nz-input", "", "formControlName", "display_startDate", "placeholder", "\u8ACB\u9078\u64C7\u65E5\u671F", 3, "readOnly"], ["nzFor", "email", 2, "opacity", "0"], ["type", "text", "nz-input", "", "formControlName", "display_endDate", "placeholder", "\u8ACB\u9078\u64C7\u65E5\u671F", 3, "readOnly"], [1, "col", "col-xl-5"], [1, "col-6", "col-md-4"], ["nzFor", "class"], ["formControlName", "class", "id", "class", 3, "nzSize"], ["nzFor", "type"], ["formControlName", "type", "id", "type", 3, "nzSize"], [1, "col-12", "col-md-4", "search-btns"], [3, "mercType", "outline", "mercSize", "mercWidth", "click"], [3, "mercType", "mercSize", "mercWidth"], [1, "table-box"], [1, "table-header"], [3, "nzOnChange"], [1, "d-flex", "flex-wrap", "ms-3"], ["nz-checkbox", "", "nzValue", "A", 3, "ngModel"], ["nz-checkbox", "", "nzValue", "B", 3, "ngModel"], [1, "pagination"], [1, "pagesize", "py-2", "py-md-0"], [3, "ngModel", "ngModelChange"], ["nzLabel", "10", 3, "nzValue"], ["nzLabel", "25", 3, "nzValue"], ["nzLabel", "50", 3, "nzValue"], [1, "pagechange"], [3, "iconType", "iconSize", "click"], [1, "table-content"], [3, "mercType", "headTextColor"], ["class", "text-center", 4, "ngIf"], ["class", "text-center", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["calendar", ""], [1, "text-center"], ["data-title", "\u5E8F\u865F", 1, "text-center"], ["class", "text-md-center", 4, "ngIf"], [1, "text-md-center"], [3, "mercType", "mercSize", "disabled", "click"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "merc-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " \u67E5\u8A62\u689D\u4EF6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\u95DC\u9375\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "nz-form-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\u4E0A\u8AB2\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "nz-form-control", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "nz-input-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CourseComponent_Template_nz_input_group_click_21_listener() { return ctx.onStartDateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "nz-form-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "\u4E0A\u8AB2\u65E5\u671F\uFF08\u8FC4\u65E5\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "nz-input-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CourseComponent_Template_nz_input_group_click_28_listener() { return ctx.onEndDateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "nz-form-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "\u985E\u5225");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "nz-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "nz-form-label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "\u6027\u8CEA");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "nz-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "merc-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CourseComponent_Template_merc_button_click_45_listener() { return ctx.onClearClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "\u6E05\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "merc-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "\u67E5\u8A62");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, " \u6D3B\u52D5/\u8AB2\u7A0B\u5217\u8868 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "nz-checkbox-wrapper", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzOnChange", function CourseComponent_Template_nz_checkbox_wrapper_nzOnChange_52_listener($event) { return ctx.log($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "\u50C5\u986F\u793A\u5831\u540D\u6210\u529F\u4E4B\u5834\u6B21");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "\u50C5\u986F\u793A\u53EF\u5831\u540D\u4E4B\u5834\u6B21");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, " \u6BCF\u9801\u986F\u793A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "nz-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CourseComponent_Template_nz_select_ngModelChange_63_listener($event) { return ctx.pageSet.currentPageSize = $event; })("ngModelChange", function CourseComponent_Template_nz_select_ngModelChange_63_listener() { return ctx.handleShowData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "nz-option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](65, "nz-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "nz-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, " \u7B46 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "merc-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CourseComponent_Template_merc_icon_click_69_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "merc-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CourseComponent_Template_merc_icon_click_71_listener() { return ctx.onChangePageIndex(ctx.pageSet.currentPage + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "merc-flex-table", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, CourseComponent_th_76_Template, 2, 0, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, CourseComponent_th_77_Template, 2, 1, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, CourseComponent_tr_79_Template, 4, 2, "tr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](80, CourseComponent_ng_template_80_Template, 1, 2, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconType", ctx.ICON_PATH.BTN_SEARCH)("iconSize", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzLayout", "vertical")("nzNoColon", true)("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSize", "large")("nzSuffix", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSize", "large")("nzSuffix", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mercType", "third")("outline", true)("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mercType", "third")("mercSize", "large")("mercWidth", "xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.listOfData);
    } }, directives: [merc_lib__WEBPACK_IMPORTED_MODULE_1__["MercIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__["NzSelectComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_16__["NzCheckboxWrapperComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_16__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__["NzOptionComponent"], merc_lib__WEBPACK_IMPORTED_MODULE_1__["FlexTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTrDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTbodyComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzThMeasureDirective"]], pipes: [_shared_pipes_course_status_pipe__WEBPACK_IMPORTED_MODULE_19__["CourseStatusPipe"]], styles: ["@media screen and (max-width: 576px) {\n  .ant-checkbox-group[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n}\ntd[_ngcontent-%COMP%]:last-child {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsZUFBQTtFQUNGO0FBQ0Y7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFERiIsImZpbGUiOiJjb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYW50LWNoZWNrYm94LWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbn1cblxuXG50ZDpsYXN0LWNoaWxke1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "riHe":
/*!*******************************************************************!*\
  !*** ./projects/tc-front/src/app/core/enums/account-type.enum.ts ***!
  \*******************************************************************/
/*! exports provided: AccountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
/**
 * TODO: 假資料
 * 登入身分 枚舉
 */
var AccountType;
(function (AccountType) {
    /**
     * 新增員
     */
    AccountType["new"] = "1";
    /**
     * 0新聘員
     */
    AccountType["newRecruit"] = "2";
    /**
     * 業務員
     */
    AccountType["sales"] = "3";
})(AccountType || (AccountType = {}));


/***/ }),

/***/ "xR/m":
/*!******************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/index-page/index-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: IndexPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageComponent", function() { return IndexPageComponent; });
/* harmony import */ var _const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/routing-path.const */ "2fUu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/permission.service */ "BlqQ");
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/account.service */ "TyOg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class IndexPageComponent {
    constructor(permissionService, accountService, router) {
        this.permissionService = permissionService;
        this.accountService = accountService;
        this.router = router;
    }
    ngOnInit() {
        const value = this.accountService.account.account_type;
        this.router.navigate([_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].HOME]);
        // switch (value) {
        //   case AccountType.new:
        //     this.router.navigate([ROUTING_PATH.ADD_PERSONAL_INFO]);
        //     break;
        //   case AccountType.newRecruit:
        //     this.router.navigate([ROUTING_PATH.HOME]);
        //     break;
        //   case AccountType.sales:
        //     this.router.navigate([ROUTING_PATH.HOME]);
        //     break;
        //   default:
        //     break;
        // }
    }
}
IndexPageComponent.ɵfac = function IndexPageComponent_Factory(t) { return new (t || IndexPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_permission_service__WEBPACK_IMPORTED_MODULE_2__["PermissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
IndexPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexPageComponent, selectors: [["app-index-page"]], decls: 2, vars: 0, consts: [[1, "text-center"]], template: function IndexPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Demo\u7248\u7121\u6CD5\u5132\u5B58\u8EAB\u5206\u5225\uFF0C\u8ACB\u91CD\u65B0\u9078\u64C7\u8EAB\u5206\u5225~\u8B1D\u8B1D~");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "xYah":
/*!*****************************************************!*\
  !*** ./projects/tc-lib/src/lib/tc-lib.component.ts ***!
  \*****************************************************/
/*! exports provided: TcLibComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TcLibComponent", function() { return TcLibComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TcLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
TcLibComponent.ɵfac = function TcLibComponent_Factory(t) { return new (t || TcLibComponent)(); };
TcLibComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TcLibComponent, selectors: [["lib-tc-lib"]], decls: 2, vars: 0, template: function TcLibComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " tc-lib works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "yjt8":
/*!*************************************************************************!*\
  !*** ./projects/tc-front/src/app/content/quiz/const/tab-param.const.ts ***!
  \*************************************************************************/
/*! exports provided: TAB_PARAM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_PARAM", function() { return TAB_PARAM; });
const TAB_PARAM = {
    /**
     * 測驗
     */
    QUIZ_LIST: 'quiz-list',
    /**
     * 成績查詢
     */
    CHECK_SCORE: 'check-score'
};


/***/ }),

/***/ "zZcE":
/*!**************************************************************************************!*\
  !*** ./projects/tc-front/src/app/shared/directives/is-scroll-to-bottom.directive.ts ***!
  \**************************************************************************************/
/*! exports provided: IsScrollToBottomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsScrollToBottomDirective", function() { return IsScrollToBottomDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IsScrollToBottomDirective {
    constructor(eleRef) {
        this.eleRef = eleRef;
        this.isBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onScrollEvent(event) {
        this.top = this.eleRef.nativeElement.scrollTop;
        this.offSetHeight = this.eleRef.nativeElement.offsetHeight;
        this.scrollHeight = this.eleRef.nativeElement.scrollHeight;
        // XY軸準確到小數點後13位，計算時最好小於1一併考慮
        if (this.scrollHeight - this.offSetHeight - this.top < 1) {
            this.isBottom.emit(true);
        }
    }
}
IsScrollToBottomDirective.ɵfac = function IsScrollToBottomDirective_Factory(t) { return new (t || IsScrollToBottomDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
IsScrollToBottomDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: IsScrollToBottomDirective, selectors: [["", "appIsScrollToBottom", ""]], hostBindings: function IsScrollToBottomDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function IsScrollToBottomDirective_scroll_HostBindingHandler() { return ctx.onScrollEvent(); });
    } }, outputs: { isBottom: "isBottom" }, exportAs: ["isBottom"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map