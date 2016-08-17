import { Component, Input } from "@angular/core";

@Component({
  selector: "timeline",
  template: `
              <div class="Timeline">
                <div class="grayLine"></div>
                <div *ngFor="let data of data" class="timeline-content">
                  <div class="row">
                    <div class="col s12 m4 l5">
                      <div class="card horizontal hoverable">
                        <div class="card-image waves-effect waves-block waves-light timeline-card-image">
                          <img class="activator" src="../../{{data.image}}">
                        </div>
                        <div class="card-stacked">
                          <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">{{data.organization}}<i class="material-icons right">more_vert</i></span>
                            <p>{{data.time}}</p>
                          </div>
                          <div class="card-reveal">
                            <div class="timeline-desc" *ngFor="let bullet of desc">
                              <i class="material-icons right">close</i>
                              {{bullet}}
                            </div>
                          </div>
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
