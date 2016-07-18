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
var AllDataService = (function () {
    function AllDataService(http) {
        this.http = http;
        this.allDataUrl = "https://mark-wen-space-v3-server.herokuapp.com/allData";
        this.loading = true;
        this.Edu = [];
        this.Exp = [];
        this.Links = [];
        this.Portfolio = [];
        this.Skills = [];
    }
    AllDataService.prototype.ngOnInit = function () {
        this.getAllData();
    };
    // Get data from api, aka "Set" methods
    AllDataService.prototype.getAllData = function () {
        var _this = this;
        return this.http.get(this.allDataUrl)
            .subscribe(function (data) {
            _this.Edu = data.Edu;
            _this.Exp = data.Exp;
            _this.Links = data.Links;
            _this.Portfolio = data.Portfolio;
            _this.Skills = data.Skills;
            _this.loading = false;
        }, function (err) { return console.error(err); });
    };
    // “Get” methods
    AllDataService.prototype.getLoading = function () { return this.loading; };
    AllDataService.prototype.getEdu = function () { return this.Edu; };
    AllDataService.prototype.getExp = function () { return this.Exp; };
    AllDataService.prototype.getLinks = function () { return this.Links; };
    AllDataService.prototype.getPortfolio = function () { return this.Portfolio; };
    AllDataService.prototype.getSkills = function () { return this.Skills; };
    AllDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AllDataService);
    return AllDataService;
}());
exports.AllDataService = AllDataService;
//# sourceMappingURL=allDataService.js.map