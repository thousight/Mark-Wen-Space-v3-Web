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
var index_1 = require("angular2-google-maps/core/index");
var Contact = (function () {
    function Contact(_wrapper) {
        this._wrapper = _wrapper;
        // Title Data
        this.titleIcon = "envelope";
        this.titleTitle = "Contact";
        // Google Maps Data
        this.initLat = 40.45132;
        this.initLng = -86.9451292;
        this.lat = 40.4504718;
        this.lng = -86.9440625;
        this.zoom = 18;
        this.scrollwheel = false;
        this.mapDraggable = true;
        this.center = {
            lat: 40.4493099,
            lng: -86.9465341
        };
        this.email = {
            name: "meh",
            CC: "",
            BCC: "",
            subject: "",
            message: ""
        };
    }
    Contact.prototype.ngAfterContentInit = function () {
        // console.log(this._wrapper.getNativeMap())
        // this._wrapper.getNativeMap().then((m) => {
        //   console.log(m);
        //   m.setCenter(this.center);
        // });
    };
    Contact = __decorate([
        core_1.Component({
            selector: "contact",
            template: "\n            <div id=\"Contact\" class=\"Contact content section scrollspy\">\n              <title [icon]=\"titleIcon\" [title]=\"titleTitle\"></title>\n              <div class=\"contact-content\">\n                <div class=\"row\">\n                  <div class=\"col s12 m12 l8 offset-l2\">\n                    <div class=\"col s12 m6 l6\">\n                      <!-- Contact Info Card -->\n                      <div class=\"card blue\">\n                        <div class=\"contact-info-card card-content white-text\">\n                          <span class=\"card-title\">Get In Touch</span>\n                          <div class=\"contact-info\">\n                            <div class=\"contact-info-icons\">\n                              <i class=\"fa fa-phone\" aria-hidden=\"true\"></i><br>\n                              <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i><br>\n                              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><br>\n                            </div>\n                            <div class=\"contact-info-texts\">\n                              <div>(510) 505-4398</div>\n                              <div>markwenguojie94@gmail.com</div>\n                              <div style=\"line-height: 25px\">2120 McCormick Rd<br>Rm 721<br>West Lafayette, IN 47906</div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- Message Card -->\n                    <div class=\"col s12 m6 l6\">\n                      <div class=\"contact-card card\">\n                        <div class=\"card-content\">\n                          <span class=\"card-title\">Message Me</span>\n                          <form class=\"message-form\" action=\"mailto:markwenguojie94@gmail.com?cc=\" method=\"post\" enctype=\"text/plain\">\n                            <div class=\"input-field col s12\">\n                              <input type=\"text\" class=\"validate\" ngControl=\"name\" required [(NgModel)]=\"email.name\">\n                              <label for=\"name\">Name</label>\n                            </div>\n                            <div class=\"input-field col s12\">\n                              <input type=\"email\" class=\"validate\" ngControl=\"cc\" [(NgModel)]=\"email.CC\">\n                              <label for=\"email\">CC</label>\n                            </div>\n                            <div class=\"input-field col s12\">\n                              <input type=\"email\" class=\"validate\" ngControl=\"bcc\" [(NgModel)]=\"email.BCC\">\n                              <label for=\"email\">BCC</label>\n                            </div>\n                            <div class=\"input-field col s12\">\n                              <input type=\"text\" class=\"validate\" ngControl=\"subject\" required [(NgModel)]=\"email.subject\">\n                              <label for=\"name\">Subject</label>\n                            </div>\n                            <div class=\"input-field col s12\">\n                              <textarea id=\"message\" class=\"materialize-textarea\" ngControl=\"message\" required [(NgModel)]=\"email.message\"></textarea>\n                              <label for=\"textarea1\">Message</label>\n                            </div>\n                            <button class=\"btn waves-effect waves-light blue\" type=\"submit\" name=\"action\">\n                              Submit\n                              <i class=\"material-icons right\">send</i>\n                            </button>\n                          </form>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- Google Maps Card -->\n                    <div class=\"col s12 m12 l12\">\n                      <sebm-google-map\n                        #GoogleMap\n                        class=\"GoogleMap\"\n                        [latitude]=\"initLat\"\n                        [longitude]=\"initLng\"\n                        [zoom]=\"zoom\"\n                        [scrollwheel]=\"scrollwheel\"\n                        [mapDraggable]=\"mapDraggable\">\n                        <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" [label]=\"\">\n                        </sebm-google-map-marker>\n                      </sebm-google-map>\n                      <button\n                      id=\"GoogleMapHiddenButton\"\n                      (click)=\"GoogleMap.triggerResize()\"\n                      style=\"visibility: hidden\">resize</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            ",
            directives: [title_1.Title, index_1.GOOGLE_MAPS_DIRECTIVES],
            providers: [index_1.GoogleMapsAPIWrapper]
        }), 
        __metadata('design:paramtypes', [index_1.GoogleMapsAPIWrapper])
    ], Contact);
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map