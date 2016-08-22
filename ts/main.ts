import { bootstrap } from "@angular/platform-browser-dynamic";
import { HTTP_PROVIDERS } from "@angular/http";
import { enableProdMode, provide } from '@angular/core';
import { GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig } from 'angular2-google-maps/core/index';
import { App } from "./app";

// enableProdMode();

bootstrap(App, [HTTP_PROVIDERS, GOOGLE_MAPS_PROVIDERS, provide(LazyMapsAPILoaderConfig, {useFactory: () => {
    let config = new LazyMapsAPILoaderConfig();
    config.apiKey = 'AIzaSyDaHC-kWCYUvx7kgLEFy_pgacY3aeiA5xk';
    return config;
  }})]);
