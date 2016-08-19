import { Component, Input } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Title } from "./components/title";

@Component({
  selector: "portfolio",
  template: `
            <div id="Portfolio" class="Portfolio content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
            </div>
            `,
  directives: [Title]
})

export class Portfolio {
  private titleIcon = "folder-open";
  private titleTitle = "Portfolio";
  @Input("data") portfolio: Array<Object>;
}
