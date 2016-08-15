import { Component } from "@angular/core";

@Component({
  selector: "about",
  template: `
            <div id="About" class="About content section scrollspy">
              <div class="coverPhoto"></div>
              <div class="aboutCard row">
                <div class="col s12 m12 l8 offset-l2">
                  <div class="card">
                    <div class="card-content">
                      <span class="card-title">Hi, I'm Mark!</span>
                      <p>
                        This is my personal resume website.
                        I'm a CNIT Junior student in Purdue University.
                        I enjoy website and application design, technology review, and playing badminton.
                      </p>
                    </div>
                    <div class="card-action">
                      <a href="../../file/Guojie Wen Resume.pdf">Download Resume</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `
})

export class About {}
