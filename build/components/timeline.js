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
var Timeline = (function () {
    function Timeline() {
    }
    __decorate([
        core_1.Input("icon"), 
        __metadata('design:type', String)
    ], Timeline.prototype, "icon", void 0);
    __decorate([
        core_1.Input("title"), 
        __metadata('design:type', String)
    ], Timeline.prototype, "title", void 0);
    __decorate([
        core_1.Input("data"), 
        __metadata('design:type', Array)
    ], Timeline.prototype, "data", void 0);
    Timeline = __decorate([
        core_1.Component({
            selector: "timeline",
            template: "\n              <div class=\"Timeline\">\n                <div class=\"grayLine\"></div>\n                <div class=\"timeline-content\">\n                  <div *ngFor=\"let data of data; let odd = odd; let even = even\">\n                    <div class=\"row\" style=\"margin-bottom: 0px\">\n                      <div class=\"col s12 m6 l4\" [ngClass]=\"{ 'offset-l6 offset-m6 timeline-card-right': odd, 'offset-l2': even }\">\n                        <div class=\"timeline-pointer\">\n                          <div class=\"pointer-circle\"></div>\n                        </div>\n                        <div class=\"timeline-card card horizontal hoverable\">\n                          <div class=\"timeline-card-image card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator\" src=\"../../{{data.image}}\" >\n                          </div>\n                          <div class=\"timeline-card-content card-content\">\n                            <span class=\"card-title grey-text text-darken-4\" style=\"line-height: 25px\">{{data.organization || data.title}}</span>\n                            <p class=\"timeline-data-location grey-text text-darken-1\" style=\"margin-top: 5px\">{{data.city}}, {{data.state}}</p>\n                            <p style=\"margin-top: 5px\">{{data.degree}}</p>\n                            <p style=\"margin-top: 5px\" *ngIf=\"!data.degree\">{{data.title}}</p>\n                            <p style=\"margin-top: 5px\">{{data.others}}</p>\n                            <p style=\"margin-top: 5px\" *ngIf=\"data.GPA\">GPA: {{data.GPA}}</p>\n                            <p style=\"margin-top: 5px\">{{data.time}}</p>\n                          </div>\n                          <div class=\"card-reveal\" *ngIf=\"data.desc\">\n                            <i class=\"timeline-reveal-close material-icons card-title\">close</i>\n                            <div class=\"timeline-desc\">\n                              <span class=\"timeline-card-title card-title\" style=\"line-height: 25px\">{{data.organization}}</span>\n                              <ul *ngFor=\"let bullet of data.desc\">\n                                <li>{{bullet}}</li>\n                              </ul>\n                            </div>\n                          </div>\n                          <i class=\"timeline-more-button material-icons activator\" *ngIf=\"data.desc\">more_vert</i>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], Timeline);
    return Timeline;
}());
exports.Timeline = Timeline;
//# sourceMappingURL=timeline.js.map