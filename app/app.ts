import { Component } from "@angular/core";
import { OnLoad } from "./onLoad";
import { Home } from "./home/home";

@Component({
  selector: "app",
  template: `
            <!-- List all the main components here -->
            <home></home>

            <!-- List other components here -->
            <onLoad></onLoad>
            `,
  directives: [OnLoad, Home]
})

export class App {}
