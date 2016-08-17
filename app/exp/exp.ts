import { Component } from "@angular/core";
import { Title } from "../components/title/title";
import { Timeline } from "../components/timeline/timeline";

@Component({
  selector: "exp",
  template: `
            <div id="Exp" class="Exp content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
              <timeline></timeline>
            </div>
            `,
  directives: [Title, Timeline]
})

export class Exp {
  private titleIcon = "briefcase";
  private titleTitle = "Experience";
}
