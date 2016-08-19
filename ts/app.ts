import { Component } from "@angular/core";
import { OnLoad } from "./components/onLoad";
import { NavBar } from "./components/navBar";
import { Home } from "./home";
import { About } from "./about";
import { Exp } from "./exp";
import { Portfolio } from "./portfolio";
import { Edu } from "./edu";
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
              <portfolio></portfolio>
              <edu></edu>
            </div>

            <!-- List other components here -->
            <onLoad [hidden]="!hidden"></onLoad>
            `,
  directives: [OnLoad, NavBar, Home, About, Exp, Portfolio, Edu]
})

export class App {
  private hidden = true;
  timeout = null;

  ngAfterContentInit() {
    // Initialize Spyscroll
    $(".scrollspy").scrollSpy({
      scrollOffset: 0
    });
  }

  ngAfterContentChecked() {
    // Change loading screen to main content with 1s delay
    this.timeout = setTimeout(() => {
        this.hidden = false; // Dismiss loading screen
        $(".app").fadeIn(1500); // Fading animation
        clearTimeout(this.timeout); // Clear out timeout
      }, 1500);
  }
}
