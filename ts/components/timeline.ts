import { Component, Input } from "@angular/core";

@Component({
  selector: "timeline",
  template: `
              <div class="Timeline">
                <div class="grayLine"></div>
                <div class="timeline-content">
                  <div *ngFor="let data of data">
                    <div class="row" style="margin-bottom: 0px">
                      <div class="col s12 m6 l4 offset-l2">
                        <div class="card horizontal hoverable">
                          <div class="card-image waves-effect waves-block waves-light">
                            <img class="timeline-card-image activator" src="../../{{data.image}}" >
                          </div>
                          <div class="timeline-card-content card-content">
                            <span class="card-title grey-text text-darken-4" style="line-height: 25px">{{data.organization}}</span>
                            <p class="timeline-data-location grey-text text-darken-1" style="margin-top: 5px">{{data.city}}, {{data.state}}</p>
                            <p style="margin-top: 5px">{{data.title}}</p>
                            <p style="margin-top: 5px">{{data.time}}</p>
                          </div>
                          <div class="card-reveal">
                            <i class="timeline-reveal-close material-icons card-title">close</i>
                            <div class="timeline-desc">
                              <span class="timeline-card-title card-title" style="line-height: 25px">{{data.organization}}</span>
                              <ul *ngFor="let bullet of data.desc">
                                <li>{{bullet}}</li>
                              </ul>
                            </div>
                          </div>
                          <i class="timeline-more-button material-icons activator">more_vert</i>
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
