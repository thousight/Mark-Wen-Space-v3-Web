"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("angular2-google-maps/core");
var app_module_1 = require("./app.module");
// enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, { provide: (core_1.LazyMapsAPILoaderConfig, { useFactory: function () {
            var config = new core_1.LazyMapsAPILoaderConfig();
            config.apiKey = "AIzaSyDaHC-kWCYUvx7kgLEFy_pgacY3aeiA5xk";
            return config;
        } }) });
//# sourceMappingURL=main.js.map