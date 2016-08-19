import { Component, Input } from "@angular/core";

@Component({
  selector: "timeline",
  template: `
              <div class="Timeline">
                <div class="grayLine"></div>
                <div class="timeline-content">
                  <div *ngFor="let data of data; let odd = odd; let even = even">
                    <div class="row" style="margin-bottom: 0px">
                      <div class="col s12 m6 l4" [ngClass]="{ 'offset-l6 offset-m6 timeline-card-right': odd, 'offset-l2': even }">
                        <div class="timeline-pointer">
                          <div class="pointer-circle"></div>
                        </div>
                        <div class="timeline-card card horizontal hoverable">
                          <div class="card-image waves-effect waves-block waves-light">
                            <img class="timeline-card-image activator" src="../../{{data.image}}" >
                          </div>
                          <div class="timeline-card-content card-content">
                            <span class="card-title grey-text text-darken-4" style="line-height: 25px">{{data.organization || data.title}}</span>
                            <p class="timeline-data-location grey-text text-darken-1" style="margin-top: 5px">{{data.city}}, {{data.state}}</p>
                            <p style="margin-top: 5px">{{data.degree}}</p>
                            <p style="margin-top: 5px" *ngIf="!data.degree">{{data.title}}</p>
                            <p style="margin-top: 5px">{{data.others}}</p>
                            <p style="margin-top: 5px" *ngIf="data.GPA">GPA: {{data.GPA}}</p>
                            <p style="margin-top: 5px">{{data.time}}</p>
                          </div>
                          <div class="card-reveal" *ngIf="data.desc">
                            <i class="timeline-reveal-close material-icons card-title">close</i>
                            <div class="timeline-desc">
                              <span class="timeline-card-title card-title" style="line-height: 25px">{{data.organization}}</span>
                              <ul *ngFor="let bullet of data.desc">
                                <li>{{bullet}}</li>
                              </ul>
                            </div>
                          </div>
                          <i class="timeline-more-button material-icons activator" *ngIf="data.desc">more_vert</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `
})

export class Timeline {
  @Input("icon") icon: string;
  @Input("title") title: string;
  @Input() data: Array<Object>;
}
