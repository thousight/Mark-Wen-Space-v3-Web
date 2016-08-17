import { Component } from "@angular/core";
import { OnLoad } from "./onLoad/onLoad";
import { NavBar } from "./navBar/navBar";
import { Home } from "./home/home";
import { About } from "./about/about";
import { Exp } from "./exp/exp";
declare var $: any;

@Component({
  selector: "app",
  template: `
            <!-- List all the main components inside div -->
            <div class="app content" [hidden]="hidden">
              <home></home>
              <navBar></navBar>
              <about></about>
              <exp></exp>
            </div>

            <!-- List other components here -->
            <onLoad [hidden]="!hidden"></onLoad>
            `,
  directives: [OnLoad, NavBar, Home, About, Exp]
})

export class App {
  private hidden = true;
  timeout = null;

  ngAfterContentInit() {
    // Initialize Spyscroll
    $(document).ready(() => {
      $(".scrollspy").scrollSpy({
        scrollOffset: 0
      });
    });
  }

  ngAfterContentChecked() {
    // Change loading screen to main content with 1s delay
    this.timeout = setTimeout(() => {
        this.hidden = false; // Dismiss loading screen
        $(".app").fadeIn(1500); // Fading animation
        clearTimeout(this.timeout); // Clear out timeout
      }, 1000);
  }
}
