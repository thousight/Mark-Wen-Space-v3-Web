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
var NavBar = (function () {
    function NavBar() {
    }
    NavBar.prototype.ngOnInit = function () {
        // Initialize sidebar at start
        $(".button-collapse").sideNav({
            menuWidth: 300,
            edge: "right",
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
        // Initialize navbar style
        $(".nav-wrapper").css({ "margin-top": -1 * $(".NavBar").height() });
        $(".NavBarNav").addClass("transparent");
    };
    NavBar.prototype.ngAfterViewInit = function () {
        // Mechanism for sticky navbar, be careful with it
        $(window).scroll(function () {
            var windowTop = $(window).scrollTop(); // Location of the top of the window
            var homeHeight = $(".Home").outerHeight();
            var navbarHeight = $(".NavBar").height();
            if (windowTop > (homeHeight - navbarHeight)) {
                // Set navbar to fixed
                $(".nav-wrapper").css({ "margin-top": "0px" });
                $(".NavBar").addClass("navbar-fixed");
                $(".About").css({ "margin-top": "-64px" });
                $(".NavBarNav").removeClass("transparent");
                $(".NavBarNav").addClass("blue darken-1");
                $(".NavBarNav").css({ "position": "fixed", "top": "0px" });
                $(".hide-on-med-and-down .brand-logo .button-collapse").css({ "position": "fixed", "top": "0px" });
            }
            else {
                // Set navbar to relative
                $(".nav-wrapper").css({ "margin-top": -1 * $(".NavBar").height() });
                $(".NavBar").css({ "height": $(".NavBarNav").height() + "px" });
                $(".NavBar").removeClass("navbar-fixed");
                $(".About").css({ "margin-top": "-15px" });
                $(".NavBarNav").css({ "position": "relative" });
                $(".NavBarNav").removeClass("blue darken-1");
                $(".NavBarNav").addClass("transparent");
            }
        });
    };
    NavBar = __decorate([
        core_1.Component({
            selector: "navBar",
            template: "\n            <div id=\"navBar\" class=\"NavBar\">\n              <nav class=\"NavBarNav blue darken-1\">\n                <div class=\"nav-wrapper\">\n                  <a href=\"#\" class=\"brand-logo\"><img class=\"MWLogo\" src=\"./img/NavbarIcon.png\" alt=\"HTML5 Icon\"></a>\n                  <ul class=\"right hide-on-med-and-down\">\n                    <li><a href=\"#Home\">Home</a></li>\n                    <li><a href=\"#About\">About</a></li>\n                    <li><a href=\"#Exp\">Experience</a></li>\n                    <li><a href=\"#Portfolio\">Portfolio</a></li>\n                    <li><a href=\"#Education\">Education</a></li>\n                    <li><a href=\"#Skills\">Skills</a></li>\n                    <li><a href=\"#Gallery\">Gallery</a></li>\n                    <li><a href=\"#Contact\">Contact</a></li>\n                  </ul>\n                  <ul class=\"side-nav\" id=\"mobile-demo\">\n                    <li><a href=\"#Home\">Home</a></li>\n                    <li><a href=\"#About\">About</a></li>\n                    <li><a href=\"#Exp\">Experience</a></li>\n                    <li><a href=\"#Portfolio\">Portfolio</a></li>\n                    <li><a href=\"#Education\">Education</a></li>\n                    <li><a href=\"#Skills\">Skills</a></li>\n                    <li><a href=\"#Gallery\">Gallery</a></li>\n                    <li><a href=\"#Contact\">Contact</a></li>\n                  </ul>\n                  <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse right\"><i class=\"material-icons\">menu</i></a>\n                </div>\n              </nav>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], NavBar);
    return NavBar;
}());
exports.NavBar = NavBar;
//# sourceMappingURL=navBar.js.map