"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var auth_service_1 = require('../user/auth.service');
var router_1 = require('@angular/router');
var index_1 = require('../common/index');
var HomeComponent = (function () {
    function HomeComponent(route, auth, $) {
        this.route = route;
        this.auth = auth;
        this.$ = $;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.user = this.route.snapshot.data['user'];
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.ngOnChanges = function () {
        this.user = this.auth.getCurrentUser();
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: './app/home/home.component.html',
            styles: ["h1 {color:red;}"]
        }),
        __param(2, core_1.Inject(index_1.JQUERY_TOKEN)), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, auth_service_1.AuthService, Object])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map