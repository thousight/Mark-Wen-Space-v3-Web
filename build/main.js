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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var index_1 = require("angular2-google-maps/core/index");
var _1 = require("./");
var app_1 = require("./app");
// enableProdMode();
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.NgForm],
            declarations: [app_1.App, _1.Contact],
            bootstrap: [app_1.App, [http_1.HTTP_PROVIDERS, index_1.GOOGLE_MAPS_PROVIDERS, core_1.provide(index_1.LazyMapsAPILoaderConfig, { useFactory: function () {
                            var config = new index_1.LazyMapsAPILoaderConfig();
                            config.apiKey = "AIzaSyDaHC-kWCYUvx7kgLEFy_pgacY3aeiA5xk";
                            return config;
                        } })]]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=main.js.map