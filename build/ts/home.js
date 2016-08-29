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
var home_icons_1 = require("./components/home-icons");
var Home = (function () {
    function Home() {
    }
    __decorate([
        core_1.Input("data"), 
        __metadata('design:type', Array)
    ], Home.prototype, "links", void 0);
    Home = __decorate([
        core_1.Component({
            selector: "home",
            template: "\n            <div id=\"Home\" class=\"Home content section scrollspy\">\n              <div class=\"home-content-wrapper\">\n                <h1 class=\"home-title no-select\">Mark Wen</h1>\n                <h3 class=\"home-subtitle no-select\">Web and Mobile Developer</h3>\n                <home-icons [data]=\"links\"></home-icons>\n              </div>\n            </div>\n            ",
            directives: [home_icons_1.HomeIcons]
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=home.js.map