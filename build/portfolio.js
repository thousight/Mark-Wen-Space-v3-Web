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
var title_1 = require("./components/title");
var Portfolio = (function () {
    function Portfolio() {
        this.titleIcon = "folder-open";
        this.titleTitle = "Portfolio";
    }
    __decorate([
        core_1.Input("data"), 
        __metadata('design:type', Array)
    ], Portfolio.prototype, "portfolios", void 0);
    Portfolio = __decorate([
        core_1.Component({
            selector: "portfolio",
            template: "\n            <div id=\"Portfolio\" class=\"Portfolio content section scrollspy\">\n              <title [icon]=\"titleIcon\" [title]=\"titleTitle\"></title>\n              <div class=\"portfolio-list row\">\n                <div class=\"col s12 m12 l8 offset-l2\">\n                  <div class=\"portfolio-card col s12 m5 l5 card hoverable\" [ngClass]=\"{ 'offset-l1 offset-m1': even }\" *ngFor=\"let portfolio of portfolios; let even = even\">\n                    <div class=\"card-image\">\n                      <img src=\"../img/home.jpg\">\n                      <span class=\"card-title\">{{portfolio.title}}</span>\n                    </div>\n                    <div class=\"portfolio-card-content card-content\">\n                      <p>{{portfolio.purpose}}</p>\n                    </div>\n                    <div class=\"card-action\">\n                      <a href=\"#\">Details</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            ",
            directives: [title_1.Title]
        }), 
        __metadata('design:paramtypes', [])
    ], Portfolio);
    return Portfolio;
}());
exports.Portfolio = Portfolio;
//# sourceMappingURL=portfolio.js.map