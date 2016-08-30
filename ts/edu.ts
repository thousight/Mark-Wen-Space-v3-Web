import { Component, Input } from "@angular/core";
import { Title } from "./components/title";
import { Timeline } from "./components/timeline";

@Component({
  selector: "edu",
  template: `
            <div id="Edu" class="Edu content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
              <timeline [data]="edu"></timeline>
            </div>
            `,
  directives: [Title, Timeline]
})

export class Edu {
  private titleIcon = "graduation-cap";
  private titleTitle = "Education";
  @Input("data") edu: Array<Object>;
}
