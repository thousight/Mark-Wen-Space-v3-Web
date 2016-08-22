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
var Contact = (function () {
    function Contact() {
        this.titleIcon = "envelope";
        this.titleTitle = "Contact";
    }
    Contact = __decorate([
        core_1.Component({
            selector: "contact",
            template: "\n            <div id=\"Contact\" class=\"Contact content section scrollspy\">\n              <title [icon]=\"titleIcon\" [title]=\"titleTitle\"></title>\n              <div class=\"contact-content\">\n                <div class=\"row\">\n                  <div class=\"col s12 m12 l8 offset-l2\">\n                    <div class=\"col s12 m6 l6\">\n                      <!-- Contact Info Card -->\n                      <div class=\"contact-card card blue\">\n                        <div class=\"contact-info-card card-content white-text\">\n                          <span class=\"card-title\">Get In Touch</span>\n                          <div class=\"contact-info\">\n                            <div class=\"contact-info-icons\">\n                              <i class=\"fa fa-phone\" aria-hidden=\"true\"></i><br>\n                              <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i><br>\n                              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><br>\n                            </div>\n                            <div class=\"contact-info-texts\">\n                              <div>(510) 505-4398</div>\n                              <div>markwenguojie94@gmail.com</div>\n                              <div style=\"line-height: 25px\">2120 McCormick Rd<br>Rm 721<br>West Lafayette, IN 47906</div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- Message Card -->\n                    <div class=\"col s12 m6 l6\">\n                      <div class=\"contact-card card\">\n                        <div class=\"card-content\">\n                          <span class=\"card-title\">Message Me</span>\n                          <form class=\"message-form\">\n                            <div class=\"input-field col s12\">\n                              <input type=\"text\" class=\"validate\">\n                              <label for=\"name\">Name</label>\n                            </div>\n                            <div class=\"input-field col s12\">\n                              <input type=\"email\" class=\"validate\">\n                              <label for=\"email\">Email</label>\n                            </div>\n                            <div class=\"input-field col s12\">\n                              <textarea id=\"message\" class=\"materialize-textarea\"></textarea>\n                              <label for=\"textarea1\">Message</label>\n                            </div>\n                            <button class=\"btn waves-effect waves-light blue\" type=\"submit\" name=\"action\">\n                              Submit\n                              <i class=\"material-icons right\">send</i>\n                            </button>\n                          </form>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n              </div>\n            </div>\n            ",
            directives: [title_1.Title]
        }), 
        __metadata('design:paramtypes', [])
    ], Contact);
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map