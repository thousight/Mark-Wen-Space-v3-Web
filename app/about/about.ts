import { Component } from "@angular/core";

@Component({
  selector: "about",
  template: `
            <div id="About" class="About content section scrollspy">
              <div class="coverPhoto"></div>
              <div class="aboutCard row">
                <div class="col s12 m12 l8 offset-l2">
                  <div class="card center">
                    <div class="about-upper-card-content card-content">
                    <div class="profilePic"></div>
                      <span class="card-title">Hi, I'm Mark!</span>
                      <p class="card-paragraph">
                        My legal name is Guojie Wen, since my Chinese name is 温国杰.
                        I'm pursuing my bachelor degree as a 3rd-year Computer and Information Technology in Purdue University.
                        I'm passionate in developing and designing website and applications, because every detail worths tweaking, and it's always an enjoyable process.
                      </p>
                    </div>
                    <div class="card-action">
                      <a href="../../file/Guojie Wen Resume.pdf" target="_blank">Download Resume</a>
                      <a href="#Contact">Contact Me</a>
                    </div>
                  </div>
                </div>

                <div class="col s12 m12 l8 offset-l2">
                  <div class="about-lower-card card center">
                    <div class="row">
                      <h6 class="left">Hobbies:</h6>
                    </div>
                    <div class="about-lower-card-content card-content row">
                      <div class="col s6 m3 l3">
                        <i class="about-icon fa fa-camera fa-2x" aria-hidden="true"></i>
                        <p>Photography</p>
                      </div>
                      <div class="col s6 m3 l3">
                      <i class="about-icon fa fa-mobile fa-2x" aria-hidden="true"></i>
                        <p>Tech Review</p>
                      </div>
                      <div class="col s6 m3 l3">
                        <i class="about-icon fa fa-laptop fa-2x" aria-hidden="true"></i>
                        <p>Coding</p>
                      </div>
                      <div class="col s6 m3 l3">
                        <i class="about-icon fa fa-car fa-2x" aria-hidden="true"></i>
                        <p>Roadtrip</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `
})

export class About {
  ngOnInit() {
    // Bring the card content down to make space for profile picture
    $(".about-upper-card-content").css({"padding-top": "70px"});
    // Initialize some CSS through jQuery since they don't work when written in stylesheets for some reason
    $(".card-paragraph").css({"margin-top": "18px"});
    $(".about-lower-card").css({"padding": "20px 20px 0px 20px"});
  }
}
