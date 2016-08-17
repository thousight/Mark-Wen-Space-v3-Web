import { Component } from "@angular/core";
import { HomeIcons } from "./components/home-icons";

@Component({
  selector: "home",
  template: `
            <div id="Home" class="Home content section scrollspy">
              <div class="home-content-wrapper">
                <h1 class="home-title no-select">Mark Wen</h1>
                <h3 class="home-subtitle no-select">Web and Mobile Developer</h3>
                <home-icons></home-icons>
              </div>
            </div>
            `,
  directives: [HomeIcons]
})

export class Home {}
