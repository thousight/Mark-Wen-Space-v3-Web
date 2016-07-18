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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var allDataService_1 = require("../allDataService");
var HomeIcons = (function () {
    function HomeIcons(http, allDataService) {
        this.http = http;
        this.allDataService = allDataService;
        this.linksUrl = "http://mark-wen-space-v3-server.herokuapp.com/links";
    }
    HomeIcons.prototype.ngOnInit = function () {
        // this.getLinks();
        this.links = this.allDataService.getLinks();
    };
    HomeIcons.prototype.getLinks = function () {
        var _this = this;
        return this.http.get(this.linksUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.links = data; }, function (err) { return console.error(err); });
    };
    HomeIcons = __decorate([
        core_1.Component({
            selector: "home-icons",
            template: "\n            <div class=\"home-icons-wrapper\">\n              <ul class=\"home-icons-ul no-select\">\n                <li class=\"home-icons-li\"\n                *ngFor=\"let link of links\" >\n                  <a href={{link.url}} target=\"_blank\">\n                    <span class=\"home-icons-icon {{link.icon}}\"></span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n            ",
            providers: [allDataService_1.AllDataService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, allDataService_1.AllDataService])
    ], HomeIcons);
    return HomeIcons;
}());
exports.HomeIcons = HomeIcons;
//# sourceMappingURL=home-icons.js.map