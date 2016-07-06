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
var HomeIcons = (function () {
    function HomeIcons() {
        this.links = [
            {
                "_id": "57757874766de7744a26bdd4",
                "title": "Resume",
                "url": "../../file/Guojie Wen Resume.pdf",
                "icon": "fa fa-file-text",
                "__v": 0
            },
            {
                "_id": "5776aafd97fdc3804d613002",
                "title": "LinkedIn",
                "url": "https://www.linkedin.com/in/guojiewen",
                "icon": "fa fa-linkedin-square",
                "__v": 0
            },
            {
                "_id": "5776ab6797fdc3804d613003",
                "title": "GitHub",
                "url": "https://github.com/thousight",
                "icon": "fa fa-github",
                "__v": 0
            },
            {
                "_id": "5776ab8097fdc3804d613004",
                "title": "500px",
                "url": "https://500px.com/markwenguojie94",
                "icon": "fa fa-500px",
                "__v": 0
            },
            {
                "_id": "5776aba097fdc3804d613005",
                "title": "ACTRA",
                "url": "http://space.bilibili.com/20501466/#!/index/",
                "icon": "fa fa-video-camera",
                "__v": 0
            }];
    }
    HomeIcons = __decorate([
        core_1.Component({
            selector: 'home-icons',
            template: "\n            <div class=\"home-icons-wrapper\">\n              <ul class=\"home-icons-ul no-select\">\n                <li class=\"home-icons-li\"\n                *ngFor=\"let link of links\" >\n                  <a href={{link.url}} target=\"_blank\">\n                    <span class=\"home-icons-icon {{link.icon}}\"></span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeIcons);
    return HomeIcons;
}());
exports.HomeIcons = HomeIcons;
//# sourceMappingURL=home-icons.js.map