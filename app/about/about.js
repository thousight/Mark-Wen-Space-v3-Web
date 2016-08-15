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
var About = (function () {
    function About() {
    }
    About = __decorate([
        core_1.Component({
            selector: "about",
            template: "\n            <div id=\"About\" class=\"About content section scrollspy\">\n              <div class=\"coverPhoto\"></div>\n              <div class=\"aboutCard row\">\n                <div class=\"col s12 m12 l8 offset-l2\">\n                  <div class=\"card\">\n                    <div class=\"card-content\">\n                      <span class=\"card-title\">Hi, I'm Mark!</span>\n                      <p>\n                        This is my personal resume website.\n                        I'm a CNIT Junior student in Purdue University.\n                        I enjoy website and application design, technology review, and playing badminton.\n                      </p>\n                    </div>\n                    <div class=\"card-action\">\n                      <a href=\"../../file/Guojie Wen Resume.pdf\">Download Resume</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
}());
exports.About = About;
//# sourceMappingURL=about.js.map