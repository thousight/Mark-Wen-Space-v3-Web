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
var onLoad_1 = require("./onLoad");
var home_1 = require("./home/home");
var App = (function () {
    function App() {
        this.hidden = true;
        this.timeout = null;
    }
    App.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.timeout = setTimeout(function () {
            _this.hidden = false;
            clearTimeout(_this.timeout);
        }, 1000);
    };
    App = __decorate([
        core_1.Component({
            selector: "app",
            template: "\n            <!-- List all the main components inside div -->\n            <div class=\"content\" [hidden]=\"hidden\">\n              <home></home>\n            </div>\n\n            <!-- List other components here -->\n            <onLoad [hidden]=\"!hidden\"></onLoad>\n            ",
            directives: [onLoad_1.OnLoad, home_1.Home]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map