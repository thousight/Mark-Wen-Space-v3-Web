import { Component } from "@angular/core";
import { Title } from "./components/title";

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
                      <div id="GoogleMap" class="GoogleMap"></div>
                      <script>

                      </script>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `,
  directives: [Title]
})

export class Contact {
  private titleIcon = "envelope";
  private titleTitle = "Contact";

  ngOnViewInit() {
    let map;
    window.initMap = () => {
      map = new google.maps.Map(document.getElementById('GoogleMap'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
      console.log('maps')
    }
  }
}
