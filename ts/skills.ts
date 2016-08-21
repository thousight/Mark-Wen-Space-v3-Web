import { Component, Input } from "@angular/core";
import { NgStyle } from '@angular/common';
import { Title } from "./components/title";

@Component({
  selector: "skills",
  template: `
            <div id="Skills" class="Skills content section scrollspy">
              <title [icon]="titleIcon" [title]="titleTitle"></title>
              <div class="row">
                <div class="col s12 m12 l8 offset-l2">
                  <div class="col s12 m6 l4 skills-card card-panel blue hoverable" *ngFor="let skillcat of skills">
                    <div class="card-content white-text">
                      <div class="skills-card-title">
                        <div class="card-title">{{skillcat.skillsCat}}</div>
                      </div>
                      <div class="skills-content">
                        <div class="skillsCat-skills" *ngFor="let skill of skillcat.skill;">
                          <span>{{skill.skillName}} </span>
                          <div class="skill-percent">
                            <div class="progress skill-progress">
                              <div class="determinate white" [ngStyle]="{'width': skill.percent + '%'}"></div>
                            </div>
                            <div class="skill-number right">
                              {{skill.percent}}%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `,
  directives: [NgStyle, Title]
})

export class Skills {
  private titleIcon = "code";
  private titleTitle = "Skills";
  @Input("data") skills: Array<Object>;
}
