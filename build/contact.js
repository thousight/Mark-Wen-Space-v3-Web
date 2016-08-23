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
var google_maps_api_wrapper_1 = require("angular2-google-maps/core/services/google-maps-api-wrapper");
var Contact = (function () {
    function Contact(_wrapper) {
        this._wrapper = _wrapper;
        // Title Data
        this.titleIcon = "envelope";
        this.titleTitle = "Contact";
        // Google Maps Data
        this.initLat = 40.4533961;
        this.initLng = -86.9616737;
        this.lat = 40.4493099;
        this.lng = -86.9465341;
        this.zoom = 16;
        this.scrollwheel = false;
        this.mapDraggable = true;
        this._wrapper.getNativeMap().then(function (m) {
            // m.setCenter(new m.LatLng(40.4533961, -86.9616737))
            console.log(m);
        });
    }
    Contact = __decorate([
        core_1.Component({
            selector: "contact",
            template: "\n            <div id=\"Contact\" class=\"Contact content section scrollspy\">\n              <title [icon]=\"titleIcon\" [title]=\"titleTitle\"></title>\n              <div class=\"contact-content\">\n                <div class=\"row\">\n                  <div class=\"col s12 m12 l8 offset-l2\">\n                    <div class=\"col s12 m6 l6\">\n                      <!-- Contact Info Card -->\n                      <div class=\"card blue\">\n                        <div class=\"contact-info-card card-content white-text\">\n                          <span class=\"card-title\">Get In Touch</span>\n                          <div class=\"contact-info\">\n                            <div class=\"contact-info-icons\">\n                              <i class=\"fa fa-phone\" aria-hidden=\"true\"></i><br>\n                              <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i><br>\n                              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><br>\n                            </div>\n                            <div class=\"contact-info-texts\">\n                              <div>(510) 505-4398</div>\n                              <div>markwenguojie94@gmail.com</div>\n                              <div style=\"line-height: 25px\">2120 McCormick Rd<br>Rm 721<br>West Lafayette, IN 47906</div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- Message Card -->\n                    <div class=\"col s12 m6 l6\">\n                      <div class=\"contact-card card\">\n                        <div class=\"card-content\">\n                          <span class=\"card-title\">Message Me</span>\n                          <form class=\"message-form\">\n                            <div class=\"input-field col s12\">\n                              <input type=\"text\" class=\"validate\">\n                              <label for=\"name\">Name</label>\n                            </div>\n                            <div class=\"input-field col s12\">\n                              <input type=\"email\" class=\"validate\">\n                              <label for=\"email\">Email</label>\n                            </div>\n                            <div class=\"input-field col s12\">\n                              <textarea id=\"message\" class=\"materialize-textarea\"></textarea>\n                              <label for=\"textarea1\">Message</label>\n                            </div>\n                            <button class=\"btn waves-effect waves-light blue\" type=\"submit\" name=\"action\">\n                              Submit\n                              <i class=\"material-icons right\">send</i>\n                            </button>\n                          </form>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- Google Maps Card -->\n                    <div class=\"col s12 m12 l12\">\n                      <sebm-google-map\n                        #GoogleMap\n                        class=\"GoogleMap\"\n                        [latitude]=\"initLat\"\n                        [longitude]=\"initLng\"\n                        [zoom]=\"zoom\"\n                        [scrollwheel]=\"scrollwheel\"\n                        [mapDraggable]=\"mapDraggable\">\n                        <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" [label]=\"\">\n                        </sebm-google-map-marker>\n                      </sebm-google-map>\n                      <button\n                      id=\"GoogleMapHiddenButton\"\n                      (click)=\"showMap = true; GoogleMap.triggerResize()\"\n                      style=\"visibility: hidden\">resize</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            ",
            directives: [title_1.Title, index_1.GOOGLE_MAPS_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper])
    ], Contact);
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map