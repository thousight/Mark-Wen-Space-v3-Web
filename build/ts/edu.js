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
var timeline_1 = require("./components/timeline");
var Edu = (function () {
    function Edu() {
        this.titleIcon = "graduation-cap";
        this.titleTitle = "Education";
    }
    __decorate([
        core_1.Input("data"), 
        __metadata('design:type', Array)
    ], Edu.prototype, "edu", void 0);
    Edu = __decorate([
        core_1.Component({
            selector: "edu",
            template: "\n            <div id=\"Edu\" class=\"Edu content section scrollspy\">\n              <title [icon]=\"titleIcon\" [title]=\"titleTitle\"></title>\n              <timeline [data]=\"edu\"></timeline>\n            </div>\n            ",
            directives: [title_1.Title, timeline_1.Timeline]
        }), 
        __metadata('design:paramtypes', [])
    ], Edu);
    return Edu;
}());
exports.Edu = Edu;
//# sourceMappingURL=edu.js.map