import { Component } from "@angular/core";
import { OnLoad } from "./onLoad/onLoad";
import { Home } from "./home/home";
import { About } from "./about/about";
declare var $: any;

@Component({
  selector: "app",
  template: `
            <!-- List all the main components inside div -->
            <div class="app content" [hidden]="hidden">
              <home></home>
              <about></about>
            </div>

            <!-- List other components here -->
            <onLoad [hidden]="!hidden"></onLoad>
            `,
  directives: [OnLoad, Home, About]
})

export class App {
  private hidden = true;
  timeout = null;

  ngAfterContentInit() {
    // Change loading screen to main content with 1s delay
    this.timeout = setTimeout(() => {
        this.hidden = false; // Dismiss loading screen
        $(".app").fadeIn(1500); // Fading animation
        clearTimeout(this.timeout); // Clear out timeout
      }, 1000);

    // Initialize ScrollSpy
    $(document).ready(function(){
      $(".scrollspy").scrollSpy();
    });
  }
}
