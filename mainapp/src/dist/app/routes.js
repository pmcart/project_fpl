"use strict";
var login_component_1 = require('./login/login.component');
var location_display_component_1 = require('./location/location-display.component');
exports.appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'main', component: location_display_component_1.LocationDisplayComponent },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
//# sourceMappingURL=routes.js.map