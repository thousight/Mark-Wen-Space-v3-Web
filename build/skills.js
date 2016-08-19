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
var Skills = (function () {
    function Skills() {
        this.titleIcon = "folder-open";
        this.titleTitle = "Skills";
    }
    __decorate([
        core_1.Input("data"), 
        __metadata('design:type', Array)
    ], Skills.prototype, "skills", void 0);
    Skills = __decorate([
        core_1.Component({
            selector: "skills",
            template: "\n            <div id=\"Skills\" class=\"Skills content section scrollspy\">\n              <title [icon]=\"titleIcon\" [title]=\"titleTitle\"></title>\n            </div>\n            ",
            directives: [title_1.Title]
        }), 
        __metadata('design:paramtypes', [])
    ], Skills);
    return Skills;
}());
exports.Skills = Skills;
//# sourceMappingURL=skills.js.map