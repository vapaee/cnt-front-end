(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div mdbModal #loginModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myloginModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: false}\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header vapaee-logo-container\">\n                <div class=\"text-center animated fadeIn\" style=\"width: 100%\">\n                    <br>\n                    <img src=\"https://steemconnect.com/img/logo-white.svg\" style=\"width: 250px\">\n                    <!--img src=\"http://accounts.vapaee.com/catalog/view/theme/vapaee/image/Logo.png\" style=\"width: 250px\"-->\n                    <br>\n                    <br>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div id=\"icon-panel\" class=\"text-center panel panel-default animated fadeIn\">\n                    <a [href]=\"steem.url\"><h4>Login with your steem account</h4></a>\n                    <!--\n                    <h4>Login with any social account</h4>\n                    <br>\n                    <a class=\"margin-left\" href=\"http://accounts.vapaee.com/index.php?route=extension/module/hybrid&amp;provider=Google&amp;redirect=aHR0cDovL2NhcmRzYW5kdG9rZW5zLmNvbS8=\">\n                        <img src=\"http://accounts.vapaee.com/image/themezee_social_icons/google.png\" alt=\"Google\" title=\"Google\">\n                    </a>\n                    <a class=\"margin-left\" href=\"http://accounts.vapaee.com/index.php?route=extension/module/hybrid&amp;provider=GitHub&amp;redirect=aHR0cDovL2NhcmRzYW5kdG9rZW5zLmNvbS8=\">\n                        <img src=\"http://accounts.vapaee.com/image/themezee_social_icons/github.png\" alt=\"GitHub\" title=\"GitHub\">\n                    </a>\n                    <a class=\"margin-left\" href=\"http://accounts.vapaee.com/index.php?route=extension/module/hybrid&amp;provider=Twitter&amp;redirect=aHR0cDovL2NhcmRzYW5kdG9rZW5zLmNvbS8=\">\n                        <img src=\"http://accounts.vapaee.com/image/themezee_social_icons/twitter.png\" alt=\"Twitter\" title=\"Twitter\">\n                    </a>\n                    -->\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vapaee-logo-container {\n  /*\n    background-color: #bed1c2;\n    background-image: -moz-linear-gradient(top, #47584a 0%, #252c27 100%);\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #47584a), color-stop(100%, #252c27));\n    background-image: -webkit-linear-gradient(top, #47584a 0%, #252c27 100%);\n    background-image: -o-linear-gradient(top, #47584a 0%, #252c27 100%);\n    background-image: -ms-linear-gradient(top, #47584a 0%, #252c27 100%);\n    background-image: linear-gradient(to bottom, #47584a 0%, #252c27 100%);\n    \n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#47584a, endColorstr=#252c27, GradientType=0);\n    */\n  background: linear-gradient(135deg, #1a5099, #92d7fa);\n  background-repeat: no-repeat; }\n\n:host {\n  display: block;\n  background-color: white;\n  height: 100%;\n  color: black; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _services_steem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/steem.service */ "./src/app/services/steem.service.ts");
/* harmony import */ var _services_userdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/userdata.service */ "./src/app/services/userdata.service.ts");
/* harmony import */ var _services_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/drag-and-drop.service */ "./src/app/services/drag-and-drop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(vapaee, user, app, cnt, steem, dnd) {
        this.vapaee = vapaee;
        this.user = user;
        this.app = app;
        this.cnt = cnt;
        this.steem = steem;
        this.dnd = dnd;
        this.app.init(this);
        this.cnt.init(this.app.device);
        this.steem.init(this);
        this.dnd.init();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.app.onWindowsResize();
    };
    AppComponent.prototype.onWindowsResize = function () {
        this.app.onWindowsResize();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginModal'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "loginModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowsResize", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"],
            _services_userdata_service__WEBPACK_IMPORTED_MODULE_5__["UserdataService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__["CntService"],
            _services_steem_service__WEBPACK_IMPORTED_MODULE_4__["SteemService"],
            _services_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_6__["DragAndDropService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/drag-and-drop.directive */ "./src/app/directives/drag-and-drop.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_userdata_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/userdata.service */ "./src/app/services/userdata.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _services_bg_box_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/bg-box.service */ "./src/app/services/bg-box.service.ts");
/* harmony import */ var _deploy_comp_component_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./deploy/comp/component.service */ "./src/app/deploy/comp/component.service.ts");
/* harmony import */ var _services_steem_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/steem.service */ "./src/app/services/steem.service.ts");
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/facebook.service */ "./src/app/services/facebook.service.ts");
/* harmony import */ var _services_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/drag-and-drop.service */ "./src/app/services/drag-and-drop.service.ts");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _pages_cards_cards_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/cards/cards.page */ "./src/app/pages/cards/cards.page.ts");
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/profile/profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _pages_comming_soon_comming_soon_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/comming-soon/comming-soon.page */ "./src/app/pages/comming-soon/comming-soon.page.ts");
/* harmony import */ var _pages_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/privacy-policy/privacy-policy.page */ "./src/app/pages/privacy-policy/privacy-policy.page.ts");
/* harmony import */ var _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/not-found/not-found.page */ "./src/app/pages/not-found/not-found.page.ts");
/* harmony import */ var _pages_loading_loading_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/loading/loading.page */ "./src/app/pages/loading/loading.page.ts");
/* harmony import */ var _deploy_deploy_card_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./deploy/deploy-card.page */ "./src/app/deploy/deploy-card.page.ts");
/* harmony import */ var _deploy_deploy_album_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./deploy/deploy-album.page */ "./src/app/deploy/deploy-album.page.ts");
/* harmony import */ var _pages_editor_editor_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/editor/editor.page */ "./src/app/pages/editor/editor.page.ts");
/* harmony import */ var _pages_albums_albums_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/albums/albums.page */ "./src/app/pages/albums/albums.page.ts");
/* harmony import */ var _pages_steem_connect_steem_connect_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/steem-connect/steem-connect.page */ "./src/app/pages/steem-connect/steem-connect.page.ts");
/* harmony import */ var _pages_facebook_connect_facebook_connect_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/facebook-connect/facebook-connect.page */ "./src/app/pages/facebook-connect/facebook-connect.page.ts");
/* harmony import */ var _pages_inventory_inventory_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/inventory/inventory.page */ "./src/app/pages/inventory/inventory.page.ts");
/* harmony import */ var _pages_root_root_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/root/root.page */ "./src/app/pages/root/root.page.ts");
/* harmony import */ var _deploy_comp_comp__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./deploy/comp/comp */ "./src/app/deploy/comp/comp.ts");
/* harmony import */ var _components_steem_upvote_button_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/steem-upvote-button.component */ "./src/app/components/steem-upvote-button.component.ts");
/* harmony import */ var _deploy_comp_root_root_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./deploy/comp/root/root.component */ "./src/app/deploy/comp/root/root.component.ts");
/* harmony import */ var _deploy_comp_row_three_row_three_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./deploy/comp/row-three/row-three.component */ "./src/app/deploy/comp/row-three/row-three.component.ts");
/* harmony import */ var _deploy_comp_grid_grid_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./deploy/comp/grid/grid.component */ "./src/app/deploy/comp/grid/grid.component.ts");
/* harmony import */ var _deploy_comp_place_holder_place_holder_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./deploy/comp/place-holder/place-holder.component */ "./src/app/deploy/comp/place-holder/place-holder.component.ts");
/* harmony import */ var _deploy_comp_background_background_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./deploy/comp/background/background.component */ "./src/app/deploy/comp/background/background.component.ts");
/* harmony import */ var _deploy_comp_scrolleable_scrolleable_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./deploy/comp/scrolleable/scrolleable.component */ "./src/app/deploy/comp/scrolleable/scrolleable.component.ts");
/* harmony import */ var _deploy_comp_video_video_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./deploy/comp/video/video.component */ "./src/app/deploy/comp/video/video.component.ts");
/* harmony import */ var _deploy_comp_markdown_markdown_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./deploy/comp/markdown/markdown.component */ "./src/app/deploy/comp/markdown/markdown.component.ts");
/* harmony import */ var _deploy_comp_section_section_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./deploy/comp/section/section.component */ "./src/app/deploy/comp/section/section.component.ts");
/* harmony import */ var _deploy_comp_menu_menu_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./deploy/comp/menu/menu.component */ "./src/app/deploy/comp/menu/menu.component.ts");
/* harmony import */ var _deploy_comp_float_float_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./deploy/comp/float/float.component */ "./src/app/deploy/comp/float/float.component.ts");
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/dom.service */ "./src/app/services/dom.service.ts");
/* harmony import */ var _deploy_comp_album_album_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./deploy/comp/album/album.component */ "./src/app/deploy/comp/album/album.component.ts");
/* harmony import */ var _deploy_comp_slot_slot_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./deploy/comp/slot/slot.component */ "./src/app/deploy/comp/slot/slot.component.ts");
/* harmony import */ var _deploy_comp_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./deploy/comp/inventory/inventory.component */ "./src/app/deploy/comp/inventory/inventory.component.ts");
/* harmony import */ var _deploy_comp_label_label_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./deploy/comp/label/label.component */ "./src/app/deploy/comp/label/label.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































// import { BaseComponent } from './deploy/comp/base/base.component';

















var routes = [
    { path: 'embedded/card/:slug', data: { state: "embedded-card", embedded: true }, component: _deploy_deploy_card_page__WEBPACK_IMPORTED_MODULE_25__["DeployCardPage"] },
    { path: 'embedded/album/:slug', data: { state: "embedded-album", embedded: true }, component: _deploy_deploy_album_page__WEBPACK_IMPORTED_MODULE_26__["DeployAlbumPage"] },
    { path: 'loading', data: { state: "loading" }, component: _pages_loading_loading_page__WEBPACK_IMPORTED_MODULE_24__["LoadingPage"] },
    { path: 'steemconnect', data: { state: "steemconnect" }, component: _pages_steem_connect_steem_connect_page__WEBPACK_IMPORTED_MODULE_29__["SteemConnectPage"] },
    { path: 'facebookconnect', data: { state: "facebookconnect" }, component: _pages_facebook_connect_facebook_connect_page__WEBPACK_IMPORTED_MODULE_30__["FacebookConnectPage"] },
    { path: '', data: { state: "root" }, component: _pages_root_root_page__WEBPACK_IMPORTED_MODULE_32__["RootPage"],
        children: [
            { path: 'home', data: { state: "home" }, component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_18__["HomePage"] },
            { path: 'cards', data: { state: "cards", logged: false }, component: _pages_cards_cards_page__WEBPACK_IMPORTED_MODULE_19__["CardsPage"] },
            { path: 'profile', data: { state: "profile", logged: false }, component: _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_20__["ProfilePage"] },
            { path: 'albums', data: { state: "albums", logged: false }, component: _pages_albums_albums_page__WEBPACK_IMPORTED_MODULE_28__["AlbumsPage"] },
            { path: 'editor', data: { state: "editor", logged: true }, component: _pages_editor_editor_page__WEBPACK_IMPORTED_MODULE_27__["EditorPage"] },
            { path: 'inventory', data: { state: "inventory", logged: true }, component: _pages_inventory_inventory_page__WEBPACK_IMPORTED_MODULE_31__["InventoryPage"] },
            { path: 'mastery', data: { state: "mastery", logged: true }, component: _pages_comming_soon_comming_soon_page__WEBPACK_IMPORTED_MODULE_21__["CommingSoonPage"] },
            { path: 'market', data: { state: "market", logged: true }, component: _pages_comming_soon_comming_soon_page__WEBPACK_IMPORTED_MODULE_21__["CommingSoonPage"] },
            { path: 'games', data: { state: "games", logged: true }, component: _pages_comming_soon_comming_soon_page__WEBPACK_IMPORTED_MODULE_21__["CommingSoonPage"] },
            { path: 'privacy-policy', data: { state: "privacy-policy" }, component: _pages_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_22__["PrivacyPolicyPage"] },
            { path: 'deploy/card/:slug', data: { state: "deploy-card", logged: false }, component: _pages_cards_cards_page__WEBPACK_IMPORTED_MODULE_19__["CardsPage"] },
            { path: 'deploy/album/:slug', data: { state: "deploy-album", logged: false }, component: _pages_albums_albums_page__WEBPACK_IMPORTED_MODULE_28__["AlbumsPage"] },
        ]
    },
    { path: '**', data: { state: "404" }, component: _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_23__["NotFoundPage"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_6__["DraggableDirective"],
                _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_6__["DroppableDirective"],
                _pages_home_home_page__WEBPACK_IMPORTED_MODULE_18__["HomePage"],
                _pages_cards_cards_page__WEBPACK_IMPORTED_MODULE_19__["CardsPage"],
                _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_20__["ProfilePage"],
                _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_23__["NotFoundPage"],
                _pages_comming_soon_comming_soon_page__WEBPACK_IMPORTED_MODULE_21__["CommingSoonPage"],
                _pages_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_22__["PrivacyPolicyPage"],
                _pages_loading_loading_page__WEBPACK_IMPORTED_MODULE_24__["LoadingPage"],
                _deploy_deploy_card_page__WEBPACK_IMPORTED_MODULE_25__["DeployCardPage"],
                _deploy_deploy_album_page__WEBPACK_IMPORTED_MODULE_26__["DeployAlbumPage"],
                _pages_editor_editor_page__WEBPACK_IMPORTED_MODULE_27__["EditorPage"],
                _deploy_comp_comp__WEBPACK_IMPORTED_MODULE_33__["ComponentHost"],
                _deploy_comp_root_root_component__WEBPACK_IMPORTED_MODULE_35__["RootComponent"],
                _deploy_comp_row_three_row_three_component__WEBPACK_IMPORTED_MODULE_36__["RowThreeComponent"],
                _deploy_comp_grid_grid_component__WEBPACK_IMPORTED_MODULE_37__["GridComponent"],
                _deploy_comp_place_holder_place_holder_component__WEBPACK_IMPORTED_MODULE_38__["PlaceHolderComponent"],
                _deploy_comp_background_background_component__WEBPACK_IMPORTED_MODULE_39__["BackgroundComponent"],
                _deploy_comp_scrolleable_scrolleable_component__WEBPACK_IMPORTED_MODULE_40__["ScrolleableComponent"],
                _components_steem_upvote_button_component__WEBPACK_IMPORTED_MODULE_34__["SteemUpvoteButtonComponent"],
                _deploy_comp_video_video_component__WEBPACK_IMPORTED_MODULE_41__["VideoComponent"],
                _deploy_comp_markdown_markdown_component__WEBPACK_IMPORTED_MODULE_42__["MarkDownComponent"],
                _deploy_comp_section_section_component__WEBPACK_IMPORTED_MODULE_43__["SectionComponent"],
                _deploy_comp_menu_menu_component__WEBPACK_IMPORTED_MODULE_44__["MenuComponent"],
                _deploy_comp_float_float_component__WEBPACK_IMPORTED_MODULE_45__["FloatComponent"],
                _services_cnt_service__WEBPACK_IMPORTED_MODULE_12__["CardDeploy"],
                _services_app_service__WEBPACK_IMPORTED_MODULE_11__["LoadingOverall"],
                _services_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_17__["CardDragging"],
                _pages_albums_albums_page__WEBPACK_IMPORTED_MODULE_28__["AlbumsPage"],
                _deploy_comp_album_album_component__WEBPACK_IMPORTED_MODULE_47__["AlbumComponent"],
                _deploy_comp_slot_slot_component__WEBPACK_IMPORTED_MODULE_48__["SlotComponent"],
                _deploy_comp_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_49__["InventoryComponent"],
                _deploy_comp_label_label_component__WEBPACK_IMPORTED_MODULE_50__["LabelComponent"],
                _pages_steem_connect_steem_connect_page__WEBPACK_IMPORTED_MODULE_29__["SteemConnectPage"],
                _pages_facebook_connect_facebook_connect_page__WEBPACK_IMPORTED_MODULE_30__["FacebookConnectPage"],
                _pages_inventory_inventory_page__WEBPACK_IMPORTED_MODULE_31__["InventoryPage"],
                _pages_root_root_page__WEBPACK_IMPORTED_MODULE_32__["RootPage"]
            ],
            entryComponents: [
                _deploy_comp_root_root_component__WEBPACK_IMPORTED_MODULE_35__["RootComponent"],
                _deploy_comp_row_three_row_three_component__WEBPACK_IMPORTED_MODULE_36__["RowThreeComponent"],
                _deploy_comp_grid_grid_component__WEBPACK_IMPORTED_MODULE_37__["GridComponent"],
                _deploy_comp_place_holder_place_holder_component__WEBPACK_IMPORTED_MODULE_38__["PlaceHolderComponent"],
                _deploy_comp_background_background_component__WEBPACK_IMPORTED_MODULE_39__["BackgroundComponent"],
                _deploy_comp_scrolleable_scrolleable_component__WEBPACK_IMPORTED_MODULE_40__["ScrolleableComponent"],
                _deploy_comp_video_video_component__WEBPACK_IMPORTED_MODULE_41__["VideoComponent"],
                _deploy_comp_markdown_markdown_component__WEBPACK_IMPORTED_MODULE_42__["MarkDownComponent"],
                _deploy_comp_section_section_component__WEBPACK_IMPORTED_MODULE_43__["SectionComponent"],
                _deploy_comp_menu_menu_component__WEBPACK_IMPORTED_MODULE_44__["MenuComponent"],
                _deploy_comp_float_float_component__WEBPACK_IMPORTED_MODULE_45__["FloatComponent"],
                _deploy_comp_album_album_component__WEBPACK_IMPORTED_MODULE_47__["AlbumComponent"],
                _services_cnt_service__WEBPACK_IMPORTED_MODULE_12__["CardDeploy"],
                _services_app_service__WEBPACK_IMPORTED_MODULE_11__["LoadingOverall"],
                _services_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_17__["CardDragging"],
                _deploy_comp_slot_slot_component__WEBPACK_IMPORTED_MODULE_48__["SlotComponent"],
                _deploy_comp_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_49__["InventoryComponent"],
                _deploy_comp_label_label_component__WEBPACK_IMPORTED_MODULE_50__["LabelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_51__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes, { enableTracing: false } // <-- debugging purposes only
                ),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forRoot()
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [
                _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_9__["VapaeeUserService"],
                _services_userdata_service__WEBPACK_IMPORTED_MODULE_10__["UserdataService"],
                _services_cnt_service__WEBPACK_IMPORTED_MODULE_12__["CntService"],
                _services_bg_box_service__WEBPACK_IMPORTED_MODULE_13__["BgBoxService"],
                _services_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"],
                _deploy_comp_component_service__WEBPACK_IMPORTED_MODULE_14__["ComponentService"],
                _services_steem_service__WEBPACK_IMPORTED_MODULE_15__["SteemService"],
                _services_facebook_service__WEBPACK_IMPORTED_MODULE_16__["FacebookService"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
                _services_dom_service__WEBPACK_IMPORTED_MODULE_46__["DomService"],
                _services_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_17__["DragAndDropService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/steem-upvote-button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/steem-upvote-button.component.ts ***!
  \*************************************************************/
/*! exports provided: SteemUpvoteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteemUpvoteButtonComponent", function() { return SteemUpvoteButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _services_steem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/steem.service */ "./src/app/services/steem.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SteemUpvoteButtonComponent = /** @class */ (function () {
    function SteemUpvoteButtonComponent(steem, cnt) {
        this.steem = steem;
        this.cnt = cnt;
    }
    SteemUpvoteButtonComponent.prototype.update = function () {
        var _this = this;
        console.log("SteemUpvoteButtonComponent.update() ------------- ", this.steemdata);
        this.loading = true;
        return new Promise(function (resolve, reject) {
            if (!_this.steemdata.author) {
                return resolve();
            }
            _this.steem.steemjs.api.getActiveVotes(_this.steemdata.author, _this.steemdata.permlink, function (err, result) {
                console.log("this.steem.steemjs.api.getActiveVotes -------------- ", err, result);
                console.assert(Array.isArray(result), result);
                if (err) {
                    _this.loading = false;
                    resolve(err);
                    return;
                }
                _this.voted = false;
                _this.votes = 0;
                _this.list = result;
                for (var i = 0; i < _this.list.length; i++) {
                    if (_this.list[i].weight > 0) {
                        _this.votes++;
                    }
                }
                if (_this.votes != _this.steemdata.votes) {
                    _this.cnt.updateCollectibleVotes(_this.card.slug, _this.votes);
                }
                _this.steem.waitLogged.then(function () {
                    for (var i = 0; i < _this.list.length; i++) {
                        if (_this.list[i].voter == _this.steem.user.name && _this.list[i].weight > 0) {
                            _this.voted = true;
                        }
                    }
                    _this.loading = false;
                    resolve();
                }).catch(function () {
                    _this.loading = false;
                    resolve();
                });
            });
        });
    };
    SteemUpvoteButtonComponent.prototype.ngOnChanges = function () {
        if (typeof this.steemdata.author == "string" && typeof this.steemdata.permlink == "string") {
            this.update();
        }
    };
    SteemUpvoteButtonComponent.prototype.vote = function () {
        var _this = this;
        if (this.loading)
            return;
        this.loading = true;
        this.steem.vote(this.steemdata.author, this.steemdata.permlink).then(function () {
            _this.voted = true;
            _this.update();
            // this.loading = false;
        }).catch(function () {
            _this.loading = false;
        });
    };
    SteemUpvoteButtonComponent.prototype.unvote = function () {
        var _this = this;
        if (this.loading)
            return;
        this.loading = true;
        this.steem.unvote(this.steemdata.author, this.steemdata.permlink).then(function () {
            _this.voted = false;
            // this.loading = false;
            _this.update();
        }).catch(function () {
            _this.loading = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SteemUpvoteButtonComponent.prototype, "steemdata", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SteemUpvoteButtonComponent.prototype, "card", void 0);
    SteemUpvoteButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'steem-upvote-button',
            styles: [
                ":host {display:inline-block;}",
                // "span.upvote {display: inline-block; margin-left: 0; border-radius: 50%; white-space: nowrap !important; vertical-align: middle;}",
                // ".Icon > svg, .Icon span.icon {vertical-align: top; overflow: hidden; white-space: nowrap !important;}",
                "circle {stroke: #1FBF8F;}",
                ".steem-vote-btn {font-weight: 500; border-radius: 5px; background-color: white; padding: 2px 10px; color: #1FBF8F !important; font-size: smaller; }",
                ".upvoted .Icon:hover { -webkit-animation: none !important; animation: none !important; }",
                ".upvoted circle { fill: #06D6A9; stroke: #06D6A9; }",
                ".loading svg { border: 1px solid #06D6A9; border-radius: 50%; border-right-color: transparent; border-top-color: transparent; -webkit-animation: loading 500ms infinite linear; animation: loading 500ms infinite linear; }",
                "@keyframes loading { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }"
            ],
            template: "\n        <a [ngClass]=\"{'loading': loading}\" [hidden]=\"voted || !steemdata.author\" class=\"steem-vote-btn waves-effect waves-light\" (click)=\"vote()\">\n            <span class=\"Icon chevron-up-circle upvote\" style=\"display: inline-block; width: 1.12rem; height: 1.12rem; vertical-align: middle;\"><svg enable-background=\"new 0 0 33 33\" version=\"1.1\" viewBox=\"0 0 33 33\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"Chevron_Up_Circle\"><circle cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#1FBF8F\" fill=\"none\"></circle><path d=\"M16.699,11.293c-0.384-0.38-1.044-0.381-1.429,0l-6.999,6.899c-0.394,0.391-0.394,1.024,0,1.414 c0.395,0.391,1.034,0.391,1.429,0l6.285-6.195l6.285,6.196c0.394,0.391,1.034,0.391,1.429,0c0.394-0.391,0.394-1.024,0-1.414 L16.699,11.293z\" fill=\"#1FBF8F\"></path></g></svg></span>\n            <span [hidden]=\"!loading\">&nbsp;loading</span>\n            <span [hidden]=\"loading\">&nbsp;{{votes}} votes</span>\n        </a>\n        \n        <a [ngClass]=\"{'loading': loading}\" [hidden]=\"!voted || !steemdata.author\" class=\"steem-vote-btn waves-effect waves-light upvoted\" (click)=\"unvote()\">\n            <span class=\"Icon chevron-up-circle upvote\" style=\"display: inline-block; width: 1.12rem; height: 1.12rem; vertical-align: middle;\"><svg enable-background=\"new 0 0 33 33\" version=\"1.1\" viewBox=\"0 0 33 33\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"Chevron_Up_Circle\"><circle cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#121313\" fill=\"none\"></circle><path d=\"M16.699,11.293c-0.384-0.38-1.044-0.381-1.429,0l-6.999,6.899c-0.394,0.391-0.394,1.024,0,1.414 c0.395,0.391,1.034,0.391,1.429,0l6.285-6.195l6.285,6.196c0.394,0.391,1.034,0.391,1.429,0c0.394-0.391,0.394-1.024,0-1.414 L16.699,11.293z\" fill=\"#ffffff\"></path></g></svg></span>\n            <span [hidden]=\"!loading\">&nbsp;loading</span>\n            <span [hidden]=\"loading\">&nbsp;{{votes}} votes</span>\n        </a>\n    "
        }),
        __metadata("design:paramtypes", [_services_steem_service__WEBPACK_IMPORTED_MODULE_2__["SteemService"], _services_cnt_service__WEBPACK_IMPORTED_MODULE_1__["CntService"]])
    ], SteemUpvoteButtonComponent);
    return SteemUpvoteButtonComponent;
}());



/***/ }),

/***/ "./src/app/deploy/comp/album/album.component.html":
/*!********************************************************!*\
  !*** ./src/app/deploy/comp/album/album.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"album-container flex-center flex-grow animated fadeIn\" (window:resize)=\"onResize($event)\" [ngStyle]=\"getStyle\" >   \n    <div class=\"album-content embed-responsive embed-responsive-16by9\" ngClass=\"{'forward': section[data.name].difference > 0, 'backward':section[data.name].difference < 0}\">\n        <ng-template comp-host></ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/deploy/comp/album/album.component.scss":
/*!********************************************************!*\
  !*** ./src/app/deploy/comp/album/album.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  max-width: 100%;\n  max-height: 100%; }\n  :host .animated {\n    -webkit-animation-delay: 0.5s;\n    animation-delay: 0.5s; }\n  :host .album-content {\n    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);\n    background-color: black; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/album/album.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/album/album.component.ts ***!
  \******************************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _section_section_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../section/section.service */ "./src/app/deploy/comp/section/section.service.ts");
/* harmony import */ var _label_label_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../label/label.service */ "./src/app/deploy/comp/label/label.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlbumComponent = /** @class */ (function (_super) {
    __extends(AlbumComponent, _super);
    function AlbumComponent(vapaee, app, cnt, cfResolver, section, renderer, elRef, labels) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        _this.section = section;
        _this.renderer = renderer;
        _this.elRef = elRef;
        _this.labels = labels;
        _this.timer = 0;
        _this.init();
        return _this;
    }
    AlbumComponent.prototype.init = function () {
        var _this = this;
        this.capacity = 0;
        this.waitReady.then(function () {
            window.setTimeout(function () {
                _this.onResize();
            }, 200);
        });
    };
    AlbumComponent.config = function () {
        return {};
    };
    AlbumComponent.prototype.prepareData = function (structure) {
        var _this = this;
        // console.log("AlbumComponent.prepareData()", structure);
        this.data = structure.data;
        this.children = [];
        console.assert(Array.isArray(this.data.pages), "ERROR: Section data.pages missing or is not an Array. Got ", typeof this.data.pages, this.data.pages);
        this.data.current = "page-0";
        this.data.name = this.data.name || "album";
        var pageslist = [];
        var pages = [];
        for (var i in this.data.pages) {
            pageslist.push("page-" + i);
            var page = this.data.pages[i];
            this.data.pages[i].slots = this.data.pages[i].slots || [];
            pages.push(this.data.pages[i].slots.length);
            var child = this.service.createDeployTree(this.createPageChild(page));
            this.children.push(child);
        }
        this.labels.setLabel("album-name", this.data.title);
        // this.labels.setLabel("album-ranking","Ranking: 123");
        // this.labels.setLabel("album-points","Points: 21");
        this.cnt.getAlbumCollectionBySlug(this.data.name).then(function (collection) {
            // console.log("this.cnt.getAlbumCollectionBySlug() -> ", collection);
            _this.labels.setLabel("album-ranking", "Ranking: " + collection.position);
            _this.labels.setLabel("album-points", "Points: " + collection.points);
            _this.cnt.getCollectionStats(collection.id).then(function (new_coll) {
                _this.labels.setLabel("album-ranking", "Ranking: " + new_coll.position);
                _this.labels.setLabel("album-points", "Points: " + new_coll.points);
                // console.log("this.cnt.updateCollectionSteemPoints() -> ", new_coll, " !!!!!!!");
                if (collection.points != new_coll.points) {
                    // console.log("CAMBIARON??? Que pasó con la posición??  -->", new_coll.position);
                }
            });
        });
        return { pages: pages, pageslist: pageslist };
    };
    AlbumComponent.prototype.registerAndLoad = function (pages, pageslist) {
        this.section.registerSection(this.data.name, pageslist, this);
        this.loadedResolve();
        this.section.setSection(this.data.name, this.data.current);
        delete this.data.current;
    };
    AlbumComponent.prototype.loadStructure = function (structure) {
        // console.log("loadStructure()", structure);
        var data = this.prepareData(structure);
        this.registerAndLoad(data.pages, data.pageslist);
        return Promise.resolve([]);
    };
    AlbumComponent.prototype.createPageChild = function (page) {
        // console.log("createPageChild()", page);
        var _children = [];
        var _positions = [];
        var _slot = 0;
        for (var i = 0; i < page.slots.length; i++, this.capacity++) {
            // console.log("this.capacity", this.capacity);
            var position = page.slots[i].position;
            var dark = page.slots[i].dark;
            position["width"] = "15%";
            position["max-width"] = "140px";
            var _child = {
                "comp": "slot",
                "data": {
                    "position": position,
                    "index": this.capacity,
                    "container": this.data.name,
                    "dark": dark
                }
            };
            _children.push(_child);
            _positions.push(position);
        }
        var child = null;
        if (this.data.grid) {
            child = {
                "comp": "grid",
                "data": {},
                "children": _children
            };
        }
        else {
            child = {
                "comp": "float",
                "data": {
                    "positions": _positions
                },
                "children": _children
            };
        }
        page.background.float = true;
        var pageChild = {
            "comp": "background",
            "data": page.background,
            "children": [child]
        };
        return pageChild;
    };
    AlbumComponent.prototype.setSection = function (current) {
        var _this = this;
        // console.log("AlbumComponent.setSection()", current, this.data);
        this.waitReady.then(function () {
            var num = parseInt(current.substr(5));
            // console.log("parseInt(current.substr(5))", current.substr(5), num);
            var child = _this.children[num];
            var host = _this.hosts.toArray()[0];
            if (host.view.length == 1) {
                _this.renderer.removeClass(_this.current, 'animated');
                _this.getOutPage(_this.current);
            }
            if (host.view.length > 0) {
                window.setTimeout(function () {
                    if (host.view.length > 1) {
                        host.view.remove(0);
                    }
                }, 900);
            }
            var componentFactory = _this.cfResolver.resolveComponentFactory(child.component);
            var componentRef = host.view.createComponent(componentFactory);
            componentRef.instance.loadStructure(child);
            // tomamos el componente background-comp y le seteamos la clase float para que quede con position absolute
            _this.current = _this.elRef.nativeElement.querySelector(".embed-responsive background-comp:not(.float)");
            _this.getInPage(_this.current);
            _this.renderer.addClass(_this.current, 'float');
            var num = parseInt(current.split("-")[1]);
            _this.labels.setLabel("album-page-title", _this.data.pages[num].title);
            _this.labels.setLabel("album-current-page", "pag " + num);
        });
    };
    AlbumComponent.prototype.getOutPage = function (target) {
        var firstChild = this.current.children[0];
        if (this.section.sections[this.data.name].difference > 0) {
            this.renderer.addClass(firstChild, 'fadeOutLeft');
            this.renderer.addClass(firstChild, 'animated');
        }
        else if (this.section.sections[this.data.name].difference < 0) {
            this.renderer.addClass(firstChild, 'fadeOutRight');
            this.renderer.addClass(firstChild, 'animated');
        }
    };
    AlbumComponent.prototype.getInPage = function (target) {
        var firstChild = this.current.children[0];
        if (this.section.sections[this.data.name].difference > 0) {
            this.renderer.addClass(firstChild, 'fadeInRight');
            this.renderer.addClass(firstChild, 'animated');
        }
        else if (this.section.sections[this.data.name].difference < 0) {
            this.renderer.addClass(firstChild, 'fadeInLeft');
            this.renderer.addClass(firstChild, 'animated');
        }
    };
    AlbumComponent.prototype.getPadding = function () {
        return 20;
    };
    AlbumComponent.prototype.onResize = function (skip) {
        var _this = this;
        if (skip === void 0) { skip = false; }
        // console.log("AlbumComponent.onResize() ******************************");
        var target = this.elRef.nativeElement.querySelector(".embed-responsive");
        var ratio = 16 / 9;
        var maxHeight = this.elRef.nativeElement.offsetHeight - 2 * this.getPadding();
        var maxWidth = maxHeight * ratio;
        // console.log(this.elRef.nativeElement.offsetHeight, maxWidth, this.elRef.nativeElement);
        this.renderer.setStyle(target, 'max-width', maxWidth + "px");
        if (!skip) {
            if (!this.timer) {
                this.timer = 1;
                window.setTimeout(function () {
                    _this.onResize(true);
                }, 100);
                window.setTimeout(function () {
                    _this.onResize(true);
                    _this.timer = 0;
                }, 200);
            }
        }
    };
    Object.defineProperty(AlbumComponent.prototype, "getStyle", {
        get: function () {
            return {
                "padding": this.data.padding || this.getPadding() + "px"
            };
        },
        enumerable: true,
        configurable: true
    });
    AlbumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'album-comp',
            template: __webpack_require__(/*! ./album.component.html */ "./src/app/deploy/comp/album/album.component.html"),
            styles: [__webpack_require__(/*! ./album.component.scss */ "./src/app/deploy/comp/album/album.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _section_section_service__WEBPACK_IMPORTED_MODULE_5__["SectionService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _label_label_service__WEBPACK_IMPORTED_MODULE_6__["LabelService"]])
    ], AlbumComponent);
    return AlbumComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/background/background.component.html":
/*!******************************************************************!*\
  !*** ./src/app/deploy/comp/background/background.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-container opaque-at-work\" [ngStyle]=\"style\" [ngClass]=\"class\" >\n    <div class=\"container\" *ngIf=\"data.container\">\n        <ng-template comp-host></ng-template>\n    </div>\n    <ng-template *ngIf=\"!data.container\" comp-host></ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/deploy/comp/background/background.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/deploy/comp/background/background.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1; }\n  :host.float {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0; }\n  :host.expand {\n    height: 100%; }\n  .bg-container {\n  display: flex;\n  flex-grow: 1; }\n  @media (min-width: 1200px) {\n  .bg-container.padding {\n    padding: 25px; } }\n  @media (min-width: 768px) {\n  .bg-container.padding {\n    padding: 18px; }\n  .bg-container.padding-sm {\n    padding: 5px; } }\n  @media (min-width: 576px) {\n  .bg-container.padding {\n    padding: 14px; }\n  .bg-container.padding-sm {\n    padding: 3px; } }\n"

/***/ }),

/***/ "./src/app/deploy/comp/background/background.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/deploy/comp/background/background.component.ts ***!
  \****************************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BackgroundComponent = /** @class */ (function (_super) {
    __extends(BackgroundComponent, _super);
    function BackgroundComponent(vapaee, app, cnt, cfResolver) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        // expand
        _this.expand = false;
        _this.init();
        return _this;
    }
    BackgroundComponent.config = function () {
        return {};
    };
    BackgroundComponent.prototype.init = function () {
        var _this = this;
        this.waitLoaded.then(function () {
            if (_this.data.expand) {
                _this.expand = true;
            }
        });
    };
    Object.defineProperty(BackgroundComponent.prototype, "class", {
        get: function () {
            var _class = {};
            if (this.data.fadein) {
                _class["animated"] = true;
                _class["fadeIn"] = true;
            }
            if (this.data.fadeinside) {
                _class["animated"] = true;
                _class["fadeinside"] = true;
            }
            if (this.data["padding"]) {
                _class["padding"] = true;
            }
            if (this.data["padding-sm"]) {
                _class["padding-sm"] = true;
            }
            return _class;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundComponent.prototype, "style", {
        get: function () {
            var style = {};
            if (this.data) {
                if (this.data.color) {
                    style["background-color"] = this.data.color;
                }
                if (this.data.fgcolor) {
                    style["color"] = this.data.fgcolor;
                }
                if (this.data.image) {
                    if (this.data.image.url) {
                        style["background-image"] = "url(" + this.data.image.url + ")";
                    }
                    if (this.data.image.position) {
                        style["background-position"] = this.data.image.position;
                    }
                    if (this.data.image.repeat) {
                        style["background-repeat"] = this.data.image.repeat;
                    }
                    if (this.data.image.size) {
                        style["background-size"] = this.data.image.size;
                    }
                    if (this.data.image["blend-mode"]) {
                        style["background-blend-mode"] = this.data.image["blend-mode"];
                    }
                }
                if (this.data.gradient) {
                    var gradient = " -webkit-linear-gradient(";
                    // top, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,0.64) 100%)";
                    // top, left, -45deg
                    gradient += this.data.gradient.dir;
                    for (var i = 0; i < this.data.gradient.points.length; i++) {
                        var point = this.data.gradient.points[i];
                        gradient += "," + point.color + " " + point.percent + "%";
                    }
                    gradient += ")";
                    var bg_image = "";
                    if (style["background-image"]) {
                        bg_image = ", " + style["background-image"];
                    }
                    style["background-image"] = gradient + bg_image;
                    // console.log("style", style);
                }
            }
            return style;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.expand'),
        __metadata("design:type", Object)
    ], BackgroundComponent.prototype, "expand", void 0);
    BackgroundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'background-comp',
            template: __webpack_require__(/*! ./background.component.html */ "./src/app/deploy/comp/background/background.component.html"),
            styles: [__webpack_require__(/*! ./background.component.scss */ "./src/app/deploy/comp/background/background.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], BackgroundComponent);
    return BackgroundComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/base/base.component.ts":
/*!****************************************************!*\
  !*** ./src/app/deploy/comp/base/base.component.ts ***!
  \****************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comp */ "./src/app/deploy/comp/comp.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseComponent = /** @class */ (function () {
    function BaseComponent(vapaee, app, cnt, componentFactoryResolver) {
        var _this = this;
        this.vapaee = vapaee;
        this.app = app;
        this.cnt = cnt;
        this.componentFactoryResolver = componentFactoryResolver;
        this.children = [];
        this.waitInit = null;
        this.waitLoaded = null;
        this.waitReady = null;
        this.waitInit = new Promise(function (resolve) {
            _this.initResolve = resolve;
        });
        this.waitLoaded = new Promise(function (resolve) {
            _this.loadedResolve = resolve;
        });
        this.waitReady = this.waitLoaded.then(function () { return _this.waitInit; });
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.initResolve();
    };
    BaseComponent.prototype.setComponentService = function (_service) {
        this.service = _service;
    };
    BaseComponent.prototype.loadStructure = function (structure) {
        var _this = this;
        this.data = structure.data;
        this.children = structure.children;
        this.loadedResolve();
        // console.log("loadStructure()", structure.comp, this.children.length);
        return this.waitReady.then(function () {
            console.assert(_this.hosts.length >= _this.children.length || _this.data.reusehost, "ERROR: wrong structure children length. Expected ", _this.hosts.length, "got ", _this.children.length, _this.children);
            var promises = [];
            // console.log("loadStructure() children", structure.comp, this.children.length);
            for (var i in _this.children) {
                var child = _this.children[i];
                var hostarray = _this.hosts.toArray();
                // ---------------------------
                // para usar la capacidad de poner más de un hijo en el mismo host incluirlo en la data programáticamente así:
                // "data": Object.assign({reusehost:true}, obj.data),
                var host = hostarray[0];
                if (!_this.data.reusehost) {
                    host = hostarray[i];
                }
                // ---------------------------
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(child.component);
                var componentRef = host.view.createComponent(componentFactory);
                var instance = componentRef.instance;
                instance.setComponentService(_this.service);
                promises.push(instance.loadStructure(child));
            }
            return Promise.all(promises);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_comp__WEBPACK_IMPORTED_MODULE_1__["ComponentHost"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], BaseComponent.prototype, "hosts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseComponent.prototype, "data", void 0);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/deploy/comp/comp.ts":
/*!*************************************!*\
  !*** ./src/app/deploy/comp/comp.ts ***!
  \*************************************/
/*! exports provided: ComponentHost, DeployNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentHost", function() { return ComponentHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployNode", function() { return DeployNode; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentHost = /** @class */ (function () {
    function ComponentHost(view) {
        this.view = view;
    }
    ComponentHost = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[comp-host]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ComponentHost);
    return ComponentHost;
}());

// class DeployNode ---------------------------------------------
// contenedor de datos
var DeployNode = /** @class */ (function () {
    function DeployNode(comp, component, data, children) {
        this.comp = comp;
        this.component = component;
        this.data = data;
        this.children = children;
    }
    return DeployNode;
}());



/***/ }),

/***/ "./src/app/deploy/comp/component.service.ts":
/*!**************************************************!*\
  !*** ./src/app/deploy/comp/component.service.ts ***!
  \**************************************************/
/*! exports provided: ComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentService", function() { return ComponentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _place_holder_place_holder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-holder/place-holder.component */ "./src/app/deploy/comp/place-holder/place-holder.component.ts");
/* harmony import */ var _comp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp */ "./src/app/deploy/comp/comp.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root/root.component */ "./src/app/deploy/comp/root/root.component.ts");
/* harmony import */ var _row_three_row_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./row-three/row-three.component */ "./src/app/deploy/comp/row-three/row-three.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./background/background.component */ "./src/app/deploy/comp/background/background.component.ts");
/* harmony import */ var _scrolleable_scrolleable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scrolleable/scrolleable.component */ "./src/app/deploy/comp/scrolleable/scrolleable.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video/video.component */ "./src/app/deploy/comp/video/video.component.ts");
/* harmony import */ var _markdown_markdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./markdown/markdown.component */ "./src/app/deploy/comp/markdown/markdown.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/deploy/comp/menu/menu.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./section/section.component */ "./src/app/deploy/comp/section/section.component.ts");
/* harmony import */ var _float_float_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./float/float.component */ "./src/app/deploy/comp/float/float.component.ts");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./album/album.component */ "./src/app/deploy/comp/album/album.component.ts");
/* harmony import */ var _slot_slot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slot/slot.component */ "./src/app/deploy/comp/slot/slot.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/deploy/comp/inventory/inventory.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/deploy/comp/grid/grid.component.ts");
/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./label/label.component */ "./src/app/deploy/comp/label/label.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var ComponentService = /** @class */ (function () {
    function ComponentService(cfResolver, http) {
        this.cfResolver = cfResolver;
        this.http = http;
        this.components = {
            "root": _root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"],
            "place-holder": _place_holder_place_holder_component__WEBPACK_IMPORTED_MODULE_1__["PlaceHolderComponent"],
            "row-three": _row_three_row_three_component__WEBPACK_IMPORTED_MODULE_4__["RowThreeComponent"],
            "background": _background_background_component__WEBPACK_IMPORTED_MODULE_5__["BackgroundComponent"],
            "scrolleable": _scrolleable_scrolleable_component__WEBPACK_IMPORTED_MODULE_6__["ScrolleableComponent"],
            "video": _video_video_component__WEBPACK_IMPORTED_MODULE_7__["VideoComponent"],
            "markdown": _markdown_markdown_component__WEBPACK_IMPORTED_MODULE_8__["MarkDownComponent"],
            "menu": _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
            "section": _section_section_component__WEBPACK_IMPORTED_MODULE_10__["SectionComponent"],
            "float": _float_float_component__WEBPACK_IMPORTED_MODULE_11__["FloatComponent"],
            "album": _album_album_component__WEBPACK_IMPORTED_MODULE_12__["AlbumComponent"],
            "inventory": _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_15__["InventoryComponent"],
            "slot": _slot_slot_component__WEBPACK_IMPORTED_MODULE_13__["SlotComponent"],
            "grid": _grid_grid_component__WEBPACK_IMPORTED_MODULE_16__["GridComponent"],
            "label": _label_label_component__WEBPACK_IMPORTED_MODULE_17__["LabelComponent"]
        };
    }
    ComponentService.prototype.createAndDeployTree = function (object, view) {
        // console.log("createAndDeployTree()", [object]);
        console.assert(typeof object.deploy != "undefined", "ERROR: missing object.deploy", [object]);
        var structure = this.createDeployTree(object.deploy);
        var compFactory = this.cfResolver.resolveComponentFactory(structure.component);
        var compRef = view.createComponent(compFactory);
        var instance = compRef.instance;
        instance.setComponentService(this);
        return instance.loadStructure(structure);
    };
    ComponentService.prototype.createDeployTree = function (struct) {
        // console.log("createDeployTree()", struct.comp, [struct]);
        console.assert(typeof struct.comp != "undefined", "ERROR: missing structure.comp", [struct]);
        console.assert(typeof this.components[struct.comp] != "undefined", "ERROR: struct.comp? component not found", [struct], "did you forgot to include in this.components?", this.components);
        var type = this.components[struct.comp];
        var depth = struct.children || [];
        var data = struct.data || {};
        var children = [];
        for (var i in depth) {
            var child = this.createDeployTree(depth[i]);
            children.push(child);
        }
        return new _comp__WEBPACK_IMPORTED_MODULE_2__["DeployNode"](struct.comp, type, data, children);
    };
    ComponentService.getConfig = function () {
        return {};
    };
    ComponentService.prototype.preload = function (list) {
        var promises = [];
        for (var i in list) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"]();
            headers = headers.set('content-type', 'blob');
            promises.push(this.http.get(list[i], { headers: headers, responseType: 'blob' }).toPromise().then(function (response) {
                console.log("response", response);
            }, function (err) {
                console.error("ERROR: ", err);
            }));
        }
        return Promise.all(promises);
    };
    ComponentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]])
    ], ComponentService);
    return ComponentService;
}());



/***/ }),

/***/ "./src/app/deploy/comp/float/float.component.html":
/*!********************************************************!*\
  !*** ./src/app/deploy/comp/float/float.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let position of data.positions\" class=\"float-container\" [ngStyle]=\"position\">\n    <ng-template comp-host></ng-template>\n</div>"

/***/ }),

/***/ "./src/app/deploy/comp/float/float.component.scss":
/*!********************************************************!*\
  !*** ./src/app/deploy/comp/float/float.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  flex-grow: 1; }\n\n.float-container {\n  position: absolute;\n  transition: all ease-in-out 2s; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/float/float.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/float/float.component.ts ***!
  \******************************************************/
/*! exports provided: FloatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatComponent", function() { return FloatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FloatComponent = /** @class */ (function (_super) {
    __extends(FloatComponent, _super);
    function FloatComponent(vapaee, app, cnt, cfResolver) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        _this.init();
        return _this;
    }
    FloatComponent.prototype.init = function () {
        var _this = this;
        this.waitLoaded.then(function () {
            if (_this.data.style && !_this.data.positions) {
                _this.data.positions = [_this.data.style];
            }
            // console.log("FloatComponent data", this.data);
        });
    };
    FloatComponent.config = function () {
        return {};
    };
    FloatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'float-comp',
            template: __webpack_require__(/*! ./float.component.html */ "./src/app/deploy/comp/float/float.component.html"),
            styles: [__webpack_require__(/*! ./float.component.scss */ "./src/app/deploy/comp/float/float.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], FloatComponent);
    return FloatComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/grid/grid.component.html":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/grid/grid.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let row of rows\" [ngStyle]=\"{'flex-grow': row.grow}\">\n    <div class=\"col\" [ngStyle]=\"{'flex-grow': col.grow, 'height': col.height}\"\n        [ngClass]=\"{'text-right': col.align == 'right', 'text-center': col.align == 'center', 'padding': col.padding}\"\n        *ngFor=\"let col of row.cols\">\n        <ng-template *ngIf=\"!col.rows\" comp-host></ng-template>\n        <pre [hidden]=\"true\">{{col|json}}</pre>\n        <div class=\"row\" *ngFor=\"let col_row of col.rows || []\">\n            <div class=\"col\" [ngStyle]=\"{'flex-grow': col_row_col.grow}\"\n                [ngClass]=\"{'text-right': col_row_col.align == 'right', 'text-center': col_row_col.align == 'center', 'padding': col_row_col.padding}\"\n                *ngFor=\"let col_row_col of col_row.cols\">\n                <ng-template comp-host></ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--pre class=\"text-left\">\n    {{rows|json}}\n</pre-->"

/***/ }),

/***/ "./src/app/deploy/comp/grid/grid.component.scss":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/grid/grid.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column; }\n  :host .col {\n    display: flex;\n    padding-left: 0;\n    padding-right: 0;\n    flex-direction: column;\n    max-width: 100%;\n    max-height: 100%; }\n  :host .col.padding {\n      padding: 30px; }\n  :host .row {\n    max-width: 100%;\n    max-height: 100%;\n    flex-grow: 1;\n    margin-left: 0;\n    margin-right: 0; }\n  @media (min-width: 1200px) {\n  :host .col.padding {\n    padding: 25px; } }\n  @media (min-width: 768px) {\n  :host .col.padding {\n    padding: 18px; } }\n  @media (min-width: 576px) {\n  :host .col.padding {\n    padding: 14px; } }\n"

/***/ }),

/***/ "./src/app/deploy/comp/grid/grid.component.ts":
/*!****************************************************!*\
  !*** ./src/app/deploy/comp/grid/grid.component.ts ***!
  \****************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GridComponent = /** @class */ (function (_super) {
    __extends(GridComponent, _super);
    function GridComponent(vapaee, app, cnt, cfResolver) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        _this.rows = [];
        _this.waitLoaded.then(function () {
            // console.log(this.data.rows);
            _this.data.rows = _this.prepareRows(_this.data.rows);
            _this.rows = _this.data.rows;
        });
        return _this;
    }
    GridComponent.prototype.prepareRows = function (current_rows) {
        console.log("Grid.prepareRows()", current_rows);
        for (var i = 0; i < current_rows.length; i++) {
            // console.log(i, current_rows[i]);
            if (typeof current_rows[i] == "number") {
                var row = { cols: [] };
                for (var j = 0; j < current_rows[i]; j++) {
                    row.cols.push({});
                }
                current_rows[i] = row;
            }
            else if (typeof current_rows[i] == "object") {
                var row = { cols: [] };
                if (Array.isArray(current_rows[i])) {
                    row.cols = current_rows[i];
                }
                else if (Array.isArray(current_rows[i].cols)) {
                    row = current_rows[i];
                }
                console.log("row:", row);
                for (var j = 0; j < row.cols.length; j++) {
                    var col = row.cols[j];
                    if (col.height) {
                        row.grow = 0;
                    }
                    if (col.rows) {
                        col.rows = this.prepareRows(col.rows);
                    }
                }
                current_rows[i] = row;
            }
        }
        return current_rows;
    };
    GridComponent.config = function () {
        return {};
    };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-comp',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/deploy/comp/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/deploy/comp/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], GridComponent);
    return GridComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/inventory/inventory.component.html":
/*!****************************************************************!*\
  !*** ./src/app/deploy/comp/inventory/inventory.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inventory-container\" (window:resize)=\"onResize($event)\" [ngClass]=\"{'vertical':data.vertical, 'horizontal':!data.vertical}\">\n    <div class=\"inventory-prev flex-center flex-column\" [hidden]=\"max==0\">\n        <a class=\"btn-floating btn-sm btn-outline-default btn-rounded waves-effect purple-gradient\" (click)=\"prev()\">\n            <i [hidden]=\"data.vertical\" class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n            <i [hidden]=\"!data.vertical\" class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n    <div class=\"inventory-slots\">\n        <div class=\"inventory-scroll\">\n            <div class=\"inventory-scroll-content\" [ngStyle]=\"{'text-align': max==0 ? 'center' : 'left' }\">\n                <div class=\"inventory-scroll-item\" [ngStyle]=\"slot.style\" *ngFor=\"let slot of slots\">\n                    <slot-comp [data]=\"slot\"></slot-comp>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"inventory-next flex-center flex-column\"  [hidden]=\"max==0\">\n        <a class=\"btn-floating btn-sm btn-outline-default btn-rounded waves-effect purple-gradient\" (click)=\"next()\">\n            <i [hidden]=\"data.vertical\" class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n            <i [hidden]=\"!data.vertical\" class=\"fa fa-angle-up\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/deploy/comp/inventory/inventory.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/deploy/comp/inventory/inventory.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1; }\n  :host .inventory-container {\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    flex-grow: 1; }\n  :host .inventory-container.vertical {\n      flex-direction: column;\n      height: 100%; }\n  :host .inventory-container.horizontal {\n      flex-direction: row;\n      width: 100%;\n      max-height: 150px;\n      height: 17vw; }\n  :host .inventory-container.horizontal .inventory-scroll-content {\n        transition-property: margin-left; }\n  :host .inventory-container .inventory-prev, :host .inventory-container .inventory-next {\n      flex-grow: 0;\n      padding: 10px; }\n  :host .inventory-container .inventory-slots {\n      flex-grow: 1;\n      position: relative; }\n  :host .inventory-container .inventory-slots .inventory-scroll {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        bottom: 0px;\n        right: 0px;\n        overflow: hidden;\n        white-space: nowrap; }\n  :host .inventory-container .inventory-slots .inventory-scroll .inventory-scroll-content {\n          transition-duration: 0.5s;\n          transition-timing-function: ease-out; }\n  :host .inventory-container .inventory-slots .inventory-scroll .inventory-scroll-item {\n          padding: 10px;\n          display: inline-block; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/inventory/inventory.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/deploy/comp/inventory/inventory.component.ts ***!
  \**************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _section_section_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../section/section.service */ "./src/app/deploy/comp/section/section.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InventoryComponent = /** @class */ (function (_super) {
    __extends(InventoryComponent, _super);
    function InventoryComponent(vapaee, app, cnt, cfResolver, section, renderer, elRef) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        _this.section = section;
        _this.renderer = renderer;
        _this.elRef = elRef;
        _this.init();
        return _this;
    }
    InventoryComponent.prototype.init = function () {
        var _this = this;
        this.slots_cache = [];
        this.current = 0;
        this.waitReady.then(function () {
            // console.log("inventoryComponent data", this.data);
            window.setTimeout(function () {
                _this.onResize();
            }, 200);
        });
    };
    InventoryComponent.config = function () {
        return {};
    };
    InventoryComponent.prototype.onResize = function (skip) {
        if (skip === void 0) { skip = false; }
        this.updateVars();
        this.updateOffset();
    };
    InventoryComponent.prototype.updateVars = function () {
        var container = this.elRef.nativeElement.querySelector(".inventory-container");
        var viewport = this.elRef.nativeElement.querySelector(".inventory-scroll");
        var target = this.elRef.nativeElement.querySelector(".inventory-scroll-content");
        var firstchild = target.children[0];
        var capacity = target.children.length;
        if (this.data.vertical) {
        }
        else {
            var total = parseInt(window.getComputedStyle(container, null).getPropertyValue("width"));
            this.total = parseInt(window.getComputedStyle(viewport, null).getPropertyValue("width"));
            this.step = parseInt(window.getComputedStyle(firstchild, null).getPropertyValue("width"));
            this.max = Math.max(0, capacity - Math.floor(this.total / this.step));
            if (Math.max(0, capacity - Math.floor(total / this.step)) == 0) {
                this.max = 0;
            }
        }
        // console.log("inventoriComp.updateVars()", this.total, this.step, this.current, this.max);
    };
    InventoryComponent.prototype.updateOffset = function () {
        var target = this.elRef.nativeElement.querySelector(".inventory-scroll-content");
        var current = this.current;
        if (current < 0)
            current = 0;
        if (current > this.max)
            current = this.max;
        if (this.data.vertical) {
        }
        else {
            var offset = this.step * current;
            var value = "-" + offset + "px";
            this.renderer.setStyle(target, 'margin-left', value);
            // console.log("inventoriComp.updateOffset()", value);            
        }
    };
    InventoryComponent.prototype.next = function () {
        this.updateVars();
        this.current++;
        if (this.current > this.max)
            this.current = this.max;
        this.updateOffset();
    };
    InventoryComponent.prototype.prev = function () {
        this.updateVars();
        this.current--;
        if (this.current < 0)
            this.current = 0;
        this.updateOffset();
    };
    Object.defineProperty(InventoryComponent.prototype, "slots", {
        get: function () {
            var capacity = 8;
            if (this.cnt.userdata.data) {
                capacity = this.cnt.userdata.data.slug.container["cards-and-tokens"].capacity;
            }
            if (capacity != this.slots_cache.length) {
                this.slots_cache = [];
                for (var i = 0; i < capacity; i++) {
                    this.slots_cache.push({
                        "container": "cards-and-tokens",
                        "index": i,
                        "style": {
                            "width": "13vw",
                            "max-width": "115px"
                        }
                    });
                }
            }
            return this.slots_cache;
        },
        enumerable: true,
        configurable: true
    });
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-comp',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/deploy/comp/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.scss */ "./src/app/deploy/comp/inventory/inventory.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _section_section_service__WEBPACK_IMPORTED_MODULE_5__["SectionService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InventoryComponent);
    return InventoryComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/label/label.component.html":
/*!********************************************************!*\
  !*** ./src/app/deploy/comp/label/label.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span [hidden]=\"data.hidden\" [ngClass]=\"class\" [ngStyle]=\"style\">\n    {{text}}\n</span>"

/***/ }),

/***/ "./src/app/deploy/comp/label/label.component.scss":
/*!********************************************************!*\
  !*** ./src/app/deploy/comp/label/label.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  white-space: nowrap;\n  flex-grow: 1;\n  justify-content: center;\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/label/label.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/label/label.component.ts ***!
  \******************************************************/
/*! exports provided: LabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponent", function() { return LabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _label_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label.service */ "./src/app/deploy/comp/label/label.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LabelComponent = /** @class */ (function (_super) {
    __extends(LabelComponent, _super);
    function LabelComponent(vapaee, app, cnt, cfResolver, labels) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        _this.labels = labels;
        return _this;
    }
    LabelComponent.config = function () {
        return {};
    };
    Object.defineProperty(LabelComponent.prototype, "text", {
        get: function () {
            if (this.data.text) {
                return this.data.text;
            }
            if (this.data.textid) {
                return this.labels.getLabel(this.data.textid);
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "class", {
        get: function () {
            var _class = {};
            if (typeof this.data.class == "string") {
                this.data.class = this.data.class.split(" ");
                var newclass = {};
                for (var i in this.data.class) {
                    newclass[this.data.class[i]] = true;
                }
                this.data.class = newclass;
            }
            if (typeof this.data.class == "object") {
                _class = this.data.class;
            }
            // console.log(_class);
            return _class;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "style", {
        get: function () {
            var style = {};
            // style["height"] = "50px";
            // style["background-color"] = "red";
            return style;
        },
        enumerable: true,
        configurable: true
    });
    LabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'label-comp',
            template: __webpack_require__(/*! ./label.component.html */ "./src/app/deploy/comp/label/label.component.html"),
            styles: [__webpack_require__(/*! ./label.component.scss */ "./src/app/deploy/comp/label/label.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _label_service__WEBPACK_IMPORTED_MODULE_5__["LabelService"]])
    ], LabelComponent);
    return LabelComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/label/label.service.ts":
/*!****************************************************!*\
  !*** ./src/app/deploy/comp/label/label.service.ts ***!
  \****************************************************/
/*! exports provided: LabelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelService", function() { return LabelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelService = /** @class */ (function () {
    // public difference: number; // cada vez que cambia la sección, difference indica la diferencia entre el índice anterior y el actual
    function LabelService() {
        this.labels = {};
    }
    LabelService.prototype.setLabel = function (name, current) {
        if (current == this.labels[name])
            return;
        this.labels[name] = current;
    };
    LabelService.prototype.getLabel = function (name) {
        return this.labels[name] || "";
    };
    LabelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LabelService);
    return LabelService;
}());



/***/ }),

/***/ "./src/app/deploy/comp/markdown/markdown.component.html":
/*!**************************************************************!*\
  !*** ./src/app/deploy/comp/markdown/markdown.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <markdown [data]=\"data.markdown\"></markdown>\n</div>\n"

/***/ }),

/***/ "./src/app/deploy/comp/markdown/markdown.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/deploy/comp/markdown/markdown.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/markdown/markdown.component.ts":
/*!************************************************************!*\
  !*** ./src/app/deploy/comp/markdown/markdown.component.ts ***!
  \************************************************************/
/*! exports provided: MarkDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkDownComponent", function() { return MarkDownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarkDownComponent = /** @class */ (function (_super) {
    __extends(MarkDownComponent, _super);
    // https://www.npmjs.com/package/ngx-markdown
    function MarkDownComponent(vapaee, app, cnt, cfResolver) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        _this.init();
        return _this;
    }
    MarkDownComponent.prototype.init = function () {
        var _this = this;
        this.waitReady.then(function () {
            console.log("MarkDownComponent data", _this.data);
        });
    };
    MarkDownComponent.config = function () {
        return {};
    };
    MarkDownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'markdown-comp',
            template: __webpack_require__(/*! ./markdown.component.html */ "./src/app/deploy/comp/markdown/markdown.component.html"),
            styles: [__webpack_require__(/*! ./markdown.component.scss */ "./src/app/deploy/comp/markdown/markdown.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], MarkDownComponent);
    return MarkDownComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/menu/menu.component.html":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/menu/menu.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"btn-container\">\n    <a *ngFor=\"let entry of data.menu\"\n        [ngClass]=\"getEntryClass(entry)\"\n        [ngStyle]=\"getEntryStyle(entry)\"\n        [hidden]=\"entry.hidden\"\n        (click)=\"onMenuEntry(entry)\"\n        >\n        <span *ngIf=\"entry.text\">{{entry.text}}</span>\n        <span *ngIf=\"entry.icon\"><i class=\"{{entry.icon}}\"></i></span>\n    </a>\n</span>"

/***/ }),

/***/ "./src/app/deploy/comp/menu/menu.component.scss":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/menu/menu.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  align-items: center; }\n  :host .btn-container {\n    display: flex;\n    flex-grow: 1;\n    align-items: center; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/deploy/comp/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _section_section_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../section/section.service */ "./src/app/deploy/comp/section/section.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { ETIME } from 'constants';
var MenuComponent = /** @class */ (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent(vapaee, app, cnt, cfResolver, section) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        _this.section = section;
        _this.init();
        return _this;
    }
    MenuComponent.prototype.init = function () {
        this.waitReady.then(function () {
            // console.log("MenuComponent data", this.data);
        });
    };
    MenuComponent.config = function () {
        return {};
    };
    MenuComponent.prototype.onMenuEntry = function (entry) {
        if (entry.section && entry.value) {
            this.section.setSection(entry.section, entry.value);
        }
        if (entry.section && entry.move) {
            if (entry.move > 0) {
                this.section.nextSection(entry.section);
            }
            else {
                this.section.prevSection(entry.section);
            }
        }
        if (entry.link) {
            window.open(entry.link, entry.target || "_blank");
        }
    };
    MenuComponent.prototype.getEntryClass = function (entry) {
        // console.log("getEntryClass() <-", entry.class);
        if (entry.class) {
            if (typeof entry.class == "string") {
                entry.class = this.createClassObject(entry.class.split(" "));
            }
        }
        else {
            if (this.data.class) {
                entry.class = this.data.class;
                return this.getEntryClass(entry);
            }
            else {
                entry.class = {};
            }
            entry.class = this.createClassObject("btn btn-info btn-sm my-0 waves-effect waves-light".split(" "));
        }
        // console.log("getEntryClass() ->", entry.class);
        return entry.class;
    };
    MenuComponent.prototype.createClassObject = function (list) {
        var obj = {};
        for (var i = 0; i < list.length; i++) {
            obj[list[i]] = true;
        }
        return obj;
    };
    MenuComponent.prototype.getEntryStyle = function (entry) {
        if (entry.style) {
            return entry.style;
        }
        else {
            if (this.data.style) {
                return this.data.style;
            }
            else {
                return {};
            }
        }
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu-comp',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/deploy/comp/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/deploy/comp/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _section_section_service__WEBPACK_IMPORTED_MODULE_5__["SectionService"]])
    ], MenuComponent);
    return MenuComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/place-holder/place-holder.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/deploy/comp/place-holder/place-holder.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"expand text-center text-center animated fadeIn\">\n    <div *ngIf=\"!data.largetext && !data.mediumtext\" class=\"flex-center text expand\" [ngStyle]=\"getStyle\">{{data.text}}</div>\n    <div *ngIf=\"data.largetext\">\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n    </div>\n    <div *ngIf=\"data.mediumtext\">\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>\n    </div>    \n</div>\n    "

/***/ }),

/***/ "./src/app/deploy/comp/place-holder/place-holder.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/deploy/comp/place-holder/place-holder.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center; }\n\n.text {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/place-holder/place-holder.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/deploy/comp/place-holder/place-holder.component.ts ***!
  \********************************************************************/
/*! exports provided: PlaceHolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceHolderComponent", function() { return PlaceHolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaceHolderComponent = /** @class */ (function (_super) {
    __extends(PlaceHolderComponent, _super);
    function PlaceHolderComponent(vapaee, app, cnt, cfResolver) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        return _this;
    }
    PlaceHolderComponent.config = function () {
        return {};
    };
    Object.defineProperty(PlaceHolderComponent.prototype, "getStyle", {
        get: function () {
            var style = {};
            // style["height"] = "50px";
            // style["background-color"] = "red";
            return style;
        },
        enumerable: true,
        configurable: true
    });
    PlaceHolderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'place-holder-comp',
            template: __webpack_require__(/*! ./place-holder.component.html */ "./src/app/deploy/comp/place-holder/place-holder.component.html"),
            styles: [__webpack_require__(/*! ./place-holder.component.scss */ "./src/app/deploy/comp/place-holder/place-holder.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], PlaceHolderComponent);
    return PlaceHolderComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/root/root.component.html":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/root/root.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template comp-host></ng-template>"

/***/ }),

/***/ "./src/app/deploy/comp/root/root.component.scss":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/root/root.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  background-color: darkgray; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/root/root.component.ts":
/*!****************************************************!*\
  !*** ./src/app/deploy/comp/root/root.component.ts ***!
  \****************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RootComponent = /** @class */ (function (_super) {
    __extends(RootComponent, _super);
    function RootComponent(vapaee, app, cnt, cfResolver) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        return _this;
    }
    RootComponent.config = function () {
        return {};
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'root-comp',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/deploy/comp/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.scss */ "./src/app/deploy/comp/root/root.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], RootComponent);
    return RootComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/row-three/row-three.component.html":
/*!****************************************************************!*\
  !*** ./src/app/deploy/comp/row-three/row-three.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header animated fadeIn\" [ngStyle]=\"getHeaderStyle\">\n    <ng-template comp-host></ng-template>\n</div>\n<div class=\"main animated fadeIn\" [ngStyle]=\"getMainStyle\">\n    <ng-template comp-host></ng-template>\n</div>\n<div class=\"footer animated fadeIn\" [ngStyle]=\"getFooterStyle\">\n    <ng-template comp-host></ng-template>\n</div>"

/***/ }),

/***/ "./src/app/deploy/comp/row-three/row-three.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/deploy/comp/row-three/row-three.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column; }\n\n.header {\n  display: flex; }\n\n.main {\n  flex-grow: 1;\n  display: flex;\n  overflow: hidden; }\n\n.footer {\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/row-three/row-three.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/deploy/comp/row-three/row-three.component.ts ***!
  \**************************************************************/
/*! exports provided: RowThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowThreeComponent", function() { return RowThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RowThreeComponent = /** @class */ (function (_super) {
    __extends(RowThreeComponent, _super);
    function RowThreeComponent(vapaee, app, cnt, cfResolver) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        return _this;
    }
    RowThreeComponent.config = function () {
        return {};
    };
    Object.defineProperty(RowThreeComponent.prototype, "getHeaderStyle", {
        get: function () {
            if (this.data.header) {
                return this.data.header;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowThreeComponent.prototype, "getMainStyle", {
        get: function () {
            if (this.data.main) {
                return this.data.main;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowThreeComponent.prototype, "getFooterStyle", {
        get: function () {
            if (this.data.footer) {
                return this.data.footer;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    RowThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'row-three-comp',
            template: __webpack_require__(/*! ./row-three.component.html */ "./src/app/deploy/comp/row-three/row-three.component.html"),
            styles: [__webpack_require__(/*! ./row-three.component.scss */ "./src/app/deploy/comp/row-three/row-three.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], RowThreeComponent);
    return RowThreeComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/scrolleable/scrolleable.component.html":
/*!********************************************************************!*\
  !*** ./src/app/deploy/comp/scrolleable/scrolleable.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template comp-host></ng-template>"

/***/ }),

/***/ "./src/app/deploy/comp/scrolleable/scrolleable.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/deploy/comp/scrolleable/scrolleable.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  overflow: auto;\n  max-height: 100%; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/scrolleable/scrolleable.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/deploy/comp/scrolleable/scrolleable.component.ts ***!
  \******************************************************************/
/*! exports provided: ScrolleableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrolleableComponent", function() { return ScrolleableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScrolleableComponent = /** @class */ (function (_super) {
    __extends(ScrolleableComponent, _super);
    function ScrolleableComponent(vapaee, app, cnt, cfResolver, renderer, elRef) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        _this.renderer = renderer;
        _this.elRef = elRef;
        // https://stackoverflow.com/questions/44122081/how-to-dynamically-change-css-in-host-in-angular-2
        _this.height = '1px';
        return _this;
    }
    ScrolleableComponent.config = function () {
        return {};
    };
    ScrolleableComponent.prototype.ngOnInit = function () {
        this.onResize(null);
        this.initResolve();
    };
    ScrolleableComponent.prototype.onResize = function (e) {
        var _this = this;
        this.height = "1px";
        window.setTimeout(function () {
            var parentStyle = window.getComputedStyle(_this.elRef.nativeElement.parentNode, null);
            var padding = parseInt(parentStyle.getPropertyValue('padding-top')) + parseInt(parentStyle.getPropertyValue('padding-bottom'));
            _this.height = (_this.elRef.nativeElement.parentNode.offsetHeight - padding) + "px";
            console.log("-> ", _this.elRef.nativeElement.parentNode.offsetHeight, parentStyle.getPropertyValue('padding-top'), parentStyle.getPropertyValue('padding-bottom'), " = ", _this.height);
        }, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.height'),
        __metadata("design:type", Object)
    ], ScrolleableComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrolleableComponent.prototype, "onResize", null);
    ScrolleableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrolleable-comp',
            template: __webpack_require__(/*! ./scrolleable.component.html */ "./src/app/deploy/comp/scrolleable/scrolleable.component.html"),
            styles: [__webpack_require__(/*! ./scrolleable.component.scss */ "./src/app/deploy/comp/scrolleable/scrolleable.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrolleableComponent);
    return ScrolleableComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/section/section.component.html":
/*!************************************************************!*\
  !*** ./src/app/deploy/comp/section/section.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template comp-host></ng-template>"

/***/ }),

/***/ "./src/app/deploy/comp/section/section.component.scss":
/*!************************************************************!*\
  !*** ./src/app/deploy/comp/section/section.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/section/section.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/deploy/comp/section/section.component.ts ***!
  \**********************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _section_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section.service */ "./src/app/deploy/comp/section/section.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SectionComponent = /** @class */ (function (_super) {
    __extends(SectionComponent, _super);
    // @ViewChildren(ComponentHost) public hosts: QueryList<ComponentHost>;
    function SectionComponent(vapaee, app, cnt, cfResolver, section) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        _this.section = section;
        _this.init();
        return _this;
    }
    SectionComponent.prototype.init = function () {
    };
    SectionComponent.config = function () {
        return {};
    };
    SectionComponent.prototype.loadStructure = function (structure) {
        // console.log("loadStructure()", structure);
        this.data = structure.data;
        this.children = structure.children;
        console.assert(Array.isArray(this.data.sections), "ERROR: Section data.sections missing or is not an Array. Got ", typeof this.data.sections, this.data.sections);
        this.data.current = this.data.current || this.data.sections[0];
        this.section.registerSection(this.data.name, this.data.sections, this);
        this.loadedResolve();
        this.section.setSection(this.data.name, this.data.current);
        return Promise.resolve([]);
    };
    SectionComponent.prototype.setSection = function (current) {
        var _this = this;
        this.waitReady.then(function () {
            console.assert(Array.isArray(_this.data.sections), "ERROR: Section data.sections missing or is not an Array. Got ", typeof _this.data.sections, _this.data.sections);
            var i = _this.data.sections.indexOf(current);
            var child = _this.children[i];
            var host = _this.hosts.toArray()[0];
            while (host.view.length > 0) {
                host.view.remove(host.view.length - 1);
            }
            var componentFactory = _this.cfResolver.resolveComponentFactory(child.component);
            var componentRef = host.view.createComponent(componentFactory);
            componentRef.instance.loadStructure(child);
        });
    };
    SectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'section-comp',
            template: __webpack_require__(/*! ./section.component.html */ "./src/app/deploy/comp/section/section.component.html"),
            styles: [__webpack_require__(/*! ./section.component.scss */ "./src/app/deploy/comp/section/section.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _section_service__WEBPACK_IMPORTED_MODULE_5__["SectionService"]])
    ], SectionComponent);
    return SectionComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/section/section.service.ts":
/*!********************************************************!*\
  !*** ./src/app/deploy/comp/section/section.service.ts ***!
  \********************************************************/
/*! exports provided: SectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return SectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionService = /** @class */ (function () {
    // public difference: number; // cada vez que cambia la sección, difference indica la diferencia entre el índice anterior y el actual
    function SectionService() {
        this.sections = {};
    }
    SectionService.prototype.registerSection = function (name, list, section) {
        this.sections[name] = {
            ctrl: section,
            current: "",
            sections: list,
            difference: 0
        };
    };
    SectionService.prototype.setSection = function (name, current) {
        if (current == this.sections[name].current)
            return;
        var index = 0;
        if (this.sections[name].current) {
            index = this.sections[name].sections.indexOf(this.sections[name].current);
        }
        var next = this.sections[name].sections.indexOf(current);
        this.sections[name].difference = next - index;
        this.sections[name].current = current;
        this.sections[name].ctrl.setSection(current);
    };
    SectionService.prototype.nextSection = function (name) {
        var index = this.sections[name].sections.indexOf(this.sections[name].current);
        if (index < this.sections[name].sections.length - 1) {
            index++;
            this.sections[name].difference = 1;
        }
        else {
            return;
        }
        var current = this.sections[name].sections[index];
        this.sections[name].current = current;
        this.sections[name].ctrl.setSection(current);
    };
    SectionService.prototype.prevSection = function (name) {
        // console.log("prevSection");
        var index = this.sections[name].sections.indexOf(this.sections[name].current);
        if (index > 0) {
            index--;
            this.sections[name].difference = -1;
        }
        else {
            return;
        }
        var current = this.sections[name].sections[index];
        this.sections[name].current = current;
        this.sections[name].ctrl.setSection(current);
    };
    SectionService.prototype.getSection = function (name) {
        return this.sections[name];
    };
    SectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SectionService);
    return SectionService;
}());



/***/ }),

/***/ "./src/app/deploy/comp/slot/slot.component.html":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/slot/slot.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div droppable (click)=\"onClick($event)\" class=\"slot-container\" [ngClass]=\"{'accepting-drop': acceptingDrop, 'dark': dark }\">\n    <div #placeholder class=\"placeholder embed-responsive embed-responsive-card\" [ngClass]=\"{'empty': !copy }\">\n        <div *ngIf=\"!copy\" class=\"slot-number\">{{data.index+1}}</div>\n        <img #img draggable *ngIf=\"copy\" [id]=\"'item-' + copy.id\" [src]=\"copy.thumbnail\"\n            class=\"hide-at-work cursor-pointer expand-float expand\" >\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/deploy/comp/slot/slot.component.scss":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/slot/slot.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  max-width: 152px;\n  display: inline-block; }\n  :host .slot-container {\n    padding: 4%;\n    background-color: rgba(153, 153, 153, 0.4);\n    border-radius: 4%; }\n  :host .slot-container.accepting-drop {\n      background-color: rgba(238, 238, 238, 0.6); }\n  :host .slot-container.dark {\n      background-color: rgba(51, 51, 51, 0.4); }\n  :host .slot-container.dark.accepting-drop {\n        background-color: rgba(153, 153, 153, 0.6); }\n  .placeholder {\n  width: 100%;\n  max-width: 140px;\n  border-radius: 4%;\n  position: relative; }\n  .placeholder.empty {\n    border: 1px solid gray; }\n  .embed-responsive-card:before {\n  padding-top: 140.714286%;\n  content: ' '; }\n  .slot-number {\n  position: absolute;\n  top: 7px;\n  left: 9px;\n  font-weight: bold;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/deploy/comp/slot/slot.component.ts":
/*!****************************************************!*\
  !*** ./src/app/deploy/comp/slot/slot.component.ts ***!
  \****************************************************/
/*! exports provided: SlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotComponent", function() { return SlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SlotComponent = /** @class */ (function (_super) {
    __extends(SlotComponent, _super);
    function SlotComponent(vapaee, app, cnt, cfResolver) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        _this.dark = false;
        _this.init();
        return _this;
    }
    SlotComponent.prototype.init = function () {
        var _this = this;
        this.acceptingDrop = false;
        this.waitReady.then(function () {
            // this.container.registerSlot(this.data.container, this, this.data.index);
            if (_this.data.dark) {
                _this.dark = _this.data.dark;
            }
            console.log("------->>>>>>>><", _this.data);
        });
    };
    SlotComponent.config = function () {
        return {};
    };
    SlotComponent.prototype.ngOnChanges = function () {
        if (this.data.backface) {
            console.log("SLOT BACKFACE", [this.data]);
            if (this.data.backface === true) {
                this.data.thumbnail = "/assets/jumbocard_dbbb-full.jpg";
            }
            else if (typeof this.data.backface == "string") {
                this.data.thumbnail = this.data.backface;
            }
        }
    };
    SlotComponent.prototype.acceptsDrop = function (copy) {
        if (this.copy && this.copy.id == copy.id)
            return false;
        if (typeof this.data.drops != "undefined") {
            return this.data.drops;
        }
        if (!this.acceptingDrop) {
            this.acceptingDrop = true;
            return true;
        }
        return false;
    };
    SlotComponent.prototype.dragLeave = function () {
        this.acceptingDrop = false;
    };
    SlotComponent.prototype.isDraggable = function () {
        if (typeof this.data.draggable != "undefined") {
            console.log("isDraggable returnning ", this.data.draggable);
            return this.data.draggable;
        }
        return true;
    };
    SlotComponent.prototype.onClick = function (e) {
        console.log("SlotComponent.onClick()", [e]);
        if (!this.copy)
            return;
        if (this.data.backface)
            return;
        this.cnt.deployCard(this.copy.collectible, this.img.nativeElement);
        // this.container.HacerAlgo(data)
        // si está en modo "view" simplemente despliega la carta que esté en ese slot
        // si está en modo "fill" y tiene una carta, la regresa al inventario? startDragging?
    };
    Object.defineProperty(SlotComponent.prototype, "copy", {
        get: function () {
            // console.log("copy()", this.data.container, this.data.index);
            if (this.data.backface) {
                return this.data;
            }
            if (!this.cnt.userdata.data)
                return null;
            var contaienr = this.cnt.userdata.data.slug.container[this.data.container];
            if (!contaienr)
                return null;
            var slot = contaienr.slots[this.data.index];
            if (!slot)
                return null;
            return slot.item;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('img'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlotComponent.prototype, "img", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('placeholder'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlotComponent.prototype, "placeholder", void 0);
    SlotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slot-comp',
            template: __webpack_require__(/*! ./slot.component.html */ "./src/app/deploy/comp/slot/slot.component.html"),
            styles: [__webpack_require__(/*! ./slot.component.scss */ "./src/app/deploy/comp/slot/slot.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], SlotComponent);
    return SlotComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/comp/video/video.component.html":
/*!********************************************************!*\
  !*** ./src/app/deploy/comp/video/video.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-center flex-grow animated fadeIn\" (window:resize)=\"onResize($event)\" [ngStyle]=\"getStyle\" >\n    <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe id=\"player\"\n            frameborder=\"0\"\n            allowfullscreen=\"1\"\n            allow=\"autoplay; encrypted-media\" title=\"YouTube video player\"\n            [src]=\"url\"\n            class=\"embed-responsive-item\">\n        </iframe>\n    </div>\n        \n    <!--div class=\"embed-responsive embed-responsive-16by9\">\n        <div id=\"player\"></div>\n    </div-->\n</div>"

/***/ }),

/***/ "./src/app/deploy/comp/video/video.component.scss":
/*!********************************************************!*\
  !*** ./src/app/deploy/comp/video/video.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1; }\n  :host .animated {\n    -webkit-animation-delay: 1.2s;\n    animation-delay: 1.2s; }\n  :host .embed-responsive {\n    background-color: rgba(0, 0, 0, 0.7); }\n"

/***/ }),

/***/ "./src/app/deploy/comp/video/video.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deploy/comp/video/video.component.ts ***!
  \******************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "./src/app/deploy/comp/base/base.component.ts");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoComponent = /** @class */ (function (_super) {
    __extends(VideoComponent, _super);
    function VideoComponent(vapaee, app, cnt, cfResolver, renderer, elRef, sanitizer) {
        var _this = _super.call(this, vapaee, app, cnt, cfResolver) || this;
        _this.vapaee = vapaee;
        _this.app = app;
        _this.cnt = cnt;
        _this.cfResolver = cfResolver;
        _this.renderer = renderer;
        _this.elRef = elRef;
        _this.sanitizer = sanitizer;
        _this.init();
        return _this;
        /*
        // Si quiero interactuar con el video tengo que hacer esto
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var that = this;
        (<any>window).onYouTubeIframeAPIReady = function() {
            that.init();
        }
        */
    }
    VideoComponent.prototype.init = function () {
        var _this = this;
        this.waitReady.then(function () {
            console.log("VIDEO AFTER READY");
            if (_this.data.youtube) {
                console.assert(_this.data.youtube.videoId, "ERROR: youtube params missing videoId", _this.data.youtube);
                _this.updateSrc();
                _this.onResize();
            }
        });
    };
    VideoComponent.config = function () {
        return {};
    };
    VideoComponent.prototype.onResize = function () {
        var target = this.elRef.nativeElement.querySelector(".embed-responsive");
        var ratio = 16 / 9;
        var maxHeight = this.elRef.nativeElement.offsetHeight - 2 * this.getPadding();
        var maxWidth = maxHeight * ratio;
        this.renderer.setStyle(target, 'max-width', maxWidth + "px");
    };
    VideoComponent.prototype.getPadding = function () {
        return 50;
    };
    Object.defineProperty(VideoComponent.prototype, "getStyle", {
        get: function () {
            return {
                "padding": this.data.padding || this.getPadding() + "px"
            };
        },
        enumerable: true,
        configurable: true
    });
    VideoComponent.prototype.updateSrc = function () {
        var src = "";
        if (this.data.youtube) {
            console.assert(this.data.youtube.videoId, "ERROR: youtube params missing videoId", this.data.youtube);
            src = "https://www.youtube.com/embed/" +
                this.data.youtube.videoId +
                "?autoplay=" + (this.data.youtube.autoplay || false) +
                "&amp;enablejsapi=1&amp;origin=" + window.location.origin +
                "&amp;widgetid=1";
        }
        // console.log("-------->", src, [src]);
        //return "https://www.youtube-nocookie.com/embed/4O9RSsvmYEI";
        //return "https://www.youtube.com/embed/Y0MuVQV0W0w?autoplay=false&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A4200&amp;widgetid=1";
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(src);
        console.log(this.url, src);
        return this.url;
    };
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-comp',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/deploy/comp/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/deploy/comp/video/video.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], VideoComponent);
    return VideoComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/deploy/deploy-album.page.html":
/*!***********************************************!*\
  !*** ./src/app/deploy/deploy-album.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template comp-host></ng-template>\n<!--a class=\"btn btn-default btn-sm my-0 ml-3 waves-effect waves-light\" (click)=\"containers.print()\">\n    Containers\n</a-->"

/***/ }),

/***/ "./src/app/deploy/deploy-album.page.scss":
/*!***********************************************!*\
  !*** ./src/app/deploy/deploy-album.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100vh;\n  display: flex;\n  overflow: hidden; }\n  :host .btn {\n    top: 150px;\n    left: 20px;\n    position: absolute; }\n"

/***/ }),

/***/ "./src/app/deploy/deploy-album.page.ts":
/*!*********************************************!*\
  !*** ./src/app/deploy/deploy-album.page.ts ***!
  \*********************************************/
/*! exports provided: DeployAlbumPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployAlbumPage", function() { return DeployAlbumPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _comp_comp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp/comp */ "./src/app/deploy/comp/comp.ts");
/* harmony import */ var _comp_component_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp/component.service */ "./src/app/deploy/comp/component.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeployAlbumPage = /** @class */ (function () {
    function DeployAlbumPage(vapaee, app, cnt, route, comp) {
        this.vapaee = vapaee;
        this.app = app;
        this.cnt = cnt;
        this.route = route;
        this.comp = comp;
    }
    DeployAlbumPage.prototype.ngOnInit = function () {
        var _this = this;
        var slug = this.route.snapshot.paramMap.get('slug');
        this.cnt.fetchAlbum(slug).then(function (album) {
            _this.comp.createAndDeployTree(album, _this.main.view);
            /*
            this.cnt.getUserAlbumCollection(slug).then(collection => {
                this.containers.setContent(slug, collection.container_id, collection.slots);
            });

            this.cnt.getUserInventory("cards-and-tokens").then(inventory => {
                this.containers.setContent("cards-and-tokens", inventory.container_id, inventory.slots);
            });
            */
        }, function (e) {
            console.log("this.cnt.fetchAlbum(slug) no hay data");
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_comp_comp__WEBPACK_IMPORTED_MODULE_4__["ComponentHost"]),
        __metadata("design:type", _comp_comp__WEBPACK_IMPORTED_MODULE_4__["ComponentHost"])
    ], DeployAlbumPage.prototype, "main", void 0);
    DeployAlbumPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deploy-album-page',
            template: __webpack_require__(/*! ./deploy-album.page.html */ "./src/app/deploy/deploy-album.page.html"),
            styles: [__webpack_require__(/*! ./deploy-album.page.scss */ "./src/app/deploy/deploy-album.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__["CntService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _comp_component_service__WEBPACK_IMPORTED_MODULE_5__["ComponentService"]])
    ], DeployAlbumPage);
    return DeployAlbumPage;
}());



/***/ }),

/***/ "./src/app/deploy/deploy-card.page.html":
/*!**********************************************!*\
  !*** ./src/app/deploy/deploy-card.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"getLoadingClass()\">\n    <ng-template comp-host></ng-template>\n</div>"

/***/ }),

/***/ "./src/app/deploy/deploy-card.page.scss":
/*!**********************************************!*\
  !*** ./src/app/deploy/deploy-card.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host, .deploy-card {\n  height: 100vh;\n  display: flex;\n  overflow: hidden;\n  flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/deploy/deploy-card.page.ts":
/*!********************************************!*\
  !*** ./src/app/deploy/deploy-card.page.ts ***!
  \********************************************/
/*! exports provided: DeployCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployCardPage", function() { return DeployCardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _comp_comp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp/comp */ "./src/app/deploy/comp/comp.ts");
/* harmony import */ var _comp_component_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp/component.service */ "./src/app/deploy/comp/component.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeployCardPage = /** @class */ (function () {
    function DeployCardPage(vapaee, app, cnt, comp, route) {
        this.vapaee = vapaee;
        this.app = app;
        this.cnt = cnt;
        this.comp = comp;
        this.route = route;
        this.loading = true;
    }
    DeployCardPage.prototype.ngOnInit = function () {
        var _this = this;
        var slug = this.route.snapshot.paramMap.get('slug');
        // console.log("-- ETAPA 1 -- this.cnt.getCardBySlug()");
        this.cnt.getCardBySlug(slug).then(function (card) {
            // console.log("-- ETAPA 2 -- this.preloadCard()");
            _this.preloadCard(card).then(function () {
                // console.log("-- ETAPA 3 -- this.comp.createAndDeployTree");
                _this.comp.createAndDeployTree(card.edition, _this.main.view);
            });
        });
    };
    DeployCardPage.prototype.preloadCard = function (card) {
        var _this = this;
        if (!card.edition) {
            console.log("--------- CARTA DE PRUEBA ----------"),
                card.edition = { deploy: card.deploy };
            this.loading = false;
            return Promise.resolve();
        }
        return this.comp.preload(card.edition.preload).then(function () {
            _this.loading = false;
        });
    };
    DeployCardPage.prototype.getLoadingClass = function () {
        var classes = { "deploy-card": true };
        if (this.loading) {
            classes.loading = true;
        }
        else {
        }
        return classes;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_comp_comp__WEBPACK_IMPORTED_MODULE_4__["ComponentHost"]),
        __metadata("design:type", _comp_comp__WEBPACK_IMPORTED_MODULE_4__["ComponentHost"])
    ], DeployCardPage.prototype, "main", void 0);
    DeployCardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deploy-card-page',
            template: __webpack_require__(/*! ./deploy-card.page.html */ "./src/app/deploy/deploy-card.page.html"),
            styles: [__webpack_require__(/*! ./deploy-card.page.scss */ "./src/app/deploy/deploy-card.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__["CntService"],
            _comp_component_service__WEBPACK_IMPORTED_MODULE_5__["ComponentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], DeployCardPage);
    return DeployCardPage;
}());



/***/ }),

/***/ "./src/app/directives/drag-and-drop.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/drag-and-drop.directive.ts ***!
  \*******************************************************/
/*! exports provided: DraggableDirective, DroppableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppableDirective", function() { return DroppableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/drag-and-drop.service */ "./src/app/services/drag-and-drop.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _deploy_comp_slot_slot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../deploy/comp/slot/slot.component */ "./src/app/deploy/comp/slot/slot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(dnd, cnt, app, component) {
        this.dnd = dnd;
        this.cnt = cnt;
        this.app = app;
        this.component = component;
        this.dropHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DraggableDirective.prototype.onDragStart = function (e) {
        var _this = this;
        console.log("DraggableDirective.onDragStart()", [e]);
        this.target = e.target;
        this.target.style.opacity = "0.2";
        e.dataTransfer.setDragImage(this.target, this.app.device.width * 2, this.app.device.height * 2);
        var isDraggable = this.component.isDraggable();
        console.log("this.component.isDraggable()", isDraggable);
        if (isDraggable) {
            this.cnt.getCopyById(e.target.id.substr(5)).then(function (copy) {
                _this.dnd.startDragging(e, _this.component, e.target);
            });
        }
        else {
            this.target.style.opacity = "1";
            console.log(e);
        }
    };
    DraggableDirective.prototype.onDrag = function (e) {
        // console.log("DraggableDirective.onDrag()", [e]);
        this.dnd.drag(e);
    };
    DraggableDirective.prototype.onDragEnd = function (e) {
        console.log("DraggableDirective.onDragEnd()", [e]);
        if (this.target) {
            this.target.style.opacity = "1";
            this.dnd.stopDragging(e);
        }
    };
    DraggableDirective.prototype.ngOnInit = function () {
        // console.log("DraggableDirective.initialized");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DraggableDirective.prototype, "dropHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onDragStart", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drag', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onDrag", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onDragEnd", null);
    DraggableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[draggable]'
        }),
        __metadata("design:paramtypes", [_services_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_1__["DragAndDropService"], _services_cnt_service__WEBPACK_IMPORTED_MODULE_2__["CntService"], _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _deploy_comp_slot_slot_component__WEBPACK_IMPORTED_MODULE_4__["SlotComponent"]])
    ], DraggableDirective);
    return DraggableDirective;
}());

var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(dnd, component) {
        this.dnd = dnd;
        this.component = component;
        this.dropHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // console.log("DROPPABLE:" , [this.component, this.target]);
    }
    DroppableDirective.prototype.onDragOver = function (e) {
        // console.log("DroppableDirective.onDragOver()", [this.component]);
        this.dnd.draggingOver(this.component);
        // this.component.draggingOver(this.dnd.getDraggingObject().copy);
        // console.log("DroppableDirective.onDragOver()", [e]);
    };
    DroppableDirective.prototype.handleDragEnter = function (e) {
        // console.log("DroppableDirective.handleDragEnter()", [e]);
    };
    DroppableDirective.prototype.handleDragLeave = function (e) {
        if (e.clientX == 0 && e.clientY == 0) {
            // En este caso el leave no es real. Sigue estando sobre el objeto pero por alguna razón ejecuta el 'dragleave' event
            return;
        }
        // var rect:ClientRect = this.component.placeholder.nativeElement.getBoundingClientRect();
        console.log("DroppableDirective.handleDragLeave()", e.clientX, e.clientY, [e.target]);
        this.dnd.dragLeave(this.component);
    };
    DroppableDirective.prototype.ngOnInit = function () {
        // console.log("DroppableDirective.initialized");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DroppableDirective.prototype, "dropHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DroppableDirective.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DroppableDirective.prototype, "handleDragEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DroppableDirective.prototype, "handleDragLeave", null);
    DroppableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[droppable]'
        }),
        __metadata("design:paramtypes", [_services_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_1__["DragAndDropService"], _deploy_comp_slot_slot_component__WEBPACK_IMPORTED_MODULE_4__["SlotComponent"]])
    ], DroppableDirective);
    return DroppableDirective;
}());



/***/ }),

/***/ "./src/app/pages/albums/albums.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/albums/albums.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- First page: list of available albums -->\n<div class=\"container margin-top-lg\" *ngIf=\"!deploy\">\n    <div class=\"cnt-card cursor-pointer inline-block margin\" *ngFor=\"let album of cnt.albums\" [routerLink]=\"'/deploy/album/'+album.slug\" mdbWavesEffect>\n        <img width=\"200\" height=\"240\" [id]=\"album.slug\" [src]=\"album.preview.images.thumbnail\" class=\"hide-at-work\">\n    </div>\n</div>\n\n\n\n<!-- Once the album is selected -->\n<div class=\"display-flex flex-grow\" [hidden]=\"!deploy\">\n    <ng-template comp-host></ng-template>\n\n    <!--div class=\"container-fluid\" [hidden]=\"!deploy\">\n        <div class=\"inventory-box\">\n            <div class=\"row\">\n                <div class=\"col\" *ngFor=\"let slot of slots\">\n                    <slot-comp [data]=\"slot\"></slot-comp>\n                </div>\n            </div>\n        </div>\n    </div-->\n</div>\n"

/***/ }),

/***/ "./src/app/pages/albums/albums.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/albums/albums.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  height: 100%; }\n\n.inventory-box {\n  background: grey;\n  border: 10px inset darkcyan; }\n\n.inventory-box .col {\n    text-align: center;\n    padding: 10px; }\n\n.inventory-box .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n"

/***/ }),

/***/ "./src/app/pages/albums/albums.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/albums/albums.page.ts ***!
  \*********************************************/
/*! exports provided: AlbumsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsPage", function() { return AlbumsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _deploy_comp_component_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../deploy/comp/component.service */ "./src/app/deploy/comp/component.service.ts");
/* harmony import */ var _deploy_comp_comp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../deploy/comp/comp */ "./src/app/deploy/comp/comp.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AlbumsPage = /** @class */ (function () {
    // slots: any[];
    function AlbumsPage(vapaee, app, cnt, route, sanitizer, comp) {
        var _this = this;
        this.vapaee = vapaee;
        this.app = app;
        this.cnt = cnt;
        this.route = route;
        this.sanitizer = sanitizer;
        this.comp = comp;
        this.waitInit = null;
        this.deploy = null;
        this.cnt.getAllAlbums().then(function (e) {
            var slug = _this.route.snapshot.paramMap.get('slug');
            if (slug) {
                _this.cnt.getAlbumCompleteBySlug(slug).then(function (album) {
                    _this.waitInit.then(function () {
                        _this.deployAlbum(album);
                    });
                });
            }
        });
        this.waitInit = new Promise(function (resolve) {
            _this.initResolve = resolve;
        });
    }
    AlbumsPage.prototype.ngOnInit = function () {
        this.initResolve();
    };
    AlbumsPage.prototype.deployAlbum = function (album) {
        // console.log("AlbumsPage.deployAlbum()", [album]);
        var src = '/embedded/album/' + album.slug + "?ignore_foreign=true";
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(src);
        this.deploy = album;
        this.comp.createAndDeployTree(album, this.main.view).then(function () {
            /*
            this.cnt.getUserAlbumCollection(album.slug).then(collection => {
                this.containers.setContent(album.slug, collection.container_id, collection.slots);
            });
            
            this.cnt.getUserInventory("cards-and-tokens").then(inventory => {
                this.containers.setContent("cards-and-tokens", inventory.container_id, inventory.slots);
            });
            */
        });
        // this.slots = [];
        // var inventory_name = "cards-and-tokens";
        // this.cnt.getUserInventory(inventory_name);
    };
    AlbumsPage.prototype.getAlbumUrl = function () {
        return this.url;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_deploy_comp_comp__WEBPACK_IMPORTED_MODULE_7__["ComponentHost"]),
        __metadata("design:type", _deploy_comp_comp__WEBPACK_IMPORTED_MODULE_7__["ComponentHost"])
    ], AlbumsPage.prototype, "main", void 0);
    AlbumsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'albums-page',
            template: __webpack_require__(/*! ./albums.page.html */ "./src/app/pages/albums/albums.page.html"),
            styles: [__webpack_require__(/*! ./albums.page.scss */ "./src/app/pages/albums/albums.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__["CntService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            _deploy_comp_component_service__WEBPACK_IMPORTED_MODULE_6__["ComponentService"]])
    ], AlbumsPage);
    return AlbumsPage;
}());



/***/ }),

/***/ "./src/app/pages/cards/cards.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/cards/cards.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-top-lg\">\n    <div class=\"cnt-card cursor-pointer inline-block margin\" *ngFor=\"let card of cnt.cards\" (click)=\"deployCard(card, $event)\">\n        <img width=\"140\" height=\"197\" [id]=\"card.slug\" [src]=\"card.edition.preview.images.thumbnail\" class=\"hide-at-work\">\n    </div>\n    <!--hr>\n    <pre>{{cnt.deploy|json}}</pre-->\n</div>"

/***/ }),

/***/ "./src/app/pages/cards/cards.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/cards/cards.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/cards/cards.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cards/cards.page.ts ***!
  \*******************************************/
/*! exports provided: CardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPage", function() { return CardsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardsPage = /** @class */ (function () {
    function CardsPage(vapaee, app, cnt, route) {
        var _this = this;
        this.vapaee = vapaee;
        this.app = app;
        this.cnt = cnt;
        this.route = route;
        this.waitInit = null;
        this.cnt.getAllCards().then(function (e) {
            console.log(_this.cnt.cards.length, _this.cnt.cards);
            var slug = _this.route.snapshot.paramMap.get('slug');
            if (slug) {
                _this.waitInit.then(function () {
                    _this.tryTodeployCard(slug);
                });
            }
        });
        this.waitInit = new Promise(function (resolve) {
            _this.initResolve = resolve;
        });
    }
    CardsPage.prototype.ngOnInit = function () {
        this.initResolve();
    };
    CardsPage.prototype.tryTodeployCard = function (slug) {
        var _this = this;
        if (this.cnt.cards.length == 0)
            return;
        var img = window.document.getElementById(slug);
        if (img) {
            this.cnt.getCardBySlug(slug).then(function (card) {
                _this.deployCard(card, { target: img });
            });
        }
        else {
            window.setTimeout(function () {
                _this.tryTodeployCard(slug);
            }, 100);
        }
    };
    CardsPage.prototype.deployCard = function (card, e) {
        var img = e.target;
        this.cnt.deployCard(card, img);
    };
    CardsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cards-page',
            template: __webpack_require__(/*! ./cards.page.html */ "./src/app/pages/cards/cards.page.html"),
            styles: [__webpack_require__(/*! ./cards.page.scss */ "./src/app/pages/cards/cards.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__["CntService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CardsPage);
    return CardsPage;
}());



/***/ }),

/***/ "./src/app/pages/comming-soon/comming-soon.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/comming-soon/comming-soon.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80vh\">\n  <div class=\"flex-center flex-column animated fadeIn\">\n      <h1 class=\"mb-4\">{{app.state}}</h1>\n      <p class=\"text-muted\">Comming Soon</p>\n      <a class=\"btn btn-primary\" routerLink=\"/home\">Home</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/comming-soon/comming-soon.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/comming-soon/comming-soon.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/comming-soon/comming-soon.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/comming-soon/comming-soon.page.ts ***!
  \*********************************************************/
/*! exports provided: CommingSoonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommingSoonPage", function() { return CommingSoonPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommingSoonPage = /** @class */ (function () {
    function CommingSoonPage(vapaee, app) {
        this.vapaee = vapaee;
        this.app = app;
    }
    CommingSoonPage.prototype.ngOnInit = function () {
    };
    CommingSoonPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comming-soon-page',
            template: __webpack_require__(/*! ./comming-soon.page.html */ "./src/app/pages/comming-soon/comming-soon.page.html"),
            styles: [__webpack_require__(/*! ./comming-soon.page.scss */ "./src/app/pages/comming-soon/comming-soon.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], CommingSoonPage);
    return CommingSoonPage;
}());



/***/ }),

/***/ "./src/app/pages/editor/editor.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/editor/editor.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"steem.user.name == 'viterbo'\" class=\"container margin-bottom-lg\">\n    <div class=\"card margin-top-xl opaque-at-work inventory-box\">\n        <h3 class=\"card-header default-color\">\n            Editor\n        </h3>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <!-- Form -->\n                    <form class=\"text-center\">\n\n                        <input type=\"text\" class=\"form-control mb-4\" [(ngModel)]=\"model.week\" placeholder=\"(week)\" [ngModelOptions]=\"{standalone: true}\">\n\n                        <input type=\"text\" class=\"form-control mb-4\" [(ngModel)]=\"model.position\" placeholder=\"(position)\" [ngModelOptions]=\"{standalone: true}\">\n\n                        <input type=\"text\" class=\"form-control mb-4\" [(ngModel)]=\"model.slug\" placeholder=\"(slug)\" [ngModelOptions]=\"{standalone: true}\">\n\n                        <input type=\"text\" class=\"form-control mb-4\" [(ngModel)]=\"model.youtube\" placeholder=\"(youtube)\" [ngModelOptions]=\"{standalone: true}\">\n\n                        <input type=\"text\" class=\"form-control mb-4\" [(ngModel)]=\"model.steemuser\" placeholder=\"(steemuser)\" [ngModelOptions]=\"{standalone: true}\">\n\n                        <input type=\"text\" class=\"form-control mb-4\" [(ngModel)]=\"model.permlink\" placeholder=\"(permlink)\" [ngModelOptions]=\"{standalone: true}\">\n\n                        <input type=\"text\" class=\"form-control mb-4\" [(ngModel)]=\"model.title\" placeholder=\"(title)\" [ngModelOptions]=\"{standalone: true}\">\n\n                        <input type=\"text\" class=\"form-control mb-4\" [(ngModel)]=\"model.bgimage\" placeholder=\"(bgimage)\" [ngModelOptions]=\"{standalone: true}\">\n\n                        <input type=\"text\" class=\"form-control mb-4\" [(ngModel)]=\"model.link\" placeholder=\"(link)\" [ngModelOptions]=\"{standalone: true}\">\n\n                        <div class=\"d-flex\">\n                            <div>\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"original\" [(ngModel)]=\"model.original\" [ngModelOptions]=\"{standalone: true}\">\n                                    <label class=\"custom-control-label\" for=\"original\">Original</label>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex\">\n                            <div>\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"has_lyrics\" [(ngModel)]=\"model.has_lyrics\" [ngModelOptions]=\"{standalone: true}\">\n                                    <label class=\"custom-control-label\" for=\"has_lyrics\">Lyrics</label>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex margin-top\" [hidden]=\"!model.has_lyrics\" >\n                            <a [ngHref]=\"model.link\" target=\"_blank\">link</a>\n                        </div>\n\n                        <textarea [hidden]=\"!model.has_lyrics\" class=\"form-control mb-4\" style=\"height: 500px;\" [(ngModel)]=\"model.lyrics\" [ngModelOptions]=\"{standalone: true}\">\n                            \n                        </textarea>\n                        \n                \n                        <button class=\"btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0\" (click)=\"createCard()\">Crear Carta</button>\n                \n                    </form>\n                </div>\n            </div>\n            <!--div class=\"row\">\n                <div class=\"col\">\n                    <pre>{{model|json}}</pre>\n                </div>\n            </div-->\n        </div>\n    </div>\n</div>\n\n\n<div *ngIf=\"steem.user.name != 'viterbo'\">\n    under construction\n</div>"

/***/ }),

/***/ "./src/app/pages/editor/editor.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/editor/editor.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/editor/editor.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/editor/editor.page.ts ***!
  \*********************************************/
/*! exports provided: EditorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorPage", function() { return EditorPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_steem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/steem.service */ "./src/app/services/steem.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cnt.service */ "./src/app/services/cnt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditorPage = /** @class */ (function () {
    function EditorPage(vapaee, app, steem, cnt) {
        this.vapaee = vapaee;
        this.app = app;
        this.steem = steem;
        this.cnt = cnt;
        this.model = {};
        this._deploy = {
            "comp": "root",
            "children": [
                {
                    "comp": "grid",
                    "data": {
                        "rows": [
                            [{ "height": "10vh" }],
                            { "grow": 0, "cols": [1] },
                            [{ "grow": 1 }],
                            [{ "height": "3vh" }]
                        ]
                    },
                    "children": [
                        {
                            "comp": "background",
                            "data": {
                                "color": "white",
                                "image": {
                                    "url": "/assets/cards/openmic/images/steemit.svg",
                                    "position": "left", "repeat": "no-repeat", "size": "contain"
                                }
                            }
                        },
                        {
                            "comp": "background",
                            "data": {
                                "color": "grey",
                                "padding-sm": true,
                                "container": true
                            },
                            "children": [
                                {
                                    "comp": "grid",
                                    "data": {
                                        "rows": [[{ "grow": 1 }, { "grow": 0 }]]
                                    },
                                    "children": [
                                        {
                                            "comp": "label",
                                            "data": {
                                                "class": "text-xl-left white-text",
                                                "text": "Unseen (The Good Fight)"
                                            }
                                        },
                                        {
                                            "comp": "menu",
                                            "data": {
                                                "menu": [
                                                    {
                                                        "text": "Video",
                                                        "class": "btn btn-sm btn-outline-white",
                                                        "section": "main",
                                                        "value": "Video"
                                                    },
                                                    {
                                                        "text": "Lyrics",
                                                        "class": "btn btn-sm btn-outline-white",
                                                        "section": "main",
                                                        "value": "Lyrics"
                                                    },
                                                    {
                                                        "text": "Steemit post",
                                                        "class": "btn btn-sm btn-outline-white",
                                                        "link": "https://steemit.com/@viterbo"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "comp": "background",
                            "data": {
                                "color": "rgba(72, 72, 72, 0.0)",
                                "gradient": {
                                    "dir": "top",
                                    "points": [
                                        { "color": "rgba(0,0,0,0.6)", "percent": 0 },
                                        { "color": "rgba(0,0,0,0.0)", "percent": 30 },
                                        { "color": "rgba(0,0,0,0.0)", "percent": 70 },
                                        { "color": "rgba(0,0,0,0.6)", "percent": 100 }
                                    ]
                                },
                                "image": {
                                    "url": "/assets/backgrounds/maxresdefault.jpg",
                                    "repeat": "no-repeat",
                                    "size": "cover",
                                    "position": "center",
                                    "blend-mode": "multiply"
                                }
                            },
                            "children": [
                                {
                                    "comp": "section",
                                    "data": {
                                        "name": "main",
                                        "current": "Video",
                                        "sections": [
                                            "Video",
                                            "Lyrics"
                                        ]
                                    },
                                    "children": [
                                        {
                                            "comp": "video",
                                            "data": {
                                                "youtube": {
                                                    "videoId": "8vQb2JRloQ8",
                                                    "autoplay": false
                                                }
                                            }
                                        },
                                        {
                                            "comp": "background",
                                            "data": {
                                                "container": true,
                                                "padding": true
                                            },
                                            "children": [
                                                {
                                                    "comp": "background",
                                                    "data": {
                                                        "color": "rgba(0,0,0,0.3)",
                                                        "fgcolor": "white",
                                                        "padding": true,
                                                        "expand": true
                                                    },
                                                    "children": [
                                                        {
                                                            "comp": "scrolleable",
                                                            "children": [
                                                                {
                                                                    "comp": "markdown",
                                                                    "data": {
                                                                        "markdown": ""
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "comp": "background",
                            "data": {
                                "color": "#FFF"
                            }
                        }
                    ]
                }
            ]
        };
    }
    EditorPage.prototype.ngOnInit = function () {
    };
    EditorPage.prototype.getMarkDownLyrics = function () {
        var lyrics = this.model.lyrics.split("\n\n").join("<br>").split("\n").join("  \n").split("<br>").join(" \n\n");
        lyrics = "# Lyrics  \n\n" + lyrics;
        return lyrics;
    };
    EditorPage.prototype.getBgImage = function () {
        if (this.model.bgimage.indexOf("/") != -1) {
            return this.model.bgimage;
        }
        else {
            return "/assets/backgrounds/" + this.model.bgimage;
        }
    };
    Object.defineProperty(EditorPage.prototype, "deploy", {
        get: function () {
            // background image
            this._deploy.children[0].children[2].data.image.url = this.getBgImage();
            // el título
            this._deploy.children[0].children[1].children[0].children[0].data.text = this.model.title;
            // el video
            this._deploy.children[0].children[2].children[0].children[0].data.youtube.videoId = this.model.youtube;
            // el link
            this._deploy.children[0].children[1].children[0].children[1].data.menu[2].link = this.model.link;
            // si tienen lyrics
            if (this.model.has_lyrics) {
                var lyrics = this.getMarkDownLyrics();
                this._deploy.children[0].children[1].children[0].children[1].data.menu[1].hidden = false;
                this._deploy.children[0].children[2].children[0].children[1].children[0].children[0].children[0].data.markdown = lyrics;
            }
            else {
                this._deploy.children[0].children[1].children[0].children[1].data.menu[1].hidden = true;
            }
            return this._deploy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorPage.prototype, "preview", {
        get: function () {
            var r, g, b;
            r = Math.floor(100 * Math.random()) + 100;
            g = Math.floor(100 * Math.random()) + 100;
            b = Math.floor(100 * Math.random()) + 100;
            return {
                "images": {
                    "opengraph": "./assets/cards/openmic/images/opengraph/" + this.model.slug + ".png",
                    "fullsize": "./assets/cards/openmic/images/fullsize/" + this.model.slug + ".png",
                    "thumbnail": "./assets/cards/openmic/images/thumbnail/" + this.model.slug + ".png"
                },
                "colors": {
                    "bg": "rgb(" + r + "," + g + "," + b + ")"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    EditorPage.prototype.createCard = function () {
        var _this = this;
        /*/
        console.log("this.deploy", this.deploy);
        console.log(JSON.stringify(this._deploy));
        console.log([JSON.stringify(this._deploy)]);
        /*/
        this.cnt.createCard(this.model, this.deploy, this.preview).then(function (e) {
            if (e.error) {
                alert("ERROR: " + e.error);
            }
            else {
                console.log();
                alert("Carta ID: " + e.card.id);
                _this.model = {};
            }
        });
        //*/
    };
    EditorPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'editor-page',
            template: __webpack_require__(/*! ./editor.page.html */ "./src/app/pages/editor/editor.page.html"),
            styles: [__webpack_require__(/*! ./editor.page.scss */ "./src/app/pages/editor/editor.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _services_steem_service__WEBPACK_IMPORTED_MODULE_3__["SteemService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"]])
    ], EditorPage);
    return EditorPage;
}());



/***/ }),

/***/ "./src/app/pages/facebook-connect/facebook-connect.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/facebook-connect/facebook-connect.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80vh\">\n    <div [hidden]=\"timeout\" class=\"flex-center flex-column animated fadeIn\">\n\n        <h1 class=\"mb-4\">Connecting to Steem</h1>\n        <div class=\"text-muted\" style=\"width: 50vw;\">\n          <div class=\"progress primary-color-dark\">\n              <div class=\"indeterminate\"></div>\n          </div>\n        </div>\n    </div>\n    <div [hidden]=\"!timeout\" class=\"flex-center flex-column animated fadeIn\">\n        <h1 class=\"mb-4\">Conection Time Out !!</h1>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/facebook-connect/facebook-connect.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/facebook-connect/facebook-connect.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/facebook-connect/facebook-connect.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/facebook-connect/facebook-connect.page.ts ***!
  \*****************************************************************/
/*! exports provided: FacebookConnectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookConnectPage", function() { return FacebookConnectPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/facebook.service */ "./src/app/services/facebook.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacebookConnectPage = /** @class */ (function () {
    function FacebookConnectPage(vapaee, app, facebook) {
        this.vapaee = vapaee;
        this.app = app;
        this.facebook = facebook;
        console.log("FacebookConnectPage !!!!!!!!!!!!!!!!!!!", window.location.href, facebook);
    }
    FacebookConnectPage.prototype.ngOnInit = function () {
    };
    FacebookConnectPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'facebook-connect-page',
            template: __webpack_require__(/*! ./facebook-connect.page.html */ "./src/app/pages/facebook-connect/facebook-connect.page.html"),
            styles: [__webpack_require__(/*! ./facebook-connect.page.scss */ "./src/app/pages/facebook-connect/facebook-connect.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _services_facebook_service__WEBPACK_IMPORTED_MODULE_3__["FacebookService"]])
    ], FacebookConnectPage);
    return FacebookConnectPage;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80vh\">\n    <div class=\"flex-center flex-column hide-at-work\">\n        <!--img class=\"img-fluid\" src=\"/assets/cards-and-tokens-full.png\"-->\n        \n        <!--button type=\"button\" class=\"btn btn-primary relative waves-light\" (click)=\"steem.vote()\" mdbRippleRadius>vote</button-->\n\n\n\n\n        <div class=\"preloader-wrapper big active\">\n            <div class=\"spinner-layer spinner-blue\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n            <div class=\"spinner-layer spinner-red\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n            <div class=\"spinner-layer spinner-yellow\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n            <div class=\"spinner-layer spinner-green\">\n              <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n          </div>\n\n\n\n\n\n\n\n\n\n        <h3>welcome to</h3>\n        <h1>Cards & Tokens</h1>\n        <br><br><br><br>\n        <div class=\"animated fadeIn mb-4\" [hidden]=\"vapaee.logged\">\n            <button type=\"button\" class=\"btn btn-primary relative waves-light\" (click)=\"steem.askForLogin()\" mdbRippleRadius>Login</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _services_steem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/steem.service */ "./src/app/services/steem.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(vapaee, app, cnt, steem) {
        this.vapaee = vapaee;
        this.app = app;
        this.cnt = cnt;
        this.steem = steem;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__["CntService"], _services_steem_service__WEBPACK_IMPORTED_MODULE_4__["SteemService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/pages/inventory/inventory.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/inventory/inventory.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-bottom-lg\">\n    <!--section class=\"finally-comments\"\n        data-id=\"https://steemit.com/spanish/@viterbo/nuevo-lenguaje-inclusivo-les-diputades\"\n        data-reputation=\"true\"\n        data-values=\"true\"\n        data-profile=\"true\"\n        data-generated=\"false\"\n        data-guestComments=\"true\"\n    >\n    </section-->\n    <div class=\"card margin-top-xl opaque-at-work inventory-box\">\n        <h3 class=\"card-header primary-color white-text\">\n            Inventory\n        </h3>\n        <div class=\"card-body\">\n            <div class=\"row\" *ngFor=\"let row of slots\">\n                <div class=\"col\" *ngFor=\"let slot of row\">\n                    <slot-comp [data]=\"slot\"></slot-comp>\n                </div>\n            </div>\n            <div class=\"row daily-card-box\">\n                <div class=\"col\">\n                    <slot-comp [data]=\"dailycard\" (click)=\"claimDailyPrize()\"></slot-comp>\n                </div>\n                <div class=\"col-9\">\n                    <div class=\"countdown-container flex-center flex-column flip-clock-wrapper color-white animated fadeIn\">\n                        <div class=\"count-down\"></div>\n                        <div *ngIf=\"!dailycard.claimable\">\n                            <h1>Free Daily Prize</h1>\n                        </div>\n                        <a class=\"btn btn-success btn-lg waves-effect waves-light\" *ngIf=\"dailycard.claimable\" (click)=\"claimDailyPrize()\">\n                            Claim your daily price\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <!--\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"left-aligned bg-color-white color-black\">\n                        <pre>{{dailycard|json}}</pre>\n                    </div>\n                </div>\n            </div>\n            -->\n        </div>\n    </div>\n\n</div>\n\n\n\n\n\n\n<!--\n<a class=\"btn btn-1 btn-default btn-sm my-0 ml-3 waves-effect waves-light\" (click)=\"containers.print()\">\n    Containers\n</a>\n<a class=\"btn btn-2 btn-default btn-sm my-0 ml-3 waves-effect waves-light\" (click)=\"cnt.print()\">\n    Data\n</a>\n<a class=\"btn btn-3 btn-primary btn-sm my-0 ml-3 waves-effect waves-light\" (click)=\"getDailyPrice()\">\n    Daily Prize\n</a>\n-->"

/***/ }),

/***/ "./src/app/pages/inventory/inventory.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/inventory/inventory.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host .btn-1 {\n    bottom: 150px;\n    left: 20px;\n    position: absolute; }\n  :host .btn-2 {\n    bottom: 100px;\n    left: 20px;\n    position: absolute; }\n  :host .btn-3 {\n    bottom: 50px;\n    left: 20px;\n    position: absolute; }\n  :host .inventory-box .card-body {\n    background: #212529; }\n  :host .inventory-box .card-body .col {\n      text-align: center;\n      padding: 10px; }\n  :host .inventory-box .card-body .row {\n      margin-left: 0px;\n      margin-right: 0px; }\n  :host .inventory-box .card-body .row .countdown-container {\n        display: flex;\n        text-align: center;\n        align-self: center;\n        flex-grow: 1;\n        padding: 10px;\n        -webkit-animation-delay: 0.2s;\n        animation-delay: 0.2s; }\n  :host .inventory-box .card-body .row .card-container {\n        flex-grow: 0;\n        padding: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/inventory/inventory.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/inventory/inventory.page.ts ***!
  \***************************************************/
/*! exports provided: InventoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPage", function() { return InventoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cnt.service */ "./src/app/services/cnt.service.ts");
/* harmony import */ var _deploy_comp_comp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../deploy/comp/comp */ "./src/app/deploy/comp/comp.ts");
/* harmony import */ var _deploy_comp_component_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../deploy/comp/component.service */ "./src/app/deploy/comp/component.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InventoryPage = /** @class */ (function () {
    function InventoryPage(vapaee, app, comp, cnt) {
        this.vapaee = vapaee;
        this.app = app;
        this.comp = comp;
        this.cnt = cnt;
    }
    InventoryPage.prototype.ngOnInit = function () {
        this.dailycard = { backface: true, draggable: false, drops: false, id: "dailycard" };
        var inventory_name = "cards-and-tokens";
        this.slots = [[], []];
        var cols = 4;
        for (var r = 0; r < this.slots.length; r++) {
            for (var i = 0; i < cols; i++) {
                this.slots[r].push({
                    "index": i + r * cols, "container": inventory_name
                });
            }
        }
        this.updateCountdown();
    };
    InventoryPage.prototype.ngOnDestroy = function () {
        this.destroyCountdown();
    };
    InventoryPage.prototype.updateCountdown = function () {
        var _this = this;
        this.cnt.getDailyPrizeCountdown().then(function (sec) {
            _this.dailycard.claimable = _this.cnt.userdata.data.dayliprice.claimable;
            if (!_this.dailycard.claimable) {
                _this.dailycard.remaining = sec;
                _this.createCountDownClock();
            }
            else {
                _this.dailycard.remaining = 0;
            }
        });
    };
    InventoryPage.prototype.claimDailyPrize = function () {
        var _this = this;
        if (this.cnt.userdata.data.dayliprice.claimable) {
            this.cnt.claimDailyPrize().then(function () {
                _this.updateCountdown();
            });
        }
        else {
            alert("You have to wait " + this.cnt.userdata.data.dayliprice.remaining + " seconds to claim your daily price");
        }
    };
    InventoryPage.prototype.destroyCountdown = function () {
        if (this.clock) {
            this.clock.stop();
            this.clock = null;
        }
    };
    InventoryPage.prototype.createCountDownClock = function () {
        var self = this;
        // flipClock Count Down
        $(function () {
            var now = new Date();
            var night = new Date(2019, 5, 2, 0, 0, 0 // ...at 00:00:00 hours
            );
            var msTillMidnight = night.getTime() - now.getTime();
            var sec = self.cnt.userdata.data.dayliprice.remaining;
            // weblog("flipClock Count Down Start");
            // http://flipclockjs.com/
            var clock = new FlipClock($('.count-down'), sec, {
                clockFace: 'HourlyCounterFace',
                countdown: true,
                autoStart: false,
                autoPlay: false,
                showSeconds: true
            });
            clock.face.options.countdown = true;
            clock.face.options.autoStart = false;
            clock.face.options.autoPlay = false;
            clock.face.value = clock.face.value - 4;
            clock.stop();
            clock.start();
            /*
            window.setTimeout(() => {
                console.log(clock);
                // clock.start();
            }, 5000);
            */
            // weblog("flipClock Count Down END", $('.count-down').html());
            self.clock = clock;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_deploy_comp_comp__WEBPACK_IMPORTED_MODULE_4__["ComponentHost"]),
        __metadata("design:type", _deploy_comp_comp__WEBPACK_IMPORTED_MODULE_4__["ComponentHost"])
    ], InventoryPage.prototype, "main", void 0);
    InventoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-page',
            template: __webpack_require__(/*! ./inventory.page.html */ "./src/app/pages/inventory/inventory.page.html"),
            styles: [__webpack_require__(/*! ./inventory.page.scss */ "./src/app/pages/inventory/inventory.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _deploy_comp_component_service__WEBPACK_IMPORTED_MODULE_5__["ComponentService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_3__["CntService"]])
    ], InventoryPage);
    return InventoryPage;
}());



/***/ }),

/***/ "./src/app/pages/loading/loading.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80vh\">\n  <div class=\"flex-center flex-column animated fadeIn\">\n      <h1 class=\"mb-4\">{{app.prev_state}}</h1>\n      <div class=\"text-muted\" style=\"width: 50vw;\">\n        Loading...\n        <div class=\"progress primary-color-dark\">\n            <div class=\"indeterminate\"></div>\n        </div>\n        <a href=\"https://mdbootstrap.com/components/progress-bars/\" target=\"_blank\">Si no anda</a>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/loading/loading.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/loading/loading.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/loading/loading.page.ts ***!
  \***********************************************/
/*! exports provided: LoadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPage", function() { return LoadingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingPage = /** @class */ (function () {
    function LoadingPage(vapaee, app) {
        this.vapaee = vapaee;
        this.app = app;
    }
    LoadingPage.prototype.ngOnInit = function () {
    };
    LoadingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loading-page',
            template: __webpack_require__(/*! ./loading.page.html */ "./src/app/pages/loading/loading.page.html"),
            styles: [__webpack_require__(/*! ./loading.page.scss */ "./src/app/pages/loading/loading.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], LoadingPage);
    return LoadingPage;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-center flex-column\">\n    <h1 class=\"animated fadeIn mb-4\">404 Page Not Found !!</h1>\n</div>"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  height: 100vh;\n  background-color: black;\n  color: white; }\n\n.flex-center.flex-column {\n  flex-grow: 1; }\n\n.animated {\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s; }\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.ts ***!
  \***************************************************/
/*! exports provided: NotFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return NotFoundPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotFoundPage = /** @class */ (function () {
    function NotFoundPage(vapaee, app) {
        this.vapaee = vapaee;
        this.app = app;
    }
    NotFoundPage.prototype.ngOnInit = function () {
        console.log("NOT FOUND 404: ", window.location.href);
    };
    NotFoundPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'not-found-page',
            template: __webpack_require__(/*! ./not-found.page.html */ "./src/app/pages/not-found/not-found.page.html"),
            styles: [__webpack_require__(/*! ./not-found.page.scss */ "./src/app/pages/not-found/not-found.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], NotFoundPage);
    return NotFoundPage;
}());



/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"container text-align-left margin-top-xl\">\n      \n        <h1>PRIVACY POLICY</h1>\n\n        <p>This Privacy Policy establishes the terms on which the user information is used for your website. This company is committed to the security of its users' data. When we ask you to fill in the fields of personal information with which you can be identified, which ensures that it will only be used in accordance with the terms of this document. However, this Privacy Policy may change with time or time that has been updated and emphasized.</p>\n        \n        <h2>Information that is collected</h2>\n        \n        <p>Our website may collect personal information such as: Name, contact information such as your email address and demographic information. Also when the sea can be faster or faster.</p>\n        \n        <h2>Use of the information collected</h2>\n        \n        <p>Our website uses the information in order to provide the best possible service, particularly to maintain a registry of users, of orders in case it fits, and to improve our products and services. It may be products that contain information, products and other advertising information that is related to health. anytime</p>\n        \n        <p>Vapaée is highly committed to fulfill the commitment to keep your information safe. We use the most advanced and permanent systems to ensure that there is no unauthorized access.</p>\n        \n        <h2>Biscuits</h2>\n        \n        <p>A cookie refers to a file that is sent for the purpose of requesting permission to send and save on your computer, by accepting said file is created and the cookie serves to access the website, and also facilitates the last visits to a website . recurrent. Another function that cookies have is that with them the web can recognize you individually and therefore, provide the best personalized service on your website.</p>\n        \n        <p>Our website uses cookies to identify the pages that are visited and their frequency. This information is only available for statistical analysis and then the information is permanently deleted. You can delete cookies at any time from your computer. However, cookies help to provide a better service of websites, you do not have access to your computer information or to you, unless you want it and provide it directly, visits to a website. You can accept or accept the use of cookies, however most browsers automatically accept cookies because it serves to have a better web service. You can also change the configuration of cookies. If they decline, we may not be useful for our services.</p>\n        \n        <h2>Links to Third Parties</h2>\n        \n        <p>This website may contain access to other sites that may be of interest to you. Once you can click on these links and leave our page, we no longer have control over the site to which you are redirected and therefore we are not responsible for the terms or privacy or the protection of your data in those other sites. These sites are subject to their own privacy policies so it is advisable to check to confirm that you agree with them.</p>\n        \n        <h2>Control of your personal information</h2>\n        \n        <p>At any time you may restrict the collection or use of personal information that is provided to our website. Each time you are asked to fill in a form, such as the user registration form, you can check or uncheck the option to receive information by email. If you have marked the option to receive our newsletter or advertising, you can cancel it at any time.</p>\n        \n        <p>This company will not come, give or distribute the personal information that is collected without your consent, unless required by a judge with a court order.</p>\n        \n        <p>Vapaée reserves the right to change the terms of this Privacy Policy at any time</p>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.page.ts ***!
  \*************************************************************/
/*! exports provided: PrivacyPolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function() { return PrivacyPolicyPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(vapaee, app) {
        this.vapaee = vapaee;
        this.app = app;
    }
    PrivacyPolicyPage.prototype.ngOnInit = function () {
    };
    PrivacyPolicyPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'privacy-policy-page',
            template: __webpack_require__(/*! ./privacy-policy.page.html */ "./src/app/pages/privacy-policy/privacy-policy.page.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.page.scss */ "./src/app/pages/privacy-policy/privacy-policy.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.css":
/*!************************************************!*\
  !*** ./src/app/pages/profile/profile.page.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/profile/profile.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin-top-xl\">\n    <h1>Profiles</h1>\n    <div class=\"card opaque-at-work\">\n        <h3 class=\"card-header success-color white-text\">\n            <img src=\"/assets/steemit-white.svg\" style=\"height: 40px;\">\n        </h3>\n        <div class=\"card-body\" *ngIf=\"!steem.user\">\n            <h4 class=\"card-title\">Not connected</h4>\n            <p class=\"card-text\">Connect to your Steem account by using Steem-Connect.</p>\n            <a class=\"btn btn-success\" (click)=\"steem.askForLogin()\">Connect</a>\n        </div>\n        <div class=\"card-body\" *ngIf=\"steem.user\">\n            <h4 class=\"card-title\">\n                <img [src]=\"steem.user.profile.avatar\" style=\"height:32px;\">&nbsp;\n                {{steem.user.profile.name}}\n            </h4>\n            <p class=\"card-text\">connected</p>\n            <a class=\"btn btn-success\" (click)=\"vapaee.logout()\">Disconnect</a>\n        </div>\n    </div>\n    <div class=\"card margin-top-xl opaque-at-work\">\n        <h3 class=\"card-header primary-color white-text\">\n            <img src=\"/assets/eos-white.png\" style=\"height: 40px;\">\n        </h3>\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Comming Soon</h4>\n            <p class=\"card-text\">You will be able to connect to yor EOS account by using Scatter.</p>\n            <a class=\"btn btn-primary disabled\">Connect</a>\n        </div>\n    </div>\n</div>\n\n\n<!--a class=\"btn btn-deep-orange waves-light\"\n         href=\"http://accounts.vapaee.com/index.php?route=account/logout&redirect=http://cardsandtokens.com/\" mdbWavesEffect>Logout</a-->\n      "

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_steem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/steem.service */ "./src/app/services/steem.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(vapaee, app, steem) {
        this.vapaee = vapaee;
        this.app = app;
        this.steem = steem;
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-page',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.css */ "./src/app/pages/profile/profile.page.css")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _services_steem_service__WEBPACK_IMPORTED_MODULE_3__["SteemService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ }),

/***/ "./src/app/pages/root/root.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/root/root.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark special-color-dark opaque-at-work\">\n\n  <!-- Navbar brand -->\n  <logo>\n          <a class=\"navbar-brand\" routerLink=\"/home\">\n              <img src=\"/assets/cards-and-tokens.png\" height=\"45px\" alt=\"\" class=\"hide-at-work\">\n          </a>\n  </logo>    \n\n\n  <!-- Collapsible content -->\n  <links>\n\n      <!-- Pages -->\n      <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('editor')}\" *ngIf=\"vapaee.logged\" >\n                  <a class=\"nav-link waves-light\" routerLink=\"/editor\" mdbWavesEffect>Editor</a>\n          </li>\n          <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('cards')}\" >\n                  <a class=\"nav-link waves-light\" routerLink=\"/cards\" mdbWavesEffect>Cards</a>\n          </li>\n          <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('albums')}\" >\n                  <a class=\"nav-link waves-light\" routerLink=\"/albums\" mdbWavesEffect>Albums</a>\n          </li>\n          <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('inventory')}\" *ngIf=\"vapaee.logged\">\n                  <a class=\"nav-link waves-light\" routerLink=\"/inventory\" mdbWavesEffect>Inventory</a>\n          </li>\n          <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('mastery')}\" *ngIf=\"vapaee.logged\">\n                  <a class=\"nav-link waves-light\" routerLink=\"/mastery\" mdbWavesEffect>Mastery</a>\n          </li>\n          <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('games')}\" *ngIf=\"vapaee.logged\">\n                  <a class=\"nav-link waves-light\" routerLink=\"/games\" mdbWavesEffect>Games</a>\n          </li>\n          <li class=\"nav-item\" [ngClass]=\"{active: app.stateStartsWith('market')}\" *ngIf=\"vapaee.logged\">\n                  <a class=\"nav-link waves-light\" (click)=\"printData()\" mdbWavesEffect>DATA</a>\n          </li>\n\n          <!-- Dropdown \n          <li class=\"nav-item dropdown\" dropdown>\n              <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n              Basic dropdown<span class=\"caret\"></span></a>\n              <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Action</a>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Another action</a>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Something else here</a>\n                  <div class=\"divider dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Separated link</a>\n              </div>\n          </li>\n          -->\n\n      </ul>\n      <!-- Pages -->\n\n      <!-- User Account -->\n      <ul class=\"navbar-nav ml-auto\">\n          <li *ngIf=\"vapaee.logged\" class=\"nav-item dropdown d-none d-lg-block\" dropdown >\n              <a dropdownToggle mdbWavesEffect [ngClass]=\"{active: app.stateStartsWith('profile')}\" \n                  type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n                  <img [src]=\"steem.user ? steem.user.profile.avatar : '/assets/noavatar.png'\" style=\"height:32px;\">&nbsp;&nbsp;&nbsp;\n                  {{vapaee.user_name}}\n              <span class=\"caret\"></span></a>\n              <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n                  <a class=\"nav-link waves-light\" routerLink=\"/profile\" mdbWavesEffect>\n                      <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i> Profile\n                  </a>\n                  <a class=\"nav-link waves-light\"\n                      (click)=\"vapaee.logout()\" mdbWavesEffect>\n                      <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout\n                  </a>\n                  <!--a class=\"nav-link waves-light\"\n                      href=\"http://accounts.vapaee.com/index.php?route=account/logout&redirect=http://cardsandtokens.com/\" mdbWavesEffect>\n                      <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout\n                  </a-->\n              </div>\n          </li>\n          <li class=\"nav-item d-lg-none d-md-block\" *ngIf=\"vapaee.logged\">\n              <div class=\"divider dropdown-divider\"></div>\n          </li>   \n          <li class=\"nav-item\" *ngIf=\"!vapaee.logged\">\n              <a class=\"nav-link waves-light\" (click)=\"steem.askForLogin()\" mdbWavesEffect>\n                  <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login\n              </a>\n          </li>\n          <li class=\"nav-item d-lg-none d-md-block\" *ngIf=\"vapaee.logged\">\n              <a class=\"nav-link waves-light\" routerLink=\"/profile\" mdbWavesEffect>\n                  <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i> Profile\n              </a>            \n          </li>\n          <li class=\"nav-item d-lg-none d-md-block\" *ngIf=\"vapaee.logged\">\n              <a class=\"nav-link waves-light\"\n                  (click)=\"vapaee.logout()\" mdbWavesEffect>\n                  <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout\n              </a>\n              <!--a class=\"nav-link waves-light\"\n                  href=\"http://accounts.vapaee.com/index.php?route=account/logout&redirect=http://cardsandtokens.com/\" mdbWavesEffect>\n                  <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout\n              </a-->         \n          </li>\n      </ul>\n      <!-- User Account -->\n\n  </links>\n  <!-- Collapsible content -->\n\n</mdb-navbar>\n<!--/.Navbar-->\n\n<page-container>\n    <router-outlet></router-outlet>\n</page-container>"

/***/ }),

/***/ "./src/app/pages/root/root.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/root/root.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%; }\n  :host page-container {\n    display: block;\n    height: calc(100% - 71px);\n    overflow: auto; }\n"

/***/ }),

/***/ "./src/app/pages/root/root.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/root/root.page.ts ***!
  \*****************************************/
/*! exports provided: RootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootPage", function() { return RootPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_steem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/steem.service */ "./src/app/services/steem.service.ts");
/* harmony import */ var _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cnt.service */ "./src/app/services/cnt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RootPage = /** @class */ (function () {
    function RootPage(vapaee, app, cnt, steem) {
        this.vapaee = vapaee;
        this.app = app;
        this.cnt = cnt;
        this.steem = steem;
    }
    RootPage.prototype.ngOnInit = function () {
    };
    RootPage.prototype.printData = function () {
        console.log("Userdata", this.cnt.userdata.data);
        console.log(this.cnt);
    };
    RootPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'root-page',
            template: __webpack_require__(/*! ./root.page.html */ "./src/app/pages/root/root.page.html"),
            styles: [__webpack_require__(/*! ./root.page.scss */ "./src/app/pages/root/root.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _services_cnt_service__WEBPACK_IMPORTED_MODULE_4__["CntService"],
            _services_steem_service__WEBPACK_IMPORTED_MODULE_3__["SteemService"]])
    ], RootPage);
    return RootPage;
}());



/***/ }),

/***/ "./src/app/pages/steem-connect/steem-connect.page.css":
/*!************************************************************!*\
  !*** ./src/app/pages/steem-connect/steem-connect.page.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/steem-connect/steem-connect.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/steem-connect/steem-connect.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80vh\">\n    <div [hidden]=\"timeout\" class=\"flex-center flex-column animated fadeIn\">\n\n        <h1 class=\"mb-4\">Connecting to Steem</h1>\n        <div class=\"text-muted\" style=\"width: 50vw;\">\n          <div class=\"progress primary-color-dark\">\n              <div class=\"indeterminate\"></div>\n          </div>\n        </div>\n    </div>\n    <div [hidden]=\"!timeout\" class=\"flex-center flex-column animated fadeIn\">\n        <h1 class=\"mb-4\">Conection Time Out !!</h1>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/steem-connect/steem-connect.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/steem-connect/steem-connect.page.ts ***!
  \***********************************************************/
/*! exports provided: SteemConnectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteemConnectPage", function() { return SteemConnectPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_steem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/steem.service */ "./src/app/services/steem.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SteemConnectPage = /** @class */ (function () {
    function SteemConnectPage(vapaee, app, steem) {
        this.vapaee = vapaee;
        this.app = app;
        this.steem = steem;
    }
    SteemConnectPage.prototype.ngOnInit = function () {
        /// http://localhost:4200/steemconnect?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXBwIiwicHJveHkiOiJ2YXBhZWUiLCJ1c2VyIjoidml0ZXJibyIsInNjb3BlIjpbInZvdGUiLCJjb21tZW50Il0sImlhdCI6MTUzMjIyMjIxNCwiZXhwIjoxNTMyODI3MDE0fQ.VXH1wMRTdDA1TDUHUp1XkY6gjsQAK5d7wpbboa_Pps8&expires_in=604800&username=viterbo
        var _this = this;
        var params = new URL(window.location.href).searchParams;
        var access_token = params.get('access_token');
        var expires_in = params.get('expires_in');
        var account = params.get('username');
        this.steem.setCredentials({
            accessToken: access_token,
            expiresIn: expires_in,
            account: account
        });
        this.steem.waitLogged.then(function () {
            _this.app.navigate("profile");
            _this.timeout = false;
            clearInterval(_this.redirecting);
        });
        console.log("SteemConnectPage.ngOnInit() this.steem.waitTimeout.then(() => ....");
        this.steem.waitTimeout.then(function () {
            console.log("SteemConnectPage.ngOnInit() recibí un time out");
            _this.timeout = true;
            _this.redirecting = window.setTimeout(function () {
                _this.app.navigate("home");
            }, 2000);
        });
    };
    SteemConnectPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'steem-connect-page',
            template: __webpack_require__(/*! ./steem-connect.page.html */ "./src/app/pages/steem-connect/steem-connect.page.html"),
            styles: [__webpack_require__(/*! ./steem-connect.page.css */ "./src/app/pages/steem-connect/steem-connect.page.css")]
        }),
        __metadata("design:paramtypes", [_services_vapaee_user_service__WEBPACK_IMPORTED_MODULE_1__["VapaeeUserService"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _services_steem_service__WEBPACK_IMPORTED_MODULE_3__["SteemService"]])
    ], SteemConnectPage);
    return SteemConnectPage;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService, LoadingOverall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingOverall", function() { return LoadingOverall; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.service */ "./src/app/services/dom.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppService = /** @class */ (function () {
    function AppService(vapaee, router, route, dom) {
        var _this = this;
        this.vapaee = vapaee;
        this.dom = dom;
        this.prev_state = "none";
        this.device = {};
        this.router = router;
        this.route = route;
        this.router.events.subscribe(function (event) {
            if (event.constructor.name === "NavigationEnd") {
                _this.prev_state = _this.state;
                _this.path = _this.router.url;
                _this.state = _this.getDeepestChild(_this.route.root).snapshot.data.state;
                _this.checkRedirect();
            }
        });
        this.vapaee.afterReady.then(function () {
            _this.checkRedirect();
        }, function () { });
    }
    AppService.prototype.detectBrowser = function () {
        var _window = window;
        // Opera 8.0+
        this.isOpera = (!!_window.opr && !!_window.opr.addons) || !!_window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        // Firefox 1.0+
        this.isFirefox = typeof _window.InstallTrigger !== 'undefined';
        // Safari 3.0+ "[object HTMLElementConstructor]" 
        this.isSafari = /constructor/i.test(_window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!_window['safari'] || _window.safari.pushNotification);
        // Internet Explorer 6-11
        this.isIE = /*@cc_on!@*/ false || !!_window.document.documentMode;
        // Edge 20+
        this.isEdge = !_window.isIE && !!_window.StyleMedia;
        // Chrome 1+
        this.isChrome = !!_window.chrome && !!_window.chrome.webstore;
        // Blink engine detection
        this.isBlink = (this.isChrome || this.isOpera) && !!_window.CSS;
        console.log("isOpera", this.isOpera);
        console.log("isFirefox", this.isFirefox);
        console.log("isSafari", this.isSafari);
        console.log("isIE", this.isIE);
        console.log("isEdge", this.isEdge);
        console.log("isChrome", this.isChrome);
        console.log("isBlink", this.isBlink);
    };
    AppService.prototype.init = function (appcomp) {
        this.detectBrowser();
        this.dom.appendComponentToBody(LoadingOverall);
    };
    AppService.prototype.getDeepestChild = function (node) {
        if (node.firstChild) {
            return this.getDeepestChild(node.firstChild);
        }
        else {
            return node;
        }
    };
    AppService.prototype.onWindowsResize = function () {
        this.device.small = false;
        this.device.tiny = false;
        this.device.height = window.innerHeight;
        this.device.width = window.innerWidth;
        var w = window.innerWidth;
        var h = window.innerHeight;
        if (w / h > 1) {
            this.device.portrait = false;
            this.device.wide = true;
        }
        else {
            this.device.portrait = true;
            this.device.wide = false;
        }
        if (this.device.portrait && h < 700) {
            this.device.small = true;
        }
        if (this.device.wide && w < 800) {
            this.device.small = true;
        }
        if (w < 650 || h < 700) {
            this.device.small = true;
        }
        if (w < 560 || h < 650) {
            this.device.tiny = true;
        }
    };
    AppService.prototype.navigate = function (path) {
        this.router.navigate([path]);
    };
    AppService.prototype.checkRedirect = function () {
        // console.log("app.checkRedirect()....  State: ", this.prev_state, this.state, "ready:", this.vapaee.ready);
        if (this.vapaee.ready) {
            if (this.state === 'loading') {
                if (this.vapaee.logged || !this.getStateData(this.prev_state).logged) {
                    // console.log("app.checkRedirect() ta todo bien REDIRECTION --> ", this.prev_state);
                    this.router.navigate([this.prev_state]);
                }
                else {
                    // console.log("app.checkRedirect() no esta logueado REDIRECTION --> home (attempt to enter state '"+this.prev_state+"' not beign logged)");
                    this.router.navigate(['home']);
                }
            }
            else {
                if (this.getStateData().logged && !this.vapaee.logged) {
                    // console.log("app.checkRedirect() REDIRECTION --> home (attempt to enter state '"+this.state+"' not beign logged)");
                    this.router.navigate(['home']);
                }
            }
        }
        else {
            if (this.getStateData().logged) {
                // console.log("app.checkRedirect() El estado '"+this.state+"' necesita que estemos logueados. -----> Loading ");
                this.router.navigate(['loading']);
            }
            else {
                // console.log("app.checkRedirect() El estado '"+this.state+"' NO necesita que estemos logueados");
            }
        }
    };
    AppService.prototype.onCardClose = function () {
        this.router.navigate(['cards']);
    };
    AppService.prototype.setLoading = function (turn) {
        if (turn === void 0) { turn = true; }
        this.loading = turn;
    };
    AppService.prototype.urlStartsWith = function (str) {
        if (typeof str == "number")
            str = "" + str;
        if (typeof str == "string") {
            return window.location.pathname.indexOf(str) == 0;
        }
        else {
            return false;
        }
    };
    AppService.prototype.urlEndsWith = function (str) {
        if (typeof str == "number")
            str = "" + str;
        if (typeof str == "string") {
            var len = window.location.pathname.length;
            var substr = window.location.pathname.substr(len - str.length, str.length);
            return substr.indexOf(str) == 0;
        }
        else {
            return false;
        }
    };
    AppService.prototype.stateStartsWith = function (str) {
        if (!this.state)
            return false;
        if (typeof str == "number")
            str = "" + str;
        if (typeof str == "string") {
            return this.state.indexOf(str) == 0;
        }
        else {
            return false;
        }
    };
    AppService.prototype.prevStateStartsWith = function (str) {
        if (!this.prev_state)
            return false;
        if (typeof str == "number")
            str = "" + str;
        if (typeof str == "string") {
            return this.prev_state.indexOf(str) == 0;
        }
        else {
            return false;
        }
    };
    AppService.prototype.getStateData = function (name) {
        name = name || this.getDeepestChild(this.route.root).snapshot.data.state;
        var data = this.getRouteData(name, this.router.config);
        return data;
    };
    AppService.prototype.getRouteData = function (name, obj) {
        var found = null;
        for (var i = 0; !found && i < obj.length; i++) {
            if (obj[i].data.state === name) {
                found = obj[i].data;
            }
            else if (obj[i].children) {
                found = this.getRouteData(name, obj[i].children);
            }
        }
        return found;
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_vapaee_user_service__WEBPACK_IMPORTED_MODULE_2__["VapaeeUserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _dom_service__WEBPACK_IMPORTED_MODULE_3__["DomService"]])
    ], AppService);
    return AppService;
}());

var LoadingOverall = /** @class */ (function () {
    function LoadingOverall(app) {
        this.app = app;
    }
    LoadingOverall = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loading-overall',
            template: "\n    <div [hidden]=\"!app.loading\" class=\"animated fadeIn\" id=\"loading-overlay\" style=\"position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.6); z-index: 10000; color: white;\">\n        <div style=\"text-align: center; width: 100%; position: absolute; top: 40%; margin-top: -50px;\">\n            <h1>Proccessing...</h1>\n        </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [AppService])
    ], LoadingOverall);
    return LoadingOverall;
}());



/***/ }),

/***/ "./src/app/services/bg-box.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/bg-box.service.ts ***!
  \********************************************/
/*! exports provided: BgBoxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgBoxService", function() { return BgBoxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _userdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userdata.service */ "./src/app/services/userdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BgBoxService = /** @class */ (function () {
    function BgBoxService(http, data, userdata) {
        this.http = http;
        this.data = data;
        this.userdata = userdata;
        this.waitReady = null;
        this.waitData = null;
    }
    BgBoxService.prototype.getCopyById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var copy = _this.userdata.data.copy["id-" + id];
            resolve(copy);
        });
    };
    BgBoxService.prototype.init = function () {
    };
    BgBoxService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _userdata_service__WEBPACK_IMPORTED_MODULE_3__["UserdataService"]])
    ], BgBoxService);
    return BgBoxService;
}());



/***/ }),

/***/ "./src/app/services/cnt.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/cnt.service.ts ***!
  \*****************************************/
/*! exports provided: CntService, CardDeploy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CntService", function() { return CntService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDeploy", function() { return CardDeploy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.service */ "./src/app/services/dom.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _userdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userdata.service */ "./src/app/services/userdata.service.ts");
/* harmony import */ var _bg_box_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bg-box.service */ "./src/app/services/bg-box.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _vapaee_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
/* harmony import */ var _deploy_comp_label_label_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../deploy/comp/label/label.service */ "./src/app/deploy/comp/label/label.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CntService = /** @class */ (function () {
    function CntService(http, data, dom, userdata, sanitizer, box, app, vapaee, labels) {
        this.http = http;
        this.data = data;
        this.dom = dom;
        this.userdata = userdata;
        this.sanitizer = sanitizer;
        this.box = box;
        this.app = app;
        this.vapaee = vapaee;
        this.labels = labels;
        this.ready = false;
        this.waitReady = null;
        this.waitData = null;
        this.user = { inventory: {} };
        this.cards = [];
        this.card = {};
        this.albums = [];
        this.album = {};
        this.specs = [];
        this.spec = {};
        this.ready = false;
        this.getAllSpecs();
    }
    CntService.prototype.print = function () {
        console.log(this.userdata.data);
    };
    CntService.prototype.init = function (dev) {
        var _this = this;
        this.device = dev;
        if (!this.ready) {
            this.waitReady = new Promise(function (resolve) {
                _this.dom.appendComponentToBody(CardDeploy);
                _this.ready = true;
                resolve();
            });
            this.waitData = new Promise(function (resolve) {
                _this.userdata.waitData.then(function () {
                    _this.proccessData();
                    resolve();
                });
            });
            this.waitData.then(function () { }, function (e) {
                console.log("CntService.waitDara rejected");
            });
            this.when_FB = new Promise(function (resolve, reject) {
                when_FB.then(resolve, reject);
            });
            this.when_FB.then(function () {
                // this.updateFB();
            }, function () { });
        }
        return this.waitReady;
    };
    CntService.prototype.updateFB = function () {
        console.log("CNT.updateFB()");
        this.when_FB.then(function (FB) {
            console.assert(FB);
            console.assert(FB.XFBML);
            console.assert(FB.XFBML.parse);
            console.log("CNT.updateFB() PARSE !!!!!!!!!!!!!");
            FB.XFBML.parse();
        });
    };
    // ------------------------------------------------------------------------------------------
    // las siguientes funciones sirven para traer datos del usuario -----------------------------
    CntService.prototype.proccessData = function () {
        // Containers
        this.userdata.data.container = {};
        for (var i_1 in this.userdata.data.collection) {
            var col = this.userdata.data.collection[i_1];
            var album = this.userdata.data.album["id-" + col.album.id];
            col.album = album;
            this.userdata.data.container["id-" + col.id] = col;
        }
        for (var i_2 in this.userdata.data.inventory) {
            var inv = this.userdata.data.inventory[i_2];
            this.userdata.data.container["id-" + inv.id] = inv;
        }
        for (var i_3 in this.userdata.data.container) {
            var inv = this.userdata.data.container[i_3];
            inv.slots = [];
        }
        // Items
        this.userdata.data.item = {};
        for (var i_4 in this.userdata.data.copy) {
            var col = this.userdata.data.copy[i_4];
            this.userdata.data.item["id-" + col.id] = col;
        }
        // Collectibles
        this.userdata.data.collectible = {};
        for (var i in this.userdata.data.card) {
            var card = this.userdata.data.card[i];
            this.userdata.data.collectible["id-" + card.id] = card;
        }
        // Cards & editions
        for (var i_5 in this.userdata.data.edition) {
            var edition = this.userdata.data.edition[i_5];
            var collectible = this.userdata.data.collectible["id-" + edition.collectible.id];
            if (collectible.edition.id == edition.id) {
                collectible.edition = edition;
            }
            collectible.editions = collectible.editions || {};
            collectible.editions["id-" + edition.id] = edition;
        }
        // put Inventory service in global variable user.inventory
        for (var i_6 in this.userdata.data.inventory) {
            var inventory = this.userdata.data.inventory[i_6];
            var app = this.userdata.data.app["id-" + inventory.app.id];
            inventory.app = app;
            this.user.inventory = inventory;
        }
        for (var i in this.userdata.data.copy) {
            var copy = this.userdata.data.copy[i];
            var collectible = this.userdata.data.collectible["id-" + copy.collectible.id];
            var edition = this.userdata.data.edition["id-" + copy.edition.id];
            copy.collectible = collectible;
            copy.edition = edition;
            copy.thumbnail = copy.edition.preview.images.thumbnail;
        }
        for (var i in this.userdata.data.slot) {
            var slot = this.userdata.data.slot[i];
            var container = this.userdata.data.container["id-" + slot.container.id];
            var item = this.userdata.data.item["id-" + slot.item.id];
            slot.container = container;
            slot.item = item;
            slot.container.slots[slot.index] = slot;
            console.assert(slot.container.slots.length > slot.index, slot.container.slots);
        }
        //----- slug
        this.userdata.data.slug = {};
        this.userdata.data.slug.container = {};
        for (var i_7 in this.userdata.data.collection) {
            var coll = this.userdata.data.collection[i_7];
            this.userdata.data.slug.container[coll.album.slug] = coll;
        }
        for (var i_8 in this.userdata.data.inventory) {
            var inv = this.userdata.data.inventory[i_8];
            this.userdata.data.slug.container[inv.app.slug] = inv;
        }
        this.userdata.data.slug.collectible = {};
        for (var i_9 in this.userdata.data.collectible) {
            var coll = this.userdata.data.collectible[i_9];
            this.userdata.data.slug.collectible[coll.slug] = coll;
        }
        this.userdata.data.slug.publisher = {};
        for (var i_10 in this.userdata.data.publisher) {
            var pub = this.userdata.data.publisher[i_10];
            this.userdata.data.slug.publisher[pub.slug] = pub;
        }
        // overwrite global data --------------
        // this.cards = [];
        // this.card = {};
        // this.albums = [];
        // this.album = {};
        //
        this.userdata_to_global("card");
        this.userdata_to_global("album");
        console.log('-------- data proccessed ----------');
        console.log(this.userdata.data);
        console.log('-----------------------------------');
    };
    CntService.prototype.userdata_to_global = function (table) {
        var tables = table + "s";
        for (var i in this.userdata.data[table]) {
            var entry = this.userdata.data[table][i];
            var before = this[table][entry.slug];
            if (before) {
                var index = this[tables].indexOf(before);
                this[table][entry.slug] = entry;
                if (index >= 0) {
                    this[tables][index] = entry;
                }
                else {
                    console.error("ERROR?: ", [table, index, entry, before, this[tables]]);
                    this[tables].push(entry);
                }
            }
            else {
                this[table][entry.slug] = entry;
                this[tables].push(entry);
            }
        }
    };
    CntService.prototype.getCopyById = function (id) {
        var _this = this;
        console.log("CntService.getCopyById()", id);
        return this.box.getCopyById(id).then(function (copy) {
            var collectible = _this.userdata.data.collectible["id-" + copy.collectible.id];
            var edition = _this.userdata.data.edition["id-" + copy.edition.id];
            return Object.assign({}, copy, {
                collectible: collectible,
                edition: edition
            });
        });
    };
    CntService.prototype.swapLocaly = function (from, fromi, to, toi) {
        var slot_to = this.userdata.data.container["id-" + to].slots[toi];
        var slot_from = this.userdata.data.container["id-" + from].slots[fromi];
        delete this.userdata.data.container["id-" + to].slots[toi];
        delete this.userdata.data.container["id-" + from].slots[fromi];
        if (slot_from) {
            slot_from.container = this.userdata.data.container["id-" + to];
            slot_from.index = toi;
            slot_from.container.slots[slot_from.index] = slot_from;
        }
        if (slot_to) {
            slot_to.container = this.userdata.data.container["id-" + from];
            slot_to.index = fromi;
            slot_to.container.slots[slot_to.index] = slot_to;
        }
    };
    CntService.prototype.swapSlots = function (from_slug, fromi, to_slug, toi) {
        var _this = this;
        var from = this.userdata.data.slug.container[from_slug].id;
        var to = this.userdata.data.slug.container[to_slug].id;
        console.log("CntService.swapSlots() from (" + from_slug + "," + fromi + ") to (" + to_slug + "," + toi + ")");
        this.app.setLoading(true);
        this.swapLocaly(from, fromi, to, toi);
        return this.http.post("//api.cardsandtokens.com/swap/slots?access_token=" + this.userdata.access_token, {
            from: from, fromi: fromi, to: to, toi: toi
        }).toPromise().then(function (r) {
            if (r.error) {
                console.error(r);
                _this.swapLocaly(to, toi, from, fromi);
                _this.app.setLoading(false);
            }
            else {
                if (from != to) {
                    // alert("HAY QUE RECALCULAR");
                    var coll_id = 0;
                    if (_this.userdata.data.collection["id-" + from]) {
                        coll_id = from;
                    }
                    else if (_this.userdata.data.collection["id-" + to]) {
                        coll_id = to;
                    }
                    else {
                        console.error("ERROR? swap sin involucrar un collection? ", [from, to, _this.userdata.data.collection]);
                    }
                    if (coll_id > 0) {
                        // alert("coll_id: " + coll_id);
                        _this.getCollectionStats(coll_id).then(function (coll) {
                            _this.app.setLoading(false);
                        });
                    }
                }
                else {
                    _this.app.setLoading(false);
                }
            }
        }).catch(function (e) {
            _this.app.setLoading(false);
            _this.swapLocaly(to, toi, from, fromi);
        });
    };
    CntService.prototype.claimDailyPrize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("CntService.getDailyPrize()");
            var url = "http://api.cardsandtokens.com/dailyprize/claim?access_token=" + _this.userdata.access_token;
            _this.http.get(url).toPromise().then(function (r) {
                if (r.error) {
                    alert(r.error);
                    reject(r.error);
                    return;
                }
                _this.userdata.data.slot["id-" + r.slot.id] = r.slot;
                _this.userdata.data.copy["id-" + r.copy.id] = r.copy;
                _this.userdata.data.card["id-" + r.card.id] = r.card;
                _this.userdata.data.edition["id-" + r.edition.id] = r.edition;
                _this.proccessData();
                _this.getUserInventory("cards-and-tokens").then(function (inventory) {
                    resolve(inventory);
                }, reject);
            }, reject);
        });
    };
    CntService.prototype.getDailyPrizeCountdown = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userdata.waitData.then(function () {
                _this.userdata.data.dayliprice = {};
                console.log("CntService.getDailyPrize()");
                var url = "http://api.cardsandtokens.com/dailyprize/countdown?access_token=" + _this.userdata.access_token;
                _this.http.get(url).toPromise().then(function (r) {
                    if (r.sec == 0) {
                        _this.userdata.data.dayliprice.claimable = true;
                    }
                    else {
                        _this.userdata.data.dayliprice.remaining = r.sec - 1;
                    }
                    resolve(r.sec);
                });
            });
        });
    };
    //http://api.cardsandtokens.com/dailyprize?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXBwIiwicHJveHkiOiJ2YXBhZWUiLCJ1c2VyIjoidml0ZXJibyIsInNjb3BlIjpbImxvZ2luIiwib2ZmbGluZSIsInZvdGUiLCJjb21tZW50IiwiZGVsZXRlX2NvbW1lbnQiLCJjb21tZW50X29wdGlvbnMiXSwiaWF0IjoxNTMzMjczODMyLCJleHAiOjE1MzM4Nzg2MzJ9.7oVE9obJJNb_g2WrWqn_xDOAfP7zRx7PNTPdR64juQg
    // ------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------
    // Las siguientes funciones sirven para traer datos para deployar cartas y álbumes (sin datos del usuario)
    CntService.prototype.fetchCard = function (slug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // resolve(this.test_scroll);
            // resolve(this.test_vslugeo);
            // resolve(this.test_md);
            // resolve(this.test_menu);
            if (slug.substr(0, 4) == "test") {
                var file = "./assets/cards/" + slug + ".json";
                _this.getJSON(file).then(function (data) {
                    resolve(data);
                }).catch(function (er) {
                    console.error("ERROR: file not found: " + file);
                });
            }
            else {
                _this.data.select("card", {
                    slug: slug
                }, {
                    edition: true,
                    details: true
                }).then(function (data) {
                    console.assert(Array.isArray(data.card), data.card);
                    var list = data.card;
                    if (list.length == 1) {
                        resolve(list[0]);
                    }
                    else {
                        reject();
                    }
                }).catch(function (er) {
                    console.error("ERROR: ", er);
                });
            }
        });
    };
    CntService.prototype.updateCollectibleVotes = function (slug, votes) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log("CntService.updateCollectibleVotes(" + slug + "," + votes + ")");
            var url = "http://api.cardsandtokens.com/update/collectible/votes";
            _this.http.post(url, {
                slug: slug, votes: votes
            }).toPromise().then(function (r) {
                var card = r.card;
                var index = _this.cards.indexOf(_this.card[card.slug]);
                if (index >= 0) {
                    _this.cards[index] = card;
                }
                else {
                    _this.cards.push(card);
                }
                _this.card[card.slug] = card;
                if (_this.userdata.logged) {
                    _this.userdata.data.card["id-" + card.id] = card;
                    _this.proccessData();
                    var collectible = _this.card[slug];
                    for (var i in _this.userdata.data.slot) {
                        var slot = _this.userdata.data.slot[i];
                        if (slot.data.collectible == collectible.id) {
                            if (_this.userdata.logged && _this.userdata.data.collection["id-" + slot.container.id]) {
                                _this.getCollectionStats(slot.container.id);
                            }
                        }
                    }
                }
                resolve(r);
            });
        });
    };
    CntService.prototype.fetchAlbum = function (slug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.data.select("album", {
                slug: slug
            }, {
                details: true
            }).then(function (data) {
                console.assert(Array.isArray(data.album), data.album);
                var list = data.album;
                if (list.length == 1) {
                    resolve(list[0]);
                }
                else {
                    reject();
                }
            }).catch(function (er) {
                console.error("ERROR: ", er);
            });
        });
    };
    CntService.prototype.getUserInventory = function (slug) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.vapaee.afterReady.then(function () {
                if (_this.userdata.logged) {
                    for (var i in _this.userdata.data.inventory) {
                        var inventory = _this.userdata.data.inventory[i];
                        if (inventory.app.slug == slug) {
                            return resolve(inventory);
                        }
                    }
                }
                return resolve({});
            }, function (e) { });
        });
    };
    CntService.prototype.getAllInstances = function (table, name, params) {
        var _this = this;
        return this.data.getAll(table, params).then(function (result) {
            var names = name + "s";
            _this[names] = result[table];
            for (var i = 0; i < _this[names].length; i++) {
                var obj = _this[names][i];
                _this[name][obj.slug] = obj;
            }
            return _this[names];
        });
    };
    CntService.prototype.getAllCards = function () {
        return this.getAllInstances("card", "card", { "edition": true });
    };
    CntService.prototype.getAllSpecs = function () {
        return this.getAllInstances("container_spec", "spec");
    };
    CntService.prototype.getAllAlbums = function () {
        return this.getAllInstances("album", "album");
    };
    CntService.prototype.getCardBySlug = function (slug) {
        var _this = this;
        if (this.card[slug]) {
            console.log("getCardBySlug cacheado ", this.card[slug]);
            return Promise.resolve(this.card[slug]);
        }
        else {
            return this.fetchCard(slug).then(function (card) {
                console.log("getCardBySlug select ", card);
                _this.card[slug] = card;
                var search = _this.cards.map(function (e) { return e.slug != slug; });
                if (search.length == 0) {
                    _this.cards.push(card);
                }
                return card;
            });
        }
    };
    CntService.prototype.getAlbumCollectionBySlug = function (slug) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.waitData.then(function () {
                for (var i in _this.userdata.data.collection) {
                    var coll = _this.userdata.data.collection[i];
                    var album = _this.userdata.data.album["id-" + coll.album.id];
                    if (album.slug == slug) {
                        return resolve(coll);
                    }
                }
            });
        });
    };
    ;
    CntService.prototype.updateCollectionSteemPoints = function (coll_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.waitData.then(function () {
                var coll = _this.userdata.data.collection["id-" + coll_id];
                // console.error("HAY QUE PEGARLE A LA BASE DE DATOS PARA QUE ACTUALICE LOS PUNTOS Y POSICION DE LA COLLECTION coll_id");
                return _this.http.post("//api.cardsandtokens.com/update_collection?access_token=" + _this.userdata.access_token, {
                    collection: coll_id
                }).toPromise().then(function (r) {
                    if (r.error) {
                        console.error(r);
                    }
                    else {
                        var new_coll = r.collection;
                        console.log("RESULTADO DE UPDATE COLLECTION POINTS: ", [r.collection]);
                        _this.userdata.data.collection["id-" + new_coll.id] = new_coll;
                        _this.proccessData();
                        // Se está asumiendo que el album que se está visualizando es el asociado a new_coll y no tiene porque ser así
                        console.log("Esto hay que sacarlo de acá");
                        _this.labels.setLabel("album-ranking", "Ranking: " + new_coll.position);
                        _this.labels.setLabel("album-points", "Points: " + new_coll.points);
                        resolve(r.collection);
                    }
                }).catch(function (e) {
                });
            });
        });
    };
    CntService.prototype.calculateCollectionPoints = function (coll_id) {
        var votes = 0;
        if (this.userdata.logged) {
            for (var i in this.userdata.data.slot) {
                var slot = this.userdata.data.slot[i];
                if (slot.container.id == coll_id) {
                    var collectible_id = slot.data.collectible;
                    var collectible = this.userdata.data.collectible["id-" + collectible_id];
                    votes += collectible.steem_votes;
                    // console.log("steem_votes: ", votes, "(+"+collectible.steem_votes+")", [slot]);
                }
            }
        }
        return votes;
    };
    CntService.prototype.getCollectionStats = function (coll_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.waitData.then(function () {
                var coll = _this.userdata.data.collection["id-" + coll_id];
                var real_points = _this.calculateCollectionPoints(coll_id);
                if (coll.points != real_points) {
                    _this.updateCollectionSteemPoints(coll_id).then(function (new_coll) {
                        resolve(new_coll);
                    });
                }
                else {
                    resolve(coll);
                }
            });
        });
    };
    CntService.prototype.getAlbumCompleteBySlug = function (slug) {
        var _this = this;
        if (this.album[slug] && this.album[slug].deploy) {
            // console.log("getAlbumBySlug cacheado ", this.album[slug]);
            return Promise.resolve(this.album[slug]);
        }
        else {
            return this.fetchAlbum(slug).then(function (album) {
                // console.log("getAlbumBySlug select ", album);
                var before = _this.album[slug];
                var index = _this.albums.indexOf(before);
                _this.album[slug] = album;
                if (index >= 0) {
                    _this.albums[index] = album;
                }
                else {
                    _this.albums.push(album);
                }
                return album;
            });
        }
    };
    CntService.prototype.getJSON = function (file) {
        console.log("getJSON()", file);
        return this.http.get(file).toPromise();
    };
    CntService.prototype.deployCard = function (card, img) {
        var _this = this;
        console.log("------------ deployCard -------------");
        console.log("card: ", card, img);
        console.log("-------------------------------------");
        var rect = img.getBoundingClientRect();
        // console.log(rect.top, rect.right, rect.bottom, rect.left);
        this.waitReady.then(function () {
            var _deploy = {};
            _deploy.href = window.location.origin + "/deploy/card/" + card.slug;
            _deploy.style = {};
            _deploy.show = {};
            _deploy.card = card;
            _deploy.preload = card.edition.preload;
            _deploy.closebtn = {};
            _deploy.closebtn.style = {
                "z-index": "9",
                "top": "2px",
                "right": "0px",
                "position": "fixed",
                "display": "block",
                "opacity": "0",
                "transition-duration": "1s",
                "transition-property": "opacity",
                "transition-timing-function": "ease-in-out"
            };
            _deploy.front = {};
            _deploy.front.style = {
                "z-index": "11",
                "top": rect.top + "px",
                "left": rect.left + "px",
                "height": rect.height + "px",
                "width": rect.width + "px",
                "position": "fixed",
                "display": "block",
                "background-size": "contain",
                "background-image": "url(" + card.edition.preview.images.fullsize + "), url(" + card.edition.preview.images.thumbnail + ")",
                "transition-duration": "1s",
                "transition-property": "top left height width",
                "transition-timing-function": "ease-in-out"
            };
            _deploy.body = {};
            _deploy.body.style = {
                "z-index": "8",
                "top": (_this.device.height * 0.45) + "px",
                "left": (_this.device.width * 0.45) + "px",
                "bottom": (_this.device.height * 0.45) + "px",
                "right": (_this.device.width * 0.45) + "px",
                "position": "fixed",
                "display": "block",
                "opacity": "0",
                "background-color": card.edition.preview.colors.bg,
                "transition-duration": "1s",
                "transition-property": "top left height width opacity",
                "transition-timing-function": "ease-in-out"
            };
            _deploy.frame = {
                src: null
            };
            _deploy.frame.style = {
                "z-index": "10",
                "top": "30px",
                "left": "30px",
                "bottom": "30px",
                "right": "30px",
                "width": "auto",
                "position": "absolute",
                "opacity": 0,
                "transition-duration": "1s",
                "transition-property": "opacity",
                "transition-timing-function": "ease-in-out",
                "box-shadow": "1px 1px 10px 2px rgba(0,0,0,0.5)"
            };
            setTimeout(function () {
                var W = 370;
                var H = 520;
                _deploy.front.style.top = (_this.device.height - H) * 0.5 + "px";
                _deploy.front.style.left = (_this.device.width - W) * 0.5 + "px";
                _deploy.front.style.height = H + "px";
                _deploy.front.style.width = W + "px";
            }, 50);
            setTimeout(function () {
                _deploy.body.style.opacity = 1;
                _deploy.body.style.display = "block";
            }, 1000);
            setTimeout(function () {
                _deploy.body.style.left = "0px";
                _deploy.body.style.right = "0px";
            }, 1020);
            setTimeout(function () {
                _deploy.body.style.top = "0px";
                _deploy.body.style.bottom = "0px";
                var W = 370 * 0.5;
                var H = 520 * 0.5;
                _deploy.front.style.top = (_this.device.height - H - 10) + "px";
                _deploy.front.style.left = (_this.device.width - W - 10) + "px";
                _deploy.front.style.height = H + "px";
                _deploy.front.style.width = W + "px";
                _this.updateFB();
            }, 2000);
            setTimeout(function () {
                var src = window.location.origin + "/embedded/card/" + card.slug;
                var safeUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(src);
                _deploy.frame.src = safeUrl;
                // console.log("---->", _deploy.frame.src);
                _deploy.frame.style.opacity = 1;
                _deploy.closebtn.style.opacity = 1;
                // createStatsHeader(carta.attr("id"));
                _deploy.show.fblikes = false;
                _deploy.show.steemvotes = true;
            }, 3000);
            _deploy.steem = card.steem;
            _deploy.steem.votes = card.steem_votes;
            _deploy.prevhref = window.location.href;
            window.history.pushState({}, "", _deploy.href);
            _this.deploy = _deploy;
        });
    };
    CntService.prototype.deployAlbum = function (card, img) {
        alert("WHAT?????");
    };
    CntService.prototype.closeCard = function () {
        console.log("this.deploy.prevhref", this.deploy.prevhref);
        if (this.deploy.prevhref != this.deploy.href) {
            window.history.pushState({}, "", this.deploy.prevhref);
        }
        else {
            this.app.onCardClose();
        }
        this.deploy = null;
    };
    // ------------------------------------------------------------------------------------------
    CntService.prototype.createCard = function (model, deploy, preview) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log("CntService.createCard()");
            var url = "http://api.cardsandtokens.com/crear_carta?access_token=" + _this.userdata.access_token;
            _this.http.post(url, {
                model: model, deploy: deploy, preview: preview
            }).toPromise().then(function (r) {
                console.log("CARTA CREADA", r);
                resolve(r);
            });
        });
    };
    CntService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _dom_service__WEBPACK_IMPORTED_MODULE_3__["DomService"],
            _userdata_service__WEBPACK_IMPORTED_MODULE_5__["UserdataService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _bg_box_service__WEBPACK_IMPORTED_MODULE_6__["BgBoxService"],
            _app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"],
            _vapaee_user_service__WEBPACK_IMPORTED_MODULE_8__["VapaeeUserService"],
            _deploy_comp_label_label_service__WEBPACK_IMPORTED_MODULE_9__["LabelService"]])
    ], CntService);
    return CntService;
}());

var CardDeploy = /** @class */ (function () {
    function CardDeploy(cnt) {
        this.cnt = cnt;
    }
    CardDeploy.prototype.close = function () {
        this.cnt.closeCard();
    };
    CardDeploy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card-deploy',
            styles: [".stats_container {position: fixed; top: 3px; left: 30px; z-index: 9;}"],
            template: "\n    <div *ngIf=\"cnt.deploy\">\n        <div class=\"body\" [ngStyle]=\"cnt.deploy.body.style\">\n            <div class=\"stats_container animated fadeIn\">\n                <steem-upvote-button [hidden]=\"!cnt.deploy.show.steemvotes\" [steemdata]=\"cnt.deploy.steem\" [card]=\"cnt.deploy.card\"></steem-upvote-button>\n                <div [hidden]=\"!cnt.deploy.show.fblikes\" class=\"fb-like\"\n                    [data-href]=\"cnt.deploy.href\"\n                    data-layout=\"button_count\" data-action=\"like\" data-show-faces=\"false\" data-share=\"true\"></div>\n            </div>\n            <div class=\"contenedor embed-responsive\" [ngStyle]=\"cnt.deploy.frame.style\">\n                <iframe [src]=\"cnt.deploy.frame.src\" class=\"embed-responsive-item\"></iframe>\n            </div>\n        </div>\n        <div class=\"close-cross cursor-pointer\" (click)=\"close()\" [ngStyle]=\"cnt.deploy.closebtn.style\">\n            <img src=\"/assets/btn-close.png\" />\n        </div>\n        <card-front [ngStyle]=\"cnt.deploy.front.style\">\n            \n        </card-front>\n        <div style=\"position: absolute; top:-3000px;left:-3000px; pointer-events:none; opacity: 0\">\n            <img *ngFor=\"let src of cnt.deploy.preload\" [src]=\"src\">\n        </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [CntService])
    ], CardDeploy);
    return CardDeploy;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.cache = {};
        this.request = {};
        this.URL = "http://api.cardsandtokens.com/";
    }
    DataService.prototype.proccess_object = function (obj) {
        // convierto en Date todos los strings con formato de dates en Date
        // "2017-01-13 14:58:19" o  "2017-01-13"
        var exp = /^\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d|\d\d\d\d-\d\d-\d\d$/;
        var data_exp = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
        var datetime_exp = /^(\d\d\d\d)-(\d\d)-(\d\d) (\d\d):(\d\d):(\d\d)$/;
        for (var prop in obj) {
            if (typeof obj[prop] == "object") {
                obj[prop] = this.proccess_object(obj[prop]);
            }
            if (typeof obj[prop] == "string" && exp.test(obj[prop])) {
                var date_matches = obj[prop].match(data_exp);
                if (date_matches) {
                    var date = new Date();
                    date.setFullYear(parseInt(date_matches[1]));
                    date.setMonth(parseInt(date_matches[2]) - 1);
                    date.setDate(parseInt(date_matches[3]));
                    obj[prop] = date;
                }
                else {
                    var datetime_matches = obj[prop].match(datetime_exp);
                    if (datetime_matches) {
                        var date = new Date();
                        date.setFullYear(parseInt(datetime_matches[1]));
                        date.setMonth(parseInt(datetime_matches[2]) - 1);
                        date.setDate(parseInt(datetime_matches[3]));
                        date.setHours(parseInt(datetime_matches[4]));
                        date.setMinutes(parseInt(datetime_matches[4]));
                        date.setSeconds(parseInt(datetime_matches[6]));
                        obj[prop] = date;
                    }
                    else {
                        console.log(prop, obj[prop], new Date(obj[prop]));
                        obj[prop] = new Date(obj[prop]);
                    }
                }
            }
        }
        return obj;
    };
    DataService.prototype.insert = function (table, item) {
        if (Array.isArray(item.deleted)) {
            for (var i in item.deleted) {
                var id = item.deleted[i];
                delete this.cache[table]["id-" + id];
            }
        }
        else {
            this.cache[table] = this.cache[table] || {};
            if (item._deleted_) {
                console.error("CHECK THIS OUT", table, item);
                delete this.cache[table]["id-" + item.id];
            }
            else {
                item = this.proccess_object(item);
                this.cache[table]["id-" + item.id] = item;
            }
        }
    };
    DataService.prototype.encode_object = function (obj) {
        // console.log("Data.encode_object(", [obj],")");
        for (var prop in obj) {
            // console.log("- prop:", prop, "value:", typeof obj[prop], obj[prop]);
            if (!obj[prop] && typeof obj[prop] == "object") {
                console.warn("prop: ", prop, "is NULL");
                continue;
            }
            if (typeof obj[prop] == "object" && typeof obj[prop].getDate == "function") {
                var v = obj[prop];
                var date = "";
                date += v.getFullYear() + "-" + (v.getMonth() + 1 < 9 ? "0" : "") + (v.getMonth() + 1) + "-" + (v.getDate() < 9 ? "0" : "") + (v.getDate()) + " ";
                date += (v.getHours() < 9 ? "0" : "") + (v.getHours()) + "-" + (v.getMinutes() + 1 < 9 ? "0" : "") + (v.getMinutes() + 1) + "-" + (v.getSeconds() < 9 ? "0" : "") + (v.getSeconds());
                console.log(prop, date);
                obj[prop] = date;
            }
            if (typeof obj[prop] == "object" && typeof obj[prop].getDate != "function") {
                obj[prop] = this.encode_object(obj[prop]);
            }
        }
        return obj;
    };
    DataService.prototype.make_request = function (method, path, obj, omited_table) {
        var _this = this;
        // console.log("Data.make_request("+method+", "+path+", "+omited_table+")");
        if (this.request[path]) {
            // console.log("Data.make_request("+method+", "+path+", "+omited_table+") tengo promise !!!!!!!!!!!!!!!");
        }
        else {
            var res = null;
            var rej = null;
            var pro = new Promise(function (_res, _rej) { res = _res; rej = _rej; });
            this.request[path] = { promise: pro, reject: rej, resolve: res };
            var url = this.URL + path;
            obj = this.encode_object(Object.assign({}, obj));
            var promise = null;
            switch (method) {
                case "GET":
                    promise = this.http.get(url).toPromise();
                    break;
                case "POST":
                    promise = this.http.post(url, obj).toPromise();
                    break;
                case "PUT":
                    promise = this.http.put(url, obj).toPromise();
                    break;
                case "DELETE":
                    promise = this.http.delete(url).toPromise();
                    break;
                default:
                    console.error("ERROR: no sach method ", method);
            }
            promise.then(function (data) {
                console.debug("------------------>", path, data);
                console.assert(typeof _this.request[path].resolve == "function");
                var Data = _this;
                var _proccess = function (_table, _data) {
                    var model = _data[table];
                    if (Array.isArray(model)) {
                        for (var i in model) {
                            Data.insert(_table, model[i]);
                        }
                    }
                    else if (model == null) {
                        // console.log("path, _table, model", path, table, model);
                    }
                    else {
                        Data.insert(_table, model);
                    }
                };
                if (omited_table) {
                    var __data = {};
                    __data[omited_table] = data;
                    _proccess(omited_table, __data);
                }
                else {
                    for (var table in data) {
                        _proccess(table, data);
                    }
                }
                _this.request[path].resolve(data);
                delete _this.request[path];
            }).catch(function (e) {
                console.error(e);
                _this.request[path].reject(e);
                delete _this.request[path];
                // ["defer:"+path].reject(e);
            });
        }
        return this.request[path].promise;
    };
    DataService.prototype.request_promise = function (method, path, obj, omited_table) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.make_request(method, path, obj, omited_table).then(function (a) {
                // console.debug("se resolvio" , method, path, obj, "-->", a);
                resolve(a);
            }).catch(function (e) {
                console.error(e);
                reject({ error: e, data: this });
            });
        });
    };
    DataService.prototype.use_cache_promise = function (method, path, table, id) {
        if (this.request[path]) {
            return this.request[path].promise;
        }
        else {
            return this.request_promise(method, path, null, table);
        }
    };
    DataService.prototype.getAll = function (table, params) {
        var url = table;
        if (params) {
            url = this.addParamsToUrl(url, params);
        }
        return this.request_promise('GET', url);
    };
    DataService.prototype.reload = function (table, id, params) {
        var path = table + "/" + id;
        delete this["defer:" + path];
        delete this["promise:" + path];
        return this.getByPk(table, id, params);
    };
    DataService.prototype.addParamsToUrl = function (url, params) {
        var first = true;
        for (var i in params) {
            url += (first ? "?" : "&") + i + "=" + encodeURIComponent(JSON.stringify(params[i]));
            first = false;
        }
        return url;
    };
    DataService.prototype.getByPk = function (table, id, params, use_cache) {
        if (typeof id != "number")
            if (typeof parseInt(id) != "number")
                console.warn("WARNING: me pasaste un id que no es un número", table, id);
        var url = table + "/" + id;
        if (params) {
            url = this.addParamsToUrl(url, params);
        }
        if (use_cache) {
            switch (typeof use_cache) {
                case "boolean":
                    return this.use_cache_promise('GET', url, table, id);
                case "function":
                    return this.use_cache_promise('GET', url, table, id).then(function (obj) {
                        if (use_cache(obj)) {
                            return obj;
                        }
                        else {
                            return this.request_promise('GET', url);
                        }
                    });
            }
        }
        return this.request_promise('GET', url, null, table);
    };
    DataService.prototype.select = function (table, conditions, params) {
        // console.log("select()", [table, conditions, params]);
        var url = table;
        url += "?select=" + encodeURIComponent(JSON.stringify(conditions));
        if (params) {
            for (var i in params) {
                url += "&" + i + "=" + encodeURIComponent(JSON.stringify(params[i]));
            }
        }
        return this.request_promise('GET', url);
    };
    DataService.prototype.create = function (table, obj) {
        return this.request_promise('POST', table, obj);
    };
    DataService.prototype.update = function (table, obj) {
        var path = table + "/" + obj.id;
        this["defer:" + path] = obj;
        return this.request_promise('PUT', path, obj);
    };
    DataService.prototype.delete = function (table, id) {
        if (typeof id == "object") {
            return this.request_promise('DELETE', table + "?select=" + encodeURIComponent(JSON.stringify(id)));
        }
        else {
            var path = table + "/" + id;
            delete this["defer:" + path];
            return this.request_promise('DELETE', path);
        }
    };
    DataService.prototype.deleteAll = function (table) {
        return this.request_promise('DELETE', table + "?select=" + encodeURIComponent(JSON.stringify({ id: { $gt: 0 } })));
    };
    // -----------------------------------------------------
    DataService.prototype.parseInt = function (_number) {
        if (!_number)
            return _number = 0;
        var number = parseInt(_number);
        if (typeof _number == "string" && _number[0] == "$") {
            var numeros = _number.replace(/\D/g, '');
            number = parseInt(numeros);
        }
        return number;
    };
    DataService.prototype.parseDate = function (date_in_tring_format) {
        var date = new Date();
        var parts = date_in_tring_format.split("-");
        date.setFullYear(parseInt(parts[0]));
        date.setMonth(parseInt(parts[1]) - 1);
        date.setDate(parseInt(parts[2]));
        return date;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/dom.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/dom.service.ts ***!
  \*****************************************/
/*! exports provided: DomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return DomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// https://medium.com/@caroso1222/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6

var DomService = /** @class */ (function () {
    function DomService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DomService.prototype.appendComponentToBody = function (component) {
        // 1. Create a component reference from the component 
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        // 3. Get DOM element from component
        var domElem = componentRef.hostView
            .rootNodes[0];
        // 4. Append DOM element to the body
        document.body.appendChild(domElem);
        // 5. Wait some time and remove it from the component tree and from the DOM
        /*
        setTimeout(() => {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }, 3000);
        */
    };
    DomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DomService);
    return DomService;
}());



/***/ }),

/***/ "./src/app/services/drag-and-drop.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/drag-and-drop.service.ts ***!
  \***************************************************/
/*! exports provided: DragAndDropService, CardDragging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropService", function() { return DragAndDropService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDragging", function() { return CardDragging; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.service */ "./src/app/services/dom.service.ts");
/* harmony import */ var _cnt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cnt.service */ "./src/app/services/cnt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DragAndDropService = /** @class */ (function () {
    function DragAndDropService(dom, cnt) {
        this.dom = dom;
        this.cnt = cnt;
        this.waitReady = null;
        this.dragging = null;
    }
    DragAndDropService.prototype.init = function () {
        var _this = this;
        this.waitReady = new Promise(function (resolve, reject) {
            _this.dom.appendComponentToBody(CardDragging);
            resolve();
        });
    };
    DragAndDropService.prototype.startDragging = function (event, slot, div) {
        console.log("------------ startDragging -------------");
        console.log(event, slot, div);
        console.log("-------------------------------------");
        this.fromComp = slot;
        var rect = div.getBoundingClientRect();
        // console.log(rect.top, rect.right, rect.bottom, rect.left);
        var _dragging = {};
        _dragging.copy = slot.copy;
        _dragging.target = div;
        _dragging.front = {};
        _dragging.front.init = {
            x: event.clientX,
            y: event.clientY,
            rect: rect,
            offset: {
                y: rect.top - event.clientY,
                x: rect.left - event.clientX
            }
        };
        _dragging.front.style = {
            "z-index": "11",
            // "opacity": "0",
            "top": rect.top + "px",
            "left": rect.left + "px",
            "height": rect.height + "px",
            "width": rect.width + "px",
            "position": "fixed",
            "display": "block",
            "pointer-events": "none",
            "background-size": "contain",
            "background-image": "url(" + _dragging.copy.edition.preview.images.fullsize + "), url(" + _dragging.copy.edition.preview.images.thumbnail + ")"
        };
        this.dragging = _dragging;
        console.log([this.dragging]);
        console.log("-------------------------------------");
    };
    DragAndDropService.prototype.drag = function (e) {
        if (this.dragging && e.clientY != 0 && e.clientX != 0) {
            this.dragging.front.style.top = (e.clientY + this.dragging.front.init.offset.y + 0) + "px";
            this.dragging.front.style.left = (e.clientX + this.dragging.front.init.offset.x + 3) + "px";
        }
        else {
            if (e.originalEvent) {
                // console.log(e.originalEvent.clientX);
            }
            else {
                // console.log(e);
            }
        }
    };
    DragAndDropService.prototype.getDraggingObject = function () {
        return this.dragging;
    };
    DragAndDropService.prototype.dragLeave = function (to) {
        // console.log("DragAndDropService.dragLeave()",[this.dragging]);
        if (!this.dragging)
            return;
        to.dragLeave();
        if (to == this.toComp) {
            this.toComp = null;
            console.log("DragAndDropService.dragLeave()", to.data);
        }
    };
    DragAndDropService.prototype.draggingOver = function (to) {
        if (this.toComp == to)
            return;
        if (!this.dragging)
            return;
        if (to.acceptsDrop(this.dragging.copy)) {
            this.toComp = to;
            console.log("DragAndDropService.draggingOver()", [to.data]);
        }
    };
    DragAndDropService.prototype.stopDragging = function (e) {
        var _this = this;
        if (this.toComp) {
            this.toComp.dragLeave();
            this.dragging = null;
            this.cnt.swapSlots(this.fromComp.data.container, this.fromComp.data.index, this.toComp.data.container, this.toComp.data.index).then(function () {
                _this.fromComp = null;
                _this.toComp = null;
            });
        }
        else {
            this.fromComp = null;
            this.toComp = null;
            this.dragging = null;
        }
        console.log("stopDragging()", [e]);
    };
    DragAndDropService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_dom_service__WEBPACK_IMPORTED_MODULE_1__["DomService"], _cnt_service__WEBPACK_IMPORTED_MODULE_2__["CntService"]])
    ], DragAndDropService);
    return DragAndDropService;
}());

var CardDragging = /** @class */ (function () {
    function CardDragging(dnd) {
        this.dnd = dnd;
    }
    CardDragging = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card-dragging',
            template: "\n    <div *ngIf=\"dnd.dragging\">\n        <card-front [ngStyle]=\"dnd.dragging.front.style\">\n            \n        </card-front>\n    </div>"
        }),
        __metadata("design:paramtypes", [DragAndDropService])
    ], CardDragging);
    return CardDragging;
}());



/***/ }),

/***/ "./src/app/services/facebook.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/facebook.service.ts ***!
  \**********************************************/
/*! exports provided: FacebookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookService", function() { return FacebookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacebookService = /** @class */ (function () {
    function FacebookService(cookie) {
        this.cookie = cookie;
    }
    FacebookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], FacebookService);
    return FacebookService;
}());



/***/ }),

/***/ "./src/app/services/steem.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/steem.service.ts ***!
  \*******************************************/
/*! exports provided: SteemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteemService", function() { return SteemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _steemit_steem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @steemit/steem-js */ "./node_modules/@steemit/steem-js/lib/index.js");
/* harmony import */ var _steemit_steem_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_steemit_steem_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sc2_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sc2-sdk */ "./node_modules/sc2-sdk/lib/sc2.js");
/* harmony import */ var sc2_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sc2_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var finallycomments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! finallycomments */ "./node_modules/finallycomments/src/index.js");
/* harmony import */ var finallycomments__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(finallycomments__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SteemService = /** @class */ (function () {
    function SteemService(cookie, data) {
        var _this = this;
        this.cookie = cookie;
        this.data = data;
        this.waitLogged = null;
        this.waitTimeout = null;
        this.waitReady = null;
        this.waitTimeout = new Promise(function (resolve) {
            _this.timeoutResolve = resolve;
        });
        this.waitReady = new Promise(function (resolve) {
            var api = sc2_sdk__WEBPACK_IMPORTED_MODULE_2__["Initialize"]({
                baseURL: 'https://steemconnect.com',
                app: 'vapaee',
                accessToken: 'access_token',
                callbackURL: window.location.origin + '/steemconnect',
                scope: ['login', 'offline', 'vote', 'comment', 'delete_comment', 'comment_options']
            });
            _this.url = api.getLoginURL();
            _this.steemconnect = api;
            resolve();
        });
        this.waitLogged = new Promise(function (resolve, reject) {
            _this.loggedResolve = resolve;
            _this.loggedReject = reject;
        });
        this.waitLogged.then(function (e) {
            // console.log("STEEMCONNECT LOGGED !!!!!!!!!!!!!!!! ");
        }, function (e) {
            // console.log("STEEMCONNECT NOT LOGGED !!!!!!!!!!!!!!!! ");
        });
    }
    SteemService.prototype.askForLogin = function () {
        this.appcomp.loginModal.show();
    };
    SteemService.prototype.init = function (appcomp) {
        this.appcomp = appcomp;
        if (this.cookie.get("steem.access_token")) {
            this.setCredentials({
                accessToken: this.cookie.get("steem.access_token"),
                account: this.cookie.get("steem.account")
            });
        }
        else {
            // console.log("--- steem rejected ---");
            if (window.location.href.indexOf("access_token") < 0) {
                this.loggedReject();
            }
        }
        // consultas
        this.steemjs = _steemit_steem_js__WEBPACK_IMPORTED_MODULE_1__;
        this.finally = finallycomments__WEBPACK_IMPORTED_MODULE_3___default.a;
        /*
        window.setTimeout(() => {
            console.log("*****************************************");
            this.finally.init();
        }, 5000);

        this.steemjs.api.getAccounts(['viterbo', 'gcalvete'], function(err, result) {
            console.log("STEEM: this.steemjs.api.getAccounts", err, result);
        });

        this.steemjs.api.getDiscussionsByBlog({tag: "gcalvete", limit: 10}, function(err, result) {
            console.log("STEEM: this.steemjs.api.getDiscussionsByBlog", err, result);
        });

        
        this.steemjs.api.getRepliesByLastUpdate("gcalvete", "prueba-con-rechazo-e-pago", 10, function(err, result) {
            console.log("STEEM: this.steemjs.api.getRepliesByLastUpdate", err, result);
        });
        
        this.steemjs.api.getStateAsync('bitcoin/@viterbo/can-be-bitcoin-replaced/comments', function(err, result) {
            console.log("STEEM: this.steemjs.api.getStateAsync(@itcoin/@viterbo/can-be-bitcoin-replaced/comments)", err, result);
        });
        
        this.steemjs.api.getContent("viterbo", "can-be-bitcoin-replaced", function(err, result) {
            console.log("STEEM: this.steemjs.api.getContent(viterbo, can-be-bitcoin-replaced)", err, result);
        });

        this.steemjs.api.getActiveVotes("gcalvete", "prueba-con-rechazo-e-pago", function(err, result) {
            console.log("STEEM: this.steemjs.api.getActiveVotes(gcalvete, prueba-con-rechazo-e-pago)", err, result);
        });
        */
        /*
        console.log("**************************************");
        console.log("STEEM finallycomments", this.finally);
        for (var name in this.finally) {
            console.log(name, typeof this.finally[name], [this.finally[name]]);
        }
        console.log("**************************************");
        */
    };
    SteemService.prototype.vote = function (author, permlink, percent) {
        var _this = this;
        if (percent === void 0) { percent = 10000; }
        return new Promise(function (resolve, reject) {
            if (!_this.user) {
                _this.askForLogin();
            }
            else {
                _this.steemconnect.vote(_this.user.name, author, permlink, percent, function (err, res) {
                    // console.log("STEEM this.steemconnect.vote", err, res);
                    if (err)
                        reject(err);
                    else
                        resolve(res);
                });
            }
        });
    };
    SteemService.prototype.unvote = function (author, permlink) {
        // console.assert(false, "ERROR: not implemented");
        return this.vote(author, permlink, 0);
    };
    SteemService.prototype.setCredentials = function (credentials) {
        var _this = this;
        // console.log("SteemService.setCredentials()", [credentials]);
        this.waitReady.then(function () {
            _this.timeout = window.setTimeout(function () {
                // console.log("TIME OUT: this.timeoutResolve();");
                if (_this.timeoutResolve)
                    _this.timeoutResolve();
            }, 10000);
            _this.steemconnect.setAccessToken(credentials.accessToken);
            _this.steemconnect.me(function (err, result) {
                if (err) {
                    // console.log("this.steemconnect.me ERROR:", err);
                    // console.log("--- steem rejected ---");
                    _this.loggedReject(err);
                    _this.logged = false;
                    setTimeout(function () {
                        _this.logout();
                    }, 1000);
                }
                else {
                    _this.logged = true;
                    _this.user = result.account;
                    _this.user.profile = (JSON.parse(_this.user.json_metadata) || {}).profile || {};
                    _this.user.profile.avatar = "https://steemitimages.com/u/" + _this.user.name + "/avatar";
                    _this.user.profile.name = _this.user.profile.name || _this.user.name;
                    var expire = new Date(2040, 1, 1);
                    _this.cookie.set("steem.access_token", credentials.accessToken, expire, "/");
                    _this.cookie.set("steem.account", _this.user.name, expire, "/");
                    _this.cookie.set("steem.avatar", _this.user.profile.avatar, expire, "/");
                    _this.cookie.set("access_token", credentials.accessToken, expire, "/");
                    _this.access_token = credentials.accessToken;
                    console.log("*************** Steem Service ****************");
                    console.log([_this]);
                    console.log("**********************************************");
                    window.clearTimeout(_this.timeout);
                    _this.timeoutResolve = null;
                    _this.timeout = 0;
                    _this.loggedResolve();
                }
            });
        });
        return this.waitLogged;
    };
    SteemService.prototype.logout = function () {
        var _this = this;
        console.log("logout");
        this.cookie.delete("steem.access_token", "/");
        this.cookie.delete("steem.account", "/");
        this.cookie.delete("steem.avatar", "/");
        this.cookie.delete("access_token", "/");
        this.user = null;
        this.waitLogged = new Promise(function (resolve, reject) {
            _this.loggedResolve = resolve;
            _this.loggedReject = reject;
        });
    };
    SteemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], SteemService);
    return SteemService;
}());



/***/ }),

/***/ "./src/app/services/userdata.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/userdata.service.ts ***!
  \**********************************************/
/*! exports provided: UserdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdataService", function() { return UserdataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _vapaee_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vapaee-user.service */ "./src/app/services/vapaee-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserdataService = /** @class */ (function () {
    function UserdataService(http, vapaee, cookie) {
        var _this = this;
        this.http = http;
        this.vapaee = vapaee;
        this.cookie = cookie;
        this.waitData = null;
        this.logged = false;
        this.waitData = new Promise(function (resolve) {
            // reject();
            _this.vapaee.afterReady.then(function () {
                if (!_this.vapaee.logged) {
                    // NO ENTIENDO PORQUE ENTRA ACÁ SI EJECUTÉ REJECT
                    // console.log('------------------------------');
                    // console.log('---- userdata rejected 0 -----');
                    // console.log('------------------------------');                    
                    // return reject();
                    return;
                }
                var API_url = "http://api.cardsandtokens.com/";
                // var url = API_url+"userdata?access_token="+this.vapaee.access_token;
                _this.access_token = _this.cookie.get("steem.access_token");
                var url = API_url + "steem/user?access_token=" + _this.access_token;
                //url +="&name="+encodeURIComponent(this.vapaee.user_name);
                //url +="&avatar="+encodeURIComponent(this.cookie.get("steem.avatar"))
                //url +="&account="+encodeURIComponent(this.cookie.get("steem.account"));
                _this.http.get(url).toPromise().then(function (result) {
                    _this.data = result.data;
                    _this.id = result.id;
                    _this.name = result.name;
                    _this.logged = true;
                    resolve();
                }, function (ee) {
                    // console.log('------------------------------');
                    // console.log('---- userdata rejected 1 -----');
                    // console.log('------------------------------');
                    // reject();
                    return;
                });
            }, function (ee) {
                // console.log('------------------------------');
                // console.log('---- userdata rejected 2 -----');
                // console.log('------------------------------');
                // reject();
                return;
            });
        });
        this.waitData.then(function () { }, function (e) {
            console.log('this.waitData rejected');
        });
    }
    UserdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _vapaee_user_service__WEBPACK_IMPORTED_MODULE_3__["VapaeeUserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], UserdataService);
    return UserdataService;
}());



/***/ }),

/***/ "./src/app/services/vapaee-user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/vapaee-user.service.ts ***!
  \*************************************************/
/*! exports provided: VapaeeUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VapaeeUserService", function() { return VapaeeUserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _steem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./steem.service */ "./src/app/services/steem.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VapaeeUserService = /** @class */ (function () {
    function VapaeeUserService(http, cookieService, steem) {
        this.http = http;
        this.cookieService = cookieService;
        this.steem = steem;
        this.logged = false;
        this.ready = false;
        this.afterReady = null;
        this.init();
    }
    VapaeeUserService.prototype.logout = function () {
        this.steem.logout();
        setTimeout(function () {
            document.location.reload();
        }, 500);
    };
    VapaeeUserService.prototype.init = function () {
        var _this = this;
        this.logged = false;
        this.user_name = "Guest";
        this.ready = false;
        this.afterReady = new Promise(function (resolve, reject) {
            // console.log("Vapaee.user subscribe to steem.waitLogged");
            _this.steem.waitLogged.then(function () {
                _this.logged = true;
                _this.ready = true;
                _this.user_name = _this.steem.user.profile.name;
                // console.log("--- vapaee.user ---");
                resolve();
            }, function (err) {
                _this.ready = true;
                // console.log("--- vapaee.user reject ---");
                reject();
            });
        });
        this.afterReady.then(function () { }, function (e) {
            // console.log("--- vapaee.user rejected ---");
        });
    };
    VapaeeUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _steem_service__WEBPACK_IMPORTED_MODULE_3__["SteemService"]])
    ], VapaeeUserService);
    return VapaeeUserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/cards-and-tokens/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map