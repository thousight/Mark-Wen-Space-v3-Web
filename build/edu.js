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
var title_1 = require("./components/title");
var timeline_1 = require("./components/timeline");
var Edu = (function () {
    function Edu(http) {
        this.http = http;
        this.titleIcon = "briefcase";
        this.titleTitle = "Education";
        this.eduUrl = "http://mark-wen-space-v3-server.herokuapp.com/Edu";
    }
    Edu.prototype.ngOnInit = function () {
        var _this = this;
        // Get Exp data from server
        this.http.get(this.eduUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.edu = data; }, function (err) { return console.error(err); });
    };
    Edu = __decorate([
        core_1.Component({
            selector: "edu",
            template: "\n            <div id=\"Edu\" class=\"Edu content section scrollspy\">\n              <title [icon]=\"titleIcon\" [title]=\"titleTitle\"></title>\n              <timeline [data]=\"edu\"></timeline>\n            </div>\n            ",
            directives: [title_1.Title, timeline_1.Timeline]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Edu);
    return Edu;
}());
exports.Edu = Edu;
//# sourceMappingURL=edu.js.map