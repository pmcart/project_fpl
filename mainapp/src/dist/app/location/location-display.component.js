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
var core_1 = require('@angular/core');
var location_1 = require('./location');
var location_service_1 = require('../location/location.service');
var LocationDisplayComponent = (function () {
    function LocationDisplayComponent(locationService) {
        this.locationService = locationService;
    }
    LocationDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.getLocations().then(function (mockLocations) { return _this.testLocations = mockLocations; });
        this.testLocation = new location_1.Location();
        this.testLocation.id = 100;
        this.testLocation.name = "This is the name";
    };
    LocationDisplayComponent.prototype.onSelect = function (location) {
        this.selectedLocation = location;
    };
    LocationDisplayComponent = __decorate([
        core_1.Component({
            selector: 'location-display',
            providers: [location_service_1.LocationService],
            template: "\n      <div class='row'>\n          <div class='col-md-12 text-center'>\n           \n                <h2>My Locations</h2>                  \n                    <ul class=\"locations\">\n                      <li *ngFor=\"let location of testLocations\" (click)=\"onSelect(location)\" [class.selected]=\"location === selectedLocation\">\n                      <span class=\"badge\">{{location.id}}</span> {{location.name}} \n                    </li>\n                  </ul>\n            </div>\n        </div>\n  "
        }), 
        __metadata('design:paramtypes', [location_service_1.LocationService])
    ], LocationDisplayComponent);
    return LocationDisplayComponent;
}());
exports.LocationDisplayComponent = LocationDisplayComponent;
//# sourceMappingURL=location-display.component.js.map