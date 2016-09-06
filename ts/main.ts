import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { LazyMapsAPILoaderConfig } from "angular2-google-maps/core";
import { AppModule } from "./app.module";

// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule, {provide: (LazyMapsAPILoaderConfig, {useFactory: () => {
    let config = new LazyMapsAPILoaderConfig();
    config.apiKey = "AIzaSyDaHC-kWCYUvx7kgLEFy_pgacY3aeiA5xk";
    return config;
  }})});
