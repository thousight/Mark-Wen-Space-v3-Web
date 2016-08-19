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
var Exp = (function () {
    function Exp(http) {
        this.http = http;
        this.titleIcon = "briefcase";
        this.titleTitle = "Experience";
        this.expUrl = "http://mark-wen-space-v3-server.herokuapp.com/Exp";
    }
    Exp.prototype.ngOnInit = function () {
        var _this = this;
        // Get Exp data from server
        this.http.get(this.expUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.exp = data; }, function (err) { return console.error(err); });
    };
    Exp = __decorate([
        core_1.Component({
            selector: "exp",
            template: "\n            <div id=\"Exp\" class=\"Exp content section scrollspy\">\n              <title [icon]=\"titleIcon\" [title]=\"titleTitle\"></title>\n              <timeline [data]=\"exp\"></timeline>\n            </div>\n            ",
            directives: [title_1.Title, timeline_1.Timeline]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Exp);
    return Exp;
}());
exports.Exp = Exp;
//# sourceMappingURL=exp.js.map