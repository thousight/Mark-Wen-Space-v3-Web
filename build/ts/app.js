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
var onLoad_1 = require("./components/onLoad");
var navBar_1 = require("./components/navBar");
var home_1 = require("./home");
var about_1 = require("./about");
var exp_1 = require("./exp");
var portfolio_1 = require("./portfolio");
var edu_1 = require("./edu");
var App = (function () {
    function App() {
        this.hidden = true;
        this.timeout = null;
    }
    App.prototype.ngAfterContentInit = function () {
        // Initialize Spyscroll
        $(".scrollspy").scrollSpy({
            scrollOffset: 0
        });
    };
    App.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // Change loading screen to main content with 1s delay
        this.timeout = setTimeout(function () {
            _this.hidden = false; // Dismiss loading screen
            $(".app").fadeIn(1500); // Fading animation
            clearTimeout(_this.timeout); // Clear out timeout
        }, 1500);
    };
    App = __decorate([
        core_1.Component({
            selector: "app",
            template: "\n            <!-- List all the main components inside div -->\n            <div class=\"app content\" [hidden]=\"hidden\">\n              <home></home>\n              <navBar></navBar>\n              <about></about>\n              <exp></exp>\n              <portfolio></portfolio>\n              <edu></edu>\n            </div>\n\n            <!-- List other components here -->\n            <onLoad [hidden]=\"!hidden\"></onLoad>\n            ",
            directives: [onLoad_1.OnLoad, navBar_1.NavBar, home_1.Home, about_1.About, exp_1.Exp, portfolio_1.Portfolio, edu_1.Edu]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map