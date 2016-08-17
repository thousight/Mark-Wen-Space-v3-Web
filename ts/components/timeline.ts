import { Component, Input } from "@angular/core";

@Component({
  selector: "timeline",
  template: `
              <div class="Timeline">
                <div class="grayLine"></div>
                <div *ngFor="let data of data" class="timeline-content">
                  <!-- {{data.time}} -->
                </div>
              </div>
            `
})

export class Timeline {
  @Input("icon") icon: string;
  @Input("title") title: string;
  @Input() data: Array<Object>;
}
