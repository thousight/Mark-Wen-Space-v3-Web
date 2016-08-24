import { bootstrap } from "@angular/platform-browser-dynamic";
import { HTTP_PROVIDERS } from "@angular/http";
import { NgModule, enableProdMode, provide } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgForm } from "@angular/forms";
import { GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig } from "angular2-google-maps/core/index";
import { Contact } from "./contact"
import { App } from "./app";

// enableProdMode();

@NgModule({
  imports: [ BrowserModule, NgForm ],
  declarations: [ App, Contact ],
  bootstrap: [ App, [HTTP_PROVIDERS, GOOGLE_MAPS_PROVIDERS, provide(LazyMapsAPILoaderConfig, {useFactory: () => {
      let config = new LazyMapsAPILoaderConfig();
      config.apiKey = "AIzaSyDaHC-kWCYUvx7kgLEFy_pgacY3aeiA5xk";
      return config;
    }})] ]
})

// bootstrap();
export class App {}
