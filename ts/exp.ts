import { Component, Input } from "@angular/core";
import { Title } from "./components/title";
import { Timeline } from "./components/timeline";

@Component({
  selector: "exp",
  template: `
            <div id="Exp" class="Exp content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
              <timeline [timelineData]="exp"></timeline>
            </div>
            `,
  directives: [Title, Timeline]
})

export class Exp {
  private titleIcon = "briefcase";
  private titleTitle = "Experience";
  @Input("ExpData") exp: Array<Object>;
}
