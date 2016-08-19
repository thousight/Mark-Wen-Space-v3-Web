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
var onLoad_1 = require("./components/onLoad");
var navBar_1 = require("./components/navBar");
var home_1 = require("./home");
var about_1 = require("./about");
var exp_1 = require("./exp");
var portfolio_1 = require("./portfolio");
var edu_1 = require("./edu");
var App = (function () {
    function App(http) {
        this.http = http;
        this.hidden = true;
        this.serverLink = "http://mark-wen-space-v3-server.herokuapp.com/allData";
        this.timeout = null;
    }
    App.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.serverLink)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //  Grabbing all data and pass them to components
            _this.LinksData = data.Links.sort(function (a, b) { return a.order - b.order; });
            _this.ExpData = data.Exp.sort(function (a, b) { return a.order - b.order; });
            _this.PortfolioData = data.Portfolio.sort(function (a, b) { return a.order - b.order; });
            _this.EduData = data.Edu.sort(function (a, b) { return a.order - b.order; });
            _this.SkillsData = data.Skills.sort(function (a, b) { return a.order - b.order; });
            // Change loading screen to main content with 1s delay
            _this.timeout = setTimeout(function () {
                _this.hidden = false; // Dismiss loading screen
                $(".app").fadeIn(1500); // Fading animation
                clearTimeout(_this.timeout); // Clear out timeout
            }, 1500);
        }, function (err) { return console.log(err); });
    };
    App.prototype.ngAfterContentInit = function () {
        // Initialize Spyscroll
        $(".scrollspy").scrollSpy({
            scrollOffset: 0
        });
    };
    App = __decorate([
        core_1.Component({
            selector: "app",
            template: "\n            <!-- List all the main components inside div -->\n            <div class=\"app content\" [hidden]=\"hidden\">\n              <home [data]=\"LinksData\"></home>\n              <navBar></navBar>\n              <about></about>\n              <exp [data]=\"ExpData\"></exp>\n              <portfolio [data]=\"PortfolioData\"></portfolio>\n              <edu [data]=\"EduData\"></edu>\n            </div>\n\n            <!-- List other components here -->\n            <onLoad [hidden]=\"!hidden\"></onLoad>\n            ",
            directives: [onLoad_1.OnLoad, navBar_1.NavBar, home_1.Home, about_1.About, exp_1.Exp, portfolio_1.Portfolio, edu_1.Edu]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map