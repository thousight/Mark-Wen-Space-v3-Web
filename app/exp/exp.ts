import { Component } from "@angular/core";
import { Title } from "../components/title/title";

@Component({
  selector: "exp",
  template: `
            <div id="Exp" class="Exp content section scrollspy">
              <title [icon]="icon" [title]="title"></title>
            </div>
            `,
  directives: [Title]
})

export class Exp {
  icon: string = "briefcase";
  title: string = "Experience";
}
