import { Component, Input } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Title } from "./components/title";

@Component({
  selector: "skills",
  template: `
            <div id="Skills" class="Skills content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
              <div class="row">
                <div class="col s12 m12 l8 offset-l2" *ngFor="let skillcat of skills">
                  <div class="col s12 m6 l4 card-panel blue hoverable">
                    <div class="card-content white-text">
                      <span class="card-title">{{skillcat.skillsCat}}</span>
                      <div class="skillsCat-skills" *ngFor="let skill of skillcat.skill;">
                        {{skill.skillName}}: {{skill.percent}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `,
  directives: [Title]
})

export class Skills {
  private titleIcon = "code";
  private titleTitle = "Skills";
  @Input("data") skills: Array<Object>;
}
