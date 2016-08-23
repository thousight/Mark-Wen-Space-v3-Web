import { Component } from "@angular/core";
import { Title } from "./components/title";
import { GOOGLE_MAPS_DIRECTIVES, GOOGLE_MAPS_PROVIDERS, SebmGoogleMap, SebmGoogleMapMarker } from "angular2-google-maps/core/index";
import { GoogleMapsAPIWrapper } from "angular2-google-maps/core/services/google-maps-api-wrapper";

@Component({
  selector: "contact",
  template: `
            <div id="Contact" class="Contact content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
              <div class="contact-content">
                <div class="row">
                  <div class="col s12 m12 l8 offset-l2">
                    <div class="col s12 m6 l6">
                      <!-- Contact Info Card -->
                      <div class="card blue">
                        <div class="contact-info-card card-content white-text">
                          <span class="card-title">Get In Touch</span>
                          <div class="contact-info">
                            <div class="contact-info-icons">
                              <i class="fa fa-phone" aria-hidden="true"></i><br>
                              <i class="fa fa-envelope-o" aria-hidden="true"></i><br>
                              <i class="fa fa-map-marker" aria-hidden="true"></i><br>
                            </div>
                            <div class="contact-info-texts">
                              <div>(510) 505-4398</div>
                              <div>markwenguojie94@gmail.com</div>
                              <div style="line-height: 25px">2120 McCormick Rd<br>Rm 721<br>West Lafayette, IN 47906</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Message Card -->
                    <div class="col s12 m6 l6">
                      <div class="contact-card card">
                        <div class="card-content">
                          <span class="card-title">Message Me</span>
                          <form class="message-form">
                            <div class="input-field col s12">
                              <input type="text" class="validate">
                              <label for="name">Name</label>
                            </div>
                            <div class="input-field col s12">
                              <input type="email" class="validate">
                              <label for="email">Email</label>
                            </div>
                            <div class="input-field col s12">
                              <textarea id="message" class="materialize-textarea"></textarea>
                              <label for="textarea1">Message</label>
                            </div>
                            <button class="btn waves-effect waves-light blue" type="submit" name="action">
                              Submit
                              <i class="material-icons right">send</i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <!-- Google Maps Card -->
                    <div class="col s12 m12 l12">
                      <sebm-google-map
                        #GoogleMap
                        class="GoogleMap"
                        [latitude]="initLat"
                        [longitude]="initLng"
                        [zoom]="zoom"
                        [scrollwheel]="scrollwheel"
                        [mapDraggable]="mapDraggable">
                        <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="">
                        </sebm-google-map-marker>
                      </sebm-google-map>
                      <button
                      id="GoogleMapHiddenButton"
                      (click)="showMap = true; GoogleMap.triggerResize()"
                      style="visibility: hidden">resize</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `,
  directives: [Title, GOOGLE_MAPS_DIRECTIVES]
})

export class Contact {
  // Title Data
  private titleIcon = "envelope";
  private titleTitle = "Contact";

  // Google Maps Data
  initLat: number = 40.4533961;
  initLng: number = -86.9616737;
  lat: number = 40.4493099;
  lng: number = -86.9465341;
  zoom: number = 16;
  scrollwheel: boolean = false;
  mapDraggable: boolean = true;

  constructor(private _wrapper: GoogleMapsAPIWrapper) {
    this._wrapper.getNativeMap().then((m) => {
      // m.setCenter(new m.LatLng(40.4533961, -86.9616737))
      console.log(m);
    });
  }
}
