import { Component, Input } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Title } from "./components/title";

@Component({
  selector: "skills",
  template: `
            <div id="Skills" class="Skills content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
            </div>
            `,
  directives: [Title]
})

export class Skills {
  private titleIcon = "folder-open";
  private titleTitle = "Skills";
  @Input("data") skills: Array<Object>;
}
