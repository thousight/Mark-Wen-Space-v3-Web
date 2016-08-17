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
    About.prototype.ngOnInit = function () {
        // Bring the card content down to make space for profile picture
        $(".about-upper-card-content").css({ "padding-top": "70px" });
        // Initialize some CSS through jQuery since they don't work when written in stylesheets for some reason
        $(".card-paragraph").css({ "margin-top": "18px" });
        $(".about-lower-card").css({ "padding": "20px 20px 0px 20px" });
    };
    About = __decorate([
        core_1.Component({
            selector: "about",
            template: "\n            <div id=\"About\" class=\"About content section scrollspy\">\n              <div class=\"coverPhoto\"></div>\n              <div class=\"aboutCard row\">\n                <div class=\"col s12 m12 l8 offset-l2\">\n                  <div class=\"card center\">\n                    <div class=\"about-upper-card-content card-content\">\n                    <div class=\"profilePic\"></div>\n                      <span class=\"card-title\">Hi, I'm Mark!</span>\n                      <p class=\"card-paragraph\">\n                        My legal name is Guojie Wen, since my Chinese name is \u6E29\u56FD\u6770.\n                        I'm pursuing my bachelor degree as a 3rd-year Computer and Information Technology in Purdue University.\n                        I'm passionate in developing and designing website and applications, because every detail worths tweaking, and it's always an enjoyable process.\n                      </p>\n                    </div>\n                    <div class=\"card-action\">\n                      <a href=\"../../file/Guojie Wen Resume.pdf\" target=\"_blank\">Download Resume</a>\n                      <a href=\"#Contact\">Contact Me</a>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col s12 m12 l8 offset-l2\">\n                  <div class=\"about-lower-card card center\">\n                    <div class=\"row\">\n                      <h6 class=\"left\">Hobbies:</h6>\n                    </div>\n                    <div class=\"about-lower-card-content card-content row\">\n                      <div class=\"col s6 m3 l3\">\n                        <i class=\"about-icon fa fa-camera fa-2x\" aria-hidden=\"true\"></i>\n                        <p>Photography</p>\n                      </div>\n                      <div class=\"col s6 m3 l3\">\n                      <i class=\"about-icon fa fa-mobile fa-2x\" aria-hidden=\"true\"></i>\n                        <p>Tech Review</p>\n                      </div>\n                      <div class=\"col s6 m3 l3\">\n                        <i class=\"about-icon fa fa-laptop fa-2x\" aria-hidden=\"true\"></i>\n                        <p>Coding</p>\n                      </div>\n                      <div class=\"col s6 m3 l3\">\n                        <i class=\"about-icon fa fa-car fa-2x\" aria-hidden=\"true\"></i>\n                        <p>Roadtrip</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
}());
exports.About = About;
//# sourceMappingURL=about.js.map