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
var MWFooter = (function () {
    function MWFooter() {
    }
    MWFooter = __decorate([
        core_1.Component({
            selector: "mwFooter",
            template: "\n            <div id=\"Footer\" class=\"Footer\">\n              <footer class=\"page-footer blue darken-3\">\n                <div class=\"container\">\n                  <h5 class=\"white-text\">\n                    Mark Wen Space\n                    <a href=\"https://github.com/thousight/Mark-Wen-Space-v3-Web\" target=\"_blank\" style=\"color: white\">\n                      <span class=\"fa fa-github\"></span>\n                    </a>\n                  </h5>\n\n                  <h6 class=\"footer-subtitle white-text\">References</h6>\n                  <div class=\"footer-list row\">\n                    <div class=\"col s12 m4 l4\">\n                      <ul>\n                        <li><a class=\"grey-text text-lighten-2\" href=\"https://www.typescriptlang.org/\" target=\"_blank\">TypeScript</a></li>\n                        <li><a class=\"grey-text text-lighten-2\" href=\"http://materializecss.com/\" target=\"_blank\">Materializecss</a></li>\n                        <li><a class=\"grey-text text-lighten-2\" href=\"https://angular.io/\" target=\"_blank\">Angular 2</a></li>\n                      </ul>\n                    </div>\n                    <div class=\"col s12 m4 l4\">\n                      <ul>\n                        <li><a class=\"grey-text text-lighten-2\" href=\"https://jquery.com/\" target=\"_blank\">jQuery</a></li>\n                        <li><a class=\"grey-text text-lighten-2\" href=\"https://expressjs.com/\" target=\"_blank\">Express</a></li>\n                        <li><a class=\"grey-text text-lighten-2\" href=\"http://mongoosejs.com/\" target=\"_blank\">Mongoose</a></li>\n                      </ul>\n                    </div>\n                    <div class=\"col s12 m4 l4\">\n                      <ul>\n                        <li><a class=\"grey-text text-lighten-2\" href=\"https://nodejs.org/en/\" target=\"_blank\">NodeJS</a></li>\n                        <li><a class=\"grey-text text-lighten-2\" href=\"http://fontawesome.io/icons/\" target=\"_blank\">Fonticons</a></li>\n                        <li><a class=\"grey-text text-lighten-2\" href=\"https://angular-maps.com/\" target=\"_blank\">Angular2-Google-Maps</a></li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"footer-copyright\">\n                  <div class=\"container\">\n                  The MIT License (MIT) Copyright (c) 2016 Mark Wen\n                  </div>\n                </div>\n              </footer>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], MWFooter);
    return MWFooter;
}());
exports.MWFooter = MWFooter;
//# sourceMappingURL=footer.js.map