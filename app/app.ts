import { Component } from "@angular/core";
import { OnLoad } from "./onLoad";
import { Home } from "./home/home";

@Component({
  selector: "app",
  template: `
            <!-- List all the main components inside div -->
            <div class="content" [hidden]="hidden">
              <home></home>
            </div>

            <!-- List other components here -->
            <onLoad [hidden]="!hidden"></onLoad>
            `,
  directives: [OnLoad, Home]
})

export class App {
  hidden = true;
  timeout = null;

  ngAfterContentInit() {
    this.timeout = setTimeout(() => {
        this.hidden = false;
        clearTimeout(this.timeout);
      }, 1000);
  }
}
