"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var index_1 = require("angular2-google-maps/core/index");
var app_1 = require("./app");
// enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_1.App, [index_1.GOOGLE_MAPS_PROVIDERS, core_1.provide(index_1.LazyMapsAPILoaderConfig, { useFactory: function () {
            var config = new index_1.LazyMapsAPILoaderConfig();
            config.apiKey = "AIzaSyDaHC-kWCYUvx7kgLEFy_pgacY3aeiA5xk";
            return config;
        } })]);
//# sourceMappingURL=main.js.map