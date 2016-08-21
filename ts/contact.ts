import { Component } from "@angular/core";
import { Title } from "./components/title";

@Component({
  selector: "contact",
  template: `
            <div id="Contact" class="Contact content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
            </div>
            `,
  directives: [Title]
})

export class Contact {
  private titleIcon = "envelope";
  private titleTitle = "Contact";
}
