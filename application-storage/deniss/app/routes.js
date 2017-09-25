"use strict";
var _404_component_1 = require('./errors/404.component');
//one import combined in barel
var index_1 = require('./landing-page/index');
var index_2 = require('./home/index');
var index_3 = require('./common/index');
//canDeactivate:['canDeactivateCreateEvent'],
exports.appRoutes = [
    { path: 'landingPage', component: index_1.LandingPageComponent, canActivate: [index_3.FirstPageGuard] },
    { path: 'home', component: index_2.HomeComponent, canActivate: [index_3.LoggedInGuard] },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/landingPage', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map